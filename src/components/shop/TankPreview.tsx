"use client";

import { useId } from "react";
import { motion } from "framer-motion";

interface TankPreviewProps {
  lengthIn: number;
  widthIn: number;
  heightIn: number;
  litres: number;
  glassId: string;
  cabinetId: string;
  styleId: string;
  hardscapeId: string;
  plantingId: string;
}

// Deterministic PRNG — the same scape must render on server and client
function mulberry32(seed: number) {
  let s = seed;
  return () => {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const clamp = (n: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, n));

export default function TankPreview({
  lengthIn,
  widthIn,
  heightIn,
  litres,
  glassId,
  cabinetId,
  styleId,
  hardscapeId,
  plantingId,
}: TankPreviewProps) {
  const uid = useId().replace(/[:]/g, "");
  const clipId = `tankclip-${uid}`;
  const waterId = `water-${uid}`;
  const woodId = `wood-${uid}`;
  const coneId = `cone-${uid}`;

  // ── Geometry (front view + slight depth) ──────────────────────────────────
  const L = clamp(lengthIn, 10, 130);
  const W = clamp(widthIn, 6, 60);
  const H = clamp(heightIn, 8, 60);

  const k = Math.min(240 / L, 112 / H, 3.6);
  const tankW = L * k;
  const tankH = H * k;
  const dx = Math.min(W * k * 0.42, 58);
  const dy = dx * 0.55;

  const baseY = 192;
  const fl = (360 - (tankW + dx)) / 2; // front-left x
  const ft = baseY - tankH; // front-top y

  const glass =
    glassId === "ultraclear"
      ? {
          edge: "#dff4fc",
          top: "rgba(205,235,248,0.15)",
          side: "rgba(205,235,248,0.28)",
        }
      : {
          edge: "#9ccfb4",
          top: "rgba(140,205,170,0.16)",
          side: "rgba(140,205,170,0.32)",
        };

  const soilH = Math.max(8, tankH * 0.16);
  const soilTop = baseY - soilH;
  const waterTop = ft + tankH * 0.1;

  // ── Procedural aquascape ──────────────────────────────────────────────────
  const styleIdx = styleId === "hightech" ? 2 : styleId === "nature" ? 1 : 0;
  const plantIdx = plantingId === "dense" ? 2 : plantingId === "medium" ? 1 : 0;
  const hasWood = hardscapeId === "wood" || hardscapeId === "mix";
  const hasRock = hardscapeId === "rock" || hardscapeId === "mix";
  const rand = mulberry32(
    Math.round(
      L * 7 + W * 3 + H * 5 + styleIdx * 101 + plantIdx * 211 + (hasWood ? 401 : 0) + (hasRock ? 631 : 0)
    )
  );

  // Plant density comes from the planting level the customer picks
  const plantDivisor = plantIdx === 2 ? 4.5 : plantIdx === 1 ? 7 : 10;
  const plantCount = clamp(Math.round(L / plantDivisor), 3, 16);
  const maxF = plantIdx === 2 ? 0.78 : plantIdx === 1 ? 0.58 : 0.42;
  const greens = ["#46b86a", "#2e9d54", "#63cc82"];
  const reds = ["#e05252", "#c64545"];

  const plants: { d: string; color: string; w: number }[] = [];
  for (let i = 0; i < plantCount; i++) {
    const px = fl + 10 + ((tankW - 20) * (i + 0.5)) / plantCount + (rand() - 0.5) * 8;
    const ph = (soilTop - waterTop) * maxF * (0.45 + 0.55 * rand());
    const blades = 3 + Math.floor(rand() * 3);
    // Red stems only thrive under high light
    const isRed = styleIdx === 2 && plantIdx >= 1 && i % 3 === 2;
    const palette = isRed ? reds : greens;
    const color = palette[Math.floor(rand() * palette.length)];
    for (let b = 0; b < blades; b++) {
      const lean = (b - (blades - 1) / 2) * (4 + rand() * 3);
      const bh = ph * (0.7 + 0.3 * rand());
      plants.push({
        d: `M ${px} ${soilTop + 2} Q ${px + lean * 0.4} ${soilTop - bh * 0.55} ${px + lean} ${soilTop - bh}`,
        color,
        w: 1.6 + rand() * 1.2,
      });
    }
  }

  // Carpet tufts along the soil for dense planting
  const carpet: string[] = [];
  if (plantIdx === 2) {
    const tufts = Math.floor(tankW / 11);
    for (let t = 0; t < tufts; t++) {
      const tx = fl + 6 + t * 11 + rand() * 4;
      const th = 3.5 + rand() * 3;
      carpet.push(
        `M ${tx} ${soilTop + 1} Q ${tx + 2.5} ${soilTop - th} ${tx + 5} ${soilTop + 1}`
      );
    }
  }

  // Rocks & driftwood follow the hardscape the customer picks
  const rocks: string[] = [];
  if (hasRock) {
    const rockCount = hardscapeId === "mix" ? 2 : 3;
    for (let j = 0; j < rockCount; j++) {
      const rx = fl + tankW * (0.18 + 0.6 * rand());
      const rw = tankW * (0.1 + 0.08 * rand());
      const rh = soilH + 6 + rand() * tankH * 0.14;
      rocks.push(
        `M ${rx} ${baseY - 2} L ${rx + rw * 0.3} ${soilTop - rh * 0.55} L ${rx + rw * 0.55} ${soilTop - rh * 0.3} L ${rx + rw * 0.78} ${soilTop - rh * 0.6} L ${rx + rw} ${baseY - 2} Z`
      );
    }
  }

  const wood = hasWood
    ? `M ${fl + tankW * 0.3} ${soilTop + 2} C ${fl + tankW * 0.42} ${soilTop - tankH * 0.32}, ${fl + tankW * 0.55} ${soilTop - tankH * 0.36}, ${fl + tankW * 0.68} ${soilTop - tankH * 0.5}`
    : null;
  const woodBranch = hasWood
    ? `M ${fl + tankW * 0.45} ${soilTop - tankH * 0.18} C ${fl + tankW * 0.38} ${soilTop - tankH * 0.3}, ${fl + tankW * 0.33} ${soilTop - tankH * 0.34}, ${fl + tankW * 0.26} ${soilTop - tankH * 0.42}`
    : null;

  // CO₂ bubbles for high-tech
  const bubbles: { cx: number; cy: number; r: number }[] = [];
  if (styleIdx === 2) {
    for (let b = 0; b < 5; b++) {
      bubbles.push({
        cx: fl + tankW * 0.85 + (rand() - 0.5) * 5,
        cy: waterTop + 8 + ((soilTop - waterTop - 16) * (b + rand() * 0.6)) / 5,
        r: 1.3 + rand() * 1.2,
      });
    }
  }

  // A few fish for life
  const fish: { cx: number; cy: number; flip: boolean }[] = [];
  const fishCount = clamp(Math.round(L / 18), 2, 4);
  for (let f = 0; f < fishCount; f++) {
    fish.push({
      cx: fl + 16 + rand() * (tankW - 32),
      cy: waterTop + 12 + rand() * (soilTop - waterTop - 30),
      flip: rand() > 0.5,
    });
  }

  // ── Cabinet geometry ──────────────────────────────────────────────────────
  const cabH = cabinetId === "cabinet" ? 60 : cabinetId === "stand" ? 56 : 50;
  const midX = fl + tankW / 2;

  return (
    <motion.svg
      viewBox="0 0 360 290"
      className="w-full h-auto select-none"
      role="img"
      aria-label={`Preview of a ${lengthIn} by ${widthIn} by ${heightIn} inch aquarium`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <defs>
        <linearGradient id={waterId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2293bb" />
          <stop offset="100%" stopColor="#0c4a6e" />
        </linearGradient>
        <linearGradient id={woodId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8a5a33" />
          <stop offset="100%" stopColor="#5f3d22" />
        </linearGradient>
        <linearGradient id={coneId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <clipPath id={clipId}>
          <rect x={fl + 2} y={ft + 2} width={tankW - 4} height={tankH - 4} rx={2} />
        </clipPath>
      </defs>

      {/* Floor shadow */}
      <ellipse
        cx={fl + (tankW + dx) / 2}
        cy={baseY + cabH + 12}
        rx={(tankW + dx) / 2 + 8}
        ry={6}
        fill="#000"
        opacity={0.3}
      />

      {/* ── Stand / cabinet ── */}
      {cabinetId === "none" && (
        <g>
          <rect x={fl - 10} y={baseY} width={tankW + 20} height={7} rx={2} fill="#7d8b99" />
          <rect x={fl - 6} y={baseY + 7} width={5} height={cabH - 12} fill="#64748b" />
          <rect x={fl + tankW + 1} y={baseY + 7} width={5} height={cabH - 12} fill="#64748b" />
        </g>
      )}
      {cabinetId === "stand" && (
        <g>
          <rect x={fl - 2} y={baseY} width={tankW + 4} height={6} rx={1} fill="#3f4c5c" />
          <rect x={fl} y={baseY + 6} width={5} height={cabH - 10} fill="#3f4c5c" />
          <rect x={fl + tankW - 5} y={baseY + 6} width={5} height={cabH - 10} fill="#3f4c5c" />
          <rect x={fl} y={baseY + 30} width={tankW} height={4} fill="#3f4c5c" opacity={0.9} />
        </g>
      )}
      {cabinetId === "cabinet" && (
        <g>
          <rect x={fl - 12} y={baseY} width={tankW + 24} height={6} rx={2} fill="#4a2f1a" />
          <rect
            x={fl - 8}
            y={baseY + 6}
            width={tankW + 16}
            height={cabH - 8}
            rx={3}
            fill={`url(#${woodId})`}
            stroke="#3c2614"
            strokeWidth={1}
          />
          <line
            x1={midX}
            y1={baseY + 12}
            x2={midX}
            y2={baseY + cabH - 8}
            stroke="#3c2614"
            strokeWidth={1.5}
            opacity={0.6}
          />
          <circle cx={midX - 9} cy={baseY + 6 + (cabH - 8) / 2} r={2.4} fill="#e2c391" />
          <circle cx={midX + 9} cy={baseY + 6 + (cabH - 8) / 2} r={2.4} fill="#e2c391" />
        </g>
      )}

      {/* ── Light fixture (CO₂ / high-light styles) ── */}
      {styleIdx >= 1 && (
        <g>
          <rect
            x={fl + tankW * 0.15}
            y={ft - dy - 13}
            width={tankW * 0.7}
            height={4}
            rx={2}
            fill="#94a3b8"
          />
          <polygon
            points={`${fl + tankW * 0.18},${ft - dy - 9} ${fl + tankW * 0.82},${ft - dy - 9} ${fl + tankW * 0.92},${soilTop} ${fl + tankW * 0.08},${soilTop}`}
            fill={`url(#${coneId})`}
            opacity={styleIdx === 2 ? 0.16 : 0.09}
          />
        </g>
      )}

      {/* ── Tank: depth faces ── */}
      <polygon
        points={`${fl},${ft} ${fl + tankW},${ft} ${fl + tankW + dx},${ft - dy} ${fl + dx},${ft - dy}`}
        fill={glass.top}
        stroke={glass.edge}
        strokeWidth={1.2}
      />
      <polygon
        points={`${fl + tankW},${ft} ${fl + tankW + dx},${ft - dy} ${fl + tankW + dx},${baseY - dy} ${fl + tankW},${baseY}`}
        fill={glass.side}
        stroke={glass.edge}
        strokeWidth={1.2}
      />

      {/* ── Inside the tank (clipped) ── */}
      <g clipPath={`url(#${clipId})`}>
        {/* water */}
        <rect
          x={fl + 2}
          y={waterTop}
          width={tankW - 4}
          height={baseY - waterTop - 2}
          fill={`url(#${waterId})`}
          opacity={0.9}
        />
        {/* soil */}
        <rect x={fl + 2} y={soilTop} width={tankW - 4} height={soilH - 2} fill="#4e3826" />
        <rect x={fl + 2} y={soilTop} width={tankW - 4} height={3} fill="#6b4d31" />

        {/* hardscape + plants (fade when style changes) */}
        <motion.g
          key={`${styleId}-${hardscapeId}-${plantingId}-${plantCount}-${Math.round(tankW)}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
        >
          {rocks.map((d, i) => (
            <path key={`r${i}`} d={d} fill="#6b7280" stroke="#4b5563" strokeWidth={1} />
          ))}
          {wood && (
            <path d={wood} fill="none" stroke="#8b5e3c" strokeWidth={4} strokeLinecap="round" />
          )}
          {woodBranch && (
            <path d={woodBranch} fill="none" stroke="#7a4f31" strokeWidth={3} strokeLinecap="round" />
          )}
          {carpet.map((d, i) => (
            <path key={`c${i}`} d={d} fill="none" stroke="#3fae62" strokeWidth={1.6} strokeLinecap="round" />
          ))}
          {plants.map((p, i) => (
            <path
              key={`p${i}`}
              d={p.d}
              fill="none"
              stroke={p.color}
              strokeWidth={p.w}
              strokeLinecap="round"
            />
          ))}
          {bubbles.map((b, i) => (
            <circle key={`b${i}`} cx={b.cx} cy={b.cy} r={b.r} fill="#bfeffc" opacity={0.8} />
          ))}
          {fish.map((f, i) => (
            <g key={`f${i}`} transform={f.flip ? `translate(${2 * f.cx},0) scale(-1,1)` : undefined}>
              <ellipse cx={f.cx} cy={f.cy} rx={5} ry={2.3} fill="#e8a23d" />
              <polygon
                points={`${f.cx - 4.5},${f.cy} ${f.cx - 8},${f.cy - 2.5} ${f.cx - 8},${f.cy + 2.5}`}
                fill="#e8a23d"
              />
            </g>
          ))}
        </motion.g>

        {/* water surface + glass sheen */}
        <line
          x1={fl + 2}
          y1={waterTop}
          x2={fl + tankW - 2}
          y2={waterTop}
          stroke="#9adef0"
          strokeWidth={1.5}
          opacity={0.6}
        />
        <polygon
          points={`${fl + 8},${ft + 6} ${fl + 24},${ft + 6} ${fl + 14},${baseY - 8} ${fl + 6},${baseY - 8}`}
          fill="#fff"
          opacity={0.05}
        />
      </g>

      {/* ── Front glass frame ── */}
      <rect
        x={fl}
        y={ft}
        width={tankW}
        height={tankH}
        rx={2}
        fill="none"
        stroke={glass.edge}
        strokeWidth={2}
      />

      {/* ── Dimension labels ── */}
      <g stroke="#558399" strokeWidth={1}>
        <line x1={fl} y1={baseY + cabH + 24} x2={fl + tankW} y2={baseY + cabH + 24} />
        <line x1={fl} y1={baseY + cabH + 20} x2={fl} y2={baseY + cabH + 28} />
        <line x1={fl + tankW} y1={baseY + cabH + 20} x2={fl + tankW} y2={baseY + cabH + 28} />
        <line x1={fl + tankW + dx + 10} y1={ft} x2={fl + tankW + dx + 10} y2={baseY} />
        <line x1={fl + tankW + dx + 6} y1={ft} x2={fl + tankW + dx + 14} y2={ft} />
        <line x1={fl + tankW + dx + 6} y1={baseY} x2={fl + tankW + dx + 14} y2={baseY} />
      </g>
      <text
        x={fl + tankW / 2}
        y={baseY + cabH + 20}
        textAnchor="middle"
        fontSize={10}
        fontWeight={700}
        fill="#9fc3d4"
      >
        {lengthIn}&quot;
      </text>
      <text
        x={fl + tankW + dx + 16}
        y={ft + tankH / 2 + 3}
        fontSize={10}
        fontWeight={700}
        fill="#9fc3d4"
      >
        {heightIn}&quot;
      </text>
      <text
        x={fl + tankW + dx + 2}
        y={ft - dy - 4}
        fontSize={9}
        fontWeight={700}
        fill="#7da2b8"
        textAnchor="end"
      >
        W {widthIn}&quot;
      </text>

      {/* Litres badge */}
      <rect x={10} y={12} width={66} height={20} rx={10} fill="rgba(34,211,238,0.12)" stroke="rgba(34,211,238,0.4)" />
      <text x={43} y={26} textAnchor="middle" fontSize={11} fontWeight={800} fill="#7fe7f7">
        ~{litres} L
      </text>
    </motion.svg>
  );
}
