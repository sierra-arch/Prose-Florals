"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Guard: if IntersectionObserver is unavailable, reveal immediately.
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    // If already in (or above) the viewport on mount, reveal immediately.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      setInView(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );
    obs.observe(el);

    // Fail-safe: never let content stay hidden. If the observer hasn't
    // fired within 2.5s (e.g. fast programmatic scroll, edge browsers),
    // reveal anyway so nothing is ever stuck invisible.
    const failSafe = window.setTimeout(() => setInView(true), 2500);

    return () => {
      obs.disconnect();
      window.clearTimeout(failSafe);
    };
  }, []);

  const Component = Tag as React.ElementType;
  return (
    <Component
      ref={ref}
      className={`reveal ${inView ? "in" : ""} ${className}`}
      style={{ animationDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Component>
  );
}
