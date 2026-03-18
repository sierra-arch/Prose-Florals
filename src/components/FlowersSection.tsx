"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const OG = "/portfolio/portfolio-2/og-portfolio/";
const EC = "/portfolio/portfolio-2/emily-chris-2024/Emily Chris - Cape Code Wedding Dennis Inn - Kelly Stevens Photography-";
const FS = "/portfolio/portfolio-2/flower-solos/";

// Paired galleries: large = couple shot, small = detail from same session
const galleries = [
  {
    large: `${OG}Bride-and-groom-botanical-forest-Boston-Florist-Prose-Florals.JPG`,
    small: `${OG}Close-up-Bridal-bouquet-flowers-Boston-florist-Prose-Florals.JPG`,
  },
  {
    large: `${EC}24.jpg`,
    small: `${FS}IMG_2848.jpg`,
  },
  {
    large: `${OG}Bride-and-groom-outside-wedding-Boston-Florist-Prose-Florals.JPG`,
    small: `${OG}Deep-Moody-Forest-Bridal-Bouquet-Boston-Florist-Prose-Florals-.JPG`,
  },
];

export default function FlowersSection() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % galleries.length);
        setVisible(true);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const { large, small } = galleries[current];

  return (
    <section className="py-20 px-6 md:px-16 bg-[#F9F9F5]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">

        {/* Left — staggered overlapping photos */}
        <div className="md:w-[52%] relative" style={{ height: "520px" }}>
          {/* Large portrait photo */}
          <div
            className="absolute left-0 top-0 overflow-hidden"
            style={{
              width: "62%",
              height: "88%",
              opacity: visible ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          >
            <Image src={large} alt="Wedding" fill className="object-cover" />
          </div>

          {/* Small detail photo — offset bottom right */}
          <div
            className="absolute right-0 bottom-0 overflow-hidden"
            style={{
              width: "44%",
              height: "48%",
              opacity: visible ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          >
            <Image src={small} alt="Detail" fill className="object-cover" />
          </div>
        </div>

        {/* Right — text */}
        <div className="md:w-[48%] relative pt-4">
          {/* PF monogram */}
          <div className="absolute -top-2 right-0 w-14 h-14 rounded-full border border-[#2C1A0E]/25 flex items-center justify-center">
            <span className="font-display text-[10px] tracking-[0.15em] text-[#2C1A0E]/40">PF</span>
          </div>

          <h2 className="text-[#2C1A0E] leading-[1] mb-6" style={{ fontSize: "clamp(40px, 5.5vw, 72px)" }}>
            <span className="font-display block tracking-[0.06em]">FLOWERS</span>
            <span className="block">
              <span className="font-serif italic font-light">with </span>
              <span className="font-display tracking-[0.06em]">INTENTION</span>
            </span>
          </h2>

          <p className="font-display text-[10px] tracking-[0.18em] uppercase text-[#2C1A0E] mb-7 leading-relaxed">
            We create dynamic floral designs that<br />
            highlight our couple&apos;s style &amp; story.
          </p>

          <p className="font-serif text-[17px] text-[#2C1A0E]/65 leading-relaxed mb-4">
            Welcome to wedding florals done differently. Every couple has their own romance, and we believe that should be reflected in their wedding florals!
          </p>
          <p className="font-serif text-[17px] text-[#2C1A0E]/65 leading-relaxed">
            It has been our honor to get to know incredible couples at <em>such</em> a special time in their life and help immortalize their romance in the form of intentionally selected florals to highlight their love story.
          </p>
        </div>
      </div>
    </section>
  );
}
