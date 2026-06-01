"use client";

import { motion } from "framer-motion";
import {
  Phone,
  CheckCircle,
  Briefcase,
  Route,
  Crown,
  FileText,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCallBar from "@/components/layout/MobileCallBar";
import PageHero from "@/components/ui/PageHero";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const features = [
  "Schedule-optimized routing",
  "Premium cabin booking",
  "Loyalty program integration",
  "Expense-friendly documentation",
  "Last-minute change support",
  "Corporate rate access",
];

const steps = [
  {
    number: "01",
    icon: Briefcase,
    title: "Share Your Business Needs",
    body: "Tell us your travel requirements — meeting schedules, preferred airports, cabin class, and loyalty program details.",
  },
  {
    number: "02",
    icon: Route,
    title: "We Optimize Your Route",
    body: "Our specialists build itineraries that align with your schedule, minimize travel time, and maximize productivity.",
  },
  {
    number: "03",
    icon: Crown,
    title: "Premium Options Presented",
    body: "Review curated options including premium cabins, lounge access, and fare classes that match your corporate policies.",
  },
  {
    number: "04",
    icon: FileText,
    title: "Confirmed & Documented",
    body: "Receive your confirmed booking with detailed documentation ready for expense reporting and corporate records.",
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

export default function BusinessTravelPage() {
  return (
    <>
      <Header />
      <main>
        {/* ───────────── Hero ───────────── */}
        <PageHero
          label="BUSINESS TRAVEL"
          title="Professional Travel Solutions"
          subtitle="Streamline your corporate travel with expert booking assistance, schedule optimization, and premium service."
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
                  Tailored Business Travel Support
                </h2>
                <p className="text-lg text-text-secondary mt-6 leading-relaxed">
                  Business travel demands precision and flexibility. Our
                  specialists understand corporate needs — from tight schedules
                  to premium cabin preferences — and deliver reliable booking
                  support.
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
                How We Support Business Travelers
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
              Need Business Travel Support?
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
