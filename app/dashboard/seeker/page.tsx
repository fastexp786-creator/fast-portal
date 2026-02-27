import type { Metadata } from "next";
import SeekerDashboard from "@/components/dashboard/SeekerDashboard";

export const metadata: Metadata = {
  title: "Job Seeker Dashboard | Fast Job Career",
  description: "Job seeker dashboard for managing profile, resumes, and job applications on Fast Job Career portal.",
};

export default function SeekerDashboardPage() {
  return <SeekerDashboard />;
}