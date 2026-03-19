import Image from "next/image";
import Link from "next/link";

const INQUIRY = "https://proseflorals.hbportal.co/public/6525822feddaf700db0fc732/1-Enter_your_details";
const GUIDE = "https://proseflorals.hbportal.co/public/697ca9d706dda90027660811";
const OG = "https://res.cloudinary.com/dyymmcbam/image/upload/prose-florals/portfolio/portfolio-2/og-portfolio/";

const sliderImages = [
  { src: `${OG}Smiling-Bride-floral-bouquet-Boston-Prose-Florals.jpg`, alt: "Smiling bride with bouquet" },
  { src: `${OG}Bride-and-groom-bouquet-sunset-Boston-Florist-Prose-Florals.jpg`, alt: "Couple at sunset" },
  { src: `${OG}Bride-bouquet-lush-botanical-musuem-ballroom-Boston-Florist-Prose-Florals.JPG`, alt: "Lush bridal bouquet" },
  { src: `${OG}Circular-arch-wedding-ceremony-bride-and-groom-Boston-Prose-Florals.JPG`, alt: "Wedding ceremony arch" },
  { src: `${OG}Cascading-elegant-bridal-bouquet-bride-Boston-Florist-Prose-Florals.JPG`, alt: "Cascading bouquet" },
  { src: `${OG}Bride-and-groom-botanical-forest-Boston-Florist-Prose-Florals.JPG`, alt: "Couple in botanical forest" },
];

export default function Home() {
  return (
    <main className="bg-[#F9F9F5] pt-[68px]">

      {/* ── Press Bar ── */}
      <div className="border-b border-[#E2D9CE]">
        <div className="max-w-7xl mx-auto px-8 py-3 flex items-center gap-6">
          <span className="font-serif text-[10px] tracking-[0.2em] uppercase text-[#6B4C35] whitespace-nowrap">
            Work Featured In
          </span>
          <div className="flex-1 h-px bg-[#E2D9CE]" />
          <span className="font-serif text-[10px] tracking-[0.15em] text-[#2C1A0E]/50 whitespace-nowrap hidden sm:block">
            The Knot &nbsp;&middot;&nbsp; Voyage Magazine &nbsp;&middot;&nbsp; New England Bride
          </span>
        </div>
      </div>

      {/* ── Editorial Mosaic + Welcome ── */}
      <section className="pt-12 pb-16 px-4 md:px-12">
        <div className="max-w-5xl mx-auto">

          {/* Photo Mosaic — staggered heights, center rises tallest */}
          <div
            className="grid grid-cols-3 gap-2 md:gap-3 mb-14"
            style={{ height: "clamp(260px, 44vw, 540px)", alignItems: "end" }}
          >
            <div className="relative overflow-hidden" style={{ height: "80%" }}>
              <Image
                src={`${OG}Bride-groom-bouquet-lush-botanical-musuem-ballroom-Boston-Florist-Prose-Florals.JPG`}
                alt="Couple at wedding venue"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="relative overflow-hidden" style={{ height: "100%" }}>
              <Image
                src={`${OG}Smiling-Bride-floral-bouquet-Boston-Prose-Florals.jpg`}
                alt="Bride laughing on her wedding day"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="relative overflow-hidden" style={{ height: "87%" }}>
              <Image
                src={`${OG}Florist-bouquet-flowers-Boston-Florist-Prose-Florals.JPG`}
                alt="Floral arrangement"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Welcome Text */}
          <div className="text-center max-w-xl mx-auto">
            <h1 className="font-display text-2xl md:text-[1.75rem] tracking-[0.18em] uppercase text-[#2C1A0E] mb-5">
              Welcome to Prose Florals
            </h1>
            <p className="font-serif italic text-[#6B4C35] text-xs tracking-[0.1em] mb-7">
              Custom Floral Design &nbsp;&middot;&nbsp; Full-Service Setup &amp; Tear Down &nbsp;&middot;&nbsp; Day-Of Coordination
            </p>
            <p className="font-serif text-[#2C1A0E]/70 text-base md:text-lg leading-relaxed mb-10">
              We design florals that feel like <em>you</em> — intentional, personal, and rooted in beauty.
              Based in Boston, crafting arrangements for couples who believe the details of their wedding day are worth getting right.
            </p>
            <Link
              href="/services"
              className="inline-block font-display text-[10px] tracking-[0.22em] uppercase px-10 py-3.5 bg-[#2C1A0E] text-[#F9F9F5] hover:bg-[#2D4A3E] transition-colors duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3-Column Feature Cards ── */}
      <section className="grid grid-cols-1 md:grid-cols-3">

        {/* Card 1: Curated Florals */}
        <div className="relative overflow-hidden" style={{ height: "560px" }}>
          <Image
            src={`${OG}Bride-and-groom-bouquet-sunset-Boston-Florist-Prose-Florals.jpg`}
            alt="Celebrating couple"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#2D4A3E]/72" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
            <p className="font-display text-[9px] tracking-[0.3em] uppercase text-[#C9B99A] mb-3">Curated Florals</p>
            <h2 className="font-serif italic text-white text-xl md:text-2xl leading-snug mb-4">
              Browse the Work
            </h2>
            <p className="font-serif text-white/75 text-sm leading-relaxed mb-7">
              Explore a collection of thoughtfully designed celebrations — from garden ceremonies to gallery receptions.
            </p>
            <Link
              href="/portfolio"
              className="font-serif italic text-white/90 text-sm underline underline-offset-4 hover:text-[#C9B99A] transition-colors self-start"
            >
              Browse the Portfolio
            </Link>
          </div>
        </div>

        {/* Card 2: Connect */}
        <div className="relative overflow-hidden" style={{ height: "560px" }}>
          <Image
            src={`${OG}Whimsical-moody-forest-Bride-Bridal-Bouquet-Boston-Prose-Florals.JPG`}
            alt="Bride portrait"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#2C1A0E]/70" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
            <p className="font-display text-[9px] tracking-[0.3em] uppercase text-[#C9B99A] mb-3">Connect With Us</p>
            <h2 className="font-serif italic text-white text-xl md:text-2xl leading-snug mb-4">
              Let&apos;s Create Together
            </h2>
            <p className="font-serif text-white/75 text-sm leading-relaxed mb-7">
              Ready to begin? Tell us about your vision and we&apos;ll be in touch with a thoughtful, custom proposal.
            </p>
            <a
              href={INQUIRY}
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif italic text-white/90 text-sm underline underline-offset-4 hover:text-[#C9B99A] transition-colors self-start"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Card 3: Photo only */}
        <div className="relative overflow-hidden" style={{ height: "560px" }}>
          <Image
            src={`${OG}Bride-and-groom-botanical-forest-Boston-Florist-Prose-Florals.JPG`}
            alt="Wedding couple"
            fill
            className="object-cover object-top"
          />
        </div>

      </section>

      {/* ── Portfolio Scroll ── */}
      <section className="py-20 bg-[#F9F9F5]">
        <div className="text-center mb-10 px-6">
          <p className="font-display text-[10px] tracking-[0.25em] uppercase text-[#6B4C35] mb-3">Recent Work</p>
          <h2
            className="font-serif italic text-[#2C1A0E] font-light"
            style={{ fontSize: "clamp(26px, 3.5vw, 44px)" }}
          >
            From the Portfolio
          </h2>
        </div>
        <div
          className="flex gap-3 overflow-x-auto px-6 md:px-14 pb-2"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        >
          {sliderImages.map(({ src, alt }, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 overflow-hidden group"
              style={{ width: "clamp(220px, 24vw, 340px)", aspectRatio: "3/4", scrollSnapAlign: "start" }}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-10 px-6">
          <Link
            href="/portfolio"
            className="font-display text-[10px] tracking-[0.22em] uppercase px-10 py-3 border border-[#2D4A3E] text-[#2D4A3E] hover:bg-[#2D4A3E] hover:text-[#FAF7F2] transition-all duration-200 inline-block"
          >
            View Full Portfolio
          </Link>
        </div>
      </section>

      {/* ── CTA / Investment Guide ── */}
      <section className="py-24 px-6 text-center bg-[#2C1A0E]">
        <p className="font-display text-[10px] tracking-[0.25em] uppercase text-[#C9B99A] mb-4">Begin Your Journey</p>
        <h2
          className="font-serif italic text-white font-light mb-3"
          style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
        >
          Ready to Celebrate?
        </h2>
        <div className="w-8 h-px bg-white/25 mx-auto mb-6" />
        <p className="font-serif text-white/65 text-base italic mb-10 max-w-md mx-auto leading-relaxed">
          Start with our free Investment Guide or reach out directly — we&apos;d love to be part of your story.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={GUIDE}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-[10px] tracking-[0.2em] uppercase px-10 py-3.5 bg-[#FAF7F2] text-[#2C1A0E] hover:bg-[#F0EAE0] transition-colors duration-200"
          >
            Free Investment Guide
          </a>
          <a
            href={INQUIRY}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-[10px] tracking-[0.2em] uppercase px-10 py-3.5 border border-[#FAF7F2]/50 text-[#FAF7F2] hover:border-[#FAF7F2] hover:bg-white/10 transition-all duration-200"
          >
            Inquire Now
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#1A0F08] py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-display text-base tracking-[0.35em] uppercase text-[#F0EAE0] mb-2">
            Prose Florals
          </p>
          <p className="font-display text-[9px] tracking-[0.2em] uppercase text-[#F0EAE0]/35 mb-8">
            Wedding Floristry &nbsp;&middot;&nbsp; Boston, MA
          </p>
          <nav className="flex flex-wrap justify-center gap-8 mb-8">
            {[
              { label: "Portfolio", href: "/portfolio" },
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Reviews", href: "/reviews" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-display text-[9px] tracking-[0.2em] uppercase text-[#F0EAE0]/50 hover:text-[#C9B99A] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <p className="font-serif text-xs text-[#F0EAE0]/25 italic">
            &copy; {new Date().getFullYear()} Prose Florals. All rights reserved.
          </p>
        </div>
      </footer>

    </main>
  );
}
