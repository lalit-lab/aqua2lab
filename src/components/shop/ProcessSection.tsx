import { processSteps } from "@/lib/shopData";

export default function ProcessSection({
  onOpenModal,
}: {
  onOpenModal: () => void;
}) {
  return (
    <section id="process" className="py-24 bg-[#0D2B3E] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-black tracking-[0.4em] uppercase text-cyan-400 mb-3">
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            From Idea to Ecosystem
          </h2>
          <p className="text-slate-400 font-light max-w-xl mx-auto text-sm leading-relaxed">
            A clear, step-by-step process so you know exactly what to expect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {processSteps.map((step, idx) => (
            <div key={step.step} className="relative group">
              {/* Connector line */}
              {idx < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%-0px)] w-full h-[1px] bg-white/10 z-0" />
              )}
              <div className="relative z-10 bg-white/5 border border-white/10 rounded-2xl p-7 h-full hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300">
                <div className="text-5xl font-black text-cyan-500/30 leading-none mb-5 font-mono">
                  {step.step}
                </div>
                <h3 className="text-white font-bold text-base mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onOpenModal}
            className="bg-white text-[#0D2B3E] font-black px-10 py-4 rounded-full text-sm hover:bg-cyan-400 hover:text-white transition-all hover:scale-105 active:scale-95"
          >
            Start Step 01 — Book a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
