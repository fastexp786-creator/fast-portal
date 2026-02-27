"use client";
import { useState } from "react";

const COUNTRIES = ["United Arab Emirates", "Saudi Arabia", "Qatar", "Oman", "Kuwait", "Bahrain", "Pakistan", "United Kingdom", "Poland", "Canada", "Germany", "Romania", "USA", "France"];
const CATEGORIES = ["IT & Software", "Medical & Healthcare", "Construction", "Petrol Pump", "Hotel Management", "Driving", "Accounting", "Security"];
const SALARIES = ["Any Salary", "1000 - 3000", "3000 - 7000", "7000 - 10000", "10000 - 15000", "15000+"];

const TRAVEL_SERVICES = [
  { href: "https://fastjobcareer.com/visit-visa-tours/", icon: "fa-passport", label: "Visit Visa & Tours" },
  { href: "https://fastjobcareer.com/luxury-stays/", icon: "fa-hotel", label: "Luxury Hotel Bookings" },
  { href: "https://fastjobcareer.com/cruise-careers/", icon: "fa-ship", label: "Cruise Cloud" },
  { href: "https://fastjobcareer.com/air-tickets/", icon: "fa-plane", label: "Air Tickets" },
];

interface FindJobsSidebarProps {
  selectedCountry: string;
  selectedCategory: string;
  onCountryChange: (c: string) => void;
  onCategoryChange: (c: string) => void;
  onKeywordChange?: (k: string) => void;
}

type FilterRowProps = { label: string; isActive: boolean; onClick: () => void };
function FilterRow({ label, isActive, onClick }: FilterRowProps) {
  return (
    <div onClick={onClick} className="flex items-center gap-3 py-1.5 cursor-pointer group select-none">
      <div
        className={`w-5 h-5 border rounded flex items-center justify-center transition-all ${
          isActive ? "bg-blue-600 border-blue-600" : "border-gray-400 bg-white group-hover:border-blue-600"
        }`}
      >
        {isActive && <i className="fas fa-check text-white text-[10px]"></i>}
      </div>
      <span className={`text-[13.5px] transition-colors ${isActive ? "text-blue-700 font-bold" : "text-gray-700 group-hover:text-blue-600"}`}>
        {label}
      </span>
    </div>
  );
}

function SectionHeading({ title }: { title: string }) {
  return <h4 className="font-bold text-gray-900 mb-3 text-[14px]">{title}</h4>;
}

export default function FindJobsSidebar({
  selectedCountry,
  selectedCategory,
  onCountryChange,
  onCategoryChange,
  onKeywordChange,
}: FindJobsSidebarProps) {
  const [showAllCountries, setShowAllCountries] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllSalaries, setShowAllSalaries] = useState(false);
  const [selectedSalary, setSelectedSalary] = useState("Any Salary");
  const [localKeyword, setLocalKeyword] = useState("");

  return (
    <aside className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden select-none w-full max-w-[280px]">
      
      {/* 1. SEARCH TITLE */}
      <div className="p-4 border-b border-gray-100 bg-gray-50/30">
        <SectionHeading title="Search Title" />
        <input 
          type="text" 
          placeholder="e.g. Accountant"
          className="w-full px-3 py-2 bg-white border border-gray-300 rounded focus:border-blue-600 outline-none text-[13px] transition-all"
          value={localKeyword}
          onChange={(e) => {
            setLocalKeyword(e.target.value);
            onKeywordChange?.(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") onKeywordChange?.(localKeyword);
          }}
        />
      </div>

      {/* 2. COUNTRIES */}
      <div className="p-4 border-b border-gray-100">
        <SectionHeading title="Popular Countries" />
        <div className="flex flex-col">
          <FilterRow label="All Countries" isActive={!selectedCountry} onClick={() => onCountryChange("")} />
          {(showAllCountries ? COUNTRIES : COUNTRIES.slice(0, 4)).map((c) => (
            <FilterRow key={c} label={c} isActive={selectedCountry === c} onClick={() => onCountryChange(c)} />
          ))}
          <button onClick={() => setShowAllCountries(!showAllCountries)} className="text-[12px] font-bold text-blue-600 mt-2 text-left hover:underline">
            {showAllCountries ? "Show Less" : `+ ${COUNTRIES.length - 4} more`}
          </button>
        </div>
      </div>

      {/* 3. CATEGORIES */}
      <div className="p-4 border-b border-gray-100">
        <SectionHeading title="Job Categories" />
        <div className="flex flex-col">
          <FilterRow label="All Categories" isActive={!selectedCategory} onClick={() => onCategoryChange("")} />
          {(showAllCategories ? CATEGORIES : CATEGORIES.slice(0, 4)).map((cat) => (
            <FilterRow key={cat} label={cat} isActive={selectedCategory === cat} onClick={() => onCategoryChange(cat)} />
          ))}
          <button onClick={() => setShowAllCategories(!showAllCategories)} className="text-[12px] font-bold text-blue-600 mt-2 text-left hover:underline">
            {showAllCategories ? "Show Less" : `+ ${CATEGORIES.length - 4} more`}
          </button>
        </div>
      </div>

      {/* 4. SALARY RANGE */}
      <div className="p-4 border-b border-gray-100">
        <SectionHeading title="Monthly Salary (SR)" />
        <div className="flex flex-col">
          {(showAllSalaries ? SALARIES : SALARIES.slice(0, 4)).map((s) => (
            <FilterRow key={s} label={s} isActive={selectedSalary === s} onClick={() => setSelectedSalary(s)} />
          ))}
          <button onClick={() => setShowAllSalaries(!showAllSalaries)} className="text-[12px] font-bold text-blue-600 mt-2 text-left hover:underline">
            {showAllSalaries ? "Show Less" : "+ Show More"}
          </button>
        </div>
      </div>

      {/* 5. TRAVEL SERVICES (Single Line Layout) */}
      <div className="p-4 bg-gray-50/50">
        <SectionHeading title="Travel Services" />
        <div className="flex flex-col gap-2.5 mt-2">
          {TRAVEL_SERVICES.map((s) => (
            <a key={s.label} href={s.href} target="_blank" className="flex items-center gap-3 group">
              <span className="w-8 h-8 flex items-center justify-center bg-white border border-gray-200 rounded-md group-hover:border-blue-600 transition-all shadow-sm">
                <i className={`fas ${s.icon} text-blue-800 text-[12px]`} />
              </span>
              <span className="text-gray-700 group-hover:text-blue-700 text-[12px] font-semibold transition-colors">{s.label}</span>
            </a>
          ))}
        </div>
      </div>

    </aside>
  );
}
