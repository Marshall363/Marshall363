"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Heart,
  Star,
  CheckCircle,
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

const stats = [
  { value: "10,000+", label: "Flights Booked" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "24/7", label: "Support Available" },
  { value: "50+", label: "Airlines Covered" },
];

const values = [
  {
    icon: Shield,
    iconBg: "bg-primary",
    title: "Trust & Transparency",
    body: "No hidden fees, no surprises. We believe in clear communication and honest guidance at every step.",
  },
  {
    icon: Heart,
    iconBg: "bg-accent",
    title: "People First",
    body: "Behind every booking is a real person with unique needs. We listen, understand, and deliver personalized solutions.",
  },
  {
    icon: Star,
    iconBg: "bg-star",
    title: "Excellence",
    body: "We hold ourselves to the highest standards of service, continuously improving to exceed traveler expectations.",
  },
];

const differentiators = [
  "Dedicated travel specialists, not chatbots",
  "Personalized recommendations based on your needs",
  "Proactive support for complex itineraries",
  "Post-booking assistance for changes and updates",
  "24/7 availability for urgent travel needs",
];

const promises = [
  "Real human support on every call",
  "No automated menus or chatbots",
  "Expert guidance for complex trips",
  "Transparent pricing, no surprises",
  "Available 24/7, 365 days a year",
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

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* ───────────── Section 1 — Page Hero ───────────── */}
        <PageHero
          label="ABOUT US"
          title="About Catchaflight"
          subtitle="Premium flight booking assistance built on one simple belief: travel should be supported by real people who care."
        />

        {/* ───────────── Section 2 — Our Story ───────────── */}
        <section className="bg-white py-[60px] md:py-[100px]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left — Story text */}
              <motion.div
                {...fadeUp}
              >
                <p className="text-[13px] font-semibold tracking-[0.15em] text-accent">
                  OUR STORY
                </p>
                <h2 className="text-[32px] md:text-[40px] font-bold text-text-primary leading-tight mt-4">
                  Why We Built Catchaflight
                </h2>
                <p className="text-lg text-text-secondary mt-6 leading-relaxed">
                  Catchaflight was born from a simple frustration: booking flights
                  had become impersonal, confusing, and stressful. We believed
                  travelers deserved better.
                </p>
                <p className="text-lg text-text-secondary mt-4 leading-relaxed">
                  We built a service where experienced travel specialists handle
                  the complexity — so you don&apos;t have to navigate automated
                  systems, confusing fare structures, or hidden policies alone.
                </p>
                <p className="text-lg text-text-secondary mt-4 leading-relaxed">
                  Today, we help thousands of travelers book with confidence,
                  offering the personal touch that modern travel booking lost
                  along the way.
                </p>
              </motion.div>

              {/* Right — Stats card */}
              <motion.div
                {...fadeUpDelay(0.15)}
                className="bg-primary rounded-2xl p-12"
              >
                <div className="grid grid-cols-2 gap-10">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-[36px] md:text-[42px] font-extrabold text-white leading-none">
                        {stat.value}
                      </p>
                      <p className="text-white/70 text-sm font-medium mt-2">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ───────────── Section 3 — Our Values ───────────── */}
        <section className="bg-surface py-[60px] md:py-[100px]">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionHeader
              label="OUR VALUES"
              title="What We Stand For"
              centered
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  {...fadeUpDelay(index * 0.1)}
                  className="bg-white rounded-2xl p-8 text-center hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 rounded-full ${value.iconBg} flex items-center justify-center mx-auto`}
                  >
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-text-primary mt-5">
                    {value.title}
                  </h3>
                  <p className="text-[15px] text-text-secondary mt-3 leading-relaxed">
                    {value.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── Section 4 — Our Approach ───────────── */}
        <section className="bg-white py-[60px] md:py-[100px]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left — Text */}
              <motion.div {...fadeUp}>
                <p className="text-[13px] font-semibold tracking-[0.15em] text-accent">
                  OUR APPROACH
                </p>
                <h2 className="text-[32px] md:text-[40px] font-bold text-text-primary leading-tight mt-4">
                  How We&apos;re Different
                </h2>
                <p className="text-lg text-text-secondary mt-6 leading-relaxed">
                  Unlike automated booking platforms, every interaction at
                  Catchaflight involves a real human specialist who understands
                  your unique travel situation.
                </p>
                <ul className="mt-8 space-y-4">
                  {differentiators.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-trust-green flex-shrink-0 mt-0.5" />
                      <span className="text-text-primary font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Right — Promise card */}
              <motion.div
                {...fadeUpDelay(0.15)}
                className="bg-surface rounded-2xl p-8"
              >
                <h3 className="font-bold text-xl text-text-primary mb-6">
                  The Catchaflight Promise
                </h3>
                <ul className="space-y-5">
                  {promises.map((promise) => (
                    <li key={promise} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-trust-green flex-shrink-0 mt-0.5" />
                      <span className="text-text-primary font-medium">
                        {promise}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ───────────── Section 5 — CTA ───────────── */}
        <section className="bg-gradient-to-br from-accent to-accent-dark py-[60px] md:py-[100px]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.p
              {...fadeUp}
              className="text-[13px] font-semibold tracking-[0.15em] text-white/80"
            >
              JOIN US
            </motion.p>

            <motion.h2
              {...fadeUpDelay(0.1)}
              className="text-[36px] md:text-[48px] font-extrabold text-white mt-4 leading-tight"
            >
              Join Thousands of Confident Travelers
            </motion.h2>

            <motion.p
              {...fadeUpDelay(0.2)}
              className="text-xl text-white/90 mt-6 leading-relaxed"
            >
              Experience the difference that real human support makes. Book your
              next flight with a specialist who cares about your journey.
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
