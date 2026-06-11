"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  MessageCircle,
  Ruler,
  GlassWater,
  Archive,
  Leaf,
  Mountain,
  Sprout,
  ShieldCheck,
  Check,
} from "lucide-react";
import {
  shopConfig,
  tankSizes,
  glassOptions,
  cabinetOptions,
  setupStyles,
  hardscapeOptions,
  plantingLevels,
  amcPlan,
} from "@/lib/shopData";
import TankPreview from "@/components/shop/TankPreview";
import { cn } from "@/lib/utils";

const LITRES_PER_CUBIC_INCH = 0.0163871;

const formatINR = (n: number) =>
  "₹" + Math.round(n).toLocaleString("en-IN");

// Round an estimate to a friendly figure (nearest ₹500)
const round500 = (n: number) => Math.round(n / 500) * 500;

const volumeOf = (l: number, w: number, h: number) =>
  l * w * h * LITRES_PER_CUBIC_INCH;

export default function TankCalculator() {
  const [sizeId, setSizeId] = useState("3ft");
  const [glassId, setGlassId] = useState("normal");
  const [cabinetId, setCabinetId] = useState("stand");
  const [styleId, setStyleId] = useState("nature");
  const [hardscapeId, setHardscapeId] = useState("wood");
  const [plantingId, setPlantingId] = useState("medium");
  const [withAmc, setWithAmc] = useState(false);
  const [custom, setCustom] = useState({ l: 42, w: 16, h: 18 });

  const isCustom = sizeId === "custom";
  const preset = tankSizes.find((s) => s.id === sizeId);
  const glass = glassOptions.find((g) => g.id === glassId)!;
  const cabinet = cabinetOptions.find((c) => c.id === cabinetId)!;
  const style = setupStyles.find((s) => s.id === styleId)!;
  const hardscape = hardscapeOptions.find((h) => h.id === hardscapeId)!;
  const planting = plantingLevels.find((p) => p.id === plantingId)!;

  const dims = isCustom
    ? { lengthIn: custom.l, widthIn: custom.w, heightIn: custom.h }
    : { lengthIn: preset!.lengthIn, widthIn: preset!.widthIn, heightIn: preset!.heightIn };

  const sizeLabel = isCustom ? "Custom Size" : preset!.label;

  const estimate = useMemo(() => {
    const litres = Math.round(
      volumeOf(dims.lengthIn, dims.widthIn, dims.heightIn)
    );
    const lengthFt = dims.lengthIn / 12;

    let tank: number;
    if (isCustom) {
      // Price a custom tank from the preset closest in volume, scaled by volume
      const nearest = tankSizes.reduce((best, s) => {
        const v = (t: typeof s) =>
          Math.abs(volumeOf(t.lengthIn, t.widthIn, t.heightIn) - litres);
        return v(s) < v(best) ? s : best;
      });
      const nearestVol = volumeOf(
        nearest.lengthIn,
        nearest.widthIn,
        nearest.heightIn
      );
      const base =
        glassId === "ultraclear" ? nearest.ultraClearPrice : nearest.normalPrice;
      tank = round500(base * (litres / nearestVol));
    } else {
      tank = round500(
        glassId === "ultraclear" ? preset!.ultraClearPrice : preset!.normalPrice
      );
    }

    const cab = round500(cabinet.pricePerFt * lengthFt);
    const equipment = round500(litres * style.pricePerLitre);
    const scape = round500(litres * hardscape.pricePerLitre);
    const plants = round500(litres * planting.pricePerLitre);
    const total = tank + cab + equipment + scape + plants;
    return {
      litres,
      tank,
      cab,
      equipment,
      scape,
      plants,
      low: round500(total * 0.9),
      high: round500(total * 1.1),
    };
  }, [dims.lengthIn, dims.widthIn, dims.heightIn, isCustom, preset, glassId, cabinet, style, hardscape, planting]);

  const whatsappMessage = encodeURIComponent(
    `Hi! I designed my aquarium on your website and want an exact quote:\n` +
      `• Size: ${sizeLabel} (${dims.lengthIn}"×${dims.widthIn}"×${dims.heightIn}", ~${estimate.litres}L)\n` +
      `• Glass: ${glass.label}\n` +
      `• Cabinet: ${cabinet.label}\n` +
      `• Style: ${style.label}\n` +
      `• Hardscape: ${hardscape.label}\n` +
      `• Planting: ${planting.label}\n` +
      `• AMC: ${withAmc ? `Yes — ${formatINR(amcPlan.pricePerYear)}/year (visit every ${amcPlan.visitEveryDays} days)` : "No"}\n` +
      `• Site estimate: ${formatINR(estimate.low)} – ${formatINR(estimate.high)}`
  );

  const optionButton = (active: boolean) =>
    cn(
      "text-left rounded-2xl border-2 px-4 py-3 transition-all duration-200 w-full",
      active
        ? "border-cyan-500 bg-cyan-50 shadow-sm"
        : "border-slate-200 bg-white hover:border-slate-300"
    );

  const customField = (key: "l" | "w" | "h", label: string) => (
    <label className="flex flex-col gap-1 text-xs font-bold text-slate-500">
      {label}
      <input
        type="number"
        min={12}
        max={120}
        value={custom[key]}
        onChange={(e) =>
          setCustom((c) => ({
            ...c,
            [key]: Math.max(1, Number(e.target.value) || 1),
          }))
        }
        className="border-2 border-slate-200 rounded-xl px-3 py-2 text-sm font-bold text-[#0D2B3E] w-full focus:border-cyan-500 focus:outline-none bg-white"
      />
    </label>
  );

  return (
    <section id="calculator" className="py-24 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-black tracking-[0.4em] uppercase text-cyan-600 mb-3">
            Build Your Tank
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#0D2B3E] mb-4">
            Aquarium Price Calculator
          </h2>
          <p className="text-slate-400 font-light max-w-xl mx-auto text-sm leading-relaxed">
            Design your planted aquarium in four steps and get an instant price
            estimate — then send your design to us on WhatsApp for an exact
            quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Configuration steps */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Ruler size={16} className="text-cyan-600" />
                <h3 className="text-[#0D2B3E] font-black text-sm tracking-widest uppercase">
                  1 · Tank Size
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {tankSizes.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSizeId(s.id)}
                    className={optionButton(s.id === sizeId)}
                  >
                    <div className="font-bold text-sm text-[#0D2B3E]">
                      {s.label}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {s.lengthIn}&quot; × {s.widthIn}&quot; × {s.heightIn}&quot;
                    </div>
                  </button>
                ))}
                <button
                  onClick={() => setSizeId("custom")}
                  className={optionButton(isCustom)}
                >
                  <div className="font-bold text-sm text-[#0D2B3E]">
                    Custom Size
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Enter your own dimensions
                  </div>
                </button>
              </div>
              {isCustom && (
                <div className="grid grid-cols-3 gap-3 mt-4 p-4 rounded-2xl border-2 border-cyan-200 bg-cyan-50/50">
                  {customField("l", "Length (inches)")}
                  {customField("w", "Width (inches)")}
                  {customField("h", "Height (inches)")}
                </div>
              )}
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <GlassWater size={16} className="text-cyan-600" />
                <h3 className="text-[#0D2B3E] font-black text-sm tracking-widest uppercase">
                  2 · Glass Type
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {glassOptions.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setGlassId(g.id)}
                    className={optionButton(g.id === glassId)}
                  >
                    <div className="font-bold text-sm text-[#0D2B3E]">
                      {g.label}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">{g.note}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Archive size={16} className="text-cyan-600" />
                <h3 className="text-[#0D2B3E] font-black text-sm tracking-widest uppercase">
                  3 · Stand / Cabinet
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {cabinetOptions.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setCabinetId(c.id)}
                    className={optionButton(c.id === cabinetId)}
                  >
                    <div className="font-bold text-sm text-[#0D2B3E]">
                      {c.label}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">{c.note}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf size={16} className="text-cyan-600" />
                <h3 className="text-[#0D2B3E] font-black text-sm tracking-widest uppercase">
                  4 · Setup Style (Light, Filter &amp; CO₂)
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {setupStyles.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setStyleId(s.id)}
                    className={cn(
                      "text-left rounded-2xl border-2 overflow-hidden transition-all duration-200 w-full",
                      s.id === styleId
                        ? "border-cyan-500 bg-cyan-50 shadow-sm"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    )}
                  >
                    <div className="relative h-28 w-full">
                      <Image
                        src={s.image}
                        alt={s.label}
                        fill
                        sizes="(max-width: 640px) 100vw, 240px"
                        className="object-cover"
                      />
                      {s.id === styleId && (
                        <div className="absolute inset-0 ring-2 ring-inset ring-cyan-500/60" />
                      )}
                    </div>
                    <div className="px-4 py-3">
                      <div className="font-bold text-sm text-[#0D2B3E]">
                        {s.label}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {s.note}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Hardscape — wood & stone */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Mountain size={16} className="text-cyan-600" />
                <h3 className="text-[#0D2B3E] font-black text-sm tracking-widest uppercase">
                  5 · Hardscape (Wood &amp; Stone)
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {hardscapeOptions.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => setHardscapeId(h.id)}
                    className={optionButton(h.id === hardscapeId)}
                  >
                    <div className="font-bold text-sm text-[#0D2B3E]">
                      {h.label}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">{h.note}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Planting level */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sprout size={16} className="text-cyan-600" />
                <h3 className="text-[#0D2B3E] font-black text-sm tracking-widest uppercase">
                  6 · Plants
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {plantingLevels.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPlantingId(p.id)}
                    className={optionButton(p.id === plantingId)}
                  >
                    <div className="font-bold text-sm text-[#0D2B3E]">
                      {p.label}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">{p.note}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Optional AMC add-on */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck size={16} className="text-cyan-600" />
                <h3 className="text-[#0D2B3E] font-black text-sm tracking-widest uppercase">
                  7 · Annual Maintenance (Optional)
                </h3>
              </div>
              <button
                onClick={() => setWithAmc((v) => !v)}
                className={cn(
                  "flex items-center gap-4 text-left rounded-2xl border-2 px-5 py-4 transition-all duration-200 w-full",
                  withAmc
                    ? "border-cyan-500 bg-cyan-50 shadow-sm"
                    : "border-slate-200 bg-white hover:border-slate-300"
                )}
              >
                <span
                  className={cn(
                    "w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors",
                    withAmc
                      ? "bg-cyan-500 border-cyan-500 text-white"
                      : "border-slate-300 text-transparent"
                  )}
                >
                  <Check size={14} strokeWidth={3} />
                </span>
                <span className="flex-1">
                  <span className="block font-bold text-sm text-[#0D2B3E]">
                    Add AMC — Annual Maintenance Contract
                  </span>
                  <span className="block text-xs text-slate-400 mt-0.5">
                    One visit every {amcPlan.visitEveryDays} days (
                    {amcPlan.visitsPerYear} visits/year) · priority WhatsApp
                    support · all consumables checked
                  </span>
                </span>
                <span className="font-black text-sm text-[#0D2B3E] shrink-0">
                  {formatINR(amcPlan.pricePerYear)}
                  <span className="text-slate-400 font-bold text-xs">/yr</span>
                </span>
              </button>
            </div>
          </div>

          {/* Live estimate panel */}
          <div className="lg:col-span-2">
            <div className="sticky top-28 bg-[#0D2B3E] text-white rounded-3xl p-6 md:p-8 shadow-xl">
              <p className="text-xs font-black tracking-[0.3em] uppercase text-cyan-400 mb-1">
                Your Aquarium — Live Preview
              </p>
              <p className="text-slate-400 text-xs mb-2">
                {sizeLabel} · {dims.lengthIn}&quot;×{dims.widthIn}&quot;×
                {dims.heightIn}&quot; · ~{estimate.litres} litres ·{" "}
                {glass.label}
              </p>

              <TankPreview
                lengthIn={dims.lengthIn}
                widthIn={dims.widthIn}
                heightIn={dims.heightIn}
                litres={estimate.litres}
                glassId={glassId}
                cabinetId={cabinetId}
                styleId={styleId}
                hardscapeId={hardscapeId}
                plantingId={plantingId}
              />
              <p className="text-center text-[0.6rem] text-slate-500 mb-5">
                Illustration updates live as you customise — every option
                changes the design &amp; price.
              </p>

              <ul className="space-y-3 mb-6 text-sm">
                <li className="flex justify-between gap-4">
                  <span className="text-slate-300">
                    Tank ({glass.label.toLowerCase()})
                  </span>
                  <span className="font-bold">{formatINR(estimate.tank)}</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span className="text-slate-300">{cabinet.label}</span>
                  <span className="font-bold">
                    {estimate.cab === 0 ? "—" : formatINR(estimate.cab)}
                  </span>
                </li>
                <li className="flex justify-between gap-4">
                  <span className="text-slate-300">
                    Equipment — {style.label}
                  </span>
                  <span className="font-bold">
                    {formatINR(estimate.equipment)}
                  </span>
                </li>
                <li className="flex justify-between gap-4">
                  <span className="text-slate-300">
                    Hardscape — {hardscape.label}
                  </span>
                  <span className="font-bold">
                    {estimate.scape === 0 ? "—" : formatINR(estimate.scape)}
                  </span>
                </li>
                <li className="flex justify-between gap-4">
                  <span className="text-slate-300">
                    Plants — {planting.label}
                  </span>
                  <span className="font-bold">{formatINR(estimate.plants)}</span>
                </li>
              </ul>

              <div className="border-t border-white/15 pt-5 mb-7">
                <div className="text-xs text-slate-400 uppercase tracking-widest mb-1">
                  Estimated Total
                </div>
                <div className="text-3xl font-black text-cyan-400">
                  {formatINR(estimate.low)} – {formatINR(estimate.high)}
                </div>
                {withAmc && (
                  <div className="text-xs text-slate-300 mt-2 flex items-center gap-1.5">
                    <ShieldCheck size={13} className="text-cyan-400" />
                    + AMC {formatINR(amcPlan.pricePerYear)}/year (visit every{" "}
                    {amcPlan.visitEveryDays} days)
                  </div>
                )}
              </div>

              <a
                href={`https://wa.me/${shopConfig.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bb5a] text-white font-bold px-6 py-4 rounded-2xl w-full text-sm transition-all hover:scale-[1.02] active:scale-95"
              >
                <MessageCircle size={18} />
                Get Exact Quote on WhatsApp
              </a>
              <p className="text-slate-500 text-[0.65rem] leading-relaxed mt-4">
                Indicative estimate only — final price depends on hardscape,
                plant selection and site conditions. Custom sizes are confirmed
                on WhatsApp before billing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
