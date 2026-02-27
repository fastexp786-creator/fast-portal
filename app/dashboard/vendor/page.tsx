import type { Metadata } from "next";
import VendorDashboard from "@/components/dashboard/VendorDashboard";

export const metadata: Metadata = {
  title: "Vendor Dashboard | Fast Job Career",
  description: "Vendor dashboard for employers to manage job postings and applicants on Fast Job Career portal.",
  robots: { index: false, follow: false }
};

export default function VendorDashboardPage() {
  return <VendorDashboard />;
}
