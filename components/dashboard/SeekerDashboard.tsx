"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { JOBS_TABLE, type JobRow } from "@/lib/jobs-schema";
import {
  User,
  FileText,
  Briefcase,
  Bookmark,
  Send,
  CheckCircle,
  Clock,
  Upload
} from "lucide-react";

interface SeekerStats {
  totalApplications: number;
  pendingApplications: number;
  approvedApplications: number;
  savedJobs: number;
}

interface Application {
  id: string;
  job_id: string;
  job_title: string;
  company: string;
  status: string;
  applied_at: string;
}

export default function SeekerDashboard() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<SeekerStats>({
    totalApplications: 0,
    pendingApplications: 0,
    approvedApplications: 0,
    savedJobs: 0
  });
  const [applications, setApplications] = useState<Application[]>([]);
  const [savedJobs, setSavedJobs] = useState<JobRow[]>([]);
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    phone: "",
    resumeUrl: ""
  });

  useEffect(() => {
    loadSeekerData();
  }, []);

  const loadSeekerData = async () => {
    try {
      setLoading(true);
      
      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      const userEmail = user?.email;

      if (!userEmail) return;

      // Load user profile (simplified)
      const { data: profileData } = await supabase
        .from("user_profiles")
        .select("full_name, email")
        .eq("email", userEmail)
        .single();

      // Load applications (simulated)
      const applicationsData: Application[] = [
        {
          id: "1",
          job_id: "1",
          job_title: "Software Developer",
          company: "Tech Corp",
          status: "pending",
          applied_at: new Date().toISOString()
        },
        {
          id: "2",
          job_id: "2",
          job_title: "Web Designer",
          company: "Design Studio",
          status: "approved",
          applied_at: new Date(Date.now() - 86400000).toISOString()
        }
      ];

      // Load saved jobs (simulated)
      const { data: jobsData } = await supabase
        .from(JOBS_TABLE)
        .select("*")
        .limit(3)
        .order("created_at", { ascending: false });

      // Calculate statistics
      const applicationsStats = {
        total: applicationsData.length,
        pending: applicationsData.filter(app => app.status === "pending").length,
        approved: applicationsData.filter(app => app.status === "approved").length
      };

      setStats({
        totalApplications: applicationsStats.total,
        pendingApplications: applicationsStats.pending,
        approvedApplications: applicationsStats.approved,
        savedJobs: jobsData?.length || 0
      });

      setApplications(applicationsData);
      setSavedJobs(jobsData || []);
      setProfile({
        fullName: profileData?.full_name || "",
        email: userEmail,
        phone: "",
        resumeUrl: ""
      });

    } catch (error) {
      console.error("Error loading seeker data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleResumeUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    // Simplified resume upload
    const file = event.target.files?.[0];
    if (file) {
      console.log("Uploading resume:", file.name);
      // In real app, upload to Supabase Storage
      alert("Resume upload functionality would be implemented here");
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
          <h1 className="text-3xl font-bold text-gray-900">Job Seeker Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your profile, applications, and job search</p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={<Send className="h-6 w-6" />}
            title="Applications"
            value={stats.totalApplications}
            color="blue"
          />
          <StatCard
            icon={<Clock className="h-6 w-6" />}
            title="Pending"
            value={stats.pendingApplications}
            color="yellow"
          />
          <StatCard
            icon={<CheckCircle className="h-6 w-6" />}
            title="Approved"
            value={stats.approvedApplications}
            color="green"
          />
          <StatCard
            icon={<Bookmark className="h-6 w-6" />}
            title="Saved Jobs"
            value={stats.savedJobs}
            color="purple"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <User className="h-5 w-5" />
              My Profile
            </h2>
            
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={profile.fullName}
                  onChange={(e) => setProfile({...profile, fullName: e.target.value})}
                  className="w-full p-2 border rounded"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={profile.email}
                  disabled
                  className="w-full p-2 border rounded bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) => setProfile({...profile, phone: e.target.value})}
                  className="w-full p-2 border rounded"
                  placeholder="+1234567890"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Resume/CV
                </label>
                <div className="flex items-center gap-2">
                  <label className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700">
                    <Upload className="h-4 w-4" />
                    Upload Resume
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleResumeUpload}
                      className="hidden"
                    />
                  </label>
                  {profile.resumeUrl && (
                    <span className="text-sm text-green-600">Resume uploaded</span>
                  )}
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Save Profile
              </button>
            </div>
          </div>

          {/* Applications Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5" />
              My Applications
            </h2>
            
            {applications.length === 0 ? (
              <p className="text-gray-500">You haven't applied to any jobs yet</p>
            ) : (
              <div className="space-y-3">
                {applications.map((app) => (
                  <div key={app.id} className="border rounded-lg p-3">
                    <h3 className="font-medium">{app.job_title}</h3>
                    <p className="text-sm text-gray-600">{app.company}</p>
                    
                    <div className="flex justify-between items-center mt-2">
                      <span className={`px-2 py-1 rounded text-xs ${
                        app.status === "pending" ? "bg-yellow-100 text-yellow-800" :
                        app.status === "approved" ? "bg-green-100 text-green-800" :
                        "bg-gray-100 text-gray-800"
                      }`}>
                        {app.status}
                      </span>
                      
                      <span className="text-xs text-gray-500">
                        {new Date(app.applied_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Saved Jobs Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Bookmark className="h-5 w-5" />
              Saved Jobs
            </h2>
            
            {savedJobs.length === 0 ? (
              <p className="text-gray-500">You haven't saved any jobs yet</p>
            ) : (
              <div className="space-y-3">
                {savedJobs.map((job) => (
                  <div key={job.id} className="border rounded-lg p-3">
                    <h3 className="font-medium">{job.title}</h3>
                    <p className="text-sm text-gray-600">{job.company}</p>
                    <p className="text-sm text-gray-500">{job.location}</p>
                    
                    <div className="flex gap-2 mt-2">
                      <button className="flex-1 bg-blue-600 text-white py-1 px-2 rounded text-sm hover:bg-blue-700">
                        Apply Now
                      </button>
                      <button className="bg-gray-200 text-gray-700 py-1 px-2 rounded text-sm hover:bg-gray-300">
                        Remove
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
            <Briefcase className="h-5 w-5" />
            Job Search
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
              <h3 className="font-medium">Browse Jobs</h3>
              <p className="text-sm text-gray-600">Find new opportunities</p>
            </button>
            
            <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
              <h3 className="font-medium">Recommended Jobs</h3>
              <p className="text-sm text-gray-600">Based on your profile</p>
            </button>
            
            <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
              <h3 className="font-medium">Application History</h3>
              <p className="text-sm text-gray-600">View all your applications</p>
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