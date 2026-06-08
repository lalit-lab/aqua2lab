import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram,
} from "lucide-react";
import { shopConfig } from "@/lib/shopData";

export default function ContactSection({
  onOpenModal,
}: {
  onOpenModal: () => void;
}) {
  return (
    <section id="contact" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-black tracking-[0.4em] uppercase text-cyan-600 mb-3">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#0D2B3E] mb-4">
            Let&apos;s Talk
          </h2>
          <p className="text-slate-400 font-light max-w-lg mx-auto text-sm leading-relaxed">
            Reach us via WhatsApp for a fast reply, or email us for a detailed
            enquiry. We respond within the same day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
          {/* WhatsApp card */}
          <a
            href={`https://wa.me/${shopConfig.whatsapp}?text=Hi!+I'd+like+to+enquire+about+a+planted+aquarium+setup.`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center p-10 bg-[#f0fdf4] border border-emerald-100 rounded-3xl hover:border-[#25D366] hover:shadow-lg hover:shadow-green-50 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-200">
              <MessageCircle size={28} className="text-white" />
            </div>
            <h3 className="font-black text-[#0D2B3E] text-lg mb-2">
              WhatsApp
            </h3>
            <p className="text-slate-500 text-sm font-light mb-4 leading-relaxed">
              Fastest response. Send us a message and we&apos;ll reply within 1
              hour during store hours.
            </p>
            <span className="text-[#25D366] font-bold text-sm">
              +91 98112 38855 →
            </span>
          </a>

          {/* Email card */}
          <a
            href={`mailto:${shopConfig.emailOwner1}`}
            className="group flex flex-col items-center text-center p-10 bg-slate-50 border border-slate-100 rounded-3xl hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-50 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-[#0D2B3E] rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-cyan-600 transition-all duration-300 shadow-lg shadow-slate-200">
              <Mail size={28} className="text-white" />
            </div>
            <h3 className="font-black text-[#0D2B3E] text-lg mb-2">Email</h3>
            <p className="text-slate-500 text-sm font-light mb-4 leading-relaxed">
              For detailed project enquiries, quotes, or maintenance contracts.
              We reply within 24 hours.
            </p>
            <span className="text-cyan-600 font-bold text-sm break-all">
              aqua2lab@gmail.com →
            </span>
          </a>

          {/* Book consultation */}
          <button
            onClick={onOpenModal}
            className="group flex flex-col items-center text-center p-10 bg-[#0D2B3E] border border-[#0D2B3E] rounded-3xl hover:bg-[#0e3652] transition-all duration-300 text-left"
          >
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <Clock size={28} className="text-cyan-400" />
            </div>
            <h3 className="font-black text-white text-lg mb-2">
              Book a Consultation
            </h3>
            <p className="text-slate-400 text-sm font-light mb-4 leading-relaxed">
              Register your details and our team will reach out to schedule a
              free consultation at your convenience.
            </p>
            <span className="text-cyan-400 font-bold text-sm">
              Fill the form →
            </span>
          </button>
        </div>

        {/* Info row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              Icon: MapPin,
              label: "Studio",
              value: "FF-32, SS Omnia Mall, Sector 86, Gurugram",
              href: shopConfig.mapsLink,
            },
            {
              Icon: Clock,
              label: "Hours",
              value: "11:00 AM – 8:00 PM · Mon to Sun",
            },
            {
              Icon: Phone,
              label: "Phone",
              value: shopConfig.phone,
              href: `tel:+919811238855`,
            },
            {
              Icon: Instagram,
              label: "Instagram",
              value: "@aqua2lab",
              href: shopConfig.instagram,
            },
          ].map(({ Icon, label, value, href }) => (
            <div
              key={label}
              className="flex items-start gap-3 p-5 bg-slate-50 rounded-2xl border border-slate-100"
            >
              <div className="w-9 h-9 bg-cyan-50 border border-cyan-100 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                <Icon size={15} className="text-cyan-600" />
              </div>
              <div>
                <div className="text-[0.6rem] font-bold text-slate-400 uppercase tracking-widest mb-0.5">
                  {label}
                </div>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0D2B3E] font-medium text-xs hover:text-cyan-600 transition-colors leading-snug"
                  >
                    {value}
                  </a>
                ) : (
                  <div className="text-[#0D2B3E] font-medium text-xs leading-snug">
                    {value}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Google Map */}
        <div className="mt-6 rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
          <iframe
            title="Aqua2 Lab location — SS Omnia Mall, Sector 86, Gurugram"
            src="https://maps.google.com/maps?q=Aqua2%20Lab%2C%20SS%20Omnia%20Mall%2C%20Sector%2086%2C%20Gurugram&z=15&output=embed"
            width="100%"
            height="380"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
