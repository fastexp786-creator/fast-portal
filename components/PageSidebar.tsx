"use client";

import Link from "next/link";
import {
  BookOpen,
  Briefcase,
  Flag,
  Globe2,
  Hotel,
  Plane,
  Ship,
  Umbrella,
  List,
} from "lucide-react";

const JOB_CATEGORIES = [
  { slug: "all-jobs", label: "All Jobs", icon: List },
  { slug: "usa-jobs", label: "USA Jobs", icon: Flag },
  { slug: "uk-jobs", label: "UK Jobs", icon: Briefcase },
  { slug: "saudi-arabia-jobs", label: "Saudi Arabia", icon: Globe2 },
  { slug: "uae-jobs", label: "UAE", icon: Globe2 },
  { slug: "qatar-jobs", label: "Qatar", icon: Globe2 },
  { slug: "kuwait-jobs", label: "Kuwait", icon: Globe2 },
  { slug: "oman-jobs", label: "Oman", icon: Globe2 },
  { slug: "bahrain-jobs", label: "Bahrain", icon: Globe2 },
  { slug: "india-jobs", label: "India Jobs", icon: Flag },
  { slug: "pakistan-jobs", label: "Pakistan Jobs", icon: Flag },
  { slug: "malaysia-jobs", label: "Malaysia Jobs", icon: Flag },
];

interface PageSidebarProps {
  /** Highlight this link (e.g. current service slug or job country) */
  activeSlug?: string;
}

export default function PageSidebar({ activeSlug }: PageSidebarProps) {
  return (
    <aside className="page-sidebar">
      <div className="page-sidebar-inner">
        <h3 className="page-sidebar-title">Resource Hub</h3>
        <nav className="page-sidebar-nav">
          <Link
            href="/resource-hub"
            className={`page-sidebar-item ${activeSlug === "resource-hub" ? "active" : ""}`}
          >
            <BookOpen className="page-sidebar-icon" aria-hidden />
            <span>Resource Hub</span>
          </Link>
          <Link
            href="/about"
            className={`page-sidebar-item ${activeSlug === "about" ? "active" : ""}`}
          >
            <BookOpen className="page-sidebar-icon" aria-hidden />
            <span>About Us</span>
          </Link>
          <Link
            href="/contact"
            className={`page-sidebar-item ${activeSlug === "contact" ? "active" : ""}`}
          >
            <BookOpen className="page-sidebar-icon" aria-hidden />
            <span>Contact</span>
          </Link>
        </nav>

        <h3 className="page-sidebar-title">Job Categories</h3>
        <nav className="page-sidebar-nav">
          {JOB_CATEGORIES.map(({ slug, label, icon: Icon }) => (
            <Link
              key={slug}
              href={slug === "all-jobs" ? "/jobs" : `/jobs/${slug}`}
              className={`page-sidebar-item ${activeSlug === slug ? "active" : ""}`}
            >
              <Icon className="page-sidebar-icon" aria-hidden />
              <span>{label}</span>
            </Link>
          ))}
        </nav>

        <h3 className="page-sidebar-title">Travel Services</h3>
        <nav className="page-sidebar-nav">
          <Link
            href="/services/visit-visa-tours"
            className={`page-sidebar-item ${activeSlug === "visit-visa-tours" ? "active" : ""}`}
          >
            <Plane className="page-sidebar-icon" aria-hidden />
            <span>Visit Visa & Tours</span>
          </Link>
          <Link
            href="/services/air-tickets"
            className={`page-sidebar-item ${activeSlug === "air-tickets" ? "active" : ""}`}
          >
            <Plane className="page-sidebar-icon" aria-hidden />
            <span>Air Tickets</span>
          </Link>
          <Link
            href="/services/luxury-stays"
            className={`page-sidebar-item ${activeSlug === "luxury-stays" ? "active" : ""}`}
          >
            <Hotel className="page-sidebar-icon" aria-hidden />
            <span>Luxury Stays</span>
          </Link>
          <Link
            href="/services/cruise-cloud"
            className={`page-sidebar-item ${activeSlug === "cruise-cloud" ? "active" : ""}`}
          >
            <Ship className="page-sidebar-icon" aria-hidden />
            <span>Cruise Cloud</span>
          </Link>
          <Link
            href="/services/umrah-2026"
            className={`page-sidebar-item ${activeSlug === "umrah-2026" ? "active" : ""}`}
          >
            <Umbrella className="page-sidebar-icon" aria-hidden />
            <span>Umrah 2026</span>
          </Link>
          <Link
            href="/services/premium-rentals"
            className={`page-sidebar-item ${activeSlug === "premium-rentals" ? "active" : ""}`}
          >
            <Plane className="page-sidebar-icon" aria-hidden />
            <span>Premium Rentals</span>
          </Link>
        </nav>
      </div>
    </aside>
  );
}
