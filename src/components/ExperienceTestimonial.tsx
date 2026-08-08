"use client";

import Image from "next/image";
import { useState } from "react";

export type Item = { quote: string; author: string; photo: string };

export default function ExperienceTestimonial({ items }: { items: Item[] }) {
  const [i, setI] = useState(0);
  const n = items.length;
  const go = (next: number) => setI((next + n) % n);
  const t = items[i];

  return (
    <section className="section-y-lg px-6 bg-[#F4F1E8] relative">
      <p className="label text-[#33302A]/60 text-center mb-14">Thoughts on Our Experience</p>

      <div className="max-w-3xl mx-auto text-center relative">
        {n > 1 && (
          <>
            <button
              onClick={() => go(i - 1)}
              aria-label="Previous testimonial"
              className="hidden md:block absolute left-[-64px] top-1/2 -translate-y-1/2 text-[#33302A]/50 hover:text-[#33302A] transition-colors"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M15 5l-7 7 7 7" /></svg>
            </button>
            <button
              onClick={() => go(i + 1)}
              aria-label="Next testimonial"
              className="hidden md:block absolute right-[-64px] top-1/2 -translate-y-1/2 text-[#33302A]/50 hover:text-[#33302A] transition-colors"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M9 5l7 7-7 7" /></svg>
            </button>
          </>
        )}

        <blockquote key={i} className="font-times text-[#33302A] leading-[1.5] anim-fade" style={{ fontSize: "clamp(22px, 3vw, 32px)" }}>
          &ldquo;{t.quote}&rdquo;
        </blockquote>
        <p className="font-sans-pf text-[#33302A]/70 text-[16px] mt-6">— {t.author}</p>

        <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden mx-auto mt-10 ring-1 ring-[#33302A]/10">
          <Image src={t.photo} alt={t.author} fill sizes="112px" className="object-cover" />
        </div>
      </div>

      <style jsx>{`
        .anim-fade {
          animation: eFade 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }
        @keyframes eFade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
