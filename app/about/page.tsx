import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "About Fast Job Career | Worldwide Job & Travel Portal",
  description:
    "Fast Job Career connects global talent with premium employers across Gulf, Europe, UK, and beyond – with integrated travel and visa support.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    url: `${SITE_URL}/about`,
    title: "About Fast Job Career",
    description:
      "Luxury navy & gold powered global job portal with travel, visas, and career services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#020617] pb-20 pt-10 text-slate-100">
      <section className="mx-auto max-w-5xl px-4">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Our Story
          </p>
          <h1 className="mt-3 text-3xl font-black text-amber-300 md:text-4xl">
            Fast Job Career – World No 1 Job Portal
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
            We bridge the gap between global employers and ambitious candidates
            with transparent processes, verified partners, and premium travel
            support.
          </p>
        </div>

        <div className="space-y-6 text-sm text-slate-200">
          <p>
            From Gulf work visas to European permits and worldwide hospitality
            roles, Fast Job Career has helped thousands of candidates secure
            life-changing opportunities. Our mission is simple: a safe, premium
            pathway to international careers and travel.
          </p>
          <p>
            By combining a curated job engine, verified vendors, and travel
            services under one roof, we give both candidates and employers a
            single global control center. Our luxury navy and gold identity
            reflects the trust, stability, and premium support you can expect.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <Stats />
      </section>

      <section className="mt-10">
        <Testimonials />
      </section>
    </main>
  );
}

