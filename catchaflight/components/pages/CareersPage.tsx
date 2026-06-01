"use client";

import { motion } from "framer-motion";
import {
  Heart,
  TrendingUp,
  Users,
  Phone,
  Briefcase,
  MapPin,
  CheckCircle,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCallBar from "@/components/layout/MobileCallBar";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const whyCards = [
  {
    icon: Heart,
    iconBg: "bg-accent",
    title: "Meaningful Work",
    body: "Help real travelers navigate their journeys. Every call you take makes someone's trip better.",
  },
  {
    icon: TrendingUp,
    iconBg: "bg-primary",
    title: "Growth Opportunities",
    body: "We invest in our team with training, mentorship, and clear paths for career advancement.",
  },
  {
    icon: Users,
    iconBg: "bg-trust-green",
    title: "Great Team Culture",
    body: "Join a collaborative, supportive team that values work-life balance and celebrates success together.",
  },
];

const openPositions = [
  {
    title: "Senior Travel Specialist",
    type: "Full Time",
    location: "Delhi, India",
    description:
      "Guide travelers through complex flight bookings with expertise and care.",
  },
  {
    title: "Customer Support Representative",
    type: "Full Time",
    location: "Remote",
    description:
      "Provide exceptional support to travelers via phone and email.",
  },
  {
    title: "Travel Operations Manager",
    type: "Full Time",
    location: "Delhi, India",
    description:
      "Lead our operations team and optimize the booking experience.",
  },
  {
    title: "Marketing Specialist",
    type: "Full Time",
    location: "Remote",
    description:
      "Drive growth through creative marketing strategies and content.",
  },
];

const benefits = [
  "Competitive Salary",
  "Health Insurance",
  "Remote Flexibility",
  "Paid Time Off",
  "Training Programs",
  "Team Events",
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

export default function CareersPage() {
  return (
    <>
      <Header />
      <main>
        {/* ───────────── Section 1 — Page Hero ───────────── */}
        <PageHero
          label="CAREERS"
          title="Join Our Team"
          subtitle="Help us redefine the travel booking experience. We're looking for passionate people who believe in real human support."
        />

        {/* ───────────── Section 2 — Why Join Us ───────────── */}
        <section className="bg-white py-[60px] md:py-[100px]">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionHeader
              label="WHY CATCHAFLIGHT"
              title="Why Work With Us"
              centered
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
              {whyCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  {...fadeUpDelay(index * 0.1)}
                  className="bg-surface rounded-2xl p-8 text-center hover:bg-white hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 rounded-full ${card.iconBg} text-white flex items-center justify-center mx-auto`}
                  >
                    <card.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg text-text-primary mt-5">
                    {card.title}
                  </h3>
                  <p className="text-[15px] text-text-secondary mt-3 leading-relaxed">
                    {card.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── Section 3 — Open Positions ───────────── */}
        <section data-section="positions" className="bg-surface py-[60px] md:py-[100px]">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionHeader
              label="OPEN POSITIONS"
              title="Current Opportunities"
              centered
            />

            <div className="mt-14 space-y-4">
              {openPositions.map((job, index) => (
                <motion.div
                  key={job.title}
                  {...fadeUpDelay(index * 0.08)}
                  className="bg-white rounded-xl p-6 border border-border hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-bold text-lg text-text-primary">
                          {job.title}
                        </h3>
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                          {job.type}
                        </span>
                        <span className="bg-surface text-text-secondary px-3 py-1 rounded-full text-xs flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {job.location}
                        </span>
                      </div>
                      <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                    <a
                      href="mailto:support@catchaflight.com"
                      className="inline-flex items-center gap-1 text-accent font-semibold text-sm whitespace-nowrap hover:underline flex-shrink-0"
                    >
                      Apply Now &rarr;
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── Section 4 — Benefits ───────────── */}
        <section className="bg-white py-[60px] md:py-[100px]">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionHeader
              label="BENEFITS"
              title="What We Offer"
              centered
            />

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  {...fadeUpDelay(index * 0.06)}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-trust-green flex-shrink-0" />
                  <span className="font-medium text-text-primary">
                    {benefit}
                  </span>
                </motion.div>
              ))}
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
              Ready to Make a Difference?
            </motion.h2>

            <motion.p
              {...fadeUpDelay(0.2)}
              className="text-xl text-white/90 mt-6 leading-relaxed"
            >
              Join a team that&apos;s passionate about making travel booking
              better for everyone.
            </motion.p>

            <motion.div {...fadeUpDelay(0.3)} className="mt-10">
              <a
                href="#open-positions"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("[data-section='positions']")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-white text-primary font-bold text-lg px-12 py-5 rounded-lg hover:bg-white/95 hover:scale-[1.03] transition-all duration-300 cursor-pointer"
              >
                <Briefcase className="w-5 h-5" />
                View Open Positions
              </a>
            </motion.div>

            <motion.p
              {...fadeUpDelay(0.4)}
              className="text-white/70 text-[15px] mt-8"
            >
              &#10003; Great culture &nbsp;&nbsp; &#10003; Growth opportunities
              &nbsp;&nbsp; &#10003; Meaningful work
            </motion.p>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
