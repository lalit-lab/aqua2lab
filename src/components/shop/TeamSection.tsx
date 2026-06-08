"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { shopConfig } from "@/lib/shopData";

const team = [
  {
    name: "Varun Shah",
    role: "Founder & Creative Director",
    initials: "VS",
    accent: "cyan",
    bio: "Visionary designer focused on competition-standard aquascaping and Japanese nature-aquarium aesthetics.",
  },
  {
    name: "Lalit Rajput",
    role: "Director & Head of Operations",
    initials: "LR",
    accent: "navy",
    bio: "The backbone of every flawless installation and long-term client relationship at Aqua2 Lab.",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">
          <div className="lg:max-w-sm lg:sticky lg:top-28">
            <p className="text-xs font-black tracking-[0.4em] uppercase text-cyan-600 mb-3">
              The Studio
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0D2B3E] mb-5 leading-tight">
              Artisans of the Ecosystem
            </h2>
            <p className="text-slate-500 font-light leading-relaxed mb-8 text-sm">
              We combine botanical expertise with high-end interior design to
              create living installations that breathe life into any space.
            </p>
            <a
              href={`https://wa.me/${shopConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-cyan-700 font-bold tracking-wide text-xs uppercase"
            >
              Consult with the experts
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1.5 transition-transform"
              />
            </a>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-slate-50 p-9 rounded-3xl border border-slate-100 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-50/60 transition-all duration-400 group"
              >
                <div
                  className={cn(
                    "w-16 h-16 rounded-2xl mb-7 flex items-center justify-center text-white text-2xl font-black group-hover:scale-105 transition-transform duration-400 shadow-lg",
                    member.accent === "cyan"
                      ? "bg-gradient-to-br from-cyan-500 to-cyan-700"
                      : "bg-gradient-to-br from-[#0D2B3E] to-[#13475f]"
                  )}
                >
                  {member.initials}
                </div>
                <p className="text-[0.6rem] tracking-[0.25em] uppercase text-slate-400 font-black mb-2">
                  {member.role}
                </p>
                <h3 className="text-2xl font-black text-[#0D2B3E] mb-4">
                  {member.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  {member.bio}
                </p>
                <div className="mt-7 w-10 h-[2px] bg-cyan-300 group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
