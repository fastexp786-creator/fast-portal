"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { JOBS_TABLE } from "@/lib/jobs-schema";
import JobCard, { type Job } from "@/components/JobCard";
import RSSJobCard from "@/components/RSSJobCard";
import FindJobsSearchBar from "@/components/FindJobsSearchBar";
import type { SearchFilters } from "@/components/SearchBar";
import { JOB_COUNTRY_CONFIG, type JobCountrySlug } from "@/lib/job-country-config";

interface Props {
  initialJobs: Job[];
  totalJobs: number;
}

interface RSSJob {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  source: string;
}

// Custom location descriptions for unique content
const LOCATION_DESCRIPTIONS: Record<string, string> = {
  "USA": "Federal and private sector opportunities across United States",
  "United Kingdom": "Skilled worker positions and UK visa sponsorship jobs",
  "Saudi Arabia": "Oil & gas, construction, and government vacancies in KSA",
  "UAE": "Dubai, Abu Dhabi, and Sharjah career opportunities",
  "Qatar": "World Cup 2022 legacy projects and new openings",
  "Kuwait": "Public sector and private industry positions",
  "Oman": "Tourism, oil, and emerging sector jobs",
  "Bahrain": "Banking, finance, and tech opportunities",
  "India": "IT, government, and multinational company positions",
  "Pakistan": "Public sector and emerging private sector roles",
  "Malaysia": "Technology, manufacturing, and service industry jobs",
};

// Custom descriptions for job cards to avoid duplicate content
function getCustomJobDescription(job: Job, index: number): string {
  const location = job.country || "International";
  const locationDesc = LOCATION_DESCRIPTIONS[location] || "Exciting career opportunity";
  
  if (job.description && job.description.length > 50) {
    // Add unique prefix to make content unique
    const prefixes = [
      `📍 ${location}: `,
      `🏢 ${location} - `,
      `💼 ${locationDesc}: `,
      `🌟 ${location} Opportunity: `,
      `🚀 ${location} Career: `,
    ];
    
    const prefix = prefixes[index % prefixes.length];
    const cleanDesc = job.description.replace(/<[^>]*>/g, '').substring(0, 150);
    return prefix + cleanDesc + "...";
  }
  
  return `📍 ${locationDesc}: ${job.title} - Apply now for this exciting opportunity.`;
}

export default function JobsPageClient({ initialJobs, totalJobs }: Props) {
  const router = useRouter();
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [rssJobs, setRssJobs] = useState<RSSJob[]>([]);
  const [loading, setLoading] = useState(false);
  const [rssLoading, setRssLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [rssError, setRssError] = useState<string | null>(null);
  const [displayLimit, setDisplayLimit] = useState(20);
  const [selectedCountry, setSelectedCountry] = useState<string>("all");

  // Load RSS jobs from multiple countries
  useEffect(() => {
    async function loadAllRssJobs() {
      setRssLoading(true);
      setRssError(null);
      
      try {
        const countries: JobCountrySlug[] = ['usa-jobs', 'uk-jobs', 'saudi-arabia-jobs', 'uae-jobs', 'india-jobs'];
        const feedPromises = countries.map(async (country) => {
          try {
            const response = await fetch(`/api/rss-jobs?country=${country}`);
            if (response.ok) {
              const data = await response.json();
              return data.jobs.slice(0, 5); // Take 5 jobs per country
            }
            return [];
          } catch (error) {
            return [];
          }
        });

        const results = await Promise.allSettled(feedPromises);
        const allRssJobs: RSSJob[] = [];
        
        results.forEach((result) => {
          if (result.status === 'fulfilled') {
            allRssJobs.push(...result.value);
          }
        });

        // Sort by date and limit
        const sortedJobs = allRssJobs
          .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
          .slice(0, 15);

        setRssJobs(sortedJobs);
      } catch (e) {
        setRssError("Failed to load RSS jobs");
      } finally {
        setRssLoading(false);
      }
    }
    
    loadAllRssJobs();
  }, []);

  const handleSearch = (filters: SearchFilters) => {
    const params = new URLSearchParams();
    if (filters.keyword) params.set("q", filters.keyword);
    if (filters.country) params.set("country", filters.country);
    if (filters.category) params.set("cat", filters.category);
    router.push(`/find-jobs?${params.toString()}`);
  };

  const loadMoreJobs = async () => {
    if (loading || jobs.length >= totalJobs) return;
    
    setLoading(true);
    try {
      const response = await fetch(`/api/jobs?limit=${displayLimit + 20}&offset=${jobs.length}`);
      if (response.ok) {
        const data = await response.json();
        setJobs(prev => [...prev, ...data.jobs]);
        setDisplayLimit(prev => prev + 20);
      }
    } catch (e) {
      setError("Failed to load more jobs");
    } finally {
      setLoading(false);
    }
  };

  const visibleJobs = jobs.slice(0, displayLimit);
  const hasMore = jobs.length < totalJobs;

  return (
    <>
      {/* Hero Section with SEO Content */}
      <div className="hero-banner-jobs">
        <h1>
          Global Job <span>PORTAL</span> 2026
        </h1>
        <p className="text-lg">
          Discover thousands of job opportunities across USA, UK, Gulf Countries, India, Pakistan, and Malaysia. 
          Government positions, private sector roles, and multinational careers updated daily.
        </p>
      </div>

      {/* Search Section - Always Visible for SEO */}
      <div className="job-page-card">
        <h2 className="card-title-jobs">Search Global Opportunities</h2>
        <FindJobsSearchBar onSearch={handleSearch} />
        
        {/* Country Quick Links for SEO */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {Object.entries(JOB_COUNTRY_CONFIG).map(([slug, config]) => (
            <Link
              key={slug}
              href={`/jobs/${slug}`}
              className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="font-semibold text-sm">{config.label}</div>
              <div className="text-xs text-gray-500 mt-1">View Jobs →</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Database Jobs Section */}
      <div className="job-page-card">
        <h2 className="card-title-jobs">
          Featured Job Vacancies ({totalJobs}+ positions)
        </h2>
        
        {error ? (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <p className="text-red-600 dark:text-red-400">{error}</p>
          </div>
        ) : (
          <>
            <div className="jobs-grid-4">
              {visibleJobs.map((job, index) => (
                <div key={job.id || index} className="flex h-full">
                  <JobCard 
                    job={{
                      ...job,
                      description: getCustomJobDescription(job, index)
                    }} 
                  />
                </div>
              ))}
            </div>
            
            {hasMore && (
              <div className="mt-8 text-center">
                <button
                  type="button"
                  onClick={loadMoreJobs}
                  disabled={loading}
                  className="btn-load-more"
                >
                  {loading ? 'Loading...' : 'Load More Jobs'}
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* RSS Jobs Section */}
      <div className="job-page-card">
        <h2 className="card-title-jobs">
          Latest from Global Job Sources ({rssJobs.length} positions)
        </h2>
        
        {rssLoading ? (
          <div className="job-loading">
            <div className="job-spinner" />
            <p>Loading jobs from multiple sources...</p>
          </div>
        ) : rssError ? (
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <p className="text-yellow-700 dark:text-yellow-400">{rssError}</p>
          </div>
        ) : rssJobs.length > 0 ? (
          <div className="jobs-grid-4">
            {rssJobs.map((job, index) => (
              <div key={`rss-${index}`} className="flex h-full">
                <RSSJobCard job={job} />
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {/* SEO Content Section */}
      <div className="job-page-card">
        <h2 className="card-title-jobs">Why Choose Fast Job Career?</h2>
        <div className="prose max-w-none text-gray-600 dark:text-gray-300">
          <p className="mb-4">
            Fast Job Career is your premier destination for finding employment opportunities across the globe. 
            Our platform aggregates job listings from trusted sources including government portals, 
            multinational corporations, and leading job boards.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">🌍 Global Coverage</h3>
              <p>Access opportunities in USA, UK, Gulf countries, India, Pakistan, and Malaysia with region-specific insights.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">🔄 Daily Updates</h3>
              <p>Our job database is updated multiple times daily ensuring you never miss an opportunity.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">🏢 Verified Listings</h3>
              <p>All job postings are sourced from legitimate employers and government agencies.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">📱 Easy Application</h3>
              <p>Apply directly to employers with our streamlined application process.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
