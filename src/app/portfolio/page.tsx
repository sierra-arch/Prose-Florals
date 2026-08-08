import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import BeginCTA from "@/components/BeginCTA";
import HeroCarousel from "@/components/HeroCarousel";
import {
  FEATURED_WEDDINGS,
  MORE_WEDDINGS,
  PORTFOLIO_FEATURE,
  EDITORIAL_PROJECTS,
  PORTFOLIO_HERO,
  type PortfolioCard,
} from "@/lib/galleries";

export const metadata: Metadata = {
  title: "Portfolio | Prose Florals — Boston Wedding Florist",
  description:
    "A collection of thoughtfully designed celebrations by Prose Florals — from garden ceremonies to gallery receptions across the Boston area.",
};

// Masonry rhythm matching the live site: a wide 2-up row, a 3-up row, then
// another 2-up row — repeated for both Featured and More Weddings.
const ROW_PATTERN = [2, 3, 2];

function WeddingRows({ items }: { items: PortfolioCard[] }) {
  const rows: PortfolioCard[][] = [];
  let i = 0;
  let p = 0;
  while (i < items.length) {
    const size = ROW_PATTERN[p % ROW_PATTERN.length];
    rows.push(items.slice(i, i + size));
    i += size;
    p++;
  }
  return (
    <div className="flex flex-col gap-16 md:gap-20">
      {rows.map((row, ri) => (
        <div key={ri} className={`grid gap-8 md:gap-10 ${row.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
          {row.map((card, i) => {
            const inner = (
              <>
                <div className="relative aspect-[3/4] overflow-hidden mb-6 plate">
                  <Image
                    src={card.photo}
                    alt={`${card.tagline} — ${card.venueLabel}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <p className="label text-[#33302A] mb-3 group-hover:text-[#4A1420] transition-colors">
                  {card.venueLabel}
                </p>
                <p className="font-times text-[21px] md:text-[23px] text-[#33302A]/80 leading-snug">
                  {card.tagline}
                </p>
              </>
            );
            return (
              <Reveal key={card.venueLabel} delay={i * 110}>
                {card.slug ? (
                  <Link href={`/portfolio/${card.slug}`} className="group block">
                    {inner}
                  </Link>
                ) : (
                  <div className="group block">{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <main className="bg-[#F4F1E8]">
      {/* Full-bleed hero carousel */}
      <HeroCarousel images={PORTFOLIO_HERO} />

      {/* Intro on taupe band, with Weddings / Editorial tabs */}
      <section className="bg-[#A9998A] pt-24 pb-14 md:pt-32 md:pb-20 px-6 text-center">
        <h1 className="display text-[#F4F1E8] leading-[1.02] mb-10" style={{ fontSize: "clamp(48px, 8vw, 130px)" }}>
          PORTFOLIO
        </h1>
        <p className="font-sans-pf text-[#F4F1E8]/90 text-[17px] leading-relaxed max-w-2xl mx-auto mb-12">
          Our client&apos;s visions are our biggest inspiration when creating a floral design plan. The amazing photographers and other vendors perfectly capture the pieces in the way they were meant to be seen. Please enjoy these stunning past events. We are so grateful to everyone who made these magical floral moments happen.
        </p>
        <div className="flex justify-center gap-12">
          <a href="#weddings" className="label text-[#F4F1E8] underline underline-offset-8 decoration-[#F4F1E8]/60">
            Weddings
          </a>
          <a href="#editorial" className="label text-[#F4F1E8] underline underline-offset-8 decoration-[#F4F1E8]/60">
            Editorial
          </a>
        </div>
      </section>

      {/* Featured Weddings */}
      <section id="weddings" className="container-wide section-y-lg">
        <div className="text-center mb-14 md:mb-20">
          <p className="label text-[#33302A]/60">Featured Weddings</p>
        </div>
        <WeddingRows items={FEATURED_WEDDINGS} />
      </section>

      {/* Pull quote */}
      <section className="container-pf pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-times text-[#33302A] leading-[1.4]" style={{ fontSize: "clamp(24px, 3.4vw, 42px)" }}>
            &ldquo;Their floral artistry is downright <strong>stunning</strong> — each arrangement felt like a work of <strong>magic</strong>, bringing an enchanting touch to the entire event.&rdquo;
          </p>
          <p className="label text-[#33302A]/60 mt-6">— Castillo Holliday Photo and Film</p>
        </div>
      </section>

      {/* Sam + Terrie full-bleed feature */}
      <section className="relative h-[80vh] min-h-[560px] overflow-hidden flex items-center justify-center text-center px-6">
        <Image src={PORTFOLIO_FEATURE.photo} alt={PORTFOLIO_FEATURE.couple} fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#33302A]/30" />
        <div className="relative">
          <h2 className="display text-[#F4F1E8] leading-[1.02] mb-6" style={{ fontSize: "clamp(36px, 6vw, 78px)" }}>
            {PORTFOLIO_FEATURE.couple}
          </h2>
          <p className="font-sans-pf text-[#F4F1E8]/90 text-[16px] mb-8">{PORTFOLIO_FEATURE.tagline}</p>
          <p className="label text-[#F4F1E8] underline underline-offset-8 decoration-[#F4F1E8]/60">View Gallery</p>
        </div>
      </section>

      {/* More Weddings */}
      <section className="container-wide section-y-lg">
        <div className="text-center mb-14 md:mb-20">
          <p className="label text-[#33302A]/60">More Weddings</p>
        </div>
        <WeddingRows items={MORE_WEDDINGS} />
      </section>

      {/* Our Editorial Projects */}
      <section id="editorial" className="container-wide section-y-lg">
        <p className="label text-[#33302A]/60 mb-14 md:mb-20">Our Editorial Projects</p>
        <div className="grid md:grid-cols-2 gap-10 md:gap-14">
          {EDITORIAL_PROJECTS.map((p) => (
            <div key={p.title}>
              <div className="relative aspect-[4/3] overflow-hidden mb-6 plate">
                <Image src={p.photo} alt={p.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
              <p className="font-times text-[24px] md:text-[28px] text-[#33302A] leading-snug mb-4">{p.title}</p>
              <p className="label text-[#33302A] underline underline-offset-8 decoration-[#33302A]/40">Full Photoshoot</p>
            </div>
          ))}
        </div>
      </section>

      <BeginCTA image={EDITORIAL_PROJECTS[0].photo} />
    </main>
  );
}
