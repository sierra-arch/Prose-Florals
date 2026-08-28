import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import BeginCTA from "@/components/BeginCTA";
import { IMG, LIVE } from "@/lib/images";

export const metadata: Metadata = {
  title: "About | Prose Florals — Boston Wedding Florist",
  description:
    "Known for our modern-romantic style, relaxed approach, and iconic silhouettes. Meet Sierra & Kattie, the team behind Prose Florals in Boston, MA.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#F4F1E8]">
      {/* ─── Intro + staggered photo collage, real photos from the live site ─── */}
      <section className="title-zone container-pf pb-0">
        <h1 className="title-hero text-[#33302A] text-center">
          ABOUT<br />PROSE FLORALS
        </h1>
      </section>

      <section className="section-y container-pf">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans-pf text-[19px] md:text-[21px] text-[#33302A]/75 leading-[1.7]">
            Known for our modern-romantic style, relaxed approach, and iconic silhouettes, our Boston-based studio sits at the cross-section of artfully curated flair and the kind of expertly-designed floral pieces you&apos;ll be proud to have in your wedding albums forever.
          </p>
          <p className="font-sans-pf text-[19px] md:text-[21px] text-[#33302A]/75 leading-[1.7] mt-6">
            We believe great stories transcend mediums, classic style is eternal, and Playa Banca roses never go out of style.
          </p>
        </div>
      </section>

      {/* ─── Two client pull-quotes, mixed styling (plain italic / small caps) ─── */}
      <section className="container-pf pb-20 md:pb-28">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-10 sm:gap-16 text-center sm:text-left">
          <div>
            <p className="font-times-italic italic text-[#33302A] text-xl leading-snug">
              &ldquo;Fantastic experience with Prose Florals all around!&rdquo;
            </p>
            <p className="label text-[#33302A]/50 mt-4">— Pieter + Jasmine</p>
          </div>
          <div>
            <p className="font-times-italic italic text-[#33302A] text-xl leading-snug uppercase">
              &ldquo;Sierra, Katie, and the whole team were a pleasure to work with from start to finish.&rdquo;
            </p>
            <p className="label text-[#33302A]/50 mt-4">— Kara + Shane</p>
          </div>
        </div>
      </section>

      {/* ─── OUR STYLE (taupe) ─── */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-[4/5] md:aspect-[4/3]">
          <Image src={LIVE.ourStyleBouquet} alt="A white and blue wedding bouquet" fill sizes="50vw" className="object-cover" />
        </div>
        <div className="bg-[#C9B7AE] flex flex-col justify-center px-8 md:px-20 py-24 md:py-36">
          <h2 className="text-[#F4F1E8] leading-[0.95] mb-7">
            <span className="font-times-italic italic block" style={{ fontSize: "clamp(44px, 5vw, 78px)" }}>OUR</span>
            <span className="display block" style={{ fontSize: "clamp(40px, 4.5vw, 70px)" }}>STYLE</span>
          </h2>
          <p className="font-sans-pf text-[17px] text-[#F4F1E8] leading-relaxed max-w-md">
            As flowers are the poetry that brings beauty to the world, we are the <em className="font-times-italic">PROSE</em> that arranges it in a way that makes it relatable. The flowers bring the beauty, we bring the structure. We love to think of ourselves as working with the florals, together creating emotion, inspiration, and joy!
          </p>
        </div>
      </section>

      {/* ─── OUR STORY (white + photo) ─── */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#F4F1E8] flex flex-col justify-center px-8 md:px-20 py-24 md:py-36">
          <h2 className="text-[#33302A] leading-[0.95] mb-7">
            <span className="font-times-italic italic block" style={{ fontSize: "clamp(44px, 5vw, 78px)" }}>OUR</span>
            <span className="display block" style={{ fontSize: "clamp(40px, 4.5vw, 70px)" }}>STORY</span>
          </h2>
          <p className="font-sans-pf text-[17px] text-[#33302A]/75 leading-relaxed max-w-md">
            It all started with a pile of wedding magazines and a love of botanical sculpture. We&apos;re a Wedding and Events Florist based in Boston, MA. Passion burns out of everything we do here. Each bloom is carefully selected, every client appreciated, each event prioritized.
          </p>
        </div>
        <div className="relative aspect-[4/5] md:aspect-[4/3]">
          <Image src={LIVE.ourStoryCouple} alt="Couple embracing with their wedding bouquet" fill sizes="50vw" className="object-cover" />
        </div>
      </section>

      {/* ─── OUR METHOD (dark) ─── */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-[4/5] md:aspect-[4/3] order-1">
          <Image src={IMG.meadowInstall} alt="A lush floral installation by Prose Florals" fill sizes="50vw" className="object-cover" />
        </div>
        <div className="bg-[#33302A] flex flex-col justify-center px-8 md:px-20 py-24 md:py-36 order-2">
          <h2 className="text-[#F4F1E8] leading-[0.95] mb-7">
            <span className="font-times-italic italic block" style={{ fontSize: "clamp(44px, 5vw, 78px)" }}>OUR</span>
            <span className="display block" style={{ fontSize: "clamp(40px, 4.5vw, 70px)" }}>METHOD</span>
          </h2>
          <p className="font-sans-pf text-[17px] text-[#F4F1E8]/85 leading-relaxed max-w-md">
            We do not simply match our recommended floral choices to your bridesmaid&apos;s dresses. We take your whole event into our design philosophy, and build a design brief that captures and ADDS to your current aesthetic. During your consultation, we ask how you want your event to FEEL, and select botanics that support that vision.
          </p>
        </div>
      </section>

      {/* ─── Sierra bio — real childhood photo + real signature-style close ─── */}
      <section className="section-y-lg container-pf">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[220px_1fr] gap-10 md:gap-16 items-start">
          <Reveal>
            <div className="relative aspect-square w-full max-w-[220px]">
              <Image src={LIVE.sierraChildhood} alt="Sierra as a child, holding wildflowers" fill sizes="220px" className="object-cover" />
            </div>
            <p className="font-galanthia text-[#33302A] text-[34px] leading-[1.1] mt-6">Much love,<br />Sierra</p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            <Reveal delay={80}>
              <p className="label text-[#33302A] mb-6">Sierra&apos;s Wedding Flower History</p>
              <div className="space-y-4 font-sans-pf text-[16px] text-[#33302A]/75 leading-relaxed">
                <p>
                  From my first wild clover, babydoll ceremony, to the blissful moment when I walked down the aisle with the love of my life, wedding flowers have been part of my story for decades.
                </p>
                <p>
                  On the eve of my own wedding in August 2020, my phenomenal bridesmaids and I came together to assemble the floral arrangements. It was a cherished moment, an intimate memory that adds an extra layer of warmth and sentiment to our wedding weekend.
                </p>
                <p>
                  This journey of floral design has been a delightful one, creating stunning arrangements for friends, family, and clients, each with their own unique and diverse visions. It&apos;s more than just a job; it&apos;s a heartfelt privilege to contribute to people&apos;s big days. I find immense gratitude in the beauty I get to create, and I feel truly blessed to call this my livelihood.
                </p>
              </div>
            </Reveal>
            <Reveal delay={160} className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] col-span-1 plate">
                <Image src={LIVE.sierraCoupleChair} alt="Bride and groom embracing" fill sizes="25vw" className="object-cover" />
              </div>
              <div className="relative aspect-[3/4] col-span-1 plate">
                <Image src={IMG.coupleEmbrace} alt="Two brides embracing" fill sizes="25vw" className="object-cover" />
              </div>
              <div className="relative aspect-[16/9] col-span-2 plate">
                <Image src={LIVE.sierraBridesHug} alt="Bridal party in mauve gowns" fill sizes="50vw" className="object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Kattie bio — real photos: piano, mom, makeup, beach ─── */}
      <section className="section-y container-pf">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 md:gap-20 items-start">
          <Reveal className="order-2 md:order-1 grid grid-cols-2 gap-3">
            <div className="relative aspect-[4/5] plate">
              <Image src={LIVE.kattiePianoCouple} alt="Kattie and her partner" fill sizes="25vw" className="object-cover" />
            </div>
            <div className="relative aspect-[4/5] plate">
              <Image src={LIVE.kattieMomBride} alt="Kattie with her mother" fill sizes="25vw" className="object-cover" />
            </div>
            <div className="relative aspect-[4/5] col-span-2 plate">
              <Image src={LIVE.kattieMakeup} alt="Kattie having her makeup done" fill sizes="50vw" className="object-cover" />
            </div>
            <div className="relative aspect-[3/4] col-span-2 max-w-[220px] plate">
              <Image src={LIVE.kattieBeach} alt="Kattie at the beach" fill sizes="220px" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={140} className="order-1 md:order-2">
            <p className="label text-[#33302A] mb-6">Kattie&apos;s Path to Wedding Florals</p>
            <div className="space-y-4 font-sans-pf text-[16px] text-[#33302A]/75 leading-relaxed">
              <p>
                I&apos;ve always had a deep passion for event coordinating. Whether I&apos;m creating magical themes for my kids&apos; birthdays or was meticulously planning work events, I&apos;ve always aimed to craft a special experience for everyone involved. I have watched my little sister for years make brides beautiful on their special day and manage her own bridal business. I always wished to be part of the wedding business but didn&apos;t know quite how I could help since my talent for makeup doesn&apos;t go beyond chapstick and mascara.
              </p>
              <p>
                In 2022, my perspective on the wedding industry changed entirely when I met Sierra, the flower fairy herself. I discovered that my superpower in events lies in my administrative and coordinating skills behind the scenes. Who would have thought I could put those skills to use for a wedding florist? Now, I&apos;m thrilled to be a part of the ultimate event: weddings!
              </p>
            </div>
            <p className="font-galanthia text-[#33302A] text-[38px] leading-none mt-8">Xoxo,<br />Kattie</p>
          </Reveal>
        </div>
      </section>

      {/* ─── Team strip ─── */}
      <section className="section-y px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 md:gap-14 items-center">
          <Reveal className="grid grid-cols-2 gap-3">
            <div className="relative aspect-square plate">
              <Image src={LIVE.teamCart1} alt="Loading florals for delivery" fill sizes="16vw" className="object-cover" />
            </div>
            <div className="relative aspect-square plate">
              <Image src={LIVE.teamArrange} alt="Arranging florals" fill sizes="16vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={100} className="text-center">
            <p className="font-times text-[#33302A] leading-relaxed uppercase" style={{ fontSize: "clamp(17px, 2vw, 22px)" }}>
              We work with a rotating team of talented floral assistants who support us in the production of each event — from flower pick up to floral installs.
            </p>
          </Reveal>
          <Reveal delay={200} className="grid grid-cols-2 gap-3">
            <div className="relative aspect-square plate">
              <Image src={LIVE.teamArch} alt="A finished ceremony arch installation" fill sizes="16vw" className="object-cover" />
            </div>
            <div className="relative aspect-square plate">
              <Image src={LIVE.teamCart2} alt="Setting up florals" fill sizes="16vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Our Favorite Things — real cat photo included ─── */}
      <section className="section-y px-6">
        <div className="max-w-5xl mx-auto">
          <p className="label text-[#33302A]/50 mb-14 md:mb-16">Our Favorite Things</p>
          <div className="grid md:grid-cols-3 gap-12 md:gap-10">
            <Reveal>
              <div className="relative w-full aspect-[4/5] mb-6 plate overflow-hidden">
                <Image src={LIVE.favoriteCat} alt="A cat making a surprise appearance in the flat-lay photos" fill sizes="33vw" className="object-cover grayscale" />
              </div>
              <h3 className="font-times text-2xl text-[#33302A] mb-2">Iconic Visitors</h3>
              <p className="font-sans-pf text-[15px] text-[#33302A]/70 leading-relaxed">
                There&rsquo;s just something about a dog padding down the aisle or a cat making a surprise appearance in the flat-lay photos!
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="relative w-full aspect-[4/5] mb-6 plate overflow-hidden">
                <Image src={LIVE.favoriteStyle} alt="A vibrant orange and pink floral arrangement" fill sizes="33vw" className="object-cover" />
              </div>
              <h3 className="font-times text-2xl text-[#33302A] mb-2">Personal Style</h3>
              <p className="font-sans-pf text-[15px] text-[#33302A]/70 leading-relaxed">
                Floral designing is a bit like painting — we get to work in all kinds of styles. Our favorite part is pulling out what design feels most like you!
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="relative w-full aspect-[4/5] mb-6 plate overflow-hidden">
                <Image src={LIVE.favoriteQuiet} alt="A quiet moment pinning a boutonniere" fill sizes="33vw" className="object-cover" />
              </div>
              <h3 className="font-times text-2xl text-[#33302A] mb-2">Quiet Moments</h3>
              <p className="font-sans-pf text-[15px] text-[#33302A]/70 leading-relaxed">
                The pinning of the boutonnieres, the passing of the bouquet — these are the moments that are the most beautiful.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Pure decorative script moment, paired with real closing photos ─── */}
      <section className="section-y-lg container-pf">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-3 items-center">
          <Reveal className="grid grid-rows-2 gap-3">
            <div className="relative aspect-[16/9] plate">
              <Image src={LIVE.closingExchangeA} alt="Handing off wrapped bouquets" fill sizes="45vw" className="object-cover" />
            </div>
            <div className="relative aspect-[16/9] plate">
              <Image src={LIVE.closingExchangeB} alt="A warm embrace" fill sizes="45vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={100} className="text-center md:text-left md:pl-10 mt-8 md:mt-0">
            <p className="font-galanthia text-[#33302A] leading-[1.1]" style={{ fontSize: "clamp(34px, 5vw, 56px)" }}>
              to have and<br />to hold<br />from this<br />day forward
            </p>
            <p className="font-sans-pf text-[16px] text-[#33302A]/70 leading-relaxed mt-8 max-w-sm">
              How we want every bride to feel when we hand her the product of months of collaboration, designing, and dreaming!
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── Quote ─── */}
      <section className="pb-20 md:pb-28 container-pf">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-times text-[#33302A] leading-relaxed" style={{ fontSize: "clamp(22px, 3vw, 34px)" }}>
            &ldquo;Prose Florals is a superb florist, who took deep and thoughtful care to understand our vision <em className="font-times-italic">(even when we couldn&apos;t articulate it ourselves!)</em> and present us with beautiful options. We were blown away by the quality of the bouquets and arrangements and received so many compliments. They were truly exquisite!&rdquo;
          </p>
          <p className="label text-[#33302A]/50 mt-6">— Miriam and Elliot - The Graduate</p>
        </div>
      </section>

      <BeginCTA />
    </main>
  );
}
