"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { JOBS_TABLE } from "@/lib/jobs-schema";

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
  const [availableCountries, setAvailableCountries] = useState<string[]>([]);
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);
  const [countryJobCounts, setCountryJobCounts] = useState<Record<string, number>>({});
  const [categoryJobCounts, setCategoryJobCounts] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Load real data from database
  useEffect(() => {
    async function loadSidebarData() {
      setIsLoading(true);
      try {
        console.log('🔍 Loading sidebar data...');
        const { data, error } = await supabase
          .from(JOBS_TABLE)
          .select('country, category')
          .eq('status', 'active');
        
        if (error) {
          console.error('❌ Sidebar data error:', error);
          throw error;
        }
        
        const jobs = data || [];
        console.log('📊 Sidebar jobs loaded:', jobs.length);
        
        // Count jobs by country
        const countryCounts: Record<string, number> = {};
        jobs.forEach(job => {
          if (job.country) {
            countryCounts[job.country] = (countryCounts[job.country] || 0) + 1;
          }
        });
        
        // Count jobs by category
        const categoryCounts: Record<string, number> = {};
        jobs.forEach(job => {
          if (job.category) {
            categoryCounts[job.category] = (categoryCounts[job.category] || 0) + 1;
          }
        });
        
        console.log('🌍 Countries found:', Object.keys(countryCounts));
        console.log('💼 Categories found:', Object.keys(categoryCounts));
        
        // Sort by job count (descending)
        const sortedCountries = Object.entries(countryCounts)
          .sort(([,a], [,b]) => b - a)
          .map(([country]) => country);
        
        const sortedCategories = Object.entries(categoryCounts)
          .sort(([,a], [,b]) => b - a)
          .map(([category]) => category);
        
        setAvailableCountries(sortedCountries);
        setAvailableCategories(sortedCategories);
        setCountryJobCounts(countryCounts);
        setCategoryJobCounts(categoryCounts);
        
        console.log('✅ Sidebar data loaded successfully');
        
      } catch (err) {
        console.error('❌ Error loading sidebar data:', err);
      } finally {
        setIsLoading(false);
      }
    }
    loadSidebarData();
  }, []);

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
        {isLoading ? (
          <div className="flex items-center justify-center py-4">
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-300 border-t-blue-600 mr-2"></div>
            <span className="text-sm text-gray-500">Loading...</span>
          </div>
        ) : (
          <div className="flex flex-col">
            <FilterRow label="All Countries" isActive={!selectedCountry} onClick={() => onCountryChange("")} />
            {(showAllCountries ? availableCountries : availableCountries.slice(0, 4)).map((country) => (
              <FilterRow 
                key={country} 
                label={`${country} (${countryJobCounts[country] || 0})`} 
                isActive={selectedCountry === country} 
                onClick={() => onCountryChange(country)} 
              />
            ))}
            {availableCountries.length > 4 && (
              <button onClick={() => setShowAllCountries(!showAllCountries)} className="text-[12px] font-bold text-blue-600 mt-2 text-left hover:underline">
                {showAllCountries ? "Show Less" : `+ ${availableCountries.length - 4} more`}
              </button>
            )}
          </div>
        )}
      </div>

      {/* 3. CATEGORIES */}
      <div className="p-4 border-b border-gray-100">
        <SectionHeading title="Job Categories" />
        {isLoading ? (
          <div className="flex items-center justify-center py-4">
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-300 border-t-blue-600 mr-2"></div>
            <span className="text-sm text-gray-500">Loading...</span>
          </div>
        ) : (
          <div className="flex flex-col">
            <FilterRow label="All Categories" isActive={!selectedCategory} onClick={() => onCategoryChange("")} />
            {(showAllCategories ? availableCategories : availableCategories.slice(0, 4)).map((category) => (
              <FilterRow 
                key={category} 
                label={`${category} (${categoryJobCounts[category] || 0})`} 
                isActive={selectedCategory === category} 
                onClick={() => onCategoryChange(category)} 
              />
            ))}
            {availableCategories.length > 4 && (
              <button onClick={() => setShowAllCategories(!showAllCategories)} className="text-[12px] font-bold text-blue-600 mt-2 text-left hover:underline">
                {showAllCategories ? "Show Less" : `+ ${availableCategories.length - 4} more`}
              </button>
            )}
          </div>
        )}
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
