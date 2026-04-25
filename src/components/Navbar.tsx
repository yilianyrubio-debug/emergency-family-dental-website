"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Our Team" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Smile Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 glass border-b border-purple-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/logo-main.png"
              alt="Emergency & Family Dental"
              width={80}
              height={80}
              className="h-16 sm:h-20 w-auto flex-shrink-0"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-purple-700 rounded-lg hover:bg-purple-50 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:2016203920"
              className="text-sm font-medium text-purple-700 hover:text-purple-900 transition"
            >
              (201) 620-3920
            </a>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-700 to-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-purple-300/50 transition-all duration-300 hover:-translate-y-0.5"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-3 -mr-2 rounded-lg hover:bg-purple-50 transition"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-6 pt-2 space-y-1 bg-white/95 backdrop-blur-lg border-t border-purple-100">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition font-medium"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 flex flex-col gap-3">
            <a
              href="tel:2016203920"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-purple-50 text-purple-700 rounded-lg font-semibold"
            >
              📞 (201) 620-3920
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="text-center bg-gradient-to-r from-purple-700 to-purple-600 text-white px-6 py-3 rounded-full font-semibold"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
