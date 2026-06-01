"use client";

import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Flights", href: "/flights" },
  { label: "Destinations", href: "/destinations" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

const supportLinks = [
  { label: "Flight Changes", href: "/support/flight-changes" },
  { label: "Cancellations", href: "/support/cancellations" },
  { label: "Group Travel", href: "/support/group-travel" },
  { label: "International Flights", href: "/support/international-flights" },
  { label: "Family Travel", href: "/support/family-travel" },
  { label: "Business Travel", href: "/support/business-travel" },
];

const socialButtons = [
  { letter: "f", label: "Facebook" },
  { letter: "ig", label: "Instagram" },
  { letter: "in", label: "LinkedIn" },
  { letter: "x", label: "X" },
];

const seoKeywords = [
  "Flight Booking Assistance",
  "Airline Reservation Support",
  "International Flight Reservations",
  "Family Travel Booking",
  "Business Travel Booking",
  "Multi-City Flight Booking",
];

const bottomLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-text-primary text-white pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Brand */}
          <div>
            <a href="/" className="font-bold text-[22px] text-white">
              Catchaflight
            </a>
            <p className="text-sm text-white/60 mt-4 leading-relaxed">
              Premium flight booking assistance for travelers who value
              confidence and clarity.
            </p>
            <div className="flex gap-4 mt-6">
              {socialButtons.map((social) => (
                <a
                  key={social.letter}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-xs font-bold hover:bg-accent hover:text-white transition-all"
                >
                  {social.letter}
                </a>
              ))}
            </div>
            <p className="text-xs text-white/40 mt-8">
              &copy; 2026 Catchaflight. All rights reserved.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-semibold text-base text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Support */}
          <div>
            <h3 className="font-semibold text-base text-white mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="font-semibold text-base text-white mb-4">
              Contact
            </h3>
            <div>
              <a
                href="tel:+18001234567"
                className="flex items-center gap-3 group"
              >
                <Phone className="w-4 h-4 text-white/70 flex-shrink-0" />
                <span className="text-white font-semibold">
                  1-800-XXX-XXXX
                </span>
              </a>
              <p className="text-xs text-white/50 mt-1 ml-7">
                24/7 Support Available
              </p>
            </div>
            <a
              href="mailto:support@catchaflight.com"
              className="flex items-center gap-3 mt-4 group"
            >
              <Mail className="w-4 h-4 text-white/70 flex-shrink-0" />
              <span className="text-sm text-white/70 hover:text-white transition-colors">
                support@catchaflight.com
              </span>
            </a>
            <div className="flex items-center gap-3 mt-4">
              <MapPin className="w-4 h-4 text-white/70 flex-shrink-0" />
              <span className="text-sm text-white/70">Delhi, India</span>
            </div>
          </div>
        </div>

        {/* SEO Keyword Links Bar */}
        <div className="mt-12 rounded-lg bg-white/5 p-4">
          <p className="text-xs text-white/40">
            {seoKeywords.map((keyword, index) => (
              <span key={keyword}>
                {keyword}
                {index < seoKeywords.length - 1 && (
                  <span className="text-white/20"> | </span>
                )}
              </span>
            ))}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs text-white/40 flex flex-wrap gap-1">
            {bottomLinks.map((link, index) => (
              <span key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-white/70 transition-colors"
                >
                  {link.label}
                </a>
                {index < bottomLinks.length - 1 && <span> | </span>}
              </span>
            ))}
          </div>
          <div className="text-xs text-white/40">🇮🇳 India</div>
        </div>
      </div>
    </footer>
  );
}
