"use client";

import { useState } from "react";
import type { SearchFilters } from "./SearchBar";

interface FindJobsSearchBarProps {
  onSearch: (filters: SearchFilters) => void;
  initialKeyword?: string;
  initialCountry?: string;
  initialCategory?: string;
}

const COUNTRIES = [
  { group: "Gulf / GCC", options: ["United Arab Emirates", "Saudi Arabia", "Qatar", "Oman", "Kuwait", "Bahrain"] },
  { group: "Other", options: ["Pakistan", "United Kingdom", "Poland", "Canada", "Germany", "Romania"] },
];

const CATEGORIES = ["All", "USA Jobs", "UK Jobs", "Gulf Jobs", "India Jobs", "Pakistan Jobs", "Malaysia Jobs"];

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
            {COUNTRIES.map((g) => (
              <optgroup key={g.group} label={g.group}>
                {g.options.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </optgroup>
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
            {CATEGORIES.map((c) => (
              <option key={c} value={c === "All" ? "" : c}>{c}</option>
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
        <div className="search-field">
          <i className="fas fa-city" />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={{ width: "100%" }}
          />
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
