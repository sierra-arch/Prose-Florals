"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { INQUIRY } from "@/lib/images";

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
          scrolled ? "bg-[#F9F9F5]/95 backdrop-blur-sm border-b border-[#E7E2D8]" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-14 h-[92px] flex items-center justify-between">
          {/* Left links */}
          <nav className="hidden lg:flex items-center gap-11 flex-1">
            {leftLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="label text-[#302B29] hover:text-[#373F24] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Center logo */}
          <Link
            href="/"
            className="font-magnolia text-[#302B29] text-2xl md:text-[28px] tracking-[0.28em] whitespace-nowrap flex-shrink-0 pl-2"
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
                className="label text-[#302B29] hover:text-[#373F24] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={INQUIRY}
              target="_blank"
              rel="noopener noreferrer"
              className="font-times-italic italic text-[#302B29] text-[17px] hover:text-[#373F24] transition-colors"
            >
              Inquire
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex flex-col gap-[5px] ml-1"
            >
              <span className="block w-6 h-px bg-[#302B29]" />
              <span className="block w-6 h-px bg-[#302B29]" />
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 ml-auto"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-px bg-[#302B29]" />
            <span className="block w-6 h-px bg-[#302B29]" />
            <span className="block w-6 h-px bg-[#302B29]" />
          </button>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-[#373F24] flex flex-col items-center justify-center gap-7 animate-[fadeUp_0.4s_ease]">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-7 right-8 text-[#F9F9F5] text-3xl font-light leading-none"
            aria-label="Close menu"
          >
            &times;
          </button>
          <p className="label text-[#C9B7AE] mb-2">Prose Florals</p>
          {allLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-magnolia text-[#F9F9F5] text-3xl md:text-4xl tracking-[0.06em] hover:text-[#C9B7AE] transition-colors"
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
        </div>
      )}
    </>
  );
}
