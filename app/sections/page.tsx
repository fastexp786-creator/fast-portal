import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import Services from "@/components/Services";
import Categories from "@/components/Categories";
import ResourceHub from "@/components/ResourceHub";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "All Sections | Fast Job Career Portal Overview",
  description:
    "Discover all major sections of the Fast Job Career portal including Travel Services, Categories, Resource Hub, Stats, and Testimonials.",
  alternates: {
    canonical: `${SITE_URL}/sections`,
  },
  openGraph: {
    url: `${SITE_URL}/sections`,
    title: "All Sections | Fast Job Career",
    description:
      "A luxury navy & gold overview page linking to every major section and experience on the portal.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AllSectionsPage() {
  return (
    <main className="min-h-screen bg-[#020617] pb-20 pt-10 text-slate-100">
      <section className="mx-auto max-w-5xl px-4">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Portal Overview
          </p>
          <h1 className="mt-3 text-3xl font-black text-amber-300 md:text-4xl">
            All Sections in One View
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
            Quickly preview and access every high-value section of your portal:
            travel, job categories, resources, stats, and social proof.
          </p>
        </div>
      </section>
      <section className="bg-[#020617]">
        <Services />
        <Categories />
        <ResourceHub />
        <Stats />
        <Testimonials />
      </section>
    </main>
  );
}

