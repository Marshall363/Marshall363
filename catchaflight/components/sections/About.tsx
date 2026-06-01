"use client";

import { motion } from "framer-motion";

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "10,000+", label: "Flights Booked" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "24/7", label: "Support Available" },
  { value: "50+", label: "Airlines Covered" },
];

export default function About() {
  return (
    <section className="bg-surface py-[60px] md:py-[100px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-primary rounded-2xl p-12"
          >
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`${
                    index % 2 === 0 ? "border-r border-white/15" : ""
                  } ${index < 2 ? "border-b border-white/15 pb-8" : ""}`}
                >
                  <p className="font-extrabold text-[36px] md:text-[40px] text-white leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-sm text-white/70 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - About Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <span className="text-[13px] font-semibold tracking-[0.15em] text-accent uppercase">
              ABOUT US
            </span>
            <h2 className="text-[32px] md:text-[40px] font-bold text-text-primary leading-tight mt-4">
              About Catchaflight
            </h2>
            <div className="space-y-4 mt-6">
              <p className="text-lg text-text-secondary leading-relaxed">
                Catchaflight was created for travelers who value clarity,
                professionalism, and real human support.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                We believe booking travel should be simple, transparent, and
                reassuring — not confusing or automated.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                Our mission is to help you navigate flight reservations with
                confidence through thoughtful assistance, responsive service, and
                a premium customer experience you can trust.
              </p>
            </div>
            <a
              href="#"
              className="inline-block text-primary font-semibold hover:underline mt-6"
            >
              Learn More About Us &rarr;
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
