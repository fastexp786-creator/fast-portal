import { Metadata } from "next";
import Link from "next/link";
import { supabase } from '@/lib/supabase';
import JobPostingSchema from '@/components/JobPostingSchema';

export const metadata: Metadata = {
  title: "Jobs by Country | Fast Job Career",
  description: "Explore international job opportunities by country. Find jobs in Saudi Arabia, UAE, Qatar, Kuwait, Oman, Bahrain, and more countries worldwide.",
  keywords: "jobs by country, international jobs, Saudi Arabia jobs, UAE jobs, Qatar jobs, Kuwait jobs, Oman jobs, Bahrain jobs",
};

interface Job {
  id: string;
  title: string;
  company: string;
  Type: string;
  category: string;
  country: string;
  location: string;
  apply_url: string;
  salary: string;
  Expiry_date: string;
  description: string;
  Vendor_contact: string;
  status: string;
}

interface CountryStats {
  name: string;
  flag: string;
  jobCount: number;
  popularCities: string[];
  popularIndustries: string[];
  avgSalary: string;
  visaInfo: string;
  costOfLiving: string;
}

export default async function JobsByCountryPage() {
  // Fetch real-time stats from Supabase
  const { data: jobsData, error } = await supabase
    .from('jobs')
    .select('*')
    .eq('status', 'active');

  if (error) {
    console.error('Error fetching jobs:', error);
    return <div>Error loading jobs</div>;
  }

  // Calculate statistics by country
  const countryStats: Record<string, CountryStats> = {};
  
  jobsData?.forEach(job => {
    const country = job.country || 'Unknown';
    if (!countryStats[country]) {
      countryStats[country] = {
        name: country,
        flag: getCountryFlag(country),
        jobCount: 0,
        popularCities: [],
        popularIndustries: [],
        avgSalary: 'PKR 50,000 - 200,000',
        visaInfo: getVisaInfo(country),
        costOfLiving: getCostOfLiving(country)
      };
    }
    countryStats[country].jobCount++;
    
    // Add popular cities
    if (job.location && !countryStats[country].popularCities.includes(job.location)) {
      countryStats[country].popularCities.push(job.location);
    }
    
    // Add popular industries
    if (job.category && !countryStats[country].popularIndustries.includes(job.category)) {
      countryStats[country].popularIndustries.push(job.category);
    }
  });

  // Get unique countries with jobs
  const countries = Object.keys(countryStats)
    .map(country => ({
      ...countryStats[country],
      popularCities: getPopularCities(country),
      popularIndustries: getPopularIndustries(country)
    }))
    .sort((a, b) => parseInt(b.jobCount.toString()) - parseInt(a.jobCount.toString()));

  return (
    <>
      <JobPostingSchema job={{
        id: 'jobs-by-country',
        title: 'Jobs by Country - Fast Job Career',
        company: 'Fast Job Career',
        location: 'Multiple Countries',
        country: 'International',
        category: 'Job Search',
        description: 'Find jobs by country with real data from Supabase database',
        salary: '50000-200000',
        Type: 'FULL_TIME'
      }} />
      <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Jobs by Country
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Supabase se data kar raha hai - mulkaton ke mutabiq job search karein
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Global job opportunities ki duniya mein explore karein. Har country mein unique industries, salary ranges, aur work cultures available hain. 
            Saudi Arabia, UAE, Qatar, Kuwait, Oman, Bahrain jaise Gulf countries mein oil & gas, construction, aur healthcare sectors booming hain. 
            UK, USA, Canada, Australia mein technology, finance, aur healthcare jobs ki demand zyada hai. 
            Hum aapko real-time data dete hain jo Supabase database se directly fetch hota hai, ensuring ki aapko latest job listings milte rahein.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Country ke mutabiq job search karein
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search Jobs
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Job title, skills, ya company se search karein..."
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                        🔍
                      </button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Select Country</option>
                    {countries.map(country => (
                      <option key={country.name} value={country.name}>
                        {country.flag} {country.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-bold text-blue-900 mb-2">Global Job Insights</h3>
                <p className="text-blue-800 mb-3">
                  International job market mein trends aur opportunities explore karein. 
                  Gulf countries mein tax-free benefits, Western countries mein career growth opportunities available hain.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">📈</span>
                    <span className="text-sm text-blue-800">
                      <strong>Growth Sectors:</strong> Technology, Healthcare, Engineering
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600">💰</span>
                    <span className="text-sm text-blue-800">
                      <strong>Salary Range:</strong> PKR 50K - 500K monthly
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-600">🌍</span>
                    <span className="text-sm text-blue-800">
                      <strong>Top Countries:</strong> UAE, Saudi, UK, USA
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-blue-50 rounded-xl p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{countries.length}+</div>
              <p className="text-blue-800 text-sm">Countries Served</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{jobsData?.length || 0}+</div>
              <p className="text-blue-800 text-sm">Active Jobs</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {new Set(jobsData?.map(job => job.location)).size}+
              </div>
              <p className="text-blue-800 text-sm">Cities</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {new Set(jobsData?.map(job => job.category)).size}+
              </div>
              <p className="text-blue-800 text-sm">Categories</p>
            </div>
          </div>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {countries.map((country, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{country.flag}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{country.name}</h3>
                    <p className="text-blue-600 font-semibold">{country.jobCount} Jobs Available</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">💼</span>
                  <span className="text-sm text-gray-700">
                    <strong>Popular Industries:</strong> {country.popularIndustries.slice(0, 3).join(', ')}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">🏙</span>
                  <span className="text-sm text-gray-700">
                    <strong>Top Cities:</strong> {country.popularCities.slice(0, 3).join(', ')}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-600">💰</span>
                  <span className="text-sm text-gray-700">
                    <strong>Average Salary:</strong> {country.avgSalary}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">🛂</span>
                  <span className="text-sm text-gray-700">
                    <strong>Visa Info:</strong> {country.visaInfo}
                  </span>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                  Country me jobs search karein
                </button>
                <button className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                  Visa Guide
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trending Searches */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            International Job Search Trends
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Software Engineer Dubai", "Nurse Riyadh", "Accountant London", "Marketing Manager New York",
              "Data Scientist Toronto", "Project Manager Singapore", "HR Manager Sydney", "Business Analyst Berlin",
              "DevOps Engineer Amsterdam", "UX Designer San Francisco", "Product Manager Tokyo", "Full Stack Developer Mumbai"
            ].map((search, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors cursor-pointer">
                <span className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  🔍 {search}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Global job market mein trending roles aur industries explore karein. 
              Technology sector mein remote opportunities zyada, healthcare mein skilled workers ki demand high.
            </p>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Global Career Resources & Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Resume Templates</h3>
              <p className="text-gray-600 text-sm mb-3">
                Country-specific professional resume templates jo international standards follow karte hain. 
                ATS-friendly formats jo global job applications ke liye optimized hain.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                Download Templates
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛂</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Visa Requirements</h3>
              <p className="text-gray-600 text-sm mb-3">
                Country-by-country visa information aur requirements. Work permit process timelines aur documentation.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                Check Requirements
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">�</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Salary Calculator</h3>
              <p className="text-gray-600 text-sm mb-3">
                International salary comparison tool. Cost of living adjust aur tax implications ke saath accurate calculations.
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                Calculate Now
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Culture Guide</h3>
              <p className="text-gray-600 text-sm mb-3">
                Workplace culture insights aur business etiquette for different countries. Professional communication styles.
              </p>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                View Guides
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Interview Prep</h3>
              <p className="text-gray-600 text-sm mb-3">
                Country-specific interview questions aur preparation tips. Technical assessments aur behavioral interviews.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                Start Prep
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Networking</h3>
              <p className="text-gray-600 text-sm mb-3">
                Professional networking platforms aur communities. Industry connections aur mentorship opportunities.
              </p>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                Join Network
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

// Helper functions
function getCountryFlag(country: string): string {
  const flags: Record<string, string> = {
    'Saudi Arabia': '🇸🇦',
    'United Arab Emirates': '🇦🇪',
    'Qatar': '🇶🇦',
    'Kuwait': '🇰🇼',
    'Oman': '🇴🇲',
    'Bahrain': '🇧🇭',
    'United Kingdom': '🇬🇧',
    'United States': '🇺🇸',
    'Canada': '🇨🇦',
    'Australia': '🇦🇺'
  };
  
  return flags[country] || '🌍';
}

function getPopularCities(country: string): string[] {
  const cities: Record<string, string[]> = {
    'Saudi Arabia': ['Riyadh', 'Jeddah', 'Dammam', 'Mecca'],
    'United Arab Emirates': ['Dubai', 'Abu Dhabi', 'Sharjah', 'Al Ain'],
    'Qatar': ['Doha', 'Al Rayyan', 'Al Khor', 'Wakra'],
    'Kuwait': ['Kuwait City', 'Hawalli', 'Salmiya', 'Jahra'],
    'Oman': ['Muscat', 'Salalah', 'Nizwa', 'Sohar'],
    'Bahrain': ['Manama', 'Muharraq', 'Riffa', 'Isa Town'],
    'United Kingdom': ['London', 'Manchester', 'Birmingham', 'Glasgow'],
    'United States': ['New York', 'Los Angeles', 'Chicago', 'Houston'],
    'Canada': ['Toronto', 'Vancouver', 'Montreal', 'Calgary'],
    'Australia': ['Sydney', 'Melbourne', 'Brisbane', 'Perth']
  };
  
  return cities[country] || [];
}

function getPopularIndustries(country: string): string[] {
  const industries: Record<string, string[]> = {
    'Saudi Arabia': ['Oil & Gas', 'Construction', 'Healthcare', 'IT', 'Banking'],
    'United Arab Emirates': ['Construction', 'Tourism', 'Banking', 'IT', 'Real Estate'],
    'Qatar': ['Oil & Gas', 'Construction', 'Banking', 'IT', 'Healthcare'],
    'Kuwait': ['Oil & Gas', 'Banking', 'Construction', 'IT', 'Healthcare'],
    'Oman': ['Oil & Gas', 'Tourism', 'Construction', 'Banking', 'IT'],
    'Bahrain': ['Banking', 'IT', 'Tourism', 'Construction', 'Healthcare'],
    'United Kingdom': ['Finance', 'IT', 'Healthcare', 'Engineering', 'Education'],
    'United States': ['IT', 'Healthcare', 'Finance', 'Engineering', 'Manufacturing'],
    'Canada': ['IT', 'Healthcare', 'Engineering', 'Finance', 'Education'],
    'Australia': ['Mining', 'IT', 'Healthcare', 'Engineering', 'Banking']
  };
  
  return industries[country] || [];
}

function getVisaInfo(country: string): string {
  const visaInfo: Record<string, string> = {
    'Saudi Arabia': 'Work visa required, employer sponsorship available',
    'United Arab Emirates': 'Work visa required, multiple entry options',
    'Qatar': 'Work visa required, employer sponsorship common',
    'Kuwait': 'Work visa required, medical test mandatory',
    'Oman': 'Work visa required, labor card needed',
    'Bahrain': 'Work visa required, easy process for skilled workers',
    'United Kingdom': 'Skilled Worker visa, points-based system',
    'United States': 'H-1B visa, employer sponsorship required',
    'Canada': 'Express Entry system, points-based immigration',
    'Australia': 'Skilled migration visa, points-based system'
  };
  
  return visaInfo[country] || 'Check local embassy requirements';
}

function getCostOfLiving(country: string): string {
  const costOfLiving: Record<string, string> = {
    'Saudi Arabia': 'Moderate - housing varies by city',
    'United Arab Emirates': 'High - especially in Dubai',
    'Qatar': 'High - housing is expensive',
    'Kuwait': 'High - but tax-free income',
    'Oman': 'Moderate - affordable housing options',
    'Bahrain': 'Moderate - reasonable cost of living',
    'United Kingdom': 'High - especially in London',
    'United States': 'Varies - high in major cities',
    'Canada': 'High - but good public services',
    'Australia': 'High - especially in Sydney and Melbourne'
  };
  
  return costOfLiving[country] || 'Research local cost of living';
}
