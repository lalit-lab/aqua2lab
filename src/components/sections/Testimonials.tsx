"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-40 bg-bg0 overflow-hidden relative">
      {/* Decorative quotes background */}
      <Quote className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] text-white/[0.02] -z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
           <p className="text-[0.65rem] tracking-[0.4em] uppercase text-mint font-bold mb-6">
            Client Perspectives
          </p>
          <h2 className="font-playfair text-5xl md:text-7xl font-bold">
            The <span className="gold-text">Feedback</span>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="min-h-[400px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full text-center"
              >
                <p className="font-playfair italic text-3xl md:text-5xl lg:text-6xl text-cream/90 leading-[1.1] mb-16 tracking-tight">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-[1px] bg-gold mb-6" />
                  <p className="text-cream font-bold tracking-[0.2em] text-sm uppercase mb-1">
                    {testimonials[current].author}
                  </p>
                  <p className="text-cream/30 text-[0.65rem] tracking-[0.3em] uppercase">
                    {testimonials[current].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Minimalist Indicators */}
          <div className="flex justify-center gap-4 mt-20">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className="group p-2"
              >
                <div className={`h-[2px] transition-all duration-500 ${
                  current === idx ? "w-12 bg-gold" : "w-4 bg-white/10 group-hover:bg-white/20"
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
