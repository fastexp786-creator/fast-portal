import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Fast Job Career",
  description: "Join the Fast Job Career team. Explore career opportunities, company culture, and benefits. Build your future with a growing global platform.",
  keywords: "careers, jobs, employment, work at fast job career, company culture",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Careers at Fast Job Career
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our mission to connect talent with opportunity worldwide. 
            We're building the future of recruitment and we want you to be part of it.
          </p>
        </div>

        {/* Why Join Us */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Work at Fast Job Career?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Global Impact</h3>
              <p className="text-gray-600 text-sm">
                Help millions of people find their dream jobs across 50+ countries
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                Work with cutting-edge technology and shape the future of recruitment
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Growth</h3>
              <p className="text-gray-600 text-sm">
                Develop your skills and advance your career in a fast-growing company
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Flexibility</h3>
              <p className="text-gray-600 text-sm">
                Enjoy remote work options and flexible working arrangements
              </p>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Open Positions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Senior Frontend Developer */}
            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Senior Frontend Developer</h3>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Full-time</span>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-blue-600">📍</span>
                  Islamabad, Pakistan (Remote Optional)
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-blue-600">💰</span>
                  $80,000 - $120,000 per year
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-blue-600">🎯</span>
                  5+ years experience
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                We're looking for an experienced frontend developer to join our engineering team. 
                You'll work on our core platform, implementing new features and improving user experience.
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                Apply Now
              </button>
            </div>

            {/* Product Manager */}
            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Product Manager</h3>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Full-time</span>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-blue-600">📍</span>
                  Dubai, UAE (Hybrid)
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-blue-600">💰</span>
                  $90,000 - $140,000 per year
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-blue-600">🎯</span>
                  7+ years experience
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Lead our product development strategy and work closely with engineering, design, and 
                marketing teams to deliver exceptional user experiences.
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                Apply Now
              </button>
            </div>

            {/* Marketing Specialist */}
            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Marketing Specialist</h3>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Full-time</span>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-blue-600">📍</span>
                  Islamabad, Pakistan (Remote Optional)
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-blue-600">💰</span>
                  $60,000 - $80,000 per year
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-blue-600">🎯</span>
                  3+ years experience
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Drive our marketing initiatives and help us reach millions of job seekers and employers 
                worldwide through innovative digital marketing strategies.
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                Apply Now
              </button>
            </div>

            {/* Customer Success Manager */}
            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Customer Success Manager</h3>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Full-time</span>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-blue-600">📍</span>
                  Riyadh, Saudi Arabia (Remote Optional)
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-blue-600">💰</span>
                  $70,000 - $100,000 per year
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-blue-600">🎯</span>
                  4+ years experience
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Ensure our clients achieve their recruitment goals and provide exceptional support throughout 
                their journey with Fast Job Career.
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                Apply Now
              </button>
            </div>

            {/* Data Analyst */}
            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Data Analyst</h3>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Full-time</span>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-blue-600">📍</span>
                  London, UK (Remote Optional)
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-blue-600">💰</span>
                  $65,000 - $85,000 per year
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-blue-600">🎯</span>
                  2+ years experience
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Analyze platform data to provide insights that drive business decisions and improve 
                user experience for millions of job seekers and employers.
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                Apply Now
              </button>
            </div>

            {/* UX/UI Designer */}
            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">UX/UI Designer</h3>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Full-time</span>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-blue-600">📍</span>
                  Islamabad, Pakistan (Remote Optional)
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-blue-600">💰</span>
                  $55,000 - $75,000 per year
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-blue-600">🎯</span>
                  3+ years experience
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Create beautiful, intuitive interfaces that make job searching and recruitment 
                effortless and enjoyable for our global user base.
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </div>

        {/* Company Culture */}
        <div className="bg-blue-50 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Our Culture & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-bold text-blue-900 mb-2">Mission-Driven</h3>
              <p className="text-blue-800 text-sm">
                We're united by our mission to connect talent with opportunity globally
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-bold text-blue-900 mb-2">Collaborative</h3>
              <p className="text-blue-800 text-sm">
                We believe in teamwork and supporting each other to achieve great things
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="font-bold text-blue-900 mb-2">Innovative</h3>
              <p className="text-blue-800 text-sm">
                We encourage creativity and new ideas to solve complex challenges
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="font-bold text-blue-900 mb-2">Inclusive</h3>
              <p className="text-blue-800 text-sm">
                We celebrate diversity and create an environment where everyone belongs
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Benefits & Perks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Health & Wellness</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-gray-700">Comprehensive health insurance</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-gray-700">Dental and vision coverage</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-gray-700">Mental health support</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-gray-700">Gym membership</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Work-Life Balance</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-gray-700">Flexible working hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-gray-700">Remote work options</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-gray-700">Unlimited PTO</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-gray-700">Parental leave</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Financial Growth</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-gray-700">Competitive salary</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-gray-700">Stock options</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-gray-700">Performance bonuses</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-gray-700">Annual salary reviews</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Professional Development</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-gray-700">Training budget</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-gray-700">Conference attendance</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-gray-700">Career advancement</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-gray-700">Mentorship programs</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gray-900 text-white rounded-xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Join Our Team?
            </h2>
            <p className="text-gray-300 mb-6">
              We're always looking for talented individuals who share our passion for connecting 
              people with opportunities. If you don't see a position that fits, send us your resume.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                View All Positions
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Send Resume
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Fast Job Career is an equal opportunity employer. We celebrate diversity and are 
              committed to creating an inclusive environment for all employees.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
