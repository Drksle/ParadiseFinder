import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function BlogPage() {
  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Neighborhoods in Addis Ababa for Families",
      excerpt:
        "Discover the best family-friendly neighborhoods in Addis Ababa with excellent schools, parks, and amenities.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      date: "October 15, 2023",
      author: "Sarah Tesfaye",
      category: "Neighborhoods",
    },
    {
      id: 2,
      title: "Investment Opportunities in Ethiopian Real Estate Market",
      excerpt:
        "Learn about the growing investment opportunities in Ethiopia's booming real estate market and how to maximize your returns.",
      image:
        "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80",
      date: "September 28, 2023",
      author: "Abebe Kebede",
      category: "Investment",
    },
    {
      id: 3,
      title: "How to Negotiate Property Prices in Addis Ababa",
      excerpt:
        "Expert tips on negotiating property prices in Addis Ababa's competitive real estate market to get the best deal.",
      image:
        "https://images.unsplash.com/photo-1560449752-3fd74f5f57c5?w=800&q=80",
      date: "September 10, 2023",
      author: "Tigist Haile",
      category: "Buying Tips",
    },
    {
      id: 4,
      title: "Understanding Property Taxes and Regulations in Ethiopia",
      excerpt:
        "A comprehensive guide to property taxes, regulations, and legal requirements for property owners in Ethiopia.",
      image:
        "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&q=80",
      date: "August 22, 2023",
      author: "Dawit Mengistu",
      category: "Legal",
    },
    {
      id: 5,
      title: "Interior Design Trends in Ethiopian Homes",
      excerpt:
        "Explore the latest interior design trends that are transforming Ethiopian homes with a blend of traditional and modern elements.",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
      date: "August 5, 2023",
      author: "Hanna Girma",
      category: "Design",
    },
    {
      id: 6,
      title: "Sustainable Building Practices in Ethiopia",
      excerpt:
        "How sustainable building practices are shaping the future of real estate development in Ethiopia and benefiting homeowners.",
      image:
        "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80",
      date: "July 19, 2023",
      author: "Solomon Tadesse",
      category: "Sustainability",
    },
  ];

  // Featured post (first post)
  const featuredPost = blogPosts[0];

  // Rest of the posts
  const regularPosts = blogPosts.slice(1);

  // Categories
  const categories = [
    "All",
    "Neighborhoods",
    "Investment",
    "Buying Tips",
    "Legal",
    "Design",
    "Sustainability",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Paradise Finder Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, tips, and trends in Ethiopian real estate
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium ${index === 0 ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-blue-50"}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="mb-2">
                  <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{featuredPost.author}</span>
                  </div>
                </div>
                <Link
                  href={`/blog/${featuredPost.id}`}
                  className="text-blue-600 font-medium flex items-center hover:text-blue-800"
                >
                  Read More <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Regular Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-blue-600 font-medium flex items-center hover:text-blue-800"
                >
                  Read More <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-blue-600 text-white p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Stay updated with the latest real estate trends, market insights,
            and property listings in Ethiopia.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow p-3 rounded-l-lg text-gray-900 focus:outline-none"
            />
            <button className="bg-gray-900 hover:bg-gray-800 px-6 py-3 rounded-r-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
