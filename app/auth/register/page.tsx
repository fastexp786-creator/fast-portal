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

export default function AuthRegisterPage() {
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
  const progressTimer = useRef<number | null>(null);

  const canSubmit = useMemo(() => {
    return fullName.trim() && email.trim() && whatsapp.trim() && location.trim();
  }, [fullName, email, whatsapp, location]);

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

  const onSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!canSubmit) return;
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
            body: JSON.stringify({ type: "seeker_registered", fullName, email, whatsapp, location, category, cvUrl }),
          });
        } catch {}

        await supabase.from("activity_logs").insert({
          action: "seeker_registered",
          metadata: { email, full_name: fullName, phone: whatsapp, location, category, cv_url: cvUrl },
        });
        setSuccess("Registration submitted successfully");
        setFullName("");
        setEmail("");
        setWhatsapp("");
        setLocation("");
        setCategory("");
        setFile(null);
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
    [canSubmit, file, fullName, email, whatsapp, location, category]
  );

  return (
    <main className="min-h-screen bg-[#0a2351] text-white px-4 py-8">
      <div className="mx-auto max-w-xl">
        <h1 className="text-2xl font-black">Seeker Registration</h1>
        <p className="mt-1 text-sm text-amber-300">Upload CV and provide contact details</p>
        {error && (
          <div className="mt-4 rounded-lg border border-red-500/40 bg-red-950/50 px-3 py-2 text-sm text-red-100">
            {error}
          </div>
        )}
        {success && (
          <div className="mt-4 rounded-lg border border-emerald-500/40 bg-emerald-900/40 px-3 py-2 text-sm text-emerald-100">
            {success}
          </div>
        )}
        <form onSubmit={onSubmit} className="mt-6 space-y-4 rounded-2xl border border-amber-400/30 bg-slate-900/60 p-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-amber-300 mb-1">Full Name</label>
            <input value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none" placeholder="e.g., Ali Khan" required />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-amber-300 mb-1">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none" placeholder="you@example.com" required />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-amber-300 mb-1">WhatsApp</label>
            <input value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none" placeholder="+92 3XX XXXXXXX" required />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-amber-300 mb-1">Location</label>
            <input value={location} onChange={(e) => setLocation(e.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none" placeholder="City, Country" required />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-amber-300 mb-1">Category</label>
            <input value={category} onChange={(e) => setCategory(e.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none" placeholder="e.g., Accounting, Driving, IT & Software" />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-amber-300 mb-1">Upload CV (PDF/Doc)</label>
            <input type="file" accept=".pdf,.doc,.docx" onChange={handleFile} className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none" />
            {progress > 0 && (
              <div className="mt-2 h-2 w-full rounded bg-slate-800">
                <div className="h-2 rounded bg-amber-400 transition-all" style={{ width: `${progress}%` }} />
              </div>
            )}
          </div>
          <div>
            <button type="submit" disabled={!canSubmit || submitting} className="w-full rounded-lg bg-amber-400 px-4 py-2 text-sm font-bold text-slate-900 disabled:opacity-60">
              {submitting ? "Submitting..." : "Submit Registration"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
