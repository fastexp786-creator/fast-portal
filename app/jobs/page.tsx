import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import {
  JOB_COUNTRY_CONFIG,
  JOB_COUNTRY_SLUGS,
  type JobCountrySlug,
} from "@/lib/job-country-config";
import JobsPageClient from "@/components/JobsPageClient";
import PageSidebar from "@/components/PageSidebar";

export const dynamic = "force-dynamic";
export const revalidate = 300; // Revalidate every 5 minutes for fresh content

export async function generateMetadata(): Promise<Metadata> {
  const ogImage = `${SITE_URL}/vercel.svg`;
  return {
    title: "Latest Jobs Worldwide 2026 - Fast Job Career",
    description: "Explore thousands of job vacancies across USA, UK, Gulf Countries, India, Pakistan, Malaysia. Government & private sector jobs updated daily.",
    keywords: "jobs, careers, employment, USA jobs, UK jobs, Gulf jobs, India jobs, Pakistan jobs, Malaysia jobs, government jobs, private sector jobs",
    alternates: { canonical: `${SITE_URL}/jobs` },
    openGraph: {
      url: `${SITE_URL}/jobs`,
      title: "Latest Jobs Worldwide 2026 - Fast Job Career",
      description: "Explore thousands of job vacancies across multiple countries. Updated daily for 2026.",
      images: [ogImage],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Latest Jobs Worldwide 2026 - Fast Job Career",
      description: "Explore thousands of job vacancies across multiple countries. Updated daily for 2026.",
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}

// Server-side data fetching for SEO
async function getJobsData() {
  try {
    console.log('🔍 SSR: Fetching jobs from database...');
    
    // Direct database connection for SSR
    const { supabase } = await import("@/lib/supabase");
    const { JOBS_TABLE } = await import("@/lib/jobs-schema");
    
    const { data, error, count } = await supabase
      .from(JOBS_TABLE)
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .limit(20);

    if (error) {
      console.error('❌ SSR Database Error:', error);
      return { jobs: [], total: 0 };
    }

    console.log(`✅ SSR: Fetched ${data?.length || 0} jobs from database. Total: ${count || 0}`);
    
    // Add custom descriptions for SEO uniqueness
    const jobsWithCustomDesc = (data || []).map((job, index) => {
      const locationDesc = getLocationDescription(job.country);
      const customDesc = generateCustomDescription(job, locationDesc, index);
      
      return {
        ...job,
        description: customDesc,
        seo_description: customDesc,
      };
    });

    return { jobs: jobsWithCustomDesc, total: count || 0 };
    
  } catch (error) {
    console.error('❌ SSR Critical Error:', error);
    return { jobs: [], total: 0 };
  }
}

function getLocationDescription(country: string | null): string {
  const descriptions: Record<string, string> = {
    "USA": "Federal and private sector opportunities across United States",
    "United Kingdom": "Skilled worker positions and UK visa sponsorship jobs",
    "Saudi Arabia": "Oil & gas, construction, and government vacancies in KSA",
    "UAE": "Dubai, Abu Dhabi, and Sharjah career opportunities",
    "Qatar": "World Cup legacy projects and new openings",
    "Kuwait": "Public sector and private industry positions",
    "Oman": "Tourism, oil, and emerging sector jobs",
    "Bahrain": "Banking, finance, and tech opportunities",
    "India": "IT, government, and multinational company positions",
    "Pakistan": "Public sector and emerging private sector roles",
    "Malaysia": "Technology, manufacturing, and service industry jobs",
  };
  
  return descriptions[country || ''] || "International career opportunity";
}

function generateCustomDescription(job: any, locationDesc: string, index: number): string {
  const prefixes = [
    `📍 ${locationDesc}: `,
    `🏢 ${job.country || 'International'} - `,
    `💼 Exc Opportunity: `,
    `🌟 Premium Position: `,
    `🚀 Career Growth: `,
  ];
  
  const prefix = prefixes[index % prefixes.length];
  
  if (job.description && job.description.length > 30) {
    const cleanDesc = job.description.replace(/<[^>]*>/g, '').substring(0, 160);
    return prefix + cleanDesc + "...";
  }
  
  return `${prefix}${job.title} - ${locationDesc}. Apply now for this excellent opportunity.`;
}

export default async function JobsPage() {
  const jobsData = await getJobsData();
  
  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Latest Jobs Worldwide 2026 - Fast Job Career",
    "description": "Explore thousands of job vacancies across multiple countries. Updated daily for 2026.",
    "url": `${SITE_URL}/jobs`,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": jobsData.total,
      "itemListElement": jobsData.jobs.slice(0, 10).map((job: any, index: number) => ({
        "@type": "JobPosting",
        "position": index + 1,
        "title": job.title,
        "description": job.seo_description || job.description,
        "datePosted": job.created_at,
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": job.country || "International"
          }
        },
        "hiringOrganization": {
          "@type": "Organization",
          "name": job.company || "Fast Job Career"
        }
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen bg-[var(--light)] dark:bg-[#020617] text-[var(--text-color)]">
        <div className="page-with-sidebar">
          <PageSidebar activeSlug="all-jobs" />
          <div className="page-main-content">
            <JobsPageClient initialJobs={jobsData.jobs} totalJobs={jobsData.total} />
          </div>
        </div>
      </main>
    </>
  );
}
