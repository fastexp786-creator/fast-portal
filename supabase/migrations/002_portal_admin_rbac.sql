-- RBAC, subscriptions, payments, ads, and activity logs for Fast Job Career portal

-- 1) User profiles & roles
CREATE TABLE IF NOT EXISTS public.user_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  auth_user_id UUID, -- optional link to auth.users
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  role TEXT NOT NULL CHECK (role IN ('super_admin', 'staff', 'vendor', 'seeker')),
  is_approved BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_user_profiles_role ON public.user_profiles(role);
CREATE INDEX IF NOT EXISTS idx_user_profiles_is_approved ON public.user_profiles(is_approved);

-- Seed the primary Super Admin based on email
INSERT INTO public.user_profiles (email, full_name, role, is_approved)
VALUES ('fastexp786@gmail.com', 'Primary Super Admin', 'super_admin', true)
ON CONFLICT (email) DO UPDATE
SET role = EXCLUDED.role,
    is_approved = true;

-- 2) Subscription plans (Free / Silver / Gold)
CREATE TABLE IF NOT EXISTS public.subscription_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT UNIQUE NOT NULL, -- 'free', 'silver', 'gold'
  name TEXT NOT NULL,
  price_monthly NUMERIC(10,2) NOT NULL DEFAULT 0,
  currency TEXT NOT NULL DEFAULT 'USD',
  is_active BOOLEAN NOT NULL DEFAULT true,
  features JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

INSERT INTO public.subscription_plans (code, name, price_monthly, currency, features)
VALUES
  ('free', 'Free', 0, 'USD', '["Basic access","Standard listings"]'),
  ('silver', 'Silver', 29.00, 'USD', '["Priority support","Boosted listings"]'),
  ('gold', 'Gold', 79.00, 'USD', '["Featured badge","Top of search","Dedicated support"]')
ON CONFLICT (code) DO NOTHING;

-- 3) User subscriptions
CREATE TABLE IF NOT EXISTS public.user_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_profile_id UUID NOT NULL REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  plan_id UUID NOT NULL REFERENCES public.subscription_plans(id) ON DELETE RESTRICT,
  status TEXT NOT NULL CHECK (status IN ('active', 'past_due', 'canceled')),
  valid_until TIMESTAMPTZ,
  auto_renew BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_user_subscriptions_user ON public.user_subscriptions(user_profile_id);

-- 4) Payment providers (Stripe / PayPal / EasyPaisa / JazzCash / BTC / USDT)
CREATE TABLE IF NOT EXISTS public.payment_providers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT UNIQUE NOT NULL, -- 'stripe', 'paypal', 'easypaisa', 'jazzcash', 'btc', 'usdt'
  display_name TEXT NOT NULL,
  is_enabled BOOLEAN NOT NULL DEFAULT false,
  config JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

INSERT INTO public.payment_providers (code, display_name, is_enabled)
VALUES
  ('stripe', 'Stripe', false),
  ('paypal', 'PayPal', false),
  ('easypaisa', 'EasyPaisa', false),
  ('jazzcash', 'JazzCash', false),
  ('btc', 'Bitcoin (BTC)', false),
  ('usdt', 'Tether (USDT)', false)
ON CONFLICT (code) DO NOTHING;

-- 5) Banner ads
CREATE TABLE IF NOT EXISTS public.banner_ads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  image_url TEXT NOT NULL,
  target_url TEXT NOT NULL,
  position TEXT NOT NULL DEFAULT 'homepage', -- e.g. homepage, sidebar, popup
  is_active BOOLEAN NOT NULL DEFAULT true,
  impressions BIGINT NOT NULL DEFAULT 0,
  clicks BIGINT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_banner_ads_position ON public.banner_ads(position);
CREATE INDEX IF NOT EXISTS idx_banner_ads_is_active ON public.banner_ads(is_active);

-- 6) Activity logs
CREATE TABLE IF NOT EXISTS public.activity_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  actor_user_profile_id UUID REFERENCES public.user_profiles(id) ON DELETE SET NULL,
  action TEXT NOT NULL,
  metadata JSONB DEFAULT '{}'::jsonb
);

CREATE INDEX IF NOT EXISTS idx_activity_logs_created_at ON public.activity_logs(created_at DESC);

-- 7) Featured listings on jobs table (luxury Gold badge)
ALTER TABLE public.jobs
  ADD COLUMN IF NOT EXISTS is_featured BOOLEAN NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS featured_badge_label TEXT DEFAULT 'Gold Featured';

