"use client";

import Link from "next/link";
import { createClient } from "../../supabase/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { UserCircle, Home, Calendar, Heart, CreditCard } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DashboardNavbar() {
  const supabase = createClient();
  const router = useRouter();

  return (
    <nav className="w-full border-b border-gray-200 bg-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="/" prefetch className="text-xl font-bold text-blue-600">
            Paradise Finder
          </Link>
          <div className="hidden md:flex items-center space-x-6 ml-8">
            <Link
              href="/dashboard"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Home className="w-4 h-4 mr-1" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/viewings"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Calendar className="w-4 h-4 mr-1" />
              My Viewings
            </Link>
            <Link
              href="/favorites"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Heart className="w-4 h-4 mr-1" />
              Favorites
            </Link>
            <Link
              href="/dashboard/payments"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <CreditCard className="w-4 h-4 mr-1" />
              Payments
            </Link>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="/properties" className="hidden md:block">
            <Button variant="outline">Browse Properties</Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <UserCircle className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/dashboard">My Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/viewings">My Viewings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/favorites">Favorites</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/payments">Payment History</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={async () => {
                  await supabase.auth.signOut();
                  router.refresh();
                }}
              >
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
