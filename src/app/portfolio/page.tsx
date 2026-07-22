import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import BeginCTA from "@/components/BeginCTA";
import HeroCarousel from "@/components/HeroCarousel";
import { PORTFOLIO } from "@/lib/images";
import { GALLERIES, GALLERY_COVERS, PORTFOLIO_HERO } from "@/lib/galleries";

export const metadata: Metadata = {
  title: "Portfolio | Prose Florals — Boston Wedding Florist",
  description:
    "A collection of thoughtfully designed celebrations by Prose Florals — from garden ceremonies to gallery receptions across the Boston area.",
};

// Masonry rhythm for the "more weddings" grid.
const spans = [
  "row-span-2", "", "", "row-span-2", "", "",
  "", "row-span-2", "", "", "row-span-2", "",
  "row-span-2", "", "", "", "row-span-2", "",
];

export default function PortfolioPage() {
  return (
    <main className="bg-[#F4F1E8]">
      {/* Full-bleed hero carousel */}
      <HeroCarousel images={PORTFOLIO_HERO} />

      {/* Intro */}
      <section className="section-y-lg container-pf text-center">
        <p className="label text-[#33302A]/50 mb-8">The Portfolio</p>
        <h2 className="text-[#33302A] leading-[1.05]" style={{ fontSize: "clamp(30px, 4.4vw, 62px)" }}>
          <span className="display">WE MAKE TIMELESS FLORALS</span>
          <span className="block font-times-italic italic font-light mt-3 text-[#33302A]/80" style={{ fontSize: "clamp(20px, 2.6vw, 34px)" }}>
            for brides and grooms with classic style.
          </span>
        </h2>
        <p className="font-times text-[19px] md:text-[21px] text-[#33302A]/70 leading-[1.85] max-w-2xl mx-auto mt-10">
          Our client&apos;s desires are our biggest inspiration when creating a floral design plan. The amazing photographers and other vendors perfectly capture the pieces in the way they were meant to be seen. Please enjoy these stunning past events — we are so grateful to everyone who made these magical floral moments happen.
        </p>
      </section>

      {/* Featured Weddings — named gallery index */}
      <section className="container-wide pb-8 md:pb-16">
        <div className="text-center mb-14 md:mb-20">
          <p className="label text-[#33302A]/60">Featured Weddings</p>
        </div>
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-16 md:gap-x-10">
          {GALLERIES.map((g, i) => (
            <Reveal key={g.slug} delay={i * 110}>
              <Link href={`/portfolio/${g.slug}`} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <Image
                    src={GALLERY_COVERS[g.slug]}
                    alt={g.coverAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <p className="label text-[#33302A] mb-3 group-hover:text-[#3B4127] transition-colors">
                  {g.venueLabel}
                </p>
                <p className="font-times text-[21px] md:text-[23px] text-[#33302A]/80 leading-snug">
                  {g.tagline}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* More weddings — masonry of the wider photo pool */}
      <section className="container-wide section-y">
        <div className="text-center mb-14 md:mb-20">
          <p className="label text-[#33302A]/60">More Weddings</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] md:auto-rows-[320px] gap-5 md:gap-7">
          {PORTFOLIO.slice(0, 18).map((src, i) => (
            <Reveal
              key={i}
              delay={(i % 3) * 80}
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
