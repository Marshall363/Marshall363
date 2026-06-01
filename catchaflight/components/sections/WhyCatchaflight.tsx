"use client";

import { motion } from "framer-motion";
import { BookOpen, Headphones, Globe, RefreshCw } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface BenefitCard {
  icon: LucideIcon;
  iconBg: string;
  title: string;
  description: string;
}

const benefits: BenefitCard[] = [
  {
    icon: BookOpen,
    iconBg: "bg-accent",
    title: "Expert Booking Guidance",
    description:
      "Get clear answers on routes, schedules, baggage policies, and the best flight options for your needs.",
  },
  {
    icon: Headphones,
    iconBg: "bg-primary",
    title: "Real Human Support",
    description:
      "Speak with experienced specialists who understand your unique travel situation.",
  },
  {
    icon: Globe,
    iconBg: "bg-trust-green",
    title: "International Travel Experts",
    description:
      "Navigate complex itineraries, multi-city trips, and international reservations with confidence.",
  },
  {
    icon: RefreshCw,
    iconBg: "bg-star",
    title: "Flexible Changes Made Easy",
    description:
      "Need to adjust your plans? We help with changes, schedule adjustments, and rebooking — no automated hassle.",
  },
];

export default function WhyCatchaflight() {
  return (
    <section className="bg-white py-[60px] md:py-[100px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col gap-5"
          >
            <span className="text-[13px] font-semibold tracking-[0.15em] text-accent uppercase">
              WHY CHOOSE US
            </span>
            <h2 className="text-[32px] md:text-[40px] font-bold text-text-primary leading-tight">
              Why Travelers Choose Catchaflight
            </h2>
            <p className="text-lg text-text-secondary">
              We&apos;ve built Catchaflight around one belief: booking travel
              should be simple, transparent, and supported by real people who
              care.
            </p>
            <a
              href="#"
              className="text-primary font-semibold text-base hover:underline w-fit"
            >
              Learn how we&apos;re different &rarr;
            </a>
          </motion.div>

          {/* Right Column - 2x2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                className="bg-surface rounded-xl p-7 hover:bg-white hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-full ${benefit.iconBg} flex items-center justify-center`}
                >
                  <benefit.icon size={22} className="text-white" />
                </div>
                <h3 className="font-semibold text-lg text-text-primary mt-4">
                  {benefit.title}
                </h3>
                <p className="text-[15px] text-text-secondary mt-2">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
