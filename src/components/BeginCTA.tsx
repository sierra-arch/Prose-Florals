import Image from "next/image";
import { IMG, INQUIRY, GUIDE } from "@/lib/images";

/**
 * "SHALL WE BEGIN?" dark call-to-action band that closes most pages on the live site.
 */
export default function BeginCTA() {
  return (
    <section className="relative py-28 md:py-36 px-6 text-center overflow-hidden">
      <Image src={IMG.beachBridesmaids} alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[#33302A]/82" />
      <div className="relative max-w-2xl mx-auto">
        <p className="label text-[#C9B7AE] mb-5">Let&apos;s Create Floral Magic Together</p>
        <h2 className="display text-[#F4F1E8] mb-6" style={{ fontSize: "clamp(40px, 6vw, 88px)" }}>
          SHALL WE <span className="font-times-italic italic font-light">begin?</span>
        </h2>
        <p className="font-times text-[#F4F1E8]/75 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          Introduce yourself and tell us a little about your event to get started. We&apos;re looking forward to meeting you!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={INQUIRY}
            target="_blank"
            rel="noopener noreferrer"
            className="label text-[#33302A] bg-[#F4F1E8] px-11 py-4 hover:bg-[#EAE5D6] transition-colors"
          >
            Inquire Now
          </a>
          <a
            href={GUIDE}
            target="_blank"
            rel="noopener noreferrer"
            className="label text-[#F4F1E8] border border-[#F4F1E8]/50 px-11 py-4 hover:bg-white/10 hover:border-[#F4F1E8] transition-all"
          >
            Free Investment Guide
          </a>
        </div>
      </div>
    </section>
  );
}
