"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-[60px] md:py-[100px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="text-[13px] font-semibold tracking-[0.15em] text-accent uppercase">
              FAQ
            </span>
            <h2 className="text-[32px] md:text-[40px] font-bold text-text-primary leading-tight mt-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-text-secondary mt-4">
              Everything you need to know about booking with Catchaflight.
            </p>
            <a
              href="/contact"
              className="inline-block text-primary font-semibold hover:underline mt-6"
            >
              Still have questions? Speak with a specialist &rarr;
            </a>
          </motion.div>

          {/* Right Column - Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
