import { MessageCircle } from "lucide-react";
import { shopConfig } from "@/lib/shopData";

export default function AlabamaBanner() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#071e2e] via-[#0a3f5c] to-[#071e2e] relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-8">
            <span className="text-xl">🇺🇸</span>
            <span className="text-xs font-black tracking-widest uppercase text-cyan-300">
              International Expansion
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-4 leading-[0.9] tracking-tight">
            Coming to
            <br />
            <span className="text-cyan-400">Alabama</span>, USA
          </h2>

          <p className="text-slate-300 text-xl font-light mb-3">
            Our First International Store
          </p>
          <p className="text-slate-400 text-base font-light leading-relaxed mb-10 max-w-xl mx-auto">
            Aqua2 Lab is expanding internationally. Our Alabama location will
            bring the same premium aquascaping expertise and hand-picked plants
            to the southern USA. Be the first to know when we open.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${shopConfig.whatsapp}?text=Please+notify+me+when+your+Alabama+store+opens!`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#0D2B3E] font-black px-8 py-4 rounded-full text-sm hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95 shadow-xl"
            >
              <MessageCircle size={18} />
              Get Notified via WhatsApp
            </a>
            <div className="flex items-center gap-3 px-6 py-4 rounded-full border border-white/10 text-slate-400 text-sm">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              Opening Soon · 2026
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
