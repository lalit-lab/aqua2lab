"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { heroContent, siteConfig } from "@/lib/data";

export default function Hero() {
  const [scrambleText, setScrambleText] = useState(heroContent.title);
  const finalTitle = heroContent.title;
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";
  const containerRef = useRef(null);
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setScrambleText(
        finalTitle
          .split("")
          .map((char, index) => {
            if (index < iteration) return finalTitle[index];
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      iteration += 1 / 3;
      if (iteration >= finalTitle.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg0"
    >
      {/* Immersive Parallax Background - Optimized with auto format and lower quality for speed */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 31, 51, 0.7) 0%, rgba(0, 31, 51, 0.5) 50%, rgba(0, 31, 51, 1) 100%), url('https://images.unsplash.com/photo-1544551763-8a445585562e?w=1920&q=80&auto=format&fit=crop')`,
          y: y1,
        }}
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: [0.19, 1, 0.22, 1] }}
      />

      {/* Floating Particles/Elements (Optional, for that 'alive' feel) */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-mint/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="inline-flex items-center gap-4 mb-10 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <span className="w-2 h-2 rounded-full bg-mint shadow-[0_0_12px_rgba(62,180,137,0.8)] animate-pulse"></span>
          <span className="text-[0.65rem] tracking-[0.4em] text-cream/80 font-black uppercase">
            {heroContent.label}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="font-playfair text-6xl md:text-9xl lg:text-[10rem] font-black mb-10 leading-[0.85] tracking-tighter text-white"
        >
          {scrambleText.split(" ").map((word, i) => (
            <span key={i} className={i === 1 ? "gold-text" : "block md:inline"}>
              {word}{" "}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mx-auto mb-14 text-cream/70 text-lg md:text-2xl leading-relaxed max-w-3xl font-light tracking-tight"
        >
          {heroContent.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex flex-wrap gap-8 justify-center"
        >
          <Link 
            href={`https://wa.me/${siteConfig.whatsappNumber}`} 
            target="_blank" 
            className="group relative px-12 py-6 bg-white text-bg0 font-black tracking-[0.2em] uppercase rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
            aria-label="Discuss your project on WhatsApp"
          >
            <span className="relative z-10">{heroContent.primaryCta}</span>
            <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
          <Link 
            href="#gallery" 
            className="px-12 py-6 border border-white/20 text-white font-black tracking-[0.2em] uppercase rounded-full backdrop-blur-md hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
            aria-label="View our portfolio gallery"
          >
            {heroContent.secondaryCta}
          </Link>
        </motion.div>
      </motion.div>

      {/* Elegant Scroll Progress Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-24 bg-linear-to-b from-white to-transparent overflow-hidden">
          <motion.div 
            className="w-full h-full bg-gold"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
