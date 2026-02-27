import * as cheerio from "cheerio";
import crypto from "node:crypto";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE_KEY;
const TABLE = process.env.JOBS_TABLE || "jobs_data";
const SOURCE = "affiliate";

if (!SUPABASE_URL || !SERVICE_ROLE) {
  console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE, { auth: { persistSession: false } });

function hashKey(s) {
  return crypto.createHash("sha1").update(s).digest("hex");
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function fetchHtml(url) {
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 FastPortalBot/1.0" } });
  if (!res.ok) throw new Error(`Fetch ${url} ${res.status}`);
  return await res.text();
}

function normalizeText(t) {
  return t?.replace(/\s+/g, " ").trim() || "";
}

async function upsertJob(j) {
  const external_id = j.external_id || hashKey(`${j.title}|${j.company}|${j.location}|${j.apply_url}`);
  const { data: exists } = await supabase.from(TABLE).select("id").eq("external_id", external_id).maybeSingle();
  if (exists) return false;
  const { error } = await supabase.from(TABLE).insert({
    title: j.title || null,
    company: j.company || null,
    job_type: j.job_type || null,
    category: j.category || "Government",
    country: j.country || "Pakistan",
    location: j.location || null,
    apply_url: j.apply_url || null,
    description: j.description || null,
    external_id,
    job_source: SOURCE,
    is_active: true,
    priority_score: 10,
  });
  if (error) {
    console.error("Insert error:", error.message);
    return false;
  }
  return true;
}

async function parseNJPList() {
  const base = "https://njp.gov.pk/";
  const html = await fetchHtml(base);
  const $ = cheerio.load(html);
  const links = new Set();
  $("a[href]").each((_, a) => {
    const href = $(a).attr("href");
    if (!href) return;
    const url = href.startsWith("http") ? href : new URL(href, base).toString();
    if (/job|vacanc|career|position/i.test($(a).text() || "") || /jobs|careers|vacancies/i.test(url)) {
      links.add(url);
    }
  });
  return Array.from(links).slice(0, 12);
}

async function parseNJPDetail(url) {
  const html = await fetchHtml(url);
  const $ = cheerio.load(html);
  const title = normalizeText($("h1").first().text()) || normalizeText($("title").text());
  const desc = normalizeText($("main").text()) || normalizeText($("body").text());
  const locationMatch = desc.match(/Location[:\-]?\s*([A-Za-z ,]+)/i);
  const companyMatch = desc.match(/Organization[:\-]?\s*([A-Za-z &]+)/i);
  return {
    title,
    company: companyMatch?.[1]?.trim() || "Government of Pakistan",
    location: locationMatch?.[1]?.trim() || "Pakistan",
    country: "Pakistan",
    category: "Government",
    job_type: /part[- ]?time/i.test(desc) ? "Part-time" : /intern/i.test(desc) ? "Internship" : "Full-time",
    apply_url: url,
    description: desc.slice(0, 4000),
    external_id: url,
  };
}

async function main() {
  const list = await parseNJPList();
  let inserted = 0;
  for (const url of list) {
    try {
      const job = await parseNJPDetail(url);
      const ok = await upsertJob(job);
      if (ok) inserted++;
      await sleep(1200);
    } catch (e) {
      console.error("Parse error:", e?.message || e);
      await sleep(500);
    }
  }
  console.log(`Done. Inserted: ${inserted}/${list.length}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

