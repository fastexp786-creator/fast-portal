import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Program | Fast Job Career",
  description: "Join Fast Job Career's affiliate program and earn commissions by promoting job listings and services. Start earning today with our competitive commission rates.",
  keywords: "affiliate program, earn money, job affiliate, referral program, commission based",
};

export default function AffiliateProgramPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Fast Job Career Affiliate Program
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partner with us and earn generous commissions by promoting job listings and recruitment services. 
            Join thousands of affiliates earning passive income with Fast Job Career.
          </p>
        </div>

        {/* Commission Structure */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Earn Competitive Commissions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💼</span>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">20%</div>
              <h3 className="font-bold text-gray-900 mb-2">Job Posting Commission</h3>
              <p className="text-gray-600 text-sm">
                Earn 20% commission on every featured job posting sale
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">15%</div>
              <h3 className="font-bold text-gray-900 mb-2">Partner Program Referral</h3>
              <p className="text-gray-600 text-sm">
                Get 15% commission when employers join our partner program
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📈</span>
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">10%</div>
              <h3 className="font-bold text-gray-900 mb-2">Service Commission</h3>
              <p className="text-gray-600 text-sm">
                Earn 10% on recruitment services and premium features
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Steps */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Sign Up Free</h3>
                  <p className="text-gray-600 text-sm">
                    Create your affiliate account in minutes. No setup fees or hidden costs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Promote Fast Job Career</h3>
                  <p className="text-gray-600 text-sm">
                    Share your unique affiliate links through websites, social media, or email campaigns.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Track Performance</h3>
                  <p className="text-gray-600 text-sm">
                    Monitor clicks, conversions, and earnings through our advanced dashboard.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Get Paid Monthly</h3>
                  <p className="text-gray-600 text-sm">
                    Receive your commissions via PayPal, bank transfer, or other payment methods.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Join Our Program?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">High Conversion Rates</h3>
                  <p className="text-gray-600 text-sm">
                    Our trusted brand and quality services convert visitors into customers effectively.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">30-Day Cookie Duration</h3>
                  <p className="text-gray-600 text-sm">
                    Earn commissions even if customers convert up to 30 days after clicking your link.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Marketing Materials</h3>
                  <p className="text-gray-600 text-sm">
                    Access banners, text links, and email templates to boost your promotions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Real-Time Analytics</h3>
                  <p className="text-gray-600 text-sm">
                    Track your performance with detailed reports and insights.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Dedicated Support</h3>
                  <p className="text-gray-600 text-sm">
                    Get help from our affiliate team whenever you need it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-blue-50 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Affiliate Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">
                  <span className="text-xl">👨‍💼</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Career Blogger</h4>
                  <p className="text-sm text-gray-600">Content Creator</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                "I earn over $2,000 monthly by promoting Fast Job Career on my career blog. 
                The high commission rates and long cookie duration make it my top affiliate program."
              </p>
              <p className="text-sm text-gray-500">- Alex Thompson, Blogger</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mr-3">
                  <span className="text-xl">🌐</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Digital Agency</h4>
                  <p className="text-sm text-gray-600">Marketing Agency</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                "We've integrated Fast Job Career into our client services and earn consistent 
                commissions while helping businesses find talent. Win-win partnership!"
              </p>
              <p className="text-sm text-gray-500">- Sarah Lee, Agency Owner</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mr-3">
                  <span className="text-xl">📱</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Social Media Influencer</h4>
                  <p className="text-sm text-gray-600">Content Creator</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                "My audience loves the job opportunities I share. Fast Job Career's brand 
                trust makes conversions easy and consistent."
              </p>
              <p className="text-sm text-gray-500">- Mike Chen, Influencer</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gray-900 text-white rounded-xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Start Earning Today!
            </h2>
            <p className="text-gray-300 mb-6">
              Join our free affiliate program and start earning commissions immediately. 
              No setup fees, no hidden costs, just pure earning potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Join Affiliate Program
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
