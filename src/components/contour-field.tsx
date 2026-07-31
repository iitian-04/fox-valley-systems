"use client";

import { useEffect, useRef } from "react";

/**
 * Animated topographic contour field.
 *
 * A survey-map texture for a company called Fox Valley: iso-lines traced
 * through a slowly drifting scalar field, so the "terrain" breathes rather
 * than scrolls. Everything is generated at runtime — no images, no shaders,
 * no dependencies.
 *
 * How it works:
 *   1. A value-noise function (hash + smoothstep interpolation) gives a
 *      deterministic height for any point. Two octaves are enough; more just
 *      costs frames.
 *   2. The field is sampled on a coarse grid, then marching squares walks
 *      each cell and emits the line segments where the surface crosses a
 *      given height. One pass per contour level.
 *   3. Time offsets the noise input on the z axis, so levels drift through
 *      each other instead of sliding sideways.
 *
 * Cost control: the grid is deliberately coarse (cells are ~22 CSS px), the
 * canvas is capped at 1.5× DPR, and the whole thing pauses when scrolled out
 * of view or when the tab is hidden.
 */

type ContourFieldProps = {
  /** Height levels to trace. More lines = denser map, linearly more work. */
  levels?: number;
  /** Grid cell size in CSS pixels. Lower = smoother curves, more work. */
  cellSize?: number;
  /** Noise scale. Lower = broader, calmer landforms. */
  scale?: number;
  /** Drift rate through the field. */
  speed?: number;
  className?: string;
};

/** Deterministic 2D hash in [0,1). No allocations. */
function hash(x: number, y: number, z: number) {
  const n = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453;
  return n - Math.floor(n);
}

function smooth(t: number) {
  return t * t * (3 - 2 * t);
}

/** Value noise with cubic interpolation, sampled on an integer lattice. */
function noise(x: number, y: number, z: number) {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const xf = smooth(x - xi);
  const yf = smooth(y - yi);

  const a = hash(xi, yi, z);
  const b = hash(xi + 1, yi, z);
  const c = hash(xi, yi + 1, z);
  const d = hash(xi + 1, yi + 1, z);

  return (
    a * (1 - xf) * (1 - yf) +
    b * xf * (1 - yf) +
    c * (1 - xf) * yf +
    d * xf * yf
  );
}

/**
 * Two octaves: broad landforms carry the shape, a quieter second octave adds
 * ridge detail. The 0.78/0.22 split was tuned by rendering the field — heavier
 * second octaves turn the map into camouflage.
 */
function field(x: number, y: number, z: number) {
  return noise(x, y, z) * 0.78 + noise(x * 2.4, y * 2.4, z * 1.4) * 0.22;
}

/** Linear interpolation of the crossing point along a cell edge. */
function cross(a: number, b: number, level: number) {
  const d = b - a;
  return Math.abs(d) < 1e-6 ? 0.5 : (level - a) / d;
}

export function ContourField({
  levels = 7,
  cellSize = 14,
  scale = 0.011,
  speed = 0.009,
  className = "contour-field",
}: ContourFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let grid = new Float32Array(0);
    let frame = 0;
    let visible = true;
    let z = 0;

    const accent = () =>
      getComputedStyle(canvas).getPropertyValue("--contour-accent").trim() ||
      "rgba(59, 130, 246, 0.5)";
    const base = () =>
      getComputedStyle(canvas).getPropertyValue("--contour-line").trim() ||
      "rgba(255, 255, 255, 0.07)";

    let accentColor = accent();
    let baseColor = base();

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = rect.width;
      height = rect.height;
      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / cellSize) + 1;
      rows = Math.ceil(height / cellSize) + 1;
      grid = new Float32Array(cols * rows);
      accentColor = accent();
      baseColor = base();
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      // Sample the field once per frame; every level reads the same grid.
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          grid[r * cols + c] = field(c * cellSize * scale, r * cellSize * scale, z);
        }
      }

      ctx!.lineWidth = 1;
      ctx!.lineCap = "round";

      // A narrow band around the midpoint keeps lines grouped like real
      // contours instead of spreading into unrelated blobs.
      const spread = 0.24;
      for (let l = 0; l < levels; l++) {
        const level = 0.5 - spread / 2 + (l / Math.max(1, levels - 1)) * spread;

        // One ridge near the middle carries the accent; the rest are hairlines.
        const isRidge = l === Math.floor(levels * 0.42);
        ctx!.strokeStyle = isRidge ? accentColor : baseColor;
        ctx!.beginPath();

        for (let r = 0; r < rows - 1; r++) {
          for (let c = 0; c < cols - 1; c++) {
            const tl = grid[r * cols + c];
            const tr = grid[r * cols + c + 1];
            const br = grid[(r + 1) * cols + c + 1];
            const bl = grid[(r + 1) * cols + c];

            let idx = 0;
            if (tl > level) idx |= 8;
            if (tr > level) idx |= 4;
            if (br > level) idx |= 2;
            if (bl > level) idx |= 1;
            if (idx === 0 || idx === 15) continue;

            const x = c * cellSize;
            const y = r * cellSize;
            const top = { x: x + cellSize * cross(tl, tr, level), y };
            const right = { x: x + cellSize, y: y + cellSize * cross(tr, br, level) };
            const bottom = { x: x + cellSize * cross(bl, br, level), y: y + cellSize };
            const left = { x, y: y + cellSize * cross(tl, bl, level) };

            const seg = (a: { x: number; y: number }, b: { x: number; y: number }) => {
              ctx!.moveTo(a.x, a.y);
              ctx!.lineTo(b.x, b.y);
            };

            switch (idx) {
              case 1: case 14: seg(left, bottom); break;
              case 2: case 13: seg(bottom, right); break;
              case 3: case 12: seg(left, right); break;
              case 4: case 11: seg(top, right); break;
              case 6: case 9: seg(top, bottom); break;
              case 7: case 8: seg(left, top); break;
              // Saddles: two disjoint segments.
              case 5: seg(left, top); seg(bottom, right); break;
              case 10: seg(left, bottom); seg(top, right); break;
            }
          }
        }
        ctx!.stroke();
      }
    }

    function loop() {
      if (visible) {
        z += speed;
        draw();
      }
      frame = window.requestAnimationFrame(loop);
    }

    resize();
    draw();

    if (!reduceMotion) {
      frame = window.requestAnimationFrame(loop);
    }

    // Pause off-screen and in background tabs.
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { rootMargin: "120px" },
    );
    io.observe(canvas);

    const onVisibility = () => {
      visible = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", onVisibility);

    const ro = new ResizeObserver(() => {
      resize();
      draw();
    });
    ro.observe(canvas);

    return () => {
      window.cancelAnimationFrame(frame);
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [levels, cellSize, scale, speed]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
