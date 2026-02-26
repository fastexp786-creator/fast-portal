import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Worldwide Travel & Visa Services | Fast Job Career",
  description:
    "Luxury worldwide travel services including visit visas, Umrah 2026, luxury hotel stays, cruise packages, and global air tickets.",
  alternates: {
    canonical: `${SITE_URL}/travel`,
  },
  openGraph: {
    url: `${SITE_URL}/travel`,
    title: "Worldwide Travel & Visa Services | Fast Job Career",
    description:
      "Premium visit visa, Umrah, hotel, cruise, and air ticket services with a luxury navy and gold experience.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TravelPage() {
  return (
    <main className="min-h-screen bg-[#020617] pb-20 pt-10 text-slate-100">
      <section className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Luxury Travel Desk
          </p>
          <h1 className="mt-3 text-3xl font-black text-amber-300 md:text-4xl">
            Worldwide Job & Travel Experiences
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
            From visit visas to Umrah 2026, luxury hotels, cruises, and air
            tickets – manage your entire journey in one navy &amp; gold powered
            portal.
          </p>
        </div>
      </section>
      <div className="bg-[#020617]">
        <Services />
      </div>
    </main>
  );
}

