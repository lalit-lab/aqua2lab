import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/layout/CustomCursor";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { siteConfig } from "@/lib/data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL('https://aqua2lab.com'),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: 'https://aqua2lab.com',
    siteName: 'Aqua2 Lab',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544551763-8a445585562e?w=1200&h=630&fit=crop&auto=format',
        width: 1200,
        height: 630,
        alt: 'Aqua2 Lab – Premium Planted Aquascaping Studio, Gurugram',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['https://images.unsplash.com/photo-1544551763-8a445585562e?w=1200&h=630&fit=crop&auto=format'],
  },
  alternates: {
    canonical: 'https://aqua2lab.com',
  },
  keywords: [
    'aquascape Gurugram', 'planted aquarium Delhi NCR', 'aquascaping studio India',
    'luxury aquarium installation', 'planted tank maintenance Gurugram',
    'Iwagumi aquascape', 'Dutch aquarium', 'Nature Aquarium Gurugram',
    'aquarium shop Sector 86', 'CO2 planted tank setup',
  ],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Aqua2 Lab",
    "description": siteConfig.description,
    "url": "https://aqua2lab.com",
    "telephone": "+919811238855",
    "email": siteConfig.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "FF-32, SS Omnia Mall",
      "addressLocality": "Sector 86, Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122004",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.3946",
      "longitude": "76.9894"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "10:00",
      "closes": "20:00"
    },
    "sameAs": [
      `https://wa.me/${siteConfig.whatsappNumber}`
    ],
    "image": "https://images.unsplash.com/photo-1544551763-8a445585562e?w=1200&h=630&fit=crop&auto=format",
    "priceRange": "₹₹₹",
    "servesCuisine": null,
    "@graph": [
      {
        "@type": "Service",
        "name": "Planted Aquascape Design & Installation",
        "provider": { "@type": "LocalBusiness", "name": "Aqua2 Lab" },
        "areaServed": ["Gurugram", "Delhi", "Noida", "Faridabad", "Greater Noida"],
        "description": "Custom planted aquarium design, technical setup, and ongoing maintenance for homes and corporate spaces."
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${cormorant.variable} antialiased`}
      >
        <CustomCursor />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
