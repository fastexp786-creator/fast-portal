-- Complete Application System - Run this file in Supabase SQL Editor
-- This file contains everything needed for the application system

-- 1. First create the applications table (if not exists)
CREATE TABLE IF NOT EXISTS applications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    job_id TEXT NOT NULL,
    seeker_id UUID REFERENCES auth.users(id),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    location TEXT NOT NULL,
    cover_letter TEXT,
    resume_url TEXT,
    status TEXT DEFAULT 'pending',
    tracking_id TEXT UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 2. Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_applications_job_id ON applications(job_id);
CREATE INDEX IF NOT EXISTS idx_applications_seeker_id ON applications(seeker_id);
CREATE INDEX IF NOT EXISTS idx_applications_status ON applications(status);
CREATE INDEX IF NOT EXISTS idx_applications_tracking_id ON applications(tracking_id);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- 4. Create policies for applications table
CREATE POLICY "Users can view their own applications" ON applications
    FOR SELECT USING (auth.uid() = seeker_id);

CREATE POLICY "Users can insert their own applications" ON applications
    FOR INSERT WITH CHECK (auth.uid() = seeker_id);

CREATE POLICY "Users can update their own applications" ON applications
    FOR UPDATE USING (auth.uid() = seeker_id);

-- 5. Create function to generate unique tracking IDs
CREATE OR REPLACE FUNCTION generate_tracking_id()
RETURNS TEXT AS $$
BEGIN
    RETURN 'APP-' || EXTRACT(EPOCH FROM NOW())::TEXT || '-' || upper(substring(md5(random()::text), 1, 6));
END;
$$ LANGUAGE plpgsql;

-- 6. Create trigger to auto-generate tracking_id
CREATE OR REPLACE FUNCTION set_tracking_id()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.tracking_id IS NULL THEN
        NEW.tracking_id := generate_tracking_id();
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 7. Add trigger to applications table
DROP TRIGGER IF EXISTS applications_set_tracking_id ON applications;
CREATE TRIGGER applications_set_tracking_id
    BEFORE INSERT ON applications
    FOR EACH ROW
    EXECUTE FUNCTION set_tracking_id();

-- 8. Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 9. Add trigger for updated_at
DROP TRIGGER IF EXISTS applications_update_updated_at ON applications;
CREATE TRIGGER applications_update_updated_at
    BEFORE UPDATE ON applications
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- 10. Create view for application statistics
CREATE OR REPLACE VIEW application_stats AS
SELECT 
    COUNT(*) as total_applications,
    COUNT(CASE WHEN status = 'pending' THEN 1 END) as pending_applications,
    COUNT(CASE WHEN status = 'under_review' THEN 1 END) as under_review_applications,
    COUNT(CASE WHEN status = 'approved' THEN 1 END) as approved_applications,
    COUNT(CASE WHEN status = 'rejected' THEN 1 END) as rejected_applications,
    DATE_TRUNC('day', created_at) as application_date
FROM applications 
GROUP BY DATE_TRUNC('day', created_at)
ORDER BY application_date DESC;

-- 11. Add comments for documentation
COMMENT ON TABLE applications IS 'Table to store job applications with tracking and status management';
COMMENT ON COLUMN applications.tracking_id IS 'Unique tracking ID for applicants to track their application status';
COMMENT ON COLUMN applications.status IS 'Application status: pending, under_review, approved, rejected';
