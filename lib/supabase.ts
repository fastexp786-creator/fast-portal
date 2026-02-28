import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !key) {
  if (process.env.NODE_ENV === "production") {
    throw new Error("❌ Supabase URL or anon key is missing in production environment variables.");
  }
  console.warn("⚠️ Supabase environment variables not found. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY");
}

export const supabase = createClient(
  url || "https://placeholder.supabase.co", 
  key || "placeholder-key"
);
