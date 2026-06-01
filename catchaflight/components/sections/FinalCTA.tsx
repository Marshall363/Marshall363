"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-gradient-to-br from-accent to-accent-dark py-[60px] md:py-[100px]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-[13px] font-semibold tracking-[0.15em] text-white/80"
        >
          GET STARTED TODAY
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="text-[36px] md:text-[48px] font-extrabold text-white mt-4 leading-tight"
        >
          Ready to Book With Confidence?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="text-xl text-white/90 mt-6 leading-relaxed"
        >
          Speak directly with an experienced travel specialist — no chatbots, no
          automated menus, just real human support.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className="mt-10"
        >
          <a
            href="tel:1-800-XXX-XXXX"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold text-lg px-12 py-5 rounded-lg hover:bg-white/95 hover:scale-[1.03] transition-all duration-300 cursor-pointer"
          >
            <Phone className="w-5 h-5" />
            Speak With a Travel Specialist
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="mt-6"
        >
          <a
            href="tel:1-800-XXX-XXXX"
            className="inline-flex items-center gap-2 text-white/80 font-medium hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            Or call directly: 1-800-XXX-XXXX
          </a>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          className="text-white/70 text-[15px] mt-6"
        >
          &#10003; No wait times &nbsp;&nbsp; &#10003; Real human agents
          &nbsp;&nbsp; &#10003; Available 24/7
        </motion.p>
      </div>
    </section>
  );
}
