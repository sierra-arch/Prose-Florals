// A wax-seal mark with an embossed botanical impression — the archival
// counterpart to BotanicalStamp. Used sparingly: a section marker, the
// footer/inquiry area. `color` sets the wax; default is deep burgundy.
export default function WaxSeal({
  className,
  color = "#4A1420",
}: {
  className?: string;
  color?: string;
}) {
  const id = `seal-${color.replace("#", "")}`;

  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <defs>
        <radialGradient id={id} cx="38%" cy="32%" r="75%">
          <stop offset="0%" stopColor={color} stopOpacity="0.55" />
          <stop offset="55%" stopColor={color} stopOpacity="0.92" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
      </defs>

      {/* Irregular wax blob — not a perfect circle, slight drips at the edge */}
      <path
        d="M60 8c14 0 22 7 30 14 9 8 17 15 18 27 1 13-6 21-13 30-8 10-15 19-28 20-12 1-22-6-32-13
           C25 78 15 71 10 59 5 47 8 35 16 25c8-9 17-17 30-17z"
        fill={`url(#${id})`}
      />
      <path
        d="M60 8c14 0 22 7 30 14 9 8 17 15 18 27 1 13-6 21-13 30-8 10-15 19-28 20-12 1-22-6-32-13
           C25 78 15 71 10 59 5 47 8 35 16 25c8-9 17-17 30-17z"
        fill="none"
        stroke="black"
        strokeOpacity="0.15"
        strokeWidth="1"
      />

      {/* Embossed botanical impression — lighter, pressed-in look */}
      <g
        fill="none"
        stroke="white"
        strokeOpacity="0.55"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M60 82c-1-9 1-16 0-23" strokeWidth="0.9" />
        <path d="M60 74c-6-2-9-7-8-11 5 1 8 5 8 11z" strokeWidth="0.8" />
        <path d="M60 70c5-1 8-6 7-10-5 1-8 5-7 10z" strokeWidth="0.8" />
        {Array.from({ length: 7 }).map((_, i) => (
          <ellipse
            key={i}
            cx="60"
            cy="46"
            rx="3.2"
            ry="9"
            strokeWidth="0.75"
            transform={`rotate(${(i * 360) / 7} 60 58)`}
          />
        ))}
        <circle cx="60" cy="58" r="2.6" strokeWidth="0.75" />
      </g>
    </svg>
  );
}
