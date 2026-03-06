import { Metadata } from "next";
import Link from "next/link";
import { supabase } from '@/lib/supabase';
import JobPostingSchema from '@/components/JobPostingSchema';

export const metadata: Metadata = {
  title: "Jobs by City | Fast Job Career",
  description: "Find jobs in your city and nearby areas. Explore opportunities by location with real-time data from Supabase.",
  keywords: "jobs by city, local jobs, city employment, nearby jobs, location-based job search",
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

interface CityStats {
  name: string;
  country: string;
  jobCount: number;
  popularIndustries: string[];
  avgSalary: string;
  costOfLiving: string;
  topCompanies: string[];
}

export default async function JobsByCityPage() {
  // Fetch real-time stats from Supabase
  const { data: jobsData, error } = await supabase
    .from('jobs')
    .select('*')
    .eq('status', 'active');

  if (error) {
    console.error('Error fetching jobs:', error);
    return <div>Error loading jobs</div>;
  }

  // Calculate statistics by city
  const cityStats: Record<string, CityStats> = {};
  
  jobsData?.forEach(job => {
    const city = job.location || 'Unknown';
    if (!cityStats[city]) {
      cityStats[city] = {
        name: city,
        country: job.country || 'Unknown',
        jobCount: 0,
        popularIndustries: [],
        avgSalary: 'PKR 40,000 - 180,000',
        costOfLiving: getCostOfLiving(city),
        topCompanies: []
      };
    }
    cityStats[city].jobCount++;
    
    // Add popular industries
    if (job.category && !cityStats[city].popularIndustries.includes(job.category)) {
      cityStats[city].popularIndustries.push(job.category);
    }
    
    // Add top companies
    if (job.company && !cityStats[city].topCompanies.includes(job.company)) {
      cityStats[city].topCompanies.push(job.company);
    }
  });

  // Get unique cities with jobs
  const cities = Object.keys(cityStats)
    .map(city => ({
      ...cityStats[city],
      popularIndustries: getPopularIndustries(city),
      topCompanies: getTopCompanies(city)
    }))
    .sort((a, b) => parseInt(b.jobCount.toString()) - parseInt(a.jobCount.toString()));

  return (
    <>
      <JobPostingSchema job={{
        id: 'jobs-by-city',
        title: 'Jobs by City - Fast Job Career',
        company: 'Fast Job Career',
        location: 'Multiple Cities',
        country: 'International',
        category: 'Job Search',
        description: 'Find jobs by city with real data from Supabase database',
        salary: '40000-180000',
        Type: 'FULL_TIME'
      }} />
      <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Jobs by City
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Supabase se data kar raha hai - shehron ke mutabiq job search karein
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Urban job markets ki detailed exploration karein. Major metropolitan areas mein diverse industries aur career paths available hain. 
            Dubai, London, New York, Singapore jaise global cities mein finance, technology, aur healthcare sectors dominate karte hain. 
            Emerging cities mein growth opportunities zyada, cost of living comparatively kam hota hai. 
            Har city ka unique job market characteristics hai - local economy, major employers, aur salary ranges vary karte hain.
            Real-time Supabase integration se aapko latest job listings aur market trends milte rahein hain.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                City ke mutabiq job search karein
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="City me job search karein..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Tamam Country</option>
                    {Array.from(new Set(cities.map(city => city.country))).map(country => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-bold text-blue-900 mb-2">Urban Job Insights</h3>
                <p className="text-blue-800 mb-3">
                  Major cities mein competitive job markets, diverse industries, aur networking opportunities.
                  Metropolitan areas mein career growth potential high hota hai.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">🏙</span>
                    <span className="text-sm text-blue-800">
                      <strong>Hot Markets:</strong> Dubai, London, Singapore
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600">💼</span>
                    <span className="text-sm text-blue-800">
                      <strong>Top Sectors:</strong> Finance, Tech, Healthcare
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-600">💰</span>
                    <span className="text-sm text-blue-800">
                      <strong>Salary Range:</strong> PKR 40K - 300K monthly
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {cities.map((city, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{city.name}</h3>
                  <p className="text-blue-600 font-semibold">{city.jobCount} Jobs Available</p>
                  <p className="text-gray-600 text-sm">{city.country}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">💼</span>
                  <span className="text-sm text-gray-700">
                    <strong>Popular Industries:</strong> {city.popularIndustries.slice(0, 3).join(', ')}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">Average Salary</h4>
                    <p className="text-gray-600 text-sm">
                      {city.avgSalary}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">Cost of Living</h4>
                    <p className="text-gray-600 text-sm">
                      {city.costOfLiving}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">🏢</span>
                  <span className="text-sm text-gray-700">
                    <strong>Top Companies:</strong> {city.topCompanies.slice(0, 3).join(', ')}
                  </span>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                  City me jobs search karein
                </button>
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                  More Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trending Cities */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Trending Cities for Job Seekers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Dubai", "Riyadh", "London", "New York",
              "Toronto", "Singapore", "Sydney", "Manchester",
              "Berlin", "Amsterdam", "Tokyo", "Mumbai",
              "Kuala Lumpur", "Hong Kong", "Paris", "San Francisco"
            ].map((city, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors cursor-pointer">
                <span className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  🏙 {city}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Global job markets mein emerging cities aur established hubs dono explore karein. 
              Technology hubs mein innovation, financial centers mein stability, aur emerging markets mein growth opportunities.
            </p>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Urban Career Resources & Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">City Resume Templates</h3>
              <p className="text-gray-600 text-sm mb-3">
                City-specific professional templates jo local job markets ke liye optimized hain. 
                Urban employers ki expectations meet karne wale formats.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                Download Templates
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Cost of Living Calculator</h3>
              <p className="text-gray-600 text-sm mb-3">
                City-wise cost of living comparison. Housing, transportation, aur daily expenses analysis.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                Compare Cities
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚇</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Relocation Guide</h3>
              <p className="text-gray-600 text-sm mb-3">
                City relocation resources aur local information. Housing, schools, aur community insights.
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                View Guides
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">City Networks</h3>
              <p className="text-gray-600 text-sm mb-3">
                Professional networking groups aur communities. Local industry events aur meetups.
              </p>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                Join Networks
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚌</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Transportation Guide</h3>
              <p className="text-gray-600 text-sm mb-3">
                City commute options aur public transport information. Route planning aur travel costs.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                View Transport
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Job Alerts</h3>
              <p className="text-gray-600 text-sm mb-3">
                City-specific job notifications aur alerts. New opportunities instant updates.
              </p>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                Set Alerts
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
function getCostOfLiving(city: string): string {
  const costOfLiving: Record<string, string> = {
    'Dubai': 'Very High - rent is expensive',
    'Riyadh': 'High - but tax-free',
    'London': 'Very High - especially central areas',
    'New York': 'Very High - Manhattan is expensive',
    'Toronto': 'High - but good public services',
    'Singapore': 'Very High - housing is premium',
    'Sydney': 'High - especially near city center',
    'Manchester': 'Moderate - reasonable prices',
    'Berlin': 'Moderate - affordable compared to other capitals',
    'Amsterdam': 'High - quality of life excellent',
    'Tokyo': 'Very High - but efficient transport',
    'Mumbai': 'Moderate - varies by area',
    'Kuala Lumpur': 'Moderate - good value',
    'Hong Kong': 'Very High - space is premium',
    'Paris': 'Very High - city center expensive',
    'San Francisco': 'Very High - tech hub premium'
  };
  
  return costOfLiving[city] || 'Research local cost of living';
}

function getPopularIndustries(city: string): string[] {
  const industries: Record<string, string[]> = {
    'Dubai': ['Construction', 'Tourism', 'Banking', 'IT', 'Real Estate'],
    'Riyadh': ['Oil & Gas', 'Construction', 'Banking', 'Healthcare', 'IT'],
    'London': ['Finance', 'IT', 'Healthcare', 'Engineering', 'Education'],
    'New York': ['Finance', 'IT', 'Healthcare', 'Media', 'Consulting'],
    'Toronto': ['IT', 'Healthcare', 'Finance', 'Education', 'Engineering'],
    'Singapore': ['IT', 'Banking', 'Healthcare', 'Manufacturing', 'Logistics'],
    'Sydney': ['Mining', 'IT', 'Healthcare', 'Construction', 'Finance'],
    'Manchester': ['Manufacturing', 'IT', 'Healthcare', 'Engineering', 'Education'],
    'Berlin': ['IT', 'Engineering', 'Healthcare', 'Finance', 'Creative Industries'],
    'Amsterdam': ['IT', 'Finance', 'Logistics', 'Healthcare', 'Tourism'],
    'Tokyo': ['Technology', 'Finance', 'Manufacturing', 'Healthcare', 'Engineering'],
    'Mumbai': ['IT', 'Finance', 'Manufacturing', 'Healthcare', 'Entertainment'],
    'Kuala Lumpur': ['IT', 'Banking', 'Oil & Gas', 'Tourism', 'Manufacturing'],
    'Hong Kong': ['Finance', 'IT', 'Logistics', 'Tourism', 'Real Estate'],
    'Paris': ['Fashion', 'Tourism', 'IT', 'Finance', 'Healthcare'],
    'San Francisco': ['Technology', 'Startups', 'Finance', 'Healthcare', 'Consulting']
  };
  
  return industries[city] || [];
}

function getTopCompanies(city: string): string[] {
  const companies: Record<string, string[]> = {
    'Dubai': ['Emirates Group', 'DP World', 'Emaar', 'Al-Futtaim', 'Dubai Holding'],
    'Riyadh': ['Aramco', 'SABIC', 'STC', 'Saudi Telecom', 'Riyadh Bank'],
    'London': ['HSBC', 'Barclays', 'BP', 'Vodafone', 'British Airways'],
    'New York': ['JPMorgan', 'Goldman Sachs', 'IBM', 'Microsoft', 'Google'],
    'Toronto': ['RBC', 'TD Bank', 'Bell Canada', 'Shopify', 'CN Railway'],
    'Singapore': ['DBS', 'OCBC', 'SingTel', 'CapitaLand', 'Singapore Airlines'],
    'Sydney': ['BHP', 'Commonwealth Bank', 'Telstra', 'Woolworths', 'Qantas'],
    'Manchester': ['Co-operative Group', 'BBC', 'Manchester Airport', 'Amazon', 'TalkTalk'],
    'Berlin': ['Siemens', 'Deutsche Bank', 'Bayer', 'Volkswagen', 'Lufthansa'],
    'Amsterdam': ['ING', 'Philips', 'Heineken', 'KLM', 'ASML'],
    'Tokyo': ['Toyota', 'Sony', 'Mitsubishi', 'SoftBank', 'Tokyo Electric'],
    'Mumbai': ['Tata Group', 'Reliance', 'Infosys', 'HDFC Bank', 'Larsen & Toubro'],
    'Kuala Lumpur': ['Petronas', 'Maybank', 'Telekom Malaysia', 'AirAsia', 'Genting'],
    'Hong Kong': ['HSBC', 'Cathay Pacific', 'CK Hutchison', 'Sun Hung Kai', 'Li & Fung'],
    'Paris': ['LVMH', 'Total', 'BNP Paribas', 'Air France', 'L\'Oreal'],
    'San Francisco': ['Apple', 'Google', 'Meta', 'Salesforce', 'Uber']
  };
  
  return companies[city] || [];
}
