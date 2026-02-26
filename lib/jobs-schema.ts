/**
 * Supabase Jobs Table Schema
 * Table name: jobs (ya jobs_data - constant se change karo)
 */

// Table name: Supabase mein existing table
export const JOBS_TABLE = "jobs_data";

export type JobSource = "admin" | "vendor" | "affiliate";
export type JobStatus = "Active" | "Expired" | "Pending";

export interface JobRow {
  id: string;
  created_at: string;

  title: string;
  company?: string | null;
  job_type?: string | null; // Full-time, Part-time, etc.
  category?: string | null;
  country?: string | null;
  location?: string | null;
  expiry_date?: string | null;
  apply_url?: string | null;
  description?: string | null;
  vendor_whatsapp?: string | null;
  status?: string | null;
  external_id?: string | null;
  job_source?: JobSource | null;
  priority_score?: number | null;
  is_active?: boolean | null;
}
