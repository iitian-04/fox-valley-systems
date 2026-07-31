/**
 * Fox Valley Systems brand marks.
 *
 * The mark is a single vector traced from the supplied logo artwork. The dark
 * geometry uses `currentColor` so the mark inherits surrounding type color and
 * stays legible on both the near-black app canvas and light legal pages. The
 * ears and the inner wedge keep the brand's warm accent.
 */

export const BRAND_NAME = "Fox Valley Systems";
export const BRAND_SHORT = "Fox Valley";
/** The mark keeps the logo's own orange; the UI accent is electric blue. */
export const BRAND_ACCENT = "#e8722a";

const NAVY_PATH =
  "M551 108 L281 419 L241 380 L159 471 L276 647 L493 344 L554 403 Z M458 106 L128 107 L11 218 L1 241 L2 623 L127 483 L127 233 L352 227 Z";

const ACCENT_PATH =
  "M275 310 L176 310 L159 322 L128 353 L128 482 L276 317 Z M440 1 L353 86 L440 86 Z M142 0 L142 86 L229 86 Z";

export function FoxValleyMark({
  className = "fv-brand-mark",
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 555 648"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <path fill="currentColor" fillRule="evenodd" d={NAVY_PATH} />
      <path
        fill={`var(--fv-mark-accent, ${BRAND_ACCENT})`}
        fillRule="evenodd"
        d={ACCENT_PATH}
      />
    </svg>
  );
}

export function FoxValleyLockup({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`fv-brand${compact ? " compact" : ""}`}>
      <FoxValleyMark />
      <span className="fv-brand-name">
        <b>Fox Valley</b>
        <i>Systems</i>
      </span>
    </span>
  );
}
