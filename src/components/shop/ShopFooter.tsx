import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Mail, MessageCircle } from "lucide-react";
import { shopConfig } from "@/lib/shopData";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Guides", href: "#guides" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { Icon: Instagram, href: shopConfig.instagram, label: "Instagram" },
  { Icon: Facebook, href: shopConfig.facebook, label: "Facebook" },
  { Icon: Mail, href: `mailto:${shopConfig.emailOwner1}`, label: "Email" },
];

export default function ShopFooter() {
  return (
    <footer className="bg-[#0D2B3E] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-9 h-9">
                <Image
                  src="/logo.png"
                  alt="Aqua2 Lab"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-black text-xl tracking-tight">
                AQUA<span className="text-cyan-400">2</span> LAB
              </span>
            </div>
            <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
              Planted aquarium design, installation & maintenance for luxury
              homes and corporate spaces in Gurugram & NCR.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-white/5 hover:bg-cyan-500 border border-white/10 hover:border-cyan-500 rounded-xl flex items-center justify-center transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xs tracking-widest uppercase text-slate-400 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Alabama teaser */}
            <div className="mt-8 pt-7 border-t border-white/10">
              <p className="text-[0.6rem] font-black tracking-widest uppercase text-cyan-400 mb-2">
                🇺🇸 Coming Soon
              </p>
              <p className="text-slate-300 text-sm font-semibold mb-1">
                Aqua2 Lab — Alabama, USA
              </p>
              <p className="text-slate-500 text-xs font-light leading-relaxed">
                Our first international store is opening soon in Alabama.
              </p>
              <a
                href={`https://wa.me/919811238855?text=Please+notify+me+when+your+Alabama+store+opens!`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-xs text-cyan-400 hover:text-white underline underline-offset-2 transition-colors"
              >
                Get notified →
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xs tracking-widest uppercase text-slate-400 mb-5">
              Contact Us
            </h4>
            <p className="text-slate-400 text-sm font-light mb-2">
              {shopConfig.address}
            </p>
            <p className="text-slate-400 text-sm font-light mb-5">
              {shopConfig.hours}
            </p>
            <a
              href={`https://wa.me/${shopConfig.whatsapp}?text=Hi!+I'd+like+to+enquire+about+a+planted+aquarium.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white font-bold px-5 py-3 rounded-xl text-sm hover:bg-[#20bb5a] transition-all w-fit"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Aqua2 Lab. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs text-center sm:text-right">
            <a
              href={`mailto:${shopConfig.emailOwner1}`}
              className="hover:text-slate-400 transition-colors"
            >
              aqua2lab@gmail.com
            </a>
            {" · "}
            <Link href="/" className="hover:text-slate-400 transition-colors">
              View Portfolio Site
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
