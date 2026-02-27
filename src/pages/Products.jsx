import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: "metallic",
    name: "Metallic Foils",
    desc: "High gloss gold/silver + colors for premium branding.",
    finish: "High Gloss",
    temp: "95-120C",
    use: "Packaging, labels, cosmetics",
  },
  {
    id: "holographic",
    name: "Holographic Foils",
    desc: "Patterned and rainbow effects for standout packaging.",
    finish: "Premium Effects",
    temp: "105-130C",
    use: "Luxury cartons, sleeves, promo packs",
  },
  {
    id: "matte",
    name: "Matte / Satin",
    desc: "Soft-touch style effect with understated luxury.",
    finish: "Soft Look",
    temp: "90-115C",
    use: "Premium branding, minimal packaging",
  },
  {
    id: "pigment",
    name: "Pigment Foils",
    desc: "Solid color foils for bold identity and contrast.",
    finish: "Solid Color",
    temp: "95-125C",
    use: "Labels, barcodes, dark substrates",
  },
  {
    id: "specialty",
    name: "Specialty Effects",
    desc: "Textures, diffraction patterns, custom looks.",
    finish: "Premium Effects",
    temp: "100-135C",
    use: "Gift packs, event prints, custom work",
  },
];

const finishFilters = [
  "All",
  "High Gloss",
  "Premium Effects",
  "Soft Look",
  "Solid Color",
];

export default function Products() {
  const [query, setQuery] = useState("");
  const [activeFinish, setActiveFinish] = useState("All");
  const [compareIds, setCompareIds] = useState([]);

  const filteredProducts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesFinish =
        activeFinish === "All" ? true : p.finish === activeFinish;
      const matchesQuery = q
        ? `${p.name} ${p.desc} ${p.use}`.toLowerCase().includes(q)
        : true;
      return matchesFinish && matchesQuery;
    });
  }, [query, activeFinish]);

  const comparedProducts = products.filter((p) => compareIds.includes(p.id));

  const toggleCompare = (id) => {
    setCompareIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((x) => x !== id);
      }
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, id];
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold">Products</h1>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Explore our foil families. For best results, selection depends on
            substrate, artwork, die, press temperature, pressure, and dwell
            time.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center rounded-xl bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:bg-slate-800"
        >
          Request a Quote
        </Link>
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <div className="grid gap-4 md:grid-cols-[2fr_1fr]">
          <div>
            <label className="text-sm font-medium">Search foils</label>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by finish, use case, or product name"
              className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>
          <div>
            <div className="text-sm font-medium">Finish filter</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {finishFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFinish(filter)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium border transition ${
                    activeFinish === filter
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-4 text-xs text-slate-500">
          Compare up to 3 products to quickly shortlist options.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((p) => {
          const selected = compareIds.includes(p.id);
          return (
            <div
              key={p.id}
              className="rounded-2xl border border-slate-200 p-6 bg-white hover:shadow-sm transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="font-semibold">{p.name}</div>
                <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-700">
                  {p.finish}
                </span>
              </div>
              <div className="mt-2 text-sm text-slate-600">{p.desc}</div>

              <div className="mt-4 space-y-1 text-xs text-slate-500">
                <div>
                  <span className="font-medium text-slate-600">Typical use:</span>{" "}
                  {p.use}
                </div>
                <div>
                  <span className="font-medium text-slate-600">
                    Temp range:
                  </span>{" "}
                  {p.temp}
                </div>
              </div>

              <button
                onClick={() => toggleCompare(p.id)}
                disabled={!selected && compareIds.length >= 3}
                className={`mt-4 w-full rounded-lg border px-3 py-2 text-xs font-medium transition ${
                  selected
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-300 text-slate-700 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed"
                }`}
              >
                {selected ? "Added to compare" : "Add to compare"}
              </button>
            </div>
          );
        })}
      </div>

      {!filteredProducts.length && (
        <div className="mt-8 rounded-xl border border-dashed border-slate-300 p-6 text-sm text-slate-600">
          No products matched your search. Try a broader query or switch finish
          filters.
        </div>
      )}

      {comparedProducts.length > 0 && (
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <h2 className="text-xl font-semibold">Comparison</h2>
            <button
              onClick={() => setCompareIds([])}
              className="text-xs font-medium text-slate-600 hover:text-slate-900"
            >
              Clear all
            </button>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {comparedProducts.map((p) => (
              <div
                key={p.id}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="font-semibold">{p.name}</div>
                <div className="mt-2 text-xs text-slate-600">
                  <div>
                    <span className="font-medium">Finish:</span> {p.finish}
                  </div>
                  <div>
                    <span className="font-medium">Temp:</span> {p.temp}
                  </div>
                  <div>
                    <span className="font-medium">Best for:</span> {p.use}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
