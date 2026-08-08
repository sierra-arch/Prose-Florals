// Licensed hand-drawn botanical/boho line art (public/images/sketches),
// rendered as a CSS mask so it tints with `currentColor` like the site's
// other line-art accents (doodle-star, flourish) instead of shipping as a
// fixed-color raster or bloating markup with inline SVG paths.
const SKETCHES = {
  sprig: "/images/sketches/sprig.svg",
  "branch-bloom": "/images/sketches/branch-bloom.svg",
  ginkgo: "/images/sketches/ginkgo.svg",
  "magnolia-bloom": "/images/sketches/magnolia-bloom.svg",
  "cotton-branch": "/images/sketches/cotton-branch.svg",
  "hand-bouquet": "/images/sketches/hand-bouquet.svg",
} as const;

export type SketchName = keyof typeof SKETCHES;

export default function Sketch({ name, className }: { name: SketchName; className?: string }) {
  const url = SKETCHES[name];
  return (
    <span
      className={className}
      aria-hidden="true"
      style={{
        display: "inline-block",
        backgroundColor: "currentColor",
        WebkitMaskImage: `url(${url})`,
        maskImage: `url(${url})`,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}
