import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import Contact from "@/components/Contact";
import PageSidebar from "@/components/PageSidebar";

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
    <main className="min-h-screen bg-[var(--light)] dark:bg-[#020617] text-[var(--text-color)]">
      <div className="page-with-sidebar">
        <PageSidebar activeSlug="contact" />
        <div className="page-main-content">
          <section className="mx-auto max-w-4xl px-4 py-10">
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

          {/* Contact Info Cards - Same style as home page */}
          <section className="mx-auto max-w-4xl px-4">
            <div className="main-grid mb-10">
              <div className="info-card">
                <i className="fas fa-headset" />
                <h3>24/7 Support</h3>
                <p>
                  Round-the-clock assistance for all your job and travel related queries.
                </p>
              </div>

              <div className="info-card">
                <i className="fas fa-briefcase" />
                <h3>Job Inquiries</h3>
                <p>
                  Get personalized job recommendations and career guidance from our experts.
                </p>
              </div>

              <div className="info-card">
                <i className="fas fa-passport" />
                <h3>Visa Support</h3>
                <p>
                  Complete visa assistance and documentation help for international opportunities.
                </p>
              </div>

              <div className="info-card">
                <i className="fas fa-handshake" />
                <h3>Partnerships</h3>
                <p>
                  Collaborate with us as a vendor, employer, or travel partner.
                </p>
              </div>

              <div className="info-card">
                <i className="fas fa-newspaper" />
                <h3>Media Inquiries</h3>
                <p>
                  Press releases, interviews, and media collaboration requests.
                </p>
              </div>

              <div className="info-card">
                <i className="fas fa-globe" />
                <h3>Global Offices</h3>
                <p>
                  Connect with our teams across UAE, UK, USA, and Asia for local support.
                </p>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-4xl px-4">
            <Contact />
          </section>
        </div>
      </div>
    </main>
  );
}

