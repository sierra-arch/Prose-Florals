"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { INQUIRY, INSTAGRAM, PINTEREST, GUIDE, LIVE } from "@/lib/images";

const leftLinks = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
];

const rightLinks = [
  { label: "Experience", href: "/experience" },
  { label: "Reviews", href: "/reviews" },
];

// Menu-overlay link list — matches the live site's takeover nav exactly
// (no "Home", adds "Free Guide", "Reviews" relabeled "Compliments").
const menuLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Experience", href: "/experience" },
  { label: "Compliments", href: "/reviews" },
  { label: "Free Guide", href: GUIDE, ext: true },
  { label: "Inquire", href: INQUIRY, ext: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      const delta = y - lastY;
      if (y < 80) {
        setHidden(false);
      } else if (delta > 4) {
        setHidden(true);
      } else if (delta < -4) {
        setHidden(false);
      }
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,transform] duration-300 ease-in-out ${
          scrolled ? "bg-[#F4F1E8]/95 backdrop-blur-sm border-b border-[#D8D2C2]" : "bg-transparent"
        } ${hidden && !open ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-14 h-[92px] flex items-center justify-between">
          {/* Left links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8 2xl:gap-11 flex-1">
            {leftLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="label text-[#33302A] hover:text-[#3B4127] transition-colors"
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
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8 2xl:gap-11 flex-1 justify-end">
            {rightLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="label text-[#33302A] hover:text-[#3B4127] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={INQUIRY}
              target="_blank"
              rel="noopener noreferrer"
              className="font-times-italic italic text-[#33302A] text-[17px] hover:text-[#3B4127] transition-colors"
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

      {/* Full-screen overlay menu — monogram + photo teaser on the left,
          stacked link list on the right, matching the live site's takeover
          nav layout exactly. */}
      {open && (
        <div className="fixed inset-y-0 right-0 z-[60] w-full md:w-[58%] bg-[#3B4127] animate-[fadeUp_0.4s_ease] overflow-y-auto">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-7 right-8 text-[#F4F1E8] text-3xl font-light leading-none z-10"
            aria-label="Close menu"
          >
            &times;
          </button>
          <div className="min-h-full grid md:grid-cols-[minmax(0,340px)_1fr] gap-10 md:gap-16 items-center px-8 md:px-16 py-24">
            {/* Left: photo teaser */}
            <div className="flex flex-col items-center md:items-start">
              <div className="relative w-full max-w-[280px] aspect-[4/5] overflow-hidden">
                <Image src={LIVE.menuPhoto} alt="" fill sizes="280px" className="object-cover" />
              </div>
              <p className="label text-[#F4F1E8] mt-5 text-center md:text-left w-full">Boston Area Events</p>
              <div className="flex items-center gap-5 mt-3">
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#F4F1E8]/80 hover:text-[#F4F1E8] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
                </a>
                <a href={PINTEREST} target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="text-[#F4F1E8]/80 hover:text-[#F4F1E8] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="12" r="10"/><path d="M12 7c-2.2 0-3.6 1.4-3.6 3.2 0 .9.4 1.9 1.2 2.2.1 0 .2 0 .2-.1l.2-.8c0-.1 0-.2-.1-.3-.3-.4-.5-.9-.5-1.4 0-1.4 1-2.6 2.7-2.6 1.5 0 2.3.9 2.3 2.1 0 1.6-.7 2.9-1.7 2.9-.6 0-1-.5-.9-1.1.2-.7.5-1.5.5-2 0-.5-.3-.9-.8-.9-.6 0-1.1.7-1.1 1.6 0 .6.2 1 .2 1l-.8 3.4c-.2.9-.1 2.2 0 2.3 0 .1.1.1.2 0 .1-.1.9-1.3 1.2-2.2l.4-1.6c.2.4.9.8 1.6.8 2.1 0 3.5-1.9 3.5-4.4C16.6 8.7 14.9 7 12 7z" fill="currentColor" stroke="none"/></svg>
                </a>
              </div>
            </div>

            {/* Right: stacked link list */}
            <nav className="flex flex-col items-center md:items-start gap-1 md:gap-2">
              {menuLinks.map((link) =>
                link.ext ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="font-magnolia text-[#F4F1E8] leading-[1.15] tracking-[0.02em] hover:text-[#C9B7AE] transition-colors"
                    style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
                  >
                    {link.label.toUpperCase()}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-magnolia text-[#F4F1E8] leading-[1.15] tracking-[0.02em] hover:text-[#C9B7AE] transition-colors"
                    style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
                  >
                    {link.label.toUpperCase()}
                  </Link>
                )
              )}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
