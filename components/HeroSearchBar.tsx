"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { JOBS_TABLE } from "@/lib/jobs-schema";

interface HeroSearchBarProps {
  onSearch: (keyword: string, country: string) => void;
}

export default function HeroSearchBar({ onSearch }: HeroSearchBarProps) {
  const [keyword, setKeyword] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");
  const [manualCountry, setManualCountry] = useState("");
  const [showManualInput, setShowManualInput] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [userLocation, setUserLocation] = useState<string>("");
  const [availableJobs, setAvailableJobs] = useState<any[]>([]);
  
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load real job data for auto-complete
  useEffect(() => {
    async function loadJobData() {
      try {
        const { data, error } = await supabase
          .from(JOBS_TABLE)
          .select('title, company, category, country, location')
          .eq('status', 'active')
          .limit(100);
        
        if (error) throw error;
        setAvailableJobs(data || []);
      } catch (err) {
        console.error('Error loading job data:', err);
      }
    }
    loadJobData();
  }, []);

  // Auto-complete with real data
  useEffect(() => {
    if (keyword.length > 0 && availableJobs.length > 0) {
      const searchLower = keyword.toLowerCase();
      const matchedJobs = availableJobs
        .filter(job => 
          job.title?.toLowerCase().includes(searchLower) ||
          job.company?.toLowerCase().includes(searchLower) ||
          job.category?.toLowerCase().includes(searchLower)
        )
        .slice(0, 5)
        .map(job => job.title || 'Unknown Position');
      
      setFilteredSuggestions(matchedJobs);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [keyword, availableJobs]);

  // Get unique countries from real data
  useEffect(() => {
    if (availableJobs.length > 0) {
      const uniqueCountries = [...new Set(availableJobs.map(job => job.country).filter(Boolean))];
      if (uniqueCountries.length > 0 && !userLocation) {
        setUserLocation(uniqueCountries[0] || 'Pakistan');
      }
    }
  }, [availableJobs, userLocation]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCountryChange = (val: string) => {
    setDropdownValue(val);
    setShowManualInput(val === "OTHER");
  };

  const handleSuggestionClick = (suggestion: string) => {
    setKeyword(suggestion);
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  const clearSearch = () => {
    setKeyword("");
    setDropdownValue("");
    setManualCountry("");
    inputRef.current?.focus();
  };

  const handleSearch = () => {
    const country = dropdownValue === "OTHER" ? manualCountry : dropdownValue || userLocation;
    onSearch(keyword, country);
    setShowSuggestions(false);
    document.getElementById("jobs")?.scrollIntoView({ behavior: "smooth" });
  };

  // Get unique countries for dropdown
  const getUniqueCountries = () => {
    const countries = [...new Set(availableJobs.map(job => job.country).filter(Boolean))];
    return countries.sort();
  };

  return (
    <div className="relative" ref={searchRef}>
      {/* Main Search Bar */}
      <div
        className="search-panel backdrop-blur-md bg-white/90 border border-white/20 shadow-2xl"
        style={{
          display: "flex",
          alignItems: "center",
          borderRadius: "16px",
          padding: "8px",
          maxWidth: "1000px",
          margin: "30px auto",
          border: "1px solid rgba(255,255,255,0.3)",
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)"
        }}
      >
        {/* Search Input */}
        <div style={{ flex: 2, padding: "0 20px", position: "relative" }}>
          <div className="flex items-center gap-3">
            <i className="fas fa-search text-gray-400 text-lg"></i>
            <input
              ref={inputRef}
              type="text"
              placeholder="Job title, keywords, or company..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
                if (e.key === "Escape") {
                  setShowSuggestions(false);
                }
              }}
              style={{ 
                border: "none", 
                outline: "none", 
                width: "100%", 
                padding: "14px 0", 
                fontSize: "16px", 
                background: "transparent",
                fontWeight: "500"
              }}
            />
            {keyword && (
              <button
                onClick={clearSearch}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="w-px h-8 bg-gray-200 mx-2" />

        {/* Location Input */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "0 20px", position: "relative" }}>
          <div className="flex items-center gap-3 w-full">
            <i className="fas fa-map-marker-alt text-gray-400 text-lg"></i>
            <select
              value={dropdownValue}
              onChange={(e) => handleCountryChange(e.target.value)}
              style={{
                display: showManualInput ? "none" : "block",
                border: "none", 
                outline: "none", 
                width: "100%", 
                padding: "14px 0",
                fontSize: "16px", 
                background: "transparent", 
                cursor: "pointer", 
                color: dropdownValue ? "#333" : "#999",
                fontWeight: "500"
              }}
            >
              <option value="">{userLocation || "Select Location"}</option>
              {getUniqueCountries().map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
              <option value="OTHER">--- Other ---</option>
            </select>
            <input
              type="text"
              placeholder="Enter country name..."
              style={{
                display: showManualInput ? "block" : "none",
                border: "1px solid #2563eb", 
                outline: "none", 
                borderRadius: "8px", 
                padding: "10px 12px",
                fontSize: "14px", 
                width: "100%", 
                position: "absolute", 
                left: "20px", 
                background: "white", 
                zIndex: 10,
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
              }}
              value={manualCountry}
              onChange={(e) => setManualCountry(e.target.value)}
            />
          </div>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-base hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center gap-2 mr-4"
          style={{
            marginLeft: "10px",
            boxShadow: "0 4px 12px rgba(37, 99, 235, 0.3)"
          }}
        >
          <i className="fas fa-search"></i>
          Find Jobs
        </button>
      </div>

      {/* Auto-complete Dropdown */}
      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div className="p-2">
            {filteredSuggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors flex items-center gap-3 rounded-lg"
              >
                <i className="fas fa-briefcase text-gray-400 text-sm"></i>
                <span className="text-gray-700">{suggestion}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
