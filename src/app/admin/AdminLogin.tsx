"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, ArrowRight } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.refresh();
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Login failed.");
      }
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#0D2B3E] flex items-center justify-center">
            <Lock className="text-cyan-400" size={24} />
          </div>
          <h1 className="text-2xl font-black text-[#0D2B3E]">Admin Dashboard</h1>
          <p className="text-slate-400 text-sm mt-1">Aqua2 Lab — Leads & Enquiries</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm space-y-5"
        >
          <div className="space-y-2">
            <label className="text-[0.6rem] font-black tracking-[0.2em] text-slate-400 uppercase">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoFocus
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-[#0D2B3E] focus:border-cyan-400 outline-none transition-all"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm font-medium">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full bg-[#0D2B3E] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-[#0a2230] transition-colors disabled:opacity-50"
          >
            {loading ? "Signing in…" : "Sign In"}
            {!loading && <ArrowRight size={18} />}
          </button>
        </form>

        <p className="text-center mt-6 text-[0.6rem] text-slate-300 tracking-widest uppercase">
          Aqua2 Lab · Sector 86, Gurugram
        </p>
      </div>
    </main>
  );
}
