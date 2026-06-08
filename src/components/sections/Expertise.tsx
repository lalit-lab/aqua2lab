"use client";

import { motion } from "framer-motion";
import { expertise } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Expertise() {
  return (
    <section id="expertise" className="py-48 bg-bg1 relative overflow-hidden">
      {/* Dynamic Background Noise/Texture could be added here for extra premium feel */}
      
      <div className="max-w-[1800px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-[1px] bg-gold" />
              <p className="text-[0.7rem] tracking-[0.6em] uppercase text-gold font-black">
                The Methodology
              </p>
            </div>
            <h2 className="font-playfair text-7xl md:text-9xl font-bold leading-[0.85] text-white">
              Cultivating <span className="gold-text italic">Art.</span>
            </h2>
          </div>
          <p className="text-cream/30 max-w-md text-xl md:text-2xl font-light leading-relaxed">
            We merge botanical science with high-concept design to deliver maintenance-free living installations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-[3rem] overflow-hidden">
          {expertise.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="bg-bg1 p-16 md:p-20 hover:bg-bg2/40 transition-all duration-700 group relative"
            >
              <div className="absolute top-0 right-0 p-8">
                <span className="text-white/5 text-9xl font-playfair font-black transition-colors group-hover:text-gold/10 duration-700">
                  {idx + 1}
                </span>
              </div>
              
              <h3 className={cn(
                "font-playfair text-4xl font-bold mb-10 transition-transform duration-700 group-hover:-translate-y-2",
                item.color === "gold" ? "gold-text" : "text-mint-light"
              )}>
                {item.title}
              </h3>
              
              <p className="text-cream/50 text-xl leading-relaxed mb-12 font-light tracking-tight group-hover:text-cream/70 transition-colors duration-700">
                {item.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mt-auto">
                {item.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-5 py-2 rounded-full border border-white/5 text-[0.6rem] tracking-[0.3em] font-black uppercase text-cream/20 group-hover:border-gold/30 group-hover:text-gold transition-all duration-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
