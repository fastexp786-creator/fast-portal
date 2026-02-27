import { createClient } from "@supabase/supabase-js";
import fs from "node:fs";
import path from "node:path";

// Load environment variables from .env.local
try {
  const envPath = path.join(process.cwd(), ".env.local");
  if (fs.existsSync(envPath)) {
    const raw = fs.readFileSync(envPath, "utf8");
    for (const line of raw.split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (!m) continue;
      const key = m[1];
      let val = m[2];
      // Strip surrounding quotes if present
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      process.env[key] ??= val;
    }
  }
} catch {}

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE_KEY;
const ADZUNA_APP_ID = process.env.ADZUNA_APP_ID;
const ADZUNA_APP_KEY = process.env.ADZUNA_APP_KEY;
const TABLE = "jobs_data";
const SOURCE = "affiliate";

if (!SUPABASE_URL || !SERVICE_ROLE) {
  console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

if (!ADZUNA_APP_ID || !ADZUNA_APP_KEY) {
  console.error("Missing ADZUNA_APP_ID or ADZUNA_APP_KEY");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE, { auth: { persistSession: false } });

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function fetchAdzunaJobs(country = "gb", page = 1, resultsPerPage = 50) {
  const baseUrl = `https://api.adzuna.com/v1/api/jobs/${country}/search/${page}`;
  const params = new URLSearchParams({
    app_id: ADZUNA_APP_ID,
    app_key: ADZUNA_APP_KEY,
    results_per_page: resultsPerPage.toString(),
    content_type: "application/json"
  });

  try {
    console.log(`Fetching Adzuna jobs for ${country}, page ${page}...`);
    const response = await fetch(`${baseUrl}?${params}`);
    
    if (!response.ok) {
      throw new Error(`Adzuna API error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error(`Error fetching Adzuna jobs for ${country}:`, error.message);
    return [];
  }
}

function mapAdzunaToSupabase(adzunaJob) {
  const {
    id,
    title,
    company: { display_name: company } = {},
    contract_type,
    category: { label: category } = {},
    location: { area: location = [], display_name: locationDisplay } = {},
    created,
    redirect_url,
    description,
    salary_min,
    salary_max,
    salary_is_predicted
  } = adzunaJob;

  // Extract country from location or use default
  let country = "gb";
  if (locationDisplay && typeof locationDisplay === "string") {
    const countryMatch = locationDisplay.match(/\b([A-Z]{2})\b/);
    if (countryMatch) {
      country = countryMatch[1].toLowerCase();
    }
  }

  // Create salary description
  let salaryDescription = "";
  if (salary_min || salary_max) {
    if (salary_min && salary_max) {
      salaryDescription = `${salary_min} - ${salary_max}`;
    } else if (salary_min) {
      salaryDescription = `From ${salary_min}`;
    } else if (salary_max) {
      salaryDescription = `Up to ${salary_max}`;
    }
    if (salary_is_predicted) {
      salaryDescription += " (estimated)";
    }
  }

  // Build full description with salary info
  const fullDescription = salaryDescription 
    ? `${description}\n\nSalary: ${salaryDescription}`
    : description;

  return {
    title: title || "Untitled Job",
    company: company || "Unknown Company",
    job_type: contract_type || "Full-time",
    category: category || "General",
    country: country,
    location: Array.isArray(location) ? location.join(", ") : locationDisplay || "",
    expiry_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 30 days from now
    apply_url: redirect_url || "",
    description: fullDescription || "No description provided",
    vendor_whatsapp: null,
    status: "Active",
    external_id: `adzuna_${id}`,
    job_source: SOURCE,
    priority_score: 0,
    is_active: true
  };
}

async function insertJobsToSupabase(jobs) {
  if (jobs.length === 0) {
    console.log("No jobs to insert");
    return;
  }

  try {
    // Check for existing jobs by external_id to avoid duplicates
    const externalIds = jobs.map(job => job.external_id);
    const { data: existingJobs } = await supabase
      .from(TABLE)
      .select("external_id")
      .in("external_id", externalIds);

    const existingExternalIds = new Set(existingJobs?.map(job => job.external_id) || []);
    const newJobs = jobs.filter(job => !existingExternalIds.has(job.external_id));

    if (newJobs.length === 0) {
      console.log("All jobs already exist in database");
      return;
    }

    console.log(`Inserting ${newJobs.length} new jobs...`);
    
    const { error } = await supabase
      .from(TABLE)
      .insert(newJobs);

    if (error) {
      console.error("Error inserting jobs:", error);
    } else {
      console.log(`Successfully inserted ${newJobs.length} jobs`);
    }
  } catch (error) {
    console.error("Error in insertJobsToSupabase:", error);
  }
}

async function main() {
  console.log("Starting Adzuna job scraping...");
  
  const countries = ["gb", "us", "ca", "au", "nz"]; // Adzuna supported countries
  const maxPages = 3; // Limit pages to avoid rate limiting
  const resultsPerPage = 50;

  let allJobs = [];

  for (const country of countries) {
    console.log(`\nProcessing country: ${country.toUpperCase()}`);
    
    for (let page = 1; page <= maxPages; page++) {
      const jobs = await fetchAdzunaJobs(country, page, resultsPerPage);
      
      if (jobs.length === 0) {
        console.log(`No more jobs found for ${country} at page ${page}`);
        break;
      }

      const mappedJobs = jobs.map(mapAdzunaToSupabase);
      allJobs = allJobs.concat(mappedJobs);
      
      console.log(`Fetched ${jobs.length} jobs from ${country}, page ${page}`);
      
      // Be respectful to the API - add delay between requests
      await sleep(1000);
    }
  }

  console.log(`\nTotal jobs fetched: ${allJobs.length}`);
  
  if (allJobs.length > 0) {
    await insertJobsToSupabase(allJobs);
  }

  console.log("Adzuna scraping completed!");
}

// Handle unhandled rejections
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  process.exit(1);
});

// Run the main function
main().catch(console.error);