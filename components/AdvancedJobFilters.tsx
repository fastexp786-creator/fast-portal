"use client";

import { useState, useEffect } from "react";
import { Search, Filter, MapPin, DollarSign, Briefcase, Clock, X, ChevronDown } from "lucide-react";

interface FilterState {
  search: string;
  location: string;
  city: string;
  country: string;
  salaryMin: string;
  salaryMax: string;
  jobType: string;
  experience: string;
  urgency: string;
  sortBy: string;
}

interface AdvancedJobFiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  onReset: () => void;
  locations: string[];
  cities: string[];
  countries: string[];
}

export default function AdvancedJobFilters({ 
  filters, 
  onFiltersChange, 
  onReset, 
  locations, 
  cities, 
  countries 
}: AdvancedJobFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showJobTypeDropdown, setShowJobTypeDropdown] = useState(false);
  const [showExperienceDropdown, setShowExperienceDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const handleLocationSelect = (location: string) => {
    const [city, country] = location.split(', ');
    handleFilterChange('city', city);
    handleFilterChange('country', country);
    handleFilterChange('location', location);
    setShowLocationDropdown(false);
  };

  const clearFilter = (key: keyof FilterState) => {
    handleFilterChange(key, '');
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== '');

  const jobTypes = [
    { value: 'full-time', label: 'Full-time' },
    { value: 'part-time', label: 'Part-time' },
    { value: 'contract', label: 'Contract' },
    { value: 'remote', label: 'Remote' }
  ];

  const experienceLevels = [
    { value: 'entry', label: 'Entry Level' },
    { value: 'mid', label: 'Mid Level' },
    { value: 'senior', label: 'Senior Level' }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'salary-high', label: 'Salary: High to Low' },
    { value: 'salary-low', label: 'Salary: Low to High' },
    { value: 'relevance', label: 'Most Relevant' }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 mb-6">
      {/* Main Search Bar */}
      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search jobs, companies, or keywords..."
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {filters.search && (
            <button
              onClick={() => clearFilter('search')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Location Filter */}
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <button
            onClick={() => setShowLocationDropdown(!showLocationDropdown)}
            className="w-full lg:w-auto px-10 py-3 border border-gray-300 rounded-lg text-left hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent flex items-center justify-between"
          >
            <span className={filters.location ? 'text-gray-900' : 'text-gray-500'}>
              {filters.location || 'Location'}
            </span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
          {filters.location && (
            <button
              onClick={() => clearFilter('location')}
              className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          {showLocationDropdown && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
              <div className="p-2">
                <input
                  type="text"
                  placeholder="Search location..."
                  className="w-full px-3 py-2 border border-gray-200 rounded text-sm"
                  onChange={(e) => {
                    const value = e.target.value.toLowerCase();
                    // Filter locations logic here
                  }}
                />
              </div>
              <div className="max-h-48 overflow-y-auto">
                {locations.map((location, index) => (
                  <button
                    key={index}
                    onClick={() => handleLocationSelect(location)}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 text-sm"
                  >
                    {location}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Expand/Collapse Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center gap-2"
        >
          <Filter className="w-4 h-4" />
          {isExpanded ? 'Less Filters' : 'More Filters'}
          {hasActiveFilters && (
            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
              {Object.values(filters).filter(value => value !== '').length}
            </span>
          )}
        </button>
      </div>

      {/* Expanded Filters */}
      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
          {/* Salary Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <DollarSign className="inline w-4 h-4 mr-1" />
              Salary Range
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Min"
                value={filters.salaryMin}
                onChange={(e) => handleFilterChange('salaryMin', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Max"
                value={filters.salaryMax}
                onChange={(e) => handleFilterChange('salaryMax', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Job Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Briefcase className="inline w-4 h-4 mr-1" />
              Job Type
            </label>
            <div className="relative">
              <button
                onClick={() => setShowJobTypeDropdown(!showJobTypeDropdown)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-left hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent flex items-center justify-between"
              >
                <span className={filters.jobType ? 'text-gray-900' : 'text-gray-500'}>
                  {jobTypes.find(type => type.value === filters.jobType)?.label || 'Select Type'}
                </span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
              {filters.jobType && (
                <button
                  onClick={() => clearFilter('jobType')}
                  className="absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}

              {showJobTypeDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {jobTypes.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => {
                        handleFilterChange('jobType', type.value);
                        setShowJobTypeDropdown(false);
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-gray-50 text-sm"
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Experience Level */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Clock className="inline w-4 h-4 mr-1" />
              Experience Level
            </label>
            <div className="relative">
              <button
                onClick={() => setShowExperienceDropdown(!showExperienceDropdown)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-left hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent flex items-center justify-between"
              >
                <span className={filters.experience ? 'text-gray-900' : 'text-gray-500'}>
                  {experienceLevels.find(level => level.value === filters.experience)?.label || 'Select Level'}
                </span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
              {filters.experience && (
                <button
                  onClick={() => clearFilter('experience')}
                  className="absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}

              {showExperienceDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {experienceLevels.map((level) => (
                    <button
                      key={level.value}
                      onClick={() => {
                        handleFilterChange('experience', level.value);
                        setShowExperienceDropdown(false);
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-gray-50 text-sm"
                    >
                      {level.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sort By */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sort By
            </label>
            <div className="relative">
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-left hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent flex items-center justify-between"
              >
                <span className="text-gray-900">
                  {sortOptions.find(option => option.value === filters.sortBy)?.label || 'Sort By'}
                </span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>

              {showSortDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        handleFilterChange('sortBy', option.value);
                        setShowSortDropdown(false);
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-gray-50 text-sm"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Active Filters & Reset */}
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-gray-200">
          <span className="text-sm text-gray-600">Active filters:</span>
          {filters.search && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              Search: {filters.search}
              <button onClick={() => clearFilter('search')} className="ml-2 hover:text-blue-600">
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          {filters.location && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              Location: {filters.location}
              <button onClick={() => clearFilter('location')} className="ml-2 hover:text-blue-600">
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          {filters.jobType && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              Type: {jobTypes.find(type => type.value === filters.jobType)?.label}
              <button onClick={() => clearFilter('jobType')} className="ml-2 hover:text-blue-600">
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          {filters.experience && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              Level: {experienceLevels.find(level => level.value === filters.experience)?.label}
              <button onClick={() => clearFilter('experience')} className="ml-2 hover:text-blue-600">
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          
          <button
            onClick={onReset}
            className="text-sm text-red-600 hover:text-red-800 font-medium"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
