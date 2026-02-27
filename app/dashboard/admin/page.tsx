import type { Metadata } from "next";
import AdminDashboard from "@/components/dashboard/AdminDashboard";

export const metadata: Metadata = {
  title: "Admin Dashboard | Fast Job Career",
  description: "Admin dashboard for managing jobs, users, and portal settings for Fast Job Career portal.",
};

export default function AdminDashboardPage() {
  return <AdminDashboard />;
}