import Image from "next/image";
import {
  Check,
  Leaf,
  Trees,
  Sprout,
  Waves,
  Droplets,
  PencilRuler,
  type LucideIcon,
} from "lucide-react";
import { shopServices } from "@/lib/shopData";
import { cn } from "@/lib/utils";

const serviceIcons: Record<string, LucideIcon> = {
  "planted-aquarium": Leaf,
  paludarium: Trees,
  terrarium: Sprout,
  pond: Waves,
  maintenance: Droplets,
  consultation: PencilRuler,
};

const checkColor: Record<string, string> = {
  emerald: "text-emerald-600 bg-emerald-50 border-emerald-200",
  cyan: "text-cyan-600 bg-cyan-50 border-cyan-200",
  green: "text-green-600 bg-green-50 border-green-200",
  blue: "text-blue-600 bg-blue-50 border-blue-200",
  sky: "text-sky-600 bg-sky-50 border-sky-200",
  violet: "text-violet-600 bg-violet-50 border-violet-200",
};

const tagColor: Record<string, string> = {
  emerald: "bg-emerald-600",
  cyan: "bg-cyan-600",
  green: "bg-green-600",
  blue: "bg-blue-600",
  sky: "bg-sky-600",
  violet: "bg-violet-600",
};

export default function ServicesSection({
  onOpenModal,
}: {
  onOpenModal: (service?: string) => void;
}) {
  return (
    <section id="services" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-black tracking-[0.4em] uppercase text-cyan-600 mb-3">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#0D2B3E] mb-4">
            Our Services
          </h2>
          <p className="text-slate-400 font-light max-w-xl mx-auto text-sm leading-relaxed">
            From a planted aquarium on your desk to an outdoor koi pond — we
            design, build and maintain living water ecosystems of every kind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {shopServices.map((s) => (
            <div
              key={s.slug}
              className="rounded-3xl overflow-hidden border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-100 transition-all duration-400 group flex flex-col bg-white"
            >
              {/* Service image */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  {(() => {
                    const Icon = serviceIcons[s.slug] ?? Leaf;
                    return (
                      <span className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center">
                        <Icon size={15} className="text-white" />
                      </span>
                    );
                  })()}
                  <span
                    className={cn(
                      "text-[0.6rem] font-black tracking-widest uppercase text-white px-2.5 py-1 rounded-full",
                      tagColor[s.color]
                    )}
                  >
                    {s.subtitle}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-[#0D2B3E] font-black text-xl">
                    {s.title}
                  </h3>
                  <span className={cn(
                    "text-xs font-black px-3 py-1 rounded-full shrink-0 mt-0.5",
                    s.startingPrice === "Free"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-slate-50 text-[#0D2B3E] border border-slate-200"
                  )}>
                    {s.startingPrice}
                  </span>
                </div>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-5">
                  {s.description}
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-slate-600 text-sm">
                      <div
                        className={cn(
                          "w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border",
                          checkColor[s.color]
                        )}
                      >
                        <Check size={10} strokeWidth={3} />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onOpenModal(s.title + " Setup")}
                  className="w-full py-3 rounded-xl border-2 border-[#0D2B3E] text-[#0D2B3E] font-bold text-xs tracking-[0.15em] uppercase hover:bg-[#0D2B3E] hover:text-white transition-all duration-300"
                >
                  Enquire About This →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => onOpenModal()}
            className="bg-[#0D2B3E] text-white font-black px-12 py-4 rounded-full text-sm hover:bg-cyan-700 transition-all hover:scale-105 active:scale-95 shadow-lg"
          >
            Get a Free Quote
          </button>
          <p className="text-slate-400 text-xs mt-3">
            No commitment. We&apos;ll assess your space and give honest advice.
          </p>
        </div>
      </div>
    </section>
  );
}
