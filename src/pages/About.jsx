import React from "react";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold">About</h1>
      <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
        We supply high-performance hot stamping foils designed for clean transfer, rich shine,
        and consistent performance across paper, board, and film substrates. Our portfolio covers
        metallic, holographic, matte, pigment, and specialty effects for premium packaging.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          { t: "Quality", d: "Reliable batches, stable transfer and sharp definition." },
          { t: "Support", d: "Selection guidance based on substrate, die and press." },
          { t: "Range", d: "Multiple effects, shades and patterns for brand impact." },
        ].map((x) => (
          <div key={x.t} className="rounded-2xl border border-slate-200 p-6 bg-white">
            <div className="font-semibold">{x.t}</div>
            <div className="mt-2 text-sm text-slate-600">{x.d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}