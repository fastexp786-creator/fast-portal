"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useTranslations } from "next-intl";

export default function AuthRegisterPage() {
  const t = useTranslations("auth");
  const [activeTab, setActiveTab] = useState<"seeker" | "vendor" | "admin">("seeker");

  const loginWithGoogle = async () => {
    // Google OAuth temporarily disabled - enable in Supabase dashboard
    alert(t("googleDisabledNote"));
  };

  const loginWithApple = async () => {
    // Apple login temporarily disabled
    alert(t("appleDisabledNote"));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a2351] to-[#1e3a8a] text-white px-4 py-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            {t("joinTitle")}
          </h1>
          <p className="mt-2 text-slate-300">{t("chooseRole")}</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-800/50 rounded-xl p-1 flex">
            {["seeker", "vendor", "admin"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as "seeker" | "vendor" | "admin")}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "bg-amber-500 text-slate-900"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {tab === "seeker" ? t("seeker") : tab === "vendor" ? t("vendor") : t("admin")}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Seeker Card */}
          <div className={`rounded-2xl border-2 p-6 transition-all ${
            activeTab === "seeker" 
              ? "border-amber-400 bg-slate-800/60" 
              : "border-slate-700/50 bg-slate-800/30"
          }`}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-amber-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">👤</span>
              </div>
              <h3 className="text-xl font-bold text-amber-300">{t("seeker")}</h3>
              <p className="text-slate-400 text-sm mt-1">{t("seekerTagline")}</p>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-3 mb-6">
              <button
                onClick={loginWithGoogle}
                className="w-full flex items-center justify-center gap-2 bg-white text-slate-900 rounded-lg px-4 py-3 text-sm font-semibold hover:bg-slate-100 transition-colors"
              >
                <span className="w-5 h-5">🔍</span>
                {t("continueGoogle")}
              </button>
              <button
                onClick={loginWithApple}
                className="w-full flex items-center justify-center gap-2 bg-black text-white rounded-lg px-4 py-3 text-sm font-semibold hover:bg-slate-800 transition-colors"
              >
                <span className="w-5 h-5">🍎</span>
                {t("continueApple")}
              </button>
            </div>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-600"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-slate-800 px-2 text-slate-400">{t("orRegisterEmail")}</span>
              </div>
            </div>

            {/* Registration Link */}
            <Link
              href="/auth/register/seeker"
              className="block w-full text-center bg-amber-500 text-slate-900 rounded-lg px-4 py-3 text-sm font-semibold hover:bg-amber-400 transition-colors"
            >
              {t("registerAsSeeker")}
            </Link>
          </div>

          {/* Vendor Card */}
          <div className={`rounded-2xl border-2 p-6 transition-all ${
            activeTab === "vendor" 
              ? "border-green-400 bg-slate-800/60" 
              : "border-slate-700/50 bg-slate-800/30"
          }`}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-green-300">{t("vendor")}</h3>
              <p className="text-slate-400 text-sm mt-1">{t("vendorTagline")}</p>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-3 mb-6">
              <button
                onClick={loginWithGoogle}
                className="w-full flex items-center justify-center gap-2 bg-white text-slate-900 rounded-lg px-4 py-3 text-sm font-semibold hover:bg-slate-100 transition-colors"
              >
                <span className="w-5 h-5">🔍</span>
                {t("continueGoogle")}
              </button>
              <button
                onClick={loginWithApple}
                className="w-full flex items-center justify-center gap-2 bg-black text-white rounded-lg px-4 py-3 text-sm font-semibold hover:bg-slate-800 transition-colors"
              >
                <span className="w-5 h-5">🍎</span>
                {t("continueApple")}
              </button>
            </div>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-600"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-slate-800 px-2 text-slate-400">{t("orRegisterEmail")}</span>
              </div>
            </div>

            {/* Registration Link */}
            <Link
              href="/auth/vendor-register"
              className="block w-full text-center bg-green-500 text-slate-900 rounded-lg px-4 py-3 text-sm font-semibold hover:bg-green-400 transition-colors"
            >
              {t("registerAsVendor")}
            </Link>
          </div>

          {/* Admin Card */}
          <div className={`rounded-2xl border-2 p-6 transition-all ${
            activeTab === "admin" 
              ? "border-purple-400 bg-slate-800/60" 
              : "border-slate-700/50 bg-slate-800/30"
          }`}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold text-purple-300">{t("admin")}</h3>
              <p className="text-slate-400 text-sm mt-1">{t("adminTagline")}</p>
            </div>

            {/* Admin Note */}
            <div className="bg-slate-700/50 rounded-lg p-4 mb-6">
              <p className="text-sm text-slate-300 text-center">
                {t("adminInvitationNote")}
              </p>
            </div>

            {/* Admin Login Button */}
            <Link
              href="/auth/login"
              className="block w-full text-center bg-purple-500 text-white rounded-lg px-4 py-3 text-sm font-semibold hover:bg-purple-400 transition-colors"
            >
              {t("adminLogin")}
            </Link>
          </div>
        </div>

        {/* Captcha Note */}
        <div className="text-center mt-8">
          <p className="text-sm text-slate-400">
            {t("captchaNote")}
          </p>
        </div>
      </div>
    </main>
  );
}
