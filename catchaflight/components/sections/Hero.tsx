"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Phone,
  CheckCircle,
  PlaneTakeoff,
  PlaneLanding,
  Calendar,
  ChevronDown,
  ArrowUpDown,
  Search,
  Star,
} from "lucide-react";
import PlaceAutocomplete from "@/components/ui/PlaceAutocomplete";
import type { PlaceSuggestion } from "@/lib/types";

const flightTypes = ["ROUND TRIP", "ONE WAY", "MULTI CITY"] as const;

const CABIN_CLASS_MAP: Record<string, string> = {
  Economy: "economy",
  "Premium Economy": "premium_economy",
  Business: "business",
  First: "first",
};

const airlines = [
  { name: "Singapore Airlines", code: "SQ" },
  { name: "Swiss", code: "LX" },
  { name: "Emirates", code: "EK" },
  { name: "Qatar Airways", code: "QR" },
  { name: "Japan Airlines", code: "JL" },
  { name: "Iberia", code: "IB" },
];

export default function Hero() {
  const router = useRouter();
  const [activeFlightType, setActiveFlightType] =
    useState<(typeof flightTypes)[number]>("ROUND TRIP");
  const [origin, setOrigin] = useState<PlaceSuggestion | null>(null);
  const [destination, setDestination] = useState<PlaceSuggestion | null>(null);
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState("1");
  const [cabinClass, setCabinClass] = useState("Economy");
  const [error, setError] = useState("");

  const handleSwap = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
  };

  const handleSearch = () => {
    setError("");

    if (!origin?.iata_code) {
      setError("Please select an origin city or airport");
      return;
    }
    if (!destination?.iata_code) {
      setError("Please select a destination city or airport");
      return;
    }
    if (!departureDate) {
      setError("Please select a departure date");
      return;
    }
    if (activeFlightType === "ROUND TRIP" && !returnDate) {
      setError("Please select a return date");
      return;
    }

    const params = new URLSearchParams({
      origin: origin.iata_code,
      destination: destination.iata_code,
      departure_date: departureDate,
      passengers,
      cabin_class: CABIN_CLASS_MAP[cabinClass] || "economy",
      trip_type: activeFlightType === "ROUND TRIP" ? "round" : "oneway",
    });

    if (activeFlightType === "ROUND TRIP" && returnDate) {
      params.set("return_date", returnDate);
    }

    router.push(`/flights/search?${params.toString()}`);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section className="relative min-h-[calc(100vh-72px)] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-[#0a1a33]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 w-full py-12 lg:py-16">
        {/* Header text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 lg:mb-10"
        >
          <p className="text-[13px] font-semibold tracking-[0.15em] text-accent mb-3">
            PREMIUM FLIGHT BOOKING
          </p>
          <h1 className="text-[32px] sm:text-[40px] lg:text-[52px] font-extrabold leading-[1.1] text-white">
            Flight Booking, Backed by
            <br className="hidden sm:block" />
            <span className="text-accent"> Real Human Support</span>
          </h1>
          <p className="text-base sm:text-lg text-white/70 mt-4 max-w-2xl mx-auto leading-relaxed">
            Speak directly with experienced travel specialists for flight
            reservations, itinerary changes, and booking support.
          </p>
        </motion.div>

        {/* Booking Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-[900px] mx-auto"
        >
          {/* Flight Type Tabs */}
          <div className="flex gap-0">
            {flightTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveFlightType(type)}
                className={`px-5 sm:px-7 py-3 text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer border border-white/20 ${
                  activeFlightType === type
                    ? "bg-white text-text-primary border-white"
                    : "bg-white/10 text-white hover:bg-white/20"
                } ${
                  type === "ROUND TRIP"
                    ? "rounded-tl-xl"
                    : type === "MULTI CITY"
                      ? "rounded-tr-xl"
                      : ""
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-b-2xl rounded-tr-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-visible">
            <div className="p-4 sm:p-6 lg:p-8 space-y-4">
              {/* From Field */}
              <PlaceAutocomplete
                label="From"
                placeholder="City or airport"
                icon={PlaneTakeoff}
                value={origin}
                onChange={setOrigin}
                rightElement={
                  <button
                    onClick={handleSwap}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-accent text-accent flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-200 cursor-pointer flex-shrink-0"
                    aria-label="Swap origin and destination"
                  >
                    <ArrowUpDown className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                }
              />

              {/* To Field */}
              <PlaceAutocomplete
                label="To"
                placeholder="City or airport"
                icon={PlaneLanding}
                value={destination}
                onChange={setDestination}
              />

              {/* Date Row */}
              <div className="flex bg-surface border border-border rounded-xl overflow-hidden focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10 transition-all">
                <div className="flex-1 flex items-center px-4 sm:px-5 py-4 sm:py-5">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-text-secondary mr-3 sm:mr-4 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <label className="block text-[11px] font-medium text-text-secondary uppercase tracking-wider">
                      Departure
                    </label>
                    <input
                      type="date"
                      min={today}
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      className="w-full bg-transparent text-text-primary text-base sm:text-lg font-medium outline-none"
                    />
                  </div>
                </div>
                {activeFlightType === "ROUND TRIP" && (
                  <>
                    <div className="w-px bg-border self-stretch my-3" />
                    <div className="flex-1 flex items-center px-4 sm:px-5 py-4 sm:py-5">
                      <div className="flex-1 min-w-0">
                        <label className="block text-[11px] font-medium text-text-secondary uppercase tracking-wider">
                          Return
                        </label>
                        <input
                          type="date"
                          min={departureDate || today}
                          value={returnDate}
                          onChange={(e) => setReturnDate(e.target.value)}
                          className="w-full bg-transparent text-text-primary text-base sm:text-lg font-medium outline-none"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Travelers & Class Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center bg-surface border border-border rounded-xl px-4 sm:px-5 py-4 sm:py-5 cursor-pointer hover:border-primary/40 transition-all">
                  <div className="flex-1 min-w-0">
                    <label className="block text-[11px] font-medium text-text-secondary uppercase tracking-wider">
                      Travelers
                    </label>
                    <select
                      value={passengers}
                      onChange={(e) => setPassengers(e.target.value)}
                      className="w-full bg-transparent text-text-primary text-base sm:text-lg font-medium outline-none cursor-pointer appearance-none"
                    >
                      <option value="1">1 Traveler</option>
                      <option value="2">2 Travelers</option>
                      <option value="3">3 Travelers</option>
                      <option value="4">4 Travelers</option>
                      <option value="5">5 Travelers</option>
                      <option value="6">6 Travelers</option>
                    </select>
                  </div>
                  <ChevronDown className="w-5 h-5 text-text-secondary flex-shrink-0" />
                </div>

                <div className="flex items-center bg-surface border border-border rounded-xl px-4 sm:px-5 py-4 sm:py-5 cursor-pointer hover:border-primary/40 transition-all">
                  <div className="flex-1 min-w-0">
                    <label className="block text-[11px] font-medium text-text-secondary uppercase tracking-wider">
                      Class
                    </label>
                    <select
                      value={cabinClass}
                      onChange={(e) => setCabinClass(e.target.value)}
                      className="w-full bg-transparent text-text-primary text-base sm:text-lg font-medium outline-none cursor-pointer appearance-none"
                    >
                      <option>Economy</option>
                      <option>Premium Economy</option>
                      <option>Business</option>
                      <option>First</option>
                    </select>
                  </div>
                  <ChevronDown className="w-5 h-5 text-text-secondary flex-shrink-0" />
                </div>
              </div>

              {/* Error */}
              {error && (
                <p className="text-red-500 text-sm font-medium text-center">
                  {error}
                </p>
              )}

              {/* Search Button */}
              <button
                onClick={handleSearch}
                className="w-full flex items-center justify-center gap-2 bg-accent text-white py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg shadow-[0_4px_20px_rgba(232,98,42,0.4)] hover:brightness-110 hover:scale-[1.01] transition-all duration-300 cursor-pointer"
              >
                <Search className="w-5 h-5" />
                Search Flights
              </button>
            </div>

            {/* Help link bar */}
            <div className="bg-surface/60 border-t border-border px-6 py-3 flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              <a
                href="tel:1-800-XXX-XXXX"
                className="text-sm font-medium text-text-secondary hover:text-accent transition-colors"
              >
                Need help? Speak with a specialist &rarr;
              </a>
            </div>

            {/* Customer Trust Rating */}
            <div className="bg-surface border-t border-border px-6 py-5 sm:py-6 rounded-b-2xl text-center">
              <p className="text-text-primary text-lg sm:text-xl font-normal">
                Our customers <span className="font-bold">trust us!</span>
              </p>
              <div className="w-10 h-px bg-border mx-auto my-3" />
              <div className="flex items-center justify-center gap-2">
                <span className="text-text-primary text-xl sm:text-2xl font-extrabold">
                  Excellent
                </span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 sm:w-6 sm:h-6 fill-star text-star"
                    />
                  ))}
                </div>
              </div>
              <p className="text-text-secondary text-sm sm:text-base mt-1">
                Top rated{" "}
                <span className="font-bold text-text-primary">4.7</span> out of
                5, based on{" "}
                <span className="font-bold text-text-primary">2,197</span>{" "}
                reviews
              </p>
            </div>
          </div>
        </motion.div>

        {/* Trust + Airlines Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 lg:mt-10 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <CheckCircle className="w-5 h-5 text-trust-green" />
            <span className="text-white/90 font-semibold text-sm sm:text-base">
              Real People. Real Support. Available 24/7.
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-4">
            {airlines.map((airline) => (
              <div
                key={airline.code}
                className="relative h-8 sm:h-10 w-24 sm:w-32 opacity-60 hover:opacity-100 transition-opacity duration-300 brightness-0 invert"
              >
                <Image
                  src={`https://content.airhex.com/content/logos/airlines_${airline.code}_200_70_r.png`}
                  alt={airline.name}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
