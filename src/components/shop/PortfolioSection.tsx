"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera } from "lucide-react";
import {
  portfolioItems,
  portfolioCategories,
  type PortfolioCategory,
} from "@/lib/shopData";
import { cn } from "@/lib/utils";

function PortfolioCard({ item }: { item: (typeof portfolioItems)[0] }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3] border border-slate-200 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-50 transition-all duration-400">
      {!imgError ? (
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          onError={() => setImgError(true)}
        />
      ) : (
        /* Placeholder shown when photo hasn't been added yet */
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-dashed border-slate-300">
          <Camera size={32} className="text-slate-300 mb-3" />
          <p className="text-slate-400 text-xs font-bold text-center px-4">
            Add photo:
          </p>
          <p className="text-slate-400 text-[0.65rem] text-center px-4 mt-1 font-mono">
            /public/images/portfolio/
            <br />
            project-{item.id}.jpg
          </p>
        </div>
      )}

      {/* Overlay on hover (only shown when real photo exists) */}
      {!imgError && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B3E]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
          <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
            <span className="text-[0.6rem] font-black tracking-widest uppercase text-cyan-400 mb-1 block">
              {item.category}
            </span>
            <h4 className="text-white font-bold text-sm leading-snug">
              {item.title}
            </h4>
            {item.description && (
              <p className="text-white/60 text-xs mt-1 leading-relaxed">
                {item.description}
              </p>
            )}
          </div>
        </>
      )}

      {/* Category chip (always visible on real photos) */}
      {!imgError && (
        <div className="absolute top-3 left-3">
          <span className="text-[0.55rem] font-black tracking-wider uppercase bg-black/30 backdrop-blur-sm text-white px-2 py-1 rounded-full border border-white/10">
            {item.category}
          </span>
        </div>
      )}
    </div>
  );
}

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory | "All">(
    "All"
  );

  const filtered =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <p className="text-xs font-black tracking-[0.4em] uppercase text-cyan-600 mb-3">
              Our Work
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0D2B3E]">
              Project Portfolio
            </h2>
            <p className="text-slate-400 mt-2 font-light text-sm max-w-md">
              Every setup we design, install and maintain — photographed and
              documented.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {(["All", ...portfolioCategories] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={cn(
                  "text-xs font-bold px-4 py-2 rounded-full border transition-all duration-300",
                  activeFilter === cat
                    ? "bg-[#0D2B3E] text-white border-[#0D2B3E]"
                    : "bg-white text-slate-500 border-slate-200 hover:border-cyan-300 hover:text-cyan-700"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
