import Link from "next/link";
import { ArrowUpRight, Search, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-70" />

      <div className="relative pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
              Find Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Paradise
              </span>{" "}
              in Addis Ababa
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Discover your dream home in Ethiopia's vibrant capital with our
              curated selection of premium properties.
            </p>

            {/* Search Bar */}
            <div className="bg-white p-4 rounded-xl shadow-lg max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search by location in Addis Ababa"
                    className="pl-10 w-full h-12 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center transition-colors">
                  <Search className="mr-2 h-5 w-5" />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
