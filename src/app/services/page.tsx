import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import BeginCTA from "@/components/BeginCTA";
import { IMG, INQUIRY } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services | Prose Florals — Boston Wedding Florist",
  description:
    "Full-service wedding florals, corporate & editorial collaborations, DIY support, and non-profit partnerships from Prose Florals in Boston, MA.",
};

const cards = [
  {
    label: "Playful Designs",
    body: "We combine our clients' vision boards, modern design aspects, and a little dramatic flare to present stunning pieces that feel entirely their own.",
  },
  {
    label: "Sentimental Touches",
    body: "Every arrangement is an opportunity to weave in your story — a nod to a first date, a family heirloom, a favorite garden — so your florals feel deeply personal.",
  },
  {
    label: "Hands-On Planning",
    body: "From your initial inquiry to expert delivery, we're known for professional, timely communication and stunning floral artistry, because you shouldn't have to choose.",
  },
];

const weddingLinks = [
  "Bridal & Bridesmaid Bouquets",
  "Boutonnieres & Corsages",
  "Ceremony Arches & Installations",
  "Reception Centerpieces",
  "Aisle & Altar Arrangements",
  "Cake Florals & Accents",
];

const corporateLinks = [
  "Editorial & Brand Shoots",
  "Corporate Events & Galas",
  "Grand Openings & Launches",
  "Seasonal Office Arrangements",
  "Press & Media Styling",
  "Ongoing Partnerships",
];

export default function ServicesPage() {
  return (
    <main className="bg-[#F9F9F5]">
      <PageHero
        image={IMG.meadowInstall}
        alt="Lush floral installation by Prose Florals"
        italic="EXPLORE the"
        line2="SERVICES"
        overlay={0.38}
      />

      {/* Intro */}
      <section className="py-20 px-6 text-center">
        <p className="label text-[#302B29]/60 mb-6">Boston Area Full Service Wedding Florist</p>
        <p className="font-times text-[#302B29] leading-relaxed max-w-2xl mx-auto" style={{ fontSize: "clamp(20px, 2.6vw, 30px)" }}>
          We create dynamic floral designs that highlight our couple&apos;s <em className="font-times-italic">style &amp; story.</em>
        </p>
      </section>

      {/* Three cards */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 120} className="text-center">
              <div className="relative w-16 h-16 mx-auto mb-6">
                <Image src={IMG.monogram} alt="" fill className="object-contain" />
              </div>
              <p className="label text-[#302B29] mb-4">{c.label}</p>
              <p className="font-times text-[17px] text-[#302B29]/70 leading-relaxed">{c.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6 bg-[#F0EAE0]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-times text-[#302B29] leading-relaxed" style={{ fontSize: "clamp(20px, 2.8vw, 32px)" }}>
            &ldquo;Before Prose Florals I could&apos;ve cared less about my flowers but thanks to Sierra and her team my flowers were and still are one of my most <em className="font-times-italic">favorite things</em> about my special day.&rdquo;
          </p>
          <p className="font-times-italic italic text-[#302B29]/70 text-lg mt-6">— Dominique &amp; Frank, Ocean Cliff</p>
        </div>
      </section>

      {/* Weddings band (mauve) */}
      <section className="grid md:grid-cols-2">
        <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[480px]">
          <Image src={IMG.coupleKiss} alt="Wedding couple with florals" fill sizes="50vw" className="object-cover" />
        </div>
        <div className="bg-[#C9B7AE] flex flex-col justify-center px-8 md:px-16 py-20">
          <p className="label text-[#302B29]/70 mb-4">Prose Weddings</p>
          <h2 className="display text-[#F9F9F5] mb-6" style={{ fontSize: "clamp(34px, 4vw, 60px)" }}>WEDDINGS</h2>
          <p className="font-times text-[17px] text-[#302B29]/80 leading-relaxed mb-7 max-w-md">
            Our signature experience. After an initial consult, we craft a Custom Design Brief and Floral Proposal, then hand-deliver every piece to your venue on the day of. Full-service, start to finish.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
            {weddingLinks.map((l) => (
              <li key={l} className="font-times text-[#302B29]/75 text-[15px] border-b border-[#302B29]/15 py-1.5">{l}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Corporate band (green) */}
      <section className="grid md:grid-cols-2">
        <div className="bg-[#373F24] flex flex-col justify-center px-8 md:px-16 py-20 order-2 md:order-1">
          <p className="label text-[#C9B7AE] mb-4">Partnerships &amp; Collaborations</p>
          <h2 className="display text-[#F9F9F5] mb-6" style={{ fontSize: "clamp(34px, 4vw, 60px)" }}>CORPORATE</h2>
          <p className="font-times text-[17px] text-[#F9F9F5]/75 leading-relaxed mb-7 max-w-md">
            From editorial shoots to brand launches and galas, we partner with photographers, planners, and companies to bring botanical artistry to every occasion.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
            {corporateLinks.map((l) => (
              <li key={l} className="font-times text-[#F9F9F5]/80 text-[15px] border-b border-[#F9F9F5]/20 py-1.5">{l}</li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[480px] order-1 md:order-2">
          <Image src={IMG.centerpiece} alt="Corporate floral centerpiece" fill sizes="50vw" className="object-cover" />
        </div>
      </section>

      {/* Additional offerings */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <p className="label text-[#302B29]/60 mb-4">Additional Offerings</p>
          <h2 className="text-[#302B29]" style={{ fontSize: "clamp(30px, 4vw, 54px)" }}>
            <span className="font-times-italic italic">a little</span> <span className="display">MORE</span>
          </h2>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { t: "DIY Wedding Flowers", tag: "Coming Soon", b: "Expert recipes and instruction for the hands-on couple who wants to arrange their own blooms with our guidance." },
            { t: "Editorial & Instruction", tag: "Coming Soon", b: "Expert recipes and instruction for fellow creatives, photographers, and stylists looking to elevate their shoots." },
            { t: "Non-Profit Collaboration", tag: "By Inquiry", b: "We love giving back. Reach out to explore a mission-driven collaboration with a cause close to your heart." },
          ].map((o, i) => (
            <Reveal key={o.t} delay={i * 110} className="bg-[#F0EAE0] p-10 text-center">
              <p className="label text-[#B99C6E] mb-4">{o.tag}</p>
              <h3 className="font-times text-[#302B29] text-[24px] mb-4">{o.t}</h3>
              <p className="font-times text-[16px] text-[#302B29]/70 leading-relaxed">{o.b}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Inspiration editorial block */}
      <section className="relative py-32 px-6 overflow-hidden">
        <Image src={IMG.beachBridesmaids} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#302B29]/55" />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="label text-[#F9F9F5]/70 mb-6">Where it comes from</p>
          <h2 className="text-[#F9F9F5]" style={{ fontSize: "clamp(38px, 6vw, 84px)" }}>
            <span className="font-times-italic italic font-light">the </span>
            <span className="display">INSPIRATION</span>
          </h2>
          <p className="font-times text-[#F9F9F5]/80 text-lg leading-relaxed mt-7 max-w-xl mx-auto">
            Still moments, architecture, romance, tiny growing things, the ocean, Jane Eyre, kittens, and silky veils. Our work is drawn from the poetry of everyday beauty.
          </p>
        </div>
      </section>

      {/* Ready CTA */}
      <section className="py-24 px-6 text-center bg-[#F9F9F5]">
        <h2 className="text-[#302B29] mb-8" style={{ fontSize: "clamp(34px, 5vw, 72px)" }}>
          <span className="display">READY TO MAKE MAGIC?</span>{" "}
          <span className="font-times-italic italic font-light">let&apos;s connect</span>
        </h2>
        <a href={INQUIRY} target="_blank" rel="noopener noreferrer" className="label text-[#F9F9F5] bg-[#373F24] px-12 py-4 inline-block hover:bg-[#2b3019] transition-colors">
          Inquire Now
        </a>
      </section>
    </main>
  );
}
