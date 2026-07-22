import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import BeginCTA from "@/components/BeginCTA";
import { PORTFOLIO } from "@/lib/images";

export const metadata: Metadata = {
  title: "Portfolio | Prose Florals — Boston Wedding Florist",
  description:
    "A collection of thoughtfully designed celebrations by Prose Florals — from garden ceremonies to gallery receptions across the Boston area.",
};

// Give the masonry rhythm: alternate tall / standard tiles.
const spans = [
  "row-span-2", "", "", "row-span-2", "", "",
  "", "row-span-2", "", "", "row-span-2", "",
  "row-span-2", "", "", "", "row-span-2", "",
  "", "row-span-2", "", "", "", "row-span-2",
  "", "", "row-span-2", "", "", "",
];

export default function PortfolioPage() {
  return (
    <main className="bg-[#F9F9F5]">
      {/* Intro */}
      <section className="title-zone container-pf">
        <p className="label text-[#302B29]/50 mb-8">Curated Florals</p>
        <h1 className="title-hero text-[#302B29]">THE PORTFOLIO</h1>
        <p className="font-times text-[20px] md:text-[22px] text-[#302B29]/70 leading-[1.85] max-w-xl mx-auto mt-10">
          Explore a collection of thoughtfully designed celebrations — from garden ceremonies to gallery receptions. Every piece is intentionally selected to highlight our couples&apos; love story.
        </p>
      </section>

      {/* Masonry gallery */}
      <section className="container-wide section-y">
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[240px] md:auto-rows-[340px] gap-5 md:gap-7">
          {PORTFOLIO.map((src, i) => (
            <Reveal
              key={i}
              delay={(i % 3) * 90}
              className={`relative overflow-hidden group ${spans[i % spans.length]}`}
            >
              <Image
                src={src}
                alt="Prose Florals wedding floral design"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-[900ms] group-hover:scale-105"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <BeginCTA />
    </main>
  );
}
