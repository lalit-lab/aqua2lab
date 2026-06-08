import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-bg0 pt-32 pb-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-32">
          <div className="lg:col-span-2">
            <Link href="#home" className="flex items-center gap-4 mb-8">
              <div className="relative w-12 h-12">
                <Image 
                  src="/logo.png" 
                  alt="Aqua2 Lab Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className="font-playfair text-3xl font-black tracking-tighter text-cream uppercase">
                AQUA<span className="gold-text">2</span> LAB
              </span>
            </Link>
            <p className="text-cream/40 text-xl font-light leading-relaxed max-w-md mb-12">
              The World of Planted Aquariums. Bespoke living ecosystems for luxury residential and corporate environments.
            </p>
            <div className="flex gap-8">
              {[
                { icon: Instagram, href: "https://instagram.com/aqua2lab", label: "INSTAGRAM" },
                { icon: Facebook, href: "https://facebook.com/aqua2lab", label: "FACEBOOK" },
                { icon: Mail, href: `mailto:${siteConfig.email}`, label: "EMAIL" }
              ].map((social) => (
                <Link 
                  key={social.label} 
                  href={social.href} 
                  target="_blank" 
                  className="group flex flex-col gap-2"
                >
                  <social.icon size={20} className="text-cream/30 group-hover:text-gold transition-colors" />
                  <span className="text-[0.6rem] tracking-[0.3em] text-cream/20 group-hover:text-gold transition-colors">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h4 className="text-[0.65rem] font-black tracking-[0.4em] text-gold uppercase mb-8">Navigation</h4>
              <ul className="space-y-4">
                {["EXPERTISE", "GALLERY", "PRICING", "TEAM"].map((item) => (
                  <li key={item}>
                    <Link href={`#${item.toLowerCase()}`} className="text-cream/40 text-sm font-medium hover:text-cream transition-colors flex items-center justify-between group">
                      {item}
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-[0.65rem] font-black tracking-[0.4em] text-gold uppercase mb-8">Location</h4>
            <div className="space-y-8">
              <Link href={siteConfig.locationLink} target="_blank" className="block group">
                 <p className="text-cream/40 text-sm font-medium leading-relaxed group-hover:text-cream transition-colors">
                  {siteConfig.address}
                </p>
              </Link>
              <div className="space-y-2">
                <p className="text-[0.6rem] tracking-[0.3em] text-cream/20 uppercase">Direct Line</p>
                <a href={`tel:${siteConfig.whatsappNumber}`} className="text-cream/60 text-lg font-light hover:text-gold transition-colors tracking-wide">
                  +91 98112 38855
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-16 border-t border-white/5">
          <p className="text-cream/20 text-[0.65rem] font-bold tracking-[0.3em]">
            © {new Date().getFullYear()} AQUA2 LAB
          </p>
          <div className="flex gap-12">
            <span className="text-cream/10 text-[0.65rem] font-bold tracking-[0.3em] uppercase">Private Policy</span>
            <span className="text-cream/10 text-[0.65rem] font-bold tracking-[0.3em] uppercase">Terms of Art</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
