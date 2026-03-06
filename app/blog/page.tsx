<<<<<<< HEAD
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import StandardPageLayout, { generateStandardMetadata } from "@/components/StandardPageLayout";

export const metadata: Metadata = generateStandardMetadata(
  "Career Blog & Insights",
  "Read the latest career advice, job search tips, industry insights, and professional development articles from Fast Job Career experts.",
  "blog"
);

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Top 10 Skills in Demand for Gulf Jobs in 2024",
      excerpt: "Discover the most sought-after skills that employers in Gulf countries are looking for this year. From digital literacy to soft skills, learn what can make your resume stand out.",
      category: "Career Tips",
      date: "March 1, 2024",
      readTime: "5 min read",
      author: "Career Experts"
    },
    {
      title: "How to Ace Your Virtual Job Interview",
      excerpt: "Master the art of virtual interviews with our comprehensive guide covering preparation, technical setup, body language, and follow-up strategies for online job interviews.",
      category: "Interview Tips",
      date: "February 28, 2024",
      readTime: "7 min read",
      author: "HR Team"
    },
    {
      title: "Understanding Work Visa Requirements for Middle East",
      excerpt: "Complete guide to work visa processes for Gulf countries including documentation, processing times, and common challenges faced by international job seekers.",
      category: "Immigration",
      date: "February 25, 2024",
      readTime: "10 min read",
      author: "Legal Team"
    },
    {
      title: "Salary Negotiation Tips for International Jobs",
      excerpt: "Learn effective salary negotiation strategies specifically tailored for international job offers, including benefits, allowances, and cost of living considerations.",
      category: "Salary Guide",
      date: "February 22, 2024",
      readTime: "6 min read",
      author: "Career Advisors"
    },
    {
      title: "Building a Professional Network Abroad",
      excerpt: "Strategies for establishing professional connections in a new country, including networking events, online platforms, and cultural considerations for international professionals.",
      category: "Networking",
      date: "February 20, 2024",
      readTime: "8 min read",
      author: "Community Team"
    },
    {
      title: "Resume Writing Guide for Gulf Job Market",
      excerpt: "Tailor your resume specifically for Gulf employers with formatting tips, content guidelines, and cultural considerations that can significantly impact your job application success.",
      category: "Resume Tips",
      date: "February 18, 2024",
      readTime: "9 min read",
      author: "Resume Experts"
    }
  ];

  return (
    <StandardPageLayout
      title="Career Blog & Insights"
      description="Read the latest career advice, job search tips, industry insights, and professional development articles from Fast Job Career experts."
      activeSlug="blog"
    >
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Career Resources
          </p>
          <h1 className="mt-3 text-3xl font-black text-black md:text-4xl">
            Career Blog & Insights
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-standard">
            Expert advice, industry insights, and career development resources to help you succeed in the global job market.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12 card-standard p-8">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded">
              Featured
            </span>
          </div>
          <h2 className="heading-standard text-xl">
            The Ultimate Guide to International Job Hunting in 2024
          </h2>
          <p className="mb-6 text-standard">
            Navigating the international job market requires strategy, preparation, and the right resources. Our comprehensive guide covers everything from identifying opportunities in target countries to preparing applications that stand out to international employers. Learn about visa requirements, cultural considerations, and how to leverage Fast Job Career's platform to maximize your global career prospects.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>By Editorial Team</span>
              <span>•</span>
              <span>March 5, 2024</span>
              <span>•</span>
              <span>12 min read</span>
            </div>
            <a href="#" className="text-sm text-blue-400 hover:text-blue-300">Read Full Article →</a>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post, index) => (
            <article key={index} className="card-standard p-6">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-gray-700 text-gray-300 text-xs font-semibold rounded">
                  {post.category}
                </span>
              </div>
              <h3 className="heading-standard text-base">
                <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                  {post.title}
                </a>
              </h3>
              <p className="text-standard line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <span>{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Categories */}
        <div className="mt-12">
          <h2 className="heading-standard text-xl">Browse by Category</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <a href="#" className="card-standard p-4 hover:bg-gray-750 transition-colors duration-200">
              <h3 className="heading-standard text-base">Career Tips</h3>
              <p className="text-standard text-sm">25 articles</p>
            </a>
            <a href="#" className="card-standard p-4 hover:bg-gray-750 transition-colors duration-200">
              <h3 className="heading-standard text-base">Interview Tips</h3>
              <p className="text-standard text-sm">18 articles</p>
            </a>
            <a href="#" className="card-standard p-4 hover:bg-gray-750 transition-colors duration-200">
              <h3 className="heading-standard text-base">Immigration</h3>
              <p className="text-standard text-sm">12 articles</p>
            </a>
            <a href="#" className="card-standard p-4 hover:bg-gray-750 transition-colors duration-200">
              <h3 className="heading-standard text-base">Salary Guide</h3>
              <p className="text-standard text-sm">15 articles</p>
            </a>
            <a href="#" className="card-standard p-4 hover:bg-gray-750 transition-colors duration-200">
              <h3 className="heading-standard text-base">Networking</h3>
              <p className="text-standard text-sm">8 articles</p>
            </a>
            <a href="#" className="card-standard p-4 hover:bg-gray-750 transition-colors duration-200">
              <h3 className="heading-standard text-base">Resume Tips</h3>
              <p className="text-standard text-sm">20 articles</p>
            </a>
=======
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
>>>>>>> 41688e380ae2423c33f9925fc219c32e6d456521
          </div>
        </div>

        {/* Newsletter Signup */}
<<<<<<< HEAD
        <div className="mb-12 card-standard">
          <h2 className="heading-standard text-xl text-center">Stay Updated with Career Insights</h2>
          <p className="mb-6 text-center text-standard">
            Get the latest career advice, job market trends, and exclusive resources delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-standard flex-1 min-w-200"
              />
              <button
                type="submit"
                className="btn-standard"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Additional Content for 300+ words */}
        <div className="mt-12 space-y-6 text-sm text-standard">
          <section>
            <h2 className="heading-standard text-xl">Our Expert Contributors</h2>
            <p>
              The Fast Job Career blog features insights from industry experts, HR professionals, career coaches, and successful job seekers who have navigated the international job market. Our contributors bring real-world experience and practical knowledge to help you make informed career decisions.
            </p>
            <p>
              Our editorial team ensures that all content is thoroughly researched, fact-checked, and relevant to current job market trends. We regularly update our blog with fresh perspectives, emerging opportunities, and actionable advice that you can implement immediately in your job search journey.
            </p>
          </section>

          <section>
            <h2 className="heading-standard text-xl">Topics We Cover</h2>
            <p>
              Our comprehensive blog covers everything from basic job search strategies to advanced career development techniques. Topics include resume writing, interview preparation, salary negotiation, workplace culture, visa processes, and industry-specific guidance for sectors like healthcare, technology, construction, and hospitality.
            </p>
            <p>
              We also address challenges specific to international job seekers, such as cultural adaptation, remote work opportunities, and building professional networks in new countries. Our goal is to provide a complete resource hub that addresses every aspect of your international career journey.
            </p>
          </section>

          <section>
            <h2 className="heading-standard text-xl">Community Engagement</h2>
            <p>
              We encourage our readers to engage with our content through comments, questions, and topic suggestions. Your feedback helps us create more relevant and helpful content. Many of our blog posts include discussion prompts and opportunities to connect with other job seekers facing similar challenges.
            </p>
            <p>
              Join our growing community of international professionals who are leveraging Fast Job Career's resources to achieve their career goals. Share your experiences, learn from others, and stay connected with the latest developments in the global job market through our regularly updated blog and newsletter.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400">
            Have a topic you'd like us to cover? <a href="mailto:blog@fastjobcareer.com" className="text-blue-400 hover:text-blue-300">Contact our editorial team</a>
          </p>
        </div>
      </div>
    </StandardPageLayout>
=======
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
>>>>>>> 41688e380ae2423c33f9925fc219c32e6d456521
  );
}
