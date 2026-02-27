"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { JOBS_TABLE, type JobRow } from "@/lib/jobs-schema";
import {
  Briefcase,
  Plus,
  Edit,
  Trash2,
  Users,
  BarChart3,
  FileText
} from "lucide-react";

interface VendorStats {
  totalJobs: number;
  activeJobs: number;
  pendingJobs: number;
  totalApplications: number;
}

interface Application {
  id: string;
  created_at: string;
  job_id: string;
  job_title: string;
  applicant_email: string;
  applicant_name: string;
  status: string;
}

export default function VendorDashboard() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<VendorStats>({
    totalJobs: 0,
    activeJobs: 0,
    pendingJobs: 0,
    totalApplications: 0
  });
  const [myJobs, setMyJobs] = useState<JobRow[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [showJobForm, setShowJobForm] = useState(false);
  const [editingJob, setEditingJob] = useState<JobRow | null>(null);

  useEffect(() => {
    loadVendorData();
  }, []);

  const loadVendorData = async () => {
    try {
      setLoading(true);
      
      // Get current user email (simplified - in real app, get from session)
      const { data: { user } } = await supabase.auth.getUser();
      const userEmail = user?.email;

      if (!userEmail) return;

      // Load vendor's jobs
      const { data: jobsData } = await supabase
        .from(JOBS_TABLE)
        .select("*")
        .eq("company", userEmail) // Simple assumption: company = user email
        .order("created_at", { ascending: false });

      // Load applications for vendor's jobs
      const jobIds = jobsData?.map(job => job.id) || [];
      let applicationsData: Application[] = [];
      
      if (jobIds.length > 0) {
        // This would come from an applications table
        // For now, we'll simulate some data
        applicationsData = [
          {
            id: "1",
            created_at: new Date().toISOString(),
            job_id: jobIds[0],
            job_title: jobsData?.find(j => j.id === jobIds[0])?.title || "",
            applicant_email: "applicant1@example.com",
            applicant_name: "John Doe",
            status: "pending"
          }
        ];
      }

      // Calculate statistics
      const jobsStats = {
        total: jobsData?.length || 0,
        active: jobsData?.filter(job => job.is_active).length || 0,
        pending: jobsData?.filter(job => job.status === "Pending").length || 0
      };

      setStats({
        totalJobs: jobsStats.total,
        activeJobs: jobsStats.active,
        pendingJobs: jobsStats.pending,
        totalApplications: applicationsData.length
      });

      setMyJobs(jobsData || []);
      setApplications(applicationsData);

    } catch (error) {
      console.error("Error loading vendor data:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteJob = async (jobId: string) => {
    try {
      const { error } = await supabase
        .from(JOBS_TABLE)
        .delete()
        .eq("id", jobId);

      if (error) throw error;
      
      // Refresh data
      loadVendorData();
    } catch (error) {
      console.error("Error deleting job:", error);
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
          <h1 className="text-3xl font-bold text-gray-900">Vendor Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your job postings and applicants</p>
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
            title="Active Jobs"
            value={stats.activeJobs}
            color="green"
          />
          <StatCard
            icon={<FileText className="h-6 w-6" />}
            title="Pending Jobs"
            value={stats.pendingJobs}
            color="yellow"
          />
          <StatCard
            icon={<Users className="h-6 w-6" />}
            title="Applications"
            value={stats.totalApplications}
            color="purple"
          />
        </div>

        {/* Action Buttons */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setShowJobForm(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Plus className="h-5 w-5" />
              Post New Job
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* My Jobs Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              My Job Postings
            </h2>
            {myJobs.length === 0 ? (
              <p className="text-gray-500">You haven't posted any jobs yet</p>
            ) : (
              <div className="space-y-4">
                {myJobs.map((job) => (
                  <div key={job.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-lg">{job.title}</h3>
                      <span className={`px-2 py-1 rounded text-xs ${
                        job.status === "Active" ? "bg-green-100 text-green-800" :
                        job.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                        "bg-gray-100 text-gray-800"
                      }`}>
                        {job.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-2">{job.company}</p>
                    <p className="text-sm text-gray-500 mb-3">{job.location}</p>
                    
                    <div className="flex gap-2">
                      <button className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200">
                        <Edit className="h-4 w-4" />
                        Edit
                      </button>
                      <button 
                        onClick={() => deleteJob(job.id)}
                        className="flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded text-sm hover:bg-red-200"
                      >
                        <Trash2 className="h-4 w-4" />
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Applications Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Recent Applications
            </h2>
            {applications.length === 0 ? (
              <p className="text-gray-500">No applications yet</p>
            ) : (
              <div className="space-y-3">
                {applications.map((app) => (
                  <div key={app.id} className="border rounded-lg p-3">
                    <h3 className="font-medium">{app.applicant_name}</h3>
                    <p className="text-sm text-gray-600">{app.applicant_email}</p>
                    <p className="text-sm text-gray-600">Applied for: {app.job_title}</p>
                    <span className={`inline-block px-2 py-1 rounded text-xs mt-2 ${
                      app.status === "pending" ? "bg-yellow-100 text-yellow-800" :
                      app.status === "approved" ? "bg-green-100 text-green-800" :
                      "bg-gray-100 text-gray-800"
                    }`}>
                      {app.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Job Form Modal (simplified) */}
        {showJobForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h2 className="text-xl font-semibold mb-4">Post New Job</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Job Title"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full p-2 border rounded"
                />
                <textarea
                  placeholder="Job Description"
                  className="w-full p-2 border rounded"
                  rows={4}
                />
                <div className="flex gap-2">
                  <button className="flex-1 bg-gray-500 text-white py-2 rounded">
                    Cancel
                  </button>
                  <button className="flex-1 bg-blue-600 text-white py-2 rounded">
                    Post Job
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ icon, title, value, color }: {
  icon: React.ReactNode;
  title: string;
  value: number;
  color: 'blue' | 'green' | 'yellow' | 'purple';
}) {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    yellow: "bg-yellow-100 text-yellow-600",
    purple: "bg-purple-100 text-purple-600",
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