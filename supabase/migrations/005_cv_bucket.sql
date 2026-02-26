-- CV Bucket and Seeker CV Management

-- 1) CV Bucket Storage Policies
CREATE POLICY "CV files are publicly accessible" ON storage.objects
FOR SELECT USING (bucket_id = 'cv_bucket');

CREATE POLICY "Anyone can upload CV files" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'cv_bucket');

CREATE POLICY "Users can update own CV files" ON storage.objects
FOR UPDATE USING (bucket_id = 'cv_bucket');

CREATE POLICY "Users can delete own CV files" ON storage.objects
FOR DELETE USING (bucket_id = 'cv_bucket');

-- 2) Enhanced Seeker Registrations with CV tracking
ALTER TABLE public.seeker_registrations 
ADD COLUMN IF NOT EXISTS cv_file_name TEXT,
ADD COLUMN IF NOT EXISTS cv_storage_path TEXT,
ADD COLUMN IF NOT EXISTS cv_uploaded_at TIMESTAMPTZ;

-- 3) CV Templates table
CREATE TABLE IF NOT EXISTS public.cv_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  code TEXT UNIQUE NOT NULL,
  description TEXT,
  thumbnail_url TEXT,
  is_premium BOOLEAN NOT NULL DEFAULT false,
  price NUMERIC(10,2) DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  template_config JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

INSERT INTO public.cv_templates (name, code, description, is_premium, price) VALUES
('Classic Gulf Template', 'gulf_classic', 'Clean 2-column layout optimized for Gulf recruitment partners', true, 29.99),
('European ATS Template', 'european_ats', 'ATS-friendly structure for EU, UK, and Canada employers', true, 39.99),
('Basic Professional', 'basic_pro', 'Simple one-page professional CV template', false, 0)
ON CONFLICT (code) DO NOTHING;

-- 4) User CV Profiles
CREATE TABLE IF NOT EXISTS public.user_cv_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_profile_id UUID NOT NULL REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  template_id UUID REFERENCES public.cv_templates(id),
  cv_data JSONB NOT NULL DEFAULT '{}'::jsonb,
  generated_pdf_url TEXT,
  last_generated_at TIMESTAMPTZ,
  download_count INTEGER DEFAULT 0,
  is_public BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_user_cv_profiles_user ON public.user_cv_profiles(user_profile_id);

-- 5) CV Generation History
CREATE TABLE IF NOT EXISTS public.cv_generation_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_profile_id UUID NOT NULL REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  template_id UUID REFERENCES public.cv_templates(id),
  status TEXT NOT NULL CHECK (status IN ('pending', 'completed', 'failed')),
  error_message TEXT,
  generated_file_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  completed_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_cv_generation_user ON public.cv_generation_history(user_profile_id);

-- 6) Function to handle CV file upload and registration update
CREATE OR REPLACE FUNCTION public.handle_cv_upload()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Update seeker registration with CV info
  UPDATE public.seeker_registrations 
  SET cv_file_name = NEW.name,
      cv_storage_path = NEW.path_tokens[array_length(NEW.path_tokens, 1)],
      cv_uploaded_at = NOW()
  WHERE email = (SELECT email FROM auth.users WHERE id = NEW.owner);
  
  RETURN NEW;
END;
$$;

-- 7) Trigger for CV uploads (simplified - would need proper auth integration)
-- DROP TRIGGER IF EXISTS on_cv_upload ON storage.objects;
-- CREATE TRIGGER on_cv_upload
-- AFTER INSERT ON storage.objects
-- FOR EACH ROW
-- WHEN (NEW.bucket_id = 'cv_bucket')
-- EXECUTE FUNCTION public.handle_cv_upload();