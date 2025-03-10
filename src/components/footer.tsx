"use client";

import Link from "next/link";
import {
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-semibold text-gray-900 mb-4">
              Paradise Finder
            </h3>
            <p className="text-gray-600 mb-4">
              Your trusted partner for finding premium real estate properties in
              Addis Ababa, Ethiopia.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                <a
                  href="https://maps.google.com/?q=Bole+Road,+Addis+Ababa,+Ethiopia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Bole Road, Addis Ababa, Ethiopia
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-600 mr-2" />
                <a
                  href="tel:+251932704408"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  +251 932 704 408
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-600 mr-2" />
                <a
                  href="mailto:info@paradisefinder.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  info@paradisefinder.com
                </a>
              </div>
            </div>
          </div>

          {/* Properties Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Properties</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/properties"
                  className="text-gray-600 hover:text-blue-600"
                >
                  All Properties
                </Link>
              </li>
              <li>
                <Link
                  href="/properties?type=apartment"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Apartments
                </Link>
              </li>
              <li>
                <Link
                  href="/properties?type=house"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Houses
                </Link>
              </li>
              <li>
                <Link
                  href="/properties?type=villa"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Villas
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-600"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-blue-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-600 hover:text-blue-600"
                >
                  My Account
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="text-gray-600 mb-4 md:mb-0">
            © {currentYear} Paradise Finder. All rights reserved.
          </div>

          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600"
            >
              <span className="sr-only">Facebook</span>
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
