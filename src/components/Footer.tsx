"use client";

import Link from "next/link";
import Image from "next/image";
import { INQUIRY, GUIDE, INSTAGRAM, PINTEREST, FOOTER_STRIP } from "@/lib/images";

const getAround = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/experience" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Compliments", href: "/reviews" },
  { label: "Inquire", href: "/contact" },
];

const links = [
  { label: "Boston Floral Events", href: "/services" },
  { label: "DIY Florals with Ease", href: "/services" },
  { label: "Download Investment Guide", href: GUIDE, ext: true },
  { label: "Write us a Review!", href: "/reviews" },
  { label: "Reserve Your Date", href: INQUIRY, ext: true },
  { label: "Rental Library", href: "/services" },
  { label: "Legal", href: "/contact" },
];

const stripImgs = FOOTER_STRIP;

export default function Footer() {
  return (
    <footer className="bg-[#F4F1E8] border-t border-[#D8D2C2]">
      {/* Top: brand line + 4 columns, centered with generous margins */}
      <div className="container-pf pt-20 md:pt-28 pb-14">
        {/* Centered wordmark + tagline + back-to-top */}
        <div className="mx-auto max-w-5xl relative text-center mb-14 md:mb-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hidden md:flex flex-col items-center gap-2 absolute top-1/2 -translate-y-1/2 right-0 text-[#33302A]/55 hover:text-[#3B4127] transition-colors"
            aria-label="Back to top"
          >
            <svg width="18" height="40" viewBox="0 0 26 60" fill="none">
              <path d="M13 60V2M13 2L2 13M13 2L24 13" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            <span className="label text-[10px] tracking-[0.2em]">Top</span>
          </button>
          <p className="ed-display text-[#33302A]" style={{ fontSize: "clamp(36px, 5vw, 68px)" }}>PROSE FLORALS</p>
          <p className="font-times-italic italic text-[#33302A]/60 mt-2" style={{ fontSize: "clamp(15px, 1.6vw, 19px)" }}>
            for the romantics — Boston, MA
          </p>
        </div>

        {/* thin divider rule between brand + columns */}
        <div className="mx-auto max-w-5xl h-px bg-[#D8D2C2] mb-12 md:mb-16" />

        <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 md:gap-x-4">
          {/* Get Around */}
          <div>
            <h3 className="label text-[#33302A] text-[0.72rem] tracking-[0.22em] mb-5">Get Around</h3>
            <ul className="space-y-0.5">
              {getAround.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="font-sans-pf font-medium text-[13.5px] text-[#33302A]/70 hover:text-[#3B4127] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="label text-[#33302A] text-[0.72rem] tracking-[0.22em] mb-5">Links</h3>
            <ul className="space-y-0.5">
              {links.map((l) =>
                l.ext ? (
                  <li key={l.label}>
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="font-sans-pf font-medium text-[13.5px] text-[#33302A]/70 hover:text-[#3B4127] transition-colors">
                      {l.label}
                    </a>
                  </li>
                ) : (
                  <li key={l.label}>
                    <Link href={l.href} className="font-sans-pf font-medium text-[13.5px] text-[#33302A]/70 hover:text-[#3B4127] transition-colors">
                      {l.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="label text-[#33302A] text-[0.72rem] tracking-[0.22em] mb-5">Contact</h3>
            <p className="font-sans-pf text-[13px] text-[#33302A]/70 leading-relaxed mb-4">
              We are based in Boston, MA, and serve the surrounding areas.
            </p>
            <p className="font-sans-pf text-[13px] text-[#33302A]/70 mb-5">
              E.{" "}
              <a href="mailto:contact@proseflorals.com" className="hover:text-[#3B4127] transition-colors">
                contact@proseflorals.com
              </a>
            </p>
            <div className="flex items-center gap-4">
              <a href="mailto:contact@proseflorals.com" aria-label="Email" className="text-[#33302A]/70 hover:text-[#3B4127] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="2" y="4" width="20" height="16" rx="1.5"/><path d="m3 6 9 7 9-7"/></svg>
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#33302A]/70 hover:text-[#3B4127] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href={PINTEREST} target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="text-[#33302A]/70 hover:text-[#3B4127] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="12" r="10"/><path d="M12 7c-2.2 0-3.6 1.4-3.6 3.2 0 .9.4 1.9 1.2 2.2.1 0 .2 0 .2-.1l.2-.8c0-.1 0-.2-.1-.3-.3-.4-.5-.9-.5-1.4 0-1.4 1-2.6 2.7-2.6 1.5 0 2.3.9 2.3 2.1 0 1.6-.7 2.9-1.7 2.9-.6 0-1-.5-.9-1.1.2-.7.5-1.5.5-2 0-.5-.3-.9-.8-.9-.6 0-1.1.7-1.1 1.6 0 .6.2 1 .2 1l-.8 3.4c-.2.9-.1 2.2 0 2.3 0 .1.1.1.2 0 .1-.1.9-1.3 1.2-2.2l.4-1.6c.2.4.9.8 1.6.8 2.1 0 3.5-1.9 3.5-4.4C16.6 8.7 14.9 7 12 7z" fill="currentColor" stroke="none"/></svg>
              </a>
            </div>
          </div>

          {/* Our Mission */}
          <div>
            <h3 className="label text-[#33302A] text-[0.72rem] tracking-[0.22em] mb-5">Our Mission</h3>
            <p className="font-sans-pf text-[13px] text-[#33302A]/70 leading-relaxed mb-5">
              To create dynamic floral designs that highlight our happy couple&apos;s style and story.
            </p>
            <div className="mt-10">
              <p className="font-times-italic italic text-[#33302A]/70 text-[15px] leading-none mb-1">xo,</p>
              <p className="font-galanthia text-[#33302A] text-[56px] leading-none -ml-1">
                Prose Florals
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="border-t border-[#D8D2C2] overflow-hidden py-5">
        <div className="flex whitespace-nowrap animate-[marquee_28s_linear_infinite]">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center shrink-0">
              {[
                { t: "Follow Along on Instagram", href: INSTAGRAM },
                { t: "Download the Free Guide", href: GUIDE },
                { t: "Reserve Your Date", href: INQUIRY },
              ].map((item, i) => (
                <span key={i} className="flex items-center mx-4">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label text-[#33302A]/80 hover:text-[#3B4127] transition-colors text-[15px] tracking-[0.22em]"
                  >
                    {item.t}
                  </a>
                  <span className="mx-4 text-[#33302A]/30">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Instagram photo strip — curated to one calm tone, with a hairline
          gap so it reads as six deliberate frames, not a dense unbroken grid. */}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-0 bg-[#D8D2C2]">
        {stripImgs.map((src, i) => (
          <a key={i} href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="relative aspect-[3/4] overflow-hidden group bg-[#F4F1E8]">
            <Image src={src} alt="Prose Florals wedding work" fill sizes="20vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </a>
        ))}
      </div>

      <div className="bg-[#3B4127] py-3">
        <p className="container-pf font-sans-pf text-[11px] text-white/70 text-right tracking-wide">
          Prose Florals LLC, {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </footer>
  );
}
