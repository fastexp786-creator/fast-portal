import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { JOBS_TABLE } from '@/lib/jobs-schema';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get('limit') || '20');
  const offset = parseInt(searchParams.get('offset') || '0');

  try {
    // Fetch jobs with pagination
    const { data, error, count } = await supabase
      .from(JOBS_TABLE)
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch jobs', details: error.message },
        { status: 500 }
      );
    }

    // Add custom descriptions for SEO uniqueness
    const jobsWithCustomDesc = (data || []).map((job, index) => {
      const locationDesc = getLocationDescription(job.country);
      const customDesc = generateCustomDescription(job, locationDesc, index);
      
      return {
        ...job,
        description: customDesc,
        seo_description: customDesc, // Additional field for SEO
      };
    });

    return NextResponse.json({
      jobs: jobsWithCustomDesc,
      total: count || 0,
      limit,
      offset,
      hasMore: (count || 0) > offset + limit,
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
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
