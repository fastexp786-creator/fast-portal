import { Metadata } from "next";
import { supabase } from '@/lib/supabase';

export const metadata: Metadata = {
  title: "Jobs by Airport | Fast Job Career",
  description: "Explore job opportunities near major airports worldwide. Find jobs near international airports with excellent connectivity and career opportunities.",
  keywords: "jobs by airport, airport jobs, aviation jobs, airport employment, logistics careers",
};

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  Type: string;
  category: string;
  country: string;
  Expiry_date: string;
  apply_url: string;
  description: string;
  Vendor_contact: string;
  status: string;
  priority_score: number;
  created_at: string;
}

interface AirportStats {
  name: string;
  city: string;
  country: string;
  flag: string;
  jobCount: string;
  popularIndustries: string[];
  description: string;
  hubType: string;
}

export default async function JobsByAirportPage() {
  // Fetch real jobs data from Supabase
  const { data: jobsData, error } = await supabase
    .from('jobs')
    .select('*')
    .eq('status', 'active')
    .order('priority_score', { ascending: false })
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching jobs:', error);
    return <div>Error loading jobs</div>;
  }

  // Calculate statistics by location (city)
  const airportStats: { [key: string]: AirportStats } = {};
  
  jobsData?.forEach((job: Job) => {
    const city = job.location;
    if (!airportStats[city]) {
      airportStats[city] = {
        name: `${city} International Airport`,
        city,
        country: job.country,
        flag: getCountryFlag(job.country),
        jobCount: '0',
        popularIndustries: getAirportIndustries(city),
        description: `Discover opportunities near ${city} airport`,
        hubType: 'Regional Hub'
      };
    }
    airportStats[city].jobCount = (parseInt(airportStats[city].jobCount) + 1).toString();
  });

  // Get unique locations with jobs
  const airports = Object.keys(airportStats)
    .map(city => airportStats[city])
    .sort((a, b) => parseInt(b.jobCount) - parseInt(a.jobCount));

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Jobs by Airport
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Supabase se data kar raha hai - airports ke pass job search karein
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Airport ke mutabiq job search karein
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Airport
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Tamam Airport</option>
                    {airports.map(airport => (
                      <option key={airport.name} value={airport.name}>
                        {airport.flag} {airport.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    شہر
                  </label>
                  <input
                    type="text"
                    placeholder="شہر میں ہوائی اڈے تلاش کریں..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ملک
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">تمام ملک</option>
                    {Array.from(new Set(airports.map(airport => airport.country))).map(country => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                  ہوائی اڈے کے قریب جابیں تلاش کریں
                </button>
              </div>
            </div>
            
            <div className="md:col-span-1">
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  سپا بیس سے ڈیٹا کیا جا رہا ہے
                </h3>
                <p className="text-blue-800 text-sm">
                  ہم موجودہ {jobsData?.length || 0} فعال جاب پوسٹنگز ہیں
                </p>
                <p className="text-blue-800 text-sm mt-2">
                  {airports.length} ہوائی اڈوں کے قریب جابیں دستیاب ہیں
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Airports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {airports.map((airport, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{airport.flag}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {airport.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {airport.description}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                    {airport.jobCount} جابیں
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">ہب کی قسم</h4>
                  <p className="text-gray-600 text-sm">
                    {airport.hubType}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">مقبول صنعت</h4>
                  <div className="flex flex-wrap gap-2">
                    {airport.popularIndustries.map((industry, industryIndex) => (
                      <span key={industryIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                    اس ہوائی اڈے کے قریب جابیں تلاش کریں
                  </button>
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                    مزیدار تفصیلات
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Major Airport Hubs */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            بڑے ہوائی اڈے ہبس
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">دبئی انٹرنیشنل</h3>
              <p className="text-gray-600 text-sm mb-4">
                ایوی ایشن، لاجسٹکس، ہسپٹیلیٹی
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">لندن ہیتھرو</h3>
              <p className="text-gray-600 text-sm mb-4">
                ایوی ایشن، ریٹیل، سیکیورٹی
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">سنگاپور چانگی</h3>
              <p className="text-gray-600 text-sm mb-4">
                ایوی ایشن، لاجسٹکس، ٹیکنالوجی
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">ریاض کنگ خالد</h3>
              <p className="text-gray-600 text-sm mb-4">
                ایوی ایشن، لاجسٹکس، صحت
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">کراچی جناح</h3>
              <p className="text-gray-600 text-sm mb-4">
                ایوی ایشن، لاجسٹکس، ٹیکنالوجی
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">لاہور علامہ اقبال</h3>
              <p className="text-gray-600 text-sm mb-4">
                ایوی ایشن، لاجسٹکس، صحت
              </p>
            </div>
          </div>
        </div>

        {/* Airport Resources */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            ہوائی اڈے کے وسائل
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-bold text-gray-900 mb-3">ایوی ایشن کیریئر</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                <li>پائلٹ اور کرو میمبر</li>
                <li>ایئر ٹریفک کنٹرول</li>
                <li>ایئرپورٹ مینجمنٹ</li>
                <li>گراؤنڈ سٹاف</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-bold text-gray-900 mb-3">لاجسٹکس اور سپلائی چین</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                <li>کارگو ہینڈلنگ</li>
                <li>ویئر ہاؤس مینجمنٹ</li>
                <li>سپلائی چین آپریشنز</li>
                <li>فریٹ فارورڈنگ</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper functions
function getCountryFlag(country: string): string {
  const flags: { [key: string]: string } = {
    'Saudi Arabia': '🇸🇦',
    'United Arab Emirates': '🇦🇪',
    'Qatar': '🇶🇦',
    'Kuwait': '🇰🇼',
    'Oman': '🇴🇲',
    'Bahrain': '🇧🇭',
    'Pakistan': '🇵🇰',
    'India': '🇮🇳',
    'Bangladesh': '🇧🇩',
    'Sri Lanka': '🇱🇰',
    'Nepal': '🇳🇵',
    'Philippines': '🇵🇭',
    'Egypt': '🇪🇬',
    'Jordan': '🇯🇩',
    'Lebanon': '🇱🇧',
    'Malaysia': '🇲🇾',
    'Singapore': '🇸🇬',
    'United Kingdom': '🇬🇧',
    'United States': '🇺🇸',
    'Canada': '🇨🇦',
    'Australia': '🇦🇺'
  };
  
  return flags[country] || '🌍';
}

function getAirportIndustries(city: string): string[] {
  const industries: { [key: string]: string[] } = {
    'Dubai': ['ایوی ایشن', 'لاجسٹکس', 'ہسپٹیلیٹی', 'ٹیکنالوجی'],
    'London': ['ایوی ایشن', 'ریٹیل', 'سیکیورٹی', 'کسٹمر سروس'],
    'Singapore': ['ایوی ایشن', 'لاجسٹکس', 'ٹیکنالوجی', 'سیاح'],
    'Riyadh': ['ایوی ایشن', 'لاجسٹکس', 'صحت', 'تعمیرات'],
    'Karachi': ['ایوی ایشن', 'لاجسٹکس', 'ٹیکنالوجی', 'صحت'],
    'Mumbai': ['ایوی ایشن', 'لاجسٹکس', 'ٹیکنالوجی', 'صحت'],
    'Manila': ['ایوی ایشن', 'لاجسٹکس', 'سیاح', 'صحت'],
    'Cairo': ['ایوی ایشن', 'لاجسٹکس', 'صحت', 'سیاح'],
    'Bangkok': ['ایوی ایشن', 'لاجسٹکس', 'سیاح', 'صحت'],
    'Kuala Lumpur': ['ایوی ایشن', 'لاجسٹکس', 'ٹیکنالوجی', 'سیاح'],
    'Hong Kong': ['ایوی ایشن', 'لاجسٹکس', 'سیاح', 'ٹیکنالوجی'],
    'Tokyo': ['ایوی ایشن', 'لاجسٹکس', 'ٹیکنالوجی', 'صحت'],
    'Sydney': ['ایوی ایشن', 'لاجسٹکس', 'صحت', 'سیاح'],
    'Toronto': ['ایوی ایشن', 'لاجسٹکس', 'صحت', 'ٹیکنالوجی'],
    'New York': ['ایوی ایشن', 'لاجسٹکس', 'صحت', 'ٹیکنالوجی'],
    'Paris': ['ایوی ایشن', 'لاجسٹکس', 'سیاح', 'صحت'],
    'Berlin': ['ایوی ایشن', 'لاجسٹکس', 'صحت', 'ٹیکنالوجی'],
    'Moscow': ['ایوی ایشن', 'لاجسٹکس', 'صحت', 'ٹیکنالوجی']
  };
  
  return industries[city] || [];
}
