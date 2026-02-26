"use client";

import { useState } from "react";
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

  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center w-full group h-full justify-between">
      
      {/* Top Section: Title & Company */}
      <div className="w-full flex flex-col items-center flex-1">
        
        {/* Title: Size kam kiya gaya (text-md), aur click par toggle effect */}
        <h4 
          onClick={() => setIsExpanded(!isExpanded)}
          className={`text-[16px] font-extrabold text-navy-950 mb-3 px-2 leading-tight uppercase tracking-tight w-full cursor-pointer hover:text-blue-600 transition-colors ${
            isExpanded ? "line-clamp-none" : "line-clamp-1"
          }`}
          title={isExpanded ? "Click to collapse" : "Click to see full title"}
        >
          {job.title || "Job Vacancy"}
        </h4>

        <div className="space-y-2 mb-6 w-full">
          {/* Company */}
          {job.company && (
            <p className="text-[14px] text-blue-700 font-bold flex items-center justify-center gap-1.5">
              <i className="fas fa-building text-[12px]" /> {job.company}
            </p>
          )}

          {/* Location: Clean & Professional */}
          <p className="text-[13px] text-gray-500 font-medium flex items-center justify-center gap-1.5">
            <i className="fas fa-map-marker-alt text-red-500 text-[12px]" />
            {[job.location, job.country].filter(Boolean).join(", ") || "Location Shared on Apply"}
          </p>

          {/* Category Section */}
          <div className="pt-2">
            <span className="text-[11px] font-bold text-gray-400 border border-gray-100 px-3 py-1 rounded-md bg-gray-50/50">
              {job.category || "General"}
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons: Apply Now & WhatsApp */}
      <div className="w-full space-y-2 mt-4">
        <button
          type="button"
          onClick={handleApply}
          disabled={applying}
          className="w-full py-3 bg-[#001f3f] text-white rounded-2xl font-bold text-[14px] hover:bg-blue-800 transition-all flex items-center justify-center shadow-md active:scale-95 disabled:opacity-60"
        >
          {applying ? "Processing..." : "Apply Now"}
        </button>

        {job.vendor_whatsapp && (
          <a
            href={`https://wa.me/${job.vendor_whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 bg-[#25d366] text-white rounded-2xl font-bold text-[14px] hover:bg-[#1ebd57] transition-all flex items-center justify-center gap-2 shadow-md active:scale-95"
          >
            <i className="fab fa-whatsapp text-lg" /> WhatsApp
          </a>
        )}
      </div>
    </div>
  );
}
