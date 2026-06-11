"use client";

import { Phone, MessageCircle, FileText } from "lucide-react";
import { shopConfig } from "@/lib/shopData";

// Sticky bottom action bar — mobile only. Desktop keeps the WhatsApp FAB.
export default function MobileCtaBar({
  onOpenModal,
}: {
  onOpenModal: () => void;
}) {
  const phoneHref = `tel:${shopConfig.phone.replace(/\s/g, "")}`;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[400] md:hidden grid grid-cols-3 bg-white/95 backdrop-blur border-t border-slate-200 shadow-[0_-4px_20px_rgba(13,43,62,0.08)]">
      <a
        href={phoneHref}
        className="flex flex-col items-center gap-0.5 py-2.5 text-[#0D2B3E]"
      >
        <Phone size={18} />
        <span className="text-[0.6rem] font-bold tracking-wide">Call</span>
      </a>
      <a
        href={`https://wa.me/${shopConfig.whatsapp}?text=Hi!+I'd+like+to+enquire+about+an+aquascaping+setup.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-0.5 py-2.5 text-[#25D366]"
      >
        <MessageCircle size={18} />
        <span className="text-[0.6rem] font-bold tracking-wide">WhatsApp</span>
      </a>
      <button
        onClick={onOpenModal}
        className="flex flex-col items-center gap-0.5 py-2.5 bg-[#0D2B3E] text-white"
      >
        <FileText size={18} />
        <span className="text-[0.6rem] font-bold tracking-wide">Get Quote</span>
      </button>
    </div>
  );
}
