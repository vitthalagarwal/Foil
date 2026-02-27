import React from "react";

const products = [
  { name: "Metallic Foils", desc: "High gloss gold/silver + colors for premium branding." },
  { name: "Holographic Foils", desc: "Patterned and rainbow effects for standout packaging." },
  { name: "Matte / Satin", desc: "Soft-touch style effect with understated luxury." },
  { name: "Pigment Foils", desc: "Solid color foils for bold identity and contrast." },
  { name: "Specialty Effects", desc: "Textures, diffraction patterns, custom looks." },
];

export default function Products() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold">Products</h1>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Explore our foil families. For best results, selection depends on substrate,
            artwork, die, press temperature, pressure, and dwell time.
          </p>
        </div>
        <a
          href="/contact"
          className="inline-flex items-center rounded-xl bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:bg-slate-800"
        >
          Request a Quote
        </a>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <div key={p.name} className="rounded-2xl border border-slate-200 p-6 bg-white hover:shadow-sm transition">
            <div className="font-semibold">{p.name}</div>
            <div className="mt-2 text-sm text-slate-600">{p.desc}</div>

            <div className="mt-4 text-xs text-slate-500">
              Typical use: packaging, labels, cosmetics, stationery.
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}