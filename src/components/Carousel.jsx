import React, { useEffect, useMemo, useRef, useState } from "react";

export default function Carousel({
  images = [],
  intervalMs = 3000,
  className = "",
  aspectClass = "aspect-[16/9]",
  frameClassName = "rounded-2xl border border-slate-200",
  imageClassName = "object-cover",
  fillBackground = false,
}) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const go = (next) => {
    if (!safeImages.length) return;
    setIndex((prev) => {
      const n = typeof next === "number" ? next : prev + 1;
      return (n + safeImages.length) % safeImages.length;
    });
  };

  useEffect(() => {
    if (!safeImages.length) return;
    timerRef.current && clearInterval(timerRef.current);
    timerRef.current = setInterval(() => go(index + 1), intervalMs);
    return () => timerRef.current && clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, intervalMs, safeImages.length]);

  if (!safeImages.length) {
    return (
      <div
        className={`w-full bg-slate-50 ${aspectClass} ${frameClassName} ${className}`}
      />
    );
  }

  return (
    <div className={`relative w-full ${className}`}>
      <div className={`overflow-hidden bg-slate-100 ${aspectClass} ${frameClassName}`}>
        <div
          className="h-full w-full flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {safeImages.map((src, i) => (
            <div key={i} className="min-w-full h-full relative">
              {fillBackground && (
                <img
                  src={src}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full scale-110 object-cover blur-xl opacity-70"
                  loading="lazy"
                />
              )}
              <img
                src={src}
                alt={`slide-${i}`}
                className={`absolute inset-0 h-full w-full ${imageClassName}`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={() => go(index - 1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white px-3 py-2 text-slate-900 shadow"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={() => go(index + 1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white px-3 py-2 text-slate-900 shadow"
        aria-label="Next"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {safeImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
