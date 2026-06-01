"use client";

import { motion } from "framer-motion";
import {
  Phone,
  CheckCircle,
  Users,
  Search,
  Settings,
  BookCheck,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCallBar from "@/components/layout/MobileCallBar";
import PageHero from "@/components/ui/PageHero";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const features = [
  "Corporate event travel",
  "Wedding party flights",
  "Family reunion coordination",
  "Sports team travel",
  "School and university trips",
  "Conference and seminar groups",
];

const steps = [
  {
    number: "01",
    icon: Users,
    title: "Tell Us About Your Group",
    body: "Share group size, travel dates, destinations, and any special requirements for your travelers.",
  },
  {
    number: "02",
    icon: Search,
    title: "We Find Group Rates",
    body: "Our specialists negotiate with airlines to secure the best group fares and seating arrangements.",
  },
  {
    number: "03",
    icon: Settings,
    title: "Coordinate Preferences",
    body: "We work with you to accommodate individual preferences, dietary needs, seating, and special assistance.",
  },
  {
    number: "04",
    icon: BookCheck,
    title: "Book & Confirm",
    body: "Every passenger receives their confirmed itinerary with all details coordinated for seamless group travel.",
  },
];

/* ------------------------------------------------------------------ */
/*  ANIMATION HELPERS                                                  */
/* ------------------------------------------------------------------ */

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const fadeUpDelay = (delay: number) => ({
  ...fadeUp,
  transition: { ...fadeUp.transition, delay },
});

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function GroupTravelPage() {
  return (
    <>
      <Header />
      <main>
        {/* ───────────── Hero ───────────── */}
        <PageHero
          label="GROUP TRAVEL"
          title="Group Flight Booking Made Easy"
          subtitle="Whether it's 5 people or 50, we coordinate every detail to ensure your group travels together seamlessly."
        />

        {/* ───────────── Overview ───────────── */}
        <section className="bg-white py-[60px] md:py-[100px]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <motion.div {...fadeUp}>
                <p className="text-[13px] font-semibold tracking-[0.15em] text-accent mb-4">
                  OVERVIEW
                </p>
                <h2 className="text-[32px] md:text-[40px] font-bold leading-tight text-text-primary">
                  Comprehensive Group Booking Support
                </h2>
                <p className="text-lg text-text-secondary mt-6 leading-relaxed">
                  Group travel requires careful coordination. From corporate
                  retreats to family reunions, our specialists handle logistics
                  so everyone arrives together and on time.
                </p>
              </motion.div>

              <motion.div {...fadeUpDelay(0.15)} className="space-y-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-trust-green flex-shrink-0" />
                    <span className="text-text-primary font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ───────────── How We Help ───────────── */}
        <section className="bg-surface py-[60px] md:py-[100px]">
          <div className="max-w-[1200px] mx-auto px-6">
            <motion.div {...fadeUp} className="text-center">
              <p className="text-[13px] font-semibold tracking-[0.15em] text-accent mb-4">
                THE PROCESS
              </p>
              <h2 className="text-[32px] md:text-[40px] font-bold leading-tight text-text-primary">
                How We Help With Group Bookings
              </h2>
            </motion.div>

            <div className="relative mt-16">
              <div className="hidden md:block absolute top-5 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] border-t-2 border-dashed border-border" />

              <div className="flex flex-col md:flex-row gap-6">
                {steps.map((step, index) => {
                  const badgeColors = [
                    "bg-accent",
                    "bg-primary",
                    "bg-trust-green",
                    "bg-primary-dark",
                  ];
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.number}
                      {...fadeUpDelay(index * 0.1)}
                      className="flex-1"
                    >
                      <div className="bg-white rounded-2xl py-10 px-8 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-300 relative">
                        <div
                          className={`${badgeColors[index]} text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-5`}
                        >
                          {step.number}
                        </div>
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-6 h-6 text-accent" />
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

        {/* ───────────── CTA ───────────── */}
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
              Planning a Group Trip?
            </motion.h2>

            <motion.p
              {...fadeUpDelay(0.2)}
              className="text-xl text-white/90 mt-6 leading-relaxed"
            >
              Speak with a specialist now — no wait times, no automated menus.
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
