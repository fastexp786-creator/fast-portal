"use client";

import { useCallback, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

function generateCaptcha() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  return {
    question: `${num1} + ${num2}`,
    answer: num1 + num2
  };
}

export default function VendorRegistrationPage() {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [captcha, setCaptcha] = useState(() => generateCaptcha());
  const [captchaAnswer, setCaptchaAnswer] = useState("");

  const canSubmit = useMemo(() => {
    return (
      companyName.trim() && 
      email.trim() && 
      contactPerson.trim() && 
      phone.trim() &&
      captchaAnswer.trim() &&
      parseInt(captchaAnswer) === captcha.answer
    );
  }, [companyName, email, contactPerson, phone, captchaAnswer, captcha.answer]);

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

      try {
        // Insert vendor registration
        const { error: insErr } = await supabase.from("vendor_registrations").insert({
          company_name: companyName,
          email,
          contact_person: contactPerson,
          phone,
          website: website || null,
          business_type: businessType || null,
          description: description || null,
          status: "pending"
        });

        if (insErr) throw insErr;

        // Send email notification to admin
        try {
          await fetch("/api/email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
              type: "vendor_registration", 
              companyName, 
              email, 
              contactPerson, 
              phone,
              website,
              businessType
            }),
          });
        } catch {}

        // Log activity
        await supabase.from("activity_logs").insert({
          action: "vendor_registration_submitted",
          metadata: { companyName, email, contactPerson, phone }
        });

        setSuccess("Vendor registration submitted successfully! Your account will be activated after admin approval.");
        
        // Reset form
        setCompanyName("");
        setEmail("");
        setContactPerson("");
        setPhone("");
        setWebsite("");
        setBusinessType("");
        setDescription("");
        setCaptchaAnswer("");
        refreshCaptcha();

      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to submit registration");
      } finally {
        setSubmitting(false);
      }
    },
    [canSubmit, companyName, email, contactPerson, phone, website, businessType, description, captchaAnswer, captcha.answer, refreshCaptcha]
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white px-4 py-8">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Vendor Registration</h1>
          <p className="text-blue-200">Register your company to post jobs and find talented candidates</p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mb-6">
          <div className="bg-blue-800 rounded-lg p-1 flex">
            <Link href="/auth/register" className="px-4 py-2 rounded-md text-sm">
              Job Seeker
            </Link>
            <button className="px-4 py-2 bg-blue-600 rounded-md text-sm font-medium">
              Vendor/Employer
            </button>
          </div>
        </div>

        {/* Messages */}
        {error && (
          <div className="mb-4 rounded-lg border border-red-500 bg-red-900/50 px-4 py-3 text-sm">
            {error}
          </div>
        )}
        
        {success && (
          <div className="mb-4 rounded-lg border border-green-500 bg-green-900/50 px-4 py-3 text-sm">
            {success}
          </div>
        )}

        {/* Registration Form */}
        <form onSubmit={onSubmit} className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Company Name *</label>
              <input 
                value={companyName} 
                onChange={(e) => setCompanyName(e.target.value)} 
                className="w-full rounded-lg border border-gray-600 bg-white/5 px-3 py-2 text-white placeholder-gray-400" 
                placeholder="Your company name" 
                required 
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email Address *</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full rounded-lg border border-gray-600 bg-white/5 px-3 py-2 text-white placeholder-gray-400" 
                placeholder="company@example.com" 
                required 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Contact Person *</label>
              <input 
                value={contactPerson} 
                onChange={(e) => setContactPerson(e.target.value)} 
                className="w-full rounded-lg border border-gray-600 bg-white/5 px-3 py-2 text-white placeholder-gray-400" 
                placeholder="Full name" 
                required 
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone Number *</label>
              <input 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                className="w-full rounded-lg border border-gray-600 bg-white/5 px-3 py-2 text-white placeholder-gray-400" 
                placeholder="+1234567890" 
                required 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Website</label>
              <input 
                type="url" 
                value={website} 
                onChange={(e) => setWebsite(e.target.value)} 
                className="w-full rounded-lg border border-gray-600 bg-white/5 px-3 py-2 text-white placeholder-gray-400" 
                placeholder="https://company.com" 
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Business Type</label>
              <select 
                value={businessType} 
                onChange={(e) => setBusinessType(e.target.value)} 
                className="w-full rounded-lg border border-gray-600 bg-white/5 px-3 py-2 text-white"
              >
                <option value="">Select business type</option>
                <option value="IT">IT & Software</option>
                <option value="Construction">Construction</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Retail">Retail</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Company Description</label>
            <textarea 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              rows={3} 
              className="w-full rounded-lg border border-gray-600 bg-white/5 px-3 py-2 text-white placeholder-gray-400" 
              placeholder="Brief description of your company..." 
            />
          </div>

          {/* CAPTCHA */}
          <div className="bg-blue-800/30 rounded-lg p-4 border border-blue-600/30">
            <label className="block text-sm font-medium mb-2 text-blue-300">
              Security Check
            </label>
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <div className="text-sm text-blue-200 mb-1">
                  What is {captcha.question}?
                </div>
                <input
                  type="number"
                  value={captchaAnswer}
                  onChange={(e) => setCaptchaAnswer(e.target.value)}
                  className="w-full rounded-lg border border-gray-600 bg-white/5 px-3 py-2 text-white placeholder-gray-400 outline-none focus:border-blue-400"
                  placeholder="Enter answer"
                  required
                />
              </div>
              <button
                type="button"
                onClick={refreshCaptcha}
                className="text-blue-400 hover:text-blue-300 transition-colors"
                title="Refresh CAPTCHA"
              >
                🔄
              </button>
            </div>
            <p className="text-xs text-blue-300 mt-2">
              Please solve this simple math problem to prove you're human.
            </p>
          </div>

          <div className="pt-4">
            <button 
              type="submit" 
              disabled={!canSubmit || submitting} 
              className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white disabled:opacity-50 hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              {submitting ? "Submitting..." : "Register as Vendor"}
            </button>
          </div>

          <p className="text-center text-sm text-gray-300">
            Your account will be activated after admin approval. You will receive an email confirmation.
          </p>
        </form>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-400">
          <p>Already have an account? </p>
          <p>Contact admin at fastexp786@gmail.com for account issues</p>
        </div>
      </div>
    </main>
  );
}