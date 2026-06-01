"use client";

import { motion } from "framer-motion";
import { Plane } from "lucide-react";

const destinations = [
  {
    city: "New York",
    price: 449,
    gradientFrom: "from-blue-900",
    gradientTo: "to-blue-700",
  },
  {
    city: "London",
    price: 520,
    gradientFrom: "from-emerald-900",
    gradientTo: "to-emerald-700",
  },
  {
    city: "Dubai",
    price: 680,
    gradientFrom: "from-amber-900",
    gradientTo: "to-amber-700",
  },
  {
    city: "Tokyo",
    price: 890,
    gradientFrom: "from-rose-900",
    gradientTo: "to-rose-700",
  },
  {
    city: "Paris",
    price: 550,
    gradientFrom: "from-purple-900",
    gradientTo: "to-purple-700",
  },
  {
    city: "Los Angeles",
    price: 380,
    gradientFrom: "from-cyan-900",
    gradientTo: "to-cyan-700",
  },
];

export default function PopularDestinations() {
  return (
    <section className="bg-white py-[60px] md:py-[100px]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center">
          <p className="text-[13px] font-semibold tracking-[0.15em] text-accent">
            DESTINATIONS
          </p>
          <h2 className="text-[32px] md:text-[40px] font-bold text-text-primary mt-3">
            Popular Destinations
          </h2>
          <p className="text-lg text-text-secondary mt-3 max-w-2xl mx-auto">
            Explore top destinations our specialists help travelers book every
            day.
          </p>
        </div>

        {/* Destination Cards Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="rounded-xl overflow-hidden group cursor-pointer shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image / Gradient Area */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <div
                  className={`w-full h-full bg-gradient-to-br ${dest.gradientFrom} ${dest.gradientTo} group-hover:scale-105 transition-transform duration-500 flex items-center justify-center`}
                >
                  <Plane
                    size={48}
                    className="text-white/20"
                    strokeWidth={1.5}
                  />
                </div>

                {/* City name overlay */}
                <span className="absolute bottom-4 left-4 font-bold text-[22px] text-white">
                  {dest.city}
                </span>

                {/* Price badge */}
                <span className="absolute top-0 right-0 bg-accent text-white font-semibold text-[13px] px-3 py-1.5 rounded-bl-xl">
                  From ${dest.price}
                </span>
              </div>

              {/* Bottom Bar */}
              <div className="bg-white p-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-base text-text-primary">
                    {dest.city}
                  </p>
                  <p className="text-sm text-text-secondary">
                    From ${dest.price}
                  </p>
                </div>
                <span className="text-accent font-medium text-sm">
                  Book Now &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
