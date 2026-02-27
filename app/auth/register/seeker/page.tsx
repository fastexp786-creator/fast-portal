"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { supabase } from "@/lib/supabase";

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function generateCaptcha() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  return {
    question: `${num1} + ${num2}`,
    answer: num1 + num2
  };
}

export default function SeekerRegistrationPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [captcha, setCaptcha] = useState(() => generateCaptcha());
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const progressTimer = useRef<number | null>(null);

  const canSubmit = useMemo(() => {
    return (
      fullName.trim() && 
      email.trim() && 
      whatsapp.trim() && 
      location.trim() &&
      captchaAnswer.trim() &&
      parseInt(captchaAnswer) === captcha.answer
    );
  }, [fullName, email, whatsapp, location, captchaAnswer, captcha.answer]);

  const handleFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] || null;
    if (!f) {
      setFile(null);
      return;
    }
    const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (!allowed.includes(f.type)) {
      setError("Please upload a PDF or Word document (DOC/DOCX).");
      setFile(null);
      return;
    }
    if (f.size > maxSize) {
      setError("File too large. Max 5MB allowed.");
      setFile(null);
      return;
    }
    setError(null);
    setFile(f);
  }, []);

  const refreshCaptcha = useCallback(() => {
    setCaptcha(generateCaptcha());
    setCaptchaAnswer("");
  }, []);

  const onSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!canSubmit) return;
      
      // Verify captcha
      if (parseInt(captchaAnswer) !== captcha.answer) {
        setError("CAPTCHA verification failed. Please try again.");
        refreshCaptcha();
        return;
      }

      setSubmitting(true);
      setError(null);
      setSuccess(null);
      let cvUrl: string | null = null;
      
      try {
        // Simulated progress indicator while uploading
        if (file) {
          setProgress(5);
          progressTimer.current = window.setInterval(() => {
            setProgress((p) => (p < 95 ? p + 5 : p));
          }, 150);
          const base = slugify(fullName || "seeker");
          const ext = file.name.split(".").pop() || "pdf";
          const name = `${base}-cv-${Date.now()}.${ext}`;
          const { error: upErr } = await supabase.storage
            .from("cv_bucket")
            .upload(name, file, { contentType: file.type, upsert: false });
          if (upErr) throw upErr;
          const { data } = supabase.storage.from("cv_bucket").getPublicUrl(name);
          cvUrl = data.publicUrl;
        }

        const { error: insErr } = await supabase.from("seeker_registrations").insert({
          full_name: fullName,
          email,
          phone: whatsapp,
          location,
          category: category || null,
          cv_url: cvUrl,
        });
        if (insErr) throw insErr;

        // Email delivery hook (Edge Function / Webhook)
        try {
          await fetch("/api/email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
              type: "seeker_registered", 
              fullName, 
              email, 
              whatsapp, 
              location, 
              category, 
              cvUrl 
            }),
          });
        } catch {}

        await supabase.from("activity_logs").insert({
          action: "seeker_registered",
          metadata: { email, full_name: fullName, phone: whatsapp, location, category, cv_url: cvUrl },
        });
        
        setSuccess("Registration submitted successfully!");
        setFullName("");
        setEmail("");
        setWhatsapp("");
        setLocation("");
        setCategory("");
        setFile(null);
        setCaptchaAnswer("");
        refreshCaptcha();
        
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to submit registration");
      } finally {
        if (progressTimer.current) {
          window.clearInterval(progressTimer.current);
          progressTimer.current = null;
        }
        setProgress(100);
        setSubmitting(false);
        setTimeout(() => setProgress(0), 800);
      }
    },
    [canSubmit, file, fullName, email, whatsapp, location, category, captchaAnswer, captcha.answer, refreshCaptcha]
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a2351] to-[#1e3a8a] text-white px-4 py-8">
      <div className="mx-auto max-w-xl">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-black text-amber-300">Seeker Registration</h1>
          <p className="mt-1 text-sm text-slate-300">Upload CV and provide contact details</p>
        </div>

        {error && (
          <div className="mb-4 rounded-lg border border-red-500/40 bg-red-950/50 px-3 py-2 text-sm text-red-100">
            {error}
          </div>
        )}
        
        {success && (
          <div className="mb-4 rounded-lg border border-emerald-500/40 bg-emerald-900/40 px-3 py-2 text-sm text-emerald-100">
            {success}
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-amber-400/30 bg-slate-900/60 p-6">
          {/* Personal Information */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-amber-300 mb-1">
              Full Name
            </label>
            <input 
              value={fullName} 
              onChange={(e) => setFullName(e.target.value)} 
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-amber-400" 
              placeholder="e.g., Ali Khan" 
              required 
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-amber-300 mb-1">
              Email
            </label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-amber-400" 
              placeholder="you@example.com" 
              required 
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-amber-300 mb-1">
              WhatsApp
            </label>
            <input 
              value={whatsapp} 
              onChange={(e) => setWhatsapp(e.target.value)} 
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-amber-400" 
              placeholder="+92 3XX XXXXXXX" 
              required 
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-amber-300 mb-1">
              Location
            </label>
            <input 
              value={location} 
              onChange={(e) => setLocation(e.target.value)} 
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-amber-400" 
              placeholder="City, Country" 
              required 
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-amber-300 mb-1">
              Category
            </label>
            <input 
              value={category} 
              onChange={(e) => setCategory(e.target.value)} 
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-amber-400" 
              placeholder="e.g., Accounting, Driving, IT & Software" 
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-amber-300 mb-1">
              Upload CV (PDF/Doc)
            </label>
            <input 
              type="file" 
              accept=".pdf,.doc,.docx" 
              onChange={handleFile} 
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-amber-400" 
            />
            {progress > 0 && (
              <div className="mt-2 h-2 w-full rounded bg-slate-800">
                <div className="h-2 rounded bg-amber-400 transition-all" style={{ width: `${progress}%` }} />
              </div>
            )}
          </div>

          {/* CAPTCHA */}
          <div className="bg-slate-800/50 rounded-lg p-4">
            <label className="block text-xs font-semibold uppercase tracking-wide text-amber-300 mb-2">
              Security Check
            </label>
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <div className="text-sm text-slate-300 mb-1">
                  What is {captcha.question}?
                </div>
                <input
                  type="number"
                  value={captchaAnswer}
                  onChange={(e) => setCaptchaAnswer(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-amber-400"
                  placeholder="Enter answer"
                  required
                />
              </div>
              <button
                type="button"
                onClick={refreshCaptcha}
                className="text-slate-400 hover:text-amber-400 transition-colors"
                title="Refresh CAPTCHA"
              >
                🔄
              </button>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              Please solve this simple math problem to prove you're human.
            </p>
          </div>

          {/* Submit Button */}
          <div>
            <button 
              type="submit" 
              disabled={!canSubmit || submitting} 
              className="w-full rounded-lg bg-amber-500 px-4 py-3 text-sm font-bold text-slate-900 disabled:opacity-60 hover:bg-amber-400 transition-colors"
            >
              {submitting ? "Submitting..." : "Submit Registration"}
            </button>
          </div>
        </form>

        {/* Back Link */}
        <div className="text-center mt-6">
          <a 
            href="/auth/register" 
            className="text-amber-400 hover:text-amber-300 text-sm transition-colors"
          >
            ← Back to Registration Options
          </a>
        </div>
      </div>
    </main>
  );
}