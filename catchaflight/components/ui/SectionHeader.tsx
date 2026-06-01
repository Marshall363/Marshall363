"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={centered ? "text-center" : ""}
    >
      <p className="text-[13px] font-semibold tracking-[0.15em] text-accent mb-4">
        {label}
      </p>
      <h2
        className={`text-[32px] md:text-[40px] font-bold leading-tight ${
          light ? "text-white" : "text-text-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/80" : "text-text-secondary"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
