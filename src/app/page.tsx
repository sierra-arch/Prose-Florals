import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Monogram from "@/components/Monogram";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import RotatingPair, { type PhotoPair } from "@/components/RotatingPair";
import { IMG, LIVE, INQUIRY } from "@/lib/images";
import { GALLERIES, GALLERY_COVERS } from "@/lib/galleries";

// Real couple + floral-detail pairs, pulled directly from the live
// homepage's own rotating set (scraped from proseflorals.com, matched
// against the user's screenshots) rather than approximated from the
// general photo library. Each pair was checked frame-by-frame — several
// visually-plausible candidates turned out to be different weddings once
// checked by filename/venue, and were dropped rather than shipped wrong.
const intentionPairs: PhotoPair[] = [
  { main: LIVE.maggieBillyMain, detail: LIVE.maggieBillyDetail, alt: "Maggie and Billy's wedding" },
  { main: LIVE.zoeChapman, detail: LIVE.faqMarigolds, alt: "Zoë and Chapman's wedding" },
  { main: IMG.coupleKiss, detail: LIVE.favoriteCat, alt: "Gabby and Ian's wedding" },
  { main: LIVE.hydrangeaArchMain, detail: LIVE.hydrangeaArchDetail, alt: "A hydrangea-arch wedding" },
  { main: LIVE.industrialToastMain, detail: LIVE.industrialToastDetail, alt: "An industrial-venue wedding" },
  { main: LIVE.charlesRiverMain, detail: LIVE.charlesRiverDetail, alt: "Kalila and David's wedding" },
  { main: LIVE.zoeChapmanMain2, detail: LIVE.zoeChapmanDetail2, alt: "Zoë and Chapman's wedding" },
];

const homeTestimonials = [
  {
    quote: "From start to finish I had the most wonderful experience with Prose Florals. They were exactly what we had envisioned, maybe even better!",
    author: "Meaghan & Abel",
    venue: "La Brassa",
    photo: IMG.coupleWalk,
  },
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
      {/* ─── HERO — sits below the fixed header (not behind it), inset
          with the same side padding as the nav, matching the live site. ─── */}
      <section className="relative w-full pt-[92px] px-6 md:px-14">
        <div className="relative w-full h-[82vh] min-h-[560px] max-w-[1600px] mx-auto">
          <Image src={IMG.heroTwoBrides} alt="Two brides with vibrant bouquets" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute bottom-8 right-8 md:bottom-10 md:right-12 text-right">
            <p className="text-white text-[15px] md:text-[17px] leading-snug" style={{ fontFamily: "var(--font-sans)" }}>
              Boston Area Full Service Wedding<br />Florist for the romantics.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FLOWERS with INTENTION — auto-rotating couple + floral-detail
          pair (matches the live site's rotator), text block, monogram at
          the top of the text column. Wide, even gap between photo and
          text — matching the live site's more generous spacing. Real copy
          from the live site. ─── */}
      <section className="section-y-lg container-wide pr-6 md:pr-14 lg:pr-24">
        <div className="grid md:grid-cols-2 gap-x-20 lg:gap-x-28 gap-y-10 items-start">
          <RotatingPair pairs={intentionPairs} />
          <div className="relative max-w-lg">
            <Monogram className="hidden md:block absolute -top-4 right-0 w-14 h-16 text-[#33302A]/70" />
            <h2 className="ed-display text-[#33302A] leading-[1.02] mb-8" style={{ fontSize: "clamp(38px, 4.6vw, 66px)" }}>
              FLOWERS <span className="font-times-italic italic font-light">for</span> YOUR STORY
            </h2>
            <p className="eyebrow text-[#33302A] mb-8" style={{ letterSpacing: "0.1em", fontSize: "14px" }}>
              We create dynamic floral designs that highlight our couple&apos;s style &amp; story.
            </p>
            <p className="font-times text-[17px] text-[#33302A]/75 leading-[1.85] mb-6">
              Every couple has their own romance, and we believe that should be reflected in their wedding florals!
            </p>
            <p className="font-times text-[17px] text-[#33302A]/75 leading-[1.85]">
              It has been our honor to get to know incredible couples at <span className="font-times-italic italic">such</span> a special time in their life and help immortalize their romance in the form of intentionally selected florals to highlight their love story.
            </p>
          </div>
        </div>
      </section>

      {/* ─── OFFERINGS — thin-rule editorial list ─── */}
      <section className="pt-10 pb-12 md:pt-14 md:pb-16 container-pf">
        <div className="mb-6 md:mb-8 flex items-end justify-between">
          <h2 className="ed-display text-[#33302A]" style={{ fontSize: "clamp(30px, 4vw, 56px)" }}>
            <span className="font-times-italic italic font-light">welcome to our</span> OFFERINGS
          </h2>
          <p className="folio hidden md:block">§ Services</p>
        </div>
        <div>
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 70}>
              <Link href={s.href} className="rule-row group flex items-center justify-between gap-6 py-3 md:py-4">
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

      {/* ─── Numbered 01/02/03 navigation teaser ─── */}
      <section className="grid md:grid-cols-3">
        {[
          { n: "01", pre: "Explore", cap: "SERVICES", href: "/services", img: IMG.centerpiece },
          { n: "02", pre: "The", cap: "PORTFOLIO", href: "/portfolio", img: IMG.bouquetLush },
          { n: "03", pre: "About the", cap: "FLORIST", href: "/about", img: IMG.coupleForest },
        ].map((panel) => (
          <Link key={panel.n} href={panel.href} className="group relative aspect-[3/4] md:aspect-auto md:h-[64vh] overflow-hidden block">
            <Image src={panel.img} alt={panel.cap} fill sizes="33vw" className="object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
            <div className="absolute inset-0 bg-[#17130F]/30 group-hover:bg-[#17130F]/40 transition-colors" />
            <span className="absolute bottom-5 left-5 folio text-white/85">{panel.n}</span>
            <div className="absolute inset-0 flex items-center justify-center text-center px-4">
              <h3 className="text-white leading-[1.05]" style={{ fontSize: "clamp(26px, 3.2vw, 42px)" }}>
                <span className="font-times-italic italic font-light block">{panel.pre}</span>
                <span className="ed-display block">{panel.cap}</span>
              </h3>
            </div>
          </Link>
        ))}
      </section>

      {/* ─── ways to work TOGETHER — headline + two underlined text
          links, matching the live site's lighter-touch internal nav
          moment (distinct from the solid Inquire button below). ─── */}
      <section className="section-y container-wide">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <h2 className="leading-[1]" style={{ fontSize: "clamp(38px, 5vw, 72px)" }}>
            <span className="font-times-italic italic font-light text-[#33302A] block">ways to work</span>
            <span className="ed-display text-[#33302A] block">TOGETHER</span>
          </h2>
          <div>
            <p className="font-times text-[18px] text-[#33302A]/75 leading-[1.7] mb-8">
              We&apos;re known for professional, timely communication <span className="font-times-italic italic">and</span> stunning floral artistry, because you shouldn&apos;t have to choose.
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-3">
              <Link href="/services" className="eyebrow text-[#33302A] border-b border-[#33302A] pb-1 hover:text-[#3B4127] hover:border-[#3B4127] transition-colors">
                Prose Weddings
              </Link>
              <Link href="/experience" className="eyebrow text-[#33302A] border-b border-[#33302A] pb-1 hover:text-[#3B4127] hover:border-[#3B4127] transition-colors">
                <span className="font-times-italic italic normal-case tracking-normal">The</span> Experience
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BEHIND THE BLOOMS — Sierra introduced individually on the
          homepage (Kattie gets equal billing on the About page), with the
          monogram straddling the photo/color seam, matching the live site. ─── */}
      <section className="relative grid md:grid-cols-2">
        <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px]">
          <Image src={IMG.bridePortrait} alt="Sierra Bettis, founder of Prose Florals" fill sizes="50vw" className="object-cover" />
        </div>
        <Monogram className="hidden md:block absolute top-10 left-1/2 -translate-x-1/2 w-12 h-14 text-[#F4F1E8]/80 z-10" />
        <div className="bg-[#2A2E1B] flex flex-col justify-center px-8 md:px-20 py-20 md:py-32 relative">
          <p className="eyebrow text-[#C9B7AE] absolute top-8 right-8 md:right-12">Behind the Blooms</p>
          <h2 className="ed-display text-[#F4F1E8] mb-7" style={{ fontSize: "clamp(38px, 5vw, 74px)" }}>
            SIERRA BETTIS
          </h2>
          <p className="font-times text-[18px] text-[#F4F1E8]/78 leading-[1.85] max-w-md mb-9">
            As a passionate wedding florist with a decade of experience, Sierra brings her signature timeless, editorial style and classic, romantic aesthetic to modern love stories.
          </p>
          <Link href="/about" className="eyebrow text-[#F4F1E8] border-b border-[#F4F1E8]/45 pb-1 self-start hover:border-[#C9B7AE] hover:text-[#C9B7AE] transition-colors">
            Learn More about the Prose Team
          </Link>
        </div>
      </section>

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

      {/* ─── OUR APPROACH — pure text statement, no photos. Confirmed by
          the live site: this is a quiet typographic beat, not another
          collage moment. ─── */}
      <section className="section-y-lg container-pf text-center">
        <p className="eyebrow text-[#33302A]/55 mb-10">Our Approach</p>
        <h2 className="ed-display text-[#33302A] leading-[1.05]" style={{ fontSize: "clamp(36px, 6.4vw, 96px)" }}>
          WE MAKE PLAYFUL ARRANGEMENTS <span className="font-times-italic italic font-light">for</span> YOUR MOST{" "}
          <span className="font-times-italic italic">TIMELESS</span> MOMENTS
        </h2>
        <p className="font-times text-[#33302A]/70 text-lg mt-10 max-w-xl mx-auto">
          Our approach is to present stunning pieces by combining our client&apos;s vision boards, modern design aspects, and a little dramatic flare.
        </p>
      </section>

      {/* ─── TESTIMONIAL — circular photo + arrows, matching the live site's
          homepage carousel (tabs are reserved for the Experience page). ─── */}
      <TestimonialCarousel items={homeTestimonials} showTabs={false} />

      {/* ─── FLAT-LAY INTERLUDE — one composed still-life photo, one line
          of type. A quiet pause, not another info block. ─── */}
      <section className="relative h-[60vh] md:h-[74vh] overflow-hidden">
        <Image src={IMG.flatLay} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17130F]/45 via-transparent to-transparent" />
        <div className="absolute bottom-10 md:bottom-14 inset-x-0 text-center px-6">
          <p className="font-galanthia text-[#F4F1E8] text-[32px] md:text-[40px] leading-none">every detail, considered</p>
        </div>
      </section>

      {/* ─── EXPLORE CTA — washed PALE photo collage behind display type,
          matching the live site's light, bleached-out treatment (not a
          dark moody wash). ─── */}
      <section className="relative grid grid-cols-2 md:grid-cols-4 h-[60vh] md:h-[72vh] overflow-hidden bg-[#F4F1E8]">
        {[IMG.brideMoody, IMG.coupleWalk, IMG.brideBrick, IMG.reception].map((src, i) => (
          <div key={i} className="relative opacity-40">
            <Image src={src} alt="" fill sizes="25vw" className="object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-[#F4F1E8]/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h2 className="ed-display text-[#33302A] leading-[1]" style={{ fontSize: "clamp(34px, 6vw, 92px)" }}>EXPLORE</h2>
          <p className="font-times-italic italic text-[#33302A] leading-[1.05]" style={{ fontSize: "clamp(30px, 5.5vw, 82px)" }}>Prose Florals</p>
          <h2 className="ed-display text-[#33302A] leading-[1]" style={{ fontSize: "clamp(34px, 6vw, 92px)" }}>WEDDINGS</h2>
          <Link href="/portfolio" className="mt-9 eyebrow text-[#33302A] border border-[#33302A]/60 px-9 py-3.5 hover:bg-[#33302A] hover:text-white transition-all duration-300">
            View the Portfolio
          </Link>
        </div>
      </section>

      {/* ─── INQUIRE CTA — flat, confident olive block ─── */}
      <section className="section-y-lg px-6 text-center bg-[#3B4127]">
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
