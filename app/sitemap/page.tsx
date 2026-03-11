import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sitemap | Fast Job Career',
  description: 'Complete sitemap of Fast Job Career website. Find all pages, services, and sections including jobs, travel services, visa assistance, and career opportunities.',
  keywords: 'sitemap, Fast Job Career, website navigation, jobs, travel, visa, career, all pages',
  openGraph: {
    title: 'Sitemap | Fast Job Career',
    description: 'Complete sitemap of Fast Job Career website. Find all pages, services, and sections.',
    type: 'website',
  },
};

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Sitemap</h1>
          <p className="text-lg text-gray-600 mb-8">
            Navigate through all pages and sections of Fast Job Career website. Find everything from job listings to travel services.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Main Pages */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Main Pages</h2>
              <ul className="space-y-2">
                <li><a href="/" className="text-blue-600 hover:text-blue-800">Home</a></li>
                <li><a href="/about" className="text-blue-600 hover:text-blue-800">About Us</a></li>
                <li><a href="/contact" className="text-blue-600 hover:text-blue-800">Contact</a></li>
                <li><a href="/faq" className="text-blue-600 hover:text-blue-800">FAQ</a></li>
                <li><a href="/blog" className="text-blue-600 hover:text-blue-800">Blog</a></li>
                <li><a href="/help-center" className="text-blue-600 hover:text-blue-800">Help Center</a></li>
              </ul>
            </div>

            {/* Job Pages */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Jobs & Careers</h2>
              <ul className="space-y-2">
                <li><a href="/find-jobs" className="text-blue-600 hover:text-blue-800">Find Jobs</a></li>
                <li><a href="/jobs" className="text-blue-600 hover:text-blue-800">All Jobs</a></li>
                <li><a href="/jobs-by-country" className="text-blue-600 hover:text-blue-800">Jobs by Country</a></li>
                <li><a href="/jobs-by-city" className="text-blue-600 hover:text-blue-800">Jobs by City</a></li>
                <li><a href="/jobs-by-industry" className="text-blue-600 hover:text-blue-800">Jobs by Industry</a></li>
                <li><a href="/popular-jobs" className="text-blue-600 hover:text-blue-800">Popular Jobs</a></li>
                <li><a href="/remote-jobs" className="text-blue-600 hover:text-blue-800">Remote Jobs</a></li>
                <li><a href="/companies" className="text-blue-600 hover:text-blue-800">Companies</a></li>
              </ul>
            </div>

            {/* Travel Services */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Travel Services</h2>
              <ul className="space-y-2">
                <li><a href="/travel" className="text-blue-600 hover:text-blue-800">Travel</a></li>
                <li><a href="/services/air-tickets" className="text-blue-600 hover:text-blue-800">Air Tickets</a></li>
                <li><a href="/services/visit-visa-tours" className="text-blue-600 hover:text-blue-800">Visit Visa & Tours</a></li>
                <li><a href="/services/umrah-2026" className="text-blue-600 hover:text-blue-800">Umrah 2026</a></li>
                <li><a href="/services/luxury-stays" className="text-blue-600 hover:text-blue-800">Luxury Stays</a></li>
                <li><a href="/services/cruise-cloud" className="text-blue-600 hover:text-blue-800">Cruise Cloud</a></li>
                <li><a href="/flights" className="text-blue-600 hover:text-blue-800">Flights</a></li>
                <li><a href="/car-rental" className="text-blue-600 hover:text-blue-800">Car Rental</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Categories</h2>
              <ul className="space-y-2">
                <li><a href="/categories" className="text-blue-600 hover:text-blue-800">All Categories</a></li>
                <li><a href="/sections" className="text-blue-600 hover:text-blue-800">Sections</a></li>
                <li><a href="/deals" className="text-blue-600 hover:text-blue-800">Deals</a></li>
                <li><a href="/resource-hub" className="text-blue-600 hover:text-blue-800">Resource Hub</a></li>
                <li><a href="/partner" className="text-blue-600 hover:text-blue-800">Partners</a></li>
                <li><a href="/business" className="text-blue-600 hover:text-blue-800">Business</a></li>
              </ul>
            </div>

            {/* Authentication */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Account</h2>
              <ul className="space-y-2">
                <li><a href="/auth/login" className="text-blue-600 hover:text-blue-800">Login</a></li>
                <li><a href="/auth/register" className="text-blue-600 hover:text-blue-800">Register</a></li>
                <li><a href="/auth/register/seeker" className="text-blue-600 hover:text-blue-800">Job Seeker Registration</a></li>
                <li><a href="/auth/vendor-register" className="text-blue-600 hover:text-blue-800">Employer Registration</a></li>
                <li><a href="/dashboard" className="text-blue-600 hover:text-blue-800">Dashboard</a></li>
                <li><a href="/admin/dashboard" className="text-blue-600 hover:text-blue-800">Admin Dashboard</a></li>
              </ul>
            </div>

            {/* Legal & Support */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Legal & Support</h2>
              <ul className="space-y-2">
                <li><a href="/terms" className="text-blue-600 hover:text-blue-800">Terms of Service</a></li>
                <li><a href="/privacy" className="text-blue-600 hover:text-blue-800">Privacy Policy</a></li>
                <li><a href="/safety" className="text-blue-600 hover:text-blue-800">Safety Guidelines</a></li>
                <li><a href="/accessibility" className="text-blue-600 hover:text-blue-800">Accessibility</a></li>
                <li><a href="/modern-slavery" className="text-blue-600 hover:text-blue-800">Modern Slavery Statement</a></li>
                <li><a href="/human-rights" className="text-blue-600 hover:text-blue-800">Human Rights Policy</a></li>
                <li><a href="/report-issue" className="text-blue-600 hover:text-blue-800">Report an Issue</a></li>
                <li><a href="/restaurants" className="text-blue-600 hover:text-blue-800">Restaurant Partners</a></li>
              </ul>
            </div>

            {/* Programs */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Programs</h2>
              <ul className="space-y-2">
                <li><a href="/genius-program" className="text-blue-600 hover:text-blue-800">Genius Program</a></li>
                <li><a href="/awards" className="text-blue-600 hover:text-blue-800">Awards</a></li>
                <li><a href="/investors" className="text-blue-600 hover:text-blue-800">Investors</a></li>
                <li><a href="/investor-relations" className="text-blue-600 hover:text-blue-800">Investor Relations</a></li>
                <li><a href="/affiliate-program" className="text-blue-600 hover:text-blue-800">Affiliate Program</a></li>
                <li><a href="/become-affiliate" className="text-blue-600 hover:text-blue-800">Become Affiliate</a></li>
                <li><a href="/become-partner" className="text-blue-600 hover:text-blue-800">Become Partner</a></li>
              </ul>
            </div>

            {/* Technical Pages */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Technical</h2>
              <ul className="space-y-2">
                <li><a href="/robots.txt" className="text-blue-600 hover:text-blue-800">Robots.txt</a></li>
                <li><a href="/sitemap.xml" className="text-blue-600 hover:text-blue-800">XML Sitemap</a></li>
                <li><a href="/api/jobs" className="text-blue-600 hover:text-blue-800">Jobs API</a></li>
                <li><a href="/api/rss-jobs" className="text-blue-600 hover:text-blue-800">RSS Jobs Feed</a></li>
                <li><a href="/api/email" className="text-blue-600 hover:text-blue-800">Email API</a></li>
                <li><a href="/api/flights/search" className="text-blue-600 hover:text-blue-800">Flights Search API</a></li>
              </ul>
            </div>

            {/* Additional Services */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">More Services</h2>
              <ul className="space-y-2">
                <li><a href="/advertise" className="text-blue-600 hover:text-blue-800">Advertise</a></li>
                <li><a href="/apps" className="text-blue-600 hover:text-blue-800">Mobile Apps</a></li>
                <li><a href="/careers" className="text-blue-600 hover:text-blue-800">Careers at Fast Job Career</a></li>
                <li><a href="/press" className="text-blue-600 hover:text-blue-800">Press & Media</a></li>
                <li><a href="/legal" className="text-blue-600 hover:text-blue-800">Legal Information</a></li>
                <li><a href="/cookies" className="text-blue-600 hover:text-blue-800">Cookie Policy</a></li>
                <li><a href="/sustainability" className="text-blue-600 hover:text-blue-800">Sustainability</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">About Fast Job Career Sitemap</h2>
            <p className="text-gray-600 mb-4">
              This comprehensive sitemap provides easy access to all pages and sections of the Fast Job Career website. 
              Whether you're looking for job opportunities, travel services, or company information, you'll find everything organized here for your convenience.
            </p>
            <p className="text-gray-600">
              Fast Job Career is your one-stop platform for jobs, travel services, visa assistance, and career opportunities. 
              We connect job seekers with employers and provide comprehensive travel solutions for international opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
