export const shopConfig = {
  name: "Aqua2 Lab",
  tagline: "Aquascaping Studio — Gurugram",
  whatsapp: "919811238855",
  emailOwner1: "aqua2lab@gmail.com",
  emailOwner2: "lalitrajput876587@gmail.com",
  phone: "+91 98112 38855",
  address: "FF-32, SS Omnia Mall, Sector 86, Gurugram, Haryana",
  hours: "11:00 AM – 8:00 PM · Monday to Sunday",
  mapsLink: "https://maps.google.com/?q=FF-32+SS+Omnia+Mall+Sector+86+Gurugram",
  instagram: "https://instagram.com/aqua2lab",
  facebook: "https://facebook.com/aqua2lab",
};

export const shopNavLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Guides", href: "#guides" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const shopServices = [
  {
    slug: "planted-aquarium",
    icon: "🌿",
    title: "Planted Aquarium",
    subtitle: "Custom planted scapes",
    startingPrice: "From ₹8,000",
    description:
      "Fully customised planted aquariums — from a 30cm nano on your desk to a 6ft statement piece in your living room or office lobby. Every detail designed around your space.",
    features: [
      "Site visit & space assessment",
      "Custom hardscape & plant selection",
      "CO₂ system, filtration & LED setup",
      "Water cycling & commissioning",
      "30-day follow-up care",
    ],
    color: "emerald",
    image: "/images/services/service-1.jpg",
  },
  {
    slug: "paludarium",
    icon: "🪸",
    title: "Paludarium",
    subtitle: "Land + water living displays",
    startingPrice: "From ₹25,000",
    description:
      "A paludarium is part aquarium, part terrarium — a miniature rainforest with flowing water, aquatic plants below and lush tropical plants rising above the waterline.",
    features: [
      "Waterfall or stream feature",
      "Aquatic + terrestrial plant zones",
      "Reptile & amphibian friendly",
      "Custom rock & driftwood hardscape",
      "Humidity & lighting systems",
    ],
    color: "cyan",
    image: "/images/services/service-2.jpg",
  },
  {
    slug: "terrarium",
    icon: "🪴",
    title: "Terrarium",
    subtitle: "Glass garden ecosystems",
    startingPrice: "From ₹3,500",
    description:
      "Closed or open glass ecosystems filled with mosses, ferns, miniature plants and intricate hardscape. Self-sustaining, low-maintenance, and endlessly beautiful.",
    features: [
      "Closed or open terrarium design",
      "Tropical & temperate plant mixes",
      "Layered substrate system",
      "Moss walls & driftwood accents",
      "Perfect for gifting or décor",
    ],
    color: "green",
    image: "/images/services/service-3.jpg",
  },
  {
    slug: "pond",
    icon: "🏞️",
    title: "Pond & Water Garden",
    subtitle: "Outdoor water features",
    startingPrice: "From ₹20,000",
    description:
      "Outdoor koi ponds, fountain gardens, and lotus ponds — designed to complement your garden, balcony, or outdoor space with natural, self-sustaining water features.",
    features: [
      "Koi pond & fish pond design",
      "Lotus & lily water gardens",
      "Waterfall & fountain integration",
      "Filtration & aeration setup",
      "Seasonal maintenance plans",
    ],
    color: "blue",
    image: "/images/services/service-4.jpg",
  },
  {
    slug: "maintenance",
    icon: "💧",
    title: "Regular Maintenance",
    subtitle: "Scheduled care visits",
    startingPrice: "From ₹1,500 / visit",
    description:
      "Your aquascape on autopilot. Our team visits on a schedule you choose — weekly, fortnightly, or monthly — and keeps every system running at its best.",
    features: [
      "Water chemistry testing & dosing",
      "Plant trimming & reshaping",
      "Filter cleaning & equipment check",
      "Algae prevention & treatment",
      "Detailed visit report after each session",
    ],
    color: "sky",
    image: "/images/services/service-5.jpg",
  },
  {
    slug: "consultation",
    icon: "📐",
    title: "Design Consultation",
    subtitle: "Plan before you invest",
    startingPrice: "Free",
    description:
      "Not sure where to start? Our free consultation session covers your space, lighting, budget and style preferences — giving you a clear plan before any money is spent.",
    features: [
      "In-person or WhatsApp video call",
      "Space & lighting assessment",
      "Style recommendation & mood board",
      "Budget planning & timeline",
      "No commitment required",
    ],
    color: "violet",
    image: "/images/services/service-6.jpg",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Book a Consultation",
    description:
      "Fill in your details below. We'll reach out within a few hours to schedule a free in-person or video consultation.",
  },
  {
    step: "02",
    title: "We Design Your Setup",
    description:
      "After understanding your space, style and budget, we prepare a custom plan — hardscape, plants, equipment, and dimensions.",
  },
  {
    step: "03",
    title: "Installation Day",
    description:
      "Our team arrives with everything and completes the full setup in a single day — substrate, hardscape, plants, equipment, water.",
  },
  {
    step: "04",
    title: "Long-Term Care",
    description:
      "We visit on your chosen schedule to maintain the setup and ensure it thrives for years — not just the first month.",
  },
];

// ─── Guide Articles (full content) ──────────────────────────────────────────

export interface GuideSection {
  heading: string;
  body: string;
  tips?: string[];
}

export interface GuideArticle {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  image: string;
  intro: string;
  sections: GuideSection[];
  conclusion: string;
}

export const guides: GuideArticle[] = [
  {
    slug: "planted-aquariums-101",
    category: "Beginner",
    title: "Planted Aquariums 101: A Complete Beginner's Guide",
    excerpt:
      "Everything you need before setting up your first planted tank — substrate, lighting, CO₂, and the best plants to start with.",
    readTime: "7 min read",
    image: "/images/guides/guide-1.jpg",
    intro:
      "A planted aquarium is one of the most rewarding things you can keep in your home. Unlike a fish-only setup, a planted tank is a living ecosystem — plants, water, light, and nutrients in constant balance. Done right, it's almost self-sustaining. This guide walks you through everything you need to know to set up your first planted tank confidently.",
    sections: [
      {
        heading: "What Makes a Planted Aquarium Different?",
        body: "A planted aquarium keeps live aquatic plants as the centrepiece. This changes everything about how the tank works. Plants consume CO₂ and produce oxygen during the day, helping maintain water quality. They absorb nitrates that would otherwise build up from fish waste. And they create natural hiding spots and a sense of scale that fake plants simply cannot replicate.\n\nThe challenge is that live plants have requirements — light, nutrients, and sometimes CO₂ injection. Getting these right is what separates a thriving scape from a failing one.",
        tips: [
          "Start with easy plants like Java Moss, Anubias Nana, and Amazon Sword — these survive in most conditions.",
          "A planted tank does not need fish to look beautiful. Many aquascapers run fish-free tanks.",
          "Good plants reduce algae by competing for the same nutrients algae needs.",
        ],
      },
      {
        heading: "The Essential Equipment",
        body: "You don't need to spend a fortune to start. Here's what actually matters:\n\n**Tank:** Any glass tank works. Rimless tanks look cleaner but regular tanks are fine. Start with 30–60 cm to learn, then scale up.\n\n**Substrate:** This is the soil your plants grow in. Use a specialised aquatic substrate like ADA Amazonia, Fluval Stratum, or a local aquasoil brand. Regular aquarium gravel is not enough for most plants.\n\n**Lighting:** Plants need light to photosynthesise. For low-tech plants, a basic LED planted light works. For demanding plants, invest in a full-spectrum LED with adjustable intensity. Run lights for 6–8 hours daily using a timer.\n\n**Filtration:** A good filter keeps the water moving and clear. An external canister filter is ideal for tanks 40 cm and above — it's quieter and more powerful than hang-on-back filters.\n\n**CO₂ (optional for beginners):** CO₂ injection accelerates plant growth significantly. It's not required for low-tech plants but is essential for carpet plants like Monte Carlo or HC Cuba.",
        tips: [
          "Buy a timer for your lights. Inconsistent photoperiods cause algae.",
          "Avoid gravel for planted tanks — it has no nutrients and plants will struggle.",
          "A sponge pre-filter on your intake protects small fish and shrimplets.",
        ],
      },
      {
        heading: "Choosing Your First Plants",
        body: "The golden rule for beginners: start with low-maintenance species. These tolerate suboptimal lighting, basic substrate, and no CO₂.\n\n**Anubias Nana** — Practically indestructible. Grows slowly, attaches to rocks or driftwood, tolerates low light. A staple in every beginner's tank.\n\n**Java Moss** — Attaches to anything, grows in almost any condition, looks great as a carpet or tied to wood. Perfect for breeding tanks too.\n\n**Amazon Sword** — Large, dramatic background plant. Grows in gravel if given root tabs. Fills the back of any tank beautifully.\n\n**Cryptocoryne Wendtii** — Hardy midground plant that melts briefly when first planted but recovers fully. Available in green and red variants.\n\n**Rotala Rotundifolia** — Easy stem plant for the background. Grows fast, trims easily, adds colour and movement.",
        tips: [
          "Buy plants that are grown submerged (aquatic form), not emersed (grown out of water) — they transition faster.",
          "Rinse all new plants thoroughly to remove snail eggs and pests before adding to your tank.",
          "Plant densely from day one — a full tank of plants beats algae before it starts.",
        ],
      },
      {
        heading: "The Nitrogen Cycle: The Most Important Concept",
        body: "Before adding fish, your tank needs to cycle. This means establishing colonies of beneficial bacteria that convert toxic ammonia (from fish waste and uneaten food) into nitrite, and then nitrite into relatively safe nitrate.\n\nAmmonia and nitrite are lethal to fish. Nitrate is harmless in low quantities and is absorbed by your plants.\n\nCycling takes 4–6 weeks in a fish-free tank. You can speed it up by:\n- Adding a piece of filter media from an established tank\n- Using a bottled bacteria product (Seachem Stability, Dr. Tim's)\n- Doing a \"fish-in cycle\" with hardy fish and daily water changes (not recommended)\n\nTest your water with a liquid test kit (not strips — they're inaccurate). Your tank is cycled when ammonia and nitrite consistently read 0 ppm.",
        tips: [
          "Never do a complete water change during cycling — you'll wash out the beneficial bacteria.",
          "Keep the filter running 24/7 — bacteria live in the filter media, not just the water.",
          "Planted tanks often cycle faster because the plants absorb ammonia directly.",
        ],
      },
      {
        heading: "Common Beginner Mistakes",
        body: "Most planted tank failures come down to a few predictable errors:\n\n**Too much light, too early** — New tanks with nutrient-rich substrate don't need maximum light intensity. Start at 30–40% for the first month and gradually increase.\n\n**Irregular water changes** — Change 20–30% of your water weekly. Letting water quality slide is the fastest way to algae outbreaks.\n\n**Overcrowding fish** — More fish = more waste = more nutrients = more algae. Start with a small, peaceful shoal.\n\n**Cheap substrate** — Regular gravel has no nutrients. After a few months your plants will start yellowing. Invest in a proper aquasoil from the start.\n\n**Ignoring the filter** — Clean your filter media monthly in old tank water (not tap water). Rinsing it under the tap kills your bacterial colony.",
      },
    ],
    conclusion:
      "A planted aquarium is one of the most rewarding hobbies you can pick up. The key is patience — let the tank mature, start with easy plants, and don't rush the stocking. If you're based in Gurugram and want professional help setting up your first scape, we offer free consultations. Just send us a WhatsApp message and we'll guide you through it.",
  },

  {
    slug: "understanding-co2",
    category: "Care Guide",
    title: "Understanding CO₂ in Planted Tanks: The Complete Guide",
    excerpt:
      "Why CO₂ matters for plant growth, the difference between DIY and pressurised systems, and how to dial in the right levels safely.",
    readTime: "8 min read",
    image: "/images/guides/guide-2.jpg",
    intro:
      "Carbon dioxide is the single most important factor in a high-tech planted aquarium. Plants need three things to photosynthesise: light, CO₂, and nutrients. Most beginners manage light and nutrients but neglect CO₂ — and then wonder why their plants grow slowly or why algae keeps winning. This guide explains everything.",
    sections: [
      {
        heading: "Why CO₂ Matters",
        body: "In nature, aquatic plants receive CO₂ from the surrounding water, which absorbs it from the atmosphere and from the decomposition of organic matter. In a sealed aquarium, CO₂ is quickly depleted by your plants within hours of the lights turning on.\n\nWithout sufficient CO₂, plants cannot photosynthesise at full efficiency even if light and nutrients are perfect. The result: slow growth, weak stems, pale leaves, and — most frustratingly — algae thriving in the conditions your plants can't use.\n\nAdding CO₂ injection to a tank is like switching from economy mode to full throttle. Plants grow noticeably faster, leaves become greener and more compact, and carpeting plants actually spread.",
        tips: [
          "Low-tech plants like Anubias, Java Fern and Cryptocoryne can thrive without CO₂ injection.",
          "If you add CO₂, you need to match it with appropriate light and nutrient levels — imbalance causes algae.",
          "CO₂ must be injected during daylight hours only. Switch it off at night.",
        ],
      },
      {
        heading: "DIY CO₂ vs Pressurised Systems",
        body: "**DIY CO₂ (Yeast Fermentation)**\nA low-cost entry point. You mix sugar, yeast and water in a bottle, and the fermentation process produces CO₂. Costs under ₹500 to set up.\n\nDownside: output is inconsistent — high on day 1, dropping off over 2–3 weeks. You also can't turn it off at night, which can stress fish. Good for tanks under 30 litres.\n\n**Pressurised CO₂ (Regulator + Cylinder)**\nThe professional solution. A CO₂ cylinder (aluminium or steel, 0.5 kg to 2 kg) connects to a regulator, which precisely controls the output. You can set exact bubble rates, use solenoids to turn it off at night automatically, and the output is consistent throughout the cylinder's life.\n\nA complete pressurised system starts at ₹3,000–5,000 and lasts 6–12 months per refill depending on tank size. This is what we install on all our high-tech aquascapes.",
        tips: [
          "A solenoid valve (automatic on/off) is essential for pressurised systems — CO₂ overnight kills fish.",
          "Refilling CO₂ cylinders is cheap — around ₹200–400 for a 1 kg cylinder.",
          "Buy a cylinder that can be locally refilled at a welding supply or fire safety company.",
        ],
      },
      {
        heading: "How to Measure CO₂ Levels",
        body: "The ideal CO₂ level for planted aquariums is 20–30 ppm (parts per million). Below 15 ppm, plants struggle. Above 35–40 ppm, fish start to gasp at the surface.\n\n**Drop Checker Method** — A small glass vessel filled with a 4dKH reference solution and indicator dye hangs inside the tank. Green = correct. Yellow = too much. Blue = too little. It's a 1–2 hour lag indicator, not real-time, but reliable for daily monitoring.\n\n**pH + KH Method** — There's a mathematical relationship between pH, carbonate hardness (KH) and CO₂. If you know your KH and measure your pH, you can calculate CO₂ from a reference table. Accurate but requires two separate test kits.\n\n**Fish observation** — The fastest sign of too much CO₂ is fish gasping near the surface. If you see this, turn off CO₂ immediately and increase surface agitation.",
      },
      {
        heading: "Setting Up Your CO₂ System",
        body: "1. **Choose your diffuser placement** — Position the diffuser near the filter intake so CO₂ mist gets circulated throughout the tank. Avoid placing near the surface where bubbles escape immediately.\n\n2. **Set your bubble rate** — Start at 1 bubble per second (BPS) for a 60 cm tank. Adjust over several days based on your drop checker reading.\n\n3. **Set the timer** — CO₂ should turn on 30–60 minutes before lights on, and turn off 30–60 minutes before lights off. This ensures CO₂ is available the moment photosynthesis begins.\n\n4. **Monitor for 2 weeks** — CO₂ requirements change as your plants grow. Check the drop checker daily initially.\n\n5. **Observe fish behaviour** — The best early warning system. Any sign of stress (gasping, clamped fins, darting) means CO₂ is too high. Reduce bubble rate and increase surface agitation.",
        tips: [
          "Never run CO₂ at night — plants produce CO₂ at night and consume oxygen, further depleting it.",
          "Increase surface agitation (HOB filter, spray bar) if you always struggle to get CO₂ down fast enough in emergencies.",
          "Inline diffusers (placed in the filter pipe) are more efficient than in-tank ceramic diffusers.",
        ],
      },
    ],
    conclusion:
      "CO₂ is the biggest upgrade you can make to a planted aquarium. If your plants look pale, grow slowly, or if you keep fighting algae despite good lighting and nutrients, CO₂ injection will likely transform your tank. All our high-tech setups include a pressurised CO₂ system as standard. If you'd like us to add CO₂ to an existing tank, get in touch via WhatsApp.",
  },

  {
    slug: "aquascaping-styles",
    category: "Design",
    title: "Iwagumi, Dutch & Nature Style: Which is Right for You?",
    excerpt:
      "A plain-language breakdown of the three major aquascaping styles — what they look like, how hard they are, and who they suit.",
    readTime: "6 min read",
    image: "/images/guides/guide-3.jpg",
    intro:
      "Aquascaping has evolved into a genuine art form with distinct schools of design. The three most influential are the Nature Aquarium style (and its purest expression, Iwagumi), and the Dutch style. Knowing the difference helps you communicate what you want — and helps us design the right scape for your space.",
    sections: [
      {
        heading: "Nature Aquarium Style",
        body: "Developed by the legendary Takashi Amano in the 1980s, the Nature Aquarium style attempts to recreate natural landscapes — forests, mountains, valleys, riverbeds — inside a glass box. It draws heavily from Japanese aesthetic principles: asymmetry, negative space, depth, and the idea that beauty lies in incompleteness (wabi-sabi).\n\nA Nature Aquarium typically features:\n- A mix of hardscape (rocks or driftwood) as the focal point\n- Carpeting plants in the foreground, tall plants in the background\n- An intentional focal point (usually off-centre, following the golden ratio)\n- Open 'breathing room' in the midground\n- Small schooling fish like rasboras or tetras to add movement\n\n**Difficulty:** Medium. Requires CO₂ and regular maintenance but is achievable with guidance.\n\n**Best for:** Anyone who wants a dramatic, landscape-style tank with visual depth. Works beautifully as a living wall art piece.",
        tips: [
          "The rule of thirds applies here — place your main hardscape at roughly ⅓ or ⅔ across the tank.",
          "Use fish that swim in schools — they add a sense of scale and movement that solo fish can't.",
          "Avoid mixing too many plant species — restraint is a core principle of Japanese aesthetics.",
        ],
      },
      {
        heading: "Iwagumi Style",
        body: "Iwagumi (岩組) literally means 'rock formation' in Japanese. It is the purest, most minimalist branch of the Nature Aquarium school — typically just rocks and a single carpet plant species. No driftwood, no tall background plants. Just stone, carpeting grass, and negative space.\n\nThe most famous Iwagumi rock arrangement is the 'Sanzon Iwagumi' — three rocks representing a Buddhist trinity, with one main 'Oyaishi' stone flanked by two smaller supporting stones at specific angles.\n\n**Difficulty:** Hard. The minimalism means there is nowhere to hide mistakes. Carpet plants require high light, CO₂, and precise nutrient dosing. Very small errors are immediately visible.\n\n**Best for:** Clients who want something truly striking and are committed to premium maintenance. Often the centrepiece of a luxury home or executive office.",
      },
      {
        heading: "Dutch Style",
        body: "While Japan was developing the Nature Aquarium aesthetic, the Netherlands had its own long tradition of planted aquariums — the Dutch style. Developed from the 1930s onwards, Dutch aquascaping is fundamentally different: it is a garden, not a landscape.\n\nA Dutch aquarium features:\n- Organised 'rows' or 'streets' of different plant species\n- Maximum plant variety and colour contrast\n- No exposed substrate — every centimetre covered by plants\n- Red, green, and pink plants arranged for colour harmony\n- Typically no hardscape (or minimal)\n\nThe result looks like an underwater flower garden — dense, colourful, and incredibly lush.\n\n**Difficulty:** Hard to expert. The challenge is managing many different plants simultaneously, each with different growth rates, light needs and care requirements. Water chemistry must be very precise.\n\n**Best for:** Plant enthusiasts who love variety. Also extremely visually impressive for large corporate spaces where you want maximum visual impact.",
        tips: [
          "Dutch tanks rely on high light and CO₂ — there are very few low-tech Dutch scapes that look correct.",
          "Red plants (like Alternanthera reineckii) require the most light and make a powerful visual contrast.",
          "Trimming discipline is essential — Dutch tanks need weekly shaping to maintain clean 'street' lines.",
        ],
      },
      {
        heading: "How to Choose: A Quick Guide",
        body: "**Choose Nature Aquarium if:** You want a landscape scene with a natural, Japanese-inspired feel. You're open to CO₂ and moderate maintenance.\n\n**Choose Iwagumi if:** You want maximum impact with minimum visual noise. You're in a premium space (luxury apartment, executive office) and want something architecturally powerful. You're committed to excellent maintenance.\n\n**Choose Dutch if:** You love variety and colour. You want your tank to look like an exotic underwater garden. You enjoy the hobby aspect of managing many plant species.\n\n**Not sure?** That's exactly what our Design Consultation is for. Book a free session and we'll look at your space, your aesthetic, and your commitment level — and recommend the right style for you.",
      },
    ],
    conclusion:
      "There is no 'best' aquascaping style — only the right one for your space and your lifestyle. The Nature Aquarium style is what most of our clients choose, but we design and maintain all three styles with equal expertise. If you're based in Gurugram, book a free consultation and let's discuss what works for your home or office.",
  },

  {
    slug: "introduction-to-paludariums",
    category: "Paludarium",
    title: "Introduction to Paludariums: The Rainforest in Your Room",
    excerpt:
      "Part aquarium, part terrarium — a paludarium combines aquatic and terrestrial zones into one living display. Here's everything you need to know.",
    readTime: "6 min read",
    image: "/images/guides/guide-4.jpg",
    intro:
      "A paludarium (from the Latin 'palus' — marsh) is a terrarium that contains both aquatic and terrestrial elements. At its most dramatic, it recreates a tropical riverbank or rainforest floor: water cascading over mossy rocks, aquatic plants below the waterline, and tropical plants, ferns, and bromeliads growing above. Nothing else creates the same sense of a living, breathing ecosystem.",
    sections: [
      {
        heading: "How a Paludarium is Structured",
        body: "A paludarium is divided into two or three zones:\n\n**Aquatic Zone** (bottom) — The water section, housing fish, shrimp, aquatic plants, and often a waterfall pump that circulates water up to the terrestrial zone.\n\n**Riparian Zone** (middle) — The transition area between water and land. Often where the most dramatic planting happens — emergent aquatic plants, roots growing into the water, and shoreline mosses.\n\n**Terrestrial Zone** (top) — The 'dry land' section filled with tropical plants, epiphytes (plants that grow on other plants, like bromeliads and orchids), mosses, and hardscape features like rocks and driftwood.\n\nThe water is continuously recirculated via a hidden pump, so the waterfall or stream is permanent — it's not a static display.",
        tips: [
          "The ratio of water to land is up to you — some paludariums are 70% aquatic, others are 70% terrestrial.",
          "Use a tall, front-opening tank for a paludarium — access to the terrestrial zone is important for trimming.",
          "Beginner-friendly paludariums focus on the aquatic section with just a small raised land area of moss.",
        ],
      },
      {
        heading: "Best Plants for a Paludarium",
        body: "**Aquatic zone:** Java Moss, Anubias, Bucephalandra, Mini Bolbitis, Eleocharis (hairgrass). These tolerate the constant humidity and changing water levels.\n\n**Riparian zone:** Creeping Jenny (Lysimachia), Hydrocotyle tripartita, Pothos (highly adaptable), mini Monstera. Roots should be able to reach the water.\n\n**Terrestrial zone:** Fittonia, Peperomia, Orchids, miniature Philodendrons, Tillandsia (air plants), Selaginella (spikemoss), various Ficus species.\n\n**For mosses:** Java Moss works in the aquatic zone; Cushion Moss, Mood Moss and Sheet Moss are perfect for the terrestrial areas.",
        tips: [
          "Pothos is one of the most versatile paludarium plants — its roots can grow into the water and the vine can trail across the terrestrial section.",
          "Avoid plants that need dry periods (succulents, cacti) — paludariums are permanently humid.",
          "Bromeliads add dramatic colour to the upper terrestrial zone and need no substrate — just wedge them into crevices in the hardscape.",
        ],
      },
      {
        heading: "Inhabitants: Fish, Shrimp & More",
        body: "Paludariums open up a fascinating range of inhabitants:\n\n**Fish:** Small tropical species suit the aquatic zone perfectly — Endlers Livebearers, Celestial Pearl Danio, Chili Rasboras. Avoid large or boisterous fish.\n\n**Shrimp:** Neocaridina shrimp (cherry shrimp) are ideal — they're peaceful, algae-grazing, and incredibly decorative.\n\n**Amphibians:** The terrestrial zone can house small frogs (Dart frogs in large setups, Tree frogs in tall builds) or newts that transition between zones naturally.\n\n**Reptiles:** Geckos and small skinks in larger terrestrial builds. Humidity must match the species requirements.\n\nNote: Mixing species requires careful research. Never mix animals that would eat each other.",
      },
      {
        heading: "Maintenance: What to Expect",
        body: "A paludarium requires more regular attention than a standard aquarium but less than you might expect once established:\n\n**Weekly:** Check water level (evaporation is high due to the open top and waterfall), top up with dechlorinated water. Remove any yellowing plant material.\n\n**Fortnightly:** Clean the pump intake and check the waterfall flow rate. Mist the terrestrial section if humidity looks low.\n\n**Monthly:** Full water change in the aquatic section (20–30%). Trim terrestrial plants that are growing into the aquatic zone. Clean the front glass of any hard water marks.\n\nOur maintenance service covers paludariums on the same schedules as standard aquariums — just let us know what you have.",
      },
    ],
    conclusion:
      "A paludarium is one of the most visually stunning displays you can have in a home or office — and far more achievable than most people think. We've built paludariums ranging from 30cm desktop pieces to room-dividing builds over 1.5 metres tall. If you're curious about a paludarium for your space, book a free consultation and let's see what's possible.",
  },

  {
    slug: "terrarium-guide",
    category: "Terrarium",
    title: "Terrariums: Your Guide to Glass Garden Ecosystems",
    excerpt:
      "Closed and open terrariums explained — plant selection, substrate layering, hardscape, and how to keep them thriving long-term.",
    readTime: "5 min read",
    image: "/images/guides/guide-5.jpg",
    intro:
      "A terrarium is a glass-enclosed garden — a miniature ecosystem you can hold in your hands or display on a shelf. They're one of the most popular décor pieces we create, because they're beautiful, long-lasting, and practically maintenance-free once established correctly. Here's how they work and what makes a great one.",
    sections: [
      {
        heading: "Closed vs Open Terrariums",
        body: "**Closed terrariums** have a lid or sealed opening. The moisture inside the enclosure cycles — plants transpire water vapour, which condenses on the glass walls and drips back to the substrate. Once established, a closed terrarium can go weeks or months without watering. They're ideal for moisture-loving plants like ferns, mosses, and tropical species.\n\n**Open terrariums** have no lid or a partially open top. They lose moisture to the air and require more regular watering. However, they support a wider range of plants including succulents and air plants (Tillandsia) which would rot in a closed environment.\n\nFor gifting and low-maintenance décor, closed terrariums with tropical plants and mosses are almost always the right choice.",
        tips: [
          "A correctly set up closed terrarium should show light condensation on the glass in the morning — this is normal and healthy.",
          "If condensation is so heavy you can't see inside, crack the lid briefly to allow some moisture to escape.",
          "Never put succulents or cacti in a closed terrarium — they rot in constant humidity.",
        ],
      },
      {
        heading: "The Substrate Layer System",
        body: "The foundation of any terrarium is its substrate system. Getting this right means healthy plants and no root rot for years.\n\n**Layer 1 — Drainage (bottom):** 2–3 cm of coarse material like small pebbles, LECA (light expanded clay aggregate), or crushed gravel. This creates a reservoir below the soil where excess water collects, away from roots.\n\n**Layer 2 — Separation:** A thin layer of long-fibre sphagnum moss acts as a barrier, preventing the soil from filtering down into the drainage layer. Some builders use fine mesh or horticultural fleece instead.\n\n**Layer 3 — Growing Medium:** 4–8 cm of tropical plant mix — typically a blend of coco coir, orchid bark, perlite, and a small amount of activated charcoal. Pre-made ABG mix (Atlanta Botanical Garden mix) is excellent for tropical terrariums.\n\n**Optional Layer 4 — Top Dressing:** A thin layer of fine moss, decorative sand, or small pebbles on the surface. Purely aesthetic but adds a finished look.",
      },
      {
        heading: "Plant Selection for Terrariums",
        body: "The best closed terrarium plants are small, slow-growing, and love humidity:\n\n**Mosses:** Cushion moss, sheet moss, and Java moss form the 'floor' of most terrariums. Virtually indestructible in humid conditions.\n\n**Fittonia (Nerve Plant):** Available in green/white and green/pink. Tiny leaves with intricate vein patterns. Perfect scale for small terrariums.\n\n**Miniature Ferns:** Maidenhair fern, table fern, and button fern stay small and love humidity. Avoid large fern varieties.\n\n**Peperomia:** Hundreds of varieties, most stay small and compact. Extremely hardy in terrariums.\n\n**Selaginella (Spikemoss):** Creeping plant that fills gaps beautifully. Looks like bright green coral.\n\n**Miniature Orchids:** For experienced builders. Require specific growing conditions but reward with flowers inside a sealed glass.",
        tips: [
          "Scale matters enormously — use small-leaved plants in small containers. A large-leaved plant overwhelms a small terrarium within weeks.",
          "Buy rooted cuttings or tissue culture plants for the cleanest, pest-free start.",
          "Avoid plants with vigorous growth habits — they'll crowd out everything else quickly.",
        ],
      },
      {
        heading: "Hardscape: Rocks, Wood & Arrangement",
        body: "The hardscape is what makes a terrarium look designed rather than just 'a pot of plants in glass'.\n\n**Rocks:** Seiryu stone, lava rock, and slate work beautifully. Avoid limestone in humid environments — it slowly breaks down. Arrange rocks in odd numbers (3 or 5) and vary their sizes dramatically.\n\n**Wood:** Driftwood, spiderwood, and cork bark add beautiful structure. Cork bark tubes are also useful as plant mounts for epiphytes like orchids and Tillandsia.\n\n**Moss on hardscape:** Attaching moss to rocks and wood with aquarium gel glue is one of the most effective techniques in terrarium design. It makes hardscape look ancient and established immediately.\n\n**Design principle:** Think about the viewer's eye. Create a clear focal point — usually a larger rock or piece of wood — and build outward from it. Leave breathing room; don't fill every centimetre.",
      },
    ],
    conclusion:
      "A well-built terrarium is one of the most satisfying things to own — a tiny world that changes slowly over months and years as plants fill in, moss spreads, and the ecosystem stabilises. We build terrariums in all sizes, from 15cm globe vessels to full cabinet builds. They're also one of our most popular corporate gifting options. If you'd like a custom terrarium for your home, office, or as a gift, reach out via WhatsApp or book a consultation.",
  },
];

// ─── Portfolio ───────────────────────────────────────────────────────────────
// Add your real project photos to /public/images/portfolio/
// Name them: project-1.jpg, project-2.jpg ... project-8.jpg
// Update the title, category, and description below to match your actual work.

export type PortfolioCategory =
  | "Planted Aquarium"
  | "Paludarium"
  | "Terrarium"
  | "Marine Reef"
  | "Pond";

export interface PortfolioItem {
  id: number;
  title: string;
  category: PortfolioCategory;
  image: string; // path inside /public — e.g. /images/portfolio/project-1.jpg
  description: string;
}

// Real Aqua2 Lab project photos — files live in /public/images/portfolio/
export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Nature Planted — Living Room 3ft",
    category: "Planted Aquarium",
    image: "/images/portfolio/project-1.jpg",
    description: "3ft planted tank with stone hardscape & colour stems. Set up and maintained in a Gurugram apartment.",
  },
  {
    id: 2,
    title: "Driftwood Scape — Home Study",
    category: "Planted Aquarium",
    image: "/images/portfolio/project-2.jpg",
    description: "Driftwood & carpet aquascape over white sand, lit by a sunny window. A calm corner piece.",
  },
  {
    id: 3,
    title: "Zen Buddha Tank — Bedroom",
    category: "Planted Aquarium",
    image: "/images/portfolio/project-3.jpg",
    description: "Tall blue-lit display with driftwood arch and a Buddha centrepiece. Peaceful bedroom accent.",
  },
  {
    id: 4,
    title: "Red Stem Planted — 3ft",
    category: "Planted Aquarium",
    image: "/images/portfolio/project-4.jpg",
    description: "Densely planted tank with red stems and driftwood over a gravel bed. Home installation.",
  },
  {
    id: 5,
    title: "Marine Reef — Clownfish & Anemone",
    category: "Marine Reef",
    image: "/images/portfolio/project-5.jpg",
    description: "Saltwater reef with live rock, anemones and clownfish. Full marine setup & maintenance.",
  },
  {
    id: 6,
    title: "Iwagumi Rock — Living Room",
    category: "Planted Aquarium",
    image: "/images/portfolio/project-6.jpg",
    description: "Rock-centred Iwagumi scape with lush green growth. Installed in a family living room.",
  },
  {
    id: 7,
    title: "5ft Statement Tank — Wall Unit",
    category: "Planted Aquarium",
    image: "/images/portfolio/project-7.jpg",
    description: "Large planted aquarium built into a wood wall unit — a true focal point for the room.",
  },
  {
    id: 8,
    title: "6ft Community Planted — Lounge",
    category: "Planted Aquarium",
    image: "/images/portfolio/project-8.jpg",
    description: "6ft community tank with mixed plants over a pebble bed. Showpiece for a family lounge.",
  },
  {
    id: 9,
    title: "Nature Aquascape — Moss & Driftwood",
    category: "Planted Aquarium",
    image: "/images/portfolio/project-9.jpg",
    description: "Competition-style nature aquascape — driftwood, moss, carpet lawn and neon tetras.",
  },
  {
    id: 10,
    title: "Nano Cube — Bedside Table",
    category: "Planted Aquarium",
    image: "/images/portfolio/project-10.jpg",
    description: "Compact planted nano cube on a side table by the window. Perfect low-footprint green corner.",
  },
  {
    id: 11,
    title: "Jungle Style — Dense Planted",
    category: "Planted Aquarium",
    image: "/images/portfolio/project-11.jpg",
    description: "Wild jungle-style aquascape packed with stem plants and red accents. High-energy planted build.",
  },
  {
    id: 12,
    title: "Dutch Style — Carpet & Reds",
    category: "Planted Aquarium",
    image: "/images/portfolio/project-12.jpg",
    description: "Dutch-inspired layout with a carpet foreground, red stems and stone. High-light, CO₂ planted tank.",
  },
  {
    id: 13,
    title: "Moss Bowl Terrarium — Desk",
    category: "Terrarium",
    image: "/images/portfolio/project-13.jpg",
    description: "Spherical moss terrarium with stone steps and white pebbles. A living desk ornament.",
  },
  {
    id: 14,
    title: "4ft Planted — Open Lounge",
    category: "Planted Aquarium",
    image: "/images/portfolio/project-14.jpg",
    description: "Wide 4ft planted tank with driftwood and stems, framing an open lounge space.",
  },
  {
    id: 15,
    title: "Nano Jar Scape — Wabi-Kusa",
    category: "Terrarium",
    image: "/images/portfolio/project-15.jpg",
    description: "Tiny wabi-kusa style jar with pearlweed and moss. Minimal, self-contained green decor.",
  },
  {
    id: 16,
    title: "Paludarium — Land & Water Display",
    category: "Paludarium",
    image: "/images/portfolio/project-16.jpg",
    description: "Part-aquarium, part-terrarium build with terrestrial plants above and a water section below.",
  },
  {
    id: 17,
    title: "Java Fern Planted — CO₂ System",
    category: "Planted Aquarium",
    image: "/images/portfolio/project-17.jpg",
    description: "Java fern & moss planted tank running a full external canister and CO₂ setup. Home install.",
  },
  {
    id: 18,
    title: "Showpiece Moss Tank — Café",
    category: "Planted Aquarium",
    image: "/images/portfolio/project-18.jpg",
    description: "Statement weeping-moss aquascape installed as a centrepiece in a commercial café space.",
  },
];

export const portfolioCategories: PortfolioCategory[] = [
  "Planted Aquarium",
  "Marine Reef",
  "Paludarium",
  "Terrarium",
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
// Replace isPlaceholder: true with isPlaceholder: false once you fill in real details.
// Get quotes from happy WhatsApp messages, Google reviews, or just call the client.

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
  isPlaceholder: boolean;
}

export const shopTestimonials: Testimonial[] = [
  {
    quote: "The 4ft planted tank in our living room gets more compliments than anything else in the house. Lalit's team handled everything — from the layout to the first water change — and it's been thriving for 8 months now with their monthly visits.",
    author: "Rahul Mehta",
    role: "Homeowner · DLF Phase 4, Gurugram",
    rating: 5,
    isPlaceholder: false,
  },
  {
    quote: "We wanted something striking for our office reception and Aqua2 Lab delivered beyond expectation. The paludarium they built gets photographed by every client who walks in. Maintenance team is professional and always on time.",
    author: "Priya Sharma",
    role: "Operations Manager · Tech Firm, Cyber City",
    rating: 5,
    isPlaceholder: false,
  },
  {
    quote: "Honest, skilled, and genuinely passionate about what they do. They talked us out of an overly complex setup and suggested something that actually suits our lifestyle. The consultation alone was worth it — no pressure, just good advice.",
    author: "Vikram Bhatia",
    role: "Homeowner · Sector 57, Gurugram",
    rating: 5,
    isPlaceholder: false,
  },
];

export const shopStats = [
  { value: "120+", label: "Projects Completed" },
  { value: "5+", label: "Years Experience" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "1hr", label: "WhatsApp Response" },
];

export const serviceOptions = [
  "Planted Aquarium Setup",
  "Paludarium",
  "Terrarium",
  "Pond & Water Garden",
  "Regular Maintenance",
  "Design Consultation",
  "Tank Health Check",
  "General Enquiry",
];
