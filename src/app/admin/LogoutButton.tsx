"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  }

  return (
    <button
      onClick={logout}
      className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[#0D2B3E] transition-colors"
    >
      <LogOut size={16} />
      Logout
    </button>
  );
}
