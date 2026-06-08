import { createHash } from "crypto";
import { cookies } from "next/headers";

// Simple shared-password gate for the /admin dashboard.
// The password is read from the ADMIN_PASSWORD env var (set in .env.local,
// which is gitignored so it never reaches the public repo). The cookie stores
// only a hash of the password, never the password itself.

export const ADMIN_COOKIE = "aqua2_admin";

function hash(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

/** The token we expect in the cookie when the user is authenticated. */
export function expectedToken(): string | null {
  const pass = process.env.ADMIN_PASSWORD;
  if (!pass) return null;
  return hash(`aqua2-lab::${pass}`);
}

/** True when a correct password was supplied. */
export function checkPassword(input: string): boolean {
  const pass = process.env.ADMIN_PASSWORD;
  return !!pass && input === pass;
}

/** Read the cookie and verify the current request is authenticated. */
export async function isAuthed(): Promise<boolean> {
  const expected = expectedToken();
  if (!expected) return false;
  const store = await cookies();
  return store.get(ADMIN_COOKIE)?.value === expected;
}
