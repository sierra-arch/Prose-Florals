import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import BeginCTA from "@/components/BeginCTA";
import { REVIEWS } from "@/lib/reviews";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Reviews | Prose Florals — Boston Wedding Florist",
  description:
    "Kind words from the couples of Prose Florals. Read reviews from weddings across the Boston area and beyond.",
};

export default function ReviewsPage() {
  return (
    <main className="bg-[#F9F9F5]">
      {/* Intro */}
      <section className="title-zone container-pf">
        <p className="label text-[#302B29]/50 mb-8">Kind Words</p>
        <h1 className="title-hero text-[#302B29]">THE REVIEWS</h1>
        <p className="font-times text-[20px] md:text-[22px] text-[#302B29]/70 leading-[1.85] max-w-xl mx-auto mt-10">
          There is no greater honor than being trusted with a couple&apos;s big day. Here&apos;s what they had to say.
        </p>
      </section>

      {/* Feature quote */}
      <section className="relative py-40 px-6 overflow-hidden">
        <Image src={IMG.coupleKiss} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#302B29]/60" />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="font-times text-[#F9F9F5] leading-relaxed" style={{ fontSize: "clamp(24px, 3.2vw, 40px)" }}>
            &ldquo;Working with Prose Florals was nothing short of a <em className="font-times-italic">dream!</em> Their floral artistry is downright stunning — each arrangement felt like a work of magic.&rdquo;
          </p>
          <p className="font-times-italic italic text-[#F9F9F5]/80 text-lg mt-6">— Dominique Holliday, Loring Greenough House</p>
        </div>
      </section>

      {/* Masonry of reviews */}
      <section className="container-pf section-y-lg">
        <div className="max-w-6xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-8 [column-fill:_balance]">
          {REVIEWS.map((r, i) => (
            <Reveal key={i} delay={(i % 3) * 90} className="break-inside-avoid mb-8 bg-[#F0EAE0] p-10">
              <div className="flex gap-1 mb-4 text-[#B99C6E]">
                {"★★★★★".split("").map((s, k) => (
                  <span key={k} className="text-sm">{s}</span>
                ))}
              </div>
              <p className="font-times text-[17px] text-[#302B29]/80 leading-relaxed mb-5">&ldquo;{r.quote}&rdquo;</p>
              <p className="label text-[#302B29] text-[11px]">{r.author}</p>
              {r.venue && <p className="font-times-italic italic text-[#302B29]/55 text-sm mt-1">{r.venue}</p>}
            </Reveal>
          ))}
        </div>
      </section>

      <BeginCTA />
    </main>
  );
}
