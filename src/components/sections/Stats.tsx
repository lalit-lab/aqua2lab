"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { label: "COLLECTIONS CREATED", value: 50, suffix: "+" },
  { label: "SUCCESS RATE", value: 100, suffix: "%" },
  { label: "BOTANICAL EXPERTISE", value: 5, suffix: "YRS" },
  { label: "CORPORATE PARTNERS", value: 12, suffix: "+" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 3000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 4); // Quart ease out
        const currentCount = Math.floor(easeProgress * (end - start) + start);
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-8xl md:text-[10rem] font-playfair font-black text-white/5 tracking-tighter leading-none relative">
      {count}
      <span className="text-3xl font-light text-gold absolute bottom-4 ml-2">{suffix}</span>
      
      {/* Ghost text for that premium layering effect */}
      <motion.span 
        initial={{ clipPath: 'inset(100% 0 0 0)' }}
        whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute inset-0 gold-text opacity-40 select-none pointer-events-none"
      >
        {count}
      </motion.span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-40 bg-bg0">
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 1 }}
              className="flex flex-col items-start border-l border-white/5 pl-10"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-[0.65rem] tracking-[0.6em] uppercase text-cream/30 font-black mt-8">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
