// A thin illustrated ribbon laid loosely across the page, like a length of
// silk left on a table — a section divider with a literal material reference
// instead of a plain rule line.
export default function RibbonDivider({ className, color = "#4A1420" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 400 28" fill="none" className={className} preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M2 14c30-11 55 11 85 4s45-16 75-9 50 15 75 8 55-14 80-4 55 12 80 3"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M2 14c30-11 55 11 85 4s45-16 75-9 50 15 75 8 55-14 80-4 55 12 80 3"
        stroke={color}
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.4"
        transform="translate(0, 2.5)"
      />
    </svg>
  );
}
