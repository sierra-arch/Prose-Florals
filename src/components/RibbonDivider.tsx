import Image from "next/image";

/**
 * Real photographed silk ribbon curl (not a flat SVG/CSS shape) — used
 * sparingly, once per page at most, as a single confident accent.
 */
export default function RibbonDivider({ className = "w-16 h-24" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Image src="/images/brand/ribbon-twirl.png" alt="" fill sizes="140px" className="object-contain drop-shadow-[0_10px_16px_rgba(23,19,15,0.25)]" />
    </div>
  );
}
