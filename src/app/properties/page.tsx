import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { createClient } from "../../../supabase/server";
import SearchBar from "@/components/search-bar";
import PropertyCard from "@/components/property-card";

export default async function PropertiesPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Ethiopian properties with real locations and prices in Birr
  const properties = [
    {
      id: 1,
      title: "Luxury Villa in Bole",
      location: "Bole, Addis Ababa",
      price: "65,000 Birr/month",
      bedrooms: 4,
      bathrooms: 3,
      area: "350 sqm",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      rating: 4.8,
      type: "Villa",
      description:
        "Spacious villa with modern amenities, private garden, and 24/7 security in the diplomatic area of Bole.",
    },
    {
      id: 2,
      title: "Modern Apartment in Sarbet",
      location: "Sarbet, Addis Ababa",
      price: "35,000 Birr/month",
      bedrooms: 2,
      bathrooms: 2,
      area: "120 sqm",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      rating: 4.5,
      type: "Apartment",
      description:
        "Contemporary apartment with city views, fitness center, and 24/7 security near Sarbet area.",
    },
    {
      id: 3,
      title: "Cozy Studio in Piassa",
      location: "Piassa, Addis Ababa",
      price: "18,000 Birr/month",
      bedrooms: 1,
      bathrooms: 1,
      area: "75 sqm",
      image:
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
      rating: 4.2,
      type: "Studio",
      description:
        "Charming studio in the historic Piassa neighborhood with all essential amenities and close to local markets.",
    },
    {
      id: 4,
      title: "Family Home in CMC",
      location: "CMC, Addis Ababa",
      price: "75,000 Birr/month",
      bedrooms: 4,
      bathrooms: 3,
      area: "280 sqm",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
      rating: 4.7,
      type: "House",
      description:
        "Spacious family home in CMC area with large garden, modern kitchen, and parking space near international schools.",
    },
    {
      id: 5,
      title: "Penthouse in Kazanchis",
      location: "Kazanchis, Addis Ababa",
      price: "90,000 Birr/month",
      bedrooms: 3,
      bathrooms: 2,
      area: "200 sqm",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      rating: 4.9,
      type: "Penthouse",
      description:
        "Luxurious penthouse in Kazanchis with panoramic views of the city, private terrace, and premium finishes.",
    },
    {
      id: 6,
      title: "Apartment in Mexico",
      location: "Mexico, Addis Ababa",
      price: "25,000 Birr/month",
      bedrooms: 1,
      bathrooms: 1,
      area: "85 sqm",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      rating: 4.3,
      type: "Apartment",
      description:
        "Well-designed apartment with modern furnishings in the convenient Mexico Square area, close to public transportation.",
    },
    {
      id: 7,
      title: "Townhouse in Ayat",
      location: "Ayat, Addis Ababa",
      price: "45,000 Birr/month",
      bedrooms: 3,
      bathrooms: 2,
      area: "180 sqm",
      image:
        "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
      rating: 4.4,
      type: "Townhouse",
      description:
        "Modern townhouse in the developing Ayat area with spacious rooms and a small garden, perfect for families.",
    },
    {
      id: 8,
      title: "Apartment in Gerji",
      location: "Gerji, Addis Ababa",
      price: "30,000 Birr/month",
      bedrooms: 2,
      bathrooms: 1,
      area: "110 sqm",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      rating: 4.1,
      type: "Apartment",
      description:
        "Comfortable apartment in the quiet Gerji neighborhood, close to Bole International Airport and shopping centers.",
    },
    {
      id: 9,
      title: "Villa in Old Airport",
      location: "Old Airport, Addis Ababa",
      price: "70,000 Birr/month",
      bedrooms: 4,
      bathrooms: 3,
      area: "320 sqm",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      rating: 4.7,
      type: "Villa",
      description:
        "Elegant villa in the prestigious Old Airport area with beautiful garden, modern amenities, and security system.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Properties in Addis Ababa</h1>
          <p className="text-gray-600">
            Discover your perfect home from our curated selection of premium
            properties
          </p>
        </div>

        {/* Search and Filter Section */}
        <SearchBar className="mb-8" showFilters={true} />

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              showType={true}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
