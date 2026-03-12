"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { JOBS_TABLE } from "@/lib/jobs-schema";
import EnhancedJobCard from "@/components/EnhancedJobCard";
import AdvancedJobFilters from "@/components/AdvancedJobFilters";
import JobAlerts from "@/components/JobAlerts";
import InfiniteScrollJobs from "@/components/InfiniteScrollJobs";
import AIJobMatcher from "@/components/AIJobMatcher";
import MobileJobCards from "@/components/MobileJobCards";
import { Search, Filter, Bell, Brain, Grid, List, TrendingUp, MapPin, Briefcase, Building } from "lucide-react";

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

interface FilterState {
  search: string;
  location: string;
  city: string;
  country: string;
  salaryMin: string;
  salaryMax: string;
  jobType: string;
  experience: string;
  urgency: string;
  sortBy: string;
}

interface UserProfile {
  skills: string[];
  experience: string;
  jobType: string;
  locations: string[];
  salary: string;
  industries: string[];
}

// Helper functions for category filtering - defined outside component
const hasTechSkill = (job: Job) => job.skills.some(s => ['JavaScript', 'React', 'Python', 'AWS'].some(skill => s.toLowerCase().includes(skill.toLowerCase())));
const hasHealthcareSkill = (job: Job) => job.skills.some(s => ['Nursing', 'Medical', 'Doctor'].some(skill => s.toLowerCase().includes(skill.toLowerCase())));
const hasConstructionSkill = (job: Job) => job.skills.some(s => ['Construction', 'Building', 'Engineering'].some(skill => s.toLowerCase().includes(skill.toLowerCase())));
const hasHospitalitySkill = (job: Job) => job.skills.some(s => ['Hotel', 'Restaurant', 'Service'].some(skill => s.toLowerCase().includes(skill.toLowerCase())));

export default function EnhancedFindJobsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams?.get("q") || "";
  const countryParam = searchParams?.get("country") || "";

  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'mobile'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [showAlerts, setShowAlerts] = useState(false);
  const [showAIMatcher, setShowAIMatcher] = useState(false);

  const [filters, setFilters] = useState<FilterState>({
    search: q,
    location: countryParam,
    city: "",
    country: countryParam,
    salaryMin: "",
    salaryMax: "",
    jobType: "",
    experience: "",
    urgency: "",
    sortBy: "newest"
  });

  const [userProfile, setUserProfile] = useState<UserProfile>({
    skills: [],
    experience: "mid",
    jobType: "full-time",
    locations: [],
    salary: "50000",
    industries: []
  });

  // Load jobs from Supabase - RESTORE ORIGINAL
  const loadJobs = useCallback(async (page = 1, limit = 12) => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('🚀 Loading jobs from Supabase - Original Mode...', { page, limit, JOBS_TABLE });

      // Get active jobs
      const { data, error: fetchError } = await supabase
        .from(JOBS_TABLE)
        .select("*")
        .eq("status", "Active")
        .order("created_at", { ascending: false })
        .range((page - 1) * limit, page * limit - 1);
      
      console.log('� Supabase response:', { dataCount: data?.length, error: fetchError });

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

      if (page === 1) {
        setJobs(transformedJobs);
        console.log('📝 Set initial jobs:', transformedJobs.length);
      } else {
        // Filter out duplicates when appending
        const uniqueJobs = transformedJobs.filter(newJob => 
          !jobs.some(existingJob => existingJob.id === newJob.id)
        );
        setJobs(prev => {
          console.log('📝 Appending jobs:', uniqueJobs.length, 'New total:', prev.length + uniqueJobs.length);
          return [...prev, ...uniqueJobs];
        });
      }

      return transformedJobs;
    } catch (err) {
      console.error('💥 Error in loadJobs:', err);
      setError(err instanceof Error ? err.message : "Failed to load jobs");
      return [];
    } finally {
      setLoading(false);
    }
  }, [jobs]);

  // Load more jobs for infinite scroll
  const loadMoreJobs = async (page: number, limit: number): Promise<Job[]> => {
    return loadJobs(page, limit);
  };

  // Get relative time
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

  const getCountryFlag = (country: string) => {
    const flags: Record<string, string> = {
      'United States': '🇺🇸',
      'United Kingdom': '🇬🇧',
      'United Arab Emirates': '🇦🇪',
      'Saudi Arabia': '🇸🇦',
      'Pakistan': '🇵🇰',
      'India': '🇮🇳',
      'Canada': '🇨🇦',
      'Australia': '🇦🇺',
      'Germany': '🇩🇪',
      'France': '🇫🇷',
      'Japan': '🇯🇵',
      'China': '🇨🇳',
      'Singapore': '🇸🇬',
      'Malaysia': '🇲🇾',
      'Turkey': '🇹🇷',
      'South Africa': '🇿🇦',
      'Brazil': '🇧🇷',
      'Mexico': '🇲🇽',
      'Spain': '🇪🇸',
      'Italy': '🇮🇹',
      'Netherlands': '🇳🇱',
      'Switzerland': '🇨🇭',
      'Sweden': '🇸🇪',
      'Norway': '🇳🇴',
      'Denmark': '🇩🇰',
      'Finland': '🇫🇮',
      'Poland': '🇵🇱',
      'Russia': '🇷🇺',
      'Thailand': '🇹🇭',
      'Indonesia': '🇮🇩',
      'Philippines': '🇵🇭',
      'Egypt': '🇪🇬',
      'Nigeria': '🇳🇬',
      'Kenya': '🇰🇪',
      'Argentina': '🇦🇷',
      'Chile': '🇨🇱',
      'Peru': '🇵🇪',
      'Colombia': '🇨🇴',
      'Venezuela': '🇻🇪',
      'New Zealand': '🇳🇿',
      'Ireland': '🇮🇪',
      'Belgium': '🇧🇪',
      'Austria': '🇦🇹',
      'Portugal': '🇵🇹',
      'Greece': '🇬🇷',
      'Czech Republic': '🇨🇿',
      'Hungary': '🇭🇺',
      'Romania': '🇷🇴',
      'Ukraine': '🇺🇦',
      'Israel': '🇮🇱',
      'UAE': '🇦🇪',
      'UK': '🇬🇧',
      'USA': '🇺🇸',
      'KSA': '🇸🇦'
    };
    return flags[country] || '🌍';
  };

  // Filter and sort jobs
  const filteredJobs = useMemo(() => {
    let filtered = [...jobs];

    // Apply additional filters
    if (filters.urgency) {
      filtered = filtered.filter(job => job.urgency === filters.urgency);
    }

    // Sort
    switch (filters.sortBy) {
      case "salary-high":
        filtered.sort((a, b) => (b.salaryMax || 0) - (a.salaryMax || 0));
        break;
      case "salary-low":
        filtered.sort((a, b) => (a.salaryMin || 0) - (b.salaryMin || 0));
        break;
      case "relevance":
        // Simple relevance based on search term match
        if (filters.search) {
          filtered.sort((a, b) => {
            const aScore = (a.title.toLowerCase().includes(filters.search.toLowerCase()) ? 2 : 0) +
                           (a.description.toLowerCase().includes(filters.search.toLowerCase()) ? 1 : 0);
            const bScore = (b.title.toLowerCase().includes(filters.search.toLowerCase()) ? 2 : 0) +
                           (b.description.toLowerCase().includes(filters.search.toLowerCase()) ? 1 : 0);
            return bScore - aScore;
          });
        }
        break;
      case "newest":
      default:
        // Already sorted by newest
        break;
    }

    return filtered;
  }, [jobs, filters]);

  // Handle filter changes
  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    // Update URL params
    const params = new URLSearchParams();
    if (newFilters.search) params.set("q", newFilters.search);
    if (newFilters.country) params.set("country", newFilters.country);
    router.push(`/find-jobs?${params.toString()}`, { scroll: false });
  };

  // Reset filters
  const handleResetFilters = () => {
    const defaultFilters: FilterState = {
      search: "",
      location: "",
      city: "",
      country: "",
      salaryMin: "",
      salaryMax: "",
      jobType: "",
      experience: "",
      urgency: "",
      sortBy: "newest"
    };
    handleFilterChange(defaultFilters);
  };

  // Handle job save
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
    
    // Update job state
    setJobs(prev => prev.map(job => 
      job.id === jobId ? { ...job, saved: !isSaved } : job
    ));
  };

  // Handle job share
  const handleShareJob = (job: Job) => {
    if (navigator.share) {
      navigator.share({
        title: job.title,
        text: `Check out this job: ${job.title} at ${job.company}`,
        url: `${window.location.origin}/find-jobs?job=${job.id}`
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${window.location.origin}/find-jobs?job=${job.id}`);
      alert('Job link copied to clipboard!');
    }
  };

  // Handle refresh
  const handleRefresh = async () => {
    await loadJobs(1, 12);
  };

  // Load initial data - RESTORE ORIGINAL
  useEffect(() => {
    console.log('🔄 RESTORING ORIGINAL FIND-JOBS STATE...');
    
    // Load user profile from localStorage
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setUserProfile(JSON.parse(savedProfile));
    }
    
    // Load jobs normally
    loadJobs(1, 12);
    console.log('✅ Original find-jobs state restored');
  }, []);

  // Get unique locations for filters
  const locations = useMemo(() => {
    const uniqueLocations = new Set<string>();
    jobs.forEach(job => {
      if (job.city && job.country) {
        uniqueLocations.add(`${job.city}, ${job.country}`);
      }
    });
    return Array.from(uniqueLocations);
  }, [jobs]);

  const cities = useMemo(() => {
    const uniqueCities = new Set<string>();
    jobs.forEach(job => {
      if (job.city) uniqueCities.add(job.city);
    });
    return Array.from(uniqueCities);
  }, [jobs]);

  const countries = useMemo(() => {
    const uniqueCountries = new Set<string>();
    jobs.forEach(job => {
      if (job.country) uniqueCountries.add(job.country);
    });
    return Array.from(uniqueCountries);
  }, [jobs]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-gray-900">Find Jobs</h1>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>{filteredJobs.length} jobs found</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {/* View Mode Toggle */}
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
                >
                  <List className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('mobile')}
                  className={`p-2 rounded ${viewMode === 'mobile' ? 'bg-white shadow-sm' : ''} md:hidden`}
                >
                  <Filter className="w-4 h-4" />
                </button>
              </div>
              
              {/* Feature Toggles */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`p-2 rounded-lg ${showFilters ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
              >
                <Search className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => setShowAlerts(!showAlerts)}
                className={`p-2 rounded-lg ${showAlerts ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}
              >
                <Bell className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => setShowAIMatcher(!showAIMatcher)}
                className={`p-2 rounded-lg ${showAIMatcher ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-600'}`}
              >
                <Brain className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <div className="flex-1">
            {/* Filters */}
            {showFilters && (
              <div className="mb-6">
                <AdvancedJobFilters
                  filters={filters}
                  onFiltersChange={handleFilterChange}
                  onReset={handleResetFilters}
                  locations={locations}
                  cities={cities}
                  countries={countries}
                />
              </div>
            )}

            {/* Job Alerts */}
            {showAlerts && (
              <div className="mb-6">
                <JobAlerts />
              </div>
            )}

            {/* AI Job Matcher */}
            {showAIMatcher && (
              <div className="mb-6">
                <AIJobMatcher
                  userProfile={userProfile}
                  availableJobs={filteredJobs}
                  onJobApply={(jobId) => router.push(`/find-jobs?job=${jobId}`)}
                />
              </div>
            )}

            {/* Mobile Swipe View */}
            {viewMode === 'mobile' && (
              <div className="h-[600px] mb-6">
                <MobileJobCards
                  jobs={filteredJobs}
                  onSave={handleSaveJob}
                  onDismiss={(jobId) => {
                    setJobs(prev => prev.filter(job => job.id !== jobId));
                  }}
                  onRefresh={handleRefresh}
                  isLoading={loading}
                />
              </div>
            )}

            {/* Infinite Scroll Grid/List View */}
            {viewMode !== 'mobile' && (
              <InfiniteScrollJobs
                initialJobs={filteredJobs}
                onLoadMore={loadMoreJobs}
                onSave={handleSaveJob}
                onShare={handleShareJob}
                pageSize={12}
                hasMore={filteredJobs.length >= 12}
                loading={loading}
                error={error || undefined}
              />
            )}
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block w-80">
            {/* Quick Stats - Real Supabase Data */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                Live Job Statistics
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Jobs</span>
                  <span className="font-bold text-blue-600">{filteredJobs.length.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">New Today</span>
                  <span className="font-bold text-green-600">{filteredJobs.filter(j => j.postedAt === 'Today').length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Remote Jobs</span>
                  <span className="font-bold text-purple-600">{filteredJobs.filter(j => j.type === 'remote').length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Urgent Jobs</span>
                  <span className="font-bold text-red-600">{filteredJobs.filter(j => j.urgency === 'urgent').length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Companies</span>
                  <span className="font-bold text-orange-600">{new Set(jobs.map(j => j.company)).size}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Countries</span>
                  <span className="font-bold text-indigo-600">{new Set(jobs.map(j => j.country)).size}</span>
                </div>
              </div>
            </div>

            {/* Job Categories - Real Data */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-600" />
                Job Categories
              </h3>
              <div className="space-y-2">
                <a href="/find-jobs?category=technology" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">💻</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Technology</div>
                      <div className="text-xs text-gray-500">{jobs.filter(hasTechSkill).length} jobs</div>
                    </div>
                  </div>
                  <span className="text-blue-600">→</span>
                </a>
                
                <a href="/find-jobs?category=healthcare" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">🏥</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Healthcare</div>
                      <div className="text-xs text-gray-500">{jobs.filter(hasHealthcareSkill).length} jobs</div>
                    </div>
                  </div>
                  <span className="text-blue-600">→</span>
                </a>
                
                <a href="/find-jobs?category=construction" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <span className="text-yellow-600 font-bold text-sm">🏗️</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Construction</div>
                      <div className="text-xs text-gray-500">{jobs.filter(hasConstructionSkill).length} jobs</div>
                    </div>
                  </div>
                  <span className="text-blue-600">→</span>
                </a>
                
                <a href="/find-jobs?category=hospitality" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 font-bold text-sm">🍽</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Hospitality</div>
                      <div className="text-xs text-gray-500">{jobs.filter(hasHospitalitySkill).length} jobs</div>
                    </div>
                  </div>
                  <span className="text-blue-600">→</span>
                </a>
              </div>
            </div>

            {/* Popular Locations - Real Data */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                Popular Locations
              </h3>
              <div className="space-y-2">
                {Array.from(new Set(jobs.map(j => j.country))).slice(0, 6).map((country) => {
                  const countryJobs = jobs.filter(j => j.country === country);
                  const flag = getCountryFlag(country);
                  return (
                    <a 
                      key={country}
                      href={`/find-jobs?country=${encodeURIComponent(country)}`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{flag}</span>
                        <div>
                          <div className="font-medium text-gray-900">{country}</div>
                          <div className="text-xs text-gray-500">{countryJobs.length} jobs</div>
                        </div>
                      </div>
                      <span className="text-blue-600">→</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Top Companies - Real Data */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Building className="w-4 h-4 text-blue-600" />
                Top Companies
              </h3>
              <div className="space-y-2">
                {Array.from(new Set(jobs.map(j => j.company)))
                  .slice(0, 6)
                  .map((company) => {
                    const companyJobs = jobs.filter(j => j.company === company);
                    return (
                      <a 
                        key={company}
                        href={`/find-jobs?company=${encodeURIComponent(company)}`}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Building className="w-4 h-4 text-gray-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{company}</div>
                            <div className="text-xs text-gray-500">{companyJobs.length} positions</div>
                          </div>
                        </div>
                        <span className="text-blue-600">→</span>
                      </a>
                    );
                  })}
              </div>
            </div>

            {/* Popular Skills - Real Data */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                Trending Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {Array.from(new Set(jobs.flatMap(j => j.skills)))
                  .slice(0, 12)
                  .map((skill) => (
                    <a
                      key={skill}
                      href={`/find-jobs?skills=${encodeURIComponent(skill)}`}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium hover:bg-blue-200 transition-colors"
                    >
                      {skill}
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
