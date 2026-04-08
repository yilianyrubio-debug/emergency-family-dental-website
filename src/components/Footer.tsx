import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-purple-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-2">
              Emergency & Family Dental
            </h3>
            <p className="text-purple-300 text-sm italic mb-4">
              Where Relief Meets Family Care
            </p>
            <p className="text-purple-200/70 text-sm leading-relaxed">
              Providing exceptional dental care to Union City and surrounding
              communities with compassion, expertise, and the latest technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-purple-300 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About Us" },
                { href: "/team", label: "Our Team" },
                { href: "/services", label: "Services" },
                { href: "/gallery", label: "Smile Gallery" },
                { href: "/blog", label: "Blog" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-purple-200/70 hover:text-white transition text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-purple-300 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Emergency Dental Care",
                "Dental Cleanings",
                "Dental Implants",
                "Veneers",
                "Orthodontics",
                "Teeth Whitening",
                "Root Canals",
                "Crowns & Bridges",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-purple-200/70 hover:text-white transition text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-purple-300 mb-4">
              Contact Us
            </h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-white font-medium">Address</p>
                <p className="text-purple-200/70">
                  4806 Bergenline Ave Suite #2
                  <br />
                  Union City, NJ 07087
                </p>
              </div>
              <div>
                <p className="text-white font-medium">Phone</p>
                <a
                  href="tel:2016203920"
                  className="text-purple-300 hover:text-white transition"
                >
                  (201) 620-3920
                </a>
              </div>
              <div>
                <p className="text-white font-medium">Hours</p>
                <div className="text-purple-200/70 space-y-0.5">
                  <p>Mon — Thu: 8:00 AM — 6:00 PM</p>
                  <p>Fri — Sat: 8:00 AM — 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-purple-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-purple-300/60">
          <p>
            &copy; {new Date().getFullYear()} Emergency and Family Dental. All
            rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/p/Emergency-and-Family-Dental-100090934983521/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Facebook
            </a>
            <a
              href="https://www.zocdoc.com/practice/emergency-and-family-dental-131723"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Zocdoc
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
