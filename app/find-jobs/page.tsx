import type { Metadata } from "next";
import { Suspense } from "react";
import { SITE_URL } from "@/lib/constants";
import FindJobsContent from "@/components/FindJobsContent";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Find Premium Jobs | Fast Portal",
  description: "Search jobs by Title, Type, and Salary. Admin, Vendor, and Affiliate listings across all countries.",
  keywords: "jobs, job search, employment, career, recruitment, job listings, job portal",
  authors: [{ name: "Fast Portal" }],
  creator: "Fast Portal",
  publisher: "Fast Portal",
  alternates: {
    canonical: `${SITE_URL}/find-jobs`,
  },
  openGraph: {
    url: `${SITE_URL}/find-jobs`,
    title: "Find Premium Jobs | Fast Portal",
    description: "Advanced job search with premium filters for Title, Type, and Salary.",
    type: "website",
    siteName: "Fast Portal",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Premium Jobs | Fast Portal",
    description: "Advanced job search with premium filters for Title, Type, and Salary.",
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
          <p className="text-navy-800 font-bold animate-pulse">Loading Premium Jobs...</p>
        </div>
      }>
        <FindJobsContent />
      </Suspense>
    </div>
  );
}
