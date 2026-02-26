"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    // TODO: Integrate with your email service (Mailchimp, Supabase, etc.)
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="newsletter-section" aria-label="Newsletter subscription">
      <div className="newsletter-inner">
        <h3>Stay Updated with Latest Jobs</h3>
        <p>Subscribe to our newsletter for new opportunities and career tips.</p>
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === "loading"}
          />
          <button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
        {status === "success" && (
          <p className="newsletter-success">Thanks for subscribing!</p>
        )}
      </div>
    </section>
  );
}
