"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  CheckCircle,
  MapPin,
  Calendar,
  Users,
  Search,
} from "lucide-react";

const airlines = ["Delta", "United", "American", "Lufthansa", "JetBlue"];
const flightTypes = ["One Way", "Round Trip", "Multi-City"];

export default function Hero() {
  const [activeFlightType, setActiveFlightType] = useState("Round Trip");

  return (
    <section className="min-h-[calc(100vh-72px)] bg-gradient-to-br from-primary to-primary-dark flex items-center">
      <div className="max-w-[1200px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-8 items-center py-16 lg:py-0">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[13px] font-semibold tracking-[0.15em] text-accent"
          >
            PREMIUM FLIGHT BOOKING
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[36px] md:text-[56px] font-extrabold leading-[1.1] text-white"
          >
            Flight Booking, Backed by Real Human Support
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="text-xl text-white/85 leading-relaxed"
          >
            Speak directly with experienced travel specialists for flight
            reservations, itinerary changes, and booking support.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <a
              href="tel:1-800-XXX-XXXX"
              className="inline-flex items-center gap-2 bg-accent text-white rounded-lg px-10 py-[18px] font-semibold text-lg shadow-[0_4px_16px_rgba(232,98,42,0.3)] hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              Speak With a Travel Specialist
            </a>
          </motion.div>

          {/* Trust Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="flex items-center gap-2"
          >
            <CheckCircle className="w-5 h-5 text-trust-green" />
            <span className="text-white/90 font-semibold">
              Real People. Real Support.
            </span>
          </motion.div>

          {/* Airline Badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="flex flex-col gap-3"
          >
            <span className="text-white/70 text-sm">
              We support bookings with:
            </span>
            <div className="flex flex-wrap gap-2">
              {airlines.map((airline) => (
                <span
                  key={airline}
                  className="bg-white/10 border border-white/20 rounded-md px-3.5 py-1.5 text-white/80 text-sm"
                >
                  {airline}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column - Booking Widget */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white rounded-2xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
            {/* Title */}
            <h2 className="font-bold text-[22px] text-text-primary mb-6">
              Find Your Flight
            </h2>

            {/* Flight Type Toggle */}
            <div className="flex gap-1 bg-gray-100 rounded-lg p-1 mb-6">
              {flightTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveFlightType(type)}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    activeFlightType === type
                      ? "bg-primary text-white shadow-sm"
                      : "bg-transparent text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Form Fields */}
            <div className="flex flex-col gap-4 mb-6">
              {/* From */}
              <div className="relative">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                <input
                  type="text"
                  placeholder="City or airport"
                  aria-label="From"
                  className="w-full border border-border rounded-lg py-3.5 pl-11 pr-4 text-base focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                />
              </div>

              {/* To */}
              <div className="relative">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                <input
                  type="text"
                  placeholder="City or airport"
                  aria-label="To"
                  className="w-full border border-border rounded-lg py-3.5 pl-11 pr-4 text-base focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                />
              </div>

              {/* Departure */}
              <div className="relative">
                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                <input
                  type="text"
                  placeholder="Select date"
                  aria-label="Departure date"
                  className="w-full border border-border rounded-lg py-3.5 pl-11 pr-4 text-base focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                />
              </div>

              {/* Passengers */}
              <div className="relative">
                <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                <input
                  type="text"
                  placeholder="1 Adult"
                  aria-label="Passengers"
                  className="w-full border border-border rounded-lg py-3.5 pl-11 pr-4 text-base focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                />
              </div>
            </div>

            {/* Search Button */}
            <button className="w-full flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-lg font-semibold text-base hover:brightness-110 transition-all duration-300 cursor-pointer">
              <Search className="w-5 h-5" />
              Find Flights
            </button>

            {/* Help Link */}
            <p className="text-accent text-sm font-medium text-center mt-4">
              <a href="tel:1-800-XXX-XXXX" className="hover:underline">
                Need help? Speak with a specialist &rarr;
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
