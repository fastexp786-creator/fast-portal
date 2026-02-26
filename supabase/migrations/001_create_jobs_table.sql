-- Jobs table - Fast Job Career schema
CREATE TABLE IF NOT EXISTS public.jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),

  title TEXT NOT NULL,
  company TEXT,
  job_type TEXT,        -- Full-time, Part-time, Contract, etc.
  category TEXT,        -- Admin, Gulf Jobs, etc.
  country TEXT,
  location TEXT,        -- City/Area (e.g. Riyadh)
  expiry_date TEXT,     -- Kab job khatam hogi
  apply_url TEXT,       -- External link for application
  description TEXT,     -- Job ki details aur requirements
  vendor_whatsapp TEXT, -- Direct contact for vendors
  status TEXT DEFAULT 'Active',  -- Active, Expired, Pending
  external_id TEXT,     -- Partner/Affiliate ki unique ID
  job_source TEXT,      -- admin, vendor, affiliate
  priority_score INT4 DEFAULT 0, -- High number = Top position
  is_active BOOL DEFAULT true    -- Visibility control
);

-- Index for filtering & sorting
CREATE INDEX IF NOT EXISTS idx_jobs_is_active ON public.jobs(is_active);
CREATE INDEX IF NOT EXISTS idx_jobs_job_source ON public.jobs(job_source);
CREATE INDEX IF NOT EXISTS idx_jobs_country ON public.jobs(country);
CREATE INDEX IF NOT EXISTS idx_jobs_category ON public.jobs(category);
CREATE INDEX IF NOT EXISTS idx_jobs_created_at ON public.jobs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_jobs_priority ON public.jobs(priority_score DESC);

-- RLS (Row Level Security) - enable agar zaroorat ho
-- ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;
