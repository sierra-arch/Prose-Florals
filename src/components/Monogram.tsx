// The recurring "PF" oval crest — a quiet, consistent brand mark used in
// 3-4 recurring spots (sticky header, section dividers, hero photo corners,
// watermarked into dark color blocks), matching the live site's device.
export default function Monogram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 100" className={className} aria-hidden="true">
      <ellipse cx="40" cy="50" rx="37" ry="47" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <ellipse cx="40" cy="50" rx="31" ry="41" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
      <text
        x="40"
        y="62"
        textAnchor="middle"
        fontFamily="var(--font-magnolia), 'Times New Roman', serif"
        fontSize="34"
        fill="currentColor"
      >
        PF
      </text>
    </svg>
  );
}
