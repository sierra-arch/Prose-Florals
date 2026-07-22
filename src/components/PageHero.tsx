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
    <section className="relative w-full h-[88vh] min-h-[600px]">
      <Image src={image} alt={alt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0" style={{ backgroundColor: `rgba(0,0,0,${overlay})` }} />
      {/* Soft gradient at the base so the low-placed title stays legible */}
      {align !== "center" && (
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/45 to-transparent" />
      )}
      <div
        className={`absolute inset-0 flex flex-col px-8 md:px-16 lg:px-24 ${
          align === "center"
            ? "items-center text-center justify-center"
            : "items-start justify-end pb-16 md:pb-24"
        }`}
      >
        {line1 && (
          <h1 className={`display ${text} leading-[0.98]`} style={{ fontSize: "clamp(56px, 10vw, 150px)" }}>
            {line1}
          </h1>
        )}
        {(italic || line2) && (
          <h1 className={`${text} leading-[0.98]`} style={{ fontSize: "clamp(56px, 10vw, 150px)" }}>
            {italic && <span className="font-times-italic italic font-light">{italic} </span>}
            {line2 && <span className="display">{line2}</span>}
          </h1>
        )}
      </div>
    </section>
  );
}
