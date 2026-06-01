"use client";

import { motion } from "framer-motion";
import { Phone, MessageSquare, CheckCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const steps = [
  {
    number: "01",
    badgeColor: "bg-accent",
    icon: Phone,
    title: "Call or Click",
    body: "Click 'Speak With a Travel Specialist' or call us directly. No hold queues, no automated menus.",
  },
  {
    number: "02",
    badgeColor: "bg-primary",
    icon: MessageSquare,
    title: "Speak With a Specialist",
    body: "Get personalized flight options, route recommendations, and expert advice tailored to your trip.",
  },
  {
    number: "03",
    badgeColor: "bg-trust-green",
    icon: CheckCircle,
    title: "Book With Confidence",
    body: "Confirm your reservation knowing every detail has been handled by an experienced travel professional.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-surface py-[60px] md:py-[100px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="THE PROCESS"
          title="How It Works"
          subtitle="Getting expert flight booking help is simple."
          centered
        />

        <div className="relative mt-16">
          {/* Dashed connector line (desktop only) */}
          <div className="hidden md:block absolute top-5 left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] border-t-2 border-dashed border-border" />

          <div className="flex flex-col md:flex-row gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                className="flex-1"
              >
                <div className="bg-white rounded-2xl py-10 px-8 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-300 relative">
                  {/* Number badge */}
                  <div
                    className={`${step.badgeColor} text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-5`}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <step.icon
                    size={32}
                    className="text-text-secondary mx-auto mb-5"
                  />

                  {/* Title */}
                  <h3 className="font-semibold text-lg text-text-primary mb-3">
                    {step.title}
                  </h3>

                  {/* Body */}
                  <p className="text-[15px] text-text-secondary leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="primary" size="large" showPhone>
            Speak With a Travel Specialist
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
