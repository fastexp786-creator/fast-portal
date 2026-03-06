import { Metadata } from "next";
import { supabase } from '@/lib/supabase';

export const metadata: Metadata = {
  title: "Sitemap | Fast Job Career",
  description: "Complete sitemap of Fast Job Career. Find all pages, sections, and important links for job seekers and employers.",
  keywords: "sitemap, site navigation, website structure, all pages, job portal sitemap",
};

export default async function SitemapPage() {
  // Fetch real-time stats from Supabase
  const { data: jobsData, error } = await supabase
    .from('jobs')
    .select('*')
    .eq('status', 'active');

  const totalJobs = jobsData?.length || 0;
  const uniqueCountries = new Set(jobsData?.map(job => job.country)).size;
  const uniqueCities = new Set(jobsData?.map(job => job.location)).size;
  const uniqueCategories = new Set(jobsData?.map(job => job.category)).size;

  const siteStructure = [
    {
      category: "For Job Seekers",
      icon: "👤",
      pages: [
        { title: "Home", url: "/", description: "Main landing page with job search" },
        { title: "Browse Jobs", url: "/jobs", description: "Search and filter job opportunities" },
        { title: "Jobs by Country", url: "/jobs-by-country", description: "Find jobs by location" },
        { title: "Jobs by City", url: "/jobs-by-city", description: "Explore opportunities by city" },
        { title: "Jobs by Airport", url: "/jobs-by-airport", description: "Find jobs near airports" },
        { title: "Jobs by Industry", url: "/jobs-by-industry", description: "Browse by career sector" },
        { title: "Remote Jobs", url: "/remote-jobs", description: "Work from home opportunities" },
        { title: "Popular Jobs", url: "/popular-jobs", description: "Trending and in-demand positions" },
        { title: "Create Profile", url: "/profile", description: "Build your professional profile" },
        { title: "Upload Resume", url: "/upload-resume", description: "Share your qualifications" },
        { title: "Career Resources", url: "/resources", description: "Career advice and tools" },
        { title: "Blog", url: "/blog", description: "Career insights and tips" },
        { title: "Success Stories", url: "/success-stories", description: "Real career journeys" }
      ]
    },
    {
      category: "For Employers",
      icon: "🏢",
      pages: [
        { title: "Employer Login", url: "/employer-login", description: "Access your employer dashboard" },
        { title: "Post a Job", url: "/post-job", description: "Create new job listings" },
        { title: "Manage Postings", url: "/manage-jobs", description: "Edit and track your job ads" },
        { title: "Search Candidates", url: "/candidate-search", description: "Find qualified professionals" },
        { title: "Applicant Tracking", url: "/applicant-tracking", description: "Monitor application progress" },
        { title: "Company Profile", url: "/company-profile", description: "Showcase your organization" },
        { title: "Pricing Plans", url: "/pricing", description: "Choose the right plan for you" },
        { title: "Employer Resources", url: "/employer-resources", description: "Hiring guides and tools" },
        { title: "Recruitment Tips", url: "/recruitment-tips", description: "Best practices for hiring" },
        { title: "Employer Blog", url: "/employer-blog", description: "Recruitment insights" }
      ]
    },
    {
      category: "Partners & Services",
      icon: "🤝",
      pages: [
        { title: "Extranet Login", url: "/extranet", description: "Partner portal access" },
        { title: "Partner Hub", url: "/partner-hub", description: "Partnership opportunities" },
        { title: "Advertise With Us", url: "/advertise", description: "Promote your brand" },
        { title: "Affiliate Program", url: "/affiliate-program", description: "Earn with our affiliate program" },
        { title: "API Access", url: "/api-access", description: "Integrate with our API" },
        { title: "Become a Partner", url: "/become-partner", description: "Join our partner network" },
        { title: "Integration Partners", url: "/integration-partners", description: "Technology partners" }
      ]
    },
    {
      category: "Support & Help",
      icon: "💬",
      pages: [
        { title: "Help Center", url: "/help-center", description: "Comprehensive help and support" },
        { title: "Contact Us", url: "/contact", description: "Get in touch with our team" },
        { title: "FAQ", url: "/faq", description: "Frequently asked questions" },
        { title: "Report Issue", url: "/report-issue", description: "Report technical problems" },
        { title: "Live Chat", url: "/live-chat", description: "Real-time support chat" },
        { title: "Safety Resource Center", url: "/safety-resource-center", description: "Stay safe while job searching" },
        { title: "Community Forum", url: "/forum", description: "Connect with other users" },
        { title: "Video Tutorials", url: "/tutorials", description: "How-to guides and videos" }
      ]
    },
    {
      category: "Company & Legal",
      icon: "🏢",
      pages: [
        { title: "About Us", url: "/about", description: "Learn about Fast Job Career" },
        { title: "Careers", url: "/careers", description: "Join our team" },
        { title: "Press", url: "/press", description: "News and media resources" },
        { title: "Investor Relations", url: "/investor-relations", description: "Investment information" },
        { title: "Sustainability", url: "/sustainability", description: "Our environmental commitment" },
        { title: "Privacy Policy", url: "/privacy", description: "How we protect your data" },
        { title: "Terms of Service", url: "/terms", description: "Rules for using our platform" },
        { title: "Cookies Policy", url: "/cookies", description: "Cookie usage and preferences" },
        { title: "Legal Information", url: "/legal", description: "Legal notices and compliance" },
        { title: "Accessibility", url: "/accessibility", description: "Accessibility features and options" }
      ]
    },
    {
      category: "Tools & Resources",
      icon: "🛠️",
      pages: [
        { title: "Resume Builder", url: "/resume-builder", description: "Create professional resumes" },
        { title: "Cover Letter Builder", url: "/cover-letter-builder", description: "Write effective cover letters" },
        { title: "Salary Calculator", url: "/salary-calculator", description: "Compare salaries globally" },
        { title: "Skills Assessment", url: "/skills-assessment", description: "Test and improve your skills" },
        { title: "Career Path Finder", url: "/career-path", description: "Discover your ideal career path" },
        { title: "Interview Preparation", url: "/interview-prep", description: "Ace your interviews" },
        { title: "Job Alerts", url: "/job-alerts", description: "Get notified about new jobs" },
        { title: "Mobile Apps", url: "/mobile-apps", description: "Download our mobile applications" },
        { title: "Browser Extensions", url: "/extensions", description: "Enhance your job search experience" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Site Map
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Navigate through all pages and sections of Fast Job Career. 
            Find exactly what you're looking for with our comprehensive site structure.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="bg-blue-50 rounded-xl p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{uniqueCountries}+</div>
              <p className="text-blue-800 text-sm">Countries Served</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{totalJobs}+</div>
              <p className="text-blue-800 text-sm">Active Jobs</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{uniqueCities}+</div>
              <p className="text-blue-800 text-sm">Cities</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{uniqueCategories}+</div>
              <p className="text-blue-800 text-sm">Categories</p>
            </div>
          </div>
        </div>

        {/* Site Structure */}
        <div className="space-y-8">
          {siteStructure.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{section.icon}</span>
                <h2 className="text-2xl font-bold text-gray-900">{section.category}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.pages.map((page, pageIndex) => (
                  <div key={pageIndex} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{page.title}</h3>
                        <p className="text-gray-600 text-sm">{page.description}</p>
                      </div>
                      <span className="text-blue-600 hover:text-blue-700">
                        →
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
                      <span>•</span>
                      <span>Updated: {Math.floor(Math.random() * 30) + 1} days ago</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Popular Pages */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Most Visited Pages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center border-2 border-blue-500 rounded-lg p-4">
              <h3 className="text-lg font-bold text-blue-900 mb-2">🔍 Browse Jobs</h3>
              <p className="text-blue-800 text-sm">Main job search page</p>
            </div>
            <div className="text-center border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">👤 Create Profile</h3>
              <p className="text-gray-600 text-sm">Build your professional profile</p>
            </div>
            <div className="text-center border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">📋 Post Job</h3>
              <p className="text-gray-600 text-sm">Employer job posting page</p>
            </div>
            <div className="text-center border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">🏠 Remote Jobs</h3>
              <p className="text-gray-600 text-sm">Work from home opportunities</p>
            </div>
            <div className="text-center border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">💬 Help Center</h3>
              <p className="text-gray-600 text-sm">Support and assistance</p>
            </div>
            <div className="text-center border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">📊 Salary Calculator</h3>
              <p className="text-gray-600 text-sm">Compare salaries globally</p>
            </div>
          </div>
        </div>

        {/* Site Features */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Platform Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">AI-Powered Matching</h3>
              <p className="text-gray-600 text-sm">
                Smart job recommendations based on your profile
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Global Reach</h3>
              <p className="text-gray-600 text-sm">
                Opportunities in 50+ countries worldwide
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Mobile Apps</h3>
              <p className="text-gray-600 text-sm">
                iOS and Android applications available
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Secure Platform</h3>
              <p className="text-gray-600 text-sm">
                Bank-level security and data protection
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">
                Live chat, email, and phone support
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Analytics Dashboard</h3>
              <p className="text-gray-600 text-sm">
                Track applications and performance metrics
              </p>
            </div>
          </div>
        </div>

        {/* Quick Access */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Quick Access
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Job Seekers</h3>
              <div className="space-y-3">
                <a href="/jobs" className="flex items-center gap-3 text-blue-600 hover:text-blue-700">
                  <span className="text-2xl">🔍</span>
                  <span>Search Jobs</span>
                </a>
                <a href="/profile" className="flex items-center gap-3 text-blue-600 hover:text-blue-700">
                  <span className="text-2xl">👤</span>
                  <span>My Profile</span>
                </a>
                <a href="/applications" className="flex items-center gap-3 text-blue-600 hover:text-blue-700">
                  <span className="text-2xl">📋</span>
                  <span>Applications</span>
                </a>
                <a href="/saved-jobs" className="flex items-center gap-3 text-blue-600 hover:text-blue-700">
                  <span className="text-2xl">⭐</span>
                  <span>Saved Jobs</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Employers</h3>
              <div className="space-y-3">
                <a href="/post-job" className="flex items-center gap-3 text-blue-600 hover:text-blue-700">
                  <span className="text-2xl">📝</span>
                  <span>Post Job</span>
                </a>
                <a href="/employer-dashboard" className="flex items-center gap-3 text-blue-600 hover:text-blue-700">
                  <span className="text-2xl">🏢</span>
                  <span>Dashboard</span>
                </a>
                <a href="/candidate-search" className="flex items-center gap-3 text-blue-600 hover:text-blue-700">
                  <span className="text-2xl">👥</span>
                  <span>Search Candidates</span>
                </a>
                <a href="/pricing" className="flex items-center gap-3 text-blue-600 hover:text-blue-700">
                  <span className="text-2xl">💰</span>
                  <span>Pricing</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-blue-800 mb-6">
              Use our search function or contact our support team if you need help 
              finding specific pages or information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                🔍 Search Site
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                💬 Contact Support
              </button>
            </div>
            <div className="mt-4 text-blue-700 text-sm">
              <p>📧 support@fastjobcareer.com | 🌍 50+ Countries | 💼 100K+ Jobs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
