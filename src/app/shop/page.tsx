import { redirect } from "next/navigation";

// The shop content now lives on the unified homepage. Keep this route as a
// permanent redirect so old links and bookmarks to /shop still work.
export default function ShopPage() {
  redirect("/");
}
