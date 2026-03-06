import { Metadata } from "next";
import Link from "next/link";
import { supabase } from '@/lib/supabase';
import JobPostingSchema from '@/components/JobPostingSchema';

export const metadata: Metadata = {
  title: "Remote Jobs | Fast Job Career",
  description: "Find work from home opportunities and remote positions. Explore flexible job options with real-time data from Supabase.",
  keywords: "remote jobs, work from home, telecommute, flexible work, online jobs, remote work",
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

interface RemoteCategory {
  name: string;
  icon: string;
  jobCount: number;
  popularSkills: string[];
  topCompanies: string[];
  avgSalary: string;
  benefits: string[];
}

export default async function RemoteJobsPage() {
  // Fetch real-time stats from Supabase
  const { data: jobsData, error } = await supabase
    .from('jobs')
    .select('*')
    .eq('status', 'active');

  if (error) {
    console.error('Error fetching jobs:', error);
    return <div>Error loading jobs</div>;
  }

  // Filter remote jobs
  const remoteJobs = jobsData?.filter(job => 
    job.title?.toLowerCase().includes('remote') || 
    job.description?.toLowerCase().includes('remote') ||
    job.location?.toLowerCase().includes('remote') ||
    job.Type?.toLowerCase().includes('remote')
  ) || [];

  // Calculate statistics by category
  const categoryStats: Record<string, RemoteCategory> = {};
  
  remoteJobs.forEach(job => {
    const category = job.category || 'General';
    if (!categoryStats[category]) {
      categoryStats[category] = {
        name: category,
        icon: getRemoteCategoryIcon(category),
        jobCount: 0,
        popularSkills: [],
        topCompanies: [],
        avgSalary: 'PKR 70,000 - 300,000',
        benefits: []
      };
    }
    categoryStats[category].jobCount++;
    
    // Add popular skills
    if (job.title && !categoryStats[category].popularSkills.includes(job.title)) {
      categoryStats[category].popularSkills.push(job.title);
    }
    
    // Add top companies
    if (job.company && !categoryStats[category].topCompanies.includes(job.company)) {
      categoryStats[category].topCompanies.push(job.company);
    }
  });

  // Get unique categories with remote jobs
  const remoteCategories = Object.keys(categoryStats)
    .map(category => ({
      ...categoryStats[category],
      popularSkills: getRemoteSkills(category),
      topCompanies: getRemoteCompanies(category)
    }))
    .sort((a, b) => parseInt(b.jobCount.toString()) - parseInt(a.jobCount.toString()));

  return (
    <>
      <JobPostingSchema job={{
        id: 'remote-jobs',
        title: 'Remote Jobs - Fast Job Career',
        company: 'Fast Job Career',
        location: 'Remote - Work From Home',
        country: 'International',
        category: 'Remote Work',
        description: 'Find remote and work from home job opportunities with real data from Supabase database',
        salary: '70000-300000',
        Type: 'REMOTE'
      }} />
      <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Remote Jobs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Supabase se data kar raha hai - work from home opportunities
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Remote job search karein
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Category
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Tamam Categories</option>
                    {remoteCategories.map(category => (
                      <option key={category.name} value={category.name}>
                        {category.icon} {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Work Type
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">All Types</option>
                    <option value="FULL_TIME_REMOTE">Full Time Remote</option>
                    <option value="PART_TIME_REMOTE">Part Time Remote</option>
                    <option value="CONTRACT_REMOTE">Contract Remote</option>
                    <option value="FREELANCE">Freelance</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-bold text-green-900 mb-2">Remote Stats</h3>
                <p className="text-green-800">
                  {remoteJobs.length} remote positions available
                </p>
                <p className="text-green-800 text-sm mt-2">
                  {remoteCategories.length} remote job categories
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Remote Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {remoteCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{category.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                    <p className="text-blue-600 font-semibold">{category.jobCount} Remote Jobs</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">💻</span>
                  <span className="text-sm text-gray-700">
                    <strong>Popular Skills:</strong> {category.popularSkills.slice(0, 3).join(', ')}
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
                  <span className="text-orange-600">🏖️</span>
                  <span className="text-sm text-gray-700">
                    <strong>Benefits:</strong> {category.benefits.slice(0, 2).join(', ')}
                  </span>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                  Browse {category.name} Remote Jobs
                </button>
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Remote Work Benefits */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Remote Work Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Flexibility</h3>
              <p className="text-gray-600 text-sm mb-3">
                Work from anywhere, set your own hours
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Cost Savings</h3>
              <p className="text-gray-600 text-sm mb-3">
                Save on commute and meals
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Global Opportunities</h3>
              <p className="text-gray-600 text-sm mb-3">
                Work with international companies
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Better Work-Life Balance</h3>
              <p className="text-gray-600 text-sm mb-3">
                More time for family and hobbies
              </p>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Remote Work Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Remote Job Boards</h3>
              <p className="text-gray-600 text-sm mb-3">
                Specialized remote work platforms
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                Browse Platforms
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Remote Tools</h3>
              <p className="text-gray-600 text-sm mb-3">
                Essential software and apps
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                View Tools
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Career Advice</h3>
              <p className="text-gray-600 text-sm mb-3">
                Tips for remote work success
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                Get Advice
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
function getRemoteCategoryIcon(category: string): string {
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
    'Writing': '✍️',
    'Design': '🎨',
    'Consulting': '💡'
  };
  
  return icons[category] || '💻';
}

function getRemoteSkills(category: string): string[] {
  const skills: Record<string, string[]> = {
    'Software Development': ['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker', 'Git'],
    'Data Science': ['Python', 'Machine Learning', 'SQL', 'TensorFlow', 'R', 'Jupyter'],
    'Product Management': ['Agile', 'Scrum', 'JIRA', 'Product Strategy', 'Roadmapping', 'User Stories'],
    'UX Design': ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research', 'Wireframing'],
    'DevOps': ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Linux', 'AWS DevOps'],
    'Marketing': ['Digital Marketing', 'SEO', 'Content Marketing', 'Social Media', 'Email Marketing', 'Analytics'],
    'Business Analysis': ['Excel', 'Power BI', 'SQL', 'Data Analysis', 'Visualization', 'Reporting'],
    'Cloud Computing': ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Serverless', 'Microservices'],
    'Healthcare': ['Telemedicine', 'Healthcare IT', 'Medical Records', 'HIPAA', 'Digital Health'],
    'Finance': ['FinTech', 'Digital Banking', 'Risk Management', 'Investment', 'Cryptocurrency'],
    'Education': ['Online Teaching', 'EdTech', 'Curriculum Development', 'E-learning', 'Educational Technology'],
    'Engineering': ['Remote Engineering', 'Technical Support', 'System Administration', 'Network Engineering'],
    'Sales': ['Digital Sales', 'Inside Sales', 'Sales Strategy', 'Lead Generation', 'CRM'],
    'Human Resources': ['Remote HR', 'Virtual HR', 'HRIS', 'Performance Management', 'Employee Engagement'],
    'Customer Service': ['Virtual Support', 'Customer Success', 'Help Desk', 'Technical Support', 'Chat Support'],
    'Writing': ['Technical Writing', 'Content Writing', 'Copywriting', 'Grant Writing', 'Proposal Writing'],
    'Design': ['Graphic Design', 'Web Design', 'UI Design', 'Visual Design', 'Brand Design'],
    'Consulting': ['Strategy Consulting', 'Management Consulting', 'IT Consulting', 'Business Consulting', 'Virtual Consulting']
  };
  
  return skills[category] || [];
}

function getRemoteCompanies(category: string): string[] {
  const companies: Record<string, string[]> = {
    'Software Development': ['GitLab', 'GitHub', 'Atlassian', 'Automattic', 'Mozilla'],
    'Data Science': ['Kaggle', 'Hugging Face', 'DataRobot', 'Alteryx', 'Tableau'],
    'Product Management': ['Asana', 'Monday.com', 'ClickUp', 'Notion', 'Miro'],
    'UX Design': ['Figma', 'Adobe', 'Sketch', 'InVision', 'Framer', 'Webflow'],
    'DevOps': ['HashiCorp', 'Docker Hub', 'CircleCI', 'GitLab', 'GitHub Actions'],
    'Marketing': ['HubSpot', 'Mailchimp', 'Hootsuite', 'Buffer', 'Canva', 'Adobe Creative Cloud'],
    'Business Analysis': ['Tableau', 'Power BI', 'Looker', 'Sisense', 'Domo', 'Alteryx'],
    'Cloud Computing': ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean', 'Heroku', 'Vercel'],
    'Healthcare': ['Teladoc', 'Amwell', 'HealthTap', 'Headspace Health', 'Calm'],
    'Finance': ['Stripe', 'Square', 'PayPal', 'Plaid', 'Ramp', 'Brex'],
    'Education': ['Coursera', 'Khan Academy', 'Duolingo', 'edX', 'Skillshare'],
    'Engineering': ['Remote Engineering', 'Field Nation', 'Andela', 'Toptal', 'GitLab'],
    'Sales': ['Salesforce', 'HubSpot', 'Pipedrive', 'Outreach', 'ZoomInfo', 'LinkedIn Sales Navigator'],
    'Human Resources': ['Workday', 'BambooHR', 'Gusto', 'Rippling', 'Deel'],
    'Customer Service': ['Zendesk', 'Intercom', 'Freshdesk', 'Help Scout', 'LiveChat'],
    'Writing': ['Upwork', 'Fiverr', 'Contena', 'ProBlogger', 'Medium'],
    'Design': ['99designs', 'Dribbble', 'Behance', 'Figma Community', 'Adobe Stock'],
    'Consulting': ['McKinsey', 'Deloitte', 'Accenture', 'Bain', 'BCG', 'EY']
  };
  
  return companies[category] || [];
}
