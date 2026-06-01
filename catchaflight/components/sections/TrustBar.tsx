"use client";

import { motion } from "framer-motion";
import { Shield, Users, Clock, Globe, Star } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "Trusted Support", iconClass: "text-trust-green" },
  { icon: Users, label: "Real Human Agents", iconClass: "text-primary" },
  { icon: Clock, label: "24/7 Availability", iconClass: "text-accent" },
  { icon: Globe, label: "International Coverage", iconClass: "text-primary" },
  { icon: Star, label: "5-Star Rated Service", iconClass: "text-star" },
];

export default function TrustBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-surface border-t border-b border-border py-6"
    >
      {/* Desktop layout */}
      <div className="hidden md:flex items-center justify-center gap-12">
        {trustItems.map((item, index) => (
          <div key={item.label} className="flex items-center gap-12">
            <div className="flex items-center gap-2">
              <item.icon size={20} className={item.iconClass} />
              <span className="font-semibold text-sm text-gray-700">
                {item.label}
              </span>
            </div>
            {index < trustItems.length - 1 && (
              <div className="h-6 w-px bg-border" />
            )}
          </div>
        ))}
      </div>

      {/* Mobile layout */}
      <div className="grid grid-cols-2 gap-4 px-6 md:hidden">
        {trustItems.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <item.icon size={20} className={item.iconClass} />
            <span className="font-semibold text-sm text-gray-700">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
