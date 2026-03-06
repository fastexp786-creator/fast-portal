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
          </div>
        </div>

        {/* Newsletter Signup */}
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
  );
}
