"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/data";

import Image from "next/image";

const navLinks = [
  { name: "PORTFOLIO", href: "/#portfolio" },
  { name: "SERVICES", href: "/#services" },
  { name: "PRICE CALCULATOR", href: "/#calculator" },
  { name: "BOOKING", href: "/booking" },
  { name: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-6",
          scrolled ? "py-4" : "py-8"
        )}
      >
        <div 
          className={cn(
            "max-w-7xl mx-auto px-8 py-3 rounded-full flex items-center justify-between transition-all duration-500",
            scrolled ? "bg-bg0/80 backdrop-blur-2xl border border-white/5 shadow-2xl" : "bg-transparent border-transparent"
          )}
        >
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/logo.png"
                alt="Aqua2 Lab Logo"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>
            <span className="font-playfair text-xl md:text-2xl font-black tracking-tighter hidden sm:block">
              AQUA<span className="gold-text">2</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-cream/50 text-[0.65rem] font-black tracking-[0.3em] transition-all hover:text-gold hover:tracking-[0.4em]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-[0.65rem] font-black tracking-[0.2em] uppercase text-cream/70 hover:text-gold transition-all hidden sm:block"
            >
              LOGIN
            </Link>
            <Link
              href="/booking"
              className="px-6 py-2 bg-mint text-bg0 text-[0.65rem] font-black tracking-[0.2em] uppercase rounded-full hover:bg-white transition-all hover:scale-105 active:scale-95"
            >
              BOOK NOW
            </Link>
            
            <button
              className="lg:hidden text-cream p-2"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Modern Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-bg0 z-[100] flex flex-col items-center justify-center gap-12 transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)]",
          mobileMenuOpen ? "clip-path-open opacity-100" : "clip-path-closed opacity-0 pointer-events-none"
        )}
      >
        <button
          className="absolute top-10 right-10 text-cream/50 hover:text-gold p-4 transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>
        
        {navLinks.map((link, idx) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className={cn(
              "font-playfair text-5xl md:text-7xl font-bold text-cream hover:gold-text transition-all duration-500",
              mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
            style={{ transitionDelay: `${idx * 0.1}s` }}
          >
            {link.name}
          </Link>
        ))}
        
        <Link
          href={`https://wa.me/${siteConfig.whatsappNumber}`}
          target="_blank"
          onClick={() => setMobileMenuOpen(false)}
          className="mt-8 text-gold font-black tracking-[0.5em] text-sm uppercase"
        >
          LET'S CONNECT
        </Link>
      </div>

      <style jsx global>{`
        .clip-path-closed { clip-path: circle(0% at 90% 5%); }
        .clip-path-open { clip-path: circle(150% at 90% 5%); }
      `}</style>
    </>
  );
}
