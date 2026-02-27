"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import {
  activityLogSchema,
  bannerAdSchema,
  paymentProviderSchema,
  subscriptionPlanSchema,
  type ActivityLog,
  type BannerAd,
  type PaymentProvider,
  type SubscriptionPlan,
  type UserProfile,
  type Role,
  userProfileSchema,
} from "@/lib/admin-schemas";
import { JOBS_TABLE, type JobRow } from "@/lib/jobs-schema";
import {
  Activity,
  BadgeDollarSign,
  BrainCircuit,
  CreditCard,
  Globe2,
  LayoutDashboard,
  Mail,
  Megaphone,
  ShieldCheck,
  Users,
} from "lucide-react";

type JobSummary = {
  total: number;
  active: number;
  bySource: Record<string, number>;
};

type DashboardState = {
  users: UserProfile[];
  plans: SubscriptionPlan[];
  paymentProviders: PaymentProvider[];
  bannerAds: BannerAd[];
  logs: ActivityLog[];
  jobs: JobSummary;
};

const initialJobs: JobSummary = { total: 0, active: 0, bySource: {} };

const SUPER_ADMIN_EMAIL =
  process.env.NEXT_PUBLIC_SUPER_ADMIN_EMAIL || "fastexp786@gmail.com";

type SeekerRegistration = {
  id?: string | null;
  email?: string | null;
  full_name?: string | null;
  phone?: string | null;
  category?: string | null;
  cv_url?: string | null;
};

type Application = {
  id?: string;
  created_at?: string;
  email?: string | null;
  job_id?: string | null;
  job_title?: string | null;
  apply_url?: string | null;
};

export default function MasterControlCenter() {
  const t = useTranslations("dashboard");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sessionEmail, setSessionEmail] = useState<string | null>(null);
  const [role, setRole] = useState<Role | null>(null);
  const [seekerProfile, setSeekerProfile] = useState<SeekerRegistration | null>(null);
  const [vendorCount, setVendorCount] = useState<number>(0);
  const [seekers, setSeekers] = useState<SeekerRegistration[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [state, setState] = useState<DashboardState>({
    users: [],
    plans: [],
    paymentProviders: [],
    bannerAds: [],
    logs: [],
    jobs: initialJobs,
  });
  const [updatingProviderId, setUpdatingProviderId] = useState<string | null>(
    null,
  );

  const currentRoleLabel = useMemo(() => {
    if (role === "seeker") return "Seeker";
    if (role === "vendor") return "Vendor";
    if (role === "super_admin" || role === "staff") return "Admin";
    if (SUPER_ADMIN_EMAIL) {
      return "Super Admin (email-based)";
    }
    return "Admin Preview Mode";
  }, [role]);

  useEffect(() => {
    let cancelled = false;
    async function loadSession() {
      const { data } = await supabase.auth.getSession();
      if (cancelled) return;
      const email = data.session?.user.email ?? null;
      setSessionEmail(email);
      if (email) {
        const res = await supabase.from("user_profiles").select("*").eq("email", email).maybeSingle();
        const parsed = userProfileSchema.safeParse(res.data);
        if (parsed.success) {
          setRole(parsed.data.role);
        } else if (SUPER_ADMIN_EMAIL && email === SUPER_ADMIN_EMAIL) {
          setRole("super_admin");
        }
      }
    }
    void loadSession();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    async function loadPerUser() {
      if (!sessionEmail) return;
      const seekerRes = await supabase.from("seeker_registrations").select("*").eq("email", sessionEmail).maybeSingle();
      if (!cancelled) setSeekerProfile(seekerRes.data ?? null);
      const vendorRes = await supabase
        .from("vendor_submissions")
        .select("id", { count: "exact", head: true })
        .eq("email", sessionEmail);
      if (!cancelled) setVendorCount(vendorRes.count ?? 0);
      const appsRes = await supabase
        .from("applications")
        .select("*")
        .eq("email", sessionEmail)
        .order("created_at", { ascending: false })
        .limit(20);
      if (!cancelled) setApplications((appsRes.data as Application[]) ?? []);
    }
    void loadPerUser();
    return () => {
      cancelled = true;
    };
  }, [sessionEmail]);

  useEffect(() => {
    let cancelled = false;
    async function loadSeekers() {
      if (!(role === "super_admin" || role === "staff")) return;
      const res = await supabase
        .from("seeker_registrations")
        .select("id,email,full_name,phone,category,cv_url,created_at")
        .order("created_at", { ascending: false })
        .limit(10);
      if (!cancelled) {
        setSeekers(((res.data as unknown) as SeekerRegistration[]) ?? []);
      }
    }
    void loadSeekers();
    return () => {
      cancelled = true;
    };
  }, [role]);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const [
          userProfilesRes,
          plansRes,
          providersRes,
          bannerAdsRes,
          logsRes,
          jobsRes,
        ] = await Promise.all([
          supabase.from("user_profiles").select("*"),
          supabase.from("subscription_plans").select("*").order("price_monthly"),
          supabase
            .from("payment_providers")
            .select("*")
            .order("display_name"),
          supabase
            .from("banner_ads")
            .select("*")
            .order("created_at", { ascending: false })
            .limit(20),
          supabase
            .from("activity_logs")
            .select("*")
            .order("created_at", { ascending: false })
            .limit(25),
          supabase
            .from(JOBS_TABLE)
            .select("id,is_active,job_source", { count: "exact" }),
        ]);

        if (
          userProfilesRes.error ||
          plansRes.error ||
          providersRes.error ||
          bannerAdsRes.error ||
          logsRes.error ||
          jobsRes.error
        ) {
          throw (
            userProfilesRes.error ||
            plansRes.error ||
            providersRes.error ||
            bannerAdsRes.error ||
            logsRes.error ||
            jobsRes.error
          );
        }

        const usersParsed = userProfileSchema
          .array()
          .safeParse(userProfilesRes.data ?? []);
        const plansParsed = subscriptionPlanSchema
          .array()
          .safeParse(plansRes.data ?? []);
        const providersParsed = paymentProviderSchema
          .array()
          .safeParse(providersRes.data ?? []);
        const bannerAdsParsed = bannerAdSchema
          .array()
          .safeParse(bannerAdsRes.data ?? []);
        const logsParsed = activityLogSchema
          .array()
          .safeParse(logsRes.data ?? []);

        if (
          !usersParsed.success ||
          !plansParsed.success ||
          !providersParsed.success ||
          !bannerAdsParsed.success ||
          !logsParsed.success
        ) {
          throw new Error("Failed to validate admin data shape with Zod.");
        }

        const jobsData = (jobsRes.data ?? []) as JobRow[];
        const jobsSummary: JobSummary = jobsData.reduce(
          (acc, job) => {
            acc.total += 1;
            if (job.is_active) acc.active += 1;
            const src = job.job_source ?? "unknown";
            acc.bySource[src] = (acc.bySource[src] ?? 0) + 1;
            return acc;
          },
          { ...initialJobs },
        );

        if (cancelled) return;

        setState({
          users: usersParsed.data,
          plans: plansParsed.data,
          paymentProviders: providersParsed.data,
          bannerAds: bannerAdsParsed.data,
          logs: logsParsed.data,
          jobs: jobsSummary,
        });
      } catch (err) {
        if (cancelled) return;
        const message =
          err instanceof Error ? err.message : "Failed to load dashboard data.";
        setError(message);
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void load();

    return () => {
      cancelled = true;
    };
  }, []);

  const totalUsers = state.users.length;
  const approvedVendors = state.users.filter(
    (u) => u.role === "vendor" && u.is_approved,
  ).length;
  const approvedSeekers = state.users.filter(
    (u) => u.role === "seeker" && u.is_approved,
  ).length;
  const pendingUsers = state.users.filter((u) => !u.is_approved).length;

  const enabledProviders = state.paymentProviders.filter(
    (p) => p.is_enabled,
  ).length;

  // Very simple MRR approximation based on plan price * subscriptions count
  const approxMRR = useMemo(() => {
    // Without a payments table, keep this as a placeholder
    const total = state.plans.reduce((sum, plan) => sum + plan.price_monthly, 0);
    return total;
  }, [state.plans]);

  if (role === "seeker") {
    return (
      <main className="min-h-screen bg-[#0a2351] text-white px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <header className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-black">Seeker Dashboard</h1>
            <span className="rounded-full px-3 py-1 text-sm" style={{ backgroundColor: "#ffcc00", color: "#0a2351" }}>
              Seeker
            </span>
          </header>
          <section className="rounded-2xl border border-amber-400/30 bg-slate-900/60 p-5">
            <h2 className="mb-4 text-lg font-bold text-amber-300">Your Profile</h2>
            {seekerProfile ? (
              <div className="space-y-2 text-sm">
                <div>Email: {sessionEmail}</div>
                <div>Full Name: {seekerProfile.full_name ?? "-"}</div>
                <div>Phone: {seekerProfile.phone ?? "-"}</div>
                <div>Category: {seekerProfile.category ?? "-"}</div>
                <div>
                  CV:{" "}
                  {seekerProfile.cv_url ? (
                    <a className="underline" href={seekerProfile.cv_url} target="_blank">
                      View
                    </a>
                  ) : (
                    "-"
                  )}
                </div>
              </div>
            ) : (
              <p className="text-sm text-slate-300">No registration found.</p>
            )}
          </section>
          <section className="mt-6 rounded-2xl border border-amber-400/30 bg-slate-900/60 p-5">
            <h2 className="mb-4 text-lg font-bold text-amber-300">My Applications</h2>
            {applications.length === 0 ? (
              <div className="rounded-lg border border-slate-700 bg-slate-950/70 p-3 text-sm text-slate-300">
                No applications yet. Apply via job cards to see them here.
              </div>
            ) : (
              <ul className="space-y-2 text-sm text-slate-200">
                {applications.map((a) => (
                  <li key={a.id} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-950/70 p-3">
                    <div className="flex-1">
                      <p className="font-semibold">{a.job_title ?? "Job Application"}</p>
                      <p className="text-[11px] text-slate-400">{new Date(a.created_at || "").toLocaleString()}</p>
                    </div>
                    {a.apply_url && (
                      <a href={a.apply_url} target="_blank" className="rounded border border-amber-400 px-2 py-1 text-amber-300">
                        Open Link
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </main>
    );
  }

  if (role === "vendor") {
    return (
      <main className="min-h-screen bg-[#0a2351] text-white px-4 py-8">
        <div className="mx-auto max-w-5xl">
          <header className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-black">Vendor Dashboard</h1>
            <span className="rounded-full px-3 py-1 text-sm" style={{ backgroundColor: "#ffcc00", color: "#0a2351" }}>
              Vendor
            </span>
          </header>
          <section className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-amber-400/30 bg-slate-900/60 p-5">
              <h2 className="mb-1 text-amber-300">Your Submissions</h2>
              <p className="text-3xl font-black">{vendorCount}</p>
            </div>
            <div className="rounded-2xl border border-amber-400/30 bg-slate-900/60 p-5">
              <h2 className="mb-1 text-amber-300">Job Inventory</h2>
              <p className="text-3xl font-black">{state.jobs.total}</p>
              <p className="text-sm text-slate-300">{state.jobs.active} active</p>
            </div>
          </section>
        </div>
      </main>
    );
  }

  const handleToggleProvider = async (provider: PaymentProvider) => {
    const nextEnabled = !provider.is_enabled;
    setUpdatingProviderId(provider.id);
    try {
      const { error: updateError } = await supabase
        .from("payment_providers")
        .update({ is_enabled: nextEnabled })
        .eq("id", provider.id);

      if (updateError) throw updateError;

      setState((prev) => ({
        ...prev,
        paymentProviders: prev.paymentProviders.map((p) =>
          p.id === provider.id ? { ...p, is_enabled: nextEnabled } : p,
        ),
      }));
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to update provider.";
      setError(message);
    } finally {
      setUpdatingProviderId(null);
    }
  };

  return (
    <main className="min-h-screen bg-[#020617] text-slate-100 px-4 py-8 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-slate-400">
              <ShieldCheck className="h-4 w-4 text-amber-400" />
              {t("mccBadge")}
            </div>
            <h1 className="mt-2 flex items-center gap-3 text-2xl font-black tracking-tight text-amber-300 md:text-3xl">
              <LayoutDashboard className="h-7 w-7 text-amber-400" />
              {t("mccTitle")}
            </h1>
            <p className="mt-1 max-w-xl text-sm text-slate-400">
              {t("mccTagline")}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 px-4 py-3 text-xs shadow-lg shadow-amber-500/10">
            <div className="flex items-center gap-2 text-amber-300">
              <ShieldCheck className="h-4 w-4" />
              <span className="font-semibold">{currentRoleLabel}</span>
            </div>
            <p className="mt-1 text-[11px] text-slate-400">
              {t("authNote")}
            </p>
          </div>
        </header>

        {/* State */}
        {error && (
          <div className="mb-4 rounded-xl border border-red-500/40 bg-red-950/60 px-4 py-3 text-sm text-red-100">
            {error}
          </div>
        )}

        {/* Summary cards */}
        <section className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <SummaryCard
            title="Total Users"
            icon={Users}
            value={totalUsers}
            accent="Users & Roles"
            footer={`${approvedVendors} approved vendors · ${approvedSeekers} approved seekers`}
          />
          <SummaryCard
            title="Job Inventory"
            icon={Activity}
            value={state.jobs.total}
            accent="Active Listings"
            footer={`${state.jobs.active} active · ${state.jobs.bySource.admin ?? 0} admin · ${
              state.jobs.bySource.vendor ?? 0
            } vendor · ${state.jobs.bySource.affiliate ?? 0} affiliate`}
          />
          <SummaryCard
            title="Revenue Channels"
            icon={CreditCard}
            value={enabledProviders}
            accent="Gateways Enabled"
            footer={`Approx. monthly potential: $${approxMRR.toFixed(2)} USD`}
          />
          <SummaryCard
            title="Pending Approvals"
            icon={ShieldCheck}
            value={pendingUsers}
            accent="Access Requests"
            footer="Vendors & seekers require admin approval"
          />
        </section>

        {/* Main grid */}
        <section className="grid gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          {/* Left: post job, monetization, users, logs */}
          <div className="space-y-6">
            {/* Quick Post Job (Admin only) */}
            <div className="rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-xl shadow-amber-500/10">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-amber-200">Post a New Job</h2>
                <span className="text-[11px] text-slate-400">Admin Only</span>
              </div>
              <PostJobForm />
            </div>
            {/* Monetization */}
            <div className="rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-xl shadow-amber-500/10">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-slate-400">
                    <BadgeDollarSign className="h-4 w-4 text-amber-400" />
                    MONETIZATION & PLANS
                  </div>
                  <h2 className="mt-1 text-lg font-semibold text-amber-200">
                    3-Tier Subscriptions
                  </h2>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {state.plans.map((plan) => (
                  <div
                    key={plan.id}
                    className="flex flex-col justify-between rounded-2xl border border-slate-700/70 bg-slate-950/70 p-4"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-100">
                          {plan.name}
                        </h3>
                        {plan.code === "gold" && (
                          <span className="rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-900">
                            Gold Badge
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-lg font-bold text-amber-300">
                        {plan.price_monthly === 0 ? (
                          "Free"
                        ) : (
                          <>
                            {plan.currency} {plan.price_monthly.toFixed(2)}
                            <span className="text-[11px] font-normal text-slate-400">
                              {" "}
                              / month
                            </span>
                          </>
                        )}
                      </p>
                      <ul className="mt-3 space-y-1.5 text-[11px] text-slate-300">
                        {plan.features.length ? (
                          plan.features.map((f) => (
                            <li key={f} className="flex items-start gap-1.5">
                              <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-amber-400" />
                              <span>{f}</span>
                            </li>
                          ))
                        ) : (
                          <li className="text-slate-500">
                            Features will appear here once configured.
                          </li>
                        )}
                      </ul>
                    </div>
                    <button
                      type="button"
                      className="mt-4 inline-flex items-center justify-center rounded-xl border border-amber-400/50 bg-amber-500/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-amber-300"
                    >
                      Configure Plan (Coming Soon)
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment gateways */}
            <div className="rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-xl shadow-amber-500/10">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-slate-400">
                    <CreditCard className="h-4 w-4 text-amber-400" />
                    PAYMENT GATEWAYS
                  </div>
                  <h2 className="mt-1 text-lg font-semibold text-amber-200">
                    Toggle Revenue Channels
                  </h2>
                </div>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {state.paymentProviders.map((provider) => (
                  <button
                    key={provider.id}
                    type="button"
                    onClick={() => void handleToggleProvider(provider)}
                    className={`flex items-center justify-between rounded-2xl border px-3 py-2.5 text-left text-sm transition ${
                      provider.is_enabled
                        ? "border-emerald-400/60 bg-emerald-500/10 text-emerald-100"
                        : "border-slate-700 bg-slate-950/60 text-slate-200"
                    }`}
                    disabled={updatingProviderId === provider.id}
                  >
                    <div className="flex flex-col">
                      <span className="font-semibold">{provider.display_name}</span>
                      <span className="text-[11px] text-slate-400">
                        {provider.code === "stripe" || provider.code === "paypal"
                          ? "Global card payments"
                          : provider.code === "easypaisa" ||
                              provider.code === "jazzcash"
                            ? "Pakistan local rails"
                            : "Crypto gateway"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[11px] font-semibold uppercase ${
                          provider.is_enabled ? "text-emerald-300" : "text-slate-500"
                        }`}
                      >
                        {provider.is_enabled ? "Enabled" : "Disabled"}
                      </span>
                      <div
                        className={`flex h-5 w-9 items-center rounded-full border transition ${
                          provider.is_enabled
                            ? "border-emerald-400 bg-emerald-500/20"
                            : "border-slate-600 bg-slate-800"
                        }`}
                      >
                        <div
                          className={`h-4 w-4 rounded-full bg-white shadow transition ${
                            provider.is_enabled ? "translate-x-4" : "translate-x-0.5"
                          }`}
                        />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              <p className="mt-3 text-[11px] text-slate-500">
                Full Stripe/PayPal, EasyPaisa/JazzCash, and BTC/USDT flows will be
                wired to these toggles in the billing layer.
              </p>
            </div>

            {/* Activity logs */}
            <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 shadow-xl shadow-amber-500/10">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-slate-400">
                  <Activity className="h-4 w-4 text-amber-400" />
                  ACTIVITY LOGS
                </div>
                <span className="text-[11px] text-slate-500">
                  Latest {state.logs.length} events
                </span>
              </div>
              <div className="max-h-64 space-y-2 overflow-y-auto pr-1 text-xs">
                {state.logs.length === 0 && (
                  <p className="text-slate-500">
                    Activity logs will appear here as admins perform actions.
                  </p>
                )}
                {state.logs.map((log) => (
                  <div
                    key={log.id}
                    className="flex items-start justify-between gap-3 rounded-xl border border-slate-800/80 bg-slate-900/60 px-3 py-2"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-slate-100">{log.action}</p>
                      <p className="mt-0.5 text-[11px] text-slate-500">
                        {new Date(log.created_at).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: recent seekers, automation, ads, AI writer, CV */}
          <div className="space-y-6">
            {/* Banner Ads Management */}
            <div className="rounded-3xl border border-amber-500/40 bg-amber-500/5 p-5 shadow-xl shadow-amber-500/10">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-amber-200">Banner Ads Management</h2>
                <span className="text-[11px] text-amber-300">Homepage · Sidebar · Popup</span>
              </div>
              <BannerForm
                onCreated={(ad) =>
                  setState((prev) => ({ ...prev, bannerAds: [ad, ...prev.bannerAds] }))
                }
              />
              <div className="mt-3 space-y-2 text-xs">
                {state.bannerAds.map((ad) => (
                  <div key={ad.id} className="flex items-center justify-between rounded-xl border border-amber-500/30 bg-slate-900/60 px-3 py-2">
                    <div className="flex-1">
                      <p className="font-semibold text-slate-100">{ad.title}</p>
                      <p className="mt-0.5 text-[11px] text-slate-400">
                        {ad.position} · {ad.impressions} impressions · {ad.clicks} clicks
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <a href={ad.target_url} target="_blank" rel="noopener noreferrer" className="text-amber-300 underline">Open</a>
                      <button
                        className="rounded border border-amber-400/40 px-2 py-1 text-amber-300"
                        onClick={async () => {
                          const { error: e } = await supabase
                            .from("banner_ads")
                            .update({ is_active: !ad.is_active })
                            .eq("id", ad.id);
                          if (!e) {
                            setState((prev) => ({
                              ...prev,
                              bannerAds: prev.bannerAds.map((b) =>
                                b.id === ad.id ? { ...b, is_active: !b.is_active } : b
                              ),
                            }));
                          }
                        }}
                      >
                        {ad.is_active ? "Disable" : "Enable"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Recent seeker registrations */}
            <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 shadow-xl shadow-amber-500/10">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-amber-200">Recent Seeker Registrations</h2>
                <span className="text-[11px] text-slate-500">Download CVs</span>
              </div>
              <div className="space-y-2 text-xs">
                {seekers.length === 0 ? (
                  <p className="text-slate-500">No seekers yet.</p>
                ) : (
                  seekers.map((s) => (
                    <div
                      key={(s.id ?? s.email) ?? Math.random().toString()}
                      className="flex items-center justify-between rounded-xl border border-slate-800/70 bg-slate-900/70 px-3 py-2"
                    >
                      <div className="flex-1">
                        <p className="font-semibold text-slate-100">{s.full_name ?? s.email}</p>
                        <p className="text-[11px] text-slate-400">
                          {s.category ?? "-"} · {s.phone ?? "-"}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        {s.cv_url ? (
                          <button
                            className="rounded-lg bg-amber-500/20 px-2 py-1 font-semibold text-amber-300 underline"
                            onClick={async () => {
                              const idx = (s.cv_url ?? "").indexOf("/cv_bucket/");
                              const key =
                                idx !== -1
                                  ? (s.cv_url as string).substring(idx + "/cv_bucket/".length)
                                  : null;
                              if (key) {
                                const link = await supabase.storage
                                  .from("cv_bucket")
                                  .createSignedUrl(key, 3600);
                                if (!link.error && link.data?.signedUrl) {
                                  window.open(link.data.signedUrl, "_blank", "noopener,noreferrer");
                                  return;
                                }
                              }
                              window.open(s.cv_url as string, "_blank", "noopener,noreferrer");
                            }}
                          >
                            Download CV
                          </button>
                        ) : (
                          <span className="text-slate-500">No CV</span>
                        )}
                        <a
                          className="rounded-lg border border-emerald-400/50 px-2 py-1 font-semibold text-emerald-300"
                          href={`https://wa.me/923100570707?text=${encodeURIComponent(
                            `Assign vendor for ${s.full_name ?? s.email} (${s.phone ?? "-"})`,
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Assign via WhatsApp
                        </a>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            {/* Smart automation & AI writer */}
            <div className="rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900/80 to-slate-950 px-5 py-5 shadow-2xl shadow-indigo-900/40">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-slate-400">
                    <BrainCircuit className="h-4 w-4 text-amber-400" />
                    SMART AUTOMATION
                  </div>
                  <h2 className="mt-1 text-lg font-semibold text-amber-200">
                    AI Content & CV Builder
                  </h2>
                </div>
              </div>
              <div className="space-y-4 text-xs">
                {/* AI Job / Blog content */}
                <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-3">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Globe2 className="h-4 w-4 text-amber-300" />
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">
                        AI Writer Placeholder
                      </span>
                    </div>
                  </div>
                  <textarea
                    className="h-24 w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-xs text-slate-100 outline-none focus:border-amber-400 focus:ring-0"
                    placeholder="Describe the job or blog topic you want AI to generate (e.g., 'Senior HVAC Technician in Dubai with accommodation')."
                    disabled
                  />
                  <button
                    type="button"
                    disabled
                    className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-800/80 px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400"
                  >
                    <BrainCircuit className="h-3 w-3" />
                    Generate with AI (Coming Soon)
                  </button>
                  <p className="mt-1 text-[10px] text-slate-500">
                    This control is wired as a placeholder for a future AI API
                    route that will auto-generate job and blog descriptions.
                  </p>
                </div>

                {/* Auto CV builder */}
                <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-3">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-amber-300" />
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">
                        Auto CV Builder
                      </span>
                    </div>
                    <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-semibold text-amber-300">
                      Premium
                    </span>
                  </div>
                  <div className="grid gap-2 text-[11px] md:grid-cols-2">
                    <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-2">
                      <p className="font-semibold text-slate-100">
                        Classic Gulf Template
                      </p>
                      <p className="mt-1 text-[10px] text-slate-400">
                        Clean 2-column layout optimized for Gulf recruitment
                        partners.
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-2">
                      <p className="font-semibold text-slate-100">
                        European ATS Template
                      </p>
                      <p className="mt-1 text-[10px] text-slate-400">
                        ATS-friendly structure for EU, UK, and Canada employers.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    disabled
                    className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-amber-400/90 to-yellow-500 text-[11px] font-semibold uppercase tracking-wide text-slate-900 shadow-lg shadow-amber-500/30"
                  >
                    Launch CV Builder (Placeholder)
                  </button>
                  <p className="mt-1 text-[10px] text-slate-500">
                    When activated, user profile data will flow automatically
                    into these premium CV templates.
                  </p>
                </div>
              </div>
            </div>

            {/* Banner ads */}
            <div className="rounded-3xl border border-slate-800/80 bg-slate-950/90 p-5 shadow-xl shadow-amber-500/10">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-slate-400">
                  <Megaphone className="h-4 w-4 text-amber-400" />
                  BANNER ADS
                </div>
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-300"
                >
                  <BadgeDollarSign className="h-3 w-3" />
                  New Campaign (Soon)
                </button>
              </div>
              {state.bannerAds.length === 0 ? (
                <p className="text-xs text-slate-500">
                  Upload and track homepage, sidebar, and popup banners here.
                  Impressions and clicks will be counted automatically.
                </p>
              ) : (
                <div className="space-y-2 text-xs">
                  {state.bannerAds.map((ad) => (
                    <div
                      key={ad.id}
                      className="flex items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 px-3 py-2"
                    >
                      <div className="flex-1">
                        <p className="font-semibold text-slate-100">{ad.title}</p>
                        <p className="mt-0.5 text-[11px] text-slate-500">
                          {ad.position} · {ad.impressions} impressions · {ad.clicks}{" "}
                          clicks
                        </p>
                      </div>
                      <a
                        href={ad.target_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-semibold text-amber-300 underline underline-offset-4"
                      >
                        View
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Global help */}
            <div className="rounded-3xl border border-slate-800/80 bg-slate-950/90 p-4 text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <LayoutDashboard className="h-4 w-4 text-amber-400" />
                <span className="font-semibold text-slate-200">
                  Need a deeper automation pass?
                </span>
              </div>
              <p className="mt-1">
                This Master Control Center is UI-complete and wired to Supabase
                tables using strict TypeScript and Zod. Once auth and server-side
                billing are connected, these controls can fully drive your
                worldwide job & travel portal.
              </p>
            </div>
          </div>
        </section>

        {loading && (
          <div className="mt-6 text-center text-xs text-slate-500">
            Loading live metrics from Supabase…
          </div>
        )}
      </div>
    </main>
  );
}

type SummaryCardProps = {
  title: string;
  value: number;
  accent: string;
  footer: string;
  icon: typeof LayoutDashboard;
};

function SummaryCard({
  title,
  value,
  accent,
  footer,
  icon: Icon,
}: SummaryCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-3xl border border-slate-800/80 bg-slate-950/90 p-4 shadow-lg shadow-amber-500/10">
      <div className="flex items-center justify-between gap-2">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">
            {title}
          </p>
          <p className="mt-2 text-2xl font-black text-amber-300">
            {value.toLocaleString()}
          </p>
        </div>
        <div className="rounded-2xl bg-slate-900/80 p-2">
          <Icon className="h-6 w-6 text-amber-400" />
        </div>
      </div>
      <div className="mt-2 text-[11px] text-slate-300">{accent}</div>
      <div className="mt-1 text-[11px] text-slate-500">{footer}</div>
    </div>
  );
}

function PostJobForm() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");
  const [applyUrl, setApplyUrl] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const canSubmit = title.trim().length > 0 && applyUrl.trim().length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    setError(null);
    setSuccess(null);
    try {
      const { error: insertError } = await supabase.from(JOBS_TABLE).insert({
        title,
        company: company || null,
        category: category || null,
        country: country || null,
        location: location || null,
        apply_url: applyUrl,
        is_active: true,
        job_source: "admin",
      });
      if (insertError) throw insertError;
      setSuccess("Job posted");
      setTitle("");
      setCompany("");
      setCategory("");
      setCountry("");
      setLocation("");
      setApplyUrl("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to post job.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-3 md:grid-cols-2">
      {error && (
        <div className="md:col-span-2 rounded-lg border border-red-500/40 bg-red-950/50 px-3 py-2 text-xs text-red-100">
          {error}
        </div>
      )}
      {success && (
        <div className="md:col-span-2 rounded-lg border border-emerald-500/40 bg-emerald-950/40 px-3 py-2 text-xs text-emerald-100">
          {success}
        </div>
      )}
      <input className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none" placeholder="Job Title *" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} />
      <input className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
      <input className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} />
      <input className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
      <input className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none" placeholder="Apply URL *" value={applyUrl} onChange={(e) => setApplyUrl(e.target.value)} />
      <div className="md:col-span-2">
        <button type="submit" disabled={!canSubmit || submitting} className="rounded-lg bg-amber-400 px-4 py-2 text-sm font-bold text-slate-900 disabled:opacity-60">
          {submitting ? "Posting…" : "Post Job"}
        </button>
      </div>
    </form>
  );
}

function BannerForm({ onCreated }: { onCreated: (ad: BannerAd) => void }) {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [targetUrl, setTargetUrl] = useState("");
  const [position, setPosition] = useState<"homepage" | "sidebar" | "popup">("homepage");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [thumb, setThumb] = useState<string>("");

  const canSubmit = title.trim() && imageUrl.trim() && targetUrl.trim();

  function slugify(input: string) {
    return input.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  }

  function parseBucketPath(url: string): string | null {
    const i = url.indexOf("/banners_bucket/");
    if (i === -1) return null;
    return url.substring(i + "/banners_bucket/".length);
  }

  async function resizeImage(file: File): Promise<{ blob: Blob; ext: string }> {
    const img = document.createElement("img");
    const url = URL.createObjectURL(file);
    await new Promise<void>((res, rej) => {
      img.onload = () => res();
      img.onerror = () => rej(new Error("Image load failed"));
      img.src = url;
    });
    const maxW = 1200;
    const scale = Math.min(1, maxW / img.width);
    const canvas = document.createElement("canvas");
    canvas.width = Math.floor(img.width * scale);
    canvas.height = Math.floor(img.height * scale);
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas not supported");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    const blob: Blob = await new Promise((resolve) => canvas.toBlob((b) => resolve(b as Blob), "image/webp", 0.85));
    URL.revokeObjectURL(url);
    return { blob, ext: "webp" };
  }

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const allow = ["image/png", "image/jpeg", "image/webp"];
    const max = 3 * 1024 * 1024;
    if (!allow.includes(f.type)) {
      setError("Only PNG, JPG, or WEBP allowed.");
      return;
    }
    if (f.size > max) {
      setError("Max size 3MB.");
      return;
    }
    setError(null);
    setUploading(true);
    try {
      // delete previous image if present and belongs to this bucket
      if (imageUrl) {
        const key = parseBucketPath(imageUrl);
        if (key) {
          await supabase.storage.from("banners_bucket").remove([key]);
        }
      }
      const base = slugify(title || "banner");
      const { blob, ext } = await resizeImage(f);
      const name = `${base}-${Date.now()}.${ext}`;
      const { error: upErr } = await supabase.storage.from("banners_bucket").upload(name, blob, {
        contentType: f.type,
        upsert: false,
      });
      if (upErr) throw upErr;
      setImageUrl(name);
      const signed = await supabase.storage.from("banners_bucket").createSignedUrl(name, 3600);
      if (!signed.error && signed.data?.signedUrl) {
        setThumb(signed.data.signedUrl);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    setError(null);
    try {
      const { data, error: insErr } = await supabase.from("banner_ads").insert({
        title,
        image_url: imageUrl,
        target_url: targetUrl,
        position,
        is_active: true,
      }).select("*").single();
      if (insErr) throw insErr;
      onCreated(data as BannerAd);
      setTitle("");
      setImageUrl("");
      setTargetUrl("");
      setPosition("homepage");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to add banner.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-2 md:grid-cols-[2fr_3fr_3fr_2fr_auto]">
      <input className="rounded border border-amber-400/30 bg-slate-900/60 px-2 py-1 text-xs outline-none" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <div className="flex items-center gap-2">
        <input className="flex-1 rounded border border-amber-400/30 bg-slate-900/60 px-2 py-1 text-xs outline-none" placeholder="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        <input type="file" onChange={handleFile} disabled={uploading} className="text-[11px]" />
      </div>
      <input className="rounded border border-amber-400/30 bg-slate-900/60 px-2 py-1 text-xs outline-none" placeholder="Target URL" value={targetUrl} onChange={(e) => setTargetUrl(e.target.value)} />
      <select
        className="rounded border border-amber-400/30 bg-slate-900/60 px-2 py-1 text-xs outline-none"
        value={position}
        onChange={(e) =>
          setPosition(e.target.value as "homepage" | "sidebar" | "popup")
        }
      >
        <option value="homepage">Homepage</option>
        <option value="sidebar">Sidebar</option>
        <option value="popup">Popup</option>
      </select>
      <button type="submit" disabled={!canSubmit || submitting} className="rounded bg-amber-400 px-3 py-1 text-xs font-bold text-slate-900 disabled:opacity-60">
        {submitting ? "Saving..." : "Add"}
      </button>
      {thumb && (
        <div className="md:col-span-5">
          <div className="h-16 w-[256px] overflow-hidden rounded border border-amber-400/30 relative">
            <Image src={thumb} alt="banner" fill style={{ objectFit: "cover" }} sizes="256px" />
          </div>
        </div>
      )}
      {error && <div className="md:col-span-5 text-[11px] text-red-300">{error}</div>}
    </form>
  );
}
