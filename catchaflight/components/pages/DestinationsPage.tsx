"use client";

import { motion } from "framer-motion";
import { Phone, Headphones, Shield, Globe } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCallBar from "@/components/layout/MobileCallBar";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

/* ──────────────────────────── Data ──────────────────────────── */

interface Destination {
  name: string;
  country?: string;
  description: string;
  fromPrice: number;
  gradientFrom: string;
  gradientTo: string;
}

const destinations: Destination[] = [
  {
    name: "New York",
    country: "USA",
    description: "The city that never sleeps",
    fromPrice: 449,
    gradientFrom: "from-blue-900",
    gradientTo: "to-blue-700",
  },
  {
    name: "London",
    country: "UK",
    description: "Historic charm meets modern culture",
    fromPrice: 520,
    gradientFrom: "from-emerald-900",
    gradientTo: "to-emerald-700",
  },
  {
    name: "Dubai",
    country: "UAE",
    description: "Luxury in the desert",
    fromPrice: 680,
    gradientFrom: "from-amber-900",
    gradientTo: "to-amber-700",
  },
  {
    name: "Tokyo",
    country: "Japan",
    description: "Where tradition meets innovation",
    fromPrice: 890,
    gradientFrom: "from-rose-900",
    gradientTo: "to-rose-700",
  },
  {
    name: "Paris",
    country: "France",
    description: "The city of light and love",
    fromPrice: 550,
    gradientFrom: "from-purple-900",
    gradientTo: "to-purple-700",
  },
  {
    name: "Los Angeles",
    country: "USA",
    description: "Sun, surf, and stardom",
    fromPrice: 380,
    gradientFrom: "from-cyan-900",
    gradientTo: "to-cyan-700",
  },
  {
    name: "Singapore",
    description: "The garden city",
    fromPrice: 820,
    gradientFrom: "from-teal-900",
    gradientTo: "to-teal-700",
  },
  {
    name: "Rome",
    country: "Italy",
    description: "Eternal city of history",
    fromPrice: 590,
    gradientFrom: "from-orange-900",
    gradientTo: "to-orange-700",
  },
  {
    name: "Sydney",
    country: "Australia",
    description: "Harbor city beauty",
    fromPrice: 950,
    gradientFrom: "from-sky-900",
    gradientTo: "to-sky-700",
  },
  {
    name: "Bangkok",
    country: "Thailand",
    description: "Temple city of smiles",
    fromPrice: 720,
    gradientFrom: "from-yellow-900",
    gradientTo: "to-yellow-700",
  },
  {
    name: "Istanbul",
    country: "Turkey",
    description: "Where East meets West",
    fromPrice: 480,
    gradientFrom: "from-red-900",
    gradientTo: "to-red-700",
  },
  {
    name: "Barcelona",
    country: "Spain",
    description: "Art, architecture, and beaches",
    fromPrice: 510,
    gradientFrom: "from-indigo-900",
    gradientTo: "to-indigo-700",
  },
];

interface Region {
  name: string;
  cities: string[];
}

const regions: Region[] = [
  {
    name: "North America",
    cities: [
      "New York",
      "Los Angeles",
      "Chicago",
      "Miami",
      "San Francisco",
      "Toronto",
    ],
  },
  {
    name: "Europe",
    cities: ["London", "Paris", "Rome", "Barcelona", "Amsterdam", "Frankfurt"],
  },
  {
    name: "Asia Pacific",
    cities: ["Tokyo", "Singapore", "Bangkok", "Sydney", "Hong Kong", "Bali"],
  },
  {
    name: "Middle East",
    cities: ["Dubai", "Abu Dhabi", "Doha", "Istanbul", "Riyadh", "Muscat"],
  },
  {
    name: "South America",
    cities: [
      "Buenos Aires",
      "São Paulo",
      "Lima",
      "Bogotá",
      "Santiago",
      "Rio de Janeiro",
    ],
  },
  {
    name: "Africa",
    cities: [
      "Cape Town",
      "Marrakech",
      "Nairobi",
      "Cairo",
      "Lagos",
      "Johannesburg",
    ],
  },
];

interface Benefit {
  icon: React.ElementType;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: Headphones,
    title: "Expert Destination Knowledge",
    description:
      "Our specialists know the best routes, layover options, and timing for every destination.",
  },
  {
    icon: Shield,
    title: "Best Fare Guidance",
    description:
      "Get transparent pricing advice and fare class options to match your budget.",
  },
  {
    icon: Globe,
    title: "International Expertise",
    description:
      "Complex visa routes, multi-city trips, and international connections — we handle it all.",
  },
];

/* ──────────────────────────── Component ──────────────────────────── */

export default function DestinationsPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Section 1: Hero ── */}
        <PageHero
          label="DESTINATIONS"
          title="Explore Popular Destinations"
          subtitle="Discover the world's most sought-after destinations. Our specialists help you book the perfect flight to wherever you want to go."
        />

        {/* ── Section 2: Featured Destinations ── */}
        <section className="bg-white py-[60px] md:py-[100px]">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionHeader
              label="FEATURED"
              title="Top Destinations Worldwide"
            />

            <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-7">
              {destinations.map((dest, i) => (
                <Card
                  key={dest.name}
                  delay={i * 0.05}
                  className="shadow rounded-xl overflow-hidden group"
                >
                  {/* Image area */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${dest.gradientFrom} ${dest.gradientTo} transition-transform duration-500 group-hover:scale-105`}
                    />

                    {/* City name */}
                    <span className="absolute bottom-4 left-4 text-white font-bold text-[22px] leading-tight drop-shadow-lg">
                      {dest.name}
                    </span>

                    {/* Price badge */}
                    <span className="absolute top-4 right-4 bg-accent text-white text-sm font-semibold px-3 py-1 rounded-full">
                      From ${dest.fromPrice}
                    </span>
                  </div>

                  {/* Info bar */}
                  <div className="bg-white p-4">
                    <p className="font-semibold text-text-primary">
                      {dest.name}
                      {dest.country && (
                        <span className="font-normal text-text-secondary">
                          {" "}
                          &middot; {dest.country}
                        </span>
                      )}
                    </p>
                    <p className="text-sm text-text-secondary mt-1">
                      {dest.description}
                    </p>
                    <a
                      href="tel:1-800-XXX-XXXX"
                      className="inline-block text-accent font-medium text-sm mt-3 hover:underline"
                    >
                      Book Now &rarr;
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 3: Destinations by Region ── */}
        <section className="bg-surface py-[60px] md:py-[100px]">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionHeader
              label="BY REGION"
              title="Browse Destinations by Region"
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
              {regions.map((region, i) => (
                <motion.div
                  key={region.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: i * 0.08,
                  }}
                  className="bg-white rounded-xl p-7 border border-border border-l-[4px] border-l-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)]"
                >
                  <h3 className="font-bold text-xl text-text-primary">
                    {region.name}
                  </h3>
                  <p className="text-text-secondary text-[15px] mt-2">
                    {region.cities.join(", ")}
                  </p>
                  <a
                    href="tel:1-800-XXX-XXXX"
                    className="inline-block text-accent font-medium mt-4 hover:underline"
                  >
                    Explore Region &rarr;
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 4: Why Book With Us ── */}
        <section className="bg-white py-[60px] md:py-[100px]">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionHeader
              label="WHY CATCHAFLIGHT"
              title="Why Book Your Destination With Us"
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-7">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <Card
                    key={benefit.title}
                    delay={i * 0.1}
                    className="bg-surface rounded-xl p-8 border border-border text-center"
                  >
                    <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg text-text-primary mt-5">
                      {benefit.title}
                    </h3>
                    <p className="text-text-secondary text-[15px] mt-3 leading-relaxed">
                      {benefit.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Section 5: CTA ── */}
        <section className="bg-gradient-to-br from-accent to-accent-dark py-[60px] md:py-[100px]">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-[32px] md:text-[40px] font-bold leading-tight text-white"
            >
              Find Your Perfect Destination
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="mt-4 text-lg text-white/85 max-w-2xl mx-auto leading-relaxed"
            >
              Let our travel specialists help you plan the ideal trip. Expert
              guidance, real human support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="mt-8"
            >
              <a
                href="tel:1-800-XXX-XXXX"
                className="inline-flex items-center gap-2 bg-white text-primary font-bold rounded-lg px-8 py-4 text-lg hover:bg-white/95 hover:scale-[1.03] transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Speak With a Specialist
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-5 text-sm text-white/70"
            >
              No hold music. No bots. Just real people ready to help.
            </motion.p>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
