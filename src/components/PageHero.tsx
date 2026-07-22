import Image from "next/image";

/**
 * Full-width image hero with an overlaid two-part title:
 * a Magnolia display word + a Times Now italic word, matching the live site
 * (e.g. "EXPLORE the SERVICES", "EMBRACE THE ROMANCE", "ABOUT PROSE FLORALS").
 */
export default function PageHero({
  image,
  alt,
  line1,
  italic,
  line2,
  align = "left",
  tone = "light",
  overlay = 0.32,
}: {
  image: string;
  alt: string;
  line1?: string;
  italic?: string;
  line2?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  overlay?: number;
}) {
  const text = tone === "light" ? "text-white" : "text-[#302B29]";
  return (
    <section className="relative w-full h-[62vh] min-h-[440px] pt-[68px]">
      <Image src={image} alt={alt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0" style={{ backgroundColor: `rgba(0,0,0,${overlay})` }} />
      <div
        className={`absolute inset-0 flex flex-col justify-center px-8 md:px-20 ${
          align === "center" ? "items-center text-center" : "items-start"
        }`}
      >
        {line1 && (
          <h1 className={`display ${text} leading-[1.02]`} style={{ fontSize: "clamp(44px, 7vw, 104px)" }}>
            {line1}
          </h1>
        )}
        {(italic || line2) && (
          <h1 className={`${text} leading-[1.02]`} style={{ fontSize: "clamp(44px, 7vw, 104px)" }}>
            {italic && <span className="font-times-italic italic font-light">{italic} </span>}
            {line2 && <span className="display">{line2}</span>}
          </h1>
        )}
      </div>
    </section>
  );
}
