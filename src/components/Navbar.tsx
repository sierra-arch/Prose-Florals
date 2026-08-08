"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Monogram from "@/components/Monogram";
import { INQUIRY, INSTAGRAM, PINTEREST, IMG } from "@/lib/images";

const leftLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
];

const rightLinks = [
  { label: "Experience", href: "/experience" },
  { label: "Reviews", href: "/reviews" },
];

const allLinks = [...leftLinks, ...rightLinks, { label: "Contact", href: "/contact" }];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-[#F4F1E8]/95 backdrop-blur-sm border-b border-[#D8D2C2]" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-14 h-[92px] flex items-center justify-between">
          {/* Left links */}
          <nav className="hidden lg:flex items-center gap-11 flex-1">
            {leftLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="label text-[#33302A] hover:text-[#4A1420] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Center logo */}
          <Link
            href="/"
            className="font-magnolia text-[#33302A] text-2xl md:text-[28px] tracking-[0.28em] whitespace-nowrap flex-shrink-0 pl-2"
            style={{ fontWeight: 400 }}
          >
            PROSE&nbsp;FLORALS
          </Link>

          {/* Right links */}
          <nav className="hidden lg:flex items-center gap-11 flex-1 justify-end">
            {rightLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="label text-[#33302A] hover:text-[#4A1420] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={INQUIRY}
              target="_blank"
              rel="noopener noreferrer"
              className="font-times-italic italic text-[#33302A] text-[17px] hover:text-[#4A1420] transition-colors"
            >
              Inquire
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex flex-col gap-[5px] ml-1"
            >
              <span className="block w-6 h-px bg-[#33302A]" />
              <span className="block w-6 h-px bg-[#33302A]" />
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 ml-auto"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-px bg-[#33302A]" />
            <span className="block w-6 h-px bg-[#33302A]" />
            <span className="block w-6 h-px bg-[#33302A]" />
          </button>
        </div>
      </header>

      {/* Full-screen overlay menu — monogram, stacked links, small photo
          teaser, and social icons, matching the live site's takeover nav. */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-[#4A1420] flex flex-col items-center justify-center gap-6 animate-[fadeUp_0.4s_ease] overflow-y-auto py-16">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-7 right-8 text-[#F4F1E8] text-3xl font-light leading-none"
            aria-label="Close menu"
          >
            &times;
          </button>
          <Monogram className="w-10 h-12 text-[#C9B7AE] mb-1" />
          <p className="label text-[#C9B7AE] mb-2">Prose Florals</p>
          {allLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-magnolia text-[#F4F1E8] text-3xl md:text-4xl tracking-[0.06em] hover:text-[#C9B7AE] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={INQUIRY}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="font-times-italic italic text-[#C9B7AE] mt-3 text-xl"
          >
            Inquire
          </a>

          <div className="relative w-20 h-20 mt-4 overflow-hidden opacity-80">
            <Image src={IMG.bouquetLush} alt="" fill sizes="80px" className="object-cover" />
          </div>
          <div className="flex items-center gap-6 mt-1">
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="label text-[#F4F1E8]/80 hover:text-[#F4F1E8] transition-colors">
              Instagram
            </a>
            <a href={PINTEREST} target="_blank" rel="noopener noreferrer" className="label text-[#F4F1E8]/80 hover:text-[#F4F1E8] transition-colors">
              Pinterest
            </a>
          </div>
        </div>
      )}
    </>
  );
}
