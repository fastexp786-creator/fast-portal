"use client";

import { useCallback, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const canSubmit = useMemo(() => {
    return fullName.trim() && email.trim() && phone.trim();
  }, [fullName, email, phone]);

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
        if (file) {
          const ext = file.name.split(".").pop() || "pdf";
          const name = `${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`;
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
          phone,
          category: category || null,
          cv_url: cvUrl,
        });
        if (insErr) throw insErr;
        // Confirmation email hook placeholder: log to activity_logs so server/email can pick it
        await supabase.from("activity_logs").insert({
          action: "seeker_registered",
          metadata: { email, full_name: fullName, phone, category, cv_url: cvUrl },
        });
        setSuccess("Registration submitted successfully");
        setFullName("");
        setEmail("");
        setPhone("");
        setCategory("");
        setFile(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to submit registration");
      } finally {
        setSubmitting(false);
      }
    },
    [canSubmit, file, fullName, email, phone, category]
  );

  return (
    <main className="min-h-screen bg-[#0a2351] text-white px-4 py-8">
      <div className="mx-auto max-w-xl">
        <h1 className="text-2xl font-black">Seeker Registration</h1>
        <p className="mt-1 text-sm text-amber-300">Submit your profile and upload CV</p>
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
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none"
              placeholder="e.g., Ali Khan"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-amber-300 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-amber-300 mb-1">Phone</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none"
              placeholder="+92 3XX XXXXXXX"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-amber-300 mb-1">Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none"
              placeholder="e.g., Accounting, Driving, IT & Software"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-amber-300 mb-1">Upload CV (PDF/Doc)</label>
            <input type="file" accept=".pdf,.doc,.docx" onChange={handleFile} className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none" />
          </div>
          <div>
            <button
              type="submit"
              disabled={!canSubmit || submitting}
              className="w-full rounded-lg bg-amber-400 px-4 py-2 text-sm font-bold text-slate-900 disabled:opacity-60"
            >
              {submitting ? "Submitting..." : "Submit Registration"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
