"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type PhotoPair = { main: string; detail: string; alt: string };

// Auto-rotating couple photo + floral-detail inset, cross-fading through a
// set of real weddings — matches the live site's "Flowers with Intention"
// rotator (no manual controls there, so none here either).
export default function RotatingPair({ pairs, interval = 4500 }: { pairs: PhotoPair[]; interval?: number }) {
  const [i, setI] = useState(0);
  const n = pairs.length;

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % n), interval);
    return () => clearInterval(t);
  }, [n, interval]);

  return (
    <div className="relative">
      <div className="relative aspect-[4/5] w-full max-w-[420px]">
        {pairs.map((pair, idx) => (
          <div
            key={idx}
            className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
            style={{ opacity: idx === i ? 1 : 0 }}
            aria-hidden={idx !== i}
          >
            <Image src={pair.main} alt={pair.alt} fill priority={idx === 0} sizes="(min-width: 768px) 42vw, 90vw" className="object-cover" />
          </div>
        ))}
      </div>
      <div className="hidden md:block absolute -bottom-10 -right-10 w-[42%] aspect-[4/5]">
        {pairs.map((pair, idx) => (
          <div
            key={idx}
            className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
            style={{ opacity: idx === i ? 1 : 0 }}
            aria-hidden={idx !== i}
          >
            <Image src={pair.detail} alt="" fill sizes="18vw" className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
