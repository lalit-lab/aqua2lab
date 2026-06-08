"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How long does installation take?",
    answer:
      "Most installations take 1 day for tanks up to 4 ft, and 2–3 days for larger or more complex setups. We'll confirm the timeline during your design consultation.",
  },
  {
    question: "Do you serve locations outside Gurugram?",
    answer:
      "Yes! Our primary service area covers all of Gurugram — DLF Phase 1–5, Golf Course Road, Sohna Road, Cyber City, Udyog Vihar, and Sector 86. We regularly serve Delhi, Noida, Faridabad, and Greater Noida too.",
  },
  {
    question: "What styles of aquascaping do you offer?",
    answer:
      "We specialise in Nature Aquarium (Takashi Amano style), Iwagumi, Dutch, Biotope, and Jungle styles. We also create custom hybrid styles based on your vision.",
  },
  {
    question: "Can you maintain an aquarium I bought elsewhere?",
    answer:
      "Absolutely. We offer standalone maintenance contracts for existing setups. We'll first conduct a health assessment of your tank before proposing a plan.",
  },
  {
    question: "How often does maintenance happen?",
    answer:
      "We offer weekly, fortnightly, and monthly schedules. Planted aquascapes typically benefit from fortnightly visits for optimal health.",
  },
  {
    question: "What is the minimum tank size you work with?",
    answer:
      "We work with tanks as small as 1.5 ft (nano aquascapes). These compact setups can be just as stunning and are perfect for desks.",
  },
];

function FAQItem({ faq, idx }: { faq: (typeof faqs)[0]; idx: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.08 }}
      className="bg-white border border-slate-100 rounded-2xl mb-3 overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
      >
        <span className="font-semibold text-[#0D2B3E] text-sm md:text-base leading-snug group-hover:text-cyan-600 transition-colors">
          {faq.question}
        </span>
        <Plus
          className={cn(
            "text-cyan-600 transition-transform duration-300 shrink-0",
            isOpen && "rotate-45"
          )}
          size={20}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqSection() {
  return (
    <section id="faq" className="py-24 bg-slate-50 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-black tracking-[0.4em] uppercase text-cyan-600 mb-3">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#0D2B3E]">
            Common Questions
          </h2>
        </div>

        <div>
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} faq={faq} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
