"use client";

import Image from "next/image";
import { useState } from "react";

type Item = { names: string; quoteLead: string; quoteRest: string; bg: string };

export default function ServicesTestimonials({ items }: { items: Item[] }) {
  const [i, setI] = useState(0);
  const n = items.length;
  const go = (next: number) => setI((next + n) % n);
  const t = items[i];

  return (
    <section>
      <div className="container-pf pt-14 pb-10 md:pt-20 md:pb-14 relative">
        <div className="flex flex-wrap gap-x-3 gap-y-2 border-b border-[#D8D2C2] pb-6">
          {items.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`label transition-colors ${idx === i ? "text-[#33302A]" : "text-[#33302A]/35 hover:text-[#33302A]/60"}`}
            >
              {item.names}
              {idx < items.length - 1 && <span className="text-[#33302A]/25 ml-3">/</span>}
            </button>
          ))}
        </div>

        <button onClick={() => go(i - 1)} aria-label="Previous" className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 text-[#33302A]/50 hover:text-[#33302A] transition-colors">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M15 5l-7 7 7 7" /></svg>
        </button>
        <button onClick={() => go(i + 1)} aria-label="Next" className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 text-[#33302A]/50 hover:text-[#33302A] transition-colors">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M9 5l7 7-7 7" /></svg>
        </button>

        <div className="max-w-3xl mx-auto text-center py-16 md:py-20">
          <p className="font-times text-[#33302A] leading-relaxed" style={{ fontSize: "clamp(24px, 3.2vw, 38px)" }}>
            &ldquo;{t.quoteLead}
          </p>
          <p className="font-sans-pf text-[#33302A]/75 text-[16px] leading-relaxed mt-5 max-w-2xl mx-auto">
            {t.quoteRest}&rdquo;
          </p>
        </div>
      </div>

      <div key={i} className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
        <Image src={t.bg} alt={`${t.names}'s wedding`} fill sizes="100vw" className="object-cover" />
      </div>
    </section>
  );
}
