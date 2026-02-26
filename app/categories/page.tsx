import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import Categories from "@/components/Categories";

export const metadata: Metadata = {
  title: "All Job Categories | Fast Job Career",
  description:
    "Browse all job categories including USA, UK, Gulf, India, Pakistan, Malaysia and more in a premium navy & gold layout.",
  alternates: {
    canonical: `${SITE_URL}/categories`,
  },
  openGraph: {
    url: `${SITE_URL}/categories`,
    title: "All Job Categories | Fast Job Career",
    description:
      "Explore all job categories across Gulf, Europe, UK and Asia from a single global control center.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AllCategoriesPage() {
  return (
    <main className="min-h-screen bg-[#020617] pb-20 pt-10 text-slate-100">
      <section className="mx-auto max-w-5xl px-4">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            All Categories
          </p>
          <h1 className="mt-3 text-3xl font-black text-amber-300 md:text-4xl">
            Explore Every Job Category
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
            Quickly jump into USA, UK, Gulf, Pakistan, Malaysia and other
            regions through our curated category library.
          </p>
        </div>
      </section>
      <section className="bg-[#020617]">
        <Categories />
      </section>
    </main>
  );
}

