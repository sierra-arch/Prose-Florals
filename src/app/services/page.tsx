import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ServicesTestimonials from "@/components/ServicesTestimonials";
import { IMG, INQUIRY, LIVE } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services | Prose Florals — Boston Wedding Florist",
  description:
    "Full-service wedding florals, corporate & editorial collaborations, DIY support, and non-profit partnerships from Prose Florals in Boston, MA.",
};

const cards = [
  {
    label: "Playful Designs",
    img: LIVE.knownPlayful,
    body: "We create arrangements that feel timeless — designed to look just as stunning in your photos twenty years from now.",
  },
  {
    label: "Sentimental Touches",
    img: LIVE.knownSentimental,
    body: "Every detail is intentional, because the best florals don't just decorate a room — they tell your story.",
  },
  {
    label: "Hands-On Planning",
    img: LIVE.knownHandsOn,
    body: "From your first inquiry to the moment you walk down the aisle, we're with you every step of the way!",
  },
];

const testimonials = [
  {
    names: "Dominique & Frank",
    quoteLead: "I cannot say enough positive things about Prose Florals.",
    quoteRest:
      "As someone who didn't know much about flowers I didn't know what to expect and every florist I spoke with made me feel more clueless. Not Sierra though! She took so much time to do questions about colors and styles and even how I wanted to make my guests feel. It made me feel so excited. Then when I got my proposal I couldn't stop showing people. Upon delivery it was even better then I could imagine. Before Prose Florals I could've cared less about my flowers but thanks to Sierra and her team my flowers were and still are one of my most favorite things about my special day. I really can't thank Prose enough and I would highly recommend them to anyone!",
    bg: LIVE.testimonialBg1,
  },
  {
    names: "Adi & Shuham",
    quoteLead: "I had a wonderful experience with Prose Florals!",
    quoteRest:
      "Really unparalleled. Sierra was so thoughtful in her design; I wanted big and bold with deep pinks and purples, and it turned out even better than I imagined. Truly just a pleasure to work with. Creative and flexible, she really takes the time to understand your vision. Warmly recommend!",
    bg: LIVE.testimonialBg2,
  },
  {
    names: "Anneke & Matt",
    quoteLead: "Sierra and the Prose team were so great to work with!",
    quoteRest:
      "The consultation helped us figure out what our vision was for florals and they took it from there. They were responsive to emails and open to revise the colors and adjust the items as needed. They were timely day of the wedding and delivered beautiful flowers! If you're looking for a wildflower, whimsical look they do it so well! Our family members couldn't stop talking about how beautiful the flowers were. Highly recommend!",
    bg: LIVE.testimonialBg3,
  },
  {
    names: "Megan & Nico",
    quoteLead: "Working with Sierra and her team was a pleasure from start to finish!",
    quoteRest:
      "I didn't have many specifics in mind for my wedding florals but as I described the vibe and look I wanted, Sierra totally got it and so I put my trust in her to bring it to life! She remained flexible throughout the entire planning process as we added and removed things or details changed and was always so easy to talk to. The final product was so stunning, while staying in budget I was comfortable with, and I couldn't have asked for anything better!",
    bg: LIVE.testimonialBg4,
  },
];

const quickLinks = ["VIEW PORTFOLIO", "MORE INFORMATION", "INQUIRE FOR AVAILABILITY"];

function LinkRow({ dark = false }: { dark?: boolean }) {
  const line = dark ? "border-[#F4F1E8]/25" : "border-[#33302A]/20";
  const text = dark ? "text-[#F4F1E8]" : "text-[#33302A]";
  return (
    <div className={`border-t ${line} mt-10`}>
      {quickLinks.map((l) => (
        <Link
          key={l}
          href={l === "INQUIRE FOR AVAILABILITY" ? "/contact" : "/portfolio"}
          className={`flex items-center justify-between border-b ${line} py-4 label ${text} hover:opacity-70 transition-opacity`}
        >
          {l}
          <span aria-hidden>&#8594;</span>
        </Link>
      ))}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="bg-[#F4F1E8]">
      {/* ─── Hero — real B&W street photo, heavily washed, matching the
          live site exactly ─── */}
      <section className="relative w-full h-[92vh] min-h-[640px] overflow-hidden bg-[#33302A]">
        <Image src={LIVE.servicesHero} alt="Groom and bride walking a city street" fill priority sizes="100vw" className="object-cover grayscale" />
        <div className="absolute inset-0 bg-[#F4F1E8]/55" />
        <div className="absolute inset-x-0 bottom-16 md:bottom-24 px-6 md:px-16">
          <h1 className="text-[#F4F1E8] leading-[0.95]" style={{ fontSize: "clamp(56px, 11vw, 150px)" }}>
            <span className="display block">EXPLORE</span>
            <span className="block">
              <span className="font-times-italic italic font-light">the</span> <span className="display">SERVICES</span>
            </span>
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-y-lg container-pf text-center">
        <p className="font-times text-[#33302A] leading-[1.4] max-w-3xl mx-auto" style={{ fontSize: "clamp(24px, 3vw, 38px)" }}>
          We help bride + grooms fulfill their floral visions by creating living art to grace their special days.{" "}
          <span className="font-times-italic italic">To flower one of life&apos;s most beautiful memories.</span>
        </p>
        <p className="font-sans-pf text-[#33302A]/70 text-[16px] leading-relaxed max-w-xl mx-auto mt-10">
          We offer a range of floral support options to help our clients get the most for their desired investment. Whether you want full service florals for your big day, or are looking to do them yourself, view the options below to see which is right for your event.
        </p>
      </section>

      {/* What we're known for */}
      <section className="container-pf pb-24 md:pb-32">
        <p className="label text-[#33302A]/60 mb-12 md:mb-16">What We&apos;re Known For</p>
        <div className="grid md:grid-cols-3 gap-10 md:gap-10">
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 110}>
              <div className="relative aspect-[4/5] mb-6 plate">
                <Image src={c.img} alt={c.label} fill sizes="33vw" className="object-cover" />
              </div>
              <h3 className="font-times text-2xl text-[#33302A] mb-3 uppercase leading-snug">{c.label}</h3>
              <p className="font-sans-pf text-[15px] text-[#33302A]/70 leading-relaxed">{c.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Single pull-quote (matches the "WHAT WE'RE KNOWN FOR" carousel item) */}
      <section className="pb-24 md:pb-32 container-pf">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-times-italic italic text-[#33302A]" style={{ fontSize: "clamp(20px, 2.6vw, 30px)" }}>
            &ldquo;I was absolutely blown away by Prose&apos;s design—
          </p>
          <p className="uppercase text-[#33302A] mt-2" style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(20px, 2.6vw, 30px)" }}>
            their work was so stunning and unique!&rdquo;
          </p>
          <p className="label text-[#33302A]/50 mt-6">— Caroline Giuliano</p>
        </div>
      </section>

      {/* Weddings band (taupe) */}
      <section className="grid md:grid-cols-2">
        <div className="bg-[#C9B7AE] flex flex-col justify-center px-8 md:px-20 py-24 md:py-32">
          <h2 className="display text-[#F4F1E8] mb-8" style={{ fontSize: "clamp(40px, 5vw, 72px)" }}>WEDDINGS</h2>
          <p className="font-sans-pf text-[16px] text-[#F4F1E8]/90 leading-relaxed max-w-md">
            Our wedding packages begin with a consult lead by our expert floral designers through our design brief to create your own floral story. We will build your Custom Design Brief and Floral Proposal to best serve your event&apos;s needs. Then we deliver your hand crafted floral pieces to your venue.
          </p>
          <LinkRow />
        </div>
        <div className="relative aspect-[4/5] md:aspect-[4/3]">
          <Image src={LIVE.weddingsBand} alt="Bridesmaids in dusty blue holding bouquets" fill sizes="50vw" className="object-cover" />
        </div>
      </section>

      {/* Corporate band (olive) */}
      <section className="grid md:grid-cols-2">
        <div className="bg-[#3B4127] flex flex-col justify-center px-8 md:px-20 py-24 md:py-32 order-2 md:order-1">
          <h2 className="display text-[#F4F1E8] mb-8" style={{ fontSize: "clamp(40px, 5vw, 72px)" }}>CORPORATE</h2>
          <p className="label text-[#C9B7AE] mb-3">Partnerships &amp; Collaborations</p>
          <p className="font-sans-pf text-[16px] text-[#F4F1E8]/90 leading-relaxed max-w-md">
            We work with a limited number of collaborations with local vendors. Looking to partner with a dynamic floral team, please use the link below to introduce yourself!
          </p>
          <LinkRow dark />
        </div>
        <div className="relative aspect-[4/5] md:aspect-[4/3] order-1 md:order-2">
          <Image src={LIVE.corporateBand} alt="Wine and a single ranunculus on a table" fill sizes="50vw" className="object-cover" />
        </div>
      </section>

      {/* Named-tab testimonial carousel with background photos */}
      <ServicesTestimonials items={testimonials} />

      {/* Additional offerings */}
      <section className="section-y-lg container-pf">
        <div className="flex items-end justify-between mb-14 md:mb-16">
          <div />
          <h2 className="font-times-italic italic text-[#33302A]" style={{ fontSize: "clamp(28px, 3.4vw, 46px)" }}>
            Additional Offerings:
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {[
            { t: "DIY Wedding Flowers Coming Soon", img: LIVE.offeringDiy, b: "We are honored to help you create wedding flowers with ease! Step by step instructions for DIY Brides." },
            { t: "Editorial Projects", img: LIVE.offeringEditorial, b: "Our heart will always go to the most exciting palettes and ideas - let us know about your project and allow us to help!" },
            { t: "Non-Profit Collaboration", img: LIVE.offeringNonprofit, b: "We love working with non-profits and creating florals for a purpose! Please reach out and tell us about your event!" },
          ].map((o, i) => (
            <Reveal key={o.t} delay={i * 110}>
              <p className="label text-[#33302A] mb-3">{o.t}</p>
              <p className="font-sans-pf text-[15px] text-[#33302A]/70 leading-relaxed mb-6">{o.b}</p>
              <div className="relative aspect-[3/4] plate">
                <Image src={o.img} alt={o.t} fill sizes="33vw" className="object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Inspiration — real photos scattered around/through the display type */}
      <section className="relative container-wide py-24 md:py-32 overflow-hidden">
        <div className="hidden md:block absolute top-0 left-0 w-[22%] aspect-[3/4]">
          <Image src={LIVE.inspirationCastle} alt="A castle archway" fill sizes="22vw" className="object-cover" />
        </div>
        <div className="hidden md:block absolute top-0 right-0 w-[20%] aspect-[3/4]">
          <Image src={LIVE.inspirationOcean} alt="Bride overlooking the ocean" fill sizes="20vw" className="object-cover" />
        </div>
        <div className="hidden md:block absolute top-[8%] left-[38%] w-[28%] aspect-[4/3] z-10 plate">
          <Image src={LIVE.inspirationDress} alt="Embroidered floral dress in a garden" fill sizes="28vw" className="object-cover" />
        </div>
        <div className="text-center relative py-16 md:py-20">
          <h2 className="text-[#33302A] leading-[0.92]" style={{ fontSize: "clamp(56px, 9vw, 120px)" }}>
            <span className="font-times-italic italic font-light block">the</span>
            <span className="display block">INSPIRATION</span>
          </h2>
          <p className="font-times-italic italic text-[#33302A]/70 leading-relaxed mt-10 max-w-md mx-auto" style={{ fontSize: "clamp(17px, 1.8vw, 20px)" }}>
            Still Moments / Architecture / Romance<br />
            Tiny Growing Things / The Ocean /<br />
            Jane Eyre / Kittens / Silky Veils
          </p>
        </div>
      </section>

      {/* Pure full-bleed photo breather — no headline, no overlay text */}
      <div className="grid grid-cols-2 aspect-[21/9] w-full overflow-hidden">
        <div className="relative">
          <Image src={LIVE.inspirationDress} alt="" fill sizes="50vw" className="object-cover" />
        </div>
        <div className="relative">
          <Image src={IMG.bouquetBold} alt="" fill sizes="50vw" className="object-cover" />
        </div>
      </div>

      {/* Ready CTA — paired underlined text links, no button */}
      <section className="section-y-lg px-6 text-center bg-[#F4F1E8]">
        <h2 className="text-[#33302A] mb-8" style={{ fontSize: "clamp(34px, 5vw, 72px)" }}>
          READY TO MAKE MAGIC?<br />LET&apos;S CONNECT.
        </h2>
        <p className="font-sans-pf text-[#33302A]/70 max-w-md mx-auto mb-8">
          We&apos;re known for professional, timely communication <em className="font-times-italic">and</em> stunning artistry, because you shouldn&apos;t have to choose.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
          <Link href="/portfolio" className="label text-[#33302A] border-b border-[#33302A] pb-1 hover:text-[#3B4127] hover:border-[#3B4127] transition-colors">
            View the Portfolio
          </Link>
          <a href={INQUIRY} target="_blank" rel="noopener noreferrer" className="label text-[#33302A] border-b border-[#33302A] pb-1 hover:text-[#3B4127] hover:border-[#3B4127] transition-colors">
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
