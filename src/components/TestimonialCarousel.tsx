"use client";

import Image from "next/image";
import { useState } from "react";

export type Testimonial = {
  quote: string;
  /** Rich version of the quote — mixed italic/small-caps/bold emphasis.
      Overrides `quote` for display when present; `quote` still used for the
      plain-text tab label fallback. */
  quoteNode?: React.ReactNode;
  author: string;
  photo?: string;
};

export default function TestimonialCarousel({
  items,
  label = "Thoughts on Our Experience",
}: {
  items: Testimonial[];
  label?: string;
}) {
  const [i, setI] = useState(0);
  const n = items.length;
  const go = (next: number) => setI((next + n) % n);
  const t = items[i];

  return (
    <section className="section-y-lg px-6 bg-[#EAE5D6]">
      <div className="max-w-4xl mx-auto text-center relative">
        <p className="label text-[#33302A]/55 mb-8">{label}</p>

        {/* Named tabs — jump directly to a couple, not just prev/next */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10">
          {items.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`label transition-colors ${
                idx === i ? "text-[#3B4127]" : "text-[#33302A]/35 hover:text-[#33302A]/60"
              }`}
            >
              {item.author.split(",")[0]}
            </button>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() => go(i - 1)}
          aria-label="Previous testimonial"
          className="absolute left-0 top-1/2 -translate-y-1/2 text-[#33302A]/50 hover:text-[#33302A] transition-colors"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M15 5l-7 7 7 7" /></svg>
        </button>
        <button
          onClick={() => go(i + 1)}
          aria-label="Next testimonial"
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[#33302A]/50 hover:text-[#33302A] transition-colors"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M9 5l7 7-7 7" /></svg>
        </button>

        <div className="px-8 md:px-16">
          <blockquote
            key={i}
            className="font-times text-[#33302A] leading-[1.5] anim-fade"
            style={{ fontSize: "clamp(21px, 2.9vw, 34px)" }}
          >
            &ldquo;{t.quoteNode ?? t.quote}&rdquo;
          </blockquote>
          <p className="font-times-italic italic text-[#33302A]/70 text-lg mt-8">— {t.author}, Past Clients</p>

          {t.photo && (
            <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden mx-auto mt-10 ring-1 ring-[#33302A]/10">
              <Image src={t.photo} alt={t.author} fill sizes="112px" className="object-cover" />
            </div>
          )}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2.5 mt-12">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => go(idx)}
              aria-label={`Testimonial ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${idx === i ? "w-6 bg-[#33302A]" : "w-1.5 bg-[#33302A]/25 hover:bg-[#33302A]/50"}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .anim-fade {
          animation: tFade 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }
        @keyframes tFade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
