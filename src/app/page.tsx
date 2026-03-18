import Image from "next/image";
import Link from "next/link";
import FlowersSection from "@/components/FlowersSection";
import ServicesSection from "@/components/ServicesSection";

const INQUIRY = "https://proseflorals.hbportal.co/public/6525822feddaf700db0fc732/1-Enter_your_details";
const GUIDE = "https://proseflorals.hbportal.co/public/697ca9d706dda90027660811";
const OG = "https://res.cloudinary.com/dyymmcbam/image/upload/prose-florals/portfolio/portfolio-2/og-portfolio/";

// Horizontal sliding portfolio gallery
const slidingGallery = [
  `${OG}Bride-bouquet-bridal-wedding-Boston-Florist-Prose-Florals.JPG`,
  `${OG}Cascading-elegant-bridal-bouquet-bride-Boston-Florist-Prose-Florals.JPG`,
  `${OG}Beach-wedding-reception-bright-bold-Boston-Prose-Florals.JPG`,
  `${OG}Dark-Moody-Bridesmaids-bouquet-Boston-Prose-Florals.JPG`,
  `${OG}Simple-Arch-wedding-ceremony-blush-roses-Prose-Florals-Boston-Florist.jpg`,
  `${OG}Bride-and-bridesmaids-bouquets-lush-Boston-Florist-Prose-Florals.JPG`,
  `${OG}Blush-Bride-with-bridesmaids-bouquets-Boston-Prose-Florals.JPG`,
  `${OG}Beach-wedding-reception-bright-bold-elegant-Boston-Prose-Florals.JPG`,
];

export default function Home() {
  return (
    <main className="bg-[#F9F9F5]">

      {/* ── Hero ── */}
      <section className="relative h-screen overflow-hidden">
        {/* Split images */}
        <div className="absolute inset-0 flex">
          <div className="relative w-1/2 h-full">
            <Image
              src={`${OG}Bold-bridal-bouquet-with-bride-and-groom-Boston-Prose-Florals.jpg`}
              alt="Floral bouquet"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative w-1/2 h-full">
            <Image
              src={`${OG}Bride-and-groom-outside-wedding-Boston-Florist-Prose-Florals.JPG`}
              alt="Wedding couple"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/25" />

        {/* PF monogram — centered at the split */}
        <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-16 h-16 rounded-full border border-white/50 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center">
              <span className="font-display text-[11px] tracking-[0.15em] text-white/80">PF</span>
            </div>
          </div>
        </div>

        {/* Hero text — bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10 text-center px-6 pb-14">
          <h1 className="text-white leading-[0.9] mb-5" style={{ fontSize: "clamp(52px, 9vw, 120px)" }}>
            <span className="font-serif italic font-light">for </span>
            <span className="font-display tracking-[0.04em]">MOMENTS</span>
            <br />
            <span className="font-display tracking-[0.04em]">WORTH CELEBRATING</span>
          </h1>
          <p className="font-serif text-white/75 text-base md:text-lg mb-7 max-w-lg mx-auto">
            Boston Area wedding florist for the modern romantic.<br />
            For florals as timeless as your story.
          </p>
          <Link
            href="/portfolio"
            className="font-serif italic text-white text-base border-b border-white/50 pb-0.5 hover:border-white transition-colors"
          >
            Explore the Work
          </Link>
        </div>

        {/* Down arrow */}
        <div className="absolute bottom-8 right-8 z-10 text-white/50 text-xl">↓</div>
      </section>

      {/* ── Flowers with Intention (auto-rotating) ── */}
      <FlowersSection />

      {/* ── Ways to Work Together (hover cards) ── */}
      <ServicesSection />

      {/* ── Our Mission ── */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={`${OG}Bride-white-forest-moody-Boston-Florist-Prose-Florals.jpg`}
            alt="Our mission"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#2C1A0E]/55" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="font-display text-[10px] tracking-[0.25em] uppercase text-[#C9B99A] mb-4">Our Mission</p>
          <h2
            className="font-serif text-white leading-tight mb-6 italic font-light"
            style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
          >
            Creating with Intention
          </h2>
          <div className="w-8 h-px bg-white/30 mx-auto mb-6" />
          <p className="font-serif text-white/80 text-lg italic leading-relaxed mb-10">
            &ldquo;We believe florals are more than decoration — they are the
            emotional punctuation of your most cherished memories.&rdquo;
          </p>
          <Link
            href="/mission"
            className="font-display text-[10px] tracking-[0.2em] uppercase px-10 py-3 border border-white/50 text-white hover:bg-white/10 transition-all duration-200 inline-block"
          >
            Read More
          </Link>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="py-20 px-6 md:px-16 bg-[#F0EAE0]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-display text-[10px] tracking-[0.25em] uppercase text-[#6B4C35] mb-3">Kind Words</p>
            <h2
              className="font-serif text-[#2C1A0E] leading-tight italic font-light"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Client Reviews
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Prose Florals transformed our wedding into something out of a dream. Every arrangement was breathtaking — exactly what we envisioned, and more.",
                name: "Emily & Chris",
              },
              {
                quote: "From the first consultation to the last petal, the experience was an absolute joy. Our guests are still talking about the flowers months later.",
                name: "Anneke",
              },
            ].map((r) => (
              <div key={r.name} className="bg-[#FAF7F2] p-10">
                <p className="font-script text-4xl text-[#2D4A3E] mb-4 leading-none">&ldquo;</p>
                <p className="font-serif text-lg italic text-[#2C1A0E] leading-relaxed mb-6">
                  {r.quote}
                </p>
                <div className="w-6 h-px bg-[#2C1A0E]/30 mb-4" />
                <p className="font-display text-[10px] tracking-[0.2em] uppercase text-[#6B4C35]">
                  — {r.name}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/reviews"
              className="font-display text-[10px] tracking-[0.2em] uppercase px-10 py-3 border border-[#2C1A0E] text-[#2C1A0E] hover:bg-[#2C1A0E] hover:text-[#FAF7F2] transition-all duration-200 inline-block"
            >
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* ── Portfolio Sliding Gallery ── */}
      <section className="py-20 bg-[#F9F9F5]">
        <div className="text-center mb-10 px-6">
          <p className="font-display text-[10px] tracking-[0.25em] uppercase text-[#6B4C35] mb-3">Our Work</p>
          <h2
            className="font-serif text-[#2C1A0E] leading-tight italic font-light"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            Portfolio
          </h2>
        </div>

        <div
          className="flex gap-3 overflow-x-auto px-6 md:px-16 pb-4"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        >
          {slidingGallery.map((src, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 overflow-hidden group"
              style={{ width: "clamp(240px, 26vw, 400px)", aspectRatio: "3/4", scrollSnapAlign: "start" }}
            >
              <Image
                src={src}
                alt={`Portfolio image ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10 px-6">
          <Link
            href="/portfolio"
            className="font-display text-[10px] tracking-[0.2em] uppercase px-10 py-3 border border-[#2D4A3E] text-[#2D4A3E] hover:bg-[#2D4A3E] hover:text-[#FAF7F2] transition-all duration-200 inline-block"
          >
            View Full Portfolio
          </Link>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 px-6 text-center bg-[#2C1A0E]">
        <p className="font-display text-[10px] tracking-[0.25em] uppercase text-[#C9B99A] mb-4">Begin Your Journey</p>
        <h2
          className="font-serif text-white leading-tight mb-4 italic font-light"
          style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
        >
          Ready to Celebrate?
        </h2>
        <div className="w-8 h-px bg-white/30 mx-auto mb-6" />
        <p className="font-serif text-white/70 text-lg italic mb-10 max-w-md mx-auto">
          Start with our free Investment Guide or reach out directly — we&apos;d love to be part of your story.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={GUIDE}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-[10px] tracking-[0.2em] uppercase px-10 py-3 bg-[#FAF7F2] text-[#2C1A0E] hover:bg-[#F0EAE0] transition-colors duration-200"
          >
            Free Investment Guide
          </a>
          <a
            href={INQUIRY}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-[10px] tracking-[0.2em] uppercase px-10 py-3 border border-[#FAF7F2]/60 text-[#FAF7F2] hover:border-[#FAF7F2] hover:bg-white/10 transition-all duration-200"
          >
            Inquire Now
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#1A0F08] text-[#F0EAE0] py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-12">
            {[
              `${OG}Blush-Bride-Floral-crown-Boston-Prose-Florals.jpg`,
              `${OG}Groom-holding-wild-forest-bridal-bouquet-Boston-Prose-florals.JPG`,
              `${OG}Romantic-Bridal-Bouquet-Blush-Boston-Prose-Florals.jpg`,
              `${OG}Beach-wedding-reception-bright-bold-warm-Boston-Prose-Florals.JPG`,
              `${OG}Whimsical-Bride-Bridal-Bouquet-Boston-Florist-Prose-Florals.JPG`,
              `${OG}Bride-garland-greenery-flower-crown-Prose-Florals-Boston.jpg`,
            ].map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden">
                <Image src={src} alt="" fill className="object-cover opacity-70 hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="font-display text-base tracking-[0.3em] uppercase text-[#F0EAE0] mb-2">
              Prose Florals
            </p>
            <p className="font-display text-[10px] tracking-[0.2em] uppercase opacity-40 mb-8">
              Luxury Wedding Floristry · Boston, MA
            </p>
            <nav className="flex flex-wrap justify-center gap-8 mb-8">
              {[
                { label: "Portfolio", href: "/portfolio" },
                { label: "About", href: "/about" },
                { label: "Our Mission", href: "/mission" },
                { label: "Reviews", href: "/reviews" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-display text-[10px] tracking-[0.2em] uppercase opacity-50 hover:opacity-100 transition-opacity"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <p className="font-serif text-sm opacity-30 italic">
              &copy; {new Date().getFullYear()} Prose Florals. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
}
