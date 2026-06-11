"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Lock, Mail, ArrowRight, Github, Chrome } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="min-h-screen bg-bg0">
      <Navbar />

      <section className="pt-32 pb-20 px-6 min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <div className="relative w-16 h-16 mx-auto mb-6">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                sizes="64px"
                className="object-contain"
              />
            </div>
            <h1 className="font-playfair text-4xl font-bold text-white mb-2">Client Portal</h1>
            <p className="text-cream/40 text-sm tracking-wide">Access your project dashboard & maintenance schedule</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="card p-8 md:p-10"
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-[0.6rem] font-black tracking-[0.2em] text-cream/30 uppercase pl-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/20" size={18} />
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-bg0/50 border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white focus:border-mint/50 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between pl-1">
                  <label className="text-[0.6rem] font-black tracking-[0.2em] text-cream/30 uppercase">Password</label>
                  <Link href="#" className="text-[0.6rem] font-bold text-mint/60 hover:text-mint transition-colors tracking-tighter">FORGOT PASSWORD?</Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/20" size={18} />
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-bg0/50 border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white focus:border-mint/50 outline-none transition-all"
                  />
                </div>
              </div>

              <button className="btn-gold w-full py-4 flex items-center justify-center gap-3 group">
                Sign In
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/5"></div>
              </div>
              <div className="relative flex justify-center text-[0.6rem] uppercase tracking-[0.2em]">
                <span className="bg-bg2 px-4 text-cream/20">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 py-3 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all">
                <Chrome size={18} className="text-cream/60" />
                <span className="text-xs font-bold text-cream/60 uppercase tracking-tighter">Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 py-3 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all">
                <Github size={18} className="text-cream/60" />
                <span className="text-xs font-bold text-cream/60 uppercase tracking-tighter">Github</span>
              </button>
            </div>

            <p className="text-center mt-10 text-[0.7rem] text-cream/30">
              Don't have an account?{" "}
              <Link href="#" className="text-mint font-bold hover:underline underline-offset-4">Request Access</Link>
            </p>
          </motion.div>
          
          <p className="text-center mt-8 text-[0.6rem] text-cream/20 tracking-widest uppercase">
            Securely managed by Aqua2 Lab
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
