"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Clock,
  Plane,
  ArrowRight,
  RefreshCw,
  CheckCircle,
  XCircle,
  ChevronDown,
  ChevronUp,
  Loader2,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCallBar from "@/components/layout/MobileCallBar";
import type { FlightOffer, SearchResponse } from "@/lib/types";

function formatDuration(iso: string | null): string {
  if (!iso) return "—";
  const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
  if (!match) return iso;
  const hours = match[1] ? `${match[1]}h` : "";
  const mins = match[2] ? ` ${match[2]}m` : "";
  return `${hours}${mins}`.trim();
}

function formatTime(isoDate: string): string {
  return new Date(isoDate).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

function formatCurrency(amount: string, currency: string): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(parseFloat(amount));
}

function getStopsLabel(segmentCount: number): string {
  if (segmentCount <= 1) return "Nonstop";
  if (segmentCount === 2) return "1 Stop";
  return `${segmentCount - 1} Stops`;
}

function OfferCard({ offer, index }: { offer: FlightOffer; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const outboundSlice = offer.slices[0];
  const returnSlice = offer.slices.length > 1 ? offer.slices[1] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" as const }}
      className="bg-white rounded-2xl border border-border shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] transition-shadow duration-300 overflow-hidden"
    >
      <div className="p-4 sm:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
          {/* Airline info */}
          <div className="flex items-center gap-3 lg:w-40 flex-shrink-0">
            {offer.owner.logo_symbol_url ? (
              <Image
                src={offer.owner.logo_symbol_url}
                alt={offer.owner.name}
                width={40}
                height={40}
                className="rounded-lg"
                unoptimized
              />
            ) : (
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                {offer.owner.iata_code}
              </div>
            )}
            <div>
              <p className="font-semibold text-sm text-text-primary">
                {offer.owner.name}
              </p>
              <p className="text-xs text-text-secondary">
                {outboundSlice.segments
                  .map((s) => s.flight_number)
                  .join(", ")}
              </p>
            </div>
          </div>

          {/* Outbound Flight */}
          <div className="flex-1">
            <SliceRow slice={outboundSlice} />
            {returnSlice && (
              <div className="mt-3 pt-3 border-t border-border/50">
                <SliceRow slice={returnSlice} />
              </div>
            )}
          </div>

          {/* Price + Book */}
          <div className="flex flex-row lg:flex-col items-center lg:items-end gap-3 lg:gap-2 lg:w-44 flex-shrink-0">
            <div className="text-right">
              <p className="text-2xl font-extrabold text-text-primary">
                {formatCurrency(offer.total_amount, offer.total_currency)}
              </p>
              <p className="text-xs text-text-secondary">
                {offer.passengers > 1
                  ? `Total for ${offer.passengers} travelers`
                  : "per person"}
              </p>
            </div>
            <a
              href="tel:1-800-XXX-XXXX"
              className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:brightness-110 hover:scale-[1.02] transition-all duration-200 flex-shrink-0"
            >
              <Phone className="w-4 h-4" />
              Book Now
            </a>
          </div>
        </div>

        {/* Conditions + Expand */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/50">
          <div className="flex gap-4 text-xs">
            <span
              className={`flex items-center gap-1 ${offer.conditions.changeable ? "text-trust-green" : "text-text-secondary"}`}
            >
              {offer.conditions.changeable ? (
                <CheckCircle className="w-3.5 h-3.5" />
              ) : (
                <XCircle className="w-3.5 h-3.5" />
              )}
              {offer.conditions.changeable ? "Changeable" : "Non-changeable"}
            </span>
            <span
              className={`flex items-center gap-1 ${offer.conditions.refundable ? "text-trust-green" : "text-text-secondary"}`}
            >
              {offer.conditions.refundable ? (
                <CheckCircle className="w-3.5 h-3.5" />
              ) : (
                <XCircle className="w-3.5 h-3.5" />
              )}
              {offer.conditions.refundable ? "Refundable" : "Non-refundable"}
            </span>
            {outboundSlice.fare_brand_name && (
              <span className="text-text-secondary bg-surface px-2 py-0.5 rounded">
                {outboundSlice.fare_brand_name}
              </span>
            )}
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-xs font-medium text-primary hover:underline cursor-pointer"
          >
            {expanded ? "Hide" : "Details"}
            {expanded ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>

      {/* Expanded Details */}
      {expanded && (
        <div className="border-t border-border bg-surface/50 px-4 sm:px-6 py-4">
          {offer.slices.map((slice, si) => (
            <div key={slice.id} className={si > 0 ? "mt-4 pt-4 border-t border-border" : ""}>
              <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-3">
                {si === 0 ? "Outbound" : "Return"} &middot;{" "}
                {formatDate(slice.segments[0].departing_at)}
              </p>
              {slice.segments.map((seg, i) => (
                <div key={seg.id} className="flex items-start gap-4 mb-3 last:mb-0">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {seg.airline.logo_symbol_url ? (
                      <Image
                        src={seg.airline.logo_symbol_url}
                        alt={seg.airline.name}
                        width={24}
                        height={24}
                        className="rounded"
                        unoptimized
                      />
                    ) : (
                      <Plane className="w-4 h-4 text-primary" />
                    )}
                  </div>
                  <div className="flex-1 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-text-primary">
                        {formatTime(seg.departing_at)}
                      </span>
                      <span className="text-text-secondary">
                        {seg.origin.iata_code}
                        {seg.origin.terminal ? ` T${seg.origin.terminal}` : ""}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-text-secondary" />
                      <span className="font-semibold text-text-primary">
                        {formatTime(seg.arriving_at)}
                      </span>
                      <span className="text-text-secondary">
                        {seg.destination.iata_code}
                        {seg.destination.terminal
                          ? ` T${seg.destination.terminal}`
                          : ""}
                      </span>
                    </div>
                    <p className="text-text-secondary text-xs mt-0.5">
                      {seg.flight_number} &middot; {seg.airline.name}
                      {seg.aircraft ? ` &middot; ${seg.aircraft}` : ""}
                      {seg.duration ? ` &middot; ${formatDuration(seg.duration)}` : ""}
                      {seg.cabin_class
                        ? ` &middot; ${seg.cabin_class.replace("_", " ")}`
                        : ""}
                    </p>
                  </div>
                  {i < slice.segments.length - 1 && (
                    <div className="text-xs text-accent font-medium px-2 py-1 bg-accent/10 rounded">
                      Connection
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function SliceRow({
  slice,
}: {
  slice: FlightOffer["slices"][0];
}) {
  const firstSeg = slice.segments[0];
  const lastSeg = slice.segments[slice.segments.length - 1];

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <div className="text-right min-w-[60px]">
        <p className="font-bold text-base sm:text-lg text-text-primary leading-tight">
          {formatTime(firstSeg.departing_at)}
        </p>
        <p className="text-xs text-text-secondary">{firstSeg.origin.iata_code}</p>
      </div>

      <div className="flex-1 flex flex-col items-center px-2">
        <span className="text-[11px] text-text-secondary flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {formatDuration(slice.duration)}
        </span>
        <div className="w-full flex items-center gap-1 my-0.5">
          <div className="h-px flex-1 bg-border" />
          <Plane className="w-3 h-3 text-accent rotate-90" />
          <div className="h-px flex-1 bg-border" />
        </div>
        <span
          className={`text-[11px] font-medium ${slice.segments.length <= 1 ? "text-trust-green" : "text-accent"}`}
        >
          {getStopsLabel(slice.segments.length)}
        </span>
      </div>

      <div className="min-w-[60px]">
        <p className="font-bold text-base sm:text-lg text-text-primary leading-tight">
          {formatTime(lastSeg.arriving_at)}
        </p>
        <p className="text-xs text-text-secondary">
          {lastSeg.destination.iata_code}
        </p>
      </div>
    </div>
  );
}

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const [offers, setOffers] = useState<FlightOffer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sortBy, setSortBy] = useState<"price" | "duration">("price");

  const origin = searchParams.get("origin") || "";
  const destination = searchParams.get("destination") || "";
  const departureDate = searchParams.get("departure_date") || "";
  const returnDate = searchParams.get("return_date") || "";
  const passengers = searchParams.get("passengers") || "1";
  const cabinClass = searchParams.get("cabin_class") || "economy";
  const tripType = searchParams.get("trip_type") || "round";

  const fetchFlights = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const body: Record<string, unknown> = {
        origin,
        destination,
        departure_date: departureDate,
        passengers: parseInt(passengers),
        cabin_class: cabinClass,
      };

      if (tripType === "round" && returnDate) {
        body.return_date = returnDate;
      }

      const res = await fetch("/api/flights/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data: SearchResponse | { error: string; details?: string[] } = await res.json();

      if (!res.ok) {
        const errData = data as { error: string; details?: string[] };
        setError(
          errData.details?.join(", ") || errData.error || "Search failed"
        );
        return;
      }

      setOffers((data as SearchResponse).data);
    } catch {
      setError("Failed to search flights. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [origin, destination, departureDate, returnDate, passengers, cabinClass, tripType]);

  useEffect(() => {
    if (origin && destination && departureDate) {
      fetchFlights();
    } else {
      setError("Missing search parameters");
      setLoading(false);
    }
  }, [origin, destination, departureDate, fetchFlights]);

  const sortedOffers = [...offers].sort((a, b) => {
    if (sortBy === "price") {
      return parseFloat(a.total_amount) - parseFloat(b.total_amount);
    }
    const aDur = a.slices[0]?.duration || "PT9999H";
    const bDur = b.slices[0]?.duration || "PT9999H";
    return aDur.localeCompare(bDur);
  });

  return (
    <>
      {/* Search Summary Bar */}
      <div className="bg-gradient-to-r from-primary to-primary-dark py-6 sm:py-8">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-white">
                <span className="text-xl sm:text-2xl font-bold">{origin}</span>
                <ArrowRight className="w-5 h-5 text-accent" />
                <span className="text-xl sm:text-2xl font-bold">
                  {destination}
                </span>
                {tripType === "round" && (
                  <>
                    <ArrowRight className="w-5 h-5 text-accent rotate-180" />
                    <span className="text-xl sm:text-2xl font-bold">
                      {origin}
                    </span>
                  </>
                )}
              </div>
              <p className="text-white/70 text-sm mt-1">
                {formatDate(departureDate)}
                {returnDate ? ` — ${formatDate(returnDate)}` : ""}
                {" · "}
                {passengers} traveler{parseInt(passengers) > 1 ? "s" : ""}
                {" · "}
                {cabinClass.replace("_", " ")}
              </p>
            </div>
            <div className="flex gap-2">
              <a
                href="/"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                New Search
              </a>
              <a
                href="tel:1-800-XXX-XXXX"
                className="inline-flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-lg text-sm font-semibold hover:brightness-110 transition-all"
              >
                <Phone className="w-4 h-4" />
                Call to Book
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="bg-surface min-h-[60vh] py-6 sm:py-10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-24 gap-4">
              <Loader2 className="w-10 h-10 text-primary animate-spin" />
              <p className="text-text-secondary font-medium">
                Searching flights from airlines...
              </p>
              <p className="text-text-secondary text-sm">
                This may take a few seconds
              </p>
            </div>
          ) : error ? (
            <div className="text-center py-24">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
                <XCircle className="w-8 h-8 text-red-400" />
              </div>
              <h2 className="text-xl font-bold text-text-primary mb-2">
                Search Error
              </h2>
              <p className="text-text-secondary mb-6">{error}</p>
              <a
                href="/"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition-all"
              >
                Try Again
              </a>
            </div>
          ) : offers.length === 0 ? (
            <div className="text-center py-24">
              <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center mx-auto mb-4 border border-border">
                <Plane className="w-8 h-8 text-text-secondary" />
              </div>
              <h2 className="text-xl font-bold text-text-primary mb-2">
                No Flights Found
              </h2>
              <p className="text-text-secondary mb-6">
                No flights available for this route and date. Try different dates
                or speak with a specialist.
              </p>
              <a
                href="tel:1-800-XXX-XXXX"
                className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition-all"
              >
                <Phone className="w-4 h-4" />
                Speak With a Specialist
              </a>
            </div>
          ) : (
            <>
              {/* Sort bar */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-text-secondary">
                  <span className="font-semibold text-text-primary">
                    {offers.length}
                  </span>{" "}
                  flights found
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-secondary">Sort by:</span>
                  <button
                    onClick={() => setSortBy("price")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                      sortBy === "price"
                        ? "bg-primary text-white"
                        : "bg-white text-text-secondary border border-border hover:border-primary/40"
                    }`}
                  >
                    Price
                  </button>
                  <button
                    onClick={() => setSortBy("duration")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                      sortBy === "duration"
                        ? "bg-primary text-white"
                        : "bg-white text-text-secondary border border-border hover:border-primary/40"
                    }`}
                  >
                    Duration
                  </button>
                </div>
              </div>

              {/* Offer List */}
              <div className="space-y-4">
                {sortedOffers.map((offer, i) => (
                  <OfferCard key={offer.id} offer={offer} index={i} />
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-10 bg-white rounded-2xl p-6 sm:p-8 border border-border text-center">
                <p className="text-lg font-bold text-text-primary">
                  Need help choosing the right flight?
                </p>
                <p className="text-text-secondary mt-1">
                  Our travel specialists can help you find the best option for
                  your trip.
                </p>
                <a
                  href="tel:1-800-XXX-XXXX"
                  className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3 rounded-lg font-semibold mt-4 hover:brightness-110 hover:scale-[1.02] transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Speak With a Specialist
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default function FlightSearchResults() {
  return (
    <>
      <Header />
      <main>
        <Suspense
          fallback={
            <div className="flex items-center justify-center py-32">
              <Loader2 className="w-10 h-10 text-primary animate-spin" />
            </div>
          }
        >
          <SearchResultsContent />
        </Suspense>
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
