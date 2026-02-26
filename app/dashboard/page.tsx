import type { Metadata } from "next";
import MasterControlCenter from "@/components/dashboard/MasterControlCenter";

export const metadata: Metadata = {
  title: "Master Control Center | Fast Job Career",
  description:
    "Super Admin Master Control Center for Fast Job Career – users, jobs, revenue, ads, and automation in one luxury dashboard.",
};

export default function DashboardPage() {
  return <MasterControlCenter />;
}

