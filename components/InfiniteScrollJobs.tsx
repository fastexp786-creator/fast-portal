"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Loader2, RefreshCw, AlertCircle } from "lucide-react";
import EnhancedJobCard from "./EnhancedJobCard";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  city: string;
  country: string;
  salary: string;
  type: "full-time" | "part-time" | "contract" | "remote";
  experience: "entry" | "mid" | "senior";
  postedAt: string;
  urgency?: "urgent" | "new" | "hot";
  description: string;
  skills: string[];
  benefits: string[];
  logo?: string;
  saved?: boolean;
}

interface InfiniteScrollJobsProps {
  initialJobs: Job[];
  onLoadMore: (page: number, limit: number) => Promise<Job[]>;
  onSave?: (jobId: string) => void;
  onShare?: (job: Job) => void;
  pageSize?: number;
  hasMore?: boolean;
  loading?: boolean;
  error?: string;
}

export default function InfiniteScrollJobs({
  initialJobs,
  onLoadMore,
  onSave,
  onShare,
  pageSize = 10,
  hasMore: propHasMore,
  loading: propLoading,
  error: propError
}: InfiniteScrollJobsProps) {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(propHasMore !== false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const cacheRef = useRef<Map<string, Job[]>>(new Map());

  // Load more jobs
  const loadMoreJobs = useCallback(async () => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const cacheKey = `page-${page}`;
      let newJobs: Job[];
      
      // Check cache first
      if (cacheRef.current.has(cacheKey)) {
        newJobs = cacheRef.current.get(cacheKey)!;
      } else {
        newJobs = await onLoadMore(page, pageSize);
        cacheRef.current.set(cacheKey, newJobs);
      }
      
      // Filter out duplicates based on job ID
      const uniqueNewJobs = newJobs.filter(newJob => 
        !jobs.some(existingJob => existingJob.id === newJob.id)
      );
      
      if (uniqueNewJobs.length === 0) {
        setHasMore(false);
      } else {
        setJobs(prev => [...prev, ...uniqueNewJobs]);
        setPage(prev => prev + 1);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load more jobs');
    } finally {
      setLoading(false);
    }
  }, [page, pageSize, loading, hasMore, onLoadMore, jobs]);

  // Refresh jobs
  const refreshJobs = useCallback(async () => {
    setIsRefreshing(true);
    setError(null);
    setPage(1);
    setHasMore(true);
    cacheRef.current.clear();
    
    try {
      const newJobs = await onLoadMore(1, pageSize);
      setJobs(newJobs);
      setPage(2);
      cacheRef.current.set('page-1', newJobs);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to refresh jobs');
    } finally {
      setIsRefreshing(false);
    }
  }, [onLoadMore, pageSize]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && !loading && hasMore) {
          loadMoreJobs();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px' // Start loading 100px before the element is visible
      }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
      observerRef.current = observer;
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loadMoreJobs, loading, hasMore]);

  // Update jobs when initial jobs change
  useEffect(() => {
    setJobs(initialJobs);
  }, [initialJobs]);

  // Update loading state from props
  useEffect(() => {
    if (propLoading !== undefined) {
      setLoading(propLoading);
    }
  }, [propLoading]);

  // Update error state from props
  useEffect(() => {
    if (propError !== undefined) {
      setError(propError);
    }
  }, [propError]);

  // Update hasMore state from props
  useEffect(() => {
    if (propHasMore !== undefined) {
      setHasMore(propHasMore);
    }
  }, [propHasMore]);

  // Pull to refresh functionality
  const [pullStartY, setPullStartY] = useState(0);
  const [pullDistance, setPullDistance] = useState(0);
  const [isPulling, setIsPulling] = useState(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (window.scrollY === 0) {
      setPullStartY(e.touches[0].clientY);
      setIsPulling(true);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isPulling) {
      const currentY = e.touches[0].clientY;
      const distance = currentY - pullStartY;
      
      if (distance > 0 && distance < 150) {
        setPullDistance(distance);
      }
    }
  };

  const handleTouchEnd = () => {
    if (isPulling && pullDistance > 80) {
      refreshJobs();
    }
    setIsPulling(false);
    setPullDistance(0);
  };

  return (
    <div 
      className="relative"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Pull to Refresh Indicator */}
      <div 
        className={`absolute top-0 left-0 right-0 z-10 flex items-center justify-center transition-transform duration-200 ${
          pullDistance > 0 ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ height: `${Math.min(pullDistance, 80)}px` }}
      >
        <div className="flex items-center gap-2 text-blue-600">
          <RefreshCw className={`w-5 h-5 ${pullDistance > 80 ? 'animate-spin' : ''}`} />
          <span className="text-sm font-medium">
            {pullDistance > 80 ? 'Release to refresh' : 'Pull to refresh'}
          </span>
        </div>
      </div>

      {/* Refresh Button */}
      <div className="flex items-center justify-between mb-4 px-4">
        <h2 className="text-xl font-bold text-gray-900">
          Latest Jobs ({jobs.length})
        </h2>
        <button
          onClick={refreshJobs}
          disabled={isRefreshing || loading}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {jobs.map((job, index) => (
          <EnhancedJobCard
            key={`${job.id}-${index}`}
            job={job}
            onSave={onSave}
            onShare={onShare}
          />
        ))}
      </div>

      {/* Loading Spinner */}
      {(loading || isRefreshing) && (
        <div className="flex items-center justify-center py-8">
          <div className="flex items-center gap-3 text-blue-600">
            <Loader2 className="w-6 h-6 animate-spin" />
            <span className="font-medium">
              {isRefreshing ? 'Refreshing...' : 'Loading more jobs...'}
            </span>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="flex items-center justify-center py-8 px-4">
          <div className="flex flex-col items-center text-center max-w-md">
            <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Oops! Something went wrong
            </h3>
            <p className="text-gray-600 mb-4">{error}</p>
            <div className="flex gap-3">
              <button
                onClick={loadMoreJobs}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={refreshJobs}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Refresh
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Load More Trigger */}
      {!loading && !error && hasMore && (
        <div ref={loadMoreRef} className="py-8 text-center">
          <p className="text-gray-500">Scroll to load more jobs...</p>
        </div>
      )}

      {/* End of Jobs Message */}
      {!hasMore && jobs.length > 0 && !loading && !error && (
        <div className="flex items-center justify-center py-8 px-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              You've reached the end
            </h3>
            <p className="text-gray-600">
              That's all we have for now. Check back later for new opportunities!
            </p>
          </div>
        </div>
      )}

      {/* Empty State */}
      {jobs.length === 0 && !loading && !error && (
        <div className="flex items-center justify-center py-16 px-4">
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No jobs found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your filters or check back later for new opportunities.
            </p>
            <button
              onClick={refreshJobs}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Refresh Jobs
            </button>
          </div>
        </div>
      )}

      {/* Performance Stats (Development Only) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-black/80 text-white p-2 rounded text-xs">
          <div>Jobs: {jobs.length}</div>
          <div>Page: {page}</div>
          <div>Has More: {hasMore ? 'Yes' : 'No'}</div>
          <div>Loading: {loading ? 'Yes' : 'No'}</div>
          <div>Cache Size: {cacheRef.current.size}</div>
        </div>
      )}
    </div>
  );
}
