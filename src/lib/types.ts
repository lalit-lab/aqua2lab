export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  whatsappNumber: string;
  email: string;
  address: string;
  locationLink: string;
}

export interface HeroContent {
  label: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  color: "gold" | "mint";
  tags: string[];
}

export interface PackageItem {
  name: string;
  title: string;
  price: string;
  features: string[];
  isPopular: boolean;
}

export interface GalleryItem {
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
}
