import { Inbox, Mail, MailX, Calendar } from "lucide-react";
import { isAuthed, expectedToken } from "@/lib/adminAuth";
import { getLeads } from "@/lib/leads";
import AdminLogin from "./AdminLogin";
import LogoutButton from "./LogoutButton";

// Reads cookies + filesystem, so it must render per-request.
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin — Aqua2 Lab",
  robots: { index: false, follow: false },
};

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4">
      <div className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center text-cyan-600">
        {icon}
      </div>
      <div>
        <p className="text-2xl font-black text-[#0D2B3E] leading-none">{value}</p>
        <p className="text-xs text-slate-400 font-medium mt-1">{label}</p>
      </div>
    </div>
  );
}

export default async function AdminPage() {
  // No password configured at all → guide the owner to set it.
  if (!expectedToken()) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
        <div className="max-w-md bg-white border border-amber-200 rounded-2xl p-8 text-center">
          <h1 className="text-xl font-black text-[#0D2B3E] mb-2">
            Admin not configured
          </h1>
          <p className="text-slate-500 text-sm">
            Set{" "}
            <code className="bg-amber-50 px-1.5 py-0.5 rounded font-mono text-amber-700">
              ADMIN_PASSWORD
            </code>{" "}
            in your{" "}
            <code className="bg-amber-50 px-1.5 py-0.5 rounded font-mono text-amber-700">
              .env.local
            </code>{" "}
            file, then restart the server.
          </p>
        </div>
      </main>
    );
  }

  if (!(await isAuthed())) {
    return <AdminLogin />;
  }

  const leads = await getLeads();
  const emailedCount = leads.filter((l) => l.emailed).length;
  const today = new Date().toDateString();
  const todayCount = leads.filter(
    (l) => new Date(l.createdAt).toDateString() === today
  ).length;

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-black text-[#0D2B3E]">
              Leads &amp; Enquiries
            </h1>
            <p className="text-slate-400 text-sm">
              Aqua2 Lab admin dashboard
            </p>
          </div>
          <LogoutButton />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <StatCard icon={<Inbox size={20} />} label="Total leads" value={leads.length} />
          <StatCard icon={<Calendar size={20} />} label="Today" value={todayCount} />
          <StatCard icon={<Mail size={20} />} label="Emailed" value={emailedCount} />
          <StatCard
            icon={<MailX size={20} />}
            label="Email pending"
            value={leads.length - emailedCount}
          />
        </div>

        {/* Leads table */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
          {leads.length === 0 ? (
            <div className="p-12 text-center">
              <Inbox className="mx-auto text-slate-300 mb-3" size={36} />
              <p className="text-slate-400 font-medium">No leads yet.</p>
              <p className="text-slate-300 text-sm mt-1">
                Enquiries from the contact form will appear here.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 text-left text-[0.65rem] font-black tracking-wider uppercase text-slate-400">
                    <th className="px-5 py-3">Date</th>
                    <th className="px-5 py-3">Name</th>
                    <th className="px-5 py-3">Contact</th>
                    <th className="px-5 py-3">Service</th>
                    <th className="px-5 py-3">Message</th>
                    <th className="px-5 py-3">Email</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-50/60 align-top">
                      <td className="px-5 py-4 text-slate-400 whitespace-nowrap">
                        {new Date(lead.createdAt).toLocaleString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                      <td className="px-5 py-4 font-bold text-[#0D2B3E] whitespace-nowrap">
                        {lead.name}
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <a
                          href={`https://wa.me/${lead.phone.replace(/\D/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-700 font-medium hover:underline block"
                        >
                          {lead.phone}
                        </a>
                        <a
                          href={`mailto:${lead.email}`}
                          className="text-slate-400 hover:underline block text-xs"
                        >
                          {lead.email}
                        </a>
                      </td>
                      <td className="px-5 py-4 text-slate-600 whitespace-nowrap">
                        {lead.service || "—"}
                      </td>
                      <td className="px-5 py-4 text-slate-600 max-w-xs">
                        {lead.message || "—"}
                      </td>
                      <td className="px-5 py-4">
                        {lead.emailed ? (
                          <span className="inline-flex items-center gap-1 text-emerald-600 text-xs font-bold">
                            <Mail size={13} /> Sent
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-amber-500 text-xs font-bold">
                            <MailX size={13} /> No
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
