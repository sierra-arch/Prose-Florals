import Image from "next/image";

/**
 * Real photographed wax seal (not a flat SVG/CSS shape) — used sparingly,
 * once per page at most, as a single confident accent.
 */
export default function WaxSeal({ className = "w-28 h-28" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Image src="/images/brand/wax-seal.png" alt="" fill sizes="180px" className="object-contain drop-shadow-[0_12px_20px_rgba(23,19,15,0.35)]" />
    </div>
  );
}
