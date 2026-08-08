"use client";

import Image from "next/image";
import { useState } from "react";
import { GUIDE } from "@/lib/images";

const setA = [
  {
    q: "How many flowers can I expect to get for your event minimums?",
    a: (
      <>
        We get this question so often, we put together a full floral catalog to help our clients make empowered choices about where to allocate their floral investment! We also have a few Packages you can view to help you make your florist selection! Download the guide{" "}
        <a href={GUIDE} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
          here
        </a>
        .
      </>
    ),
  },
  {
    q: "What is included in the event minimums?",
    a: "Each event package includes: access to our rental library, custom designs and palettes created just for you, and (of course) professionally designed floral pieces delivered to your event by our expert set up team.",
  },
];

const setB = [
  {
    q: "What do you offer in your Rentals Library?",
    a: "We have a large selection of vases, compotes, urns, arches, and candles that are available to our clients. The rental fees are covered within the cost of each piece. Our rentals are high quality basic vessels - usually in clear glass or white porcelain.",
  },
  {
    q: "Does your florist use floral foam?",
    a: "We use foam-free mechanics whenever possible! Our vase arrangements, greenery installations, and small to medium arrangements are completely foam free. We use a mix of wire, flower frogs, and water tubes to bring our designs to life. For larger installs, or pieces that need added stability, we do use floral foam in small amounts. We find to ensure the highest quality a blend of foam free mechanics and bits of foam yields the best results.",
  },
];

export default function ExperienceFAQ({ photoA, photoB }: { photoA: string; photoB: string }) {
  const [more, setMore] = useState(false);
  const items = more ? setB : setA;
  const photo = more ? photoB : photoA;

  return (
    <section className="section-y-lg container-pf">
      <div className="max-w-5xl mx-auto">
        <p className="label text-[#33302A]/60 mb-6">Frequently Asked Questions</p>
        <h2 className="display text-[#33302A] leading-[1.05] mb-16 md:mb-20" style={{ fontSize: "clamp(30px, 4.4vw, 58px)" }}>
          YOU CAN EXPECT A STANDARD OF EXCELLENCE, COMMUNICATION, AND COOPERATION. HERE ARE SOME OF OUR POLICIES TO ENSURE A BEAUTIFUL EXPERIENCE!
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="relative aspect-[4/5] w-full max-w-md">
            <Image key={photo} src={photo} alt="" fill sizes="(min-width: 768px) 40vw, 90vw" className="object-cover" />
          </div>

          <div className="space-y-12">
            {items.map((item) => (
              <div key={item.q}>
                <p className="font-sans-pf font-medium text-[#33302A] text-[18px] mb-3">Q. {item.q}</p>
                <p className="font-sans-pf text-[#33302A]/70 text-[16px] leading-relaxed">{item.a}</p>
              </div>
            ))}

            <button
              onClick={() => setMore(!more)}
              className="label text-[#33302A] inline-flex items-center gap-2 hover:text-[#33302A]/60 transition-colors"
            >
              {more ? (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M15 5l-7 7 7 7" /></svg>
                  Back
                </>
              ) : (
                <>
                  More
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M9 5l7 7-7 7" /></svg>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
