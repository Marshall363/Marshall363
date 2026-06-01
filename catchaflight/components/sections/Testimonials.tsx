"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  location: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Saved me hours trying to sort out a complex multi-city trip. The specialist handled everything perfectly.",
    name: "Sarah J.",
    location: "New York, USA",
    initials: "SJ",
  },
  {
    quote:
      "International flight changes used to stress me out. Catchaflight made it completely painless.",
    name: "Raj P.",
    location: "Mumbai, India",
    initials: "RP",
  },
  {
    quote:
      "Booked flights for our whole family — 6 people, different needs. The agent knew exactly what to do.",
    name: "Emma T.",
    location: "Toronto, Canada",
    initials: "ET",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-[60px] md:py-[100px]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[13px] font-semibold tracking-[0.15em] text-accent"
          >
            TESTIMONIALS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[32px] md:text-[40px] font-bold text-text-primary mt-2"
          >
            What Travelers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-text-secondary mt-3"
          >
            Real experiences from travelers who booked with confidence.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-surface rounded-2xl p-8 border-t-4 border-accent"
            >
              {/* Decorative Quote Mark */}
              <span className="text-accent text-5xl font-serif leading-none mb-2 block">
                &ldquo;
              </span>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-star fill-star"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-base text-gray-700 italic leading-relaxed">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-6">
                <div className="w-12 h-12 rounded-full bg-primary text-white font-semibold flex items-center justify-center">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-bold text-[15px] text-text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-400">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
