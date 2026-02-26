import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Fast Job Career | Support & Inquiries",
  description:
    "Contact Fast Job Career for job inquiries, visa support, vendor onboarding, and global partnership opportunities.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    url: `${SITE_URL}/contact`,
    title: "Contact Fast Job Career",
    description:
      "Reach our global job and travel support team for assistance and partnerships.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#020617] pb-20 pt-10 text-slate-100">
      <section className="mx-auto max-w-4xl px-4">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Contact Desk
          </p>
          <h1 className="mt-3 text-3xl font-black text-amber-300 md:text-4xl">
            Talk To Our Global Team
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
            For job updates, visa guidance, vendor partnerships, or media
            inquiries, share your details and our experts will respond.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4">
        <Contact />
      </section>
    </main>
  );
}

