import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import BeginCTA from "@/components/BeginCTA";
import Monogram from "@/components/Monogram";
import ExperienceFAQ from "@/components/ExperienceFAQ";
import ExperienceTestimonial from "@/components/ExperienceTestimonial";
import { IMG, LIVE } from "@/lib/images";

export const metadata: Metadata = {
  title: "The Experience | Prose Florals — Boston Wedding Florist",
  description:
    "A tailored process, iconic results. Discover what it's like to work with Prose Florals — from your initial inquiry to the expert delivery of stunning blooms.",
};

const method = [
  { n: "01", t: "CREATE A FLORAL VISION", b: "Our first step is to create a strong floral visual through descriptive words and photos.", img: LIVE.methodVision },
  { n: "02", t: "DECIDE ON A COLOR SCHEME", b: "We then use color contrast, density, and variation to compliment the floral vision.", img: LIVE.methodColor },
  { n: "03", t: "UTILIZE FLORAL INGREDIENTS TO ESTABLISH VISION", b: "Using botanical structure, composition, movement, and availability we build designs that make your visions a reality.", img: LIVE.methodIngredients },
];

const journey = [
  {
    step: "01",
    t: "After Your Initial Inquiry",
    b: "Discuss your vision with a designer! We will guide you with specific questions to co-create a gorgeous floral plan based on your style, floral preferences, and venue needs!",
    img: LIVE.journeyInquiry,
    bg: "#F4F1E8",
    dark: false,
  },
  {
    step: "02",
    t: "Receive your Floral Proposal",
    b: "Our Proposals are complete with a formal design brief, floral palette, inspiration photos, and an itemized list of custom floral pieces. Our aim is for you to envision what it would look like to bring your floral design vision to life!",
    img: LIVE.journeyProposal,
    bg: "#D8D2C2",
    dark: false,
  },
  {
    step: "03",
    t: "Planning, Prepping & Perfecting",
    b: "Over our months of working together, anticipating your Big Day, we will continue tweaking your designs and adding/subtracting pieces to make your floral plan absolutely perfect!",
    img: LIVE.journeyPlanning,
    bg: "#8C6B6A",
    dark: true,
  },
  {
    step: "04",
    t: "Expert Delivery of Stunning Blooms",
    b: "Our Favorite day!! We get to hand-deliver your bouquets and pin on the boutonnieres, set up the larger installs and place your centerpieces - setting the beautiful scene for your wedding.",
    img: LIVE.journeyDelivery,
    bg: "#4A1420",
    dark: true,
  },
];

const experienceTestimonials = [
  {
    quote: "I could not be happier with the job that Prose Florals did for our wedding. — Sierra asked a ton of smart questions during our initial consult, was totally upfront about pricing, provided excellent communication, and overall just “got” our vision. If I could give Prose more than 5 stars, I would!",
    author: "Laura + Ben, Past Clients",
    photo: LIVE.experienceTestimonialPhoto,
  },
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
    quote: "She totally got it and I put my trust in her. The final product was so stunning while staying in budget.",
    author: "Megan McMorris, Northern Spy",
    photo: IMG.brideBouquet,
  },
];

export default function ExperiencePage() {
  return (
    <main className="bg-[#F4F1E8]">
      {/* Hero — headline + photo split, deep wine + grain */}
      <section className="grid md:grid-cols-2 bg-[#4A1420]">
        <div className="relative overflow-hidden flex items-center px-8 md:px-16 py-24 md:py-0">
          <div className="grain-overlay" />
          <div className="romantic-glow" />
          <h1 className="relative z-10 text-[#F4F1E8] leading-[0.98]" style={{ fontSize: "clamp(48px, 7.5vw, 110px)" }}>
            <span className="display">EMBRACE</span>
            <br />
            <span className="font-times-italic italic font-light">THE</span>{" "}
            <span className="display">ROMANCE</span>
          </h1>
        </div>
        <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[640px]">
          <Image src={LIVE.experienceHero} alt="Bride and groom embracing at a stone archway" fill priority sizes="50vw" className="object-cover" />
        </div>
      </section>

      {/* Continuation — intro copy + second photo, same dark band */}
      <section className="grid md:grid-cols-2 bg-[#4A1420]">
        <div className="relative overflow-hidden flex items-center px-8 md:px-16 py-20 md:py-28">
          <div className="grain-overlay" />
          <div className="relative z-10">
            <p className="label text-[#F4F1E8]/60 mb-6">The Prose Florals Experience</p>
            <p className="font-times text-[17px] leading-relaxed max-w-md" style={{ color: "rgba(249,249,245,0.9)" }}>
              Our desire is for each of our clients to feel listened to, appreciated, and wowed by the designs we create together. We are honored to walk with our clients from first contact to post-event celebration.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[520px]">
          <Image src={LIVE.romanceClose} alt="Bride and groom, veil flowing" fill sizes="50vw" className="object-cover" />
        </div>
      </section>

      {/* Tailored process — photo + monogram, text right */}
      <section className="section-y-lg container-pf">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 md:gap-20 items-center">
          <Reveal>
            <div className="relative">
              <div className="relative aspect-[4/5] w-full max-w-md">
                <Image src={LIVE.tailoredProcess} alt="Bride holding a blush and white bouquet" fill sizes="(min-width: 768px) 40vw, 90vw" className="object-cover" />
              </div>
              <Monogram className="absolute bottom-4 left-4 w-16 h-20 text-[#F4F1E8]" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="label text-[#33302A]/50 mb-6">Boston Area Event Florals</p>
            <h2 className="text-[#33302A] leading-[1.08] mb-8" style={{ fontSize: "clamp(32px, 4.4vw, 60px)" }}>
              <span className="font-times-italic italic font-light">A tailored process</span>
              <br />
              <span className="font-times-italic italic font-light">— iconic results.</span>
            </h2>
            <p className="font-sans-pf text-[17px] text-[#33302A]/75 leading-relaxed mb-6">
              Wedding season is our favorite time of year! We get to create stunning styles, work at gorgeous venues with talented vendors, and see our clients on one of the most special days of their lives.
            </p>
            <p className="font-sans-pf text-[17px] text-[#33302A]/75 leading-relaxed">
              YOU HAVE A DEDICATED FLORAL TEAM BESIDE YOU it is our joy to create with you!
            </p>
          </Reveal>
        </div>
      </section>

      {/* 01 / 02 / 03 — alternating photo/text rows */}
      <section className="container-pf pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto space-y-24 md:space-y-32">
          {method.map((m, i) => (
            <Reveal key={m.n}>
              <div className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div>
                  <p className="font-times text-[#33302A] leading-none mb-6" style={{ fontSize: "clamp(56px, 6vw, 88px)" }}>{m.n}</p>
                  <h3 className="label text-[#33302A] mb-5">{m.t}</h3>
                  <p className="font-sans-pf text-[17px] text-[#33302A]/70 leading-relaxed max-w-sm">{m.b}</p>
                </div>
                <div className="relative aspect-[4/3] w-full">
                  <Image src={m.img} alt={m.t} fill sizes="(min-width: 768px) 45vw, 90vw" className="object-cover" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <ExperienceTestimonial items={experienceTestimonials} />

      {/* How it works — cards floating over a parallax background */}
      <section className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${LIVE.howItWorksBg})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-[#F4F1E8]/25" aria-hidden />

        <div className="relative container-pf section-y-lg">
          <div className="mb-16 md:mb-24">
            <p className="label text-[#33302A]">How It Works</p>
          </div>
          <div className="space-y-10 md:space-y-16 max-w-5xl mx-auto">
            {journey.map((j, i) => (
              <Reveal key={j.t}>
                <div
                  className={`grid md:grid-cols-2 shadow-[0_30px_80px_-30px_rgba(48,43,41,0.5)] overflow-hidden ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
                  style={{ backgroundColor: j.bg }}
                >
                  <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[440px]">
                    <Image src={j.img} alt={j.t} fill sizes="50vw" className="object-cover" />
                  </div>
                  <div className="relative overflow-hidden flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
                    {j.bg === "#4A1420" && <div className="grain-overlay" />}
                    <p className="relative z-10 font-sans-pf text-[15px] mb-5" style={{ color: j.dark ? "rgba(249,249,245,0.7)" : "rgba(51,48,42,0.55)" }}>{j.step}</p>
                    <h3 className="relative z-10 mb-6" style={{ fontSize: "clamp(26px, 3.2vw, 44px)", color: j.dark ? "#F4F1E8" : "#33302A" }}>
                      {j.t}
                    </h3>
                    <p className="relative z-10 font-sans-pf text-[17px] leading-relaxed max-w-md" style={{ color: j.dark ? "rgba(249,249,245,0.85)" : "rgba(51,48,42,0.7)" }}>{j.b}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Wide two-tier quote */}
      <section className="relative py-32 md:py-44 px-6 overflow-hidden">
        <Image src={LIVE.bigQuoteBg} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#4A1420]/50" />
        <div className="grain-overlay" />
        <div className="romantic-glow" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="font-times italic text-[#F4F1E8]" style={{ fontSize: "clamp(24px, 3.6vw, 44px)", lineHeight: 1.25 }}>
            &ldquo;THEY UNDERSTOOD OUR VISION IMMEDIATELY — AND PUT TOGETHER AN AMAZING PROPOSAL BASED ON OUR BUDGET AND NEEDS.&rdquo;
          </p>
          <p className="font-sans-pf text-[#F4F1E8]/85 text-[16px] leading-relaxed mt-10 max-w-2xl mx-auto">
            Sierra was a dream to work with, from beginning to end! You can tell that she has a genuine passion for her work, and that she LOVES what she does. She was so kind throughout the entire process! We got so many wonderful compliments on our flowers that day. I would recommend her to everyone!
          </p>
          <p className="label text-[#F4F1E8]/70 mt-6">— Laurel and Ty</p>
        </div>
      </section>

      {/* FAQ */}
      <ExperienceFAQ photoA={LIVE.faqMarigolds} photoB={LIVE.faqCastle} />

      <BeginCTA image={LIVE.experienceClosingCta} />
    </main>
  );
}
