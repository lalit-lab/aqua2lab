import { promises as fs } from "fs";
import path from "path";

// Leads are appended to a JSON file on disk. On a long-running server (VPS /
// `next start`) this persists; on ephemeral/serverless hosts it will reset on
// redeploy, in which case email remains the source of truth.
const DATA_DIR = path.join(process.cwd(), "data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  service?: string;
  message?: string;
  emailed: boolean; // whether the notification email actually went out
  createdAt: string; // ISO timestamp
}

async function readLeads(): Promise<Lead[]> {
  try {
    const raw = await fs.readFile(LEADS_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Lead[]) : [];
  } catch {
    // File missing or unreadable → treat as empty.
    return [];
  }
}

export async function getLeads(): Promise<Lead[]> {
  const leads = await readLeads();
  // Newest first.
  return leads.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export async function addLead(
  data: Omit<Lead, "id" | "createdAt">
): Promise<Lead> {
  const leads = await readLeads();
  const lead: Lead = {
    ...data,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
  };
  leads.push(lead);
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
  return lead;
}
