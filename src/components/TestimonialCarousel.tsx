"use client";

import Image from "next/image";
import { useState } from "react";

export type Testimonial = {
  quote: string;
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
    <section className="section-y-lg px-6 bg-[#F0EAE0]">
      <div className="max-w-4xl mx-auto text-center relative">
        <p className="label text-[#302B29]/55 mb-10">{label}</p>

        {/* Arrows */}
        <button
          onClick={() => go(i - 1)}
          aria-label="Previous testimonial"
          className="absolute left-0 top-1/2 -translate-y-1/2 text-[#302B29]/50 hover:text-[#302B29] transition-colors"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M15 5l-7 7 7 7" /></svg>
        </button>
        <button
          onClick={() => go(i + 1)}
          aria-label="Next testimonial"
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[#302B29]/50 hover:text-[#302B29] transition-colors"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M9 5l7 7-7 7" /></svg>
        </button>

        <div className="px-8 md:px-16">
          <blockquote
            key={i}
            className="font-times text-[#302B29] leading-[1.5] anim-fade"
            style={{ fontSize: "clamp(21px, 2.9vw, 34px)" }}
          >
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <p className="font-times-italic italic text-[#302B29]/70 text-lg mt-8">— {t.author}</p>

          {t.photo && (
            <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden mx-auto mt-10 ring-1 ring-[#302B29]/10">
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
              className={`h-1.5 rounded-full transition-all duration-500 ${idx === i ? "w-6 bg-[#302B29]" : "w-1.5 bg-[#302B29]/25 hover:bg-[#302B29]/50"}`}
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
