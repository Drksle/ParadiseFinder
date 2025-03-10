import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "../../../supabase/server";

export default async function LocationsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Ethiopian locations with real data
  const locations = [
    {
      id: 1,
      name: "Bole",
      description:
        "Upscale diplomatic area with modern amenities, international restaurants, and luxury properties",
      propertyCount: 32,
      image:
        "https://images.unsplash.com/photo-1603201667141-5a2d4c673378?w=800&q=80",
    },
    {
      id: 2,
      name: "Kazanchis",
      description:
        "Central business district with high-rise buildings, embassies, and premium residential properties",
      propertyCount: 24,
      image:
        "https://images.unsplash.com/photo-1594741158704-5a784b8e59fb?w=800&q=80",
    },
    {
      id: 3,
      name: "Piassa",
      description:
        "Historic area with Italian-influenced architecture, cultural landmarks, and traditional markets",
      propertyCount: 18,
      image:
        "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?w=800&q=80",
    },
    {
      id: 4,
      name: "CMC",
      description:
        "Residential area with spacious homes, international schools, and family-friendly environment",
      propertyCount: 22,
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    },
    {
      id: 5,
      name: "Mexico",
      description:
        "Vibrant neighborhood around Mexico Square with affordable housing options and excellent transportation links",
      propertyCount: 26,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    },
    {
      id: 6,
      name: "Sarbet",
      description:
        "Well-connected area with a mix of residential and commercial properties, close to shopping centers",
      propertyCount: 20,
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    },
    {
      id: 7,
      name: "Gerji",
      description:
        "Quiet residential area near Bole International Airport with a growing number of modern apartments",
      propertyCount: 15,
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    },
    {
      id: 8,
      name: "Ayat",
      description:
        "Developing residential area on the eastern outskirts with new housing projects and affordable options",
      propertyCount: 19,
      image:
        "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
    },
    {
      id: 9,
      name: "Old Airport",
      description:
        "Prestigious area with embassies, luxury villas, and tree-lined streets in central Addis Ababa",
      propertyCount: 17,
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Explore Locations in Addis Ababa
          </h1>
          <p className="text-gray-600">
            Discover properties in the most desirable neighborhoods of
            Ethiopia's capital
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <Link
              key={location.id}
              href={`/properties?location=${location.name}`}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src={location.image}
                    alt={location.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{location.name}</h3>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{location.propertyCount} properties</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">
                    {location.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">
            Addis Ababa Neighborhood Map
          </h2>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">
              Interactive map would be displayed here
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
