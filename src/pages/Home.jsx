import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";

// Replace these with your real product images (put files in /public/images/...)
const heroSlides = [
  "https://image.made-in-china.com/2f0j00CSkVIHbaHFzQ/Wenzhou-Leading-Manufactuer-of-Hot-Stamping-Foil.jpg",
  "https://5.imimg.com/data5/SELLER/Default/2024/2/389933132/XS/WI/YH/105356840/stamping-foils.jpg",
  "https://m.media-amazon.com/images/I/51h-kzcTfsL._AC_UF894,1000_QL80_.jpg",
];

const showcaseSlides = [
  "https://image.made-in-china.com/202f0j00SKqVDLoEhnpQ/Wenzhou-Leading-Manufactuer-of-Hot-Stamping-Foil.webp",
  "https://image.made-in-china.com/202f0j00SKqVDLoEhnpQ/Wenzhou-Leading-Manufactuer-of-Hot-Stamping-Foil.webp",
  "https://image.made-in-china.com/202f0j00SKqVDLoEhnpQ/Wenzhou-Leading-Manufactuer-of-Hot-Stamping-Foil.webp",
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-3 py-1 text-xs">
              ✨ Premium Hot Stamping Foils
            </div>
            <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
              Make packaging look <span className="text-slate-900">luxury</span>{" "}
              in one press.
            </h1>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Metallic, holographic, matte, pigment and specialty foils
              engineered for sharp transfer, high gloss, and consistent
              performance across substrates.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                to="/products"
                className="inline-flex justify-center items-center rounded-xl bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:bg-slate-800"
              >
                Explore Products
              </Link>
              <Link
                to="/contact"
                className="inline-flex justify-center items-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium hover:bg-slate-50"
              >
                Get a Quote
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 p-4">
                <div className="text-sm font-semibold">Fast Transfer</div>
                <div className="text-xs text-slate-600 mt-1">
                  Crisp edges, uniform coverage
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <div className="text-sm font-semibold">High Gloss</div>
                <div className="text-xs text-slate-600 mt-1">
                  Premium metallic & holographic
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <div className="text-sm font-semibold">Versatile</div>
                <div className="text-xs text-slate-600 mt-1">
                  Paper, board, films, labels
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <div className="text-sm font-semibold">Consistent</div>
                <div className="text-xs text-slate-600 mt-1">
                  Stable run performance
                </div>
              </div>
            </div>
          </div>

          <div>
            <Carousel images={heroSlides} intervalMs={3500} />
            <p className="mt-3 text-xs text-slate-500">
              Tip: place your images in{" "}
              <span className="font-medium">public/images/</span> and update the
              paths.
            </p>
          </div>
        </div>
      </section>

      {/* Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Popular finishes
            </h2>
            <p className="text-slate-600 mt-2">
              Choose a foil family that matches your brand’s texture and shine.
            </p>
          </div>
          <Link
            to="/products"
            className="text-sm font-medium text-slate-900 hover:underline"
          >
            View all →
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Metallic Foils",
              desc: "Gold, silver, rose gold, colors",
            },
            {
              title: "Holographic",
              desc: "Rainbow, patterns, premium sparkle",
            },
            {
              title: "Matte & Satin",
              desc: "Soft luxury feel, modern branding",
            },
            { title: "Pigment / Color", desc: "Solid shades, bold identity" },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-slate-200 p-5 hover:shadow-sm transition bg-white"
            >
              <div className="font-semibold">{c.title}</div>
              <div className="text-sm text-slate-600 mt-2">{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Carousel before footer */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 md:p-8">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Gallery</h3>
              <p className="text-slate-600 mt-2 text-sm">
                A quick look at finishes across packaging & print.
              </p>
            </div>
            <Link
              to="/contact"
              className="text-sm font-medium text-slate-900 hover:underline"
            >
              Request samples →
            </Link>
          </div>

          <div className="mt-6">
            <Carousel
              images={showcaseSlides}
              intervalMs={2800}
              aspectClass="aspect-[21/9]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
