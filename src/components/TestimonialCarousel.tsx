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
  venue?: string;
  photo?: string;
};

export default function TestimonialCarousel({
  items,
  label = "Thoughts on Our Experience",
  showTabs = true,
}: {
  items: Testimonial[];
  label?: string;
  showTabs?: boolean;
}) {
  const [i, setI] = useState(0);
  const n = items.length;
  const go = (next: number) => setI((next + n) % n);
  const t = items[i];

  return (
    <section className="section-y-lg px-6 bg-[#EAE5D6]">
      <div className="max-w-4xl mx-auto relative">
        {showTabs && (
          <>
            <p className="label text-[#33302A]/55 mb-8 text-center">{label}</p>
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
          </>
        )}

        {/* Arrows — top-right, matching the live site */}
        {n > 1 && (
          <div className="absolute right-0 top-0 flex gap-4">
            <button onClick={() => go(i - 1)} aria-label="Previous testimonial" className="text-[#33302A]/50 hover:text-[#33302A] transition-colors">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M15 5l-7 7 7 7" /></svg>
            </button>
            <button onClick={() => go(i + 1)} aria-label="Next testimonial" className="text-[#33302A]/50 hover:text-[#33302A] transition-colors">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        )}

        <blockquote
          key={i}
          className="font-times text-[#33302A] leading-[1.5] anim-fade max-w-3xl"
          style={{ fontSize: "clamp(22px, 3vw, 36px)" }}
        >
          &ldquo;{t.quoteNode ?? t.quote}&rdquo;
        </blockquote>

        <div className="flex items-center gap-5 mt-10">
          {t.photo && (
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shrink-0 ring-1 ring-[#33302A]/10">
              <Image src={t.photo} alt={t.author} fill sizes="80px" className="object-cover" />
            </div>
          )}
          <div>
            <p className="label text-[#33302A]/60 mb-1">Kind Words From</p>
            <p className="font-sans-pf text-[15px] text-[#33302A]">
              {t.author}
              {t.venue && (
                <>
                  , <span className="underline underline-offset-4 decoration-[#33302A]/40">{t.venue}</span>
                </>
              )}
            </p>
          </div>
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
