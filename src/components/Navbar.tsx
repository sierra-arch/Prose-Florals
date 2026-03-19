"use client";

import { useState } from "react";
import Link from "next/link";

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

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F9F9F5] border-b border-[#E8E0D6]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Left nav links */}
          <nav className="hidden md:flex items-center gap-8 flex-1">
            {leftLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-[10px] tracking-[0.2em] uppercase text-[#2C1A0E] hover:text-[#2D4A3E] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Centered Logo */}
          <Link
            href="/"
            className="font-display text-lg md:text-xl tracking-[0.25em] uppercase text-[#2C1A0E] text-center flex-shrink-0"
          >
            Prose Florals
          </Link>

          {/* Right nav links + Inquire */}
          <nav className="hidden md:flex items-center gap-8 flex-1 justify-end">
            {rightLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-[10px] tracking-[0.2em] uppercase text-[#2C1A0E] hover:text-[#2D4A3E] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://proseflorals.hbportal.co/public/6525822feddaf700db0fc732/1-Enter_your_details"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif italic text-[#2C1A0E] text-sm underline underline-offset-2 hover:text-[#2D4A3E] transition-colors duration-200"
            >
              Inquire
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 ml-auto"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-px bg-[#2C1A0E] transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-px bg-[#2C1A0E] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-[#2C1A0E] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-[#2C1A0E] flex flex-col items-center justify-center gap-8">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-[#FAF7F2] text-2xl"
            aria-label="Close menu"
          >
            ✕
          </button>
          {[...leftLinks, ...rightLinks].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-sm tracking-[0.25em] uppercase text-[#FAF7F2] hover:text-[#C9B99A] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://proseflorals.hbportal.co/public/6525822feddaf700db0fc732/1-Enter_your_details"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="font-serif italic text-[#FAF7F2] mt-4 text-base underline underline-offset-2"
          >
            Inquire
          </a>
        </div>
      )}
    </>
  );
}
