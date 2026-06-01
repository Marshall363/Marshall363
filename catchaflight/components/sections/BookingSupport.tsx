"use client";

import { motion } from "framer-motion";
import { CheckCircle, Phone } from "lucide-react";

const bulletPoints = [
  "Flight reservations and new bookings",
  "Itinerary changes and rescheduling",
  "International and multi-city trips",
  "Family and group travel coordination",
  "Fare class guidance and upgrades",
];

export default function BookingSupport() {
  return (
    <section
      id="booking-support"
      className="bg-gradient-to-br from-surface to-blue-50 border-t border-b border-border py-[60px] md:py-20"
    >
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[13px] font-semibold tracking-[0.15em] text-accent">
            BOOKING SUPPORT
          </p>
          <h2 className="text-[32px] md:text-[40px] font-bold text-text-primary mt-2">
            Need Help Booking Your Flight?
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mt-4">
            Not every trip fits neatly into a search form. From family vacations
            and international journeys to business trips and multi-city
            itineraries — our specialists are here to simplify the process.
            Speak with a travel specialist today for guidance on flight options,
            schedules, and reservation support.
          </p>

          {/* Bullet Points */}
          <ul className="mt-8 space-y-3">
            {bulletPoints.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <CheckCircle className="text-trust-green w-5 h-5 shrink-0" />
                <span className="text-base text-text-primary font-medium">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
            <h3 className="font-bold text-xl text-text-primary">
              Speak With a Specialist
            </h3>
            <p className="text-sm text-text-secondary mt-1">
              Available now — no wait times
            </p>

            {/* Online Indicator */}
            <div className="flex items-center gap-2 mt-4">
              <span className="w-2.5 h-2.5 rounded-full bg-trust-green animate-pulse-dot" />
              <span className="text-trust-green font-semibold text-sm">
                Specialists Online
              </span>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 w-full bg-accent text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              Speak With a Travel Specialist
            </motion.button>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-border" />
              <span className="text-sm text-text-secondary">or</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Secondary Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full border-2 border-primary text-primary py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all cursor-pointer"
            >
              Request a Callback
            </motion.button>

            {/* Fine Print */}
            <p className="text-xs text-text-secondary text-center mt-3">
              Response within 5 minutes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
