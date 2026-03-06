import { Metadata } from "next";
import Link from "next/link";
import { supabase } from '@/lib/supabase';
import JobPostingSchema from '@/components/JobPostingSchema';

export const metadata: Metadata = {
  title: "Popular Jobs | Fast Job Career",
  description: "Discover trending and in-demand job positions. Explore popular career opportunities with real-time data from Supabase.",
  keywords: "popular jobs, trending jobs, in-demand positions, hot jobs, career opportunities",
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

interface CategoryStats {
  name: string;
  icon: string;
  jobCount: number;
  trendingSkills: string[];
  topCompanies: string[];
  avgSalary: string;
  growthRate: string;
}

export default async function PopularJobsPage() {
  // Fetch real-time stats from Supabase
  const { data: jobsData, error } = await supabase
    .from('jobs')
    .select('*')
    .eq('status', 'active');

  if (error) {
    console.error('Error fetching jobs:', error);
    return <div>Error loading jobs</div>;
  }

  // Calculate statistics by category
  const categoryStats: Record<string, CategoryStats> = {};
  
  jobsData?.forEach(job => {
    const category = job.category || 'General';
    if (!categoryStats[category]) {
      categoryStats[category] = {
        name: category,
        icon: getCategoryIcon(category),
        jobCount: 0,
        trendingSkills: [],
        topCompanies: [],
        avgSalary: 'PKR 60,000 - 250,000',
        growthRate: getGrowthRate(category)
      };
    }
    categoryStats[category].jobCount++;
    
    // Add trending skills
    if (job.title && !categoryStats[category].trendingSkills.includes(job.title)) {
      categoryStats[category].trendingSkills.push(job.title);
    }
    
    // Add top companies
    if (job.company && !categoryStats[category].topCompanies.includes(job.company)) {
      categoryStats[category].topCompanies.push(job.company);
    }
  });

  // Get unique categories with jobs
  const popularCategories = Object.keys(categoryStats)
    .map(category => ({
      ...categoryStats[category],
      trendingSkills: getTrendingSkills(category),
      topCompanies: getTopCompanies(category)
    }))
    .sort((a, b) => parseInt(b.jobCount.toString()) - parseInt(a.jobCount.toString()));

  return (
    <>
      <JobPostingSchema job={{
        id: 'popular-jobs',
        title: 'Popular Jobs - Fast Job Career',
        company: 'Fast Job Career',
        location: 'Multiple Categories',
        country: 'International',
        category: 'Job Search',
        description: 'Find trending and popular job categories with real data from Supabase database',
        salary: '60000-250000',
        Type: 'FULL_TIME'
      }} />
      <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Popular Jobs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Supabase se data kar raha hai - trending aur popular job categories
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Job category se search karein
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Category
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Tamam Categories</option>
                    {popularCategories.map(category => (
                      <option key={category.name} value={category.name}>
                        {category.icon} {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Type
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">All Types</option>
                    <option value="FULL_TIME">Full Time</option>
                    <option value="PART_TIME">Part Time</option>
                    <option value="CONTRACT">Contract</option>
                    <option value="REMOTE">Remote</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-bold text-blue-900 mb-2">Quick Stats</h3>
                <p className="text-blue-800">
                  We have {jobsData?.length || 0} active job postings
                </p>
                <p className="text-blue-800 text-sm mt-2">
                  {popularCategories.length} job categories available
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {popularCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{category.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                    <p className="text-blue-600 font-semibold">{category.jobCount} Jobs Available</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">🔥</span>
                  <span className="text-sm text-gray-700">
                    <strong>Trending Skills:</strong> {category.trendingSkills.slice(0, 3).join(', ')}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">🏢</span>
                  <span className="text-sm text-gray-700">
                    <strong>Top Companies:</strong> {category.topCompanies.slice(0, 3).join(', ')}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-purple-600">💰</span>
                  <span className="text-sm text-gray-700">
                    <strong>Average Salary:</strong> {category.avgSalary}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-orange-600">📈</span>
                  <span className="text-sm text-gray-700">
                    <strong>Growth Rate:</strong> {category.growthRate}
                  </span>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                  Browse {category.name} Jobs
                </button>
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trending Searches */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Trending Job Searches
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Software Developer",
              "Data Scientist", 
              "Product Manager",
              "UX Designer",
              "DevOps Engineer",
              "Marketing Manager",
              "Business Analyst",
              "Full Stack Developer",
              "Cloud Architect"
            ].map((search, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors cursor-pointer">
                <span className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  🔍 {search}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Popular Job Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Job Market Insights</h3>
              <p className="text-gray-600 text-sm mb-3">
                Real-time job market trends and analytics
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                View Analytics
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Career Advice</h3>
              <p className="text-gray-600 text-sm mb-3">
                Tips for landing popular and in-demand jobs
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                Get Advice
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Salary Calculator</h3>
              <p className="text-gray-600 text-sm mb-3">
                Compare salaries across different roles and industries
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                Calculate Now
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
function getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    'Software Development': '💻',
    'Data Science': '📊',
    'Product Management': '📦',
    'UX Design': '🎨',
    'DevOps': '⚙️',
    'Marketing': '📢',
    'Business Analysis': '📈',
    'Cloud Computing': '☁️',
    'Healthcare': '⚕️',
    'Finance': '💰',
    'Education': '🎓',
    'Engineering': '⚡',
    'Sales': '💼',
    'Human Resources': '👥',
    'Customer Service': '🎧',
    'Operations': '⚙️',
    'Consulting': '💡',
    'Project Management': '📋'
  };
  
  return icons[category] || '💼';
}

function getTrendingSkills(category: string): string[] {
  const skills: Record<string, string[]> = {
    'Software Development': ['React', 'Node.js', 'TypeScript', 'Python', 'AWS'],
    'Data Science': ['Python', 'Machine Learning', 'SQL', 'TensorFlow', 'R'],
    'Product Management': ['Agile', 'Scrum', 'JIRA', 'Product Strategy', 'Roadmapping'],
    'UX Design': ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research'],
    'DevOps': ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Linux'],
    'Marketing': ['Digital Marketing', 'SEO', 'Content Marketing', 'Social Media', 'Analytics'],
    'Business Analysis': ['Excel', 'Power BI', 'SQL', 'Data Analysis', 'Visualization'],
    'Cloud Computing': ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Serverless'],
    'Healthcare': ['Medical Knowledge', 'Patient Care', 'HIPAA', 'EMR', 'Healthcare IT'],
    'Finance': ['Financial Analysis', 'Accounting', 'Risk Management', 'Investment Banking'],
    'Education': ['Teaching', 'Curriculum Development', 'EdTech', 'Online Learning'],
    'Engineering': ['CAD', 'MATLAB', 'Project Management', 'Quality Assurance'],
    'Sales': ['CRM', 'Sales Strategy', 'Negotiation', 'Lead Generation', 'Closing'],
    'Human Resources': ['Recruitment', 'Performance Management', 'Payroll', 'HRIS', 'Training'],
    'Customer Service': ['Support Tickets', 'Customer Success', 'CRM', 'Communication'],
    'Operations': ['Process Optimization', 'Supply Chain', 'Logistics', 'Quality Control'],
    'Consulting': ['Strategy', 'Management Consulting', 'IT Consulting', 'Business Analysis'],
    'Project Management': ['PMP', 'Agile', 'Waterfall', 'Risk Management', 'Stakeholder Management']
  };
  
  return skills[category] || [];
}

function getTopCompanies(category: string): string[] {
  const companies: Record<string, string[]> = {
    'Software Development': ['Microsoft', 'Google', 'Amazon', 'Meta', 'Apple'],
    'Data Science': ['Google', 'Microsoft', 'Amazon', 'Netflix', 'IBM'],
    'Product Management': ['Google', 'Microsoft', 'Apple', 'Meta', 'Uber'],
    'UX Design': ['Google', 'Apple', 'Microsoft', 'Adobe', 'Figma'],
    'DevOps': ['Google', 'Microsoft', 'Amazon', 'Netflix', 'IBM'],
    'Marketing': ['Google', 'Meta', 'Procter & Gamble', 'Unilever', 'Nike'],
    'Business Analysis': ['McKinsey', 'Deloitte', 'Accenture', 'Bain', 'BCG'],
    'Cloud Computing': ['AWS', 'Microsoft', 'Google', 'Oracle', 'IBM'],
    'Healthcare': ['Mayo Clinic', 'Cleveland Clinic', 'Kaiser', 'HCA Healthcare'],
    'Finance': ['Goldman Sachs', 'JP Morgan', 'Bank of America', 'Wells Fargo'],
    'Education': ['Coursera', 'Khan Academy', 'Udemy', 'edX', 'Duolingo'],
    'Engineering': ['Boeing', 'Lockheed Martin', 'General Electric', 'Siemens', 'Toyota'],
    'Sales': ['Salesforce', 'HubSpot', 'ZoomInfo', 'Oracle', 'Microsoft'],
    'Human Resources': ['Workday', 'ADP', 'Paychex', 'Ceridian', 'IBM'],
    'Customer Service': ['Amazon', 'Apple', 'Microsoft', 'Zappos', 'Salesforce'],
    'Operations': ['Amazon', 'Walmart', 'Toyota', 'FedEx', 'UPS'],
    'Consulting': ['McKinsey', 'Deloitte', 'Accenture', 'Bain', 'BCG'],
    'Project Management': ['PMI', 'Asana', 'Monday.com', 'JIRA', 'Microsoft']
  };
  
  return companies[category] || [];
}

function getGrowthRate(category: string): string {
  const growthRates: Record<string, string> = {
    'Software Development': '+15% YoY',
    'Data Science': '+25% YoY',
    'Product Management': '+12% YoY',
    'UX Design': '+18% YoY',
    'DevOps': '+20% YoY',
    'Marketing': '+10% YoY',
    'Business Analysis': '+8% YoY',
    'Cloud Computing': '+30% YoY',
    'Healthcare': '+7% YoY',
    'Finance': '+5% YoY',
    'Education': '+6% YoY',
    'Engineering': '+4% YoY',
    'Sales': '+3% YoY',
    'Human Resources': '+2% YoY',
    'Customer Service': '+1% YoY',
    'Operations': '+2% YoY',
    'Consulting': '+11% YoY',
    'Project Management': '+9% YoY'
  };
  
  return growthRates[category] || '+5% YoY';
}
