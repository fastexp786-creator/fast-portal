import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import ResourceHub from "@/components/ResourceHub";
import Stats from "@/components/Stats";

export const metadata: Metadata = {
  title: "Global Resource Hub | Embassies, Airlines & Industry News",
  description:
    "Access embassy updates, airline careers, hotel industry hiring, and global cruise opportunities in one premium resource hub.",
  alternates: {
    canonical: `${SITE_URL}/resource-hub`,
  },
  openGraph: {
    url: `${SITE_URL}/resource-hub`,
    title: "Global Resource Hub | Fast Job Career",
    description:
      "Embassy links, airline news, hotel projects, and cruise staffing updates for global jobseekers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ResourceHubPage() {
  return (
    <main className="min-h-screen bg-[#020617] pb-20 pt-10 text-slate-100">
      <section className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Intelligence Layer
          </p>
          <h1 className="mt-3 text-3xl font-black text-amber-300 md:text-4xl">
            Global Job & Travel Resource Hub
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
            Embassy updates, airline and hotel hiring, and cruise staffing feeds
            curated for serious worldwide jobseekers.
          </p>
        </div>
      </section>
      <div className="bg-[#020617]">
        <ResourceHub />
        <Stats />
      </div>
    </main>
  );
}

