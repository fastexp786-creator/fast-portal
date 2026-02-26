-- Applications table to track seeker job applications
create table if not exists public.applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null,
  job_id text,
  job_title text,
  apply_url text
);

create index if not exists idx_applications_email on public.applications(email);

