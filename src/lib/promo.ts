export const PROMO_QUERY_PARAM = "utm_promo";
export const PROMO_CODE = "50";
export const PROMO_PERCENT_OFF = 50 as const;

const MAX_PROMO_WINDOW_MS = 26 * 60 * 60 * 1000;
const wholeDollarFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
const fractionalDollarFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export type PromotionInput = {
  code: string;
  expiresAt: string;
  timezone: string;
};

export type ResolvedPromotion = {
  requestedCode: string | null;
  applied: boolean;
  percentOff: 0 | 50;
  pricingMode: "regular" | "promotional";
  expiresAt: string | null;
  timezone: string | null;
};

const cleanShortText = (value: unknown, maxLength: number) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

export const isPromoCode = (value: unknown) => value === PROMO_CODE;

export const createLocalPromotion = (
  requestedCode: string,
  now = new Date(),
): PromotionInput | null => {
  if (!isPromoCode(requestedCode)) return null;

  const expiresAt = new Date(now);
  expiresAt.setHours(24, 0, 0, 0);

  return {
    code: PROMO_CODE,
    expiresAt: expiresAt.toISOString(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "local",
  };
};

export const resolvePromotion = (
  value: unknown,
  utmPromo: unknown,
  now = Date.now(),
): ResolvedPromotion => {
  const candidate = value && typeof value === "object"
    ? value as Record<string, unknown>
    : {};
  const requestedCode = cleanShortText(candidate.code, 20) || null;
  const rawExpiresAt = cleanShortText(candidate.expiresAt, 80);
  const timezone = cleanShortText(candidate.timezone, 100) || null;
  const expiresAtMs = rawExpiresAt ? Date.parse(rawExpiresAt) : Number.NaN;
  const remainingMs = expiresAtMs - now;
  const applied = (
    requestedCode === PROMO_CODE &&
    utmPromo === PROMO_CODE &&
    Number.isFinite(expiresAtMs) &&
    remainingMs > 0 &&
    remainingMs <= MAX_PROMO_WINDOW_MS
  );

  return {
    requestedCode,
    applied,
    percentOff: applied ? PROMO_PERCENT_OFF : 0,
    pricingMode: applied ? "promotional" : "regular",
    expiresAt: applied ? new Date(expiresAtMs).toISOString() : null,
    timezone,
  };
};

export const getLivePriceUsd = (regularPriceUsd: number, promoApplied: boolean) =>
  promoApplied ? regularPriceUsd / 2 : regularPriceUsd;

export const formatUsd = (amount: number) =>
  (Number.isInteger(amount) ? wholeDollarFormatter : fractionalDollarFormatter).format(amount);
