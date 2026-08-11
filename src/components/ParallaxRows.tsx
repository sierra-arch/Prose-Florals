"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Two photo rows that drift horizontally in opposite directions as the
 * section scrolls through the viewport — top row right, bottom row left
 * (or vice versa), matching the live site's scroll-linked collage.
 */
export default function ParallaxRows({ row1, row2 }: { row1: string[]; row2: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        // -1 when section is entering from below, +1 as it exits above.
        const center = rect.top + rect.height / 2;
        const p = 1 - center / (vh / 2 + rect.height / 2);
        setProgress(Math.max(-1, Math.min(1, p)));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="absolute inset-0">
      <div
        className="absolute top-0 h-1/2 flex will-change-transform"
        style={{ width: "150%", left: "-25%", transform: `translateX(${progress * -8}vw)` }}
      >
        {row1.map((src, i) => (
          <div key={i} className="relative shrink-0 h-full" style={{ width: `${100 / row1.length}%` }}>
            <Image src={src} alt="" fill sizes="20vw" className="object-cover opacity-70" />
          </div>
        ))}
      </div>
      <div
        className="absolute bottom-0 h-1/2 flex will-change-transform"
        style={{ width: "150%", left: "-25%", transform: `translateX(${progress * 8}vw)` }}
      >
        {row2.map((src, i) => (
          <div key={i} className="relative shrink-0 h-full" style={{ width: `${100 / row2.length}%` }}>
            <Image src={src} alt="" fill sizes="20vw" className="object-cover opacity-70" />
          </div>
        ))}
      </div>
    </div>
  );
}
