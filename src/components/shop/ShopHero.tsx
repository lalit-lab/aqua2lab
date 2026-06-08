"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle, MapPin, ChevronDown } from "lucide-react";
import { shopConfig } from "@/lib/shopData";

export default function ShopHero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#071e2e]"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1498661694025-84f932ec14f1?w=1920&q=80&auto=format&fit=crop"
          alt="Planted aquarium by Aqua2 Lab"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071e2e] via-[#071e2e]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071e2e] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/25 mb-7"
          >
            <MapPin size={12} className="text-cyan-400" />
            <span className="text-xs font-bold text-cyan-300 tracking-widest uppercase">
              Sector 86, Gurugram
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight mb-6"
          >
            We Design,
            <br />
            Install &
            <br />
            <span className="text-cyan-400">Maintain</span>
            <br />
            Planted Aquariums
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-slate-300 text-base md:text-lg font-light leading-relaxed mb-10 max-w-md"
          >
            Bespoke planted ecosystems for luxury homes and corporate spaces
            across Gurugram & NCR. We handle everything — from first sketch to
            long-term care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={onOpenModal}
              className="bg-white text-[#0D2B3E] font-black px-8 py-4 rounded-full text-sm hover:bg-cyan-400 hover:text-white transition-all hover:scale-105 active:scale-95 shadow-lg"
            >
              Book a Free Consultation
            </button>
            <a
              href={`https://wa.me/${shopConfig.whatsapp}?text=Hi!+I'd+like+to+enquire+about+a+planted+aquarium+setup.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white/20 text-white font-bold px-8 py-4 rounded-full text-sm hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-4 gap-6 mt-14 pt-10 border-t border-white/10"
          >
            {[
              { v: "120+", l: "Setups" },
              { v: "5+", l: "Years" },
              { v: "98%", l: "Satisfied" },
              { v: "1hr", l: "Response" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl md:text-3xl font-black text-white">
                  {s.v}
                </div>
                <div className="text-[0.6rem] text-slate-400 uppercase tracking-widest font-medium mt-0.5">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right panel — service preview cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="hidden lg:flex flex-col gap-4"
        >
          {[
            {
              icon: "🌿",
              title: "Custom Setup",
              subtitle: "Design → Install → Commission",
            },
            {
              icon: "💧",
              title: "Regular Maintenance",
              subtitle: "Weekly · Fortnightly · Monthly",
            },
            {
              icon: "🌊",
              title: "Design Consultation",
              subtitle: "Free evening session",
            },
            {
              icon: "🔬",
              title: "Tank Health Check",
              subtitle: "Algae · Water chemistry · Plants",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 cursor-default"
            >
              <span className="text-2xl shrink-0">{card.icon}</span>
              <div>
                <div className="text-white font-bold text-sm">{card.title}</div>
                <div className="text-slate-400 text-xs">{card.subtitle}</div>
              </div>
              <div className="ml-auto w-1.5 h-1.5 bg-cyan-400 rounded-full shrink-0" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#portfolio"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white hover:opacity-100 transition-opacity animate-bounce z-10"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}
