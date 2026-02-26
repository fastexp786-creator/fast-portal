"use client";

import Link from "next/link";
import HeroSearchBar from "./HeroSearchBar";

interface HeroProps {
  onFilter: (title: string, country: string) => void;
}

export default function Hero({ onFilter }: HeroProps) {
  return (
    <section id="home" className="hero">
      <h1>WORLD NO 1 JOB PORTAL</h1>
      <p>Connecting Global Talent with the World&apos;s Best Employers</p>
      <HeroSearchBar onSearch={onFilter} />
      <p style={{ marginTop: 15, fontSize: 14 }}>
        <Link href="/find-jobs" style={{ color: "var(--accent)", fontWeight: 700 }}>
          Browse all jobs →
        </Link>
      </p>
    </section>
  );
}
