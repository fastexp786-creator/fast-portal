"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { JOBS_TABLE } from "@/lib/jobs-schema";
import JobCard, { type Job } from "@/components/JobCard";
import RSSJobCard from "@/components/RSSJobCard";
import CareerjetWidget from "@/components/CareerjetWidget";
import FindJobsSearchBar from "@/components/FindJobsSearchBar";
import type { SearchFilters } from "@/components/SearchBar";
import type { JobCountrySlug, RSS_FEED_URLS } from "@/lib/job-country-config";

const COUNTRY_SLUG_TO_FILTER: Record<JobCountrySlug, string> = {
  "usa-jobs": "USA",
  "uk-jobs": "United Kingdom",
  "saudi-arabia-jobs": "Saudi Arabia",
  "uae-jobs": "United Arab Emirates",
  "qatar-jobs": "Qatar",
  "kuwait-jobs": "Kuwait",
  "oman-jobs": "Oman",
  "bahrain-jobs": "Bahrain",
  "india-jobs": "India",
  "pakistan-jobs": "Pakistan",
  "malaysia-jobs": "Malaysia",
};

interface RSSJob {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  source: string;
}

interface Props {
  country: JobCountrySlug;
  config: { label: string; description: string; careerjetUrl: string };
  cjLocation: string;
}

export default function JobsCountryClient({
  country,
  config,
  cjLocation,
}: Props) {
  const router = useRouter();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [rssJobs, setRssJobs] = useState<RSSJob[]>([]);
  const [rssMeta, setRssMeta] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [rssLoading, setRssLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [rssError, setRssError] = useState<string | null>(null);
  const [displayLimit, setDisplayLimit] = useState(12);

  useEffect(() => {
    async function loadJobs() {
      setLoading(true);
      setError(null);
      try {
        const { data, error } = await supabase
          .from(JOBS_TABLE)
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;

        const filtered =
          (data ?? []).filter((j) =>
            [COUNTRY_SLUG_TO_FILTER[country]].some(
              (c) =>
                (j.country || "").toLowerCase().includes(c.toLowerCase())
            )
          );

        setJobs(filtered);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Error loading jobs");
      } finally {
        setLoading(false);
      }
    }
    loadJobs();
  }, [country]);

  useEffect(() => {
    async function loadRssJobs() {
      setRssLoading(true);
      setRssError(null);
      try {
        const response = await fetch(`/api/rss-jobs?country=${country}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch RSS jobs: ${response.status}`);
        }

        const data = await response.json();
        setRssJobs(data.jobs || []);
        setRssMeta(data.meta || null);
      } catch (e) {
        setRssError(e instanceof Error ? e.message : "Error loading RSS jobs");
      } finally {
        setRssLoading(false);
      }
    }
    loadRssJobs();
  }, [country]);

  const handleSearch = (f: SearchFilters) => {
    const params = new URLSearchParams();
    if (f.keyword) params.set("q", f.keyword);
    if (f.country) params.set("country", f.country);
    if (f.category) params.set("cat", f.category);
    router.push(`/find-jobs?${params.toString()}`);
  };

  const visibleJobs = jobs.slice(0, displayLimit);
  const hasMore = jobs.length > displayLimit;
  const visibleRssJobs = rssJobs.slice(0, 12);

  return (
    <>
      <div className="hero-banner-jobs">
        <h1>
          {config.label} <span>JOB</span> PORTAL
        </h1>
        <p>{config.description}</p>
      </div>

      <div className="job-page-card">
        <h2 className="card-title-jobs">Search Jobs</h2>
        <FindJobsSearchBar
          onSearch={handleSearch}
          initialCountry={COUNTRY_SLUG_TO_FILTER[country]}
        />
      </div>

      <div className="job-page-card">
        <h2 className="card-title-jobs">Latest Job Vacancies ({jobs.length})</h2>

        {loading ? (
          <div className="job-loading">
            <div className="job-spinner" />
            <p>Loading jobs...</p>
          </div>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : jobs.length === 0 ? (
          <p className="text-[var(--text-color)] opacity-70">
            No jobs in this category yet. Browse our Careerjet listings below.
          </p>
        ) : (
          <>
            <div className="jobs-grid-4">
              {visibleJobs.map((job, i) => (
                <div key={job.id || i} className="flex h-full">
                  <JobCard job={job} />
                </div>
              ))}
            </div>
            {hasMore && (
              <div className="mt-8 text-center">
                <button
                  type="button"
                  onClick={() => setDisplayLimit((p) => p + 12)}
                  className="btn-load-more"
                >
                  Load More Jobs
                </button>
              </div>
            )}
          </>
        )}
      </div>

      <div className="job-page-card">
        <h2 className="card-title-jobs">
          Latest Jobs from RSS Feeds 
          {!rssLoading && rssMeta && (
            <span className="text-sm font-normal text-gray-500 ml-2">
              ({rssMeta.displayedJobs} jobs from {rssMeta.successfulFeeds}/{rssMeta.totalFeeds} sources)
            </span>
          )}
        </h2>
        
        {rssLoading ? (
          <div className="job-loading">
            <div className="job-spinner" />
            <p>Loading RSS jobs from multiple sources...</p>
          </div>
        ) : rssError ? (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <p className="text-red-600 dark:text-red-400 font-medium">RSS Error: {rssError}</p>
            <p className="text-red-500 dark:text-red-500 text-sm mt-1">Some job sources may be temporarily unavailable</p>
          </div>
        ) : rssJobs.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-[var(--text-color)] opacity-70">
              No RSS jobs available at the moment.
            </p>
            {rssMeta && rssMeta.failedFeeds > 0 && (
              <p className="text-sm text-gray-500 mt-2">
                {rssMeta.failedFeeds} out of {rssMeta.totalFeeds} sources failed to load
              </p>
            )}
          </div>
        ) : (
          <>
            {rssMeta && rssMeta.failedFeeds > 0 && (
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3 mb-4">
                <p className="text-yellow-700 dark:text-yellow-400 text-sm">
                  ⚠️ {rssMeta.failedFeeds} out of {rssMeta.totalFeeds} job sources failed to load
                </p>
              </div>
            )}
            <div className="jobs-grid-4">
              {visibleRssJobs.map((job, i) => (
                <div key={`rss-${i}`} className="flex h-full">
                  <RSSJobCard job={job} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="job-page-card">
        <h2 className="card-title-jobs">Careerjet Extended Listings</h2>
        <CareerjetWidget dataLocation={cjLocation} />
      </div>

      <div className="job-page-card text-center">
        <h3 className="text-[var(--primary)] font-bold text-xl mb-2">
          Looking for more opportunities?
        </h3>
        <p className="text-[var(--text-color)] opacity-80 mb-6 text-sm">
          Browse 50,000+ jobs across {config.label} on Careerjet.
        </p>
        <a
          href={config.careerjetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-red-cta"
        >
          VIEW ALL {config.label.toUpperCase()} JOBS →
        </a>
        <div className="mt-6">
          <Link href="/categories" className="link-back">
            ← Back to Categories
          </Link>
        </div>
      </div>
    </>
  );
}
