"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/data";

const steps = [
  {
    id: 1,
    question: "What tank size are you thinking?",
    description: "Helps us match you with the right package.",
    options: [
      { label: "Nano", value: "Nano (under 2 ft)", sub: "Under 2 ft — ₹15k+", icon: "🪨" },
      { label: "Medium", value: "Medium (2–4 ft)", sub: "2–4 ft — ₹40k+", icon: "🌿" },
      { label: "Large", value: "Large (4 ft+)", sub: "4 ft+ — Custom quote", icon: "🏛️" },
      { label: "Not sure", value: "I need expert guidance", sub: "Let's discuss my space", icon: "💭" },
    ],
  },
  {
    id: 2,
    question: "Which style speaks to you?",
    description: "We specialise in all major aquascaping styles.",
    options: [
      { label: "Nature Aquarium", value: "Nature Aquarium / Iwagumi", sub: "Minimalist Japanese" },
      { label: "Dutch Garden", value: "Dutch Garden", sub: "Lush & colourful plants" },
      { label: "Biotope / Jungle", value: "Biotope / Jungle", sub: "Wild natural look" },
      { label: "Help me decide", value: "Need style consultation", sub: "Show me options" },
    ],
  },
  {
    id: 3,
    question: "Where is the aquascape going?",
    description: "We serve all of Gurugram, Delhi & NCR.",
    options: [
      { label: "Home — Gurugram", value: "Home in Gurugram (DLF / Golf Course Rd)", sub: "DLF, Golf Course Rd…" },
      { label: "Office — Gurugram", value: "Office / Corporate in Gurugram (Cyber City / Udyog Vihar)", sub: "Cyber City, Udyog Vihar…" },
      { label: "Delhi / Noida", value: "Delhi / Noida / Faridabad", sub: "NCR locations" },
      { label: "Other", value: "Other location", sub: "Tell us where" },
    ],
  },
];

export default function QuizModal({
  isOpen,
  onClose,
  initialPackage,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialPackage?: string;
}) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleSelect = (val: string) => {
    const newAnswers = { ...answers, [`s${step}`]: val };
    setAnswers(newAnswers);
    if (step < 3) {
      setStep(step + 1);
    } else {
      setStep(4);
    }
  };

  const generateWaLink = () => {
    let lines = "Hi Aqua2 Lab! I'd like to get a quote/consultation.\n\n";
    if (initialPackage) lines += `📦 Package interest: ${initialPackage}\n`;
    if (answers.s1) lines += `📐 Tank size: ${answers.s1}\n`;
    if (answers.s2) lines += `🎨 Style: ${answers.s2}\n`;
    if (answers.s3) lines += `📍 Location: ${answers.s3}\n`;
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(lines)}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] bg-bg0/95 backdrop-blur-md flex items-center justify-center p-6" role="dialog" aria-modal="true">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="card max-w-lg w-full p-8 md:p-10 relative overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-cream/40 hover:text-cream transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {step <= 3 && (
          <>
            <div className="flex gap-2 mb-8">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={cn(
                    "h-1 flex-1 rounded-full transition-colors duration-500",
                    s <= step ? "bg-gold" : "bg-gold/10"
                  )}
                />
              ))}
            </div>

            <p className="text-[0.65rem] tracking-[0.2em] uppercase text-mint font-semibold mb-2">
              Step {step} of 3
            </p>
            <h3 className="font-playfair text-2xl font-bold mb-2 text-cream">
              {steps[step - 1].question}
            </h3>
            <p className="text-cream/45 text-sm mb-8">
              {steps[step - 1].description}
            </p>

            <div className="grid grid-cols-2 gap-3">
              {steps[step - 1].options.map((opt: any) => (
                <button
                  key={opt.label}
                  onClick={() => handleSelect(opt.value)}
                  className="text-left p-4 rounded-xl border border-gold/10 hover:border-gold/40 hover:bg-gold/5 transition-all group"
                >
                  {opt.icon && <span className="text-2xl mb-2 block">{opt.icon}</span>}
                  <strong className="text-cream text-sm block mb-1 group-hover:text-gold transition-colors">
                    {opt.label}
                  </strong>
                  <span className="text-cream/40 text-[0.7rem] leading-tight block">
                    {opt.sub}
                  </span>
                </button>
              ))}
            </div>
          </>
        )}

        {step === 4 && (
          <div className="text-center py-8">
            <div className="text-5xl mb-6">✨</div>
            <h3 className="font-playfair text-3xl font-bold gold-text mb-4">
              You're all set!
            </h3>
            <p className="text-cream/55 text-sm leading-relaxed mb-10 max-w-xs mx-auto">
              We've prepared a personalised message with your details. Our team typically responds within 2 hours.
            </p>
            <a
              href={generateWaLink()}
              target="_blank"
              className="btn-gold w-full py-4 flex items-center justify-center gap-3"
            >
              <Send size={18} />
              Send Message on WhatsApp
            </a>
            <button
              onClick={() => {
                setStep(1);
                setAnswers({});
              }}
              className="mt-6 text-cream/30 text-xs hover:text-cream transition-colors"
            >
              &larr; Start over
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
