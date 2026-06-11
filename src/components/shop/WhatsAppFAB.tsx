"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { shopConfig } from "@/lib/shopData";

export default function WhatsAppFAB() {
  const [visible, setVisible] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed bottom-20 md:bottom-6 right-4 md:right-6 z-[500] hidden md:flex flex-col items-end gap-3 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      {!tooltipDismissed && (
        <div className="bg-white text-[#0D2B3E] text-xs font-semibold px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 max-w-[200px] leading-snug">
          <span>Chat with us — we reply in under 1 hour!</span>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="text-slate-400 hover:text-slate-600 shrink-0"
            aria-label="Dismiss"
          >
            <X size={12} />
          </button>
        </div>
      )}

      <a
        href={`https://wa.me/${shopConfig.whatsapp}?text=Hi!+I'd+like+to+enquire+about+an+aquascaping+setup.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20bb5a] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-300/50 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <MessageCircle size={26} fill="white" />
      </a>
    </div>
  );
}
