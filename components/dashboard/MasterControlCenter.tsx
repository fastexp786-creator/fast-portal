"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { supabase } from "@/lib/supabase";
import { JOBS_TABLE } from "@/lib/jobs-schema";
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

type Role = "seeker" | "vendor" | "staff" | "super_admin";

const SUPER_ADMIN_EMAIL = process.env.NEXT_PUBLIC_SUPER_ADMIN_EMAIL || "fastexp786@gmail.com";

export default function MasterControlCenter() {
  const t = useTranslations("dashboard");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sessionEmail, setSessionEmail] = useState<string | null>(null);
  const [role, setRole] = useState<Role | null>(null);
  
  // Simplified state for performance
  const [stats, setStats] = useState({
    totalJobs: 0,
    activeJobs: 0,
    totalUsers: 0,
    totalVendors: 0,
    totalSeekers: 0
  });

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
      try {
        const { data } = await supabase.auth.getSession();
        if (cancelled) return;
        const email = data.session?.user.email ?? null;
        setSessionEmail(email);
        
        if (email) {
          const res = await supabase.from("user_profiles").select("*").eq("email", email).maybeSingle();
          if (res.data) {
            setRole(res.data.role);
          } else if (SUPER_ADMIN_EMAIL && email === SUPER_ADMIN_EMAIL) {
            setRole("super_admin");
          }
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Session loading failed');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }
    
    loadSession();
    return () => { cancelled = true; };
  }, []);

  // Load basic stats only
  useEffect(() => {
    let cancelled = false;
    async function loadStats() {
      try {
        if (cancelled) return;
        
        // Load basic stats with optimized queries
        const [jobsRes, usersRes] = await Promise.all([
          supabase.from(JOBS_TABLE).select('id, status').eq('status', 'active'),
          supabase.from("user_profiles").select('role')
        ]);
        
        if (cancelled) return;
        
        const activeJobs = jobsRes.data?.length || 0;
        const users = usersRes.data || [];
        const totalUsers = users.length;
        const totalVendors = users.filter(u => u.role === 'vendor').length;
        const totalSeekers = users.filter(u => u.role === 'seeker').length;
        
        setStats({
          totalJobs: activeJobs,
          activeJobs,
          totalUsers,
          totalVendors,
          totalSeekers
        });
      } catch (err) {
        if (!cancelled) {
          console.error('Stats loading error:', err);
        }
      }
    }
    
    if (role) {
      loadStats();
    }
    
    return () => { cancelled = true; };
  }, [role]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#0a2351] text-white px-4 py-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading dashboard...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-[#0a2351] text-white px-4 py-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="bg-red-500/20 border border-red-500 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">Error</h2>
            <p>{error}</p>
          </div>
        </div>
      </main>
    );
  }

  // Admin Dashboard
  if (role === "super_admin" || role === "staff") {
    return (
      <main className="min-h-screen bg-[#0a2351] text-white px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <header className="mb-8 flex items-center justify-between">
            <h1 className="text-3xl font-black">Admin Dashboard</h1>
            <span className="rounded-full px-4 py-2 text-sm font-bold" style={{ backgroundColor: "#ffcc00", color: "#0a2351" }}>
              {currentRoleLabel}
            </span>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="rounded-xl border border-amber-400/30 bg-slate-900/60 p-6">
              <div className="flex items-center justify-between mb-4">
                <Users className="h-8 w-8 text-amber-400" />
                <span className="text-2xl font-bold">{stats.totalUsers}</span>
              </div>
              <h3 className="text-lg font-bold text-amber-300">Total Users</h3>
            </div>

            <div className="rounded-xl border border-amber-400/30 bg-slate-900/60 p-6">
              <div className="flex items-center justify-between mb-4">
                <LayoutDashboard className="h-8 w-8 text-amber-400" />
                <span className="text-2xl font-bold">{stats.totalJobs}</span>
              </div>
              <h3 className="text-lg font-bold text-amber-300">Active Jobs</h3>
            </div>

            <div className="rounded-xl border border-amber-400/30 bg-slate-900/60 p-6">
              <div className="flex items-center justify-between mb-4">
                <BadgeDollarSign className="h-8 w-8 text-amber-400" />
                <span className="text-2xl font-bold">{stats.totalVendors}</span>
              </div>
              <h3 className="text-lg font-bold text-amber-300">Vendors</h3>
            </div>

            <div className="rounded-xl border border-amber-400/30 bg-slate-900/60 p-6">
              <div className="flex items-center justify-between mb-4">
                <Mail className="h-8 w-8 text-amber-400" />
                <span className="text-2xl font-bold">{stats.totalSeekers}</span>
              </div>
              <h3 className="text-lg font-bold text-amber-300">Job Seekers</h3>
            </div>
          </div>

          <div className="rounded-xl border border-amber-400/30 bg-slate-900/60 p-6">
            <h2 className="text-xl font-bold text-amber-300 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-4 rounded-lg transition-colors">
                Manage Users
              </button>
              <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-4 rounded-lg transition-colors">
                Manage Jobs
              </button>
              <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-4 rounded-lg transition-colors">
                View Reports
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Seeker Dashboard
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
            <h2 className="mb-4 text-lg font-bold text-amber-300">Welcome Back!</h2>
            <p className="text-sm">Email: {sessionEmail}</p>
            <p className="text-sm mt-2">Your dashboard is ready for job searching.</p>
          </section>
        </div>
      </main>
    );
  }

  // Vendor Dashboard
  if (role === "vendor") {
    return (
      <main className="min-h-screen bg-[#0a2351] text-white px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <header className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-black">Vendor Dashboard</h1>
            <span className="rounded-full px-3 py-1 text-sm" style={{ backgroundColor: "#ffcc00", color: "#0a2351" }}>
              Vendor
            </span>
          </header>
          <section className="rounded-2xl border border-amber-400/30 bg-slate-900/60 p-5">
            <h2 className="mb-4 text-lg font-bold text-amber-300">Welcome Back!</h2>
            <p className="text-sm">Email: {sessionEmail}</p>
            <p className="text-sm mt-2">Your vendor dashboard is ready for job posting.</p>
          </section>
        </div>
      </main>
    );
  }

  // Default/Fallback
  return (
    <main className="min-h-screen bg-[#0a2351] text-white px-4 py-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-2xl font-black mb-4">Dashboard</h1>
        <p>Loading your dashboard...</p>
      </div>
    </main>
  );
}
