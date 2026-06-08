"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, Clock, User, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const availableTimes = [
  "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"
];

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    const formData = new FormData(e.currentTarget);
    const userMessage = formData.get("message") as string;

    const payload = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      service: `Consultation on ${selectedDate} at ${selectedTime} IST`,
      message: userMessage
        ? `${userMessage}\n\nPreferred date: ${selectedDate} at ${selectedTime} IST`
        : `Preferred date: ${selectedDate} at ${selectedTime} IST`,
    };

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        const json = await res.json().catch(() => ({}));
        // If email not configured, still show success but with WhatsApp fallback
        if (res.status === 500 && json.error?.includes("WhatsApp")) {
          setErrorMsg("Email not set up yet — please reach out on WhatsApp to confirm your slot.");
        } else {
          setErrorMsg(json.error || "Something went wrong. Please try again or contact us on WhatsApp.");
        }
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-bg0">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-playfair text-5xl md:text-7xl font-black text-white mb-6"
            >
              Book a <span className="gold-text">Consultation</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-cream/50 text-xl font-light"
            >
              Schedule a private session to discuss your dream aquascape.
              <br className="hidden md:block" />
              Available exclusively from <span className="text-mint font-bold">8:00 PM to 11:30 PM</span> IST.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Info Section */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="card p-8"
              >
                <h3 className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-6">Why Evening Slots?</h3>
                <p className="text-cream/60 text-sm leading-relaxed mb-6">
                  We dedicate our evenings to focused design consultations when our studio is quiet, ensuring you get our undivided artistic attention.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-cream/40">
                    <Clock size={18} className="text-mint" />
                    <span className="text-sm">20:00 — 23:30 (Daily)</span>
                  </div>
                  <div className="flex items-center gap-4 text-cream/40">
                    <Calendar size={18} className="text-mint" />
                    <span className="text-sm">Monday — Sunday</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Form Section */}
            <div className="lg:col-span-3">
              {!isSubmitted ? (
                <motion.form 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onSubmit={handleSubmit}
                  className="card p-8 md:p-10 space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[0.65rem] font-black tracking-[0.2em] text-cream/30 uppercase pl-1">Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/20" size={18} />
                        <input 
                          required
                          name="name"
                          type="text" 
                          placeholder="Your Name"
                          className="w-full bg-bg0/50 border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white focus:border-mint/50 outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[0.65rem] font-black tracking-[0.2em] text-cream/30 uppercase pl-1">Phone</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/20" size={18} />
                        <input 
                          required
                          name="phone"
                          type="tel" 
                          placeholder="+91 00000 00000"
                          className="w-full bg-bg0/50 border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white focus:border-mint/50 outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[0.65rem] font-black tracking-[0.2em] text-cream/30 uppercase pl-1">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/20" size={18} />
                      <input 
                        required
                        name="email"
                        type="email" 
                        placeholder="hello@example.com"
                        className="w-full bg-bg0/50 border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white focus:border-mint/50 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[0.65rem] font-black tracking-[0.2em] text-cream/30 uppercase pl-1">Select Date</label>
                      <input 
                        required
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full bg-bg0/50 border border-white/5 rounded-xl py-4 px-4 text-white focus:border-mint/50 outline-none transition-all appearance-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[0.65rem] font-black tracking-[0.2em] text-cream/30 uppercase pl-1">Select Time (IST)</label>
                      <div className="grid grid-cols-4 gap-2">
                        {availableTimes.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={cn(
                              "py-2 rounded-lg text-[0.7rem] font-bold border transition-all",
                              selectedTime === time 
                                ? "bg-mint border-mint text-bg0" 
                                : "bg-bg0/50 border-white/5 text-cream/40 hover:border-mint/30"
                            )}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[0.65rem] font-black tracking-[0.2em] text-cream/30 uppercase pl-1">Project Details</label>
                    <textarea 
                      name="message"
                      rows={4}
                      placeholder="Tell us about your space (Home/Office) and tank size..."
                      className="w-full bg-bg0/50 border border-white/5 rounded-xl py-4 px-4 text-white focus:border-mint/50 outline-none transition-all resize-none"
                    />
                  </div>

                  {errorMsg && (
                    <div className="px-4 py-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 text-sm leading-relaxed">
                      {errorMsg}
                    </div>
                  )}

                  <button
                    disabled={loading || !selectedTime || !selectedDate}
                    className="btn-gold w-full py-5 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-bg0/30 border-t-bg0 animate-spin rounded-full" />
                    ) : (
                      <>
                        <Send size={18} />
                        Confirm Booking Request
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card p-12 text-center"
                >
                  <div className="w-20 h-20 bg-mint/20 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="text-mint" size={40} />
                  </div>
                  <h2 className="font-playfair text-3xl font-bold text-white mb-4">Request Received!</h2>
                  <p className="text-cream/50 mb-10 max-w-xs mx-auto">
                    We've sent your details to our team. You'll receive a confirmation email and WhatsApp shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-mint text-[0.65rem] font-black tracking-[0.3em] uppercase hover:text-white transition-colors"
                  >
                    Set another meeting
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
