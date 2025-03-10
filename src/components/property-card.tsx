"use client";

import { MapPin, Star, Bed, Bath, Square, Heart } from "lucide-react";
import Image from "next/image";
import { memo } from "react";
import Link from "next/link";
import { PropertyCard as PropertyCardType } from "@/types/property";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface PropertyCardProps {
  property: PropertyCardType;
  showType?: boolean;
}

function PropertyCard({ property, showType = false }: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold shadow-sm">
          {property.price}
        </div>
        {showType && property.type && (
          <Badge variant="info" className="absolute top-4 left-4 shadow-sm">
            {property.type}
          </Badge>
        )}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsFavorite(!isFavorite);
          }}
          className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm hover:bg-white transition-colors"
        >
          <Heart
            className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-500"}`}
          />
        </button>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center bg-yellow-50 text-yellow-700 px-2 py-1 rounded-full">
            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
            <span className="ml-1 text-sm font-medium">{property.rating}</span>
          </div>
          <div className="text-sm text-gray-500">{property.type}</div>
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
          {property.title}
        </h3>
        <div className="flex items-center text-gray-500 mb-4">
          <MapPin className="h-4 w-4 mr-1 text-blue-500" />
          <span className="text-sm">{property.location}</span>
        </div>
        {property.description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {property.description}
          </p>
        )}
        <div className="flex justify-between text-sm text-gray-600 border-t pt-4 mb-4">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1 text-gray-400" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1 text-gray-400" />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1 text-gray-400" />
            <span>{property.area}</span>
          </div>
        </div>
        <Link
          href={`/properties/${property.id}`}
          className="mt-2 block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg transition-colors font-medium"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default memo(PropertyCard);
