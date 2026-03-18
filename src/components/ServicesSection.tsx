import Image from "next/image";
import Link from "next/link";

const OG = "https://res.cloudinary.com/dyymmcbam/image/upload/prose-florals/portfolio/portfolio-2/og-portfolio/";
const INQUIRY = "https://proseflorals.hbportal.co/public/6525822feddaf700db0fc732/1-Enter_your_details";

const cards = [
  {
    photo: `${OG}Bride-groom-flower-lush-botanical-musuem-ballroom-Boston-Florist-Prose-Florals.JPG`,
    label: "WEDDINGS",
    num: "01",
    href: "/portfolio",
  },
  {
    photo: `${OG}Bride-and-groom-bouquet-sunset-Boston-Florist-Prose-Florals.jpg`,
    label: "ELOPEMENTS",
    num: "02",
    href: "/portfolio",
  },
  {
    photo: `${OG}Close-up-Bridal-bouquet-flowers-Boston-florist-Prose-Florals.JPG`,
    label: "FLORALS",
    num: "03",
    href: "/portfolio",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#F9F9F5]">

      {/* 3 photo cards */}
      <div className="grid grid-cols-3">
        {cards.map((card) => (
          <Link key={card.num} href={card.href} className="relative overflow-hidden group block" style={{ aspectRatio: "3/4" }}>
            <Image
              src={card.photo}
              alt={card.label}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-8">
              <div />
              <div>
                <span
                  className="font-serif italic text-white block leading-none"
                  style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 300 }}
                >
                  EXPLORE
                </span>
                <span
                  className="font-display text-white block tracking-[0.12em]"
                  style={{ fontSize: "clamp(24px, 3.5vw, 44px)" }}
                >
                  {card.label}
                </span>
              </div>
              <p className="font-display text-white/50 text-xs tracking-[0.2em]">{card.num}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Text below cards */}
      <div className="px-6 md:px-16 py-16 flex flex-col md:flex-row gap-12 items-end max-w-none">
        <div className="md:w-1/2">
          <h2 className="text-[#2C1A0E] leading-[1]" style={{ fontSize: "clamp(40px, 6vw, 80px)" }}>
            <span className="font-serif italic font-light block">ways to work</span>
            <span className="font-display block tracking-[0.08em]">TOGETHER</span>
          </h2>
        </div>
        <div className="md:w-1/2">
          <p className="font-serif text-[17px] text-[#2C1A0E]/65 leading-relaxed mb-8">
            We&apos;re known for professional, timely communication <em>and</em> stunning floral artistry, because you shouldn&apos;t have to choose.
          </p>
          <div className="flex gap-10">
            <Link
              href="/portfolio"
              className="font-display text-[11px] tracking-[0.15em] uppercase text-[#2C1A0E] border-b border-[#2C1A0E] pb-1 hover:text-[#2D4A3E] hover:border-[#2D4A3E] transition-colors"
            >
              Prose Weddings
            </Link>
            <a
              href={INQUIRY}
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif italic text-[17px] text-[#2C1A0E] border-b border-[#2C1A0E] pb-1 hover:text-[#2D4A3E] hover:border-[#2D4A3E] transition-colors"
            >
              The Experience
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
