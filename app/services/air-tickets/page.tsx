
"use client";

import { useState } from "react";

export default function AirTicketsPage() {
  const [searchData, setSearchData] = useState({
    from: "",
    to: "",
    departDate: "",
    returnDate: "",
    passengers: 1,
    tripType: "oneway" as "oneway" | "roundtrip"
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);
    // TODO: Implement flight search logic
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Air Tickets</h1>
          <p className="text-gray-600 mt-2">Find and book flights worldwide</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Flight Search */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Search Flights</h2>
            
            {/* Trip Type */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setSearchData(prev => ({ ...prev, tripType: "oneway" }))}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  searchData.tripType === "oneway"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                One Way
              </button>
              <button
                onClick={() => setSearchData(prev => ({ ...prev, tripType: "roundtrip" }))}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  searchData.tripType === "roundtrip"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Round Trip
              </button>
            </div>

            {/* Search Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                <input
                  type="text"
                  placeholder="City or Airport"
                  value={searchData.from}
                  onChange={(e) => setSearchData(prev => ({ ...prev, from: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                <input
                  type="text"
                  placeholder="City or Airport"
                  value={searchData.to}
                  onChange={(e) => setSearchData(prev => ({ ...prev, to: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Depart Date</label>
                <input
                  type="date"
                  value={searchData.departDate}
                  onChange={(e) => setSearchData(prev => ({ ...prev, departDate: e.target.value }))}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              {searchData.tripType === "roundtrip" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Return Date</label>
                  <input
                    type="date"
                    value={searchData.returnDate}
                    onChange={(e) => setSearchData(prev => ({ ...prev, returnDate: e.target.value }))}
                    min={searchData.departDate || new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Passengers</label>
                <select
                  value={searchData.passengers}
                  onChange={(e) => setSearchData(prev => ({ ...prev, passengers: parseInt(e.target.value) }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value={1}>1 Passenger</option>
                  <option value={2}>2 Passengers</option>
                  <option value={3}>3 Passengers</option>
                  <option value={4}>4 Passengers</option>
                  <option value={5}>5+ Passengers</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleSearch}
              disabled={isLoading || !searchData.from || !searchData.to || !searchData.departDate}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-lg transition-colors"
            >
              {isLoading ? "Searching..." : "Search Flights"}
            </button>
          </div>

          {/* Services */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Other Services</h3>
            <div className="space-y-3">
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors text-left">
                Flight Compensation
              </button>
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors text-left">
                Travel Insurance
              </button>
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors text-left">
                Airport Transfers
              </button>
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors text-left">
                Visa Services
              </button>
            </div>
          </div>

        </div>

        {/* Related Travel Services Section */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Travel Services</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            <div className="text-center">
              <div className="bg-blue-100 rounded-lg p-4 mb-3">
                <div className="text-blue-600 text-2xl font-bold">✈️</div>
              </div>
              <h3 className="font-semibold text-gray-900">Air Tickets</h3>
              <p className="text-sm text-gray-600 mt-1">Flight bookings</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-lg p-4 mb-3">
                <div className="text-green-600 text-2xl font-bold">🛂</div>
              </div>
              <h3 className="font-semibold text-gray-900">Visit Visa</h3>
              <p className="text-sm text-gray-600 mt-1">Visa assistance</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-lg p-4 mb-3">
                <div className="text-purple-600 text-2xl font-bold">🏨</div>
              </div>
              <h3 className="font-semibold text-gray-900">Luxury Stays</h3>
              <p className="text-sm text-gray-600 mt-1">Premium hotels</p>
            </div>
            
            <div className="text-center">
              <div className="bg-cyan-100 rounded-lg p-4 mb-3">
                <div className="text-cyan-600 text-2xl font-bold">🚢</div>
              </div>
              <h3 className="font-semibold text-gray-900">Cruise Cloud</h3>
              <p className="text-sm text-gray-600 mt-1">Cruise bookings</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-lg p-4 mb-3">
                <div className="text-orange-600 text-2xl font-bold">🎫</div>
              </div>
              <h3 className="font-semibold text-gray-900">Tours</h3>
              <p className="text-sm text-gray-600 mt-1">Travel packages</p>
            </div>
          </div>

          {/* Help Section */}
          <div className="bg-white rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Need Help?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contact our global team for booking support, visa guidance, or custom travel packages.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
                <span className="text-xl">💬</span>
                WhatsApp Support
              </button>
              <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors">
                Contact Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
