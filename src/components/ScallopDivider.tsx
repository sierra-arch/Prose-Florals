// A repeating scalloped edge between two sections. `bumpColor` bulges into
// `gapColor`; `flip` points the bumps the other direction. Used sparingly —
// one motif per seam, not a global border treatment.
export default function ScallopDivider({
  bumpColor,
  gapColor,
  flip = false,
  bumpSize = 20,
  className,
}: {
  bumpColor: string;
  gapColor: string;
  flip?: boolean;
  bumpSize?: number;
  className?: string;
}) {
  const patternId = `scallop-${bumpColor.replace(/[^a-zA-Z0-9]/g, "")}-${flip ? "up" : "down"}`;
  const diameter = bumpSize * 2;

  return (
    <div
      className={className}
      style={{ backgroundColor: gapColor, height: bumpSize, lineHeight: 0 }}
      aria-hidden="true"
    >
      <svg width="100%" height={bumpSize} preserveAspectRatio="none">
        <defs>
          <pattern
            id={patternId}
            width={diameter}
            height={bumpSize}
            patternUnits="userSpaceOnUse"
          >
            <circle cx={bumpSize} cy={flip ? bumpSize : 0} r={bumpSize} fill={bumpColor} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}
