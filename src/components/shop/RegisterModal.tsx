"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, User, Phone, Mail, ChevronDown, MessageCircle } from "lucide-react";
import { serviceOptions, shopConfig } from "@/lib/shopData";
import { cn } from "@/lib/utils";

type Step = "form" | "success" | "error";

export default function RegisterModal({
  isOpen,
  onClose,
  preselectedService = "",
}: {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}) {
  const [step, setStep] = useState<Step>("form");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: preselectedService,
    message: "",
  });

  useEffect(() => {
    if (isOpen && preselectedService) {
      setForm((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [isOpen, preselectedService]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStep("success");
      } else {
        setStep("error");
      }
    } catch {
      setStep("error");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep("form");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#0D2B3E] px-8 pt-8 pb-6 relative">
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors p-1"
                aria-label="Close"
              >
                <X size={20} />
              </button>
              <p className="text-cyan-400 text-xs font-black tracking-[0.3em] uppercase mb-2">
                Aqua2 Lab
              </p>
              <h2 className="text-white font-black text-2xl leading-tight">
                {step === "form"
                  ? "Book a Free Consultation"
                  : step === "success"
                  ? "All Set! 🌿"
                  : "Something went wrong"}
              </h2>
              {step === "form" && (
                <p className="text-slate-400 text-sm mt-2 font-light">
                  Share your details and we&apos;ll reach out within a few
                  hours.
                </p>
              )}
            </div>

            <div className="px-8 py-7">
              {step === "form" && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div className="relative">
                    <User
                      size={15}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="Your Full Name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 outline-none transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <Mail
                      size={15}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="Your Email Address"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 outline-none transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <Phone
                      size={15}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      required
                      name="phone"
                      type="tel"
                      placeholder="Phone / WhatsApp Number"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 outline-none transition-all"
                    />
                  </div>

                  {/* Service */}
                  <div className="relative">
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 outline-none transition-all appearance-none bg-white text-slate-600"
                    >
                      <option value="">Select a service (optional)</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={15}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                    />
                  </div>

                  {/* Message */}
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Tell us about your space — room size, tank idea, or just say hello!"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 outline-none transition-all resize-none"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className={cn(
                      "w-full py-4 rounded-xl font-black text-sm tracking-[0.1em] uppercase flex items-center justify-center gap-2 transition-all",
                      loading
                        ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                        : "bg-[#0D2B3E] text-white hover:bg-cyan-700 hover:scale-[1.01] active:scale-[0.99] shadow-lg"
                    )}
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-slate-300 border-t-slate-600 animate-spin rounded-full" />
                    ) : (
                      <>
                        <Send size={16} />
                        Send My Details
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    Your details are only shared with the Aqua2 Lab team.
                  </p>
                </form>
              )}

              {step === "success" && (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 size={32} className="text-emerald-500" />
                  </div>
                  <h3 className="font-black text-[#0D2B3E] text-xl mb-3">
                    We&apos;ve got your details!
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-3">
                    We&apos;ll reach out to <strong>{form.email}</strong> within
                    a few hours to schedule your free consultation.
                  </p>
                  <p className="text-slate-400 text-xs mb-8">
                    You can also send us a WhatsApp for a faster reply.
                  </p>
                  <a
                    href={`https://wa.me/${shopConfig.whatsapp}?text=Hi!+I+just+filled+the+consultation+form+on+your+website.+My+name+is+${encodeURIComponent(form.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3.5 rounded-full text-sm hover:bg-[#20bb5a] transition-all"
                  >
                    <MessageCircle size={16} />
                    Also message on WhatsApp
                  </a>
                  <button
                    onClick={handleClose}
                    className="mt-5 block mx-auto text-slate-400 text-xs hover:text-slate-600 transition-colors"
                  >
                    Close
                  </button>
                </div>
              )}

              {step === "error" && (
                <div className="text-center py-6">
                  <p className="text-slate-600 text-sm mb-6">
                    There was a problem sending your details. Please try
                    WhatsApp directly — it&apos;s faster anyway!
                  </p>
                  <a
                    href={`https://wa.me/${shopConfig.whatsapp}?text=Hi!+I'd+like+to+book+a+consultation.+My+name+is+${encodeURIComponent(form.name)},+email+${encodeURIComponent(form.email)},+phone+${encodeURIComponent(form.phone)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3.5 rounded-full text-sm hover:bg-[#20bb5a] transition-all"
                  >
                    <MessageCircle size={16} />
                    Contact via WhatsApp Instead
                  </a>
                  <button
                    onClick={() => setStep("form")}
                    className="mt-4 block mx-auto text-slate-400 text-xs hover:text-slate-600 transition-colors"
                  >
                    ← Try again
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
