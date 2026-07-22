import type { Metadata } from "next";
import Image from "next/image";
import { IMG, INQUIRY, GUIDE, INSTAGRAM, PINTEREST } from "@/lib/images";

export const metadata: Metadata = {
  title: "Inquire | Prose Florals — Boston Wedding Florist",
  description:
    "Let's create floral magic together! Introduce yourself and tell us a little about your event to get started. Boston area full service wedding florist.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#F9F9F5]">
      <section className="grid md:grid-cols-2 min-h-screen">
        {/* Left: image */}
        <div className="relative min-h-[42vh] md:min-h-screen">
          <Image src={IMG.bridePortrait} alt="Prose Florals bride at a brick mansion" fill priority sizes="50vw" className="object-cover" />
          <div className="absolute inset-0 bg-[#302B29]/15" />
        </div>

        {/* Right: inquiry content */}
        <div className="flex flex-col justify-center px-8 md:px-20 lg:px-24 py-28 md:py-32">
          <p className="label text-[#302B29]/60 mb-6">Say Hello</p>
          <h1 className="text-[#302B29] leading-[1.03] mb-8" style={{ fontSize: "clamp(40px, 5vw, 78px)" }}>
            <span className="display">LET&apos;S CREATE</span>
            <span className="block font-times-italic italic font-light">floral magic together</span>
          </h1>
          <p className="font-times text-[19px] text-[#302B29]/70 leading-relaxed max-w-md mb-10">
            Introduce yourself and tell us a little about your event to get started. We&apos;re looking forward to meeting you!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href={INQUIRY} target="_blank" rel="noopener noreferrer" className="label text-[#F9F9F5] bg-[#373F24] px-11 py-4 text-center hover:bg-[#2b3019] transition-colors">
              Start Your Inquiry
            </a>
            <a href={GUIDE} target="_blank" rel="noopener noreferrer" className="label text-[#302B29] border border-[#302B29]/40 px-11 py-4 text-center hover:bg-[#302B29]/5 transition-colors">
              Free Investment Guide
            </a>
          </div>

          <div className="space-y-4 border-t border-[#E7E2D8] pt-8">
            <div>
              <p className="label text-[#302B29]/50 mb-1">Email</p>
              <a href="mailto:contact@proseflorals.com" className="font-times text-[18px] text-[#302B29] hover:text-[#373F24] transition-colors">
                contact@proseflorals.com
              </a>
            </div>
            <div>
              <p className="label text-[#302B29]/50 mb-1">Based In</p>
              <p className="font-times text-[18px] text-[#302B29]">Boston, Massachusetts</p>
            </div>
            <div>
              <p className="label text-[#302B29]/50 mb-2">Follow Along</p>
              <div className="flex gap-6">
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="font-times-italic italic text-[17px] text-[#302B29] hover:text-[#B99C6E] transition-colors">Instagram</a>
                <a href={PINTEREST} target="_blank" rel="noopener noreferrer" className="font-times-italic italic text-[17px] text-[#302B29] hover:text-[#B99C6E] transition-colors">Pinterest</a>
              </div>
            </div>
          </div>

          <p className="font-galanthia text-[#302B29] text-[44px] leading-none mt-12">Prose Florals</p>
        </div>
      </section>
    </main>
  );
}
