"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Flights", href: "/flights" },
  { label: "Destinations", href: "/destinations" },
  { label: "Support", href: "/support" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-white border-b border-border transition-shadow duration-300 ${
          scrolled ? "shadow-[0_2px_20px_rgba(0,0,0,0.08)]" : ""
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 items-center h-16 md:h-[72px]">
            {/* LEFT - Logo */}
            <div className="flex items-center">
              <a
                href="/"
                className="hover:opacity-90 transition-opacity"
              >
                <span className="text-2xl font-bold text-primary block leading-none">
                  Catchaflight
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium text-text-secondary tracking-wide">
                  Flight Booking Assistance
                </span>
              </a>
            </div>

            {/* CENTER - Navigation (hidden on mobile) */}
            <nav className="hidden md:flex items-center justify-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-[15px] font-medium text-gray-700 hover:text-primary transition-colors py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-center"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* RIGHT - Contact + Mobile Menu Button */}
            <div className="flex items-center justify-end gap-3">
              {/* Phone info - desktop: full, mobile: icon only */}
              <a
                href="tel:1-800-XXX-XXXX"
                className="flex items-center gap-2 group"
              >
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 group-hover:bg-primary/15 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div className="hidden md:flex flex-col">
                  <span className="text-[15px] font-medium text-gray-700 group-hover:text-primary transition-colors leading-tight">
                    1-800-XXX-XXXX
                  </span>
                  <span className="text-[12px] text-trust-green font-medium leading-tight">
                    24/7 Support
                  </span>
                </div>
              </a>

              {/* Hamburger menu button - mobile only */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-border">
          <span className="text-lg font-bold text-primary">Menu</span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Drawer Navigation */}
        <nav className="flex flex-col px-5 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[15px] font-medium text-gray-700 hover:text-primary hover:bg-primary/5 px-3 py-3 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Drawer Phone Info */}
        <div className="px-5 mt-2">
          <div className="border-t border-border pt-5">
            <a
              href="tel:1-800-XXX-XXXX"
              className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-primary/5 transition-colors group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/15 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-medium text-gray-700 group-hover:text-primary transition-colors leading-tight">
                  1-800-XXX-XXXX
                </span>
                <span className="text-[12px] text-trust-green font-medium leading-tight">
                  24/7 Support
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
