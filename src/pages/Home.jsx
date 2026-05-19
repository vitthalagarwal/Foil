import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import boxfoil from "../assets/boxfoil-landscape.jpg";
import colorfoils from "../assets/colorfoils-landscape.jpg";
import goldfoil from "../assets/goldfoil-landscape.jpg";
import manyfoil from "../assets/manyfoil-landscape.jpg";

// Replace these with your real product images (put files in /public/images/...)
// const heroSlides = [
//   "https://image.made-in-china.com/2f0j00CSkVIHbaHFzQ/Wenzhou-Leading-Manufactuer-of-Hot-Stamping-Foil.jpg",
//   "https://5.imimg.com/data5/SELLER/Default/2024/2/389933132/XS/WI/YH/105356840/stamping-foils.jpg",
//   "https://m.media-amazon.com/images/I/51h-kzcTfsL._AC_UF894,1000_QL80_.jpg",
// ];

const topCarouselSlides = [
  goldfoil,
  manyfoil,
  colorfoils,
  boxfoil,
];

const featureBanners = [
  {
    title: "Hot Foil",
    desc: "Sharp transfer, rich metallic shine, and consistent results for packaging and print.",
    image: "https://www.foilkraft.in/catimg/c1.webp",
    dark: true,
  },
  {
    title: "Cold Foil",
    desc: "High-speed foil application for labels, cartons, and flexible print workflows.",
    image: "https://www.foilkraft.in/catimg/c6.webp",
    dark: false,
  },
  {
    title: "Digital Foil",
    desc: "Premium digital finishes for short-run packaging, books, certificates, and brand pieces.",
    image: "https://www.foilkraft.in/assets/img/banner/banner1.png",
    dark: true,
  },
  {
    title: "Tag Foil",
    desc: "Sharp metallic detail for tags, labels, trims, and custom product identifiers.",
    image: "https://www.foilkraft.in/assets/img/banner/banner2.png",
    dark: false,
  },
];

const homeProductGroups = [
  {
    title: "Garment Foil",
    items: [
      {
        name: "Garment Foil",
        image: "https://www.foilkraft.in/medicine/g1.webp",
      },
      {
        name: "Textile Foil",
        image: "https://www.foilkraft.in/medicine/g2.webp",
      },
      {
        name: "Printed Textile Foil",
        image: "https://www.foilkraft.in/medicine/g3.webp",
      },
    ],
  },
  {
    title: "Wood Grain Foil",
    items: [
      {
        name: "Wood Grain Foil",
        image: "https://www.foilkraft.in/medicine/w1.webp",
      },
      {
        name: "Woodgrain Foil Designs",
        image: "https://www.foilkraft.in/medicine/w2.webp",
      },
      {
        name: "Wood Texture Hot Stamping Foil",
        image: "https://www.foilkraft.in/medicine/w3.webp",
      },
    ],
  },
  {
    title: "Rexine Foil",
    items: [
      {
        name: "Rexine Foil",
        image: "https://www.foilkraft.in/medicine/r1.webp",
      },
      {
        name: "PU Rexine Foil",
        image: "https://www.foilkraft.in/medicine/r2.webp",
      },
      {
        name: "Plain Golden Foil Rexine",
        image: "https://www.foilkraft.in/medicine/r3.webp",
      },
    ],
  },
  {
    title: "Digital Foil",
    items: [
      {
        name: "Digital Stamping Foil",
        image: "https://www.foilkraft.in/medicine/d1.webp",
      },
      {
        name: "Digital Foil - Packaging, Magazines, Boxes",
        image: "https://www.foilkraft.in/medicine/d2.webp",
      },
      {
        name: "Digital Foil - Certificates, Crafting",
        image: "https://www.foilkraft.in/medicine/d3.webp",
      },
    ],
  },
];

// const showcaseSlides = [
//   "https://image.made-in-china.com/202f0j00SKqVDLoEhnpQ/Wenzhou-Leading-Manufactuer-of-Hot-Stamping-Foil.webp",
//   "https://image.made-in-china.com/202f0j00SKqVDLoEhnpQ/Wenzhou-Leading-Manufactuer-of-Hot-Stamping-Foil.webp",
//   "https://image.made-in-china.com/202f0j00SKqVDLoEhnpQ/Wenzhou-Leading-Manufactuer-of-Hot-Stamping-Foil.webp",
// ];

export default function Home() {
  return (
    <div>
      {/* Top carousel */}
      <section className="bg-white">
        <Carousel
          images={topCarouselSlides}
          intervalMs={3200}
          aspectClass="h-[280px] sm:h-[360px] md:h-[calc(100vh-5rem)] md:min-h-[420px]"
          frameClassName="rounded-none border-0"
          imageClassName="object-cover"
          className="shadow-sm"
        />
      </section>

      {/* Quick CTA */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col items-center gap-5 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h1 className="text-2xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Make packaging look luxury in one press.
            </h1>
            <p className="mt-3 text-slate-600 leading-relaxed max-w-2xl">
              Metallic, holographic, matte, pigment and specialty foils
              engineered for sharp transfer, high gloss, and consistent
              performance across substrates.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
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
        </div>
      </section>

      {/* Product showcase */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="grid gap-6 lg:grid-cols-2">
            {featureBanners.map((banner) => (
              <Link
                key={banner.title}
                to="/products"
                className={`group relative block h-[260px] overflow-hidden rounded-sm md:h-[300px] ${
                  banner.dark
                    ? "bg-black text-white"
                    : "bg-zinc-200 text-slate-950"
                }`}
              >
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 ${
                    banner.dark
                      ? "bg-black/20"
                      : "bg-linear-to-r from-zinc-100/95 via-zinc-100/70 to-transparent"
                  }`}
                />
                <div className="relative z-10 flex h-full max-w-md flex-col justify-center px-6 py-8 md:px-8">
                  <h2 className="text-2xl font-semibold text-blue-900">
                    {banner.title}
                  </h2>
                  <p
                    className={`mt-4 text-base font-medium leading-7 ${
                      banner.dark ? "text-white" : "text-slate-950"
                    }`}
                  >
                    {banner.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {homeProductGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-2xl font-semibold text-slate-950">
                  {group.title}
                </h3>
                <div className="mt-5 h-1.5 w-24 bg-yellow-500" />

                <div className="mt-8 divide-y divide-slate-200">
                  {group.items.map((item) => (
                    <Link
                      key={item.name}
                      to="/products"
                      className="group flex min-h-28 items-center gap-5 py-5"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-24 w-24 shrink-0 object-cover"
                        loading="lazy"
                      />
                      <div className="text-lg font-semibold leading-snug text-slate-950 transition group-hover:text-blue-900">
                        {item.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero */}
      {/* <section className="bg-linear-to-b from-slate-50 to-white">
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
      </section> */}

      {/* Section */}
      {/* <section className="max-w-6xl mx-auto px-4 py-12">
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
      </section> */}

      {/* Carousel before footer */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        {/* <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 md:p-8">
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
        </div> */}
      </section>
    </div>
  );
}
