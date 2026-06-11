import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { guides } from "@/lib/shopData";

const categoryColors: Record<string, string> = {
  Beginner: "bg-emerald-500",
  "Care Guide": "bg-cyan-600",
  Design: "bg-violet-600",
  Paludarium: "bg-teal-600",
  Terrarium: "bg-green-600",
};

export default function GuidesSection() {
  return (
    <section id="guides" className="py-24 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen size={16} className="text-cyan-600" />
              <p className="text-xs font-black tracking-[0.4em] uppercase text-cyan-600">
                Free Education
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0D2B3E]">
              Aquascaping Guides
            </h2>
            <p className="text-slate-400 mt-2 font-light text-sm max-w-md">
              In-depth guides written by our team — covering planted aquariums,
              paludariums, terrariums, CO₂ systems, and more.
            </p>
          </div>
        </div>

        {/* Featured guide — large */}
        <Link
          href={`/shop/guides/${guides[0].slug}`}
          className="group block mb-6 rounded-3xl overflow-hidden relative h-72 md:h-96"
        >
          <Image
            src={guides[0].image}
            alt={guides[0].title}
            fill
            sizes="100vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D2B3E]/90 via-[#0D2B3E]/50 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-10 max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span
                className={`text-[0.6rem] font-black tracking-widest uppercase text-white px-3 py-1 rounded-full ${categoryColors[guides[0].category] || "bg-slate-600"}`}
              >
                {guides[0].category}
              </span>
              <span className="text-slate-300 text-xs">{guides[0].readTime}</span>
            </div>
            <h3 className="text-white font-black text-2xl md:text-3xl mb-3 leading-snug">
              {guides[0].title}
            </h3>
            <p className="text-white/60 text-sm font-light leading-relaxed mb-5 hidden md:block">
              {guides[0].excerpt}
            </p>
            <span className="flex items-center gap-2 text-cyan-400 font-bold text-sm group-hover:gap-4 transition-all">
              Read Full Guide <ArrowRight size={15} />
            </span>
          </div>
        </Link>

        {/* Remaining guides grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {guides.slice(1).map((g) => (
            <Link
              key={g.slug}
              href={`/shop/guides/${g.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-50/50 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-40 overflow-hidden bg-slate-100">
                <Image
                  src={g.image}
                  alt={g.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span
                    className={`text-[0.55rem] font-black tracking-widest uppercase text-white px-2.5 py-1 rounded-full ${categoryColors[g.category] || "bg-slate-600"}`}
                  >
                    {g.category}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-[#0D2B3E] text-sm leading-snug mb-2 flex-1">
                  {g.title}
                </h3>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-50">
                  <span className="text-xs text-slate-400">{g.readTime}</span>
                  <span className="flex items-center gap-1 text-xs font-bold text-cyan-600 group-hover:gap-2 transition-all">
                    Read <ArrowRight size={11} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
