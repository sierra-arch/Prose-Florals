"use client";

import Image from "next/image";
import { useState } from "react";

export type Review = { quote: string; author: string; venue: string; photo: string };

export default function HomeTestimonials({ items }: { items: Review[] }) {
  const [i, setI] = useState(0);
  const pageSize = 2;
  const pages = Math.ceil(items.length / pageSize);
  const go = (next: number) => setI((next + pages) % pages);
  const shown = items.slice(i * pageSize, i * pageSize + pageSize);

  return (
    <section className="section-y-lg px-6 bg-[#EAE5D6]">
      <div className="max-w-5xl mx-auto relative">
        <button
          onClick={() => go(i - 1)}
          aria-label="Previous testimonials"
          className="hidden md:block absolute left-[-56px] top-1/2 -translate-y-1/2 text-[#33302A]/50 hover:text-[#33302A] transition-colors"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M15 5l-7 7 7 7" /></svg>
        </button>
        <button
          onClick={() => go(i + 1)}
          aria-label="Next testimonials"
          className="hidden md:block absolute right-[-56px] top-1/2 -translate-y-1/2 text-[#33302A]/50 hover:text-[#33302A] transition-colors"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M9 5l7 7-7 7" /></svg>
        </button>

        <div key={i} className="grid md:grid-cols-2 gap-14 md:gap-16 anim-fade">
          {shown.map((t) => (
            <div key={t.author} className="text-center">
              <blockquote className="font-times text-[#33302A] leading-[1.5]" style={{ fontSize: "clamp(19px, 2.2vw, 25px)" }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="relative w-16 h-16 rounded-full overflow-hidden mx-auto mt-8 mb-4 ring-1 ring-[#33302A]/10">
                <Image src={t.photo} alt={t.author} fill sizes="64px" className="object-cover" />
              </div>
              <p className="label text-[#33302A]/60 mb-1">Kind Words From</p>
              <p className="font-sans-pf text-[15px] text-[#33302A]">
                {t.author}, <span className="underline underline-offset-4 decoration-[#33302A]/40">{t.venue}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .anim-fade {
          animation: hFade 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }
        @keyframes hFade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
