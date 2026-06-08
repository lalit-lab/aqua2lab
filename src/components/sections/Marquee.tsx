const items = [
  "AQUASCAPING", "LIVING ART", "BESPOKE DESIGN", "NATURE AQUARIUM",
  "PLANTED TANKS", "CO₂ SYSTEMS", "BIOTOPE", "WABI-KUSA",
  "NATURE INSPIRED", "LOW MAINTENANCE", "SCIENTIFICALLY BALANCED",
  "GURUGRAM SPECIALISTS", "HAND-CRAFTED", "JAPANESE AESTHETICS"
];

export default function Marquee() {
  return (
    <div className="overflow-hidden py-5 bg-bg0 border-y border-gold/10">
      <div className="flex animate-marquee whitespace-nowrap font-playfair text-[0.85rem] tracking-[0.25em] text-gold/50">
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center">
            <span className="px-8">{item}</span>
            <span className="text-mint">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
