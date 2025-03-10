"use client";

import Link from "next/link";
import { createClient } from "../../supabase/client";
import { Button } from "./ui/button";
import { Home, Building, MapPin, Heart, UserCircle } from "lucide-react";
import UserProfile from "./user-profile";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
      setLoading(false);
    };

    getUser();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <nav className="w-full border-b border-gray-200 bg-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" prefetch className="text-2xl font-bold text-blue-600">
          Paradise Finder
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>
          <Link
            href="/properties"
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Building className="w-4 h-4 mr-1" />
            Properties
          </Link>
          <Link
            href="/locations"
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
          >
            <MapPin className="w-4 h-4 mr-1" />
            Locations
          </Link>
          {user && (
            <Link
              href="/favorites"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Heart className="w-4 h-4 mr-1" />
              Favorites
            </Link>
          )}
        </div>

        <div className="flex gap-4 items-center">
          {user ? (
            <>
              <Link href="/dashboard">
                <Button variant="outline" className="hidden md:flex">
                  My Account
                </Button>
              </Link>
              <UserProfile />
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hidden md:block"
              >
                Sign In
              </Link>
              <Link href="/sign-up">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
