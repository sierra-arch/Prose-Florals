import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import BeginCTA from "@/components/BeginCTA";
import { REVIEWS } from "@/lib/reviews";
import { IMG } from "@/lib/images";
import { GALLERY_COVERS } from "@/lib/galleries";

export const metadata: Metadata = {
  title: "Love Notes | Prose Florals — Boston Wedding Florist",
  description:
    "Kind words from the lovely past clients of Prose Florals. Read reviews from weddings across the Boston area and beyond.",
};

export default function ReviewsPage() {
  // Split so we can drop a portfolio feature mid-page, like the real site.
  const firstHalf = REVIEWS.slice(0, 11);
  const secondHalf = REVIEWS.slice(11);

  return (
    <main className="bg-[#F4F1E8]">
      {/* LOVE NOTES intro */}
      <section className="title-zone container-pf text-center">
        <h1 className="font-magnolia text-[#33302A] leading-[0.9]" style={{ fontSize: "clamp(64px, 15vw, 200px)" }}>
          LOVE NOTES
        </h1>
        <p className="label text-[#33302A]/70 mt-8">From Our Lovely Past Clients</p>
      </section>

      {/* Large circular feature photo */}
      <section className="container-pf pb-4">
        <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] overflow-hidden">
          <Image src={IMG.bouquetWhite} alt="Prose Florals bouquet" fill sizes="90vw" className="object-cover" />
        </div>
      </section>

      {/* Reviews — centered serif, generous spacing */}
      <section className="container-pf section-y">
        <div className="max-w-3xl mx-auto space-y-16 md:space-y-24 text-center">
          {firstHalf.map((r, i) => (
            <Reveal key={i}>
              <p className="font-times text-[#33302A]/90 leading-[1.55]" style={{ fontSize: "clamp(19px, 2.1vw, 26px)" }}>
                &ldquo;{r.quote}&rdquo;
              </p>
              <p className="font-times text-[#33302A]/70 mt-5 text-[18px]">
                &mdash; {r.author}
                {r.venue && (
                  <>
                    , <span className="underline underline-offset-4 decoration-[#33302A]/30">{r.venue}</span>
                  </>
                )}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mid-page portfolio feature */}
      <section className="container-pf pb-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">
          <div className="relative w-full md:w-[46%] aspect-[3/4] overflow-hidden">
            <Image src={GALLERY_COVERS["maggie-billy"]} alt="Prose Florals wedding" fill sizes="46vw" className="object-cover" />
          </div>
          <div className="text-center">
            <div className="relative w-full md:w-[280px] aspect-[3/4] overflow-hidden mx-auto mb-7">
              <Image src={GALLERY_COVERS["taylor-ethan"]} alt="Prose Florals wedding" fill sizes="280px" className="object-cover" />
            </div>
            <Link href="/portfolio" className="label text-[#33302A] hover:text-[#4A1420] transition-colors">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Remaining reviews */}
      <section className="container-pf section-y">
        <div className="max-w-3xl mx-auto space-y-16 md:space-y-24 text-center">
          {secondHalf.map((r, i) => (
            <Reveal key={i}>
              <p className="font-times text-[#33302A]/90 leading-[1.55]" style={{ fontSize: "clamp(19px, 2.1vw, 26px)" }}>
                &ldquo;{r.quote}&rdquo;
              </p>
              <p className="font-times text-[#33302A]/70 mt-5 text-[18px]">
                &mdash; {r.author}
                {r.venue && (
                  <>
                    , <span className="underline underline-offset-4 decoration-[#33302A]/30">{r.venue}</span>
                  </>
                )}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <BeginCTA />
    </main>
  );
}
