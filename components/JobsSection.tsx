"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { JOBS_TABLE } from "@/lib/jobs-schema";
import JobCard, { type Job } from "./JobCard";

interface JobsSectionProps {
  filterTitle: string;
  filterCountry: string;
  triggerFilter: number;
}

export default function JobsSection({
  filterTitle,
  filterCountry,
  triggerFilter,
}: JobsSectionProps) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [displayJobs, setDisplayJobs] = useState<Job[]>([]);

  useEffect(() => {
    async function loadJobs() {
      setLoading(true);
      setError(null);
      try {
        const { data, error: fetchError } = await supabase
          .from(JOBS_TABLE)
          .select("*")
          .order("created_at", { ascending: false });

        if (fetchError) throw fetchError;
        setJobs(data || []);
        setDisplayJobs((data || []).slice(0, 4));
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error loading jobs");
      } finally {
        setLoading(false);
      }
    }
    loadJobs();
  }, []);

  useEffect(() => {
    if (jobs.length === 0) return;

    const titleLower = filterTitle.toLowerCase();
    const countryLower = filterCountry.toLowerCase();

    const filtered = jobs.filter((job) => {
      const titleMatch =
        !titleLower || (job.title || "").toLowerCase().includes(titleLower);
      const countryMatch =
        !countryLower ||
        (job.country || "").toLowerCase().includes(countryLower);
      return titleMatch && countryMatch;
    });

    setDisplayJobs(showAll ? filtered : filtered.slice(0, 4));
  }, [filterTitle, filterCountry, triggerFilter, jobs, showAll]);

  const handleToggleShowAll = () => {
    setShowAll((prev) => !prev);
    if (!showAll) {
      setDisplayJobs(jobs);
    } else {
      setDisplayJobs(jobs.slice(0, 4));
      document.getElementById("jobs")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (loading) {
    return (
      <section id="jobs">
        <div className="mid-title">
          <h2>Latest Vacancies</h2>
          <p>Hand-picked opportunities for your career growth.</p>
        </div>
        <div className="jobs-grid">
          <p
            style={{
              textAlign: "center",
              width: "100%",
              fontWeight: "bold",
              color: "var(--primary)",
              padding: "50px",
            }}
          >
            <i className="fas fa-spinner fa-spin" /> Loading Latest Jobs...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="jobs">
        <div className="mid-title">
          <h2>Latest Vacancies</h2>
        </div>
        <div className="jobs-grid">
          <p style={{ color: "red", textAlign: "center", width: "100%" }}>
            Error connecting to database. Please refresh.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="jobs">
      <div className="mid-title">
        <h2>Latest Vacancies</h2>
        <p>Hand-picked opportunities for your career growth.</p>
      </div>
      <div className="jobs-grid">
        {displayJobs.length === 0 ? (
          <p style={{ textAlign: "center", width: "100%" }}>
            No matching jobs found.
          </p>
        ) : (
          displayJobs.map((job, i) => <JobCard key={i} job={job} />)
        )}
      </div>
      <div className="toggle-btn-container" id="loadMoreContainer">
        <button
          id="toggleBtn"
          className="btn-view-more"
          onClick={handleToggleShowAll}
        >
          {showAll ? (
            <>
              SHOW LESS <i className="fas fa-chevron-up" />
            </>
          ) : (
            <>
              EXPLORE ALL JOBS <i className="fas fa-chevron-down" />
            </>
          )}
        </button>
      </div>
    </section>
  );
}
