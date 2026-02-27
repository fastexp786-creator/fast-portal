import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
let supabaseHost: string | null = null;
try {
  if (supabaseUrl) {
    supabaseHost = new URL(supabaseUrl).hostname;
  }
} catch {}

const patterns = [
  { protocol: "https", hostname: "i.pravatar.cc", pathname: "/**" },
  { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
] as any[];

if (supabaseHost) {
  patterns.push({ protocol: "https", hostname: supabaseHost, pathname: "/**" });
}

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: patterns,
  },
};

export default withNextIntl(nextConfig);
