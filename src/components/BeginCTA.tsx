import Image from "next/image";
import { IMG, INQUIRY } from "@/lib/images";

/**
 * "SHALL WE BEGIN?" dark call-to-action band that closes most pages on the live site.
 * The live site swaps in a different closing photo per page, so `image` is optional.
 */
export default function BeginCTA({ image = IMG.beachBridesmaids }: { image?: string }) {
  return (
    <section className="relative py-28 md:py-36 px-6 text-center overflow-hidden">
      <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[#33302A]/45" />
      <div className="relative max-w-xl mx-auto">
        <h2 className="display text-[#F4F1E8] mb-6" style={{ fontSize: "clamp(40px, 6vw, 88px)" }}>
          SHALL WE BEGIN?
        </h2>
        <p className="font-sans-pf text-[#F4F1E8]/90 text-[17px] leading-relaxed mb-10 max-w-md mx-auto">
          Let&apos;s create floral magic together! Introduce yourself and tell us a little about your event to get started. Looking forward to meeting you!
        </p>
        <a
          href={INQUIRY}
          target="_blank"
          rel="noopener noreferrer"
          className="label text-[#F4F1E8] bg-[#4A1420] rounded-full px-12 py-4 inline-block hover:bg-[#330D16] transition-colors"
        >
          Inquire
        </a>
      </div>
    </section>
  );
}
