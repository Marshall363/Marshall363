"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const comparisonRows = [
  {
    feature: "Support Type",
    us: "Real human specialists",
    them: "Chatbots & automated menus",
  },
  {
    feature: "Phone Access",
    us: "Prominently available",
    them: "Hidden or unavailable",
  },
  {
    feature: "Complex Itineraries",
    us: "Specialized guidance",
    them: "Self-serve only",
  },
  {
    feature: "Flight Changes",
    us: "Personal expert help",
    them: "Confusing automated process",
  },
  {
    feature: "Pricing Clarity",
    us: "Transparent, no surprises",
    them: "Dynamic pricing traps",
  },
  {
    feature: "Booking Experience",
    us: "Confidence & clarity",
    them: "Stressful & confusing",
  },
];

export default function TheDifference() {
  return (
    <section className="bg-primary py-[60px] md:py-[100px]">
      <div className="max-w-[900px] mx-auto px-6 text-center">
        <SectionHeader
          label="THE CATCHAFLIGHT DIFFERENCE"
          title="A Better Way to Book Flights"
          subtitle="While other platforms prioritize algorithms and automation, we prioritize you."
          centered
          light
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mt-12 overflow-x-auto"
        >
          <table className="w-full border border-white/15 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-white/10">
                <th className="px-5 py-4 text-left text-[15px] text-white font-semibold">
                  Feature
                </th>
                <th className="px-5 py-4 text-left text-[15px] text-accent font-bold">
                  Catchaflight
                </th>
                <th className="px-5 py-4 text-left text-[15px] text-white/60 font-medium">
                  Typical Booking Sites
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, index) => (
                <tr
                  key={row.feature}
                  className={index % 2 === 0 ? "bg-white/5" : ""}
                >
                  <td className="px-5 py-4 text-[15px] text-white/90 font-medium">
                    {row.feature}
                  </td>
                  <td className="px-5 py-4 text-[15px] text-white/90">
                    <span className="inline-flex items-center gap-2">
                      <Check size={18} className="text-trust-green flex-shrink-0" />
                      {row.us}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-[15px] text-white/90">
                    <span className="inline-flex items-center gap-2">
                      <X size={18} className="text-white/40 flex-shrink-0" />
                      {row.them}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
