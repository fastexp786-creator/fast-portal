import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import StandardPageLayout, { generateStandardMetadata } from "@/components/StandardPageLayout";

export const metadata: Metadata = generateStandardMetadata(
  "Restaurant Recommendations",
  "Find the best restaurants for business meetings and interview lunches. Fast Portal provides curated dining recommendations for professionals across major cities.",
  "restaurants"
);

export default function RestaurantsPage() {
  return (
    <StandardPageLayout
      title="Restaurant Recommendations"
      description="Find the best restaurants for business meetings and interview lunches. Fast Portal provides curated dining recommendations for professionals across major cities."
      activeSlug="restaurants"
    >
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Dining Services
          </p>
          <h1 className="mt-3 text-3xl font-black text-black md:text-4xl">
            Restaurant Recommendations
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-standard">
            Discover the best restaurants for business meetings, interview lunches, and professional dining. Fast Job Career curates premium dining options across major cities to ensure your business meals are impressive and comfortable.
          </p>
        </div>

        {/* Service Overview */}
        <div className="mb-12">
          <div className="card-standard p-8">
            <h2 className="heading-standard text-xl mb-4">Why Use Our Restaurant Service?</h2>
            <p className="text-standard mb-6">
              Choosing the right restaurant for business meetings and interviews is crucial for making a good impression. Our curated selection ensures professional ambiance, excellent service, and quality food for all your dining needs.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🍽️</span>
                </div>
                <h3 className="heading-standard text-base mb-2">Curated Selection</h3>
                <p className="text-standard text-sm">
                  Hand-picked restaurants with professional ambiance and excellent service
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="heading-standard text-base mb-2">Business Focus</h3>
                <p className="text-standard text-sm">
                  Restaurants ideal for interviews, meetings, and professional networking
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="heading-standard text-base mb-2">Professional Service</h3>
                <p className="text-standard text-sm">
                  Priority reservations and special arrangements for business guests
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Restaurant Categories */}
        <div className="mb-12">
          <h2 className="heading-standard text-xl mb-6">Restaurant Categories</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="card-standard p-6">
              <h3 className="heading-standard text-lg mb-4">Fine Dining</h3>
              <p className="text-standard mb-4">
                Premium restaurants for executive meetings and important interviews.
              </p>
              <ul className="space-y-2 text-standard text-sm mb-4">
                <li>• Michelin-starred venues</li>
                <li>• Private dining rooms</li>
                <li>• Sommelier service</li>
                <li>• International cuisine</li>
                <li>• Average cost: $80-150/person</li>
              </ul>
              <button className="btn-standard w-full">Explore Fine Dining</button>
            </div>

            <div className="card-standard p-6">
              <h3 className="heading-standard text-lg mb-4">Business Casual</h3>
              <p className="text-standard mb-4">
                Professional restaurants perfect for regular business meetings.
              </p>
              <ul className="space-y-2 text-standard text-sm mb-4">
                <li>• Quiet ambiance</li>
                <li>• WiFi available</li>
                <li>• Group seating</li>
                <li>• Diverse menu options</li>
                <li>• Average cost: $40-80/person</li>
              </ul>
              <button className="btn-standard w-full">Explore Business Casual</button>
            </div>

            <div className="card-standard p-6">
              <h3 className="heading-standard text-lg mb-4">Interview Friendly</h3>
              <p className="text-standard mb-4">
                Comfortable settings ideal for interview lunches and discussions.
              </p>
              <ul className="space-y-2 text-standard text-sm mb-4">
                <li>• Quiet environment</li>
                <li>• Private booths</li>
                <li>• Quick service</li>
                <li>• Professional staff</li>
                <li>• Average cost: $25-50/person</li>
              </ul>
              <button className="btn-standard w-full">Explore Interview Venues</button>
            </div>

            <div className="card-standard p-6">
              <h3 className="heading-standard text-lg mb-4">International Cuisine</h3>
              <p className="text-standard mb-4">
                Diverse international restaurants for global business partners.
              </p>
              <ul className="space-y-2 text-standard text-sm mb-4">
                <li>• Asian fusion</li>
                <li>• Mediterranean</li>
                <li>• Continental</li>
                <li>• Middle Eastern</li>
                <li>• Average cost: $35-70/person</li>
              </ul>
              <button className="btn-standard w-full">Explore International</button>
            </div>

            <div className="card-standard p-6">
              <h3 className="heading-standard text-lg mb-4">Hotel Restaurants</h3>
              <p className="text-standard mb-4">
                Premium hotel dining for visiting executives and international guests.
              </p>
              <ul className="space-y-2 text-standard text-sm mb-4">
                <li>• 5-star service</li>
                <li>• International standards</li>
                <li>• Meeting facilities</li>
                <li>• Valet parking</li>
                <li>• Average cost: $60-120/person</li>
              </ul>
              <button className="btn-standard w-full">Explore Hotel Dining</button>
            </div>

            <div className="card-standard p-6">
              <h3 className="heading-standard text-lg mb-4">Café & Bistro</h3>
              <p className="text-standard mb-4">
                Relaxed settings for informal meetings and coffee interviews.
              </p>
              <ul className="space-y-2 text-standard text-sm mb-4">
                <li>• Casual atmosphere</li>
                <li>• Coffee specialties</li>
                <li>• Light meals</li>
                <li>• Extended hours</li>
                <li>• Average cost: $15-35/person</li>
              </ul>
              <button className="btn-standard w-full">Explore Cafés</button>
            </div>
          </div>
        </div>

        {/* City-wise Recommendations */}
        <div className="mb-12">
          <h2 className="heading-standard text-xl mb-6">🏙️ City-wise Recommendations</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-standard p-6">
              <h3 className="heading-standard text-lg mb-4">Islamabad</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="heading-standard text-base mb-2">Monal Restaurant</h4>
                  <p className="text-standard text-sm mb-2">
                    Fine dining with panoramic city views, perfect for executive meetings.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Pakistani • Fine Dining</span>
                    <span className="text-lg font-bold text-black">$120/person</span>
                  </div>
                </div>

                <div>
                  <h4 className="heading-standard text-base mb-2">The Terrace</h4>
                  <p className="text-standard text-sm mb-2">
                    Elegant rooftop restaurant ideal for business dinners.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Continental • Business</span>
                    <span className="text-lg font-bold text-black">$80/person</span>
                  </div>
                </div>

                <div>
                  <h4 className="heading-standard text-base mb-2">Café Lounge</h4>
                  <p className="text-standard text-sm mb-2">
                    Professional café for interview meetings and discussions.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Café • Interview</span>
                    <span className="text-lg font-bold text-black">$30/person</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-standard p-6">
              <h3 className="heading-standard text-lg mb-4">Lahore</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="heading-standard text-base mb-2">Cuckoo's Den</h4>
                  <p className="text-standard text-sm mb-2">
                    Historic restaurant with traditional ambiance for business entertainment.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Pakistani • Fine Dining</span>
                    <span className="text-lg font-bold text-black">$100/person</span>
                  </div>
                </div>

                <div>
                  <h4 className="heading-standard text-base mb-2">Arcadian Café</h4>
                  <p className="text-standard text-sm mb-2">
                    Modern café perfect for professional meetings and interviews.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Continental • Business</span>
                    <span className="text-lg font-bold text-black">$60/person</span>
                  </div>
                </div>

                <div>
                  <h4 className="heading-standard text-base mb-2">The Polo Lounge</h4>
                  <p className="text-standard text-sm mb-2">
                    Exclusive lounge for executive meetings and networking.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">International • Premium</span>
                    <span className="text-lg font-bold text-black">$90/person</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-standard p-6">
              <h3 className="heading-standard text-lg mb-4">Karachi</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="heading-standard text-base mb-2">Kolachi</h4>
                  <p className="text-standard text-sm mb-2">
                    Beachfront restaurant with stunning views for business dinners.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Pakistani • Fine Dining</span>
                    <span className="text-lg font-bold text-black">$110/person</span>
                  </div>
                </div>

                <div>
                  <h4 className="heading-standard text-base mb-2">The Patio</h4>
                  <p className="text-standard text-sm mb-2">
                    Elegant garden restaurant perfect for professional meetings.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Continental • Business</span>
                    <span className="text-lg font-bold text-black">$70/person</span>
                  </div>
                </div>

                <div>
                  <h4 className="heading-standard text-base mb-2">Okra</h4>
                  <p className="text-standard text-sm mb-2">
                    Contemporary restaurant ideal for executive dining.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Fusion • Premium</span>
                    <span className="text-lg font-bold text-black">$95/person</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-standard p-6">
              <h3 className="heading-standard text-lg mb-4">Dubai</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="heading-standard text-base mb-2">At.mosphere</h4>
                  <p className="text-standard text-sm mb-2">
                    World's highest restaurant for ultimate business dining experience.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">International • Luxury</span>
                    <span className="text-lg font-bold text-black">$250/person</span>
                  </div>
                </div>

                <div>
                  <h4 className="heading-standard text-base mb-2">Zuma</h4>
                  <p className="text-standard text-sm mb-2">
                    Award-winning Japanese restaurant for business entertainment.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Japanese • Premium</span>
                    <span className="text-lg font-bold text-black">$180/person</span>
                  </div>
                </div>

                <div>
                  <h4 className="heading-standard text-base mb-2">Pierchik</h4>
                  <p className="text-standard text-sm mb-2">
                    Mediterranean restaurant with business-friendly ambiance.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Mediterranean • Business</span>
                    <span className="text-lg font-bold text-black">$120/person</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Special Services */}
        <div className="mb-12">
          <h2 className="heading-standard text-xl mb-6">🎯 Special Business Services</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-standard p-6">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded">
                  PREMIUM SERVICE
                </span>
              </div>
              <h3 className="heading-standard text-lg mb-2">Business Meeting Packages</h3>
              <p className="text-standard mb-4">
                Complete packages for business meetings including venue, menu, and service.
              </p>
              <ul className="space-y-1 text-standard text-sm mb-4">
                <li>• Private dining room</li>
                <li>• Custom menu selection</li>
                <li>• Audio-visual equipment</li>
                <li>• Dedicated staff</li>
                <li>• Complimentary beverages</li>
              </ul>
              <button className="btn-standard w-full">Book Meeting Package</button>
            </div>

            <div className="card-standard p-6">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded">
                  MEMBER BENEFIT
                </span>
              </div>
              <h3 className="heading-standard text-lg mb-2">Interview Lunch Service</h3>
              <p className="text-standard mb-4">
                Special arrangements for interview lunches with professional settings.
              </p>
              <ul className="space-y-1 text-standard text-sm mb-4">
                <li>• Quiet booth seating</li>
                <li>• Quick service options</li>
                <li>• Professional atmosphere</li>
                <li>• Flexible timing</li>
                <li>• Discounted rates</li>
              </ul>
              <button className="btn-standard w-full">Book Interview Lunch</button>
            </div>
          </div>
        </div>

        {/* Booking Process */}
        <div className="mb-12">
          <h2 className="heading-standard text-xl mb-6">Restaurant Booking Process</h2>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="card-standard p-6 text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">1</span>
              </div>
              <h3 className="heading-standard text-base mb-2">Select Restaurant</h3>
              <p className="text-standard text-sm">
                Choose from our curated list of business-friendly restaurants
              </p>
            </div>

            <div className="card-standard p-6 text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">2</span>
              </div>
              <h3 className="heading-standard text-base mb-2">Specify Requirements</h3>
              <p className="text-standard text-sm">
                Provide details about party size, date, and special needs
              </p>
            </div>

            <div className="card-standard p-6 text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">3</span>
              </div>
              <h3 className="heading-standard text-base mb-2">Confirm Reservation</h3>
              <p className="text-standard text-sm">
                Review details and confirm with restaurant directly
              </p>
            </div>

            <div className="card-standard p-6 text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">4</span>
              </div>
              <h3 className="heading-standard text-base mb-2">Enjoy Dining</h3>
              <p className="text-standard text-sm">
                Arrive and enjoy professional dining experience
              </p>
            </div>
          </div>
        </div>

        {/* Contact & Support */}
        <div className="mt-12 card-standard">
          <h2 className="heading-standard text-xl text-center mb-6">Restaurant Booking Support</h2>
          <div className="text-center">
            <p className="text-standard mb-6">
              Our dining experts are available to help you select the perfect restaurant for your business needs and make reservations.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="heading-standard text-base mb-2">Restaurant Concierge</h3>
                <p className="text-standard text-sm mb-4">
                  Personal assistance in selecting and booking restaurants for business meetings.
                </p>
                <p className="text-standard">
                  <strong>Phone:</strong> +92 310 0570707<br />
                  <strong>Email:</strong> dining@fastjobcareer.com
                </p>
              </div>
              <div>
                <h3 className="heading-standard text-base mb-2">Special Events</h3>
                <p className="text-standard text-sm mb-4">
                  Planning for large business events or special dining requirements.
                </p>
                <p className="text-standard">
                  <strong>Phone:</strong> +92 300 1234567<br />
                  <strong>Email:</strong> events@fastjobcareer.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StandardPageLayout>
  );
}
