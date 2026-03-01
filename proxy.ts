import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl

  // Fix common 404 errors: redirect /jobs/job-title to /job/job-title
  if (url.pathname.startsWith('/jobs/') && !url.pathname.includes('--')) {
    const slug = url.pathname.replace('/jobs/', '')
    
    // Check if it's not a country slug (country slugs contain '-jobs')
    if (!slug.includes('-jobs')) {
      const newUrl = new URL(`/job/${slug}`, request.url)
      return NextResponse.redirect(newUrl, 307)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/jobs/:path*']
}
