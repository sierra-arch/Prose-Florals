import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import BeginCTA from "@/components/BeginCTA";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "The Experience | Prose Florals — Boston Wedding Florist",
  description:
    "A tailored process, iconic results. Discover what it's like to work with Prose Florals — from your initial inquiry to the expert delivery of stunning blooms.",
};

const method = [
  { n: "01", t: "Envision", b: "We create a strong floral visual through descriptive words and photos, translating the feeling you want into a tangible design direction." },
  { n: "02", t: "Compose", b: "We use color contrast, density, and variation to build arrangements with depth, movement, and that signature dramatic flare." },
  { n: "03", t: "Craft", b: "Using botanical structure, composition, movement, and seasonal availability, every piece is hand-built to be unmistakably yours." },
];

const journey = [
  {
    step: "Step One",
    t: "After Your Initial Inquiry",
    b: "We'll hop on a consultation to get to know you, your story, and your vision. We ask how you want your event to FEEL — then get to work building a design brief around it.",
    img: IMG.coupleEmbrace,
    tint: "#C9B7AE",
  },
  {
    step: "Step Two",
    t: "Receive Your Floral Proposal",
    b: "You'll receive a Custom Design Brief and Floral Proposal complete with imagery, color story, and every arrangement — transparent pricing, no surprises.",
    img: IMG.bouquetLush,
    tint: "#373F24",
  },
  {
    step: "Step Three",
    t: "Planning, Prepping & Perfecting",
    b: "As your day approaches, we refine every detail, source the freshest seasonal botanics, and coordinate timelines with your planner and venue.",
    img: IMG.meadowInstall,
    tint: "#B99C6E",
  },
  {
    step: "Step Four",
    t: "Expert Delivery of Stunning Blooms",
    b: "On the day of, we hand-deliver and install every piece at your venue — so all you have to do is soak in the beauty and celebrate.",
    img: IMG.ceremonyArch,
    tint: "#302B29",
  },
];

export default function ExperiencePage() {
  return (
    <main className="bg-[#F9F9F5]">
      <PageHero
        image={IMG.coupleForest}
        alt="Romantic forest bridal portrait by Prose Florals"
        italic="EMBRACE THE"
        line2="ROMANCE"
        overlay={0.4}
      />

      {/* Tailored process intro */}
      <section className="py-24 px-6 text-center">
        <p className="label text-[#302B29]/60 mb-6">The Experience</p>
        <h2 className="text-[#302B29] leading-[1.05]" style={{ fontSize: "clamp(32px, 4.5vw, 64px)" }}>
          <span className="display">A TAILORED PROCESS</span>
          <span className="block font-times-italic italic font-light">iconic results</span>
        </h2>
      </section>

      {/* 01 / 02 / 03 */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {method.map((m, i) => (
            <Reveal key={m.n} delay={i * 120}>
              <p className="font-magnolia text-[#C9B7AE] leading-none mb-4" style={{ fontSize: "clamp(56px, 6vw, 92px)" }}>{m.n}</p>
              <h3 className="label text-[#302B29] mb-4">{m.t}</h3>
              <p className="font-times text-[17px] text-[#302B29]/70 leading-relaxed">{m.b}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6 bg-[#F0EAE0]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-times text-[#302B29] leading-relaxed" style={{ fontSize: "clamp(20px, 2.8vw, 32px)" }}>
            &ldquo;From our first meeting all the way up to our wedding day I was <em className="font-times-italic">so happy</em> I chose them as my florist. I would give Prose Florals 10 stars if I could!&rdquo;
          </p>
          <p className="font-times-italic italic text-[#302B29]/70 text-lg mt-6">— Teressa &amp; Kevin, Indian Pond Country Club</p>
        </div>
      </section>

      {/* 4-step journey */}
      {journey.map((j, i) => (
        <section key={j.t} className="grid md:grid-cols-2">
          <div className={`relative aspect-[4/5] md:aspect-auto md:min-h-[520px] ${i % 2 === 1 ? "md:order-2" : ""}`}>
            <Image src={j.img} alt={j.t} fill sizes="50vw" className="object-cover" />
          </div>
          <div
            className={`flex flex-col justify-center px-8 md:px-16 py-20 ${i % 2 === 1 ? "md:order-1" : ""}`}
            style={{ backgroundColor: j.tint }}
          >
            <p className="label mb-4" style={{ color: i === 3 ? "#C9B7AE" : "rgba(249,249,245,0.85)" }}>{j.step}</p>
            <h3 className="mb-6" style={{ fontSize: "clamp(28px, 3.4vw, 46px)", color: "#F9F9F5" }}>
              <span className="font-times-italic italic font-light">{j.t}</span>
            </h3>
            <p className="font-times text-[17px] leading-relaxed max-w-md" style={{ color: "rgba(249,249,245,0.82)" }}>{j.b}</p>
          </div>
        </section>
      ))}

      {/* Wide testimonial band */}
      <section className="relative py-28 px-6 overflow-hidden">
        <Image src={IMG.reception} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#302B29]/62" />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="font-times text-[#F9F9F5] leading-relaxed" style={{ fontSize: "clamp(22px, 3vw, 36px)" }}>
            &ldquo;They understood our vision immediately, and put together an amazing proposal based on our budget and needs. You can tell that she has a <em className="font-times-italic">genuine passion</em> for her work.&rdquo;
          </p>
          <p className="font-times-italic italic text-[#F9F9F5]/80 text-lg mt-6">— Laurel &amp; Ty, The Pierce House</p>
        </div>
      </section>

      {/* Policies */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="label text-[#302B29]/60 mb-4">Good to Know</p>
            <h2 className="text-[#302B29]" style={{ fontSize: "clamp(30px, 4vw, 54px)" }}>
              <span className="display">THE</span> <span className="font-times-italic italic">details</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Reveal>
              <h3 className="label text-[#302B29] mb-4">Our Rental Library</h3>
              <p className="font-times text-[17px] text-[#302B29]/70 leading-relaxed">
                We maintain a curated collection of vessels for your celebration — vases, compotes, urns, arches, and candles in clear glass and white porcelain. Rentals are returned after your event, keeping your investment focused on the flowers themselves.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h3 className="label text-[#302B29] mb-4">Foam-Free Mechanics</h3>
              <p className="font-times text-[17px] text-[#302B29]/70 leading-relaxed">
                Wherever possible, we design using foam-free mechanics — chicken wire, reusable frogs, and water sources — to create lush, sustainable arrangements that are as kind to the planet as they are beautiful in your photos.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <BeginCTA />
    </main>
  );
}
