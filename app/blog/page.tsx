import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Fast Job Career",
  description: "Fast Job Career blog featuring career advice, job search tips, industry insights, and success stories. Expert guidance for job seekers and employers.",
  keywords: "career blog, job search tips, career advice, industry insights, professional development",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Career Blog & Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert advice, industry trends, and success stories to help you navigate your 
            career journey. From job searching to professional development, we've got you covered.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured Post 1 */}
            <article className="border-2 border-blue-500 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src="/blog/ai-job-searching.jpg" 
                  alt="AI Job Searching" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">Featured</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">AI & Tech</span>
                  <span className="text-gray-500 text-sm">March 15, 2026</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How AI is Revolutionizing Job Searching in 2026
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Discover how artificial intelligence is transforming the way job seekers find 
                  opportunities and employers connect with talent. Learn about the latest AI tools 
                  and strategies that are making job searching more efficient and personalized.
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                  Read More →
                </button>
              </div>
            </article>

            {/* Featured Post 2 */}
            <article className="border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src="/blog/interview-tips.jpg" 
                  alt="Interview Tips" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Interview Tips</span>
                  <span className="text-gray-500 text-sm">March 12, 2026</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  10 Essential Interview Tips for International Jobs
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Master the art of international job interviews with these proven strategies. 
                  From cultural awareness to technical preparation, learn how to stand out and 
                  secure your dream international position.
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                  Read More →
                </button>
              </div>
            </article>

            {/* Featured Post 3 */}
            <article className="border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src="/blog/resume-building.jpg" 
                  alt="Resume Building" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Career Advice</span>
                  <span className="text-gray-500 text-sm">March 10, 2026</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Building a Resume That Gets You Hired Internationally
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Learn how to create a compelling resume that stands out to international 
                  employers. Expert tips on formatting, keywords, and tailoring your experience 
                  for global opportunities.
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                  Read More →
                </button>
              </div>
            </article>
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">AI & Technology</h3>
              <p className="text-gray-600 text-sm mb-3">
                Latest tech trends and AI tools
              </p>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                View All (24) →
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">International Careers</h3>
              <p className="text-gray-600 text-sm mb-3">
                Global job opportunities and tips
              </p>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                View All (18) →
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Job Search Tips</h3>
              <p className="text-gray-600 text-sm mb-3">
                Strategies for effective job hunting
              </p>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                View All (32) →
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Resume & CV</h3>
              <p className="text-gray-600 text-sm mb-3">
                Resume writing and optimization
              </p>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                View All (15) →
              </button>
            </div>
          </div>
        </div>

        {/* Recent Posts */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Recent Articles
          </h2>
          <div className="space-y-8">
            {/* Recent Post 1 */}
            <article className="flex gap-6 pb-8 border-b border-gray-200">
              <img 
                src="/blog/remote-work-tips.jpg" 
                alt="Remote Work Tips" 
                className="w-32 h-32 object-cover rounded-lg flex-shrink-0"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Remote Work</span>
                  <span className="text-gray-500 text-sm">March 8, 2026</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  The Ultimate Guide to Remote International Work in 2026
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Everything you need to know about working remotely for international companies. 
                  From finding remote opportunities to succeeding in a distributed team environment.
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                  Read Full Article →
                </button>
              </div>
            </article>

            {/* Recent Post 2 */}
            <article className="flex gap-6 pb-8 border-b border-gray-200">
              <img 
                src="/blog/visa-guide.jpg" 
                alt="Visa Guide" 
                className="w-32 h-32 object-cover rounded-lg flex-shrink-0"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Immigration</span>
                  <span className="text-gray-500 text-sm">March 5, 2026</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Navigating Work Visas: Country-by-Country Guide 2026
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Comprehensive guide to work visa requirements for top destination countries. 
                  Includes application processes, required documents, and timeline expectations.
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                  Read Full Article →
                </button>
              </div>
            </article>

            {/* Recent Post 3 */}
            <article className="flex gap-6 pb-8 border-b border-gray-200">
              <img 
                src="/blog/salary-negotiation.jpg" 
                alt="Salary Negotiation" 
                className="w-32 h-32 object-cover rounded-lg flex-shrink-0"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Salary & Benefits</span>
                  <span className="text-gray-500 text-sm">March 1, 2026</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Salary Negotiation Strategies for International Job Offers
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Master the art of negotiating compensation packages for international positions. 
                  Learn how to evaluate offers, understand total compensation, and secure the best deal.
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                  Read Full Article →
                </button>
              </div>
            </article>

            {/* Recent Post 4 */}
            <article className="flex gap-6 pb-8">
              <img 
                src="/blog/cultural-tips.jpg" 
                alt="Cultural Tips" 
                className="w-32 h-32 object-cover rounded-lg flex-shrink-0"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Cultural Tips</span>
                  <span className="text-gray-500 text-sm">February 28, 2026</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Cultural Adaptation: Thriving in International Work Environments
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Essential tips for adapting to new cultural environments and succeeding in 
                  diverse international workplaces. Learn communication styles, workplace etiquette, and 
                  building cross-cultural relationships.
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                  Read Full Article →
                </button>
              </div>
            </article>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-blue-50 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Stay Updated
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Career Insights Newsletter</h3>
              <p className="text-blue-800 text-sm mb-4">
                Get weekly career tips, job search strategies, and industry trends delivered 
                directly to your inbox. Join 50,000+ professionals who are advancing their careers.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-blue-800 text-sm">Expert career advice</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-blue-800 text-sm">Exclusive job opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-blue-800 text-sm">Industry insights and trends</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-blue-800 text-sm">Free resources and templates</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-2">
                    Interests
                  </label>
                  <select className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Select your interests</option>
                    <option value="job-search">Job Search Tips</option>
                    <option value="career-advice">Career Advice</option>
                    <option value="international">International Careers</option>
                    <option value="technology">Technology & AI</option>
                    <option value="all">All Topics</option>
                  </select>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                  Subscribe to Newsletter
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gray-900 text-white rounded-xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Want to Contribute to Our Blog?
            </h2>
            <p className="text-gray-300 mb-6">
              Share your expertise and help thousands of job seekers advance their careers. 
              We're looking for industry experts, career coaches, and HR professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Become a Contributor
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                View Guidelines
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
