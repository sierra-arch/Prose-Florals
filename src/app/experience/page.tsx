import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import BeginCTA from "@/components/BeginCTA";
import TestimonialCarousel from "@/components/TestimonialCarousel";
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
    step: "01",
    t: "After Your Initial Inquiry",
    b: "We'll hop on a consultation to get to know you, your story, and your vision. We ask how you want your event to FEEL — then get to work building a design brief around it.",
    img: IMG.coupleEmbrace,
  },
  {
    step: "02",
    t: "Receive Your Floral Proposal",
    b: "You'll receive a Custom Design Brief and Floral Proposal complete with imagery, color story, and every arrangement — transparent pricing, no surprises.",
    img: IMG.bouquetLush,
  },
  {
    step: "03",
    t: "Planning, Prepping & Perfecting",
    b: "As your day approaches, we refine every detail, source the freshest seasonal botanics, and coordinate timelines with your planner and venue.",
    img: IMG.meadowInstall,
  },
  {
    step: "04",
    t: "Expert Delivery of Stunning Blooms",
    b: "Our Favorite day!! We get to hand-deliver your bouquets and pin on the boutonnieres, set up the larger installs and place your centerpieces - setting the beautiful scene for your wedding.",
    img: IMG.ceremonyArch,
  },
];

const experienceTestimonials = [
  {
    quote: "Sierra, Kattie, and the whole team were a pleasure to work with from start to finish. They were flexible, professional, and created absolutely stunning florals at a great value.",
    author: "Kara C, Roger Williams Botanical Gardens",
    photo: IMG.coupleSunset,
  },
  {
    quote: "From the moment I first spoke with Sierra at Prose Florals, I knew we were in good hands. The Prose team executed our floral vision flawlessly, creating a truly stunning and dreamy atmosphere.",
    author: "Matt & Anya Mees, Rockport Art Museum",
    photo: IMG.coupleEmbrace,
  },
  {
    quote: "From start to finish I had the most wonderful experience with Prose Florals. She really got me and my style. I felt like I got my dream florals all within my budget.",
    author: "Meaghan and Abel, La Brassa",
    photo: IMG.coupleWalk,
  },
  {
    // Real quote, verbatim — styled with mixed italic + small-caps emphasis
    // mid-sentence, matching the live site's device.
    quote: "I was absolutely blown away by Prose's design. Their work was so stunning and unique!",
    quoteNode: (
      <>
        <em className="font-times-italic">I was absolutely blown away by Prose&rsquo;s design.</em>{" "}
        <span style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.04em" }}>
          THEIR WORK WAS SO STUNNING AND UNIQUE!
        </span>
      </>
    ),
    author: "Caroline Giuliano Photography",
    photo: IMG.bouquetBold,
  },
  {
    // Real quote, verbatim — bold-word emphasis as a third styling option.
    quote: "She totally got it and I put my trust in her. The final product was so stunning while staying in budget.",
    quoteNode: (
      <>
        She totally got it and I put my <strong>trust</strong> in her. The final product was so{" "}
        <strong>stunning</strong> while staying in budget.
      </>
    ),
    author: "Megan McMorris, Northern Spy",
    photo: IMG.brideBouquet,
  },
];

export default function ExperiencePage() {
  return (
    <main className="bg-[#F4F1E8]">
      <PageHero
        image={IMG.coupleForest}
        alt="Romantic forest bridal portrait by Prose Florals"
        italic="EMBRACE THE"
        line2="ROMANCE"
        overlay={0.4}
      />

      {/* Tailored process intro */}
      <section className="section-y-lg container-pf text-center">
        <p className="label text-[#33302A]/50 mb-7">The Experience</p>
        <h2 className="text-[#33302A] leading-[1.08]" style={{ fontSize: "clamp(34px, 5vw, 70px)" }}>
          <span className="display">A TAILORED PROCESS</span>
          <span className="block font-times-italic italic font-light mt-2">iconic results</span>
        </h2>
      </section>

      {/* 01 / 02 / 03 */}
      <section className="container-pf pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-14 md:gap-16">
          {method.map((m, i) => (
            <Reveal key={m.n} delay={i * 120}>
              <p className="font-magnolia text-[#C9B7AE] leading-none mb-4" style={{ fontSize: "clamp(56px, 6vw, 92px)" }}>{m.n}</p>
              <h3 className="label text-[#33302A] mb-4">{m.t}</h3>
              <p className="font-times text-[17px] text-[#33302A]/70 leading-relaxed">{m.b}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonial carousel */}
      <TestimonialCarousel items={experienceTestimonials} />

      {/* How it works — cards floating over a fixed/parallax background */}
      <section className="relative">
        {/* Parallax background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${IMG.coupleForest})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-[#F4F1E8]/55" aria-hidden />

        <div className="relative container-pf section-y-lg">
          <div className="text-center mb-16 md:mb-24">
            <p className="label text-[#33302A]/70">How It Works</p>
          </div>
          <div className="space-y-10 md:space-y-16 max-w-5xl mx-auto">
            {journey.map((j, i) => (
              <Reveal key={j.t}>
                <div className={`grid md:grid-cols-2 bg-[#3B4127] shadow-[0_30px_80px_-30px_rgba(48,43,41,0.5)] overflow-hidden ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[440px]">
                    <Image src={j.img} alt={j.t} fill sizes="50vw" className="object-cover" />
                  </div>
                  <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
                    <p className="font-magnolia text-[#C9B7AE] leading-none mb-5" style={{ fontSize: "clamp(44px, 5vw, 78px)" }}>{j.step}</p>
                    <h3 className="mb-6" style={{ fontSize: "clamp(26px, 3.2vw, 44px)", color: "#F4F1E8" }}>
                      <span className="font-times-italic italic font-light">{j.t}</span>
                    </h3>
                    <p className="font-times text-[17px] leading-relaxed max-w-md" style={{ color: "rgba(249,249,245,0.85)" }}>{j.b}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Wide testimonial band */}
      <section className="relative py-40 px-6 overflow-hidden">
        <Image src={IMG.reception} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#33302A]/62" />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="font-times text-[#F4F1E8] leading-relaxed" style={{ fontSize: "clamp(22px, 3vw, 36px)" }}>
            &ldquo;They understood our vision immediately, and put together an amazing proposal based on our budget and needs. You can tell that she has a <em className="font-times-italic">genuine passion</em> for her work.&rdquo;
          </p>
          <p className="font-times-italic italic text-[#F4F1E8]/80 text-lg mt-6">— Laurel &amp; Ty, The Pierce House</p>
        </div>
      </section>

      {/* Policies */}
      <section className="section-y-lg container-pf">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <p className="label text-[#33302A]/60 mb-4">Good to Know</p>
            <h2 className="text-[#33302A]" style={{ fontSize: "clamp(30px, 4vw, 54px)" }}>
              <span className="display">THE</span> <span className="font-times-italic italic">details</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-14 md:gap-20">
            <Reveal>
              <h3 className="label text-[#33302A] mb-4">Our Rental Library</h3>
              <p className="font-times text-[17px] text-[#33302A]/70 leading-relaxed">
                We maintain a curated collection of vessels for your celebration — vases, compotes, urns, arches, and candles in clear glass and white porcelain. Rentals are returned after your event, keeping your investment focused on the flowers themselves.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h3 className="label text-[#33302A] mb-4">Foam-Free Mechanics</h3>
              <p className="font-times text-[17px] text-[#33302A]/70 leading-relaxed">
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
