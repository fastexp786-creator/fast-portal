import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Relations | Fast Job Career",
  description: "Fast Job Career investor information, financial performance, and growth opportunities. Learn about our vision, metrics, and investment potential.",
  keywords: "investor relations, financial performance, investment, company growth, shareholder information",
};

export default function InvestorRelationsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Investor Relations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fast Job Career is transforming the global recruitment industry. Discover our growth story, 
            financial performance, and vision for connecting talent with opportunity worldwide.
          </p>
        </div>

        {/* Key Highlights */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Key Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5M+</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Active Users</h3>
              <p className="text-gray-600 text-sm">
                Growing 40% year-over-year
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">10K+</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Partner Companies</h3>
              <p className="text-gray-600 text-sm">
                Across 50+ countries
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Success Rate</h3>
              <p className="text-gray-600 text-sm">
                Industry-leading placement
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">300%</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Revenue Growth</h3>
              <p className="text-gray-600 text-sm">
                3-year compound growth
              </p>
            </div>
          </div>
        </div>

        {/* Financial Overview */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Financial Performance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Revenue Growth</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-gray-50 p-4 rounded">
                  <span className="text-gray-700">2023 Revenue</span>
                  <span className="font-bold text-green-600">$12.5M</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 p-4 rounded">
                  <span className="text-gray-700">2024 Revenue</span>
                  <span className="font-bold text-green-600">$18.7M</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 p-4 rounded">
                  <span className="text-gray-700">Growth Rate</span>
                  <span className="font-bold text-blue-600">+49.6%</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 p-4 rounded">
                  <span className="text-gray-700">2025 Projected</span>
                  <span className="font-bold text-purple-600">$28M</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Key Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-gray-50 p-4 rounded">
                  <span className="text-gray-700">Monthly Active Users</span>
                  <span className="font-bold text-blue-600">2.1M</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 p-4 rounded">
                  <span className="text-gray-700">Customer Acquisition Cost</span>
                  <span className="font-bold text-green-600">$4.50</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 p-4 rounded">
                  <span className="text-gray-700">Lifetime Value</span>
                  <span className="font-bold text-purple-600">$450</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 p-4 rounded">
                  <span className="text-gray-700">Gross Margin</span>
                  <span className="font-bold text-orange-600">78%</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 p-4 rounded">
                  <span className="text-gray-700">Monthly Recurring Revenue</span>
                  <span className="font-bold text-blue-600">$1.2M</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Thesis */}
        <div className="bg-blue-50 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Why Invest in Fast Job Career?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="font-bold text-blue-900 mb-2">Massive Market</h3>
              <p className="text-blue-800 text-sm">
                $500B+ global recruitment market
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-bold text-blue-900 mb-2">High Growth</h3>
              <p className="text-blue-800 text-sm">
                300%+ revenue growth rate
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="font-bold text-blue-900 mb-2">Technology Advantage</h3>
              <p className="text-blue-800 text-sm">
                AI-powered matching platform
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-bold text-blue-900 mb-2">Scalable Model</h3>
              <p className="text-blue-800 text-sm">
                High-margin SaaS business
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">👨‍💼</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ahmed Hassan</h3>
              <p className="text-gray-600 text-sm mb-2">Chief Executive Officer</p>
              <p className="text-gray-700 text-sm">
                15+ years in tech and recruitment. Previously founded two successful startups. 
                Leading Fast Job Career's mission to democratize international job opportunities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">👩‍💻</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sarah Johnson</h3>
              <p className="text-gray-600 text-sm mb-2">Chief Technology Officer</p>
              <p className="text-gray-700 text-sm">
                Former Google and Microsoft executive. Leading our AI and technology innovation 
                with 12+ years of experience in building scalable platforms.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Michael Chen</h3>
              <p className="text-gray-600 text-sm mb-2">Chief Financial Officer</p>
              <p className="text-gray-700 text-sm">
                CPA with 10+ years in fintech and SaaS. Previously led finance at 
                three unicorns. Expert in international finance and scaling operations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Jennifer Davis</h3>
              <p className="text-gray-600 text-sm mb-2">Chief Marketing Officer</p>
              <p className="text-gray-700 text-sm">
                Global marketing leader with 8+ years in tech recruitment. 
                Expert in brand building and user acquisition across 50+ countries.
              </p>
            </div>
          </div>
        </div>

        {/* Future Outlook */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Future Growth Strategy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">2025 Priorities</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">AI Enhancement</h4>
                    <p className="text-gray-600 text-sm">
                      Advanced AI matching algorithms to improve candidate-employer fit by 40%
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Mobile App Expansion</h4>
                    <p className="text-gray-600 text-sm">
                      Launch iOS and Android apps with advanced features for on-the-go job searching
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Enterprise Solutions</h4>
                    <p className="text-gray-600 text-sm">
                      Develop comprehensive enterprise platform for large-scale recruitment needs
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Global Expansion</h4>
                    <p className="text-gray-600 text-sm">
                      Enter 10 new markets with localized platforms and partnerships
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Long-term Vision</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">🎯</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Market Leadership</h4>
                    <p className="text-gray-600 text-sm">
                      Become the #1 international job platform by 2027
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">🌍</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">100+ Countries</h4>
                    <p className="text-gray-600 text-sm">
                      Expand presence to cover 100+ countries with localized solutions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm">💰</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">IPO Ready</h4>
                    <p className="text-gray-600 text-sm">
                      Position for public offering by 2028
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Opportunity */}
        <div className="text-center">
          <div className="bg-gray-900 text-white rounded-xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Investment Opportunity
            </h2>
            <p className="text-gray-300 mb-6">
              We're seeking strategic partners to accelerate our growth trajectory. 
              Join us in revolutionizing the global recruitment industry.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="font-bold text-white mb-2">Series A Round</h3>
                <div className="text-gray-300 text-sm mb-3">
                  <div className="font-bold text-green-400">$25M</div>
                  <div>Seeking strategic investors</div>
                </div>
                <div className="text-gray-400 text-xs">
                  15% equity • Valuation: $167M
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="font-bold text-white mb-2">Growth Metrics</h3>
                <div className="text-gray-300 text-sm mb-3">
                  <div>40% YoY user growth</div>
                  <div>78% gross margins</div>
                  <div>$450 LTV/CAC ratio</div>
                </div>
                <div className="text-gray-400 text-xs">
                  Profitable since Q2 2024
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Download Pitch Deck
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Schedule Meeting
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Contact: investors@fastjobcareer.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
