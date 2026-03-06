import { NextRequest, NextResponse } from 'next/server';
import { RSS_FEED_URLS, type JobCountrySlug } from '@/lib/job-country-config';

interface RSSJob {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  source: string;
}

async function fetchRSSFeed(feedUrl: string): Promise<RSSJob[]> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(feedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'application/rss+xml, application/xml, text/xml',
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.warn(`Failed to fetch RSS feed: ${feedUrl} - ${response.status}`);
      return [];
    }

    const rssText = await response.text();
    
    // Enhanced RSS parsing with better error handling
    const itemMatches = rssText.match(/<item>(.*?)<\/item>/g) || [];
    
    const jobs = itemMatches.map((itemText) => {
      // Try multiple patterns for title
      const titleMatch = itemText.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) || 
                        itemText.match(/<title>(.*?)<\/title>/) ||
                        itemText.match(/<title[^>]*>(.*?)<\/title>/);
      
      // Try multiple patterns for link
      const linkMatch = itemText.match(/<link>(.*?)<\/link>/) || 
                       itemText.match(/<link[^>]*href=["'](.*?)["'][^>]*>/) ||
                       itemText.match(/<guid[^>]*>(.*?)<\/guid>/);
      
      // Try multiple patterns for description
      const descMatch = itemText.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/) || 
                      itemText.match(/<description>(.*?)<\/description>/) ||
                      itemText.match(/<summary[^>]*>(.*?)<\/summary>/);
      
      // Try multiple patterns for publication date
      const pubDateMatch = itemText.match(/<pubDate>(.*?)<\/pubDate>/) || 
                          itemText.match(/<dc:date>(.*?)<\/dc:date>/) ||
                          itemText.match(/<published>(.*?)<\/published>/) ||
                          itemText.match(/<updated>(.*?)<\/updated>/);

      const title = titleMatch ? titleMatch[1].replace(/<!\[CDATA\[(.*?)\]\]>/g, '$1').trim() : 'No title';
      const link = linkMatch ? linkMatch[1].trim() : '#';
      const description = descMatch ? 
        descMatch[1].replace(/<!\[CDATA\[(.*?)\]\]>/g, '$1').replace(/<[^>]*>/g, '').substring(0, 200) + '...' : 
        'No description available';
      const pubDate = pubDateMatch ? pubDateMatch[1] : new Date().toISOString();

      return {
        title,
        link,
        description,
        pubDate,
        source: new URL(feedUrl).hostname.replace('www.', ''),
      };
    }).filter(job => job.title !== 'No title' && job.link !== '#');

    return jobs;
  } catch (error) {
    console.error(`Error fetching RSS feed ${feedUrl}:`, error instanceof Error ? error.message : error);
    return [];
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const country = searchParams.get('country') as JobCountrySlug;

  if (!country || !RSS_FEED_URLS[country]) {
    return NextResponse.json({ error: 'Invalid country' }, { status: 400 });
  }

  try {
    // RSS feeds disabled for performance optimization
    // External API calls are causing server slowdown
    return NextResponse.json({ 
      jobs: [],
      meta: {
        totalJobs: 0,
        displayedJobs: 0,
        successfulFeeds: 0,
        failedFeeds: 0,
        totalFeeds: 0,
        message: 'RSS feeds temporarily disabled for performance optimization. Using Supabase data instead.'
      }
    });

  } catch (error) {
    console.error('Critical error in RSS jobs API:', error);
    return NextResponse.json({ 
      error: 'Failed to fetch RSS jobs',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
