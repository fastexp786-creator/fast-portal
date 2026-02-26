"use client";

import Link from "next/link";
import { useAuthModal } from "@/components/AuthModalProvider";
import type { ServiceSlug } from "@/lib/service-config";

interface Config {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
}

interface Props {
  slug: ServiceSlug;
  config: Config;
}

const PARTNERS = [
  { href: "https://fastjobcareer.com/visit-visa-tours/", label: "Visit Visa" },
  { href: "https://fastjobcareer.com/air-tickets/", label: "Air Tickets" },
  { href: "https://fastjobcareer.com/luxury-stays/", label: "Luxury Stays" },
  { href: "https://fastjobcareer.com/cruise-careers/", label: "Cruise Cloud" },
];

export default function ServicePageClient({ slug, config }: Props) {
  const { openAuthModal } = useAuthModal();

  const handleBookClick = () => {
    openAuthModal(config.ctaHref);
  };

  return (
    <>
      <div className="hero-mini" data-slug={slug}>
        <h2>{config.title}</h2>
        <p>{config.tagline}</p>
      </div>

      <div className="search-area">
        <div className="mid-title">
          <h2>{config.title} Services</h2>
        </div>
        <p className="text-[var(--text-color)] text-sm opacity-90 mb-4">
          {config.description}
        </p>
        <ul className="space-y-2 mb-6">
          {config.features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <i className="fas fa-check text-[var(--accent)] mt-1" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={handleBookClick}
          className="btn-book-cta"
        >
          <i className="fas fa-calendar-check" />
          {config.ctaLabel}
        </button>
      </div>

      <section className="partners-section">
        <h3 className="text-[var(--primary)] font-bold mb-4 text-lg">
          Related Travel Services
        </h3>
        <div className="partner-links-grid">
          {PARTNERS.map((p) => (
            <a
              key={p.label}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-link"
            >
              <i className="fas fa-external-link-alt" />
              {p.label}
            </a>
          ))}
        </div>
      </section>

      <section className="info-card">
        <h3 className="text-[var(--primary)] font-bold mb-4 text-lg border-b pb-2">
          Need Help?
        </h3>
        <p className="text-sm opacity-90 mb-4">
          Contact our global team for booking support, visa guidance, or custom
          travel packages.
        </p>
        <a
          href="https://wa.me/923100570707"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#25d366] px-6 py-3 text-white font-bold text-sm"
        >
          <i className="fab fa-whatsapp" />
          WhatsApp Support
        </a>
      </section>

      <div className="mt-6 text-center">
        <Link
          href="/categories"
          className="text-[var(--danger)] font-bold text-sm"
        >
          ← Back to Categories
        </Link>
      </div>
    </>
  );
}
