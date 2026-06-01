"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RefreshCw,
  XCircle,
  Users,
  Globe,
  Heart,
  Briefcase,
  Phone,
  Mail,
  MessageSquare,
  ChevronDown,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCallBar from "@/components/layout/MobileCallBar";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const categories = [
  {
    icon: RefreshCw,
    iconBg: "bg-accent",
    title: "Flight Changes & Rescheduling",
    body: "Need to change your flight? We guide you through airline policies and handle modifications.",
    href: "/support/flight-changes",
  },
  {
    icon: XCircle,
    iconBg: "bg-red-500",
    title: "Cancellations & Refunds",
    body: "Navigate cancellation processes and understand refund options with expert guidance.",
    href: "/support/cancellations",
  },
  {
    icon: Users,
    iconBg: "bg-primary",
    title: "Group Travel",
    body: "Coordinating flights for groups — corporate, family, or events. We make it simple.",
    href: "/support/group-travel",
  },
  {
    icon: Globe,
    iconBg: "bg-trust-green",
    title: "International Flights",
    body: "Complex international itineraries, visa routes, and multi-leg bookings handled with care.",
    href: "/support/international-flights",
  },
  {
    icon: Heart,
    iconBg: "bg-pink-500",
    title: "Family Travel",
    body: "Book comfortable, convenient flights for the whole family with special needs accommodated.",
    href: "/support/family-travel",
  },
  {
    icon: Briefcase,
    iconBg: "bg-amber-600",
    title: "Business Travel",
    body: "Corporate travel booking with schedule optimization, premium cabins, and loyalty programs.",
    href: "/support/business-travel",
  },
];

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    detail: "1-800-XXX-XXXX",
    note: "Available 24/7, no wait times",
    href: "tel:1-800-XXX-XXXX",
  },
  {
    icon: Mail,
    title: "Email Us",
    detail: "support@catchaflight.com",
    note: "Response within 2 hours",
    href: "mailto:support@catchaflight.com",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    detail: "Chat with a specialist",
    note: "Available during business hours",
    href: undefined,
  },
];

const faqs = [
  {
    question: "Can I speak with someone before booking?",
    answer:
      "Yes. Our experienced travel specialists are available to help you understand your options, answer questions, and guide you through the booking process — no chatbots, no automated menus.",
  },
  {
    question: "Do you help with international travel?",
    answer:
      "Yes. We assist with both domestic and international flight bookings, including complex multi-city itineraries, visa-required destinations, and long-haul flights.",
  },
  {
    question: "Can you help with itinerary changes?",
    answer:
      "Yes. We provide guidance and support for flight changes, rescheduling, cancellations, and upgrades — helping you navigate airline policies without the confusion.",
  },
  {
    question: "Do you offer assistance for family travel?",
    answer:
      "Yes. We specialize in coordinating travel plans for families, groups, and multi-generational trips, ensuring everyone's flights align and special needs are met.",
  },
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

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <main>
        {/* ───────────── Section 1 — Page Hero ───────────── */}
        <PageHero
          label="SUPPORT"
          title="How Can We Help?"
          subtitle="Our experienced travel specialists are here to assist you with all your flight booking needs."
        />

        {/* ───────────── Section 2 — Support Categories ───────────── */}
        <section className="bg-white py-[60px] md:py-[100px]">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionHeader
              label="SUPPORT SERVICES"
              title="What We Can Help With"
              centered
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((cat, index) => (
                <motion.div
                  key={cat.title}
                  {...fadeUpDelay(index * 0.08)}
                  className="bg-surface rounded-xl p-7 hover:bg-white hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-full ${cat.iconBg} flex items-center justify-center`}
                  >
                    <cat.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-text-primary mt-5">
                    {cat.title}
                  </h3>
                  <p className="text-[15px] text-text-secondary mt-2 leading-relaxed">
                    {cat.body}
                  </p>
                  <a
                    href={cat.href}
                    className="inline-block text-accent font-semibold text-[15px] mt-4 hover:underline"
                  >
                    Learn More &rarr;
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── Section 3 — Contact Methods ───────────── */}
        <section className="bg-surface py-[60px] md:py-[100px]">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionHeader
              label="GET IN TOUCH"
              title="Multiple Ways to Reach Us"
              centered
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => {
                const inner = (
                  <>
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto">
                      <method.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg text-text-primary mt-5">
                      {method.title}
                    </h3>
                    <p className="font-bold text-text-primary mt-2">
                      {method.detail}
                    </p>
                    <p className="text-sm text-text-secondary mt-1">
                      {method.note}
                    </p>
                  </>
                );

                return (
                  <motion.div
                    key={method.title}
                    {...fadeUpDelay(index * 0.1)}
                    className="bg-white rounded-2xl p-8 text-center hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] transition-all duration-300"
                  >
                    {method.href ? (
                      <a href={method.href} className="block">
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ───────────── Section 4 — FAQ Preview ───────────── */}
        <section className="bg-white py-[60px] md:py-[100px]">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionHeader
              label="COMMON QUESTIONS"
              title="Frequently Asked Questions"
              centered
            />

            <div className="mt-14 max-w-3xl mx-auto">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={index} className="border-b border-border">
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full flex justify-between items-center py-5 cursor-pointer"
                    >
                      <span className="font-semibold text-[17px] text-text-primary text-left">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-text-secondary flex-shrink-0 ml-4 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="bg-surface/50 rounded-lg -mx-4 px-4">
                            <p className="text-base text-text-secondary leading-relaxed pb-5 pt-2">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              <div className="mt-8 text-center">
                <a
                  href="/faq"
                  className="inline-block text-accent font-semibold hover:underline"
                >
                  View all FAQs &rarr;
                </a>
              </div>
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
              IMMEDIATE ASSISTANCE
            </motion.p>

            <motion.h2
              {...fadeUpDelay(0.1)}
              className="text-[36px] md:text-[48px] font-extrabold text-white mt-4 leading-tight"
            >
              Need Immediate Assistance?
            </motion.h2>

            <motion.p
              {...fadeUpDelay(0.2)}
              className="text-xl text-white/90 mt-6 leading-relaxed"
            >
              Our specialists are standing by to help you with any flight
              booking question, change, or concern. Real human support, always.
            </motion.p>

            <motion.div {...fadeUpDelay(0.3)} className="mt-10">
              <a
                href="tel:1-800-XXX-XXXX"
                className="inline-flex items-center gap-2 bg-white text-primary font-bold text-lg px-12 py-5 rounded-lg hover:bg-white/95 hover:scale-[1.03] transition-all duration-300 cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                Speak With a Specialist
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
