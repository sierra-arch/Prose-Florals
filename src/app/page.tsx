import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { IMG, INQUIRY } from "@/lib/images";

const workCards = [
  { photo: IMG.brideParty, label: "Weddings", num: "01" },
  { photo: IMG.coupleSunset, label: "Elopements", num: "02" },
  { photo: IMG.bouquetClose, label: "Florals", num: "03" },
];

export default function Home() {
  return (
    <main className="bg-[#F9F9F5]">
      {/* ─── HERO ─── */}
      <section className="relative w-full h-screen min-h-[620px]">
        <Image
          src={IMG.heroTwoBrides}
          alt="Two brides holding vibrant Prose Florals bouquets in a Boston garden"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10" />
        <p className="absolute bottom-10 right-8 md:right-16 max-w-[280px] text-right font-times italic text-white text-lg md:text-xl leading-snug drop-shadow-sm">
          Boston Area Full Service Wedding Florist for the romantics.
        </p>
      </section>

      {/* ─── FLOWERS with INTENTION ─── */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-14 items-center">
          {/* Left: overlapping photos */}
          <Reveal className="md:w-[48%] relative w-full" as="div">
            <div className="relative aspect-[4/5] w-[80%]">
              <Image src={IMG.coupleKiss} alt="Couple embracing on their wedding day" fill sizes="40vw" className="object-cover" />
            </div>
            <div className="absolute bottom-[-32px] right-0 w-[52%] aspect-[3/4] border-[6px] border-[#F9F9F5] shadow-sm">
              <Image src={IMG.bouquetBold} alt="Bold, colorful bridal bouquet" fill sizes="30vw" className="object-cover" />
            </div>
          </Reveal>

          {/* Right: text */}
          <Reveal className="md:w-[52%] relative pt-8 md:pt-0" delay={120}>
            <div className="absolute -top-4 right-2 w-16 h-16 opacity-60">
              <Image src={IMG.monogram} alt="Prose Florals monogram" fill className="object-contain" />
            </div>
            <h2 className="display text-[#302B29] mb-6" style={{ fontSize: "clamp(42px, 5.5vw, 76px)" }}>
              FLOWERS
              <br />
              <span className="font-times-italic italic font-light">with </span>
              INTENTION
            </h2>
            <p className="label text-[#302B29] mb-6 leading-relaxed">
              We create dynamic floral designs that
              <br className="hidden md:block" /> highlight our couple&apos;s style &amp; story.
            </p>
            <p className="font-times text-[19px] text-[#302B29]/70 leading-relaxed mb-4">
              Welcome to wedding florals done differently. Every couple has their own romance, and we believe that should be reflected in their wedding florals!
            </p>
            <p className="font-times text-[19px] text-[#302B29]/70 leading-relaxed">
              It has been our honor to get to know incredible couples at <em className="font-times-italic">such</em> a special time in their life and help immortalize their romance in the form of intentionally selected florals to highlight their love story.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── ways to work TOGETHER ─── */}
      <section>
        <div className="grid grid-cols-3">
          {workCards.map((c) => (
            <Link key={c.num} href="/portfolio" className="relative aspect-[3/4] overflow-hidden group block">
              <Image src={c.photo} alt={c.label} fill sizes="33vw" className="object-cover transition-transform duration-[900ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-between p-6 md:p-8">
                <div />
                <div>
                  <span className="font-times-italic italic text-white block leading-none" style={{ fontSize: "clamp(24px, 3.5vw, 48px)" }}>Explore</span>
                  <span className="display text-white block tracking-[0.08em]" style={{ fontSize: "clamp(20px, 3vw, 40px)" }}>{c.label}</span>
                </div>
                <p className="label text-white/60">{c.num}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-16 py-16 flex flex-col md:flex-row gap-12 items-end">
          <div className="md:w-1/2">
            <h2 className="text-[#302B29] leading-[1]" style={{ fontSize: "clamp(42px, 6vw, 84px)" }}>
              <span className="font-times-italic italic font-light block">ways to work</span>
              <span className="display block tracking-[0.06em]">TOGETHER</span>
            </h2>
          </div>
          <div className="md:w-1/2">
            <p className="font-times text-[19px] text-[#302B29]/70 leading-relaxed mb-8">
              We&apos;re known for professional, timely communication <em className="font-times-italic">and</em> stunning floral artistry, because you shouldn&apos;t have to choose.
            </p>
            <div className="flex flex-wrap gap-8">
              <Link href="/services" className="label text-[#302B29] border-b border-[#302B29] pb-1 hover:text-[#373F24] hover:border-[#373F24] transition-colors">
                Prose Weddings
              </Link>
              <Link href="/experience" className="font-times-italic italic text-[17px] text-[#302B29] border-b border-[#302B29] pb-1 hover:text-[#373F24] hover:border-[#373F24] transition-colors">
                The Experience
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SIERRA BETTIS green band ─── */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[560px]">
          <Image src={IMG.bridePortrait} alt="Sierra Bettis, founder of Prose Florals" fill sizes="50vw" className="object-cover" />
        </div>
        <div className="bg-[#373F24] flex flex-col justify-center px-8 md:px-16 py-16 relative">
          <div className="absolute top-8 right-8 w-14 h-14 opacity-30">
            <Image src={IMG.monogramWhite} alt="" fill className="object-contain" />
          </div>
          <p className="label text-[#C9B7AE] mb-4">Behind the Blooms</p>
          <h2 className="display text-[#F9F9F5] mb-6" style={{ fontSize: "clamp(40px, 5vw, 68px)" }}>
            SIERRA BETTIS
          </h2>
          <p className="font-times text-[18px] text-[#F9F9F5]/75 leading-relaxed max-w-md mb-8">
            As a passionate wedding florist with a decade of experience, Sierra brings her signature timeless, editorial style and classic, romantic aesthetic to modern love stories.
          </p>
          <Link href="/about" className="label text-[#F9F9F5] border-b border-[#F9F9F5]/50 pb-1 self-start hover:border-[#C9B7AE] hover:text-[#C9B7AE] transition-colors">
            Learn More about the Prose Team
          </Link>
        </div>
      </section>

      {/* ─── WE MAKE PLAYFUL ARRANGEMENTS ─── */}
      <section className="py-28 px-6">
        <Reveal className="text-center max-w-4xl mx-auto mb-16">
          <p className="label text-[#302B29]/60 mb-6">Our Approach</p>
          <h2 className="text-[#302B29] leading-[1.05]" style={{ fontSize: "clamp(34px, 5vw, 66px)" }}>
            <span className="display">WE MAKE PLAYFUL</span>
            <br />
            <span className="display">ARRANGEMENTS </span>
            <span className="font-times-italic italic font-light">for</span>
            <br />
            <span className="display">YOUR MOST</span>
            <br />
            <span className="font-times-italic italic font-light">TIMELESS </span>
            <span className="display">MOMENTS</span>
          </h2>
          <p className="font-times text-[18px] text-[#302B29]/65 leading-relaxed max-w-xl mx-auto mt-8">
            Our approach is to present stunning pieces by combining our client&apos;s vision boards, modern design aspects, and a little dramatic flare.
          </p>
        </Reveal>

        {/* Collaged photos */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 items-center">
          <Reveal className="relative aspect-[3/4] md:mt-16">
            <Image src={IMG.coupleForest} alt="Couple in a moody forest setting" fill sizes="33vw" className="object-cover" />
          </Reveal>
          <Reveal className="relative aspect-[4/5]" delay={100}>
            <Image src={IMG.ceremonyArch} alt="Floral ceremony arch installation" fill sizes="33vw" className="object-cover" />
          </Reveal>
          <Reveal className="relative aspect-[3/4] md:mt-24" delay={200}>
            <Image src={IMG.bouquetLush} alt="Lush bridal bouquet detail" fill sizes="33vw" className="object-cover" />
          </Reveal>
        </div>
      </section>

      {/* ─── Testimonial ─── */}
      <section className="py-20 px-6 bg-[#F9F9F5]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-times text-[#302B29] leading-relaxed" style={{ fontSize: "clamp(22px, 3vw, 34px)" }}>
            &ldquo;From start to finish I had the most wonderful experience with Prose Florals. They were <em className="font-times-italic">exactly</em> what we had envisioned, maybe <em className="font-times-italic">even</em> better!&rdquo;
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#302B29]/15">
              <Image src={IMG.bouquetDetail2} alt="" fill sizes="48px" className="object-cover" />
            </div>
            <div className="text-left">
              <p className="label text-[#302B29]/50 text-[10px]">Kind Words From</p>
              <p className="font-times-italic italic text-[#302B29] text-lg">Meaghan &amp; Abel, La Brassa</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EXPLORE PROSE FLORALS WEDDINGS ─── */}
      <section className="relative">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[IMG.brideMoody, IMG.coupleWalk, IMG.brideBrick, IMG.reception].map((src, i) => (
            <div key={i} className="relative aspect-[3/4]">
              <Image src={src} alt="Prose Florals wedding" fill sizes="25vw" className="object-cover" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black/25 flex flex-col items-center justify-center text-center px-6">
          <h2 className="display text-white leading-[1.05]" style={{ fontSize: "clamp(34px, 6vw, 88px)" }}>
            EXPLORE
          </h2>
          <p className="font-times-italic italic text-white leading-[1.1]" style={{ fontSize: "clamp(30px, 5.5vw, 80px)" }}>
            Prose Florals
          </p>
          <h2 className="display text-white leading-[1.05]" style={{ fontSize: "clamp(34px, 6vw, 88px)" }}>
            WEDDINGS
          </h2>
          <Link
            href="/portfolio"
            className="mt-8 label text-white border border-white/60 px-9 py-3.5 hover:bg-white hover:text-[#302B29] transition-all duration-300"
          >
            View the Portfolio
          </Link>
        </div>
      </section>

      {/* ─── Inquire CTA ─── */}
      <section className="py-24 px-6 text-center bg-[#302B29]">
        <p className="label text-[#C9B7AE] mb-5">Begin Your Journey</p>
        <h2 className="font-times-italic italic text-white font-light mb-4" style={{ fontSize: "clamp(30px, 4vw, 56px)" }}>
          Ready to Celebrate?
        </h2>
        <p className="font-times text-white/65 text-lg italic mb-10 max-w-md mx-auto leading-relaxed">
          Introduce yourself and tell us a little about your event to get started. We look forward to meeting you!
        </p>
        <a
          href={INQUIRY}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block label text-[#302B29] bg-[#F9F9F5] px-12 py-4 hover:bg-[#F0EAE0] transition-colors"
        >
          Inquire Now
        </a>
      </section>
    </main>
  );
}
