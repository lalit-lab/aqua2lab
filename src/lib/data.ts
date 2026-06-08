import { 
  SiteConfig, 
  HeroContent, 
  ExpertiseItem, 
  PackageItem, 
  GalleryItem, 
  TestimonialItem 
} from "./types";

export const siteConfig: SiteConfig = {
  name: "Aqua2 Lab",
  title: "Aqua2 Lab – The World of Planted Aquariums",
  description: "Bespoke planted ecosystems and aquascapes for luxury homes and corporate spaces in Gurugram.",
  whatsappNumber: "919811238855",
  email: "hello@aqua2lab.in",
  address: "FF-32, SS Omnia Mall, Sector 86, Gurugram",
  locationLink: "https://maps.google.com/?q=FF-32+SS+Omnia+Mall+Sector+86+Gurugram",
};

export const heroContent: HeroContent = {
  label: "IMMERSE IN THE WORLD OF PLANTED AQUARIUMS",
  title: "Nature Under Glass.",
  description: "We sculpt high-end living ecosystems — bespoke planted aquascapes that transform luxury residences and corporate lobbies into breathing works of art.",
  primaryCta: "Start Your Aquascape",
  secondaryCta: "View Gallery",
};

export const expertise: ExpertiseItem[] = [
  {
    id: "design",
    title: "Aquascape Design",
    description: "From minimalist Iwagumi stone layouts to lush Dutch jungles — we design planted compositions that become the centerpiece of any architecture.",
    color: "gold",
    tags: ["Bespoke Layouts", "Hardscape Selection", "Aquatic Plant Curation"],
  },
  {
    id: "installation",
    title: "Technical Setup",
    description: "Complete technical installation of high-end filtration, spectrum lighting, and automated CO₂ systems designed for optimal plant growth.",
    color: "mint",
    tags: ["Automated CO₂", "Plant-Specific Lighting", "Substrate Science"],
  },
  {
    id: "maintenance",
    title: "Plant Care",
    description: "Scheduled professional care including water chemistry analysis, expert plant trimming, and nutrient dosing to keep your ecosystem thriving.",
    color: "gold",
    tags: ["Plant Trimming", "Nutrient Dosing", "Algae Management"],
  },
  {
    id: "commercial",
    title: "Corporate Greenery",
    description: "Transforming hotels and office lobbies with large-format planted tanks that bring the calming essence of nature indoors.",
    color: "mint",
    tags: ["Lobby Ecosystems", "Atmosphere Design", "Sustainability"],
  },
];

export const packages: PackageItem[] = [
  {
    name: "Nano",
    title: "Desktop Nature",
    price: "₹15,000",
    features: ["Tanks up to 2 ft", "Premium Plant Selection", "Azo Substrate", "Full Spectrum LED"],
    isPopular: false,
  },
  {
    name: "Nature",
    title: "Signature Scape",
    price: "₹40,000",
    features: ["Tanks 2–4 ft", "Automated CO₂ System", "External Filtration", "3-Month Growth Plan", "Rare Aquatic Plants"],
    isPopular: true,
  },
  {
    name: "Elite",
    title: "Grand Ecosystem",
    price: "Custom",
    features: ["4 ft+ Large Format", "Bespoke Furniture", "Full Automation", "Annual Maintenance", "Master Scaper Design"],
    isPopular: false,
  },
];

export const galleryCategories = ["All", "Nature Style", "Dutch Style", "Iwagumi", "Nano"];

export const galleryItems: GalleryItem[] = [
  {
    title: "The Amazonian Dream",
    category: "Nature Style",
    image: "/images/gallery/gallery-1.jpg",
    description: "A lush, jungle-style planted aquarium — layered stem plants spilling over wood and lava rock with a winding white-sand path.",
  },
  {
    title: "Zen Rock Garden",
    category: "Iwagumi",
    image: "/images/gallery/gallery-2.jpg",
    description: "Smooth boulders set against a tall grassy backdrop in a calm, open Iwagumi-inspired layout.",
  },
  {
    title: "Vibrant Dutch Wall",
    category: "Dutch Style",
    image: "/images/gallery/gallery-3.jpg",
    description: "A high-tech Dutch-style aquascape with terraced rows of red and green stem plants over driftwood.",
  },
  {
    title: "Emerald Desktop",
    category: "Nano",
    image: "/images/gallery/gallery-4.jpg",
    description: "A compact nano scape for a home office — fern and Anubias-style greens over stone, lit by a slim desk lamp.",
  },
  {
    title: "The Driftwood Forest",
    category: "Nature Style",
    image: "/images/gallery/gallery-5.jpg",
    description: "Spiderwood branches draped in moss create a submerged rainforest canopy, alive with a shoal of neon tetras.",
  },
  {
    title: "Crystal Iwagumi",
    category: "Iwagumi",
    image: "/images/gallery/gallery-6.jpg",
    description: "A minimalist dragon-stone layout with fern accents and bright negative space — clean, calm and balanced.",
  },
  {
    title: "Moss & Stone Nano",
    category: "Nano",
    image: "/images/gallery/gallery-7.jpg",
    description: "A nano cube built around mossy rockwork and fine-leaved plants — a miniature mountain landscape under water.",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote: "Aqua2 Lab transformed our lobby with a breathtaking 6-foot aquascape. It has become a talking point for every single guest.",
    author: "Rohit Kapoor",
    role: "General Manager, Indra Hotels",
  },
  {
    quote: "Professionalism at its peak. The maintenance team is punctual and my tank looks better every month.",
    author: "Arjun Mehra",
    role: "CEO, TechPark NCR",
  },
  {
    quote: "I wanted something living and beautiful for my drawing room. Aqua2 Lab delivered a 3.5 ft Nature Aquarium that completely changed the energy of the space.",
    author: "Priya Nanda",
    role: "Homeowner, DLF Phase 4, Gurugram",
  },
  {
    quote: "From the design consultation to the final installation, every step was seamless. The Iwagumi they built for my study is meditative perfection.",
    author: "Vikram Singh",
    role: "Architect, Golf Course Road",
  },
  {
    quote: "We have two large tanks at our Cyber City office. The team handles everything — our employees love working near them. It's genuinely calming.",
    author: "Neha Bhatia",
    role: "HR Director, Fintech Startup, Gurugram",
  },
  {
    quote: "The nano scape they built for my desk is a masterpiece. Tiny but jaw-dropping. Every visitor asks who made it.",
    author: "Siddharth Joshi",
    role: "Founder, Creative Agency, Noida",
  },
];
