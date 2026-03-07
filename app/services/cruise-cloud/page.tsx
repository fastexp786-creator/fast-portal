import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import StandardPageLayout, { generateStandardMetadata } from "@/components/StandardPageLayout";

export const metadata: Metadata = generateStandardMetadata(
  "Cruise Cloud | Cruise Bookings",
  "Book luxury cruises worldwide. Mediterranean, Caribbean, Alaska, and exotic cruise destinations with premium amenities and exceptional service.",
  "services/cruise-cloud"
);

export default function CruiseCloudPage() {
  return (
    <StandardPageLayout
      title="Cruise Cloud"
      description="Book luxury cruises worldwide. Mediterranean, Caribbean, Alaska, and exotic cruise destinations with premium amenities and exceptional service."
      activeSlug="services/cruise-cloud"
    >
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Ocean Adventures
          </p>
          <h1 className="mt-3 text-3xl font-black text-amber-300 md:text-4xl">
            Cruise Cloud
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
            Set sail on unforgettable voyages with our curated collection of luxury cruises. From the Mediterranean to the Caribbean, discover the world from the comfort of premium cruise liners.
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-12 card-standard p-8">
          <h2 className="heading-standard text-xl text-center mb-6">Find Your Perfect Cruise</h2>
          <div className="grid gap-4 md:grid-cols-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Destination</label>
              <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500">
                <option>Mediterranean</option>
                <option>Caribbean</option>
                <option>Alaska</option>
                <option>Norwegian Fjords</option>
                <option>Asia Pacific</option>
                <option>Middle East</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Departure Date</label>
              <input 
                type="date"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Duration</label>
              <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500">
                <option>3-5 Days</option>
                <option>7 Days</option>
                <option>10-14 Days</option>
                <option>21+ Days</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Cabin Type</label>
              <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500">
                <option>Interior</option>
                <option>Ocean View</option>
                <option>Balcony</option>
                <option>Suite</option>
              </select>
            </div>
          </div>
          <button className="w-full mt-6 bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors">
            Search Cruises
          </button>
        </div>

        {/* Featured Cruises */}
        <div className="mb-12">
          <h2 className="heading-standard text-2xl text-center mb-8">Featured Cruise Destinations</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-standard overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                <span className="text-6xl">🏛️</span>
              </div>
              <div className="p-6">
                <h3 className="heading-standard text-lg mb-2">Mediterranean Explorer</h3>
                <p className="text-standard text-sm mb-4">7 Days | Barcelona to Rome</p>
                <p className="text-gray-400 text-sm mb-4">Discover ancient history and stunning coastlines. Visit Barcelona, Marseille, Genoa, Naples, and Rome.</p>
                <div className="flex justify-between items-center">
                  <span className="text-amber-400 font-bold">From $1,299</span>
                  <button className="btn-standard text-sm">View Details</button>
                </div>
              </div>
            </div>

            <div className="card-standard overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center">
                <span className="text-6xl">🏝️</span>
              </div>
              <div className="p-6">
                <h3 className="heading-standard text-lg mb-2">Caribbean Paradise</h3>
                <p className="text-standard text-sm mb-4">7 Days | Miami Round Trip</p>
                <p className="text-gray-400 text-sm mb-4">Crystal-clear waters and pristine beaches. Visit Jamaica, Cayman Islands, Mexico, and Bahamas.</p>
                <div className="flex justify-between items-center">
                  <span className="text-amber-400 font-bold">From $899</span>
                  <button className="btn-standard text-sm">View Details</button>
                </div>
              </div>
            </div>

            <div className="card-standard overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                <span className="text-6xl">🌌</span>
              </div>
              <div className="p-6">
                <h3 className="heading-standard text-lg mb-2">Norwegian Fjords</h3>
                <p className="text-standard text-sm mb-4">10 Days | Copenhagen to Bergen</p>
                <p className="text-gray-400 text-sm mb-4">Majestic fjords and Northern Lights. Visit Copenhagen, Oslo, Stavanger, Flam, and Bergen.</p>
                <div className="flex justify-between items-center">
                  <span className="text-amber-400 font-bold">From $1,599</span>
                  <button className="btn-standard text-sm">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Cruise Cloud */}
        <div className="card-standard p-8 mb-12">
          <h2 className="heading-standard text-xl mb-6">Why Book with Cruise Cloud?</h2>
          <div className="space-y-4 text-standard">
            <p>
              Cruise Cloud by Fast Job Career represents a new standard in cruise booking and vacation planning. We have partnered with the world&apos;s most prestigious cruise lines including Royal Caribbean, Celebrity Cruises, Norwegian Cruise Line, MSC Cruises, and luxury operators like Regent Seven Seas, Seabourn, and Silversea to bring you an unparalleled selection of ocean and river cruise experiences.
            </p>
            <p>
              Our cruise specialists have extensive knowledge of the cruise industry, having personally sailed on dozens of itineraries across all major cruise lines. This firsthand experience allows us to provide genuine, detailed advice about ships, cabins, dining options, entertainment, shore excursions, and destinations. We don&apos;t just book cruises; we craft personalized ocean vacation experiences tailored to your preferences, travel style, and budget.
            </p>
            <p>
              What distinguishes Cruise Cloud is our commitment to value and service. We monitor cruise prices daily and have access to exclusive rates, onboard credits, cabin upgrades, and special promotions not available to the general public. Our price protection policy ensures that if your cruise fare drops after booking, we&apos;ll secure the lower rate or onboard credit for the difference. Additionally, we offer flexible payment plans to make your dream cruise more accessible.
            </p>
            <p>
              Our service extends far beyond the booking process. We provide comprehensive pre-cruise planning including flight arrangements, pre and post-cruise hotel stays, travel insurance, visa requirements, packing guides, and destination information. During your cruise, our 24/7 support team is available to assist with any issues that may arise, from itinerary changes to emergency situations.
            </p>
            <p>
              For first-time cruisers, we offer detailed guidance on selecting the right cruise line, ship, and itinerary. We explain the differences between mainstream, premium, and luxury cruise experiences, helping you make an informed decision. For experienced cruisers, we provide access to exclusive itineraries, new ship launches, and unique experiences like world cruises, expedition voyages, and themed cruises.
            </p>
            <p>
              Our shore excursion program offers carefully curated experiences at each port of call. Unlike standard cruise line excursions, our partners provide small group tours, private guides, and unique experiences that immerse you in local culture, history, and cuisine. From wine tasting in Tuscany to glacier hiking in Alaska, from snorkeling in the Great Barrier Reef to exploring ancient temples in Asia, we ensure your time ashore is as memorable as your time at sea.
            </p>
            <p>
              Cruise Cloud also specializes in group cruise bookings, whether you&apos;re planning a family reunion, corporate retreat, wedding celebration, or special interest group voyage. We negotiate group rates, coordinate group activities, arrange private dining experiences, and handle all logistical details to ensure a seamless group cruise experience.
            </p>
          </div>
        </div>

        {/* Cruise Types */}
        <div className="mb-12">
          <h2 className="heading-standard text-2xl text-center mb-8">Cruise Experiences</h2>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="card-standard p-6 text-center">
              <span className="text-4xl mb-4 block">🍷</span>
              <h3 className="heading-standard text-base mb-2">Wine Cruises</h3>
              <p className="text-standard text-sm">Taste world-class wines</p>
            </div>
            <div className="card-standard p-6 text-center">
              <span className="text-4xl mb-4 block">👨‍👩‍👧‍👦</span>
              <h3 className="heading-standard text-base mb-2">Family Cruises</h3>
              <p className="text-standard text-sm">Fun for all ages</p>
            </div>
            <div className="card-standard p-6 text-center">
              <span className="text-4xl mb-4 block">💑</span>
              <h3 className="heading-standard text-base mb-2">Romantic Cruises</h3>
              <p className="text-standard text-sm">Perfect for couples</p>
            </div>
            <div className="card-standard p-6 text-center">
              <span className="text-4xl mb-4 block">🌍</span>
              <h3 className="heading-standard text-base mb-2">World Cruises</h3>
              <p className="text-standard text-sm">Global adventures</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="card-standard p-8 text-center">
          <h2 className="heading-standard text-xl mb-4">Start Your Ocean Adventure</h2>
          <p className="text-standard mb-6 max-w-2xl mx-auto">
            Contact our cruise specialists to plan your perfect voyage. We&apos;ll help you choose the right ship, itinerary, and cabin for an unforgettable experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="btn-standard">
              Speak to a Cruise Specialist
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
