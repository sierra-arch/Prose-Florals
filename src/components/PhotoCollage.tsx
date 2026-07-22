import Image from "next/image";

export type CollageItem = {
  src: string;
  alt?: string;
  /** absolute position + size, expressed in % of the collage box */
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  w: string; // width, e.g. "26%"
  ratio?: string; // aspect ratio, e.g. "3/4"
  tilt?: "l" | "r" | "ls" | "rs" | "";
  z?: number;
  delay?: number;
};

// A scattered, overlapping editorial photo cluster (Terre Verde / Drifter Floral style).
// Positioned absolutely inside a fixed-height stage on desktop; stacks on mobile.
export default function PhotoCollage({
  items,
  className = "",
  height = "h-[520px] md:h-[640px]",
  mobileGrid = true,
}: {
  items: CollageItem[];
  className?: string;
  height?: string;
  mobileGrid?: boolean;
}) {
  return (
    <div className={className}>
      {/* Desktop: absolutely-positioned scatter (always visible, gentle fade-in via CSS) */}
      <div className={`relative hidden md:block ${height}`}>
        {items.map((it, i) => (
          <div
            key={i}
            className={`collage-item absolute ${it.tilt ? `tilt-${it.tilt}` : ""}`}
            style={{
              top: it.top,
              left: it.left,
              right: it.right,
              bottom: it.bottom,
              width: it.w,
              zIndex: it.z ?? i,
              animationDelay: `${it.delay ?? i * 90}ms`,
            }}
          >
            <div className="relative w-full plate overflow-hidden" style={{ aspectRatio: it.ratio ?? "3/4" }}>
              <Image src={it.src} alt={it.alt ?? "Prose Florals floral design"} fill sizes="40vw" className="object-cover" priority={i < 3} />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: tidy 2-col scatter with slight tilts */}
      {mobileGrid && (
        <div className="grid grid-cols-2 gap-4 md:hidden px-1">
          {items.map((it, i) => (
            <div
              key={i}
              className={`relative overflow-hidden plate ${i % 3 === 0 ? "col-span-2 aspect-[16/10]" : "aspect-[3/4]"} ${i % 2 ? "mt-4" : ""}`}
            >
              <Image src={it.src} alt={it.alt ?? "Prose Florals floral design"} fill sizes="50vw" className="object-cover" priority={i < 2} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
