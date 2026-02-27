"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { JOBS_TABLE, type JobRow } from "@/lib/jobs-schema";
import { type UserProfile } from "@/lib/admin-schemas";
import {
  Users,
  Briefcase,
  Settings,
  Shield,
  CheckCircle,
  XCircle,
  Edit,
  Trash2,
  BarChart3
} from "lucide-react";

interface DashboardStats {
  totalJobs: number;
  pendingJobs: number;
  activeJobs: number;
  totalUsers: number;
  pendingApprovals: number;
  vendors: number;
  seekers: number;
}

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<DashboardStats>({
    totalJobs: 0,
    pendingJobs: 0,
    activeJobs: 0,
    totalUsers: 0,
    pendingApprovals: 0,
    vendors: 0,
    seekers: 0
  });
  const [pendingJobs, setPendingJobs] = useState<JobRow[]>([]);
  const [pendingUsers, setPendingUsers] = useState<UserProfile[]>([]);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      
      // Load jobs statistics
      const { data: jobsData } = await supabase
        .from(JOBS_TABLE)
        .select("id, status, is_active");

      // Load user statistics
      const { data: usersData } = await supabase
        .from("user_profiles")
        .select("id, role, is_approved");

      // Load pending jobs for approval
      const { data: pendingJobsData } = await supabase
        .from(JOBS_TABLE)
        .select("*")
        .eq("status", "Pending")
        .limit(10)
        .order("created_at", { ascending: false });

      // Load pending user approvals
      const { data: pendingUsersData } = await supabase
        .from("user_profiles")
        .select("*")
        .eq("is_approved", false)
        .limit(10)
        .order("created_at", { ascending: false });

      // Calculate statistics
      const jobsStats = {
        total: jobsData?.length || 0,
        pending: jobsData?.filter(job => job.status === "Pending").length || 0,
        active: jobsData?.filter(job => job.is_active).length || 0
      };

      const usersStats = {
        total: usersData?.length || 0,
        pending: usersData?.filter(user => !user.is_approved).length || 0,
        vendors: usersData?.filter(user => user.role === "vendor").length || 0,
        seekers: usersData?.filter(user => user.role === "seeker").length || 0
      };

      setStats({
        totalJobs: jobsStats.total,
        pendingJobs: jobsStats.pending,
        activeJobs: jobsStats.active,
        totalUsers: usersStats.total,
        pendingApprovals: usersStats.pending,
        vendors: usersStats.vendors,
        seekers: usersStats.seekers
      });

      setPendingJobs(pendingJobsData || []);
      setPendingUsers(pendingUsersData || []);

    } catch (error) {
      console.error("Error loading dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  const approveJob = async (jobId: string) => {
    try {
      const { error } = await supabase
        .from(JOBS_TABLE)
        .update({ status: "Active", is_active: true })
        .eq("id", jobId);

      if (error) throw error;
      
      // Refresh data
      loadDashboardData();
    } catch (error) {
      console.error("Error approving job:", error);
    }
  };

  const rejectJob = async (jobId: string) => {
    try {
      const { error } = await supabase
        .from(JOBS_TABLE)
        .update({ status: "Rejected", is_active: false })
        .eq("id", jobId);

      if (error) throw error;
      
      // Refresh data
      loadDashboardData();
    } catch (error) {
      console.error("Error rejecting job:", error);
    }
  };

  const approveUser = async (userId: string) => {
    try {
      const { error } = await supabase
        .from("user_profiles")
        .update({ is_approved: true })
        .eq("id", userId);

      if (error) throw error;
      
      // Refresh data
      loadDashboardData();
    } catch (error) {
      console.error("Error approving user:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage jobs, users, and portal settings</p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={<Briefcase className="h-6 w-6" />}
            title="Total Jobs"
            value={stats.totalJobs}
            color="blue"
          />
          <StatCard
            icon={<BarChart3 className="h-6 w-6" />}
            title="Pending Jobs"
            value={stats.pendingJobs}
            color="yellow"
          />
          <StatCard
            icon={<CheckCircle className="h-6 w-6" />}
            title="Active Jobs"
            value={stats.activeJobs}
            color="green"
          />
          <StatCard
            icon={<Users className="h-6 w-6" />}
            title="Total Users"
            value={stats.totalUsers}
            color="purple"
          />
          <StatCard
            icon={<Shield className="h-6 w-6" />}
            title="Pending Approvals"
            value={stats.pendingApprovals}
            color="orange"
          />
          <StatCard
            icon={<Users className="h-6 w-6" />}
            title="Vendors"
            value={stats.vendors}
            color="indigo"
          />
          <StatCard
            icon={<Users className="h-6 w-6" />}
            title="Seekers"
            value={stats.seekers}
            color="pink"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pending Jobs Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              Pending Job Approvals
            </h2>
            {pendingJobs.length === 0 ? (
              <p className="text-gray-500">No pending jobs for approval</p>
            ) : (
              <div className="space-y-3">
                {pendingJobs.map((job) => (
                  <div key={job.id} className="border rounded-lg p-3">
                    <h3 className="font-medium">{job.title}</h3>
                    <p className="text-sm text-gray-600">{job.company}</p>
                    <p className="text-sm text-gray-600">{job.location}</p>
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => approveJob(job.id)}
                        className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => rejectJob(job.id)}
                        className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Pending User Approvals */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Pending User Approvals
            </h2>
            {pendingUsers.length === 0 ? (
              <p className="text-gray-500">No pending user approvals</p>
            ) : (
              <div className="space-y-3">
                {pendingUsers.map((user) => (
                  <div key={user.id} className="border rounded-lg p-3">
                    <h3 className="font-medium">{user.email}</h3>
                    <p className="text-sm text-gray-600 capitalize">{user.role}</p>
                    {user.full_name && (
                      <p className="text-sm text-gray-600">{user.full_name}</p>
                    )}
                    <div className="mt-2">
                      <button
                        onClick={() => approveUser(user.id)}
                        className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
                      >
                        Approve User
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow p-6 mt-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
              <h3 className="font-medium">Manage Banner Ads</h3>
              <p className="text-sm text-gray-600">Configure homepage banners</p>
            </button>
            <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
              <h3 className="font-medium">Payment Settings</h3>
              <p className="text-sm text-gray-600">Manage payment providers</p>
            </button>
            <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
              <h3 className="font-medium">View Activity Logs</h3>
              <p className="text-sm text-gray-600">Monitor system activity</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, title, value, color }: {
  icon: React.ReactNode;
  title: string;
  value: number;
  color: 'blue' | 'green' | 'yellow' | 'purple' | 'orange' | 'indigo' | 'pink';
}) {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    yellow: "bg-yellow-100 text-yellow-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600",
    indigo: "bg-indigo-100 text-indigo-600",
    pink: "bg-pink-100 text-pink-600",
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
        <div className={`p-3 rounded-full ${colorClasses[color]}`}>
          {icon}
        </div>
      </div>
    </div>
  );
}