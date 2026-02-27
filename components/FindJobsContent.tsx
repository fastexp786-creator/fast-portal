"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { JOBS_TABLE } from "@/lib/jobs-schema";
import JobCard, { type Job } from "@/components/JobCard";
import FindJobsSearchBar from "@/components/FindJobsSearchBar";
import type { SearchFilters } from "@/components/SearchBar";
import FindJobsSidebar from "@/components/FindJobsSidebar";
import AffiliateWidget from "@/components/AffiliateWidget";

export default function FindJobsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams?.get("q") || "";
  const countryParam = searchParams?.get("country") || "";
  const catParam = searchParams?.get("cat") || "";

  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [displayLimit, setDisplayLimit] = useState(12); 

  const [filters, setFilters] = useState<SearchFilters>({
    keyword: q,
    country: countryParam,
    category: catParam,
    province: "",
    city: "",
    area: "",
  });
  const [sidebarCountry, setSidebarCountry] = useState("");
  const [sidebarCategory, setSidebarCategory] = useState("");
  const [sourceFilter, setSourceFilter] = useState<string>("");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    async function loadJobs() {
      setLoading(true);
      setError(null);
      try {
        let query = supabase
          .from(JOBS_TABLE)
          .select("*")
          .order("created_at", { ascending: false });

        if (sourceFilter) {
          query = query.eq("job_source", sourceFilter);
        }

        const kw = (filters.keyword || "").trim();
        if (kw) {
          const like = `%${kw}%`;
          query = query.or(
            `title.ilike.${like},category.ilike.${like},location.ilike.${like},country.ilike.${like}`
          );
        }

        if (filters.country) {
          query = query.ilike("country", `%${filters.country}%`);
        }

        if (filters.category) {
          query = query.ilike("category", `%${filters.category}%`);
        }

        const { data, error: fetchError } = await query;
        if (fetchError) throw fetchError;
        setJobs(data || []);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Error loading jobs");
      } finally {
        setLoading(false);
      }
    }
    loadJobs();
  }, [sourceFilter, filters.keyword, filters.country, filters.category]);

  const filteredJobs = jobs.filter((job) => {
    const kw = (filters.keyword || "").toLowerCase();
    const titleMatch = !kw || (job.title || "").toLowerCase().includes(kw);
    const catMatch = !kw || (job.category || "").toLowerCase().includes(kw);
    const locMatch =
      !kw ||
      (job.location || "").toLowerCase().includes(kw) ||
      (job.country || "").toLowerCase().includes(kw);
    const keywordMatch = !kw || titleMatch || catMatch || locMatch;

    const country = filters.country || sidebarCountry;
    const countryMatch =
      !country ||
      (job.country || "").toLowerCase().includes(country.toLowerCase());

    const cat = filters.category || sidebarCategory;
    const categoryMatch =
      !cat || (job.category || "").toLowerCase().includes(cat.toLowerCase());

    const province = (filters.province || "").toLowerCase().trim();
    const city = (filters.city || "").toLowerCase().trim();
    const area = (filters.area || "").toLowerCase().trim();
    const locationValue = `${job.location || ""} ${job.country || ""}`.toLowerCase();

    const provinceMatch = !province || locationValue.includes(province);
    const cityMatch = !city || locationValue.includes(city);
    const areaMatch = !area || locationValue.includes(area);

    return (
      keywordMatch &&
      countryMatch &&
      categoryMatch &&
      provinceMatch &&
      cityMatch &&
      areaMatch
    );
  });

  const visibleJobs = filteredJobs.slice(0, displayLimit);

  const handleLoadMore = () => {
    setDisplayLimit(prev => prev + 12);
  };

  const handleSearch = (f: SearchFilters) => {
    setFilters(f);
    setDisplayLimit(12);
    const params = new URLSearchParams();
    if (f.keyword) params.set("q", f.keyword);
    if (f.country) params.set("country", f.country);
    if (f.category) params.set("cat", f.category);
    if (f.province) params.set("province", f.province);
    if (f.city) params.set("city", f.city);
    if (f.area) params.set("area", f.area);
    router.replace(`/find-jobs?${params.toString()}`);
  };

  const activeChips = useMemo(() => {
    const chips: Array<{ key: keyof SearchFilters | "source"; label: string; value: string }> = [];
    if (filters.keyword) chips.push({ key: "keyword", label: "Keyword", value: filters.keyword });
    if (filters.country) chips.push({ key: "country", label: "Country", value: filters.country });
    if (filters.category) chips.push({ key: "category", label: "Category", value: filters.category });
    if (filters.province) chips.push({ key: "province", label: "Province", value: filters.province });
    if (filters.city) chips.push({ key: "city", label: "City", value: filters.city });
    if (filters.area) chips.push({ key: "area", label: "Area", value: filters.area });
    if (sourceFilter) chips.push({ key: "source", label: "Source", value: sourceFilter });
    return chips;
  }, [filters, sourceFilter]);

  function updateUrlFromFilters(next: SearchFilters, src: string) {
    const params = new URLSearchParams();
    if (next.keyword) params.set("q", next.keyword);
    if (next.country) params.set("country", next.country);
    if (next.category) params.set("cat", next.category);
    if (next.province) params.set("province", next.province);
    if (next.city) params.set("city", next.city);
    if (next.area) params.set("area", next.area);
    if (src) params.set("source", src);
    router.replace(`/find-jobs?${params.toString()}`);
  }

  function clearOneChip(k: keyof SearchFilters | "source") {
    if (k === "source") {
      setSourceFilter("");
      updateUrlFromFilters(filters, "");
      return;
    }
    const next = { ...filters, [k]: "" } as SearchFilters;
    setFilters(next);
    setDisplayLimit(12);
    updateUrlFromFilters(next, sourceFilter);
  }

  function clearAllChips() {
    const empty: SearchFilters = {
      keyword: "",
      country: "",
      category: "",
      province: "",
      city: "",
      area: "",
    };
    setFilters(empty);
    setSourceFilter("");
    setDisplayLimit(12);
    updateUrlFromFilters(empty, "");
  }

  return (
    <div className="find-jobs-page-wrap find-jobs-page pb-20 px-4">
      <div className="find-jobs-layout flex flex-col lg:flex-row gap-6">
        {/* Mobile filter toggle */}
        <div className="mb-4 flex w-full items-center justify-between lg:hidden">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="inline-flex items-center gap-2 rounded-full border border-navy-900 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-navy-900 shadow-sm"
          >
            <i className="fas fa-sliders-h" />
            Filters
          </button>
          <span className="text-[11px] font-medium text-gray-500">
            {filteredJobs.length} matches
          </span>
        </div>

        {/* Desktop sidebar */}
        <div className="hidden w-full shrink-0 lg:block lg:w-[240px]">
          <FindJobsSidebar
            selectedCountry={sidebarCountry}
            selectedCategory={sidebarCategory}
            onCountryChange={(c) => {
              setSidebarCountry(c);
              setDisplayLimit(12);
            }}
            onCategoryChange={(c) => {
              setSidebarCategory(c);
              setDisplayLimit(12);
            }}
            onKeywordChange={(k) => {
              setFilters((prev) => ({ ...prev, keyword: k }));
              setDisplayLimit(12);
            }}
          />
        </div>

        <main className="find-jobs-main flex-1">
          <h1 className="text-3xl font-extrabold text-navy-900 mb-6 border-b pb-4">
            Premium Job Portal <span className="text-sm font-normal text-gray-400">({filteredJobs.length} Positions)</span>
          </h1>

          <FindJobsSearchBar
            onSearch={handleSearch}
            initialKeyword={q}
            initialCountry={countryParam}
            initialCategory={catParam}
          />

          <div className="flex flex-wrap items-center gap-3 my-8 bg-white p-3 rounded-xl shadow-sm border">
            <span className="font-bold text-xs uppercase tracking-widest text-gray-400 ml-2">Source:</span>
            {["", "admin", "vendor", "affiliate"].map((s) => (
              <button
                key={s || "all"}
                type="button"
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-300 ${
                  sourceFilter === s 
                  ? "bg-navy-900 text-gold-400 shadow-lg scale-105" 
                  : "bg-gray-50 text-gray-500 hover:bg-navy-50 hover:text-navy-800"
                }`}
                onClick={() => { setSourceFilter(s); setDisplayLimit(12); }}
              >
                {s ? s.toUpperCase() : "ALL SOURCES"}
              </button>
            ))}
          </div>

          {activeChips.length > 0 && (
            <div
              className="flex items-center gap-2 -mt-4 mb-6 md:flex-wrap scrollbar-hide pr-2"
              style={{
                overflowX: "auto",
                WebkitOverflowScrolling: "touch",
                whiteSpace: "nowrap",
              }}
            >
              {activeChips.map((chip, idx) => (
                <button
                  key={`${chip.key}-${idx}`}
                  type="button"
                  onClick={() => clearOneChip(chip.key)}
                  className="inline-flex items-center gap-2 rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs font-semibold hover:bg-gray-200"
                  title={`${chip.label}: ${chip.value}`}
                >
                  <span>{chip.label}: {chip.value}</span>
                  <span aria-hidden className="font-bold">×</span>
                </button>
              ))}
              <button
                type="button"
                onClick={clearAllChips}
                className="ml-2 inline-flex items-center rounded-full bg-red-50 text-red-600 px-3 py-1 text-xs font-bold hover:bg-red-100"
              >
                Clear All
              </button>
            </div>
          )}

          <section id="jobs-feed">
            {loading ? (
              <div className="flex flex-col justify-center items-center py-24">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-navy-900 mb-4"></div>
                <p className="text-navy-900 font-medium animate-pulse">Syncing Latest Jobs...</p>
              </div>
            ) : error ? (
              <div className="text-center py-10">
                <p className="text-red-600 font-semibold">{error}</p>
              </div>
            ) : filteredJobs.length === 0 ? (
              <div className="text-center py-24 bg-white rounded-3xl border-2 border-dashed border-gray-100">
                  <p className="text-gray-400 font-medium italic">No jobs matching your filters were found.</p>
              </div>
            ) : (
              <>
                {/* 4 CARDS PER LINE: lg:grid-cols-4 aur gap kam kiya taake fit ayen */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
                  {visibleJobs.map((job, i) => (
                    <div key={job.id || i} className="flex h-full"> 
                        <JobCard job={job} />
                    </div>
                  ))}
                </div>

                {filteredJobs.length > displayLimit && (
                  <div className="flex flex-col items-center justify-center mt-16 space-y-4">
                    <button
                      onClick={handleLoadMore}
                      className="group relative inline-flex items-center justify-center px-12 py-4 font-bold text-white transition-all duration-300 bg-navy-900 rounded-full hover:bg-navy-800 shadow-lg hover:-translate-y-1 active:scale-95"
                    >
                      <span className="relative z-10 flex items-center gap-2 uppercase tracking-wider">
                        Explore More Jobs
                      </span>
                    </button>
                    <p className="text-gray-400 text-xs font-medium uppercase">
                      Displaying {displayLimit} of {filteredJobs.length} Vacancies
                    </p>
                  </div>
                )}
              </>
            )}
          </section>

          <div className="mt-24">
            <AffiliateWidget />
          </div>
        </main>
      </div>
      {/* Mobile side drawer for filters */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 lg:hidden">
          <div className="absolute left-0 top-0 flex h-full w-80 max-w-[80%] flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b px-4 py-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-600">
                Filters
              </span>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="text-gray-500"
              >
                <i className="fas fa-times" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-3">
              <FindJobsSidebar
                selectedCountry={sidebarCountry}
                selectedCategory={sidebarCategory}
                onCountryChange={(c) => {
                  setSidebarCountry(c);
                  setDisplayLimit(12);
                }}
                onCategoryChange={(c) => {
                  setSidebarCategory(c);
                  setDisplayLimit(12);
                }}
                onKeywordChange={(k) => {
                  setFilters((prev) => ({ ...prev, keyword: k }));
                  setDisplayLimit(12);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
