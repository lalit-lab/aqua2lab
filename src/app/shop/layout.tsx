import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aqua2 Lab — Aquascaping Studio, Gurugram",
  description:
    "Custom planted aquariums, paludariums, terrariums & ponds — designed, installed and maintained by Aqua2 Lab in Gurugram & NCR. Free consultation.",
  openGraph: {
    title: "Aqua2 Lab — Aquascaping Studio, Gurugram",
    description:
      "Bespoke planted ecosystems for luxury homes and corporate spaces across Gurugram & NCR. Design, installation, and long-term maintenance.",
    url: "https://aqua2lab.in/shop",
    siteName: "Aqua2 Lab",
    locale: "en_IN",
    type: "website",
  },
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
