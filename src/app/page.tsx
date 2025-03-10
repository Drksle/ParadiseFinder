import Image from "next/image";
import Navbar from "@/components/navbar";
import {
  ArrowUpRight,
  Home as HomeIcon,
  MapPin,
  Star,
  Building,
} from "lucide-react";
import { createClient } from "../../supabase/server";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import components with loading optimization
const PropertyCard = dynamic(() => import("@/components/property-card"), {
  loading: () => (
    <div className="h-96 bg-gray-100 rounded-xl animate-pulse"></div>
  ),
});

const SearchBar = dynamic(() => import("@/components/search-bar"), {
  loading: () => (
    <div className="h-12 bg-gray-100 rounded-lg animate-pulse"></div>
  ),
});

const ShareLink = dynamic(() => import("@/components/share-link"), {
  loading: () => (
    <div className="h-10 w-64 bg-gray-100 rounded-lg animate-pulse"></div>
  ),
});

const FigmaDesignLink = dynamic(
  () => import("@/components/figma-design-link"),
  {
    loading: () => null,
  },
);

const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <div className="h-64 bg-gray-100"></div>,
});

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Ethiopian properties with real locations and prices in Birr
  const featuredProperties = [
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
    },
  ];

  // Shareable link
  const shareableLink = "https://ecstatic-wilson4-nr9ap.dev-2.tempolabs.ai";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <FigmaDesignLink />

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-70" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
              Find Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Paradise
              </span>{" "}
              in Ethiopia
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Discover your dream home in Ethiopia's vibrant cities with our
              curated selection of premium properties across the country.
            </p>

            {/* Search Bar */}
            <div className="max-w-3xl mx-auto">
              <SearchBar />
            </div>
          </div>
        </div>
      </section>

      {/* Shareable Link Section */}
      <section className="py-8 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <div className="text-lg font-medium">
              Share this demo with others:
            </div>
            <ShareLink shareableLink={shareableLink} />
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Properties</h2>
            <Link
              href="/properties"
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              View all properties
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Paradise Finder
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're revolutionizing the real estate experience in Addis Ababa
              with our premium listings and exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Building className="w-6 h-6" />,
                title: "Premium Properties",
                description:
                  "Carefully curated selection of the finest properties in Addis Ababa",
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Prime Locations",
                description:
                  "Properties in the most desirable neighborhoods of the city",
              },
              {
                icon: <HomeIcon className="w-6 h-6" />,
                title: "Easy Application",
                description:
                  "Streamlined rental application process with quick approvals",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Properties Listed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1,200+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who found their perfect property
            with Paradise Finder.
          </p>
          <Link
            href="/properties"
            className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Browse Properties
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
