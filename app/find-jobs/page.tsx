import type { Metadata } from "next";
import { Suspense } from "react";
import { SITE_URL } from "@/lib/constants";
import FindJobsContent from "@/components/FindJobsContent";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Find Premium Jobs | Fast Job Career",
  description: "Search jobs by Title, Type, and Salary. Admin, Vendor, and Affiliate listings across all countries.",
  alternates: { canonical: "/find-jobs" },
  openGraph: {
    url: `${SITE_URL}/find-jobs`,
    title: "Find Jobs | Fast Job Career",
    description: "Advanced job search with premium filters for Title, Type, and Salary.",
  },
  robots: { index: true, follow: true },
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
