"use client";

import { motion } from "framer-motion";

const airlines = [
  {
    name: "Delta Airlines",
    description: "Delta booking assistance and reservations",
    initial: "D",
  },
  {
    name: "United Airlines",
    description: "United booking support and flight changes",
    initial: "U",
  },
  {
    name: "American Airlines",
    description: "American Airlines reservations and guidance",
    initial: "A",
  },
  {
    name: "Lufthansa",
    description: "Lufthansa booking help and international support",
    initial: "L",
  },
  {
    name: "JetBlue",
    description: "JetBlue booking assistance and itinerary support",
    initial: "J",
  },
  {
    name: "Southwest",
    description: "Southwest flight booking and schedule assistance",
    initial: "S",
  },
];

export default function AirlineSupport() {
  return (
    <section className="bg-surface py-[60px] md:py-[100px]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center">
          <p className="text-[13px] font-semibold tracking-[0.15em] text-accent">
            AIRLINE SUPPORT
          </p>
          <h2 className="text-[32px] md:text-[40px] font-bold text-text-primary mt-3">
            Expert Assistance for All Major Airlines
          </h2>
          <p className="text-lg text-text-secondary mt-3 max-w-2xl mx-auto">
            We provide specialized booking support for the world&apos;s leading
            airlines.
          </p>
        </div>

        {/* Airline Cards Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
          {airlines.map((airline, index) => (
            <motion.div
              key={airline.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="bg-white rounded-xl p-7 border border-border hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Initial Badge */}
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-[22px]">
                {airline.initial}
              </div>

              {/* Airline Name */}
              <h3 className="font-bold text-lg text-text-primary mt-4">
                {airline.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-text-secondary mt-2">
                {airline.description}
              </p>

              {/* Learn More Link */}
              <a
                href="#"
                className="text-accent font-medium text-sm mt-4 inline-block hover:underline"
              >
                Learn More &rarr;
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
