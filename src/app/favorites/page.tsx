import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Heart } from "lucide-react";
import { createClient } from "../../../supabase/server";
import { redirect } from "next/navigation";
import PropertyCard from "@/components/property-card";

export default async function FavoritesPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Redirect if not logged in
  if (!user) {
    return redirect("/sign-in?redirect=/favorites");
  }

  // In a real app, we would fetch the user's favorites from the database
  // For now, we'll use mock data with Ethiopian prices
  const favorites = [
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
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="h-5 w-5 text-red-500 fill-current" />
            <h1 className="text-3xl font-bold">My Favorites</h1>
          </div>
          <p className="text-gray-600">
            Properties you've saved for future reference
          </p>
        </div>

        {favorites.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                showType={true}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl p-8 text-center">
            <Heart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">No favorites yet</h2>
            <p className="text-gray-600 mb-4">
              You haven't saved any properties to your favorites yet.
            </p>
            <a href="/properties" className="text-blue-600 hover:underline">
              Browse properties
            </a>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
