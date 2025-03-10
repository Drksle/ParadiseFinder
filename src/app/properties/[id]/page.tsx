import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  MapPin,
  Star,
  Home,
  Bed,
  Bath,
  Square,
  Calendar,
  Check,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "../../../../supabase/server";
import { Button } from "@/components/ui/button";

interface PropertyPageProps {
  params: {
    id: string;
  };
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // In a real app, we would fetch the property data from the database
  // For now, we'll use mock data based on the ID
  const propertyId = parseInt(params.id);

  // Ethiopian property data with real locations and prices in Birr
  const properties = [
    {
      id: 1,
      title: "Luxury Villa in Bole",
      location: "Bole, Addis Ababa",
      price: "65,000 Birr/month",
      bedrooms: 4,
      bathrooms: 3,
      area: "350 sqm",
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      ],
      rating: 4.8,
      type: "Villa",
      description:
        "This luxurious villa offers a perfect blend of comfort and elegance. Located in the prestigious Bole area of Addis Ababa, it features spacious rooms, modern amenities, and a beautiful private garden. The property is secured with 24/7 security and is close to international schools, shopping centers, and restaurants.",
      amenities: [
        "Private Garden",
        "24/7 Security",
        "Modern Kitchen",
        "Parking Space",
        "High-Speed Internet",
        "Water Backup",
        "Generator",
        "Servant Quarter",
      ],
      agent: {
        name: "Sarah Tesfaye",
        phone: "+251 91 234 5678",
        email: "sarah@paradisefinder.com",
        image:
          "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
      },
      available: true,
      availableFrom: "2023-11-01",
    },
    {
      id: 2,
      title: "Modern Apartment in Sarbet",
      location: "Sarbet, Addis Ababa",
      price: "35,000 Birr/month",
      bedrooms: 2,
      bathrooms: 2,
      area: "120 sqm",
      images: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
      ],
      rating: 4.5,
      type: "Apartment",
      description:
        "This contemporary apartment in Sarbet offers modern living with stunning city views. The property features a spacious living area, well-equipped kitchen, and two comfortable bedrooms. Residents enjoy access to a fitness center, 24/7 security, and convenient parking. Located near major shopping centers and restaurants.",
      amenities: [
        "City Views",
        "Fitness Center",
        "24/7 Security",
        "Parking Space",
        "Elevator",
        "Water Backup",
        "Modern Appliances",
        "Balcony",
      ],
      agent: {
        name: "Abebe Kebede",
        phone: "+251 92 345 6789",
        email: "abebe@paradisefinder.com",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
      },
      available: true,
      availableFrom: "2023-12-01",
    },
    {
      id: 3,
      title: "Cozy Studio in Piassa",
      location: "Piassa, Addis Ababa",
      price: "18,000 Birr/month",
      bedrooms: 1,
      bathrooms: 1,
      area: "75 sqm",
      images: [
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      ],
      rating: 4.2,
      type: "Studio",
      description:
        "This charming studio apartment is located in the historic Piassa neighborhood, known for its cultural significance and vibrant atmosphere. The property offers a comfortable living space with essential amenities and is within walking distance to local markets, cafes, and public transportation.",
      amenities: [
        "Fully Furnished",
        "Security Guard",
        "Water Backup",
        "Internet Ready",
        "Built-in Wardrobe",
        "Kitchen Appliances",
        "Washing Machine",
        "Close to Public Transport",
      ],
      agent: {
        name: "Tigist Haile",
        phone: "+251 93 456 7890",
        email: "tigist@paradisefinder.com",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      },
      available: true,
      availableFrom: "2023-10-15",
    },
  ];

  // Find the property based on ID or use the first one as default
  const property = properties.find((p) => p.id === propertyId) || properties[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href="/properties"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Properties
        </Link>

        {/* Property Header */}
        <div className="mb-8">
          <div className="flex items-center text-yellow-500 mb-2">
            <Star className="h-4 w-4 fill-current" />
            <span className="ml-1 text-sm">{property.rating}</span>
            <span className="ml-2 text-gray-500 text-sm">
              • {property.type}
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{property.location}</span>
          </div>
        </div>

        {/* Property Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="md:col-span-2 relative h-96 rounded-xl overflow-hidden">
            <Image
              src={property.images[0]}
              alt={property.title}
              fill
              className="object-cover"
            />
          </div>
          {property.images.slice(1, 4).map((image, index) => (
            <div
              key={index}
              className="relative h-48 rounded-xl overflow-hidden"
            >
              <Image
                src={image}
                alt={`${property.title} - Image ${index + 2}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Property Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                About this property
              </h2>
              <p className="text-gray-600 mb-6">{property.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <Home className="h-6 w-6 text-blue-600 mb-2" />
                  <span className="text-sm text-gray-500">Type</span>
                  <span className="font-medium">{property.type}</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <Bed className="h-6 w-6 text-blue-600 mb-2" />
                  <span className="text-sm text-gray-500">Bedrooms</span>
                  <span className="font-medium">{property.bedrooms}</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <Bath className="h-6 w-6 text-blue-600 mb-2" />
                  <span className="text-sm text-gray-500">Bathrooms</span>
                  <span className="font-medium">{property.bathrooms}</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <Square className="h-6 w-6 text-blue-600 mb-2" />
                  <span className="text-sm text-gray-500">Area</span>
                  <span className="font-medium">{property.area}</span>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold mb-4">Amenities</h3>
                <div className="grid grid-cols-2 gap-3">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Location</h2>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Map would be displayed here</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white p-6 rounded-xl shadow-sm sticky top-24">
              <div className="text-2xl font-bold text-blue-600 mb-4">
                {property.price}
              </div>

              <div className="flex items-center mb-6">
                <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-gray-600">
                  Available from{" "}
                  {new Date(property.availableFrom).toLocaleDateString(
                    "en-US",
                    { month: "long", day: "numeric", year: "numeric" },
                  )}
                </span>
              </div>

              <Link
                href={`/payment/telebirr?propertyId=${property.id}&amount=${property.price.replace(/[^0-9]/g, "")}`}
              >
                <Button className="w-full mb-4 bg-blue-600 hover:bg-blue-700">
                  Pay with Telebirr
                </Button>
              </Link>

              <Link
                href={`/properties/${property.id}/schedule?title=${encodeURIComponent(property.title)}`}
              >
                <Button variant="outline" className="w-full mb-6">
                  Schedule a Viewing
                </Button>
              </Link>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-4">Contact Agent</h3>
                <div className="flex items-center mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-3">
                    <Image
                      src={property.agent.image}
                      alt={property.agent.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">{property.agent.name}</div>
                    <div className="text-sm text-gray-500">Property Agent</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm">{property.agent.phone}</div>
                  <div className="text-sm">{property.agent.email}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
