import { Metadata } from "next";
import { supabase } from '@/lib/supabase';

export const metadata: Metadata = {
  title: "Jobs by Industry | Fast Job Career",
  description: "Explore job opportunities by industry. Find jobs in technology, healthcare, finance, engineering, and more sectors worldwide.",
  keywords: "jobs by industry, technology jobs, healthcare jobs, finance jobs, engineering jobs, career sectors",
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

interface IndustryStats {
  name: string;
  icon: string;
  jobCount: string;
  growthRate: string;
  avgSalary: string;
  description: string;
  topCompanies: string[];
}

export default async function JobsByIndustryPage() {
  // Fetch real jobs data from Supabase
  const { data: jobsData, error } = await supabase
    .from('jobs')
    .select('*')
    .eq('status', 'active')
    .order('priority_score DESC, created_at DESC');

  if (error) {
    console.error('Error fetching jobs:', error);
    return <div>Error loading jobs</div>;
  }

  // Calculate statistics by category (industry)
  const industryStats: { [key: string]: IndustryStats } = {};
  
  jobsData?.forEach((job: Job) => {
    const industry = job.category || 'Other';
    if (!industryStats[industry]) {
      industryStats[industry] = {
        name: industry,
        icon: getIndustryIcon(industry),
        jobCount: '0',
        growthRate: '+15%',
        avgSalary: '$60,000',
        description: `Explore ${industry} opportunities`,
        topCompanies: getTopCompanies(industry)
      };
    }
    industryStats[industry].jobCount = (parseInt(industryStats[industry].jobCount) + 1).toString();
  });

  // Get unique industries with jobs
  const industries = Object.keys(industryStats)
    .map(industry => industryStats[industry])
    .sort((a, b) => parseInt(b.jobCount) - parseInt(a.jobCount));

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Jobs by Industry
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Supabase se data kar raha hai - industry ke mutabiq job search karein
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Industry ke mutabiq job search karein
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Tamam Industry</option>
                    {industries.map(industry => (
                      <option key={industry.name} value={industry.name}>
                        {industry.icon} {industry.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    جاب کی تلاش
                  </label>
                  <input
                    type="text"
                    placeholder="صنعت میں جاب تلاش کریں..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    مہارت
                  </label>
                  <input
                    type="text"
                    placeholder="مہارت تلاش کریں..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                  صنعت میں جابیں تلاش کریں
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
                  {industries.length} صنعتوں میں جابیں دستیاب ہیں
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{industry.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {industry.description}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                    {industry.jobCount} جابیں
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">اوسط تنخواہ</h4>
                    <p className="text-gray-600 text-sm">
                      {industry.avgSalary}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">گروتھ ریٹ</h4>
                    <p className="text-gray-600 text-sm">
                      {industry.growthRate}
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">بڑی کمپنیاں</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.topCompanies.map((company, companyIndex) => (
                      <span key={companyIndex} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                    اس صنعت میں جابیں تلاش کریں
                  </button>
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                    مزیدار تفصیلات
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Insights */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            صنعت کی بصیرت
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">ٹیکنالوجی</h3>
              <p className="text-gray-600 text-sm mb-4">
                سب سے تیزی سے بڑھتی ہوئی صنعت
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">صحت</h3>
              <p className="text-gray-600 text-sm mb-4">
                مستقل طلب اور بڑھتی ہوئی صنعت
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">فنانس</h3>
              <p className="text-gray-600 text-sm mb-4">
                اعلیٰ تنخواہ اور فوائد
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">تعلیم</h3>
              <p className="text-gray-600 text-sm mb-4">
                آن لائن تعلیم میں اضافہ
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">تعمیرات</h3>
              <p className="text-gray-600 text-sm mb-4">
                انفراسٹرکچر میں سرمایہ کاری
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">سیاح</h3>
              <p className="text-gray-600 text-sm mb-4">
                    سیاحت کی بحالی اور بڑھتی
              </p>
            </div>
          </div>
        </div>

        {/* Industry Resources */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            صنعت کے وسائل
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-bold text-gray-900 mb-3">صنعت کی تربیت</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                <li>صنعت کے مطابق سرٹیفکیٹس</li>
                <li>پیشہ ورانہ تربیتی پروگرام</li>
                <li>مہارت کی ترقی کورسز</li>
                <li>صنعت کے کنفرنسز</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-bold text-gray-900 mb-3">صنعت کی نیٹ ورکنگ</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-6">
                <li>پیشہ ورانہ ایسوسی ایشنز</li>
                <li>صنعت کے میلے اور ایونٹس</li>
                <li>آن لائن کمیونٹیز</li>
                <li>صنعت کے فورمز</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper functions
function getIndustryIcon(industry: string): string {
  const icons: { [key: string]: string } = {
    'Software Development': '💻',
    'Data Science': '📊',
    'Digital Marketing': '📱',
    'Healthcare': '🏥',
    'Finance': '💰',
    'Education': '📚',
    'Engineering': '⚙️',
    'Sales': '💼',
    'Customer Service': '🎧',
    'HR': '👥',
    'Marketing': '📢',
    'Design': '🎨',
    'Admin': '📋',
    'Gulf Jobs': '🌍',
    'Other': '📄'
  };
  
  return icons[industry] || '📄';
}

function getTopCompanies(industry: string): string[] {
  const companies: { [key: string]: string[] } = {
    'Software Development': ['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Netflix'],
    'Data Science': ['Netflix', 'Spotify', 'Airbnb', 'Uber', 'LinkedIn', 'Twitter'],
    'Digital Marketing': ['HubSpot', 'Mailchimp', 'Hootsuite', 'Google', 'Facebook', 'Adobe'],
    'Healthcare': ['Teladoc', 'Amwell', 'Cigna', 'UnitedHealth', 'McKinsey', 'Accenture'],
    'Finance': ['PayPal', 'Stripe', 'Square', 'Robinhood', 'Coinbase', 'Revolut'],
    'Education': ['Coursera', 'Udemy', 'Khan Academy', 'Duolingo', 'Chegg', 'Quizlet'],
    'Engineering': ['Autodesk', 'Siemens', 'Boeing', 'Lockheed', 'General Electric', 'Honeywell'],
    'Sales': ['Salesforce', 'HubSpot', 'ZoomInfo', 'LinkedIn', 'Oracle', 'SAP'],
    'Customer Service': ['Amazon', 'Apple', 'Microsoft', 'Google', 'Uber', 'Airbnb'],
    'HR': ['Workday', 'ADP', 'Paychex', 'Gusto', 'BambooHR', 'Culture Amp'],
    'Marketing': ['Google', 'Facebook', 'Amazon', 'Microsoft', 'Adobe', 'HubSpot'],
    'Design': ['Figma', 'Adobe', 'Sketch', 'InVision', 'Canva', 'Framer'],
    'Admin': ['Upwork', 'Fiverr', 'Freelancer', 'Toptal', 'Belay', 'Time Etc'],
    'Gulf Jobs': ['Aramco', 'Emirates', 'Etihad', 'Qatar Airways', 'STC', 'Mobily']
  };
  
  return companies[industry] || [];
}
