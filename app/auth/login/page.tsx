"use client";

import { useCallback } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const loginWithGoogle = useCallback(async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: typeof window !== "undefined" ? window.location.origin : undefined,
      },
    });
  }, []);

  const adminBypass = useCallback(() => {
    const code = typeof window !== "undefined" ? window.prompt("Enter admin code") : null;
    if (code === "admin123") {
      try {
        localStorage.setItem("fjc_admin_bypass", "1");
        window.location.href = "/dashboard";
      } catch {
        window.location.href = "/dashboard";
      }
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#0a2351] text-white px-4 py-8">
      <div className="mx-auto max-w-md">
        <h1 className="text-2xl font-black">Sign in to Continue</h1>
        <p className="mt-1 text-sm text-amber-300">Access your dashboard and manage applications</p>
        <div className="mt-6 space-y-3 rounded-2xl border border-amber-400/30 bg-slate-900/60 p-5">
          <button
            type="button"
            onClick={loginWithGoogle}
            className="w-full rounded-lg bg-amber-400 px-4 py-2 text-sm font-bold text-slate-900"
          >
            Continue with Google
          </button>
          <button
            type="button"
            onClick={adminBypass}
            className="w-full rounded-lg border border-amber-400 px-4 py-2 text-sm font-bold text-amber-300"
          >
            Admin Bypass
          </button>
        </div>
      </div>
    </main>
  );
}

