import type { Metadata } from "next";
import { Suspense } from "react";
import { SITE_URL } from "@/lib/constants";
import AdvancedFindJobsContent from "@/components/AdvancedFindJobsContent";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Advanced Job Search | Fast Portal",
  description: "Advanced job search with filters, real-time results, and detailed job listings. Find your perfect job match.",
  keywords: "jobs, job search, employment, career, recruitment, job listings",
  authors: [{ name: "Fast Portal" }],
  creator: "Fast Portal",
  publisher: "Fast Portal",
  alternates: {
    canonical: `${SITE_URL}/find-jobs`,
  },
  openGraph: {
    url: `${SITE_URL}/find-jobs`,
    siteName: "Fast Portal",
    title: "Advanced Job Search | Fast Portal",
    description: "Advanced job search with filters and detailed job listings",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced Job Search | Fast Portal",
    description: "Advanced job search with filters and detailed job listings",
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

export default function FindJobsPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-8">
      <Suspense fallback={
        <div className="flex justify-center items-center h-64">
          <p className="text-navy-800 font-bold animate-pulse">Loading Jobs...</p>
        </div>
      }>
        <AdvancedFindJobsContent />
      </Suspense>
    </div>
  );
}
