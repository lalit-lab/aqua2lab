"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { galleryItems, galleryCategories } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems = activeTab === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <section id="gallery" className="py-40 bg-bg1 relative">
      {/* Structural background line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2 hidden lg:block" />

      <div className="max-w-[1800px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-mint" />
              <p className="text-[0.65rem] tracking-[0.5em] uppercase text-mint font-black">
                The Collections
              </p>
            </div>
            <h2 className="font-playfair text-6xl md:text-8xl font-bold leading-[0.9] text-white">
              Selected <span className="gold-text">Work.</span>
            </h2>
          </div>

          {/* Luxury Tab Navigation */}
          <div className="flex flex-wrap gap-10">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className="relative py-2 group"
              >
                <span className={cn(
                  "text-[0.7rem] tracking-[0.4em] font-black uppercase transition-colors duration-500",
                  activeTab === cat ? "text-gold" : "text-cream/30 group-hover:text-cream/60"
                )}>
                  {cat}
                </span>
                {activeTab === cat && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gold"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: idx * 0.05 }}
                className="group relative"
              >
                {/* Image Container with sophisticated hover */}
                <div className="relative h-[550px] overflow-hidden rounded-[2.5rem] bg-bg2 border border-white/5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-bg0 via-transparent to-transparent opacity-80" />
                  
                  {/* Category Chip */}
                  <div className="absolute top-8 left-8">
                    <span className="px-4 py-1.5 rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-[0.6rem] tracking-[0.3em] font-black text-white uppercase">
                      {item.category}
                    </span>
                  </div>

                  {/* Text Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-12 translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                    <h4 className="font-playfair text-4xl font-bold text-white mb-4 leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-cream/50 text-lg font-light leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      {item.description}
                    </p>
                    
                    <div className="mt-8 overflow-hidden h-0 group-hover:h-8 transition-all duration-700">
                      <span className="text-gold text-[0.7rem] tracking-[0.4em] font-black uppercase flex items-center gap-2">
                        View Project 
                        <span className="w-8 h-[1px] bg-gold" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
