import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import StandardPageLayout, { generateStandardMetadata } from "@/components/StandardPageLayout";

export const metadata: Metadata = generateStandardMetadata(
  "Premium Rentals | Luxury Car & Yacht Rentals",
  "Rent luxury cars, yachts, and private jets worldwide. Premium rentals for business and leisure with chauffeur service and exclusive fleet.",
  "services/premium-rentals"
);

export default function PremiumRentalsPage() {
  return (
    <StandardPageLayout
      title="Premium Rentals"
      description="Rent luxury cars, yachts, and private jets worldwide. Premium rentals for business and leisure with chauffeur service and exclusive fleet."
      activeSlug="services/premium-rentals"
    >
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Exclusive Fleet
          </p>
          <h1 className="mt-3 text-3xl font-black text-amber-300 md:text-4xl">
            Premium Rentals
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
            Experience luxury transportation with our exclusive fleet of premium vehicles, yachts, and private jets. Available worldwide with professional service.
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-12 card-standard p-8">
          <h2 className="heading-standard text-xl text-center mb-6">Find Your Premium Rental</h2>
          <div className="grid gap-4 md:grid-cols-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Category</label>
              <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500">
                <option>Luxury Cars</option>
                <option>Yachts</option>
                <option>Private Jets</option>
                <option>Helicopters</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Location</label>
              <input 
                type="text" 
                placeholder="City"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Start Date</label>
              <input 
                type="date"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Duration</label>
              <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
          </div>
          <button className="w-full mt-6 bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors">
            Search Premium Rentals
          </button>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="heading-standard text-2xl text-center mb-8">Our Premium Fleet</h2>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="card-standard p-6 text-center">
              <span className="text-5xl mb-4 block">🚗</span>
              <h3 className="heading-standard text-lg mb-2">Luxury Cars</h3>
              <p className="text-standard text-sm mb-4">Mercedes, BMW, Rolls Royce, Bentley</p>
              <span className="text-amber-400 font-bold">From $500/day</span>
            </div>
            <div className="card-standard p-6 text-center">
              <span className="text-5xl mb-4 block">🛥️</span>
              <h3 className="heading-standard text-lg mb-2">Yachts</h3>
              <p className="text-standard text-sm mb-4">Luxury yachts & superyachts</p>
              <span className="text-amber-400 font-bold">From $2,000/day</span>
            </div>
            <div className="card-standard p-6 text-center">
              <span className="text-5xl mb-4 block">✈️</span>
              <h3 className="heading-standard text-lg mb-2">Private Jets</h3>
              <p className="text-standard text-sm mb-4">Light to heavy jets</p>
              <span className="text-amber-400 font-bold">From $5,000/flight</span>
            </div>
            <div className="card-standard p-6 text-center">
              <span className="text-5xl mb-4 block">🚁</span>
              <h3 className="heading-standard text-lg mb-2">Helicopters</h3>
              <p className="text-standard text-sm mb-4">City tours & transfers</p>
              <span className="text-amber-400 font-bold">From $1,500/hour</span>
            </div>
          </div>
        </div>

        {/* Featured Rentals */}
        <div className="mb-12">
          <h2 className="heading-standard text-2xl text-center mb-8">Featured Rentals</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-standard overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-gray-700 to-black flex items-center justify-center">
                <span className="text-6xl">🚘</span>
              </div>
              <div className="p-6">
                <h3 className="heading-standard text-lg mb-2">Rolls Royce Phantom</h3>
                <p className="text-standard text-sm mb-4">Available: Dubai, London, Paris</p>
                <ul className="text-gray-400 text-sm mb-4 space-y-1">
                  <li>✓ Chauffeur included</li>
                  <li>✓ Premium sound system</li>
                  <li>✓ Leather interior</li>
                  <li>✓ 24/7 support</li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-amber-400 font-bold">$1,200/day</span>
                  <button className="btn-standard text-sm">Book Now</button>
                </div>
              </div>
            </div>

            <div className="card-standard overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-700 to-cyan-700 flex items-center justify-center">
                <span className="text-6xl">⛵</span>
              </div>
              <div className="p-6">
                <h3 className="heading-standard text-lg mb-2">Sunseeker Predator</h3>
                <p className="text-standard text-sm mb-4">Available: Monaco, Dubai, Miami</p>
                <ul className="text-gray-400 text-sm mb-4 space-y-1">
                  <li>✓ 75ft luxury yacht</li>
                  <li>✓ Captain & crew</li>
                  <li>✓ Gourmet catering</li>
                  <li>✓ Water sports included</li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-amber-400 font-bold">$8,500/day</span>
                  <button className="btn-standard text-sm">Book Now</button>
                </div>
              </div>
            </div>

            <div className="card-standard overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                <span className="text-6xl">🛩️</span>
              </div>
              <div className="p-6">
                <h3 className="heading-standard text-lg mb-2">Gulfstream G650</h3>
                <p className="text-standard text-sm mb-4">Global availability</p>
                <ul className="text-gray-400 text-sm mb-4 space-y-1">
                  <li>✓ 16 passengers</li>
                  <li>✓ Range: 13,000 km</li>
                  <li>✓ Private terminal access</li>
                  <li>✓ Catering included</li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-amber-400 font-bold">$15,000/flight</span>
                  <button className="btn-standard text-sm">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="card-standard p-8 mb-12">
          <h2 className="heading-standard text-xl mb-6">Why Choose Fast Job Career Premium Rentals?</h2>
          <div className="space-y-4 text-standard">
            <p>
              Fast Job Career Premium Rentals offers an exclusive collection of the world&apos;s finest vehicles, yachts, and aircraft for discerning clients who demand excellence. Our commitment to providing exceptional service and maintaining the highest standards has established us as the preferred choice for luxury transportation worldwide. Whether you require a chauffeur-driven Rolls Royce for a business meeting, a private yacht for a Mediterranean cruise, or a Gulfstream jet for international travel, we deliver unparalleled quality and service.
            </p>
            <p>
              Our fleet represents the pinnacle of automotive and marine engineering. In our luxury car division, we offer the latest models from prestigious manufacturers including Rolls Royce, Bentley, Mercedes-Maybach, BMW 7-Series, and Range Rover Autobiography. Each vehicle is meticulously maintained, regularly serviced, and detailed to perfection before every rental. Our cars feature the latest technology, premium leather interiors, advanced entertainment systems, and all the amenities expected in luxury transportation.
            </p>
            <p>
              For maritime enthusiasts, our yacht charter service provides access to some of the most spectacular vessels available for private hire. From sleek 40-foot day cruisers perfect for coastal exploration to magnificent 200-foot superyachts equipped with helipads, swimming pools, and cinema rooms, we have options to suit every preference. All yacht charters include professional crew, from experienced captains who know every harbor to gourmet chefs who create exquisite dining experiences and stewards who anticipate your every need.
            </p>
            <p>
              Our aviation division offers private jet charter services that redefine air travel. We partner with certified operators worldwide to provide access to over 5,000 aircraft ranging from light jets for short regional hops to ultra-long-range aircraft capable of non-stop intercontinental flights. Every charter includes personalized catering, ground transportation coordination, and concierge services to ensure seamless travel from departure to arrival.
            </p>
            <p>
              What sets us apart is our attention to detail and personalized service. Our dedicated account managers work closely with clients to understand their specific requirements, preferences, and schedules. We arrange everything from custom vehicle specifications to special requests like onboard champagne service, preferred routes, and specific timing requirements. Our 24/7 operations center monitors every rental to ensure everything proceeds according to plan.
            </p>
            <p>
              Safety is paramount in everything we do. All our vehicles undergo rigorous safety inspections, our yacht crews are trained to the highest maritime standards, and our aviation partners maintain impeccable safety records exceeding industry requirements. Comprehensive insurance coverage provides peace of mind, and our emergency response team is always available should any issues arise.
            </p>
            <p>
              We serve a global clientele with operations in major cities including Dubai, London, Paris, New York, Monaco, Tokyo, Singapore, and Sydney. Our network of trusted partners extends our reach to virtually any destination worldwide. Whether you need a car in London today and a yacht in Monaco tomorrow, we coordinate complex multi-destination itineraries with the same level of service excellence.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="mb-12">
          <h2 className="heading-standard text-2xl text-center mb-8">Included Services</h2>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="card-standard p-6 text-center">
              <span className="text-4xl mb-4 block">👨‍✈️</span>
              <h3 className="heading-standard text-base mb-2">Professional Crew</h3>
              <p className="text-standard text-sm">Experienced chauffeurs & captains</p>
            </div>
            <div className="card-standard p-6 text-center">
              <span className="text-4xl mb-4 block">🔧</span>
              <h3 className="heading-standard text-base mb-2">Maintenance</h3>
              <p className="text-standard text-sm">Impeccably maintained fleet</p>
            </div>
            <div className="card-standard p-6 text-center">
              <span className="text-4xl mb-4 block">🛡️</span>
              <h3 className="heading-standard text-base mb-2">Insurance</h3>
              <p className="text-standard text-sm">Full coverage included</p>
            </div>
            <div className="card-standard p-6 text-center">
              <span className="text-4xl mb-4 block">📞</span>
              <h3 className="heading-standard text-base mb-2">24/7 Support</h3>
              <p className="text-standard text-sm">Round-the-clock assistance</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="card-standard p-8 text-center">
          <h2 className="heading-standard text-xl mb-4">Book Your Premium Experience</h2>
          <p className="text-standard mb-6 max-w-2xl mx-auto">
            Contact our premium rental specialists to arrange your luxury transportation. We provide personalized service tailored to your requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="btn-standard">
              Speak to a Specialist
            </a>
            <a href="/live-chat" className="btn-standard">
              Live Chat
            </a>
          </div>
        </div>
      </div>
    </StandardPageLayout>
  );
}
