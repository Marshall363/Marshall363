"use client";

import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

export default function PersonalAgent() {
  return (
    <section className="bg-white py-[60px] md:py-[80px]">
      <div className="max-w-[700px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          {/* Agent Avatars */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative flex items-end">
              {/* Left agent */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-[3px] border-white shadow-lg overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center -mr-5 z-0">
                <svg viewBox="0 0 120 120" className="w-full h-full">
                  <circle cx="60" cy="42" r="18" fill="#1A3C6E" opacity="0.2" />
                  <ellipse cx="60" cy="95" rx="30" ry="22" fill="#1A3C6E" opacity="0.15" />
                  <circle cx="60" cy="42" r="16" fill="#1A3C6E" opacity="0.3" />
                  <path d="M42 38 C42 38 48 32 60 32 C72 32 78 38 78 38" stroke="#1A3C6E" strokeWidth="2" fill="none" opacity="0.3" />
                  <rect x="38" y="36" width="6" height="10" rx="2" fill="#1A3C6E" opacity="0.2" />
                  <circle cx="41" cy="41" r="3" fill="#6B7280" opacity="0.4" />
                </svg>
              </div>

              {/* Center agent (larger, prominent) */}
              <div className="relative z-20">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gradient-to-br from-primary/25 to-primary/10 flex items-center justify-center">
                  <svg viewBox="0 0 120 120" className="w-full h-full">
                    <circle cx="60" cy="40" r="20" fill="#1A3C6E" opacity="0.25" />
                    <ellipse cx="60" cy="98" rx="32" ry="24" fill="#1A3C6E" opacity="0.18" />
                    <circle cx="60" cy="40" r="18" fill="#1A3C6E" opacity="0.35" />
                    <path d="M40 36 C40 36 46 28 60 28 C74 28 80 36 80 36" stroke="#1A3C6E" strokeWidth="2.5" fill="none" opacity="0.35" />
                    <rect x="36" y="34" width="7" height="12" rx="2" fill="#1A3C6E" opacity="0.25" />
                    <circle cx="39.5" cy="40" r="3.5" fill="#6B7280" opacity="0.4" />
                  </svg>
                </div>
                {/* Green online dot */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 bg-trust-green rounded-full border-[3px] border-white animate-pulse-dot" />
              </div>

              {/* Right agent */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-[3px] border-white shadow-lg overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center -ml-5 z-0">
                <svg viewBox="0 0 120 120" className="w-full h-full">
                  <circle cx="60" cy="42" r="18" fill="#1A3C6E" opacity="0.2" />
                  <ellipse cx="60" cy="95" rx="30" ry="22" fill="#1A3C6E" opacity="0.15" />
                  <circle cx="60" cy="42" r="16" fill="#1A3C6E" opacity="0.3" />
                  <path d="M42 38 C42 38 48 32 60 32 C72 32 78 38 78 38" stroke="#1A3C6E" strokeWidth="2" fill="none" opacity="0.3" />
                  <rect x="76" y="36" width="6" height="10" rx="2" fill="#1A3C6E" opacity="0.2" />
                  <circle cx="79" cy="41" r="3" fill="#6B7280" opacity="0.4" />
                </svg>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-text-primary leading-snug">
            Contact your personal travel specialist 24/7 —
            <br className="hidden sm:block" />
            book flights with confidence &amp; ease
          </h2>

          <p className="text-text-secondary text-base sm:text-lg mt-4">
            We provide professional assistance{" "}
            <span className="font-semibold text-trust-green">LIVE</span>
          </p>

          {/* Call Button */}
          <a
            href="tel:1-800-XXX-XXXX"
            className="inline-flex items-center justify-center gap-3 bg-primary text-white rounded-xl px-10 sm:px-14 py-5 mt-8 font-bold text-lg sm:text-xl shadow-[0_4px_20px_rgba(26,60,110,0.3)] hover:brightness-110 hover:scale-[1.02] transition-all duration-300"
          >
            <PhoneCall className="w-6 h-6" />
            Call Now: 1-800-XXX-XXXX
          </a>
        </motion.div>
      </div>
    </section>
  );
}
