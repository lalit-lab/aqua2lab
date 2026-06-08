"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

const team = [
  {
    name: "Varun Shah",
    role: "CREATIVE DIRECTOR",
    initials: "VS",
    color: "gold",
    bio: "Visionary designer focused on competition-standard aquascaping and Japanese aesthetic principles.",
  },
  {
    name: "Lalit Rajput",
    role: "HEAD OF OPERATIONS",
    initials: "LR",
    color: "mint",
    bio: "The backbone of every flawless installation and long-term client relationship management.",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-40 bg-bg1">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="lg:max-w-md lg:sticky lg:top-40">
             <p className="text-[0.65rem] tracking-[0.4em] uppercase text-mint font-bold mb-6">
              The Studio
            </p>
            <h2 className="font-playfair text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Artisans of the <span className="gold-text">Ecosystem</span>
            </h2>
            <p className="text-cream/40 text-lg font-light leading-relaxed mb-12">
              Our team combines botanical expertise with high-end interior design to create living installations that breathe life into any space.
            </p>
            <Link 
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              className="group flex items-center gap-4 text-gold font-bold tracking-widest text-xs uppercase"
            >
              Consult with the experts
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="bg-bg0 p-12 rounded-[3rem] border border-white/5 hover:border-gold/20 transition-all duration-500 group"
              >
                <div className={cn(
                  "w-20 h-20 rounded-3xl mb-10 flex items-center justify-center text-bg0 text-3xl font-black font-playfair group-hover:scale-110 transition-transform duration-500 shadow-2xl",
                  member.color === "gold" ? "bg-linear-to-br from-gold to-gold-dark" : "bg-linear-to-br from-mint to-mint-light"
                )}>
                  {member.initials}
                </div>
                <p className="text-[0.6rem] tracking-[0.3em] uppercase text-cream/30 font-bold mb-2">
                  {member.role}
                </p>
                <h3 className="font-playfair text-3xl font-bold text-cream mb-6">
                  {member.name}
                </h3>
                <p className="text-cream/50 text-sm leading-relaxed mb-10 font-light">
                  {member.bio}
                </p>
                <div className="flex justify-start">
                   <div className="w-10 h-[1px] bg-gold/30 group-hover:w-full transition-all duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
