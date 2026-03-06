import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import PageSidebar from "@/components/PageSidebar";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "About Fast Portal | Worldwide Job & Travel Platform",
  description:
    "Fast Portal connects global talent with premium employers across Gulf, Europe, UK, and beyond – with integrated travel and visa support.",
  keywords: "about fast portal, company profile, job portal, travel services, global opportunities",
  authors: [{ name: "Fast Portal" }],
  creator: "Fast Portal",
  publisher: "Fast Portal",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    url: `${SITE_URL}/about`,
    title: "About Fast Portal | Worldwide Job & Travel Platform",
    description:
      "Luxury navy & gold powered global job portal with travel, visas, and career services.",
    type: "website",
    siteName: "Fast Portal",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Fast Portal | Worldwide Job & Travel Platform",
    description: "Luxury navy & gold powered global job portal with travel, visas, and career services.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
                career opportunities globally. Our platform serves as a comprehensive
                ecosystem where ambitious professionals meet leading employers from
                Gulf countries, European nations, the United Kingdom, and beyond.
              </p>
              <p>
                Founded with a vision to revolutionize international recruitment,
                Fast Job Career has successfully placed thousands of candidates in
                their dream positions across various industries including healthcare,
                engineering, hospitality, construction, and technology. Our
                sophisticated matching algorithm ensures that candidates are connected
                with opportunities that align perfectly with their skills, experience,
                and career aspirations.
              </p>
              <p>
                What sets us apart is our unwavering commitment to transparency and
                trust. Every employer on our platform undergoes rigorous verification
                processes, and we provide complete support throughout the recruitment
                journey - from initial application to final placement and beyond.
                Our dedicated team of career consultants works tirelessly to ensure
                that each candidate receives personalized guidance tailored to their
                unique circumstances and goals.
              </p>
              <p>
                Our integrated travel and visa services further streamline the
                international job-seeking process. We understand that moving to a new
                country involves more than just finding a job - it's about building a
                new life. That's why we offer comprehensive relocation support,
                including visa assistance, travel arrangements, and cultural orientation
                programs to help candidates transition smoothly into their new roles
                and environments.
              </p>
              <p>
                Fast Job Career's success is built on three core pillars: innovation,
                integrity, and impact. We continuously invest in advanced technologies
                to enhance our platform's capabilities, maintain the highest ethical
                standards in all our operations, and measure our success by the
                positive impact we create in the lives of our candidates and the
                businesses we serve. Our mission extends beyond mere job placement -
                we aim to foster long-term career growth and create lasting value for
                all stakeholders in the global employment ecosystem.
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

