"use client";

import { useState } from "react";

export interface SearchFilters {
  keyword: string;
  country: string;
  category: string;
  province?: string;
  city?: string;
  area?: string;
}

interface SearchBarProps {
  onSearch: (filters: SearchFilters) => void;
  compact?: boolean;
  initialKeyword?: string;
  initialCountry?: string;
  initialCategory?: string;
}

const COUNTRIES = [
  { group: "Gulf / GCC", options: ["United Arab Emirates", "Saudi Arabia", "Qatar", "Oman", "Kuwait", "Bahrain"] },
  { group: "Other", options: ["Pakistan", "United Kingdom", "Poland", "Canada", "Germany", "Romania"] },
];

const CATEGORIES = ["All", "USA Jobs", "UK Jobs", "Gulf Jobs", "India Jobs", "Pakistan Jobs", "Malaysia Jobs"];

export default function SearchBar({ onSearch, compact, initialKeyword = "", initialCountry = "", initialCategory = "" }: SearchBarProps) {
  const [keyword, setKeyword] = useState(initialKeyword);
  const [country, setCountry] = useState(initialCountry);
  const [manualCountry, setManualCountry] = useState("");
  const [showManualCountry, setShowManualCountry] = useState(false);
  const [category, setCategory] = useState(initialCategory);

  const handleSearch = () => {
    const countryVal = country === "OTHER" ? manualCountry : country;
    onSearch({ keyword, country: countryVal, category });
  };

  return (
    <div
      className="search-panel"
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        background: "#fff",
        borderRadius: "8px",
        padding: compact ? "10px" : "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        border: "1px solid #ddd",
      }}
    >
      <div style={{ flex: "1 1 180px", minWidth: "120px", padding: "0 8px" }}>
        <input
          type="text"
          placeholder="Job title, keywords, or company"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          style={{ border: "none", outline: "none", width: "100%", padding: "10px 5px", fontSize: "14px", background: "transparent" }}
        />
      </div>
      <div style={{ flex: "1 1 140px", minWidth: "120px", padding: "0 8px", position: "relative" }}>
        <select
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
            setShowManualCountry(e.target.value === "OTHER");
          }}
          style={{ border: "none", outline: "none", width: "100%", padding: "10px 5px", fontSize: "14px", background: "transparent", cursor: "pointer", display: showManualCountry ? "none" : "block" }}
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
          <input
            type="text"
            placeholder="Enter country"
            value={manualCountry}
            onChange={(e) => setManualCountry(e.target.value)}
            style={{ position: "absolute", left: 8, right: 8, top: 0, border: "1px solid #2557a7", borderRadius: 4, padding: 8, fontSize: 14 }}
          />
        )}
      </div>
      {!compact && (
        <div style={{ flex: "1 1 120px", minWidth: "100px", padding: "0 8px" }}>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ border: "none", outline: "none", width: "100%", padding: "10px 5px", fontSize: "14px", background: "transparent", cursor: "pointer" }}
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c === "All" ? "" : c}>{c}</option>
            ))}
          </select>
        </div>
      )}
      <button
        onClick={handleSearch}
        style={{
          background: "#2557a7",
          color: "white",
          border: "none",
          padding: "12px 24px",
          borderRadius: "6px",
          fontWeight: "bold",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        Find Jobs
      </button>
    </div>
  );
}
