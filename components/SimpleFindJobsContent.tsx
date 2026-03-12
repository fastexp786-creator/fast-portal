"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { JOBS_TABLE } from "@/lib/jobs-schema";
import { Search, MapPin, Briefcase, Building } from "lucide-react";

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

export default function SimpleFindJobsContent() {
  const router = useRouter();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");

  // Load initial data
  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('🚀 Loading jobs from Supabase...');

      // Get active jobs
      const { data, error: fetchError } = await supabase
        .from(JOBS_TABLE)
        .select("*")
        .eq("status", "Active")
        .order("created_at", { ascending: false })
        .limit(12);
      
      console.log('📊 Supabase response:', { dataCount: data?.length, error: fetchError });

      if (fetchError) {
        console.error('❌ Supabase error:', fetchError);
        throw fetchError;
      }

      // Transform data to match Job interface
      const transformedJobs: Job[] = (data || []).map((job: any) => {
        return {
          id: job.id?.toString() || Math.random().toString(),
          title: job.title || "No Title",
          company: job.company || "Unknown Company",
          location: job.location || "Remote",
          city: job.location?.split(',').slice(0, 1).join('').trim() || "Unknown",
          country: job.country || "Unknown",
          salary: job.salary_min && job.salary_max ? `$${job.salary_min}-${job.salary_max}` : "Competitive",
          salaryMin: job.salary_min || undefined,
          salaryMax: job.salary_max || undefined,
          type: (job.job_type as Job['type']) || "full-time",
          experience: "mid",
          postedAt: getRelativeTime(job.created_at),
          urgency: Math.random() > 0.8 ? (Math.random() > 0.5 ? "urgent" : "new") : undefined,
          description: job.description || "No description available",
          skills: [],
          benefits: [],
          logo: undefined,
          saved: false
        };
      });

      console.log('✅ Successfully transformed jobs:', transformedJobs.length);
      setJobs(transformedJobs);

    } catch (err) {
      console.error('💥 Error in loadJobs:', err);
      setError(err instanceof Error ? err.message : "Failed to load jobs");
    } finally {
      setLoading(false);
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

  const handleSearch = async () => {
    try {
      setLoading(true);
      setError(null);
      
      let query = supabase
        .from(JOBS_TABLE)
        .select("*")
        .eq("status", "Active")
        .order("created_at", { ascending: false });

      if (search) {
        query = query.ilike("title", `%${search}%`);
      }
      
      if (location) {
        query = query.ilike("location", `%${location}%`);
      }
      
      if (jobType) {
        query = query.eq("job_type", jobType);
      }

      const { data, error } = await query.limit(12);
      
      if (error) throw error;

      const transformedJobs: Job[] = (data || []).map((job: any) => ({
        id: job.id?.toString() || Math.random().toString(),
        title: job.title || "No Title",
        company: job.company || "Unknown Company",
        location: job.location || "Remote",
        city: job.location?.split(',').slice(0, 1).join('').trim() || "Unknown",
        country: job.country || "Unknown",
        salary: job.salary_min && job.salary_max ? `$${job.salary_min}-${job.salary_max}` : "Competitive",
        salaryMin: job.salary_min || undefined,
        salaryMax: job.salary_max || undefined,
        type: (job.job_type as Job['type']) || "full-time",
        experience: "mid",
        postedAt: getRelativeTime(job.created_at),
        urgency: Math.random() > 0.8 ? (Math.random() > 0.5 ? "urgent" : "new") : undefined,
        description: job.description || "No description available",
        skills: [],
        benefits: [],
        logo: undefined,
        saved: false
      }));

      setJobs(transformedJobs);
    } catch (err) {
      console.error('💥 Search error:', err);
      setError(err instanceof Error ? err.message : "Failed to search jobs");
    } finally {
      setLoading(false);
    }
  };

  if (loading && jobs.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-600 font-semibold">Loading jobs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-600">Error: {error}</p>
          <button 
            onClick={loadJobs}
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Find Jobs</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Search className="inline w-4 h-4 mr-1" />
              Job Title
            </label>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter job title..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MapPin className="inline w-4 h-4 mr-1" />
              Location
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Briefcase className="inline w-4 h-4 mr-1" />
              Job Type
            </label>
            <select
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Types</option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="contract">Contract</option>
              <option value="remote">Remote</option>
            </select>
          </div>
          
          <div className="flex items-end">
            <button
              onClick={handleSearch}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Search Jobs
            </button>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          {jobs.length} Jobs Found
        </h2>
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{job.title}</h3>
                <p className="text-gray-600 flex items-center">
                  <Building className="inline w-4 h-4 mr-1" />
                  {job.company}
                </p>
              </div>
              {job.urgency && (
                <span className={`px-2 py-1 text-xs rounded-full ${
                  job.urgency === 'urgent' ? 'bg-red-100 text-red-600' :
                  job.urgency === 'new' ? 'bg-green-100 text-green-600' :
                  'bg-orange-100 text-orange-600'
                }`}>
                  {job.urgency}
                </span>
              )}
            </div>
            
            <div className="space-y-2 mb-4">
              <p className="text-gray-600 flex items-center">
                <MapPin className="inline w-4 h-4 mr-1" />
                {job.location}
              </p>
              <p className="text-gray-600 flex items-center">
                <Briefcase className="inline w-4 h-4 mr-1" />
                {job.type}
              </p>
              <p className="text-gray-900 font-semibold">
                {job.salary}
              </p>
            </div>
            
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {job.description}
            </p>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">
                {job.postedAt}
              </span>
              <button
                onClick={() => router.push(`/find-jobs?job=${job.id}`)}
                className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {jobs.length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No jobs found matching your criteria.</p>
          <button
            onClick={() => {
              setSearch("");
              setLocation("");
              setJobType("");
              loadJobs();
            }}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
