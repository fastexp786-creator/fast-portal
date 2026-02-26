import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partner With Fast Job Career | Vendors, Agencies & Affiliates",
  description:
    "Onboard as a vendor, agency, or affiliate partner to publish premium jobs and travel campaigns on Fast Job Career.",
  alternates: {
    canonical: `${SITE_URL}/partner`,
  },
  openGraph: {
    url: `${SITE_URL}/partner`,
    title: "Partner With Fast Job Career",
    description:
      "Create dedicated partner feeds, embed widgets, and monetize your job and travel inventory globally.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PartnerPage() {
  return (
    <main className="min-h-screen bg-[#020617] pb-20 pt-10 text-slate-100">
      <section className="mx-auto max-w-5xl px-4">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Vendors · Agencies · Affiliates
          </p>
          <h1 className="mt-3 text-3xl font-black text-amber-300 md:text-4xl">
            Become a Global Partner
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
            Publish jobs, travel packages, and campaigns under your own branded
            feed, powered by our Master Control Center.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-amber-300">
              Admin Partners
            </h2>
            <p className="mt-2 text-xs text-slate-300">
              Premium agencies and master vendors with full-featured partner
              feeds and reporting.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-amber-300">
              Vendor Portals
            </h2>
            <p className="mt-2 text-xs text-slate-300">
              Vendors can list verified jobs and link them to WhatsApp, landing
              pages, or external ATS systems.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-amber-300">
              Affiliate Widgets
            </h2>
            <p className="mt-2 text-xs text-slate-300">
              Create embeddable feeds such as `/partner/your-brand` to plug into
              your own website via iframe or widgets.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-amber-500/40 bg-amber-500/5 p-6 text-xs text-slate-100">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-amber-300">
            How to use partner embeds
          </h2>
          <p className="mt-2">
            Example partner feed URLs:
            <br />
            <code className="mt-1 block rounded bg-slate-900/80 px-2 py-1 text-[11px]">
              {SITE_URL}/partner/your-brand-name
            </code>
          </p>
          <p className="mt-2">
            Configure the visual embed behavior in{" "}
            <code>components/PartnerEmbed.tsx</code> and connect it to your
            existing ATS or RSS feed.
          </p>
          <p className="mt-3">
            To get onboarded, contact our Super Admin team on WhatsApp:
            <br />
            <a
              href="https://wa.me/923100570707"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-900"
            >
              <i className="fab fa-whatsapp" />
              Partner Onboarding
            </a>
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-2 text-[11px] font-semibold uppercase tracking-wide text-slate-900 shadow-lg"
          >
            Go to Master Control Center
          </Link>
          <Link
            href="/find-jobs"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-2 text-[11px] font-semibold uppercase tracking-wide text-slate-100"
          >
            View Public Job Feed
          </Link>
        </div>
      </section>
    </main>
  );
}

