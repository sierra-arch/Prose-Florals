"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

// Full-bleed image slider used at the top of the Portfolio page.
// Cross-fades between slides, auto-advances, with prev/next arrows.
export default function HeroCarousel({ images }: { images: string[] }) {
  const [i, setI] = useState(0);
  const n = images.length;

  const go = useCallback((next: number) => setI((next + n) % n), [n]);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % n), 5200);
    return () => clearInterval(t);
  }, [n]);

  return (
    <section className="relative h-[78vh] md:h-[92vh] w-full overflow-hidden bg-[#33302A]">
      {images.map((src, idx) => (
        <div
          key={idx}
          className="absolute inset-0 transition-opacity duration-[1100ms] ease-in-out"
          style={{ opacity: idx === i ? 1 : 0 }}
          aria-hidden={idx !== i}
        >
          <Image
            src={src}
            alt="Prose Florals wedding portfolio"
            fill
            priority={idx === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* Soft vignette + centered wordmark */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/25" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="font-display text-white/85 tracking-[0.14em] text-[clamp(34px,7vw,110px)] drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)]">
          PROSE FLORALS
        </h1>
      </div>

      {/* Arrows */}
      <button
        onClick={() => go(i - 1)}
        aria-label="Previous"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/90 hover:text-white transition-colors"
      >
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M15 5l-7 7 7 7" /></svg>
      </button>
      <button
        onClick={() => go(i + 1)}
        aria-label="Next"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/90 hover:text-white transition-colors"
      >
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => go(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${idx === i ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"}`}
          />
        ))}
      </div>
    </section>
  );
}
