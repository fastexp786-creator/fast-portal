-- CV Bucket Storage Configuration and Policies

-- Create CV bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public, avif_autodetection, file_size_limit, allowed_mime_types)
VALUES ('cv_bucket', 'cv_bucket', true, false, 5242880, '{"application/pdf","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document","image/jpeg","image/png"}')
ON CONFLICT (id) DO UPDATE SET
  public = EXCLUDED.public,
  file_size_limit = EXCLUDED.file_size_limit,
  allowed_mime_types = EXCLUDED.allowed_mime_types;

-- Enable RLS on the bucket
UPDATE storage.buckets SET public = false WHERE id = 'cv_bucket';

-- Storage policies for CV bucket
CREATE POLICY "CV files are publicly accessible" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'cv_bucket');

CREATE POLICY "Authenticated users can upload CVs" 
ON storage.objects FOR INSERT 
TO authenticated 
WITH CHECK (bucket_id = 'cv_bucket');

CREATE POLICY "Users can update their own CVs" 
ON storage.objects FOR UPDATE 
TO authenticated 
USING (bucket_id = 'cv_bucket' AND owner = auth.uid());

CREATE POLICY "Users can delete their own CVs" 
ON storage.objects FOR DELETE 
TO authenticated 
USING (bucket_id = 'cv_bucket' AND owner = auth.uid());

-- Function to get CV download URL
CREATE OR REPLACE FUNCTION public.get_cv_download_url(file_path TEXT, expires_in INTERVAL DEFAULT '1 hour')
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN storage.get_presigned_url('cv_bucket', file_path, expires_in, 'GET');
END;
$$;

-- Function to check if user can access CV file
CREATE OR REPLACE FUNCTION public.can_access_cv(file_owner UUID, requesting_user UUID)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Allow access if:
  -- 1. User is accessing their own file
  -- 2. User is an admin/staff
  -- 3. File is marked as public in seeker_registrations
  RETURN (
    file_owner = requesting_user OR
    EXISTS (
      SELECT 1 FROM public.user_profiles 
      WHERE auth_user_id = requesting_user 
      AND role IN ('super_admin', 'staff')
    ) OR
    EXISTS (
      SELECT 1 FROM public.seeker_registrations sr
      WHERE sr.cv_storage_path = file_path
      AND sr.is_public = true
    )
  );
END;
$$;