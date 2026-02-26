"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { JOBS_TABLE } from "@/lib/jobs-schema";
import JobCard, { type Job } from "@/components/JobCard";
import CareerjetWidget from "@/components/CareerjetWidget";
import FindJobsSearchBar from "@/components/FindJobsSearchBar";
import type { SearchFilters } from "@/components/SearchBar";
import type { JobCountrySlug } from "@/lib/job-country-config";

const COUNTRY_SLUG_TO_FILTER: Record<JobCountrySlug, string> = {
  "usa-jobs": "USA",
  "uk-jobs": "United Kingdom",
  "gulf-jobs": "United Arab Emirates", // Gulf = UAE as primary filter
  "india-jobs": "India",
  "pakistan-jobs": "Pakistan",
  "malaysia-jobs": "Malaysia",
};

const GULF_COUNTRIES = [
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Oman",
  "Kuwait",
  "Bahrain",
];

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
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

        const arr =
          country === "gulf-jobs"
            ? GULF_COUNTRIES
            : [COUNTRY_SLUG_TO_FILTER[country]];
        const filtered =
          (data ?? []).filter((j) =>
            arr.some(
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

  const handleSearch = (f: SearchFilters) => {
    const params = new URLSearchParams();
    if (f.keyword) params.set("q", f.keyword);
    if (f.country) params.set("country", f.country);
    if (f.category) params.set("cat", f.category);
    router.push(`/find-jobs?${params.toString()}`);
  };

  const visibleJobs = jobs.slice(0, displayLimit);
  const hasMore = jobs.length > displayLimit;

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
