import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard Redirect | Fast Portal",
  description: "Redirecting to admin dashboard...",
};

export default function DashboardPage() {
  // Redirect to new admin dashboard
  redirect("/admin/dashboard");
}

