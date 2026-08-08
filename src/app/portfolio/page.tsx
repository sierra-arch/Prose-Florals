import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import BeginCTA from "@/components/BeginCTA";
import HeroCarousel from "@/components/HeroCarousel";
import { PORTFOLIO_GROUPS, IMG } from "@/lib/images";
import { GALLERIES, GALLERY_COVERS, PORTFOLIO_HERO } from "@/lib/galleries";

export const metadata: Metadata = {
  title: "Portfolio | Prose Florals — Boston Wedding Florist",
  description:
    "A collection of thoughtfully designed celebrations by Prose Florals — from garden ceremonies to gallery receptions across the Boston area.",
};

// Masonry rhythm within each grouping (5 photos per group).
const spans = ["row-span-2", "", "", "", "row-span-2"];
// Scrapbook tilts for the lead group only — a deliberate highlight, not
// applied to all 20 photos (restraint over decorating everything at once).
const scrapbookTilts = ["tilt-ls", "", "tilt-r", "", "tilt-rs"];

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
                <div className="relative aspect-[3/4] overflow-hidden mb-6 plate">
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

      {/* Flat-lay interlude — one composed still-life beat on this major
          page too, breaking up the run of in-the-moment wedding photography. */}
      <section className="relative h-[60vh] md:h-[76vh] overflow-hidden">
        <Image src={IMG.flatLay} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#17130F]/45 via-transparent to-[#17130F]/25" />
      </section>

      {/* More weddings — paced into tonally-consistent groupings rather than
          one dense wall, each with its own breathing room and mood label.
          The lead group gets the scrapbook tilt treatment as a highlight;
          the rest stay calm so the device doesn't blanket all 20 photos. */}
      <section className="container-wide section-y">
        <div className="text-center mb-14 md:mb-20">
          <p className="label text-[#33302A]/60">More Weddings</p>
        </div>
        <div className="flex flex-col gap-20 md:gap-28">
          {PORTFOLIO_GROUPS.map((group, gi) => {
            const isLead = gi === 0;
            return (
              <div key={group.label}>
                <p className="font-times-italic italic text-[#33302A]/60 text-lg md:text-xl text-center mb-8 md:mb-10">
                  {group.label}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] md:auto-rows-[320px] gap-5 md:gap-7">
                  {group.images.map((src, i) => (
                    <Reveal
                      key={src}
                      delay={(i % 3) * 80}
                      className={`relative overflow-hidden group plate ${spans[i % spans.length]} ${isLead ? scrapbookTilts[i % scrapbookTilts.length] : ""}`}
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
              </div>
            );
          })}
        </div>
      </section>

      <BeginCTA />
    </main>
  );
}
