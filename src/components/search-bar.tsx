"use client";

import { Search, MapPin, Filter, ChevronDown, Home } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

interface SearchBarProps {
  onSearch?: (searchTerm: string, filters: any) => void;
  className?: string;
  showFilters?: boolean;
}

export default function SearchBar({
  onSearch,
  className = "",
  showFilters = true,
}: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    propertyType: "",
    priceRange: "",
    bedrooms: "",
  });

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm, filters);
    }
  };

  return (
    <div className={`bg-white p-5 rounded-xl shadow-md ${className}`}>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-grow relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-blue-500" />
          </div>
          <input
            type="text"
            placeholder="Search by location in Addis Ababa"
            className="pl-10 w-full h-12 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {showFilters && (
          <div className="flex flex-wrap gap-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Home className="h-4 w-4 text-blue-500" />
              </div>
              <select
                className="h-12 pl-10 px-4 border border-gray-300 rounded-lg appearance-none pr-10 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                value={filters.propertyType}
                onChange={(e) =>
                  setFilters({ ...filters, propertyType: e.target.value })
                }
              >
                <option value="">Property Type</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="villa">Villa</option>
                <option value="studio">Studio</option>
                <option value="penthouse">Penthouse</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-blue-500 text-xs font-bold">$</span>
              </div>
              <select
                className="h-12 pl-10 px-4 border border-gray-300 rounded-lg appearance-none pr-10 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                value={filters.priceRange}
                onChange={(e) =>
                  setFilters({ ...filters, priceRange: e.target.value })
                }
              >
                <option value="">Price Range</option>
                <option value="0-20000">0 - 20,000 Birr</option>
                <option value="20000-40000">20,000 - 40,000 Birr</option>
                <option value="40000-60000">40,000 - 60,000 Birr</option>
                <option value="60000-80000">60,000 - 80,000 Birr</option>
                <option value="80000+">80,000+ Birr</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </div>
            </div>
          </div>
        )}

        <Button
          className="h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2 transition-colors shadow-sm"
          onClick={handleSearch}
        >
          <Search className="h-4 w-4" />
          <span>Search</span>
        </Button>
      </div>
    </div>
  );
}
