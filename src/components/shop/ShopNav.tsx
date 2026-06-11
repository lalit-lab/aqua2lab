"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { shopConfig, shopNavLinks } from "@/lib/shopData";
import { cn } from "@/lib/utils";

export default function ShopNav({
  onOpenModal,
}: {
  onOpenModal: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-[#0D2B3E] text-white text-center py-2 px-4 text-xs font-medium">
        <span className="font-bold">New:</span> Design your own planted
        aquarium &amp; get an instant price estimate.{" "}
        <a
          href="#calculator"
          className="underline text-cyan-300 hover:text-white transition-colors ml-1"
        >
          Try the Calculator
        </a>
      </div>

      <nav
        className={cn(
          "sticky top-0 z-50 bg-white transition-shadow duration-300",
          scrolled ? "shadow-md" : "shadow-sm border-b border-slate-100"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative w-9 h-9">
              <Image
                src="/logo.png"
                alt="Aqua2 Lab"
                fill
                sizes="36px"
                className="object-contain"
              />
            </div>
            <div>
              <div className="font-black text-[#0D2B3E] text-lg leading-none tracking-tight">
                AQUA<span className="text-cyan-500">2</span> LAB
              </div>
              <div className="text-[0.6rem] tracking-widest text-slate-400 uppercase font-medium">
                Aquascaping Studio · Gurugram
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {shopNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-cyan-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenModal}
              className="hidden sm:flex items-center gap-2 bg-[#0D2B3E] text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-cyan-700 transition-all hover:scale-105 active:scale-95"
            >
              Get a Quote
            </button>
            <button
              className="lg:hidden p-2 text-slate-700"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[200] bg-white flex flex-col transition-all duration-500",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <span className="font-black text-[#0D2B3E] text-xl">
            AQUA<span className="text-cyan-500">2</span> LAB
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="p-2 text-slate-600"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex-1 flex flex-col items-start px-8 pt-12 gap-8">
          {shopNavLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-4xl font-black text-slate-800 hover:text-cyan-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="px-6 pb-10 flex flex-col gap-3">
          <button
            onClick={() => {
              setMobileOpen(false);
              onOpenModal();
            }}
            className="w-full py-4 bg-[#0D2B3E] text-white font-bold rounded-2xl text-sm"
          >
            Get a Quote
          </button>
          <a
            href={`https://wa.me/${shopConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-6 py-4 rounded-2xl w-full text-sm"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </div>
      </div>
    </>
  );
}
