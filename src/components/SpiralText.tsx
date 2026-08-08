"use client";

/**
 * Circular/spiral repeating text on an SVG path — a signature editorial
 * device (seen on moodboard references) built in pure SVG/CSS, no image
 * asset required. Slowly rotates.
 */
export default function SpiralText({
  text,
  className = "w-40 h-40",
  color = "currentColor",
  duration = 24,
}: {
  text: string;
  className?: string;
  color?: string;
  duration?: number;
}) {
  const id = `spiral-${text.replace(/\s+/g, "-").toLowerCase()}`;
  const repeated = `${text} • `.repeat(4);
  return (
    <div className={className} style={{ animation: `spin ${duration}s linear infinite` }}>
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <path id={id} d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
        </defs>
        <text fill={color} fontSize="12.5" letterSpacing="0.15em" style={{ fontFamily: "var(--font-copperplate)", textTransform: "uppercase" }}>
          <textPath href={`#${id}`}>{repeated}</textPath>
        </text>
      </svg>
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
