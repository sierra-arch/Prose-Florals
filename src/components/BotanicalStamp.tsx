// A single-line, engraved-style botanical mark — the site's recurring signature motif.
// Deliberately used sparingly: footer signature, one homepage section divider.
export default function BotanicalStamp({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Stamp ring with perforation ticks, like a vintage postage stamp */}
      <circle cx="50" cy="50" r="45" strokeWidth="0.8" />
      {Array.from({ length: 28 }).map((_, i) => {
        const angle = (i / 28) * 360;
        return (
          <line
            key={i}
            x1="50"
            y1="3"
            x2="50"
            y2="6.5"
            strokeWidth="0.8"
            transform={`rotate(${angle} 50 50)`}
          />
        );
      })}
      <circle cx="50" cy="50" r="38" strokeWidth="0.5" opacity="0.5" />

      {/* Stem + leaves */}
      <path d="M50 78 C 49 68, 51 62, 50 54" strokeWidth="1" />
      <path d="M50 70 C 43 68, 39 62, 41 57 C 47 58, 50 63, 50 70 Z" strokeWidth="0.9" />
      <path d="M50 65 C 57 63, 61 57, 59 52 C 53 53, 50 58, 50 65 Z" strokeWidth="0.9" />

      {/* Bloom — eight elongated petals radiating from center */}
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="34"
          rx="4"
          ry="11.5"
          strokeWidth="0.9"
          transform={`rotate(${i * 45} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="3.2" strokeWidth="0.9" />
    </svg>
  );
}
