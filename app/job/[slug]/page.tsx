import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { JOBS_TABLE, type JobRow } from "@/lib/jobs-schema";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

function parseId(slug: string): string | null {
  // Expected pattern: <slugified>-<location>--<id>
  const idx = slug.lastIndexOf("--");
  if (idx === -1) return null;
  const id = slug.slice(idx + 2);
  return id || null;
}

function titleFor(job: Partial<JobRow>) {
  const loc = [job.location, job.country].filter(Boolean).join(", ");
  return `${job.title || "Job"} in ${loc || "Global"} | ${SITE_NAME}`;
}

function descFor(job: Partial<JobRow>) {
  const base =
    job.description ||
    `${job.title || "Job"} at ${job.company || SITE_NAME}. Apply now.`;
  return base.replace(/\s+/g, " ").slice(0, 160);
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const id = parseId(slug);
  if (!id) return { title: SITE_NAME };
  const { data } = await supabase.from(JOBS_TABLE).select("*").eq("id", id).maybeSingle();
  if (!data) return { title: SITE_NAME };
  const url = `${SITE_URL}/job/${slug}`;
  const ogImage = `${SITE_URL}/vercel.svg`;
  return {
    title: titleFor(data),
    description: descFor(data),
    alternates: { canonical: url },
    openGraph: {
      url,
      title: titleFor(data),
      description: descFor(data),
      siteName: SITE_NAME,
      type: "article",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: titleFor(data),
      description: descFor(data),
      images: [ogImage],
    },
  };
}

export default async function JobDetailPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const id = parseId(slug);
  if (!id) notFound();
  const { data, error } = await supabase.from(JOBS_TABLE).select("*").eq("id", id).maybeSingle();
  if (error || !data) notFound();
  const job = data as Partial<JobRow>;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title || "Job",
    "description": (job.description || "").replace(/\n+/g, " ").slice(0, 5000),
    "datePosted": job.created_at || undefined,
    "validThrough": job.expiry_date || undefined,
    "employmentType": job.job_type || undefined,
    "identifier": {
      "@type": "PropertyValue",
      "name": SITE_NAME,
      "value": job.id || ""
    },
    "hiringOrganization": {
      "@type": "Organization",
      "name": job.company || SITE_NAME
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.location || undefined,
        "addressCountry": job.country || undefined
      }
    },
    "applicantLocationRequirements": job.country
      ? { "@type": "Country", "name": job.country }
      : undefined,
    "directApply": !!job.apply_url,
  };
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 px-4 py-8">
      <article className="mx-auto max-w-3xl bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-extrabold text-navy-900">
            {job.title}
          </h1>
          <p className="mt-2 text-gray-600">
            {[job.company, job.location, job.country].filter(Boolean).join(" • ")}
          </p>
        </header>
        {job.description && (
          <section className="prose prose-sm md:prose-base max-w-none">
            <p>{job.description}</p>
          </section>
        )}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          {job.apply_url && (
            <a
              href={job.apply_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#001f3f] text-white font-bold hover:bg-blue-800"
            >
              Apply Now
            </a>
          )}
          <a
            href="/find-jobs"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50"
          >
            Back to Jobs
          </a>
        </div>
      </article>
    </main>
  );
}
