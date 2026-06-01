"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Shield,
  RefreshCw,
  XCircle,
  Compass,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCallBar from "@/components/layout/MobileCallBar";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const contactMethods = [
  {
    icon: Phone,
    iconBg: "bg-accent",
    title: "Call Us",
    highlight: "1-800-XXX-XXXX",
    description:
      "Available 24/7 — no hold times, no automated menus. Speak directly with a travel specialist.",
    href: "tel:1-800-XXX-XXXX",
  },
  {
    icon: Mail,
    iconBg: "bg-primary",
    title: "Email Us",
    highlight: "support@catchaflight.com",
    description:
      "Send us your travel details and we'll respond within 2 hours with personalized recommendations.",
    href: "mailto:support@catchaflight.com",
  },
  {
    icon: MapPin,
    iconBg: "bg-trust-green",
    title: "Visit Us",
    highlight: "Delhi, India",
    description:
      "Our headquarters are located in Delhi. Schedule an appointment for in-person consultation.",
    href: undefined,
  },
];

const travelTypes = [
  "Domestic Flight",
  "International Flight",
  "Multi-City Trip",
  "Group Booking",
  "Flight Change",
  "Other",
];

const quickHelpItems = [
  {
    icon: Phone,
    title: "Book a New Flight",
    description: "Ready to fly? Tell us your destination and dates.",
  },
  {
    icon: RefreshCw,
    title: "Change an Existing Booking",
    description: "Need to modify dates, routes, or passenger details.",
  },
  {
    icon: XCircle,
    title: "Cancel a Booking",
    description: "We'll guide you through the cancellation process.",
  },
  {
    icon: Compass,
    title: "Get Travel Advice",
    description:
      "Not sure where to go? Our specialists can help you plan.",
  },
];

const formInfoItems = [
  { icon: Clock, text: "Response within 2 hours" },
  { icon: CheckCircle, text: "No obligation consultation" },
  { icon: Shield, text: "Your information is secure" },
];

/* ------------------------------------------------------------------ */
/*  ANIMATION HELPERS                                                  */
/* ------------------------------------------------------------------ */

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeUpDelay = (delay: number) => ({
  ...fadeUp,
  transition: { ...fadeUp.transition, delay },
});

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* ───────────── Section 1 — Page Hero ───────────── */}
        <PageHero
          label="CONTACT US"
          title="Get in Touch"
          subtitle="Ready to book or need assistance? Our travel specialists are available 24/7 to help."
        />

        {/* ───────────── Section 2 — Contact Methods ───────────── */}
        <section className="bg-white py-[60px] md:py-[100px]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => {
                const content = (
                  <motion.div
                    key={method.title}
                    {...fadeUpDelay(index * 0.1)}
                    className="bg-surface rounded-2xl p-8 text-center hover:bg-white hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <div
                      className={`w-14 h-14 rounded-full ${method.iconBg} text-white flex items-center justify-center mx-auto`}
                    >
                      <method.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-lg text-text-primary mt-5">
                      {method.title}
                    </h3>
                    <p className="font-bold text-xl text-text-primary mt-2">
                      {method.highlight}
                    </p>
                    <p className="text-[15px] text-text-secondary mt-3 leading-relaxed">
                      {method.description}
                    </p>
                  </motion.div>
                );

                if (method.href) {
                  return (
                    <a
                      key={method.title}
                      href={method.href}
                      className="block"
                    >
                      {content}
                    </a>
                  );
                }

                return content;
              })}
            </div>
          </div>
        </section>

        {/* ───────────── Section 3 — Contact Form ───────────── */}
        <section className="bg-surface py-[60px] md:py-[100px]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
              {/* Left Column — Info */}
              <motion.div {...fadeUp}>
                <p className="text-[13px] font-semibold tracking-[0.15em] text-accent mb-4">
                  SEND A MESSAGE
                </p>
                <h2 className="text-[32px] md:text-[40px] font-bold leading-tight text-text-primary">
                  Tell Us About Your Trip
                </h2>
                <p className="mt-4 text-lg text-text-secondary leading-relaxed">
                  Fill out the form and one of our travel specialists will get
                  back to you with personalized flight options and guidance.
                </p>

                <div className="mt-8 space-y-5">
                  {formInfoItems.map((item) => (
                    <div
                      key={item.text}
                      className="flex items-center gap-3"
                    >
                      <item.icon className="w-5 h-5 text-trust-green flex-shrink-0" />
                      <span className="text-[15px] text-text-primary font-medium">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right Column — Form */}
              <motion.div {...fadeUpDelay(0.15)}>
                <div className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="space-y-5"
                  >
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-text-primary block">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Smith"
                        className="w-full border border-border rounded-lg py-3 px-4 text-base focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-text-primary block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full border border-border rounded-lg py-3 px-4 text-base focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-text-primary block">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="w-full border border-border rounded-lg py-3 px-4 text-base focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                      />
                    </div>

                    {/* Travel Type */}
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-text-primary block">
                        Travel Type
                      </label>
                      <select className="w-full border border-border rounded-lg py-3 px-4 text-base focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all bg-white">
                        <option value="" disabled selected>
                          Select travel type
                        </option>
                        {travelTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Preferred Travel Dates */}
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-text-primary block">
                        Preferred Travel Dates
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. June 15-22, 2026"
                        className="w-full border border-border rounded-lg py-3 px-4 text-base focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-text-primary block">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your travel plans..."
                        className="w-full border border-border rounded-lg py-3 px-4 text-base focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-accent text-white py-4 rounded-lg font-semibold text-base hover:scale-[1.03] transition-all duration-300 shadow-[0_4px_16px_rgba(232,98,42,0.3)]"
                    >
                      Send Message
                    </button>

                    <p className="text-sm text-text-secondary text-center">
                      We&apos;ll get back to you within 2 hours during business
                      hours.
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ───────────── Section 4 — Quick Help ───────────── */}
        <section className="bg-white py-[60px] md:py-[100px]">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionHeader
              label="QUICK HELP"
              title="Common Requests"
              centered
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
              {quickHelpItems.map((item, index) => {
                const iconColors = [
                  "bg-accent",
                  "bg-primary",
                  "bg-trust-green",
                  "bg-primary-dark",
                ];
                return (
                  <motion.div
                    key={item.title}
                    {...fadeUpDelay(index * 0.08)}
                    className="bg-surface rounded-xl p-6 hover:bg-white hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] transition-all duration-300"
                  >
                    <div
                      className={`w-10 h-10 rounded-full ${iconColors[index]} text-white flex items-center justify-center`}
                    >
                      <item.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-text-primary mt-4">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                      {item.description}
                    </p>
                    <a
                      href="tel:1-800-XXX-XXXX"
                      className="inline-block text-accent font-medium text-sm mt-3 hover:underline"
                    >
                      Get Help &rarr;
                    </a>
                  </motion.div>
                );
              })}
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
              GET STARTED TODAY
            </motion.p>

            <motion.h2
              {...fadeUpDelay(0.1)}
              className="text-[36px] md:text-[48px] font-extrabold text-white mt-4 leading-tight"
            >
              Ready to Start Planning?
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
