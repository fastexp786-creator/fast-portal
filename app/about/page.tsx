import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import PageSidebar from "@/components/PageSidebar";

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
    <main className="min-h-screen bg-[var(--light)] dark:bg-[#020617] text-[var(--text-color)]">
      <div className="page-with-sidebar">
        <PageSidebar activeSlug="about" />
        <div className="page-main-content">
          <section className="mx-auto max-w-5xl px-4 py-10">
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

            {/* About Cards - Same style as home page */}
            <div className="main-grid mb-10">
              <div className="info-card">
                <i className="fas fa-globe" />
                <h3>Global Reach</h3>
                <p>
                  From Gulf work visas to European permits and worldwide hospitality
                  roles, Fast Job Career has helped thousands of candidates secure
                  life-changing opportunities.
                </p>
              </div>

              <div className="info-card">
                <i className="fas fa-handshake" />
                <h3>Verified Partners</h3>
                <p>
                  By combining a curated job engine, verified vendors, and travel
                  services under one roof, we give both candidates and employers a
                  single global control center.
                </p>
              </div>

              <div className="info-card">
                <i className="fas fa-crown" />
                <h3>Premium Support</h3>
                <p>
                  Our luxury navy and gold identity reflects the trust, stability,
                  and premium support you can expect on your career journey.
                </p>
              </div>

              <div className="info-card">
                <i className="fas fa-shield-alt" />
                <h3>Safe Pathways</h3>
                <p>
                  Our mission is simple: a safe, premium pathway to international
                  careers and travel with complete transparency and support.
                </p>
              </div>

              <div className="info-card">
                <i className="fas fa-rocket" />
                <h3>Career Growth</h3>
                <p>
                  We provide comprehensive career development resources and
                  personalized guidance to help you achieve your professional goals.
                </p>
              </div>

              <div className="info-card">
                <i className="fas fa-passport" />
                <h3>Travel Integration</h3>
                <p>
                  Complete travel and visa support services to ensure smooth
                  transitions to your international career destinations.
                </p>
              </div>
            </div>

            <div className="space-y-6 text-sm text-slate-200">
              <p>
                Fast Job Career stands as the world's premier job portal, combining
                cutting-edge technology with human expertise to create unmatched
                career opportunities globally.
              </p>
              <p>
                Our commitment to excellence ensures that every candidate receives
                personalized attention, while employers get access to top-tier talent
                from around the world.
              </p>
            </div>
          </section>

          <section className="mt-10">
            <Stats />
          </section>

          <section className="mt-10">
            <Testimonials />
          </section>
        </div>
      </div>
    </main>
  );
}

