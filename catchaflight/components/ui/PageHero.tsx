"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

interface PageHeroProps {
  label: string;
  title: string;
  subtitle: string;
}

export default function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[13px] font-semibold tracking-[0.15em] text-accent"
        >
          {label}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[36px] md:text-[52px] font-extrabold leading-[1.1] text-white mt-4"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/80 mt-6 max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8"
        >
          <a
            href="tel:1-800-XXX-XXXX"
            className="inline-flex items-center gap-2 bg-accent text-white rounded-lg px-8 py-4 font-semibold text-lg shadow-[0_4px_16px_rgba(232,98,42,0.3)] hover:scale-[1.03] transition-transform duration-300"
          >
            <Phone className="w-5 h-5" />
            Speak With a Specialist
          </a>
        </motion.div>
      </div>
    </section>
  );
}
