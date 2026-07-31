"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

/**
 * One motion primitive. That is the whole file, deliberately.
 *
 * The restrained reference set — Linear, Stripe, Vercel, Mercury — shares a
 * single entrance gesture: a short fade with a small rise, one easing curve,
 * applied identically to every element. Nothing loops. Nothing tilts. Nothing
 * follows the cursor. The perceived quality comes from consistency and
 * whitespace, not from variety of movement.
 *
 * An earlier version of this file had five primitives with blur, skew, scale,
 * magnetic hover and count-ups. Each was individually defensible and together
 * they read as a template. This replaces all of them.
 */

/** 12px rise, 520ms, one curve. Used everywhere without exception. */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  /** Stagger between siblings. Keep to multiples of 60ms, max ~180ms. */
  delay?: number;
  as?: "div" | "section" | "li" | "span" | "p" | "h1" | "h2";
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal${shown ? " is-shown" : ""} ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
