import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PhotoCollage from "@/components/PhotoCollage";
import BotanicalStamp from "@/components/BotanicalStamp";
import ScallopDivider from "@/components/ScallopDivider";
import { IMG, INQUIRY } from "@/lib/images";
import { GALLERIES, GALLERY_COVERS } from "@/lib/galleries";

// Scattered editorial hero cluster (Terre Verde / Drifter Floral style)
const heroCollage = [
  { src: IMG.heroTwoBrides, alt: "Two brides with vibrant bouquets", top: "8%", left: "1%", w: "22%", ratio: "3/4", tilt: "ls" as const, z: 3 },
  { src: IMG.brideMoody, alt: "Moody bridal portrait", top: "30%", left: "22%", w: "16%", ratio: "3/4", tilt: "rs" as const, z: 2 },
  { src: IMG.centerpiece, alt: "Candlelit tablescape", top: "12%", left: "39%", w: "25%", ratio: "4/3", tilt: "" as const, z: 4 },
  { src: IMG.coupleForest, alt: "Couple in the forest", top: "46%", left: "59%", w: "15%", ratio: "3/4", tilt: "ls" as const, z: 3 },
  { src: IMG.bouquetLush, alt: "Lush bridal bouquet", top: "10%", left: "73%", w: "21%", ratio: "3/4", tilt: "r" as const, z: 5 },
  { src: IMG.meadowInstall, alt: "Meadow ground install", bottom: "1%", left: "29%", w: "21%", ratio: "16/10", tilt: "rs" as const, z: 1 },
];

const services = [
  { t: "Full Service Weddings", meta: "Design · Delivery · Setup", href: "/services" },
  { t: "Floral Design & Installs", meta: "Bouquets · Arches · Meadows", href: "/services" },
  { t: "Editorial & Events", meta: "Styling · Corporate · Shoots", href: "/services" },
  { t: "DIY Florals with Ease", meta: "Curated · Bulk · Guided", href: "/services" },
];

export default function Home() {
  return (
    <main className="bg-[#F4F1E8] overflow-x-clip">
      {/* ─── EDITORIAL COLLAGE HERO ─── */}
      <section className="relative pt-[140px] md:pt-[168px] pb-10 md:pb-16">
        <div className="container-wide">
          {/* eyebrow row */}
          <div className="flex items-baseline justify-between mb-8 md:mb-12">
            <p className="eyebrow text-[#33302A]/60">Boston, MA · Est. Wedding &amp; Event Florist</p>
            <p className="folio hidden md:block">Vol. 01 — The Romantics</p>
          </div>

          <div className="relative">
            <PhotoCollage items={heroCollage} height="h-[440px] md:h-[600px] lg:h-[640px]" />
            {/* scattered doodle stars */}
            <svg className="doodle-star absolute top-[6%] left-[36%] w-6 h-6 hidden md:block" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2c.6 5 4 8.4 9 9-5 .6-8.4 4-9 9-.6-5-4-8.4-9-9 5-.6 8.4-4 9-9z" fill="currentColor"/>
            </svg>
            <svg className="doodle-star absolute bottom-[10%] left-[54%] w-4 h-4 hidden md:block" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2c.6 5 4 8.4 9 9-5 .6-8.4 4-9 9-.6-5-4-8.4-9-9 5-.6 8.4-4 9-9z" fill="currentColor"/>
            </svg>
            <svg className="doodle-star absolute top-[40%] right-[2%] w-5 h-5 hidden md:block" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2c.6 5 4 8.4 9 9-5 .6-8.4 4-9 9-.6-5-4-8.4-9-9 5-.6 8.4-4 9-9z" fill="currentColor"/>
            </svg>
          </div>

          {/* Oversized wordmark statement */}
          <div className="mt-6 md:mt-8 relative">
            <h1 className="ed-display text-[#33302A] text-center" style={{ fontSize: "clamp(52px, 13vw, 210px)" }}>
              PROSE FLORALS
            </h1>
            <p className="font-times-italic italic text-center text-[#33302A]/70 mt-1 md:mt-2" style={{ fontSize: "clamp(18px, 2.4vw, 30px)" }}>
              wedding florals, done <span className="squiggle">differently</span> — for the romantics.
            </p>
            {/* hand-drawn flourish under the tagline */}
            <svg className="flourish mx-auto mt-7 w-[180px] md:w-[240px]" viewBox="0 0 240 20" fill="none" aria-hidden="true">
              <path d="M4 12c30-10 56 8 86 4s40-14 66-8 30 10 30 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              <circle cx="120" cy="9" r="2" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE DO (KADO-style split) ─── */}
      <section className="section-y container-wide">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-stretch">
          {/* Left: text panel on bone */}
          <Reveal className="flex flex-col justify-center bg-[#EAE5D6] px-8 md:px-16 lg:px-20 py-14 md:py-24 relative overflow-hidden">
            <span className="vertical-rl eyebrow text-[#33302A]/30 absolute right-4 top-1/2 -translate-y-1/2 hidden xl:block">
              What We Do
            </span>
            <p className="eyebrow text-[#3B4127] mb-8">What We Do:</p>
            <h2 className="ed-display text-[#33302A] mb-8" style={{ fontSize: "clamp(34px, 4.6vw, 66px)" }}>
              Flowers for weddings, events &amp; installations
            </h2>
            <p className="font-times text-[18px] md:text-[19px] text-[#33302A]/72 leading-[1.85] max-w-md">
              Every couple has their own romance, and we believe that should be reflected in their florals. We create dynamic floral designs that highlight our couple&apos;s style &amp; story — combining your vision, modern design, and a little dramatic flare.
            </p>
            <Link href="/about" className="eyebrow text-[#33302A] border-b border-[#33302A] pb-1 self-start mt-10 hover:text-[#3B4127] hover:border-[#3B4127] transition-colors">
              Read Our Story
            </Link>
          </Reveal>

          {/* Right: tall feature image */}
          <Reveal delay={120} className="relative min-h-[420px] md:min-h-0 plate overflow-hidden">
            <Image src={IMG.bouquetBold} alt="A bold, colorful Prose Florals arrangement" fill sizes="50vw" className="object-cover" />
            <span className="absolute bottom-4 right-4 folio text-white/85">fig. 01</span>
          </Reveal>
        </div>
      </section>

      {/* ─── SERVICES — thin-rule editorial list (Terre Verde style) ─── */}
      {/* Tighter top padding: closes the dead gap that used to sit between
          the "What We Do" split panel and this section's heading. */}
      <section className="pt-10 pb-16 md:pt-16 md:pb-28 container-pf">
        <div className="mb-12 md:mb-16 flex items-end justify-between">
          <h2 className="ed-display text-[#33302A]" style={{ fontSize: "clamp(30px, 4vw, 56px)" }}>
            <span className="font-times-italic italic font-light">welcome to our</span> OFFERINGS
          </h2>
          <p className="folio hidden md:block">§ Services</p>
        </div>
        <div>
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 70}>
              <Link href={s.href} className="rule-row group flex items-center justify-between gap-6 py-6 md:py-8">
                <span className="flex items-baseline gap-5 md:gap-8">
                  <span className="folio text-[#33302A]/40">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-times text-[#33302A] group-hover:text-[#3B4127] transition-colors" style={{ fontSize: "clamp(22px, 3vw, 40px)" }}>
                    {s.t}
                  </span>
                </span>
                <span className="eyebrow text-[#33302A]/45 hidden sm:block text-right">{s.meta}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── MOODY OLIVE TEAM BAND ─── */}
      <section className="relative grid md:grid-cols-2 grain">
        <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px]">
          <Image src={IMG.bridePortrait} alt="Sierra Bettis, founder of Prose Florals" fill sizes="50vw" className="object-cover" />
        </div>
        <div className="bg-[#2A2E1B] flex flex-col justify-center px-8 md:px-20 py-20 md:py-32 relative">
          <span className="vertical-rl eyebrow text-[#F4F1E8]/35 absolute right-7 top-14 hidden md:block">
            Sincerely, Prose
          </span>
          <p className="eyebrow text-[#C9B7AE] mb-6">Behind the Blooms</p>
          <h2 className="ed-display text-[#F4F1E8] mb-7" style={{ fontSize: "clamp(38px, 5vw, 74px)" }}>
            SIERRA &amp; <span className="font-times-italic italic font-light">Kattie</span>
          </h2>
          <p className="font-times text-[18px] text-[#F4F1E8]/78 leading-[1.85] max-w-md mb-9">
            A passionate Boston florist duo bringing a timeless, editorial style and classic, romantic aesthetic to modern love stories — with professional, timely communication every step of the way.
          </p>
          <Link href="/about" className="eyebrow text-[#F4F1E8] border-b border-[#F4F1E8]/45 pb-1 self-start hover:border-[#C9B7AE] hover:text-[#C9B7AE] transition-colors">
            Meet the Prose Team
          </Link>
        </div>
      </section>

      {/* Scalloped seam — dark olive band bulges into the bone page below,
          replacing the hard rule. Second (and last) use of the motif on
          this page, per the spec's restraint note. */}
      <ScallopDivider bumpColor="#2A2E1B" gapColor="#F4F1E8" bumpSize={22} />

      {/* ─── FEATURED WEDDINGS ─── */}
      <section className="section-y container-wide">
        <div className="mb-12 md:mb-16 text-center">
          <p className="eyebrow text-[#33302A]/55 mb-4">Selected Work</p>
          <h2 className="ed-display text-[#33302A]" style={{ fontSize: "clamp(32px, 4.4vw, 62px)" }}>
            FEATURED <span className="font-times-italic italic font-light">weddings</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-14 md:gap-x-10">
          {GALLERIES.map((g, i) => (
            <Reveal key={g.slug} delay={i * 110}>
              <Link href={`/portfolio/${g.slug}`} className="group block">
                <div className={`relative aspect-[3/4] overflow-hidden plate mb-6 ${i === 1 ? "md:mt-14" : ""}`}>
                  <Image
                    src={GALLERY_COVERS[g.slug]}
                    alt={g.coverAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                  />
                  <span className="absolute top-4 left-4 folio text-white/85">0{i + 1}</span>
                </div>
                <p className="eyebrow text-[#33302A] mb-2 group-hover:text-[#3B4127] transition-colors">{g.venueLabel}</p>
                <p className="font-times text-[20px] md:text-[22px] text-[#33302A]/80 leading-snug">{g.tagline}</p>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link href="/portfolio" className="eyebrow text-[#33302A] border-b border-[#33302A] pb-1.5 hover:text-[#3B4127] hover:border-[#3B4127] transition-colors">
            View the Full Portfolio
          </Link>
        </div>
      </section>

      {/* ─── TESTIMONIAL (quiet, centered) ─── */}
      <section className="section-y px-6 bg-[#EAE5D6] relative grain overflow-hidden">
        {/* Botanical stamp — replaces the sparkle doodles here, and anchors
            the wide empty margin beside the centered quote. */}
        <BotanicalStamp className="hidden lg:block absolute top-1/2 right-[6%] -translate-y-1/2 w-32 h-32 text-[#3B4127]/[0.12]" />
        <div className="max-w-3xl mx-auto text-center relative">
          <p className="ed-display text-[#3B4127]/25 leading-none select-none" style={{ fontSize: "clamp(60px, 9vw, 130px)" }}>&ldquo;</p>
          <p className="font-times text-[#33302A] leading-[1.5] -mt-6 md:-mt-10" style={{ fontSize: "clamp(22px, 3vw, 36px)" }}>
            From start to finish I had the most wonderful experience with Prose Florals. They were <em className="font-times-italic">exactly</em> what we had envisioned, maybe <em className="font-times-italic">even</em> better!
          </p>
          <p className="font-times-italic italic text-[#33302A]/70 text-lg mt-8">— Meaghan &amp; Abel, La Brassa</p>
        </div>
      </section>

      {/* ─── EXPLORE CTA (image mosaic) ─── */}
      <section className="relative">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[IMG.brideMoody, IMG.coupleWalk, IMG.brideBrick, IMG.reception].map((src, i) => (
            <div key={i} className="relative aspect-[3/4]">
              <Image src={src} alt="Prose Florals wedding" fill sizes="25vw" className="object-cover" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-[#2A2E1B]/45 flex flex-col items-center justify-center text-center px-6">
          <h2 className="ed-display text-white leading-[1]" style={{ fontSize: "clamp(34px, 6vw, 92px)" }}>EXPLORE</h2>
          <p className="font-times-italic italic text-white leading-[1.05]" style={{ fontSize: "clamp(30px, 5.5vw, 82px)" }}>Prose Florals</p>
          <h2 className="ed-display text-white leading-[1]" style={{ fontSize: "clamp(34px, 6vw, 92px)" }}>WEDDINGS</h2>
          <Link href="/portfolio" className="mt-9 eyebrow text-white border border-white/60 px-9 py-3.5 hover:bg-white hover:text-[#33302A] transition-all duration-300">
            View the Portfolio
          </Link>
        </div>
      </section>

      {/* ─── INQUIRE CTA ─── */}
      <section className="section-y-lg px-6 text-center bg-[#3B4127] relative grain">
        <p className="eyebrow text-[#C9B7AE] mb-6">Begin Your Journey</p>
        <h2 className="ed-display text-white mb-5" style={{ fontSize: "clamp(36px, 5.5vw, 82px)" }}>
          SHALL WE <span className="font-times-italic italic font-light">begin?</span>
        </h2>
        <p className="font-times text-white/70 text-lg italic mb-10 max-w-md mx-auto leading-relaxed">
          Introduce yourself and tell us a little about your event to get started. We look forward to meeting you!
        </p>
        <a
          href={INQUIRY}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block eyebrow text-[#33302A] bg-[#F4F1E8] px-12 py-4 hover:bg-[#EAE5D6] transition-colors"
        >
          Inquire Now
        </a>
      </section>
    </main>
  );
}
