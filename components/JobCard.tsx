"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import type { JobRow, JobSource } from "@/lib/jobs-schema";
import { useAuthModal } from "@/components/AuthModalProvider";

export type { JobSource };
export type Job = Partial<JobRow>;

export default function JobCard({ job }: { job: Job }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [applying, setApplying] = useState(false);
  const { openAuthModal } = useAuthModal();

  async function handleApply() {
    const applyUrl = job.apply_url || "https://fastjobcareer.com/apply";
    try {
      setApplying(true);
      const { data } = await supabase.auth.getSession();
      const email = data.session?.user?.email ?? null;
      if (email) {
        await supabase.from("applications").insert({
          email,
          job_id: job.id || null,
          job_title: job.title || null,
          apply_url: applyUrl,
        });
        window.open(applyUrl, "_blank", "noopener,noreferrer");
      } else {
        openAuthModal(applyUrl);
      }
    } finally {
      setApplying(false);
    }
  }

  function slugify(s: string) {
    return (s || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 60);
  }

  function jobDetailHref() {
    if (!job.id) return null;
    const title = slugify(job.title || "job");
    const loc = slugify([job.location, job.country].filter(Boolean).join("-") || "location");
    return `/job/${title}-${loc}--${job.id}`;
  }

  return (
    <div className="bg-white border border-gray-100 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center w-full group h-full justify-between min-h-[320px] md:min-h-[380px]">
      
      {/* Top Section: Title & Company */}
      <div className="w-full flex flex-col items-center flex-1">
        
        {/* Title: Responsive size aur better spacing */}
        {jobDetailHref() ? (
          <Link href={jobDetailHref()!} className="w-full">
            <h4 
              className={`text-[14px] md:text-[16px] font-extrabold text-navy-950 mb-2 md:mb-3 px-2 leading-tight uppercase tracking-tight w-full cursor-pointer hover:text-blue-600 transition-colors line-clamp-2 md:line-clamp-1`}
              title="View job details"
            >
              {job.title || "Job Vacancy"}
            </h4>
          </Link>
        ) : (
          <h4 
            onClick={() => setIsExpanded(!isExpanded)}
            className={`text-[14px] md:text-[16px] font-extrabold text-navy-950 mb-2 md:mb-3 px-2 leading-tight uppercase tracking-tight w-full cursor-pointer hover:text-blue-600 transition-colors ${
              isExpanded ? "line-clamp-none" : "line-clamp-2 md:line-clamp-1"
            }`}
            title={isExpanded ? "Click to collapse" : "Click to see full title"}
          >
            {job.title || "Job Vacancy"}
          </h4>
        )}

        <div className="space-y-1.5 md:space-y-2 mb-4 md:mb-6 w-full">
          {/* Company */}
          {job.company && (
            <p className="text-[12px] md:text-[14px] text-blue-700 font-bold flex items-center justify-center gap-1.5">
              <i className="fas fa-building text-[10px] md:text-[12px]" /> {job.company}
            </p>
          )}

          {/* Location: Better mobile spacing */}
          <p className="text-[11px] md:text-[13px] text-gray-500 font-medium flex items-center justify-center gap-1.5">
            <i className="fas fa-map-marker-alt text-red-500 text-[10px] md:text-[12px]" />
            <span className="line-clamp-1">
              {[job.location, job.country].filter(Boolean).join(", ") || "Location Shared on Apply"}
            </span>
          </p>

          {/* Category Section */}
          <div className="pt-1.5 md:pt-2">
            <span className="text-[10px] md:text-[11px] font-bold text-gray-400 border border-gray-100 px-2 md:px-3 py-1 rounded-md bg-gray-50/50">
              {job.category || "General"}
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons: Better mobile spacing */}
      <div className="w-full space-y-1.5 md:space-y-2 mt-2 md:mt-4">
        <button
          type="button"
          onClick={handleApply}
          disabled={applying}
          className="w-full py-2.5 md:py-3 bg-[#001f3f] text-white rounded-xl md:rounded-2xl font-bold text-[12px] md:text-[14px] hover:bg-blue-800 transition-all flex items-center justify-center shadow-md active:scale-95 disabled:opacity-60"
        >
          {applying ? (
            <span className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Processing...
            </span>
          ) : (
            "Apply Now"
          )}
        </button>

        {job.vendor_whatsapp && (
          <a
            href={`https://wa.me/${job.vendor_whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 md:py-3 bg-[#25d366] text-white rounded-xl md:rounded-2xl font-bold text-[12px] md:text-[14px] hover:bg-[#1ebd57] transition-all flex items-center justify-center gap-2 shadow-md active:scale-95"
          >
            <i className="fab fa-whatsapp text-sm md:text-lg" /> 
            <span>WhatsApp</span>
          </a>
        )}
      </div>
    </div>
  );
}
