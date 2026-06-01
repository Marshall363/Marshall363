"use client";

import { motion } from "framer-motion";
import {
  Plane,
  Globe,
  Users,
  RefreshCw,
  Clock,
  Star,
  Phone,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCallBar from "@/components/layout/MobileCallBar";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const services = [
  {
    icon: Plane,
    title: "Domestic Flights",
    body: "Book flights within the country with expert guidance on routes, schedules, and the best options for your needs.",
  },
  {
    icon: Globe,
    title: "International Flights",
    body: "Navigate complex international bookings, visa requirements, and multi-leg itineraries with specialist support.",
  },
  {
    icon: Users,
    title: "Group Bookings",
    body: "Coordinate flights for groups of any size — corporate events, weddings, family reunions, and more.",
  },
  {
    icon: RefreshCw,
    title: "Flight Changes",
    body: "Need to modify your itinerary? Our specialists handle changes, rescheduling, and rebooking with ease.",
  },
  {
    icon: Clock,
    title: "Last-Minute Bookings",
    body: "Urgent travel needs? We find the best available options and book quickly on your behalf.",
  },
  {
    icon: Star,
    title: "Premium Cabins",
    body: "Upgrade your experience with business and first-class booking assistance and fare class guidance.",
  },
];

const steps = [
  {
    number: "01",
    title: "Share Your Travel Plans",
    body: "Tell us your destination, dates, passenger count, and any preferences.",
  },
  {
    number: "02",
    title: "Get Expert Recommendations",
    body: "Your specialist finds the best flights, routes, and fares for your trip.",
  },
  {
    number: "03",
    title: "Review Your Options",
    body: "Compare options with clear explanations of schedules, layovers, and pricing.",
  },
  {
    number: "04",
    title: "Book With Confidence",
    body: "Confirm your reservation with every detail handled by a professional.",
  },
];

const routes = [
  { from: "New York", to: "London" },
  { from: "Los Angeles", to: "Tokyo" },
  { from: "Chicago", to: "Paris" },
  { from: "Miami", to: "Dubai" },
  { from: "San Francisco", to: "Singapore" },
  { from: "Dallas", to: "Frankfurt" },
  { from: "Boston", to: "Dublin" },
  { from: "Seattle", to: "Hong Kong" },
];

const airlines = [
  "Delta",
  "United",
  "American",
  "Lufthansa",
  "JetBlue",
  "Southwest",
  "British Airways",
  "Emirates",
  "Air France",
  "Singapore Airlines",
  "Qatar Airways",
  "Cathay Pacific",
];

/* ------------------------------------------------------------------ */
/*  ANIMATION HELPERS                                                  */
/* ------------------------------------------------------------------ */

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" as const },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const fadeUpDelay = (delay: number) => ({
  ...fadeUp,
  transition: { ...fadeUp.transition, delay },
});

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function FlightsPage() {
  return (
    <>
      <Header />
      <main>
        {/* ───────────── Section 1 — Page Hero ───────────── */}
        <PageHero
          label="FLIGHT BOOKING"
          title="Expert Flight Booking Assistance"
          subtitle="Get personalized help from experienced travel specialists for domestic and international flight reservations."
        />

        {/* ───────────── Section 2 — Flight Services Grid ───────────── */}
        <section className="bg-white py-[60px] md:py-[100px]">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionHeader
              label="OUR SERVICES"
              title="Comprehensive Flight Booking Support"
              centered
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  {...fadeUpDelay(index * 0.08)}
                  className="bg-surface rounded-xl p-7 hover:bg-white hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg text-text-primary mt-5">
                    {service.title}
                  </h3>
                  <p className="text-[15px] text-text-secondary mt-2 leading-relaxed">
                    {service.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── Section 3 — How Booking Works ───────────── */}
        <section className="bg-surface py-[60px] md:py-[100px]">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionHeader
              label="THE PROCESS"
              title="How Flight Booking Works"
              centered
            />

            <div className="relative mt-16">
              {/* Dashed connector line (desktop only) */}
              <div className="hidden md:block absolute top-5 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] border-t-2 border-dashed border-border" />

              <div className="flex flex-col md:flex-row gap-6">
                {steps.map((step, index) => {
                  const badgeColors = [
                    "bg-accent",
                    "bg-primary",
                    "bg-trust-green",
                    "bg-primary-dark",
                  ];
                  return (
                    <motion.div
                      key={step.number}
                      {...fadeUpDelay(index * 0.1)}
                      className="flex-1"
                    >
                      <div className="bg-white rounded-2xl py-10 px-8 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-300 relative">
                        {/* Number badge */}
                        <div
                          className={`${badgeColors[index]} text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-5`}
                        >
                          {step.number}
                        </div>

                        <h3 className="font-semibold text-lg text-text-primary mb-3">
                          {step.title}
                        </h3>

                        <p className="text-[15px] text-text-secondary leading-relaxed">
                          {step.body}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ───────────── Section 4 — Popular Routes ───────────── */}
        <section className="bg-white py-[60px] md:py-[100px]">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionHeader
              label="POPULAR ROUTES"
              title="Most Requested Flight Routes"
              centered
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
              {routes.map((route, index) => (
                <motion.div
                  key={`${route.from}-${route.to}`}
                  {...fadeUpDelay(index * 0.06)}
                  className="flex items-center justify-between bg-surface rounded-xl px-7 py-5 hover:bg-white hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all duration-300 border border-transparent hover:border-border"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="font-semibold text-text-primary whitespace-nowrap">
                      {route.from}
                    </span>
                    <Plane className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="font-semibold text-text-primary whitespace-nowrap">
                      {route.to}
                    </span>
                  </div>
                  <a
                    href="tel:1-800-XXX-XXXX"
                    className="text-accent font-medium text-sm whitespace-nowrap hover:underline ml-4"
                  >
                    Get Help Booking &rarr;
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── Section 5 — Airlines We Support ───────────── */}
        <section className="bg-surface py-[60px] md:py-[100px]">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionHeader
              label="AIRLINE PARTNERS"
              title="We Support All Major Airlines"
              centered
            />

            <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {airlines.map((airline, index) => (
                <motion.div
                  key={airline}
                  {...fadeUpDelay(index * 0.05)}
                  className="bg-white border border-border rounded-lg px-6 py-4 text-center font-semibold text-text-primary hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  {airline}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── Section 6 — CTA ───────────── */}
        <section className="bg-gradient-to-br from-accent to-accent-dark py-[60px] md:py-[100px]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.p
              {...fadeUp}
              className="text-[13px] font-semibold tracking-[0.15em] text-white/80"
            >
              GET STARTED TODAY
            </motion.p>

            <motion.h2
              {...fadeUpDelay(0.1)}
              className="text-[36px] md:text-[48px] font-extrabold text-white mt-4 leading-tight"
            >
              Ready to Book Your Flight?
            </motion.h2>

            <motion.p
              {...fadeUpDelay(0.2)}
              className="text-xl text-white/90 mt-6 leading-relaxed"
            >
              Speak directly with an experienced travel specialist — no
              chatbots, no automated menus, just real human support.
            </motion.p>

            <motion.div {...fadeUpDelay(0.3)} className="mt-10">
              <a
                href="tel:1-800-XXX-XXXX"
                className="inline-flex items-center gap-2 bg-white text-primary font-bold text-lg px-12 py-5 rounded-lg hover:bg-white/95 hover:scale-[1.03] transition-all duration-300 cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                Speak With a Travel Specialist
              </a>
            </motion.div>

            <motion.p
              {...fadeUpDelay(0.4)}
              className="text-white/70 text-[15px] mt-8"
            >
              &#10003; No wait times &nbsp;&nbsp; &#10003; Real human agents
              &nbsp;&nbsp; &#10003; Available 24/7
            </motion.p>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
