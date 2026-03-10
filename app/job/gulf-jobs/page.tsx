import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/constants";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { JOBS_TABLE } from "@/lib/jobs-schema";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Gulf Jobs | UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain | Fast Job Career",
  description: "Latest Gulf job opportunities across UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain. Premium positions in top companies.",
  keywords: "gulf jobs, UAE jobs, Saudi Arabia jobs, Qatar jobs, Oman jobs, Kuwait jobs, Bahrain jobs, Middle East careers",
  openGraph: {
    title: "Gulf Jobs | Premium Middle East Career Opportunities",
    description: "Explore thousands of job opportunities across Gulf countries with top employers.",
    url: `${SITE_URL}/job/gulf-jobs`,
    type: "website",
  },
};

interface GulfCountry {
  slug: string;
  name: string;
  flag: string;
  description: string;
  count: number;
}

export default async function GulfJobsPage() {
  // Fetch jobs from all Gulf countries
  const gulfCountries = [
    { name: "United Arab Emirates", flag: "🇦🇪", slug: "uae-jobs" },
    { name: "Saudi Arabia", flag: "🇸🇦", slug: "saudi-arabia-jobs" },
    { name: "Qatar", flag: "🇶🇦", slug: "qatar-jobs" },
    { name: "Oman", flag: "🇴🇲", slug: "oman-jobs" },
    { name: "Kuwait", flag: "🇰🇼", slug: "kuwait-jobs" },
    { name: "Bahrain", flag: "🇧🇭", slug: "bahrain-jobs" },
  ];

  // Get job counts for each country
  const countriesWithCounts: GulfCountry[] = await Promise.all(
    gulfCountries.map(async (country) => {
      try {
        const { count, error } = await supabase
          .from(JOBS_TABLE)
          .select("*", { count: "exact", head: true })
          .eq("country", country.name);

        return {
          ...country,
          description: `Premium career opportunities in ${country.name}`,
          count: error ? 0 : count || 0,
        };
      } catch {
        return {
          ...country,
          description: `Premium career opportunities in ${country.name}`,
          count: 0,
        };
      }
    })
  );

  // Get latest Gulf jobs for showcase
  const { data: latestJobs, error } = await supabase
    .from(JOBS_TABLE)
    .select("*")
    .in("country", gulfCountries.map(c => c.name))
    .order("created_at", { ascending: false })
    .limit(6);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Gulf Jobs Portal
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Premium Career Opportunities Across UAE, Saudi Arabia, Qatar, Oman, Kuwait & Bahrain
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <span className="text-3xl font-bold">{countriesWithCounts.reduce((sum, c) => sum + c.count, 0)}</span>
                <p className="text-sm text-blue-100">Total Jobs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <span className="text-3xl font-bold">{gulfCountries.length}</span>
                <p className="text-sm text-blue-100">Gulf Countries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Gulf Countries
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Click on any country to explore exclusive job opportunities in top companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countriesWithCounts.map((country) => (
              <Link
                key={country.slug}
                href={`/jobs/${country.slug}`}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-5xl">{country.flag}</span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors">
                        {country.count}
                      </div>
                      <div className="text-sm text-gray-500 group-hover:text-blue-100 transition-colors">
                        Jobs Available
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-white transition-colors">
                    {country.name}
                  </h3>
                  
                  <p className="text-gray-600 group-hover:text-blue-100 transition-colors mb-4">
                    {country.description}
                  </p>
                  
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-white transition-colors">
                    Explore Jobs
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Jobs Showcase */}
      {latestJobs && latestJobs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest Gulf Jobs
              </h2>
              <p className="text-lg text-gray-600">
                Fresh opportunities from top employers across the Gulf region
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestJobs.map((job) => (
                <div key={job.id} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {job.title}
                      </h3>
                      <p className="text-gray-600 font-medium">
                        {job.company}
                      </p>
                    </div>
                    <span className="text-2xl">
                      {gulfCountries.find(c => c.name === job.country)?.flag || "🌍"}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {job.location}
                  </div>
                  
                  {job.salary && (
                    <div className="text-sm font-semibold text-blue-600 mb-4">
                      {job.salary}
                    </div>
                  )}
                  
                  <Link
                    href={`/find-jobs?country=${job.country}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    View Similar Jobs
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Gulf Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Browse thousands of premium job opportunities across the Gulf region
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/find-jobs"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Search All Jobs
            </Link>
            <Link
              href="/jobs/uae-jobs"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors border border-blue-600"
            >
              Browse UAE Jobs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
