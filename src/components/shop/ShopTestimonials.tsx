import { Star, PlusCircle } from "lucide-react";
import { shopTestimonials } from "@/lib/shopData";

export default function ShopTestimonials() {
  const hasRealTestimonials = shopTestimonials.some((t) => !t.isPlaceholder);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-black tracking-[0.4em] uppercase text-cyan-600 mb-3">
            Client Stories
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#0D2B3E]">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {shopTestimonials.map((t, i) =>
            t.isPlaceholder ? (
              /* Placeholder card */
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center min-h-[220px] group"
              >
                <PlusCircle
                  size={28}
                  className="text-slate-300 mb-3 group-hover:text-cyan-400 transition-colors"
                />
                <p className="text-slate-400 text-sm font-medium mb-1">
                  Add a real testimonial
                </p>
                <p className="text-slate-300 text-xs leading-relaxed max-w-[200px]">
                  Copy a WhatsApp message or Google review into{" "}
                  <span className="font-mono">shopData.ts</span> and set{" "}
                  <span className="font-mono">isPlaceholder: false</span>
                </p>
              </div>
            ) : (
              /* Real testimonial card */
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-cyan-200 hover:shadow-md transition-all duration-300"
              >
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed font-light mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-slate-50 pt-4">
                  <div className="font-bold text-[#0D2B3E] text-sm">
                    {t.author}
                  </div>
                  <div className="text-slate-400 text-xs mt-0.5">{t.role}</div>
                </div>
              </div>
            )
          )}
        </div>

        {!hasRealTestimonials && (
          <p className="text-center text-slate-400 text-xs mt-8">
            Testimonials section is hidden from visitors until at least one real
            testimonial is added.
          </p>
        )}
      </div>
    </section>
  );
}
