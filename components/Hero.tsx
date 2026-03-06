"use client";

import Link from "next/link";
import HeroSearchBar from "./HeroSearchBar";

interface HeroProps {
  onFilter: (title: string, country: string) => void;
}

export default function Hero({ onFilter }: HeroProps) {
  return (
    <section id="home" className="hero">
      <h1 style={{ fontSize: "45px", textTransform: "uppercase", color: "#000000", fontWeight: "900" }}>WORLD NO 1 JOB PORTAL</h1>
      <p className="text-standard" style={{ fontSize: "18px" }}>Connecting Global Talent with World&apos;s Best Employers</p>
      <HeroSearchBar onSearch={onFilter} />
      <p style={{ marginTop: 15, fontSize: 14 }}>
        <Link href="/find-jobs" style={{ fontWeight: 700 }} className="text-standard">
          Browse all jobs →
        </Link>
      </p>
    </section>
  );
}
