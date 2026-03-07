import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import StandardPageLayout, { generateStandardMetadata } from "@/components/StandardPageLayout";

export const metadata: Metadata = generateStandardMetadata(
  "Luxury Stays | Premium Hotel Bookings",
  "Book luxury hotels and premium accommodations worldwide. Find 5-star hotels, resorts, and exclusive stays for your business and leisure travel.",
  "services/luxury-stays"
);

export default function LuxuryStaysPage() {
  return (
    <StandardPageLayout
      title="Luxury Stays"
      description="Book luxury hotels and premium accommodations worldwide. Find 5-star hotels, resorts, and exclusive stays for your business and leisure travel."
      activeSlug="services/luxury-stays"
    >
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Premium Accommodations
          </p>
          <h1 className="mt-3 text-3xl font-black text-amber-300 md:text-4xl">
            Luxury Stays
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
            Experience world-class hospitality at our curated collection of luxury hotels, resorts, and premium accommodations across the globe.
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-12 card-standard p-8">
          <h2 className="heading-standard text-xl text-center mb-6">Find Your Perfect Luxury Stay</h2>
          <div className="grid gap-4 md:grid-cols-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Destination</label>
              <input 
                type="text" 
                placeholder="City or Hotel Name"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Check-in Date</label>
              <input 
                type="date"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Check-out Date</label>
              <input 
                type="date"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Guests</label>
              <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4+ Guests</option>
              </select>
            </div>
          </div>
          <button className="w-full mt-6 bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors">
            Search Luxury Hotels
          </button>
        </div>

        {/* Featured Properties */}
        <div className="mb-12">
          <h2 className="heading-standard text-2xl text-center mb-8">Featured Luxury Properties</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-standard overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                <span className="text-6xl">🏨</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-amber-400">★★★★★</span>
                </div>
                <h3 className="heading-standard text-lg mb-2">Grand Palace Hotel</h3>
                <p className="text-standard text-sm mb-4">Dubai, UAE</p>
                <p className="text-gray-400 text-sm mb-4">Experience unparalleled luxury in the heart of Dubai with stunning city views and world-class amenities.</p>
                <div className="flex justify-between items-center">
                  <span className="text-amber-400 font-bold">$450/night</span>
                  <button className="btn-standard text-sm">View Details</button>
                </div>
              </div>
            </div>

            <div className="card-standard overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center">
                <span className="text-6xl">🌴</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-amber-400">★★★★★</span>
                </div>
                <h3 className="heading-standard text-lg mb-2">Oceanfront Resort</h3>
                <p className="text-standard text-sm mb-4">Maldives</p>
                <p className="text-gray-400 text-sm mb-4">Private overwater villas with direct ocean access. Ultimate tropical paradise experience awaits you.</p>
                <div className="flex justify-between items-center">
                  <span className="text-amber-400 font-bold">$890/night</span>
                  <button className="btn-standard text-sm">View Details</button>
                </div>
              </div>
            </div>

            <div className="card-standard overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-amber-600 to-red-600 flex items-center justify-center">
                <span className="text-6xl">🏰</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-amber-400">★★★★★</span>
                </div>
                <h3 className="heading-standard text-lg mb-2">Royal Heritage Palace</h3>
                <p className="text-standard text-sm mb-4">Riyadh, Saudi Arabia</p>
                <p className="text-gray-400 text-sm mb-4">Historic palace converted into a luxury hotel. Experience authentic Arabian hospitality and grandeur.</p>
                <div className="flex justify-between items-center">
                  <span className="text-amber-400 font-bold">$650/night</span>
                  <button className="btn-standard text-sm">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Luxury Stays */}
        <div className="card-standard p-8 mb-12">
          <h2 className="heading-standard text-xl mb-6">Why Choose Fast Job Career Luxury Stays?</h2>
          <div className="space-y-4 text-standard">
            <p>
              At Fast Job Career, we understand that where you stay defines your travel experience. Our Luxury Stays collection represents the pinnacle of hospitality excellence, featuring carefully curated properties that meet the highest standards of comfort, service, and sophistication. Whether you&apos;re traveling for business or leisure, our portfolio of luxury accommodations ensures an unforgettable experience.
            </p>
            <p>
              Our selection process is rigorous and comprehensive. Each property in our Luxury Stays collection undergoes a detailed evaluation covering over 200 criteria including architectural excellence, interior design quality, service standards, dining experiences, spa and wellness facilities, and location advantages. We personally visit and inspect each property to ensure it meets our exacting standards before inclusion in our collection.
            </p>
            <p>
              What sets our Luxury Stays apart is our commitment to personalized service. From the moment you inquire about a property to the day you check out, our dedicated luxury travel consultants are available 24/7 to handle every detail of your stay. This includes arranging private transfers, securing restaurant reservations at Michelin-starred establishments, organizing exclusive experiences, and accommodating any special requests you may have.
            </p>
            <p>
              Our portfolio spans the world&apos;s most desirable destinations. From beachfront resorts in the Maldives and Caribbean to urban sanctuaries in London, Paris, and Tokyo, from desert retreats in Dubai and Morocco to mountain lodges in the Alps and Rockies. Each property offers a unique interpretation of luxury while maintaining the consistent quality standards our clients expect.
            </p>
            <p>
              For business travelers, our luxury properties offer state-of-the-art business centers, meeting facilities, high-speed connectivity, and executive services. Many properties feature exclusive club lounges with complimentary refreshments, business services, and concierge assistance. Leisure travelers benefit from spa facilities, fitness centers, swimming pools, and curated local experiences that immerse them in the destination&apos;s culture and attractions.
            </p>
            <p>
              We have established exclusive partnerships with the world&apos;s leading hotel brands including Four Seasons, Mandarin Oriental, Aman, Ritz-Carlton, St. Regis, and Rosewood, as well as boutique luxury properties that offer unique character and intimate service. These partnerships enable us to offer exclusive benefits such as room upgrades, complimentary breakfast, spa credits, late checkout, and special amenities at no additional cost.
            </p>
            <p>
              Booking through Fast Job Career Luxury Stays provides additional peace of mind with our price match guarantee, flexible cancellation policies, and travel protection options. Our relationships with properties worldwide ensure priority status for our clients, often resulting in better rooms, enhanced amenities, and personalized attention during your stay.
            </p>
          </div>
        </div>

        {/* Amenities Section */}
        <div className="mb-12">
          <h2 className="heading-standard text-2xl text-center mb-8">Premium Amenities</h2>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="card-standard p-6 text-center">
              <span className="text-4xl mb-4 block">🛎️</span>
              <h3 className="heading-standard text-base mb-2">24/7 Concierge</h3>
              <p className="text-standard text-sm">Round-the-clock personalized service</p>
            </div>
            <div className="card-standard p-6 text-center">
              <span className="text-4xl mb-4 block">🍽️</span>
              <h3 className="heading-standard text-base mb-2">Fine Dining</h3>
              <p className="text-standard text-sm">Michelin-starred restaurants</p>
            </div>
            <div className="card-standard p-6 text-center">
              <span className="text-4xl mb-4 block">💆</span>
              <h3 className="heading-standard text-base mb-2">Spa & Wellness</h3>
              <p className="text-standard text-sm">World-class spa treatments</p>
            </div>
            <div className="card-standard p-6 text-center">
              <span className="text-4xl mb-4 block">🚗</span>
              <h3 className="heading-standard text-base mb-2">Private Transfers</h3>
              <p className="text-standard text-sm">Luxury airport transportation</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="card-standard p-8 text-center">
          <h2 className="heading-standard text-xl mb-4">Book Your Luxury Experience</h2>
          <p className="text-standard mb-6 max-w-2xl mx-auto">
            Contact our luxury travel specialists to plan your perfect stay. We&apos;ll handle every detail to ensure an exceptional experience.
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
