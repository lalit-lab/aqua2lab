"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { packages } from "@/lib/data";

export default function Packages({ openQuiz }: { openQuiz: (pkg: string) => void }) {
  return (
    <section id="packages" className="py-32 bg-bg0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 mb-6">
             <p className="text-[0.65rem] tracking-[0.4em] uppercase text-gold font-bold">
              Investment Plans
            </p>
          </div>
          <h2 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
            Service <span className="gold-text">Tiers</span>
          </h2>
          <p className="mt-4 text-cream/50 max-w-2xl mx-auto text-lg font-light">
            We provide transparent pricing for every scale of project, from nano aquascapes for luxury apartments to grand-scale corporate installations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={cn(
                "p-10 rounded-[2.5rem] flex flex-col transition-all duration-500",
                pkg.isPopular 
                  ? "bg-bg2 border border-gold/30 shadow-[0_32px_64px_-16px_rgba(212,175,55,0.1)] relative lg:scale-105 z-10" 
                  : "bg-bg1 border border-white/5 hover:border-gold/20"
              )}
            >
              {pkg.isPopular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full text-[0.7rem] font-black tracking-[0.2em] bg-linear-to-r from-gold to-gold-dark text-bg0 shadow-lg">
                  RECOMMENDED
                </div>
              )}
              
              <div className="mb-10">
                <p className="text-[0.7rem] tracking-[0.3em] uppercase text-mint font-bold mb-4">
                  {pkg.name}
                </p>
                <h3 className="font-playfair text-4xl font-bold text-cream mb-4">
                  {pkg.title}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-playfair font-black gold-text">{pkg.price}</span>
                  {pkg.price !== "Custom" && <span className="text-cream/30 text-sm">onwards</span>}
                </div>
              </div>

              <div className="flex-1 space-y-5 mb-12">
                {pkg.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-mint/10 flex items-center justify-center shrink-0 group-hover:bg-mint/20 transition-colors">
                      <Check size={14} className="text-mint" />
                    </div>
                    <span className="text-cream/60 text-sm font-light tracking-wide group-hover:text-cream transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => openQuiz(`${pkg.title} (${pkg.name})`)}
                className={cn(
                  "w-full py-5 rounded-2xl text-[0.8rem] font-black tracking-[0.2em] uppercase transition-all duration-300",
                  pkg.isPopular 
                    ? "bg-linear-to-r from-gold to-gold-dark text-bg0 shadow-xl hover:shadow-gold/20 hover:scale-[1.02]" 
                    : "border border-gold/30 text-gold hover:bg-gold/5"
                )}
              >
                Inquire Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
