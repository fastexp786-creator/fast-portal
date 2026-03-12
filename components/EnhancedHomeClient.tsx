"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { JOBS_TABLE } from "@/lib/jobs-schema";
import EnhancedJobCard from "@/components/EnhancedJobCard";
import InfiniteScrollJobs from "@/components/InfiniteScrollJobs";
import { Search, MapPin, Briefcase, TrendingUp, Users, Building } from "lucide-react";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  city: string;
  country: string;
  salary: string;
  salaryMin?: number;
  salaryMax?: number;
  type: "full-time" | "part-time" | "contract" | "remote";
  experience: "entry" | "mid" | "senior";
  postedAt: string;
  urgency?: "urgent" | "new" | "hot";
  description: string;
  skills: string[];
  benefits: string[];
  logo?: string;
  saved?: boolean;
}

export default function EnhancedHomeClient() {
  const router = useRouter();
  const [latestJobs, setLatestJobs] = useState<Job[]>([]);
  const [featuredJobs, setFeaturedJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({
    totalJobs: 0,
    totalCompanies: 0,
    totalCountries: 0,
    newToday: 0
  });

  // Load jobs from Supabase - RESET
  useEffect(() => {
    console.log('🔄 HOME PAGE RESET - Clearing all states...');
    setLatestJobs([]);
    setFeaturedJobs([]);
    setStats({
      totalJobs: 0,
      totalCompanies: 0,
      totalCountries: 0,
      newToday: 0
    });
    setLoading(false);
    console.log('✅ Home page fully reset');
  }, []);

  const loadJobs = async () => {
    try {
      setLoading(true);
      
      // Get latest jobs
      const { data: latestData, error: latestError } = await supabase
        .from(JOBS_TABLE)
        .select("*")
        .eq("is_active", true)
        .order("created_at", { ascending: false })
        .limit(6);

      // Get featured/urgent jobs
      const { data: featuredData, error: featuredError } = await supabase
        .from(JOBS_TABLE)
        .select("*")
        .eq("is_active", true)
        .eq("is_featured", true)
        .order("created_at", { ascending: false })
        .limit(6);

      if (latestError) throw latestError;
      if (featuredError) throw featuredError;

      // Transform data
      const transformJob = (job: any): Job => ({
        id: job.id?.toString() || Math.random().toString(),
        title: job.title || "No Title",
        company: job.company_name || job.company || "Unknown Company",
        location: job.location || "Remote",
        city: job.city || "Unknown",
        country: job.country || "Unknown",
        salary: job.salary_range || job.salary || "Competitive",
        salaryMin: job.salary_min || undefined,
        salaryMax: job.salary_max || undefined,
        type: (job.job_type as Job['type']) || "full-time",
        experience: (job.experience_level as Job['experience']) || "mid",
        postedAt: getRelativeTime(job.created_at),
        urgency: Math.random() > 0.7 ? (Math.random() > 0.5 ? "urgent" : "new") : undefined,
        description: job.description || "No description available",
        skills: Array.isArray(job.skills_required) ? job.skills_required : [],
        benefits: Array.isArray(job.benefits) ? job.benefits : [],
        logo: job.company_logo || undefined,
        saved: false
      });

      setLatestJobs((latestData || []).map(transformJob));
      setFeaturedJobs((featuredData || []).map(transformJob));
    } catch (error) {
      console.error("Error loading jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadStats = async () => {
    try {
      // Get counts
      const { count: totalJobs } = await supabase
        .from(JOBS_TABLE)
        .select("*", { count: 'exact', head: true })
        .eq("is_active", true);

      const { count: totalCompanies } = await supabase
        .from(JOBS_TABLE)
        .select("company_name", { count: 'exact', head: true })
        .eq("is_active", true);

      const { count: totalCountries } = await supabase
        .from(JOBS_TABLE)
        .select("country", { count: 'exact', head: true })
        .eq("is_active", true);

      // Get today's jobs
      const today = new Date().toISOString().split('T')[0];
      const { count: newToday } = await supabase
        .from(JOBS_TABLE)
        .select("*", { count: 'exact', head: true })
        .eq("is_active", true)
        .gte("created_at", today);

      setStats({
        totalJobs: totalJobs || 0,
        totalCompanies: totalCompanies || 0,
        totalCountries: totalCountries || 0,
        newToday: newToday || 0
      });
    } catch (error) {
      console.error("Error loading stats:", error);
    }
  };

  const getRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  const handleSaveJob = (jobId: string) => {
    const savedJobs = JSON.parse(localStorage.getItem('savedJobs') || '[]');
    const isSaved = savedJobs.includes(jobId);
    
    let newSavedJobs;
    if (isSaved) {
      newSavedJobs = savedJobs.filter((id: string) => id !== jobId);
    } else {
      newSavedJobs = [...savedJobs, jobId];
    }
    
    localStorage.setItem('savedJobs', JSON.stringify(newSavedJobs));
    
    // Update state
    setLatestJobs(prev => prev.map(job => 
      job.id === jobId ? { ...job, saved: !isSaved } : job
    ));
    setFeaturedJobs(prev => prev.map(job => 
      job.id === jobId ? { ...job, saved: !isSaved } : job
    ));
  };

  const handleShareJob = (job: Job) => {
    if (navigator.share) {
      navigator.share({
        title: job.title,
        text: `Check out this job: ${job.title} at ${job.company}`,
        url: `${window.location.origin}/find-jobs?job=${job.id}`
      });
    } else {
      navigator.clipboard.writeText(`${window.location.origin}/find-jobs?job=${job.id}`);
      alert('Job link copied to clipboard!');
    }
  };

  const loadMoreJobs = async (page: number, limit: number): Promise<Job[]> => {
    try {
      const { data, error } = await supabase
        .from(JOBS_TABLE)
        .select("*")
        .eq("is_active", true)
        .order("created_at", { ascending: false })
        .range((page - 1) * limit, page * limit - 1);

      if (error) throw error;

      return (data || []).map((job: any) => ({
        id: job.id?.toString() || Math.random().toString(),
        title: job.title || "No Title",
        company: job.company_name || job.company || "Unknown Company",
        location: job.location || "Remote",
        city: job.city || "Unknown",
        country: job.country || "Unknown",
        salary: job.salary_range || job.salary || "Competitive",
        salaryMin: job.salary_min || undefined,
        salaryMax: job.salary_max || undefined,
        type: (job.job_type as Job['type']) || "full-time",
        experience: (job.experience_level as Job['experience']) || "mid",
        postedAt: getRelativeTime(job.created_at),
        urgency: Math.random() > 0.7 ? (Math.random() > 0.5 ? "urgent" : "new") : undefined,
        description: job.description || "No description available",
        skills: Array.isArray(job.skills_required) ? job.skills_required : [],
        benefits: Array.isArray(job.benefits) ? job.benefits : [],
        logo: job.company_logo || undefined,
        saved: false
      }));
    } catch (error) {
      console.error("Error loading more jobs:", error);
      return [];
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Find Your Dream Job</h1>
            <p className="text-xl mb-8 opacity-90">
              Discover thousands of opportunities with AI-powered matching, advanced filters, and mobile swipe interface
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push('/find-jobs')}
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Search className="inline w-4 h-4 mr-2" />
                Search Jobs
              </button>
              <button
                onClick={() => router.push('/auth/register')}
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">{stats.totalJobs.toLocaleString()}</h3>
              <p className="text-gray-600">Active Jobs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">{stats.totalCompanies.toLocaleString()}</h3>
              <p className="text-gray-600">Companies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">{stats.totalCountries}</h3>
              <p className="text-gray-600">Countries</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">{stats.newToday}</h3>
              <p className="text-gray-600">New Today</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs - RESET */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Opportunities</h2>
            <p className="text-lg text-gray-600">Hand-picked jobs from top companies</p>
          </div>
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No featured jobs available at the moment</p>
            <button
              onClick={() => router.push('/find-jobs')}
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Browse All Jobs
            </button>
          </div>
        </div>
      </section>

      {/* Latest Jobs with Infinite Scroll - RESET */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Job Openings</h2>
            <p className="text-lg text-gray-600">Fresh opportunities updated daily</p>
          </div>
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No jobs available at the moment</p>
            <button
              onClick={() => router.push('/find-jobs')}
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Search Jobs
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Next Opportunity?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of professionals who found their dream jobs through our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push('/find-jobs')}
              className="px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Search
            </button>
            <button
              onClick={() => router.push('/auth/register')}
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Create Account
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
