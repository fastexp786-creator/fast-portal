import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fast Job Career - Your Gateway to Global Opportunities | Jobs, Travel & Visa Services',
  description: 'Fast Job Career connects you with global job opportunities, travel services, and visa assistance. Find your dream job, book flights, get visa support, and start your international career journey today.',
  keywords: 'Fast Job Career, jobs, international jobs, travel services, visa assistance, career opportunities, global employment, air tickets, job search, career portal',
  openGraph: {
    title: 'Fast Job Career - Your Gateway to Global Opportunities',
    description: 'Connect with global job opportunities, travel services, and visa assistance. Your complete career and travel solution.',
    type: 'website',
    images: [
      {
        url: 'https://www.fastjobcareer.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fast Job Career - Global Opportunities',
      },
    ],
  },
};

export default function HomeThemePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Fast Job Career: Your Gateway to Global Opportunities
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your career and travel dreams into reality. Fast Job Career is your comprehensive platform 
              for international job opportunities, seamless travel services, and expert visa assistance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/find-jobs" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Find Jobs
              </a>
              <a href="/travel" className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Travel Services
              </a>
              <a href="/services/visit-visa-tours" className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Visa Assistance
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Empowering Your Global Career Journey
              </h2>
              <p className="text-gray-600 mb-6">
                In today's interconnected world, career opportunities transcend borders. Fast Job Career stands 
                as your trusted partner in navigating the complex landscape of international employment and travel. 
                We understand that pursuing opportunities abroad requires more than just finding a job – it demands 
                comprehensive support, reliable information, and seamless logistics.
              </p>
              <p className="text-gray-600 mb-6">
                Our platform bridges the gap between talented professionals and global employers while providing 
                essential travel and visa services. Whether you're a skilled worker seeking opportunities in the Gulf 
                countries, a professional looking to expand your horizons in Europe, or someone ready to embark on 
                an international career adventure, Fast Job Career is designed to support every step of your journey.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50,000+</div>
                  <div className="text-gray-600">Active Job Listings</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
                  <div className="text-gray-600">Countries Served</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Fast Job Career?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Comprehensive job database with verified listings from top employers
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  End-to-end travel services including flights, accommodation, and transfers
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Expert visa assistance with high success rates for multiple countries
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  24/7 customer support throughout your journey
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Transparent pricing with no hidden fees
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Success stories from thousands of satisfied professionals
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Comprehensive Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Job Services */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-blue-600 text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Job Placement Services</h3>
              <p className="text-gray-600 mb-6">
                Access thousands of verified job opportunities across various industries and countries. 
                Our intelligent matching system connects you with positions that align with your skills, 
                experience, and career aspirations.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Industry-specific job listings</li>
                <li>• Resume optimization services</li>
                <li>• Interview preparation guidance</li>
                <li>• Salary negotiation support</li>
                <li>• Post-placement assistance</li>
              </ul>
              <a href="/find-jobs" className="text-blue-600 font-semibold hover:text-blue-800">
                Explore Jobs →
              </a>
            </div>

            {/* Travel Services */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-green-600 text-4xl mb-4">✈️</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Travel & Logistics</h3>
              <p className="text-gray-600 mb-6">
                From booking flights to arranging accommodation, we handle all your travel needs. 
                Our partnerships with leading airlines and hotels ensure you get the best rates 
                and comfortable travel experiences.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• International flight bookings</li>
                <li>• Hotel and apartment rentals</li>
                <li>• Airport transfer services</li>
                <li>• Travel insurance options</li>
                <li>• Local transportation arrangements</li>
              </ul>
              <a href="/travel" className="text-green-600 font-semibold hover:text-green-800">
                Book Travel →
              </a>
            </div>

            {/* Visa Services */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-purple-600 text-4xl mb-4">🛂</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Visa & Documentation</h3>
              <p className="text-gray-600 mb-6">
                Navigate complex visa processes with our expert guidance. We provide comprehensive 
                support for work visas, visit visas, and immigration documentation for multiple 
                countries with high approval rates.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Work visa processing</li>
                <li>• Visit visa applications</li>
                <li>• Document preparation</li>
                <li>• Embassy appointment scheduling</li>
                <li>• Immigration consultation</li>
              </ul>
              <a href="/services/visit-visa-tours" className="text-purple-600 font-semibold hover:text-purple-800">
                Get Visa Help →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Success Stories: Transforming Lives Globally
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">From Local to Global: Ahmed's Journey</h3>
              <p className="text-gray-600 mb-4">
                "Fast Job Career transformed my life completely. I was working as a software developer 
                in Pakistan with limited growth opportunities. Through their platform, I found a high-paying 
                job in Dubai with a leading tech company. The team handled everything from visa processing 
                to travel arrangements. Today, I'm earning five times more and have gained international 
                experience that I never thought possible."
              </p>
              <p className="text-sm text-gray-500">- Ahmed Khan, Software Developer, Dubai</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Nursing Career in Saudi Arabia</h3>
              <p className="text-gray-600 mb-4">
                "As a registered nurse, I always dreamed of working abroad but was overwhelmed by the 
                complex visa and licensing requirements. Fast Job Career made everything seamless. 
                They helped me find the perfect position in Riyadh, assisted with my professional 
                licensing, and even arranged my accommodation. The support continued even after I arrived, 
                making my transition smooth and stress-free."
              </p>
              <p className="text-sm text-gray-500">- Sarah Williams, Registered Nurse, Riyadh</p>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Popular Destinations for Career Growth
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow">
              <div className="text-3xl mb-3">🇸🇦</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Saudi Arabia</h3>
              <p className="text-gray-600">Booming job market in construction, healthcare, and IT sectors</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow">
              <div className="text-3xl mb-3">🇦🇪</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">UAE</h3>
              <p className="text-gray-600">Luxury destination with opportunities in hospitality and finance</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow">
              <div className="text-3xl mb-3">🇬🇧</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">United Kingdom</h3>
              <p className="text-gray-600">Skilled worker visas for healthcare and engineering professionals</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow">
              <div className="text-3xl mb-3">🇨🇦</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Canada</h3>
              <p className="text-gray-600">Express entry program for skilled immigrants and professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of professionals who have successfully launched their international careers 
            through Fast Job Career. Your global opportunity awaits!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/auth/register" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started Now
            </a>
            <a href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="py-12 px-4 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">50,000+</h3>
              <p className="text-gray-400">Job Opportunities</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">25+</h3>
              <p className="text-gray-400">Countries Covered</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">98%</h3>
              <p className="text-gray-400">Client Satisfaction</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-400">
              Fast Job Career - Your trusted partner for global career opportunities and international travel services. 
              We're committed to helping you achieve your dreams of working and living abroad.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
