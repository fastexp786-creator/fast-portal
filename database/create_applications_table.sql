-- Create applications table for job applications
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

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_applications_job_id ON applications(job_id);
CREATE INDEX IF NOT EXISTS idx_applications_seeker_id ON applications(seeker_id);
CREATE INDEX IF NOT EXISTS idx_applications_status ON applications(status);
CREATE INDEX IF NOT EXISTS idx_applications_tracking_id ON applications(tracking_id);

-- Enable Row Level Security (RLS)
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- Create policies for applications table
CREATE POLICY "Users can view their own applications" ON applications
    FOR SELECT USING (auth.uid() = seeker_id);

CREATE POLICY "Users can insert their own applications" ON applications
    FOR INSERT WITH CHECK (auth.uid() = seeker_id);

CREATE POLICY "Users can update their own applications" ON applications
    FOR UPDATE USING (auth.uid() = seeker_id);

-- Create policy for vendors to view applications for their jobs
CREATE POLICY "Vendors can view applications for their jobs" ON applications
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM jobs_data 
            WHERE jobs_data.id = applications.job_id 
            AND jobs_data.vendor_contact IN (
                SELECT email FROM seeker_registrations 
                WHERE user_id = auth.uid()
            )
        )
    );

-- Add comments for documentation
COMMENT ON TABLE applications IS 'Job applications submitted by seekers';
COMMENT ON COLUMN applications.job_id IS 'Reference to the job being applied for';
COMMENT ON COLUMN applications.seeker_id IS 'Reference to the seeker user who applied';
COMMENT ON COLUMN applications.full_name IS 'Full name of the applicant';
COMMENT ON COLUMN applications.email IS 'Email address of the applicant';
COMMENT ON COLUMN applications.phone IS 'Phone number of the applicant';
COMMENT ON COLUMN applications.location IS 'Current location of the applicant';
COMMENT ON COLUMN applications.cover_letter IS 'Cover letter text (optional)';
COMMENT ON COLUMN applications.resume_url IS 'URL to the uploaded resume file';
COMMENT ON COLUMN applications.status IS 'Application status: pending, under_review, shortlisted, rejected, hired';
COMMENT ON COLUMN applications.tracking_id IS 'Unique tracking ID for applicants to track their application';
