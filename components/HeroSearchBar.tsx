"use client";

import { useState } from "react";

interface HeroSearchBarProps {
  onSearch: (keyword: string, country: string) => void;
}

export default function HeroSearchBar({ onSearch }: HeroSearchBarProps) {
  const [keyword, setKeyword] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");
  const [manualCountry, setManualCountry] = useState("");
  const [showManualInput, setShowManualInput] = useState(false);

  const handleCountryChange = (val: string) => {
    setDropdownValue(val);
    setShowManualInput(val === "OTHER");
  };

  const handleSearch = () => {
    const country = dropdownValue === "OTHER" ? manualCountry : dropdownValue;
    onSearch(keyword, country);
    document.getElementById("jobs")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="search-panel"
      style={{
        display: "flex",
        alignItems: "center",
        background: "#fff",
        borderRadius: "8px",
        padding: "5px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        maxWidth: "950px",
        margin: "20px auto",
        border: "1px solid #ddd",
      }}
    >
      <div style={{ flex: 1, padding: "0 15px" }}>
        <input
          type="text"
          placeholder="Job title, keywords, or company"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          style={{ border: "none", outline: "none", width: "100%", padding: "12px 5px", fontSize: "15px", background: "transparent" }}
        />
      </div>
      <div className="v-line" style={{ width: "1px", height: "30px", background: "#eee" }} />
      <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "0 15px", position: "relative" }}>
        <select
          value={dropdownValue}
          onChange={(e) => handleCountryChange(e.target.value)}
          style={{
            display: showManualInput ? "none" : "block",
            border: "none", outline: "none", width: "100%", padding: "12px 5px",
            fontSize: "15px", background: "transparent", cursor: "pointer", color: "#555",
          }}
        >
          <option value="">Select Location</option>
          <optgroup label="Gulf / GCC Countries">
            <option value="United Arab Emirates">United Arab Emirates (UAE)</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Qatar">Qatar</option>
            <option value="Oman">Oman</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Bahrain">Bahrain</option>
          </optgroup>
          <optgroup label="Other Destinations">
            <option value="Pakistan">Pakistan</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Poland">Poland</option>
            <option value="Canada">Canada</option>
            <option value="Germany">Germany</option>
            <option value="Romania">Romania</option>
          </optgroup>
          <option value="OTHER">--- Other (Type Manually) ---</option>
        </select>
        <input
          type="text"
          placeholder="Enter country name..."
          style={{
            display: showManualInput ? "block" : "none",
            border: "1px solid #2557a7", outline: "none", borderRadius: "4px", padding: "8px",
            fontSize: "14px", width: "100%", position: "absolute", left: "15px", background: "white", zIndex: 10,
          }}
          value={manualCountry}
          onChange={(e) => setManualCountry(e.target.value)}
        />
      </div>
      <button
        onClick={handleSearch}
        style={{
          background: "#2557a7", color: "white", border: "none", padding: "12px 30px",
          borderRadius: "6px", fontWeight: "bold", cursor: "pointer", fontSize: "15px", marginLeft: "10px",
        }}
      >
        Find Jobs
      </button>
    </div>
  );
}
