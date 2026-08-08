import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import BeginCTA from "@/components/BeginCTA";
import WaxSeal from "@/components/WaxSeal";
import RibbonDivider from "@/components/RibbonDivider";
import { IMG, FRESH } from "@/lib/images";

export const metadata: Metadata = {
  title: "About | Prose Florals — Boston Wedding Florist",
  description:
    "Known for our modern-romantic style, relaxed approach, and iconic silhouettes. Meet Sierra & Kattie, the team behind Prose Florals in Boston, MA.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#F4F1E8]">
      {/* ─── Intro ─── */}
      <section className="title-zone container-pf">
        <p className="label text-[#33302A]/50 mb-8">We believe great stories transcend mediums</p>
        <h1 className="title-hero text-[#33302A]">ABOUT PROSE FLORALS</h1>
      </section>

      {/* ─── Scrapbook-style collage — angled, torn, varied sizes, rather
          than a uniform three-up grid. Leads with the most recent wedding. ─── */}
      <section className="container-wide pb-4 md:pb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 items-start">
          <Reveal className="relative aspect-[3/4] md:mt-16 plate tilt-ls">
            <Image src={FRESH.goods1} alt="Prose Florals wedding work" fill sizes="33vw" className="object-cover" />
          </Reveal>
          <Reveal className="relative aspect-[4/5] md:-mt-4 plate tilt-r torn-bottom" delay={120}>
            <Image src={IMG.coupleEmbrace} alt="Prose Florals florist embracing bride" fill sizes="33vw" className="object-cover" />
          </Reveal>
          <Reveal className="relative aspect-[3/4] md:mt-24 plate tilt-rs" delay={240}>
            <Image src={FRESH.goods4} alt="Prose Florals bride portrait" fill sizes="33vw" className="object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="section-y container-pf">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-times text-[21px] md:text-[24px] text-[#33302A]/75 leading-[1.9]">
            Known for our modern-romantic style, relaxed approach, and iconic silhouettes, our Boston-based studio sits at the cross-section of artfully curated flair and the kind of expertly-designed floral pieces you&apos;ll be proud to have in your wedding albums forever.
          </p>
        </div>
      </section>

      {/* ─── OUR STYLE (mauve) ─── */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#C9B7AE] flex flex-col justify-center px-8 md:px-20 py-24 md:py-36 order-2 md:order-1">
          <h2 className="text-[#F4F1E8] leading-[0.95] mb-7">
            <span className="font-times-italic italic block" style={{ fontSize: "clamp(44px, 5vw, 78px)" }}>OUR</span>
            <span className="display block" style={{ fontSize: "clamp(40px, 4.5vw, 70px)" }}>STYLE</span>
          </h2>
          <p className="font-times text-[18px] text-[#33302A]/80 leading-relaxed max-w-md">
            As flowers are the poetry that brings beauty to the world, we are the <em className="font-times-italic">prose</em> that arranges it in a way that makes it relatable. The flowers bring the beauty, we bring the structure — together creating emotion, inspiration, and joy! Classic style is eternal, and Playa Blanca roses never go out of style.
          </p>
        </div>
        <div className="relative aspect-[4/5] md:aspect-auto order-1 md:order-2">
          <Image src={IMG.bouquetBold} alt="A signature Prose Florals bouquet" fill sizes="50vw" className="object-cover" />
        </div>
      </section>

      {/* ─── OUR STORY (white + photo) ─── */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#F4F1E8] flex flex-col justify-center px-8 md:px-20 py-24 md:py-36">
          <h2 className="text-[#33302A] leading-[0.95] mb-7">
            <span className="font-times-italic italic block" style={{ fontSize: "clamp(44px, 5vw, 78px)" }}>OUR</span>
            <span className="display block" style={{ fontSize: "clamp(40px, 4.5vw, 70px)" }}>STORY</span>
          </h2>
          <p className="font-times text-[18px] text-[#33302A]/70 leading-relaxed max-w-md">
            It all started with a pile of wedding magazines and a love of botanical sculpture. We&apos;re a Wedding and Events Florist based in Boston, MA. Passion burns out of everything we do here. Each bloom is carefully selected, every client appreciated, each event prioritized.
          </p>
        </div>
        <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[520px]">
          <Image src={IMG.coupleKiss} alt="Couple embracing with their wedding bouquet" fill sizes="50vw" className="object-cover" />
        </div>
      </section>

      {/* ─── OUR METHOD (dark) ─── */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[520px] order-1">
          <Image src={IMG.meadowInstall} alt="A lush floral installation by Prose Florals" fill sizes="50vw" className="object-cover" />
        </div>
        <div className="bg-[#33302A] flex flex-col justify-center px-8 md:px-20 py-24 md:py-36 order-2">
          <h2 className="text-[#F4F1E8] leading-[0.95] mb-7">
            <span className="font-times-italic italic block" style={{ fontSize: "clamp(44px, 5vw, 78px)" }}>OUR</span>
            <span className="display block" style={{ fontSize: "clamp(40px, 4.5vw, 70px)" }}>METHOD</span>
          </h2>
          <p className="font-times text-[18px] text-[#F4F1E8]/75 leading-relaxed max-w-md">
            We do not simply match our recommended floral choices to your bridesmaid&apos;s dresses. We take your whole event into our design philosophy, and build a design brief that captures and ADDS to your current aesthetic. During your consultation, we ask how you want your event to FEEL, and select botanics that support that vision.
          </p>
        </div>
      </section>

      {/* ─── Sierra bio ─── */}
      <section className="section-y-lg container-pf">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 md:gap-20 items-start">
          <Reveal>
            <p className="label text-[#33302A] mb-6">Sierra&apos;s Wedding Flower History</p>
            <div className="space-y-4 font-times text-[18px] text-[#33302A]/70 leading-relaxed">
              <p>
                From my first wild clover, babydoll ceremony, to the blissful moment when I walked down the aisle with the love of my life, wedding flowers have been part of my story for decades.
              </p>
              <p>
                On the eve of my own wedding in August 2020, my phenomenal bridesmaids and I came together to assemble the floral arrangements. It was a cherished moment, an intimate memory that adds an extra layer of warmth and sentiment to our wedding weekend.
              </p>
              <p>
                This journey of floral design has been a delightful one, creating stunning arrangements for friends, family, and clients, each with their own unique and diverse visions. It&apos;s more than just a job; it&apos;s a heartfelt privilege to contribute to people&apos;s big days.
              </p>
            </div>
            <p className="font-galanthia text-[#33302A] text-[40px] leading-none mt-8">Much love, Sierra</p>
          </Reveal>
          <Reveal delay={140} className="grid grid-cols-2 gap-3">
            <div className="relative aspect-[3/4] col-span-1 plate tilt-ls">
              <Image src={FRESH.wilczynski1} alt="" fill sizes="25vw" className="object-cover" />
            </div>
            <div className="relative aspect-[3/4] col-span-1 plate tilt-rs">
              <Image src={IMG.bridePortrait} alt="Sierra Bettis" fill sizes="25vw" className="object-cover" />
            </div>
            <div className="relative aspect-[16/9] col-span-2 plate">
              <Image src={IMG.brideParty} alt="Bridal party with Prose Florals bouquets" fill sizes="50vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Kattie bio ─── */}
      <section className="section-y container-pf">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 md:gap-20 items-start">
          <Reveal className="order-2 md:order-1 grid grid-cols-2 gap-3">
            <div className="relative aspect-[3/4] plate tilt-l">
              <Image src={FRESH.wilczynski2} alt="" fill sizes="25vw" className="object-cover" />
            </div>
            <div className="relative aspect-[3/4] plate tilt-rs">
              <Image src={IMG.kattie} alt="Kattie" fill sizes="25vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={140} className="order-1 md:order-2">
            <p className="label text-[#33302A] mb-6">Kattie&apos;s Path to Wedding Florals</p>
            <div className="space-y-4 font-times text-[18px] text-[#33302A]/70 leading-relaxed">
              <p>
                I&apos;ve always had a deep passion for event coordinating. Whether I&apos;m creating magical themes for my kids&apos; birthdays or was meticulously planning work events, I&apos;ve always aimed to craft a special experience for everyone involved. I have watched my little sister for years make brides beautiful on their special day and manage her own bridal business.
              </p>
              <p>
                In 2022, my perspective on the wedding industry changed entirely when I met Sierra, the flower fairy herself. I discovered that my superpower in events lies in my administrative and coordinating skills behind the scenes. Now, I&apos;m thrilled to be a part of the ultimate event: weddings!
              </p>
            </div>
            <div className="flex items-end gap-3 mt-8">
              <p className="font-galanthia text-[#33302A] text-[40px] leading-none">xo, Kattie</p>
              <WaxSeal color="#4A1420" className="w-9 h-9 opacity-70 mb-0.5" />
            </div>
          </Reveal>
        </div>
      </section>

      <RibbonDivider className="w-full h-6 md:h-7 my-2" color="#4A1420" />

      {/* ─── Inspiration list — paper texture instead of flat bone color ─── */}
      <section className="section-y px-6 border-y border-[#D8D2C2] paper">
        <div className="max-w-4xl mx-auto text-center relative">
          <p className="label text-[#33302A]/50 mb-5">The Inspiration</p>
          <p className="font-times-italic italic text-[#33302A] leading-relaxed" style={{ fontSize: "clamp(20px, 2.6vw, 30px)" }}>
            Still Moments &middot; Architecture &middot; Romance &middot; Tiny Growing Things &middot; The Ocean &middot; Jane Eyre &middot; Kittens &middot; Silky Veils
          </p>
        </div>
      </section>

      {/* ─── Quote — manuscript italic for the one ornate-type gesture on
          this page ─── */}
      <section className="section-y-lg container-pf">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-manuscript-italic text-[#33302A] leading-relaxed" style={{ fontSize: "clamp(23px, 3.2vw, 36px)" }}>
            &ldquo;Prose Florals is a superb florist, who took deep and thoughtful care to understand our vision <em>even when we couldn&apos;t articulate it ourselves!</em> We were blown away by the quality of the bouquets and arrangements and received so many compliments. They were truly exquisite!&rdquo;
          </p>
          <p className="font-times-italic italic text-[#33302A]/70 text-lg mt-6">— Miriam &amp; Elliot, The Graduate</p>
        </div>
      </section>

      <BeginCTA />
    </main>
  );
}
