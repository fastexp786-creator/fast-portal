"use client";
import { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { Search, MapPin, Building, Briefcase, DollarSign, Filter, X, ChevronDown, ChevronUp, Star, ExternalLink, MessageCircle, Clock, Calendar, Users, Globe, Tag } from 'lucide-react';

interface Job {
  id: string;
  title: string;
  company: string;
  location?: string;
  country?: string;
  job_type?: string;
  category?: string;
  salary?: string;
  salary_min?: number;
  salary_max?: number;
  salary_currency?: string;
  created_at: string;
  expiry_date?: string;
  status?: string;
  is_active?: boolean;
  description?: string;
  vendor_whatsapp?: string;
  apply_url?: string;
  job_location_type?: string;
  priority_score?: number;
}

interface Agency {
  id: string;
  name: string;
  logo_url?: string;
  website_url?: string;
  is_featured: boolean;
}

interface Ad {
  id: string;
  title?: string;
  image_url?: string;
  link_url?: string;
  is_active: boolean;
}

interface FilterState {
  countries: string[];
  cities: string[];
  categories: string[];
  salaryMin: string;
  salaryMax: string;
  searchQuery: string;
  selectedCountry: string;
  selectedCity: string;
  selectedCategory: string;
  selectedJobType: string;
}

export default function AdvancedFindJobsContent() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [agencies, setAgencies] = useState<Agency[]>([]);
  const [ads, setAds] = useState<Ad[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  
  // Filter states
  const [filters, setFilters] = useState<FilterState>({
    countries: [],
    cities: [],
    categories: [],
    salaryMin: '',
    salaryMax: '',
    searchQuery: '',
    selectedCountry: '',
    selectedCity: '',
    selectedCategory: '',
    selectedJobType: ''
  });

  const [expandedFilters, setExpandedFilters] = useState({
    countries: true,
    cities: false,
    categories: false,
    salary: false
  });

  const [filterLimits, setFilterLimits] = useState({
    countries: 1000,
    cities: 1000,
    categories: 1000
  });

  // Fetch unique filter options
  const fetchFilterOptions = useCallback(async () => {
    try {
      const [countriesResult, citiesResult, categoriesResult] = await Promise.all([
        supabase.from('jobs_data').select('country').eq('is_active', true),
        supabase.from('jobs_data').select('location').eq('is_active', true),
        supabase.from('jobs_data').select('category').eq('is_active', true)
      ]);

      if (countriesResult.data) {
        const uniqueCountries = [...new Set(countriesResult.data.map(item => item.country).filter(Boolean))];
        console.log('Fetched countries:', uniqueCountries.length, uniqueCountries.slice(0, 10));
        setFilters(prev => ({ ...prev, countries: uniqueCountries }));
      } else {
        console.log('No countries data found:', countriesResult.error);
      }

      if (citiesResult.data) {
        const uniqueCities = [...new Set(citiesResult.data.map(item => item.location).filter(Boolean))];
        setFilters(prev => ({ ...prev, cities: uniqueCities }));
      }

      if (categoriesResult.data) {
        const uniqueCategories = [...new Set(categoriesResult.data.map(item => item.category).filter(Boolean))];
        setFilters(prev => ({ ...prev, categories: uniqueCategories }));
      }
    } catch (error) {
      console.error('Error fetching filter options:', error);
    }
  }, []);

  // Fetch ads
  const fetchAds = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('ads')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (data) setAds(data);
      if (error) console.error('Error fetching ads:', error);
    } catch (error) {
      console.error('Error fetching ads:', error);
    }
  }, []);

  // Fetch jobs with filters
  const fetchJobs = useCallback(async (pageNumber: number, isNewSearch = false) => {
    setIsLoading(true);
    const from = pageNumber * 20;
    const to = from + 19;

    try {
      let query = supabase
        .from('jobs_data')
        .select('*', { count: 'exact' })
        .eq('is_active', true)
        .order('created_at', { ascending: false })
        .range(from, to);

      // Apply filters
      if (filters.selectedCountry) {
        query = query.eq('country', filters.selectedCountry);
      }
      if (filters.selectedCity) {
        query = query.eq('location', filters.selectedCity);
      }
      if (filters.selectedCategory) {
        query = query.eq('category', filters.selectedCategory);
      }
      if (filters.selectedJobType) {
        query = query.eq('job_type', filters.selectedJobType);
      }
      if (filters.salaryMin) {
        query = query.gte('salary_min', parseInt(filters.salaryMin));
      }
      if (filters.salaryMax) {
        query = query.lte('salary_max', parseInt(filters.salaryMax));
      }
      if (filters.searchQuery) {
        query = query.or(`title.ilike.%${filters.searchQuery}%,company.ilike.%${filters.searchQuery}%,description.ilike.%${filters.searchQuery}%`);
      }

      const { data, count, error } = await query;

      if (error) {
        console.error('Error fetching jobs:', error);
        setIsLoading(false);
        return;
      }

      if (data) {
        const transformedJobs = data.map((job: any) => ({
          ...job,
          salary_range: job.salary_min && job.salary_max ? `${job.salary_currency || '$'}${job.salary_min}-${job.salary_max}` : 'Competitive',
          posted_date: getRelativeTime(job.created_at),
          is_urgent: Math.random() > 0.8,
          is_new: Math.random() > 0.7,
          rating: (Math.random() * 2 + 3).toFixed(1)
        })) as Job[];

        setJobs(isNewSearch ? transformedJobs : (prev) => [...prev, ...transformedJobs]);
        setHasMore(count ? to < count : false);
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setIsLoading(false);
    }
  }, [filters]);

  // Get relative time
  const getRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  // Filter jobs based on selected filters
  const filteredJobsList = useMemo(() => {
    let filtered = jobs;

    if (filters.selectedCountry) {
      filtered = filtered.filter(job => job.country === filters.selectedCountry);
    }
    if (filters.selectedCity) {
      filtered = filtered.filter(job => job.location === filters.selectedCity);
    }
    if (filters.selectedCategory) {
      filtered = filtered.filter(job => job.category === filters.selectedCategory);
    }
    if (filters.selectedJobType) {
      filtered = filtered.filter(job => job.job_type === filters.selectedJobType);
    }
    if (filters.salaryMin) {
      filtered = filtered.filter(job => job.salary_min && job.salary_min >= parseInt(filters.salaryMin));
    }
    if (filters.salaryMax) {
      filtered = filtered.filter(job => job.salary_max && job.salary_max <= parseInt(filters.salaryMax));
    }

    return filtered;
  }, [jobs, filters]);

  // Load more filter options
  const loadMoreFilterOptions = (filterType: 'countries' | 'cities' | 'categories') => {
    setFilterLimits(prev => ({
      ...prev,
      [filterType]: prev[filterType] + 10
    }));
  };

  // Handle job card click
  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  // Handle WhatsApp apply
  const handleWhatsAppApply = (phoneNumber: string) => {
    if (!phoneNumber) return;
    const cleanNumber = phoneNumber.replace(/[^\d]/g, '');
    window.open(`https://wa.me/${cleanNumber}`, '_blank');
  };

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      setPage(0);
      fetchJobs(0, true);
    }, 500);

    return () => clearTimeout(timer);
  }, [filters.searchQuery, filters.selectedCountry, filters.selectedCity, filters.selectedCategory, filters.selectedJobType, filters.salaryMin, filters.salaryMax]);

  // Initial data fetch
  useEffect(() => {
    fetchFilterOptions();
    fetchAds();
    fetchJobs(0, true);
  }, []);

  // Load more jobs
  const loadMoreJobs = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchJobs(nextPage);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex-1 min-w-[300px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search jobs by title, company, or keywords..."
                  value={filters.searchQuery}
                  onChange={(e) => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <select
              value={filters.selectedCountry}
              onChange={(e) => setFilters(prev => ({ ...prev, selectedCountry: e.target.value }))}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Countries</option>
              {filters.countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>

            <select
              value={filters.selectedCategory}
              onChange={(e) => setFilters(prev => ({ ...prev, selectedCategory: e.target.value }))}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Categories</option>
              {filters.categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            <select
              value={filters.selectedJobType}
              onChange={(e) => setFilters(prev => ({ ...prev, selectedJobType: e.target.value }))}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Job Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Remote">Remote</option>
            </select>
          </div>
        </div>
      </div>

      {/* Featured Agencies Carousel */}
      {agencies.length > 0 && (
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h2 className="text-xl font-semibold mb-4">Featured Agencies</h2>
            <div className="flex overflow-x-auto space-x-6 pb-4">
              {agencies.map(agency => (
                <div key={agency.id} className="flex-shrink-0 text-center">
                  {agency.logo_url ? (
                    <img src={agency.logo_url} alt={agency.name} className="w-20 h-20 object-contain mx-auto mb-2" />
                  ) : (
                    <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Building className="w-8 h-8 text-gray-400" />
                    </div>
                  )}
                  <p className="text-sm font-medium">{agency.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Advertising Bar */}
      {ads.length > 0 && (
        <div className="bg-yellow-50 border-b border-yellow-200">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex overflow-x-auto space-x-4">
              {ads.map(ad => (
                <div key={ad.id} className="flex-shrink-0">
                  {ad.image_url ? (
                    <a href={ad.link_url || '#'} target="_blank" rel="noopener noreferrer">
                      <img src={ad.image_url} alt={ad.title || 'Advertisement'} className="h-16 object-contain" />
                    </a>
                  ) : (
                    <div className="h-16 flex items-center px-4 bg-yellow-100 rounded">
                      <span className="text-sm text-yellow-800">{ad.title || 'Advertisement'}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Left Sidebar - Filters */}
          <div className="w-1/4 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </h3>

              {/* Countries Filter */}
              <div className="mb-6">
                <button
                  onClick={() => setExpandedFilters(prev => ({ ...prev, countries: !prev.countries }))}
                  className="w-full flex items-center justify-between text-left font-medium mb-3"
                >
                  <span className="flex items-center">
                    <Globe className="w-4 h-4 mr-2" />
                    Countries
                  </span>
                  {expandedFilters.countries ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {expandedFilters.countries && (
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500">Total countries: {filters.countries.length}</p>
                    {filters.countries.map(country => (
                      <label key={country} className="flex items-center">
                        <input
                          type="radio"
                          name="country"
                          value={country}
                          checked={filters.selectedCountry === country}
                          onChange={(e) => setFilters(prev => ({ ...prev, selectedCountry: e.target.value }))}
                          className="mr-2"
                        />
                        <span className="text-sm">{country}</span>
                      </label>
                    ))}
                    {filters.countries.length > filterLimits.countries && (
                      <button
                        onClick={() => loadMoreFilterOptions('countries')}
                        className="text-blue-600 text-sm hover:underline"
                      >
                        Load More Countries...
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Cities Filter */}
              <div className="mb-6">
                <button
                  onClick={() => setExpandedFilters(prev => ({ ...prev, cities: !prev.cities }))}
                  className="w-full flex items-center justify-between text-left font-medium mb-3"
                >
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Cities
                  </span>
                  {expandedFilters.cities ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {expandedFilters.cities && (
                  <div className="space-y-2">
                    {filters.cities.map(city => (
                      <label key={city} className="flex items-center">
                        <input
                          type="radio"
                          name="city"
                          value={city}
                          checked={filters.selectedCity === city}
                          onChange={(e) => setFilters(prev => ({ ...prev, selectedCity: e.target.value }))}
                          className="mr-2"
                        />
                        <span className="text-sm">{city}</span>
                      </label>
                    ))}
                    {filters.cities.length > filterLimits.cities && (
                      <button
                        onClick={() => loadMoreFilterOptions('cities')}
                        className="text-blue-600 text-sm hover:underline"
                      >
                        Load More Cities...
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Categories Filter */}
              <div className="mb-6">
                <button
                  onClick={() => setExpandedFilters(prev => ({ ...prev, categories: !prev.categories }))}
                  className="w-full flex items-center justify-between text-left font-medium mb-3"
                >
                  <span className="flex items-center">
                    <Tag className="w-4 h-4 mr-2" />
                    Categories
                  </span>
                  {expandedFilters.categories ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {expandedFilters.categories && (
                  <div className="space-y-2">
                    {filters.categories.map(category => (
                      <label key={category} className="flex items-center">
                        <input
                          type="radio"
                          name="category"
                          value={category}
                          checked={filters.selectedCategory === category}
                          onChange={(e) => setFilters(prev => ({ ...prev, selectedCategory: e.target.value }))}
                          className="mr-2"
                        />
                        <span className="text-sm">{category}</span>
                      </label>
                    ))}
                    {filters.categories.length > filterLimits.categories && (
                      <button
                        onClick={() => loadMoreFilterOptions('categories')}
                        className="text-blue-600 text-sm hover:underline"
                      >
                        Load More Categories...
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Salary Range Filter */}
              <div className="mb-6">
                <button
                  onClick={() => setExpandedFilters(prev => ({ ...prev, salary: !prev.salary }))}
                  className="w-full flex items-center justify-between text-left font-medium mb-3"
                >
                  <span className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Salary Range
                  </span>
                  {expandedFilters.salary ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {expandedFilters.salary && (
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm text-gray-600">Min Salary</label>
                      <input
                        type="number"
                        value={filters.salaryMin}
                        onChange={(e) => setFilters(prev => ({ ...prev, salaryMin: e.target.value }))}
                        placeholder="Minimum"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Max Salary</label>
                      <input
                        type="number"
                        value={filters.salaryMax}
                        onChange={(e) => setFilters(prev => ({ ...prev, salaryMax: e.target.value }))}
                        placeholder="Maximum"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => setFilters({
                  countries: filters.countries,
                  cities: filters.cities,
                  categories: filters.categories,
                  salaryMin: '',
                  salaryMax: '',
                  searchQuery: '',
                  selectedCountry: '',
                  selectedCity: '',
                  selectedCategory: '',
                  selectedJobType: ''
                })}
                className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="w-3/4">
            {/* Notice Board Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobsList.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden"
                  onClick={() => handleJobClick(job)}
                >
                  {/* Job Image/Flyer */}
                  <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                    <Building className="w-16 h-16 text-gray-400" />
                  </div>

                  <div className="p-4">
                    {/* Job Title */}
                    <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">{job.title}</h3>

                    {/* Company and Location */}
                    <div className="flex items-center gap-2 mb-2 text-sm text-gray-600">
                      <Building className="w-4 h-4" />
                      <span>{job.company}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {job.job_type && (
                        <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full capitalize">
                          {job.job_type}
                        </span>
                      )}
                    </div>

                    {/* Salary and Time */}
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-green-600">{job.salary}</span>
                      <span className="text-gray-500">{new Date(job.created_at).toLocaleDateString()}</span>
                    </div>

                    {/* Apply Now Button */}
                    <Link
                      href={`/apply?job_id=${job.id}`}
                      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
                      className="w-full mt-3 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 text-center"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Apply Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="text-center mt-8">
                <button
                  onClick={loadMoreJobs}
                  disabled={isLoading}
                  className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Loading...' : 'Load More Jobs'}
                </button>
              </div>
            )}

            {/* No Results */}
            {filteredJobsList.length === 0 && !isLoading && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No jobs found</h3>
                <p className="text-gray-500">Try adjusting your filters or search criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Job Details Modal */}
      {showModal && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{selectedJob.title}</h1>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    <span>{selectedJob.company}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{selectedJob.location}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              {/* Job Details */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-gray-500" />
                  <span className="capitalize">{selectedJob.job_type?.replace('-', ' ')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-600" />
                  <span className="font-medium text-green-600">{selectedJob.salary}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span>Posted {new Date(selectedJob.created_at).toLocaleDateString()}</span>
                </div>
                {selectedJob.category && (
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-gray-500" />
                    <span>{selectedJob.category}</span>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="flex gap-2 mb-6">
                {selectedJob.job_type && (
                  <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full capitalize">
                    {selectedJob.job_type}
                  </span>
                )}
              </div>

              {/* Job Description */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Description</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {selectedJob.description || 'No description available for this position.'}
                  </p>
                </div>
              </div>

              {/* WhatsApp Apply Button */}
              {selectedJob.vendor_whatsapp && (
                <div className="border-t pt-6">
                  <button
                    onClick={() => {
                          if (selectedJob.vendor_whatsapp) {
                            handleWhatsAppApply(selectedJob.vendor_whatsapp);
                          }
                        }}
                    className="w-full bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2 text-lg font-medium"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Apply on WhatsApp
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
