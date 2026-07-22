import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import BeginCTA from "@/components/BeginCTA";
import { GALLERIES, getGallery } from "@/lib/galleries";

export function generateStaticParams() {
  return GALLERIES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const g = getGallery(slug);
  if (!g) return { title: "Gallery | Prose Florals" };
  return {
    title: `${g.couple} | Prose Florals — Boston Wedding Florist`,
    description: g.about[0],
  };
}

// Alternating layout pattern for the staggered editorial gallery:
// full-width, then offset pairs, repeating.
function galleryLayout(photos: string[]) {
  const blocks: { type: "full" | "pair"; imgs: string[] }[] = [];
  let idx = 0;
  let toggle = false;
  while (idx < photos.length) {
    const remaining = photos.length - idx;
    if (!toggle && remaining >= 1 && (idx === 0 || remaining <= 2 || idx % 5 === 0)) {
      blocks.push({ type: "full", imgs: [photos[idx]] });
      idx += 1;
    } else {
      const pair = photos.slice(idx, idx + 2);
      blocks.push({ type: "pair", imgs: pair });
      idx += pair.length;
    }
    toggle = !toggle;
  }
  return blocks;
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const g = getGallery(slug);
  if (!g) notFound();

  const cover = g.photos[0];
  const rest = g.photos.slice(1);
  const blocks = galleryLayout(rest);

  return (
    <main className="bg-[#F9F9F5]">
      {/* Grand cover */}
      <section className="relative h-[70vh] md:h-[88vh] w-full overflow-hidden bg-[#302B29]">
        <Image src={cover} alt={g.coverAlt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
        <div className="absolute inset-x-0 bottom-0 container-wide pb-12 md:pb-20">
          <p className="label text-white/85 mb-4">{g.venueLabel}</p>
          <h1 className="font-display text-white leading-[0.95]" style={{ fontSize: "clamp(44px, 8vw, 128px)" }}>
            {g.couple}
          </h1>
          {g.subtitle && (
            <p className="font-times-italic italic text-white/85 mt-4" style={{ fontSize: "clamp(18px, 2.4vw, 30px)" }}>
              {g.subtitle}
            </p>
          )}
        </div>
      </section>

      {/* About the event + vendor credits */}
      <section className="container-pf section-y">
        <div className="grid md:grid-cols-[1.6fr_1fr] gap-12 md:gap-20 max-w-6xl">
          <div>
            <p className="label text-[#302B29]/60 mb-7">About the Event</p>
            <div className="space-y-6">
              {g.about.map((p, i) => (
                <p key={i} className="font-times text-[18px] md:text-[20px] text-[#302B29]/80 leading-[1.85]">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div className="md:pt-11">
            <ul className="space-y-3.5">
              {g.vendors.map((v) => (
                <li key={v.role} className="font-times text-[17px] md:text-[18px] text-[#302B29]/75">
                  {v.role} —{" "}
                  {v.url ? (
                    <a href={v.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-[#302B29]/30 hover:decoration-[#373F24] hover:text-[#373F24] transition-colors">
                      {v.name}
                    </a>
                  ) : (
                    <span className="underline underline-offset-4 decoration-[#302B29]/30">{v.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Staggered editorial gallery */}
      <section className="container-wide pb-24 md:pb-32">
        <div className="space-y-6 md:space-y-9">
          {blocks.map((block, bi) =>
            block.type === "full" ? (
              <Reveal key={bi} className="relative w-full aspect-[16/10] md:aspect-[16/8] overflow-hidden group">
                <Image
                  src={block.imgs[0]}
                  alt={g.coverAlt}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.03]"
                />
              </Reveal>
            ) : (
              <div key={bi} className="grid md:grid-cols-2 gap-6 md:gap-9">
                {block.imgs.map((src, ii) => (
                  <Reveal
                    key={ii}
                    delay={ii * 90}
                    className={`relative aspect-[4/5] overflow-hidden group ${block.imgs.length === 2 && ii === 1 ? "md:mt-16" : ""}`}
                  >
                    <Image
                      src={src}
                      alt={g.coverAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.03]"
                    />
                  </Reveal>
                ))}
              </div>
            )
          )}
        </div>
      </section>

      {/* Back to portfolio */}
      <section className="container-pf pb-20 text-center">
        <Link href="/portfolio" className="label text-[#302B29] hover:text-[#373F24] transition-colors inline-flex items-center gap-3">
          <svg width="30" height="14" viewBox="0 0 30 14" fill="none" stroke="currentColor" strokeWidth="1"><path d="M29 7H1M1 7l6-6M1 7l6 6" /></svg>
          View Full Portfolio
        </Link>
      </section>

      <BeginCTA />
    </main>
  );
}
