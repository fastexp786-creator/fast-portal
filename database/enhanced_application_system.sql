-- Additional SQL commands for the application system

-- 1. Create function to generate unique tracking IDs
CREATE OR REPLACE FUNCTION generate_tracking_id()
RETURNS TEXT AS $$
BEGIN
    RETURN 'APP-'::TEXT || EXTRACT(EPOCH FROM NOW())::BIGINT::TEXT || '-'::TEXT || upper(substring(md5(random()::text), 1, 6));
END;
$$ LANGUAGE plpgsql;

-- 2. Create trigger to auto-generate tracking_id
CREATE OR REPLACE FUNCTION set_tracking_id()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.tracking_id IS NULL THEN
        NEW.tracking_id := generate_tracking_id();
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 3. Add trigger to applications table
DROP TRIGGER IF EXISTS applications_set_tracking_id ON applications;
CREATE TRIGGER applications_set_tracking_id
    BEFORE INSERT ON applications
    FOR EACH ROW
    EXECUTE FUNCTION set_tracking_id();

-- 4. Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 5. Add trigger for updated_at
DROP TRIGGER IF EXISTS applications_update_updated_at ON applications;
CREATE TRIGGER applications_update_updated_at
    BEFORE UPDATE ON applications
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- 6. Create view for application statistics
CREATE OR REPLACE VIEW application_stats AS
SELECT 
    COUNT(*) as total_applications,
    COUNT(CASE WHEN status = 'pending' THEN 1 END) as pending_applications,
    COUNT(CASE WHEN status = 'under_review' THEN 1 END) as under_review_applications,
    COUNT(CASE WHEN status = 'shortlisted' THEN 1 END) as shortlisted_applications,
    COUNT(CASE WHEN status = 'rejected' THEN 1 END) as rejected_applications,
    COUNT(CASE WHEN status = 'hired' THEN 1 END) as hired_applications,
    DATE_TRUNC('month', created_at) as month
FROM applications
GROUP BY DATE_TRUNC('month', created_at)
ORDER BY month DESC;

-- 7. Create function to get seeker's applications
CREATE OR REPLACE FUNCTION get_seeker_applications(seeker_uuid UUID)
RETURNS TABLE (
    id UUID,
    job_id TEXT,
    job_title TEXT,
    company_name TEXT,
    status TEXT,
    tracking_id TEXT,
    created_at TIMESTAMP WITH TIME ZONE,
    resume_url TEXT
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        a.id,
        a.job_id,
        j.title as job_title,
        j.company as company_name,
        a.status,
        a.tracking_id,
        a.created_at,
        a.resume_url
    FROM applications a
    LEFT JOIN jobs_data j ON a.job_id = j.id
    WHERE a.seeker_id = seeker_uuid
    ORDER BY a.created_at DESC;
END;
$$ LANGUAGE plpgsql;

-- 8. Create function for vendors to get applications for their jobs
CREATE OR REPLACE FUNCTION get_vendor_applications(vendor_email TEXT)
RETURNS TABLE (
    id UUID,
    job_id TEXT,
    job_title TEXT,
    applicant_name TEXT,
    applicant_email TEXT,
    applicant_phone TEXT,
    status TEXT,
    tracking_id TEXT,
    created_at TIMESTAMP WITH TIME ZONE,
    resume_url TEXT
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        a.id,
        a.job_id,
        j.title as job_title,
        a.full_name as applicant_name,
        a.email as applicant_email,
        a.phone as applicant_phone,
        a.status,
        a.tracking_id,
        a.created_at,
        a.resume_url
    FROM applications a
    JOIN jobs_data j ON a.job_id = j.id
    WHERE j.vendor_contact = vendor_email
    ORDER BY a.created_at DESC;
END;
$$ LANGUAGE plpgsql;

-- 9. Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_applications_created_at ON applications(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_applications_job_status ON applications(job_id, status);

-- 10. Create table for application status history
CREATE TABLE IF NOT EXISTS application_status_history (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    application_id UUID NOT NULL REFERENCES applications(id) ON DELETE CASCADE,
    old_status TEXT,
    new_status TEXT NOT NULL,
    changed_by UUID REFERENCES auth.users(id),
    changed_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    notes TEXT
);

-- Add indexes for status history
CREATE INDEX IF NOT EXISTS idx_application_status_history_app_id ON application_status_history(application_id);
CREATE INDEX IF NOT EXISTS idx_application_status_history_changed_at ON application_status_history(changed_at DESC);

-- Enable RLS for status history
ALTER TABLE application_status_history ENABLE ROW LEVEL SECURITY;

-- Policies for status history
CREATE POLICY "Users can view their application status history" ON application_status_history
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM applications 
            WHERE applications.id = application_status_history.application_id 
            AND applications.seeker_id = auth.uid()
        )
    );

CREATE POLICY "Vendors can view status history for their jobs" ON application_status_history
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM applications a
            JOIN jobs_data j ON a.job_id = j.id
            WHERE a.id = application_status_history.application_id 
            AND j.vendor_contact IN (
                SELECT email FROM seeker_registrations 
                WHERE user_id = auth.uid()
            )
        )
    );

-- 11. Create trigger to log status changes
CREATE OR REPLACE FUNCTION log_application_status_change()
RETURNS TRIGGER AS $$
BEGIN
    IF OLD.status IS DISTINCT FROM NEW.status THEN
        INSERT INTO application_status_history (application_id, old_status, new_status, changed_by)
        VALUES (NEW.id, OLD.status, NEW.status, auth.uid());
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add trigger for status change logging
DROP TRIGGER IF EXISTS applications_log_status_change ON applications;
CREATE TRIGGER applications_log_status_change
    AFTER UPDATE ON applications
    FOR EACH ROW
    EXECUTE FUNCTION log_application_status_change();

-- 12. Add comments for documentation
COMMENT ON TABLE application_status_history IS 'History of application status changes';
COMMENT ON COLUMN application_status_history.old_status IS 'Previous status before change';
COMMENT ON COLUMN application_status_history.new_status IS 'New status after change';
COMMENT ON COLUMN application_status_history.changed_by IS 'User who made the status change';
COMMENT ON COLUMN application_status_history.notes IS 'Optional notes about the status change';

COMMENT ON FUNCTION generate_tracking_id() IS 'Generates unique tracking ID for applications';
COMMENT ON FUNCTION get_seeker_applications(UUID) IS 'Returns all applications for a specific seeker';
COMMENT ON FUNCTION get_vendor_applications(TEXT) IS 'Returns all applications for jobs posted by a vendor';

-- 13. Create materialized view for application analytics (optional)
CREATE MATERIALIZED VIEW IF NOT EXISTS application_analytics AS
SELECT 
    DATE_TRUNC('day', created_at) as application_date,
    COUNT(*) as daily_applications,
    COUNT(CASE WHEN status = 'pending' THEN 1 END) as pending_count,
    COUNT(CASE WHEN status = 'under_review' THEN 1 END) as under_review_count,
    COUNT(CASE WHEN status = 'shortlisted' THEN 1 END) as shortlisted_count,
    COUNT(CASE WHEN status = 'rejected' THEN 1 END) as rejected_count,
    COUNT(CASE WHEN status = 'hired' THEN 1 END) as hired_count
FROM applications
GROUP BY DATE_TRUNC('day', created_at)
ORDER BY application_date DESC;

-- Create unique index for materialized view
CREATE UNIQUE INDEX IF NOT EXISTS idx_application_analytics_date ON application_analytics(application_date);

-- Function to refresh materialized view
CREATE OR REPLACE FUNCTION refresh_application_analytics()
RETURNS void AS $$
BEGIN
    REFRESH MATERIALIZED VIEW CONCURRENTLY application_analytics;
END;
$$ LANGUAGE plpgsql;

-- Grant permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO anon, authenticated;
GRANT SELECT ON ALL VIEWS IN SCHEMA public TO anon, authenticated;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO authenticated;
