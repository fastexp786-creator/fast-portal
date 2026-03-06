import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability | Fast Job Career",
  description: "Fast Job Career's commitment to environmental sustainability, social responsibility, and ethical business practices. Learn about our green initiatives and community impact.",
  keywords: "sustainability, corporate social responsibility, environmental impact, green business, ethical practices",
};

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sustainability & Social Responsibility
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Fast Job Career, we're committed to making a positive impact on society and 
            the environment. Discover how we're building a sustainable future while connecting 
            talent with opportunity worldwide.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 mb-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🌍</span>
            </div>
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              Our Sustainability Commitment
            </h2>
            <p className="text-green-800 text-lg max-w-2xl mx-auto">
              "We believe that business success and environmental responsibility go hand in hand. 
              Our mission is to create sustainable value for all stakeholders while minimizing 
              our ecological footprint and maximizing positive social impact."
            </p>
          </div>
        </div>

        {/* Sustainability Pillars */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Sustainability Pillars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Environmental Impact</h3>
              <p className="text-gray-600 text-sm">
                Reducing carbon footprint through digital-first operations
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Social Responsibility</h3>
              <p className="text-gray-600 text-sm">
                Creating economic opportunities and supporting communities
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ethical Governance</h3>
              <p className="text-gray-600 text-sm">
                Maintaining high standards of integrity and transparency
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Stakeholder Value</h3>
              <p className="text-gray-600 text-sm">
                Delivering long-term value to all partners and users
              </p>
            </div>
          </div>
        </div>

        {/* Environmental Initiatives */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Environmental Initiatives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Carbon Reduction</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Digital-First Operations</h4>
                    <p className="text-gray-600 text-sm">
                      100% cloud-based infrastructure reducing physical office footprint by 75%
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Remote Work Culture</h4>
                    <p className="text-gray-600 text-sm">
                      60% of workforce works remotely, reducing commute emissions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Green Hosting</h4>
                    <p className="text-gray-600 text-sm">
                      Powered by 100% renewable energy data centers
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Paperless Operations</h4>
                    <p className="text-gray-600 text-sm">
                      95% reduction in paper usage through digital processes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Resource Conservation</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Energy Efficiency</h4>
                    <p className="text-gray-600 text-sm">
                      Energy-efficient servers and optimized algorithms reducing power consumption
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Sustainable Partnerships</h4>
                    <p className="text-gray-600 text-sm">
                      Working with eco-friendly vendors and green technology providers
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Waste Reduction</h4>
                    <p className="text-gray-600 text-sm">
                      Comprehensive recycling and waste minimization programs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Impact */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Social Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Economic Empowerment</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Job Creation</h4>
                    <p className="text-gray-600 text-sm">
                      Helped 500,000+ people find jobs in 50+ countries
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Skills Development</h4>
                    <p className="text-gray-600 text-sm">
                      Free training programs for underserved communities
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Fair Wage Advocacy</h4>
                    <p className="text-gray-600 text-sm">
                      Promoting transparent compensation practices globally
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Community Support</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Education Programs</h4>
                    <p className="text-gray-600 text-sm">
                      Partnerships with schools and vocational training centers
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Diversity Initiatives</h4>
                    <p className="text-gray-600 text-sm">
                      Programs supporting underrepresented groups in tech
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Disaster Relief</h4>
                    <p className="text-gray-600 text-sm">
                      Emergency support and relief funds for affected communities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Goals & Targets */}
        <div className="bg-blue-50 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            2025 Sustainability Goals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-bold text-blue-900 mb-2">Carbon Neutral by 2026</h3>
              <p className="text-blue-800 text-sm">
                Achieve net-zero carbon emissions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">♻️</span>
              </div>
              <h3 className="font-bold text-blue-900 mb-2">100% Renewable Energy</h3>
              <p className="text-blue-800 text-sm">
                Power all operations with clean energy
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="font-bold text-blue-900 mb-2">1M Jobs Created</h3>
              <p className="text-blue-800 text-sm">
                Help one million people find employment
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="font-bold text-blue-900 mb-2">Zero Waste Operations</h3>
              <p className="text-blue-800 text-sm">
                Eliminate waste through circular economy practices
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-bold text-blue-900 mb-2">ESG Excellence</h3>
              <p className="text-blue-800 text-sm">
                Achieve top ESG ratings in our industry
              </p>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Impact So Far
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">500K+</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Jobs Created</h3>
              <p className="text-gray-600 text-sm">
                Direct employment opportunities
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">75%</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Carbon Reduced</h3>
              <p className="text-gray-600 text-sm">
                Lower emissions vs traditional models
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">10M+</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Trees Planted</h3>
              <p className="text-gray-600 text-sm">
                Reforestation initiatives
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Communities Supported</h3>
              <p className="text-gray-600 text-sm">
                Global community programs
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gray-900 text-white rounded-xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Join Our Sustainability Journey
            </h2>
            <p className="text-gray-300 mb-6">
              Together, we can create a more sustainable future. Whether you're a job seeker, 
              employer, or partner, your choices matter. Let's build a better world 
              while connecting talent with opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Learn More About Our Impact
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Partner With Us
              </button>
            </div>
            <div className="mt-6 text-gray-400 text-sm">
              📧 sustainability@fastjobcareer.com for partnerships and inquiries
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
