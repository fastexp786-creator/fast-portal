-- Fixed SQL for tracking ID generation
-- This version uses proper PostgreSQL syntax

-- 1. Create function to generate unique tracking IDs
CREATE OR REPLACE FUNCTION generate_tracking_id()
RETURNS TEXT AS $$
BEGIN
    RETURN 'APP-' || EXTRACT(EPOCH FROM NOW())::TEXT || '-' || upper(substring(md5(random()::text), 1, 6));
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
