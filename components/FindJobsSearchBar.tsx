"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { JOBS_TABLE } from "@/lib/jobs-schema";
import type { SearchFilters } from "./SearchBar";

interface FindJobsSearchBarProps {
  onSearch: (filters: SearchFilters) => void;
  initialKeyword?: string;
  initialCountry?: string;
  initialCategory?: string;
}

export default function FindJobsSearchBar({
  onSearch,
  initialKeyword = "",
  initialCountry = "",
  initialCategory = "",
}: FindJobsSearchBarProps) {
  const [keyword, setKeyword] = useState(initialKeyword);
  const [country, setCountry] = useState(initialCountry);
  const [manualCountry, setManualCountry] = useState("");
  const [showManualCountry, setShowManualCountry] = useState(false);
  const [category, setCategory] = useState(initialCategory);
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [availableCountries, setAvailableCountries] = useState<string[]>([]);
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);
  const [availableCities, setAvailableCities] = useState<string[]>([]);
  const [showCitySuggestions, setShowCitySuggestions] = useState(false);
  const [filteredCities, setFilteredCities] = useState<string[]>([]);

  // Load real data for dropdowns
  useEffect(() => {
    async function loadFilterData() {
      try {
        const { data, error } = await supabase
          .from(JOBS_TABLE)
          .select('country, category, location')
          .eq('status', 'active');
        
        if (error) throw error;
        
        const jobs = data || [];
        const uniqueCountries = [...new Set(jobs.map(job => job.country).filter(Boolean))].sort();
        const uniqueCategories = [...new Set(jobs.map(job => job.category).filter(Boolean))].sort();
        const uniqueCities = [...new Set(jobs.map(job => job.location).filter(Boolean))].sort();
        
        setAvailableCountries(uniqueCountries);
        setAvailableCategories(uniqueCategories);
        setAvailableCities(uniqueCities);
      } catch (err) {
        console.error('Error loading filter data:', err);
      }
    }
    loadFilterData();
  }, []);

  // City auto-complete
  useEffect(() => {
    if (city.length > 0 && availableCities.length > 0) {
      const filtered = availableCities.filter(cityName => 
        cityName.toLowerCase().includes(city.toLowerCase())
      ).slice(0, 5);
      setFilteredCities(filtered);
      setShowCitySuggestions(true);
    } else {
      setShowCitySuggestions(false);
    }
  }, [city, availableCities]);

  const handleCityChange = (value: string) => {
    setCity(value);
  };

  const handleCitySelect = (selectedCity: string) => {
    setCity(selectedCity);
    setShowCitySuggestions(false);
  };

  const handleSearch = () => {
    const countryVal = country === "OTHER" ? manualCountry : country;
    const filters: SearchFilters = {
      keyword,
      country: countryVal,
      category,
      province,
      city,
      area,
    };
    onSearch(filters);
  };
  return (
    <div className="find-jobs-search-card">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 16,
          alignItems: "end",
        }}
      >
        <div className="search-field" style={{ gridColumn: "1 / -1" }}>
          <i className="fas fa-search" />
          <input
            type="text"
            placeholder="Job title, keywords, or company"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            style={{ width: "100%" }}
          />
        </div>
        <div className="search-field" style={{ position: "relative" }}>
          {!showManualCountry && <i className="fas fa-map-marker-alt" />}
          <select
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
              setShowManualCountry(e.target.value === "OTHER");
            }}
            style={{ width: "100%", display: showManualCountry ? "none" : "block" }}
          >
            <option value="">Select Location</option>
            {availableCountries.map((countryName) => (
              <option key={countryName} value={countryName}>{countryName}</option>
            ))}
            <option value="OTHER">--- Other ---</option>
          </select>
          {showManualCountry && (
            <>
              <i className="fas fa-map-marker-alt" />
              <input
                type="text"
                placeholder="Enter country"
                value={manualCountry}
                onChange={(e) => setManualCountry(e.target.value)}
                style={{ width: "100%" }}
              />
            </>
          )}
        </div>
        <div className="search-field">
          <i className="fas fa-briefcase" />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ width: "100%", cursor: "pointer" }}
          >
            <option value="">All Categories</option>
            {availableCategories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="search-field">
          <i className="fas fa-location-dot" />
          <input
            type="text"
            placeholder="Province / State"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>
        <div className="search-field" style={{ position: "relative" }}>
          <i className="fas fa-city" />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => handleCityChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
              if (e.key === "Escape") setShowCitySuggestions(false);
            }}
            style={{ width: "100%" }}
          />
          {showCitySuggestions && filteredCities.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-40 overflow-y-auto">
              {filteredCities.map((cityName, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleCitySelect(cityName)}
                  className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 transition-colors flex items-center gap-2"
                >
                  <i className="fas fa-map-marker-alt text-gray-400 text-xs"></i>
                  <span className="text-gray-700">{cityName}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="search-field">
          <i className="fas fa-street-view" />
          <input
            type="text"
            placeholder="Area / Zone"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>

        <button type="button" onClick={handleSearch} className="btn-search-luxury">
          <i className="fas fa-search" style={{ marginRight: 8 }} />
          Find Jobs
        </button>
      </div>
    </div>
  );
}
