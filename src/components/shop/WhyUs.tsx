import Image from "next/image";
import { shopStats } from "@/lib/shopData";

const usps = [
  {
    title: "End-to-End Service",
    desc: "Design, installation, maintenance — one team handles it all. No juggling multiple vendors.",
  },
  {
    title: "NCR's Local Experts",
    desc: "We know Gurugram's water chemistry. Our advice is tuned to what actually works here.",
  },
  {
    title: "Same-Day WhatsApp Support",
    desc: "Any question, any issue — message us and we respond the same day, every day.",
  },
  {
    title: "Honest Consultation",
    desc: "We tell you what your space actually needs. If a simpler setup is better, we'll say so.",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-black tracking-[0.4em] uppercase text-cyan-600 mb-4">
              Why Aqua2 Lab
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0D2B3E] mb-6 leading-tight">
              Gurugram&apos;s Most Trusted
              <br />
              Aquascaping Studio
            </h2>
            <p className="text-slate-400 text-base font-light leading-relaxed mb-10">
              We&apos;ve been creating and caring for planted aquariums in homes
              and offices across NCR for over 5 years. Every project gets the
              same level of care, whether it&apos;s a 30cm nano or a 6ft lobby
              installation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {usps.map((u) => (
                <div
                  key={u.title}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-cyan-200 hover:bg-cyan-50/30 transition-all duration-300"
                >
                  <h4 className="font-bold text-[#0D2B3E] text-sm mb-1.5">
                    {u.title}
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {u.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="relative row-span-2 rounded-2xl overflow-hidden bg-slate-100 min-h-[280px]">
              <Image
                src="/images/hero/aquascape-discus.jpg"
                alt="Red discus in a lush planted aquarium"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {shopStats.map((s) => (
              <div
                key={s.label}
                className="bg-[#0D2B3E] rounded-2xl p-8 text-center hover:bg-[#0e3652] transition-colors duration-300"
              >
                <div className="text-4xl md:text-5xl font-black text-cyan-400 mb-3">
                  {s.value}
                </div>
                <div className="text-slate-400 text-xs font-bold tracking-widest uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
