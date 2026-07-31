export type WorkflowIcon =
  | "headset"
  | "phone-missed"
  | "zap"
  | "calendar-check"
  | "calendar-clock"
  | "clipboard-list"
  | "circle-help"
  | "route"
  | "file-text"
  | "messages-square"
  | "refresh"
  | "database"
  | "chart-column"
  | "bell"
  | "shield-check"
  | "workflow"
  | "users-round";

export type PricingTierId =
  | "quick-start"
  | "connected-workflow"
  | "growth-system"
  | "ai-calling"
  | "advanced";

export type WorkflowBadge =
  | "Best first step"
  | "Quick win"
  | "High impact"
  | "AI calling"
  | "Admin saver"
  | "Advanced";

export type ThemeConfig = {
  /** Primary action color. Designed for white text. */
  primary: string;
  /** Supporting highlight color. Designed for `dark` text. */
  accent: string;
  /** Backward-compatible strong token; normally matches `primary`. */
  accentStrong: string;
  /** Translucent tint derived from the primary color. */
  accentSoft: string;
  /** Backward-compatible secondary token; normally matches `accent`. */
  secondary: string;
  dark: string;
  background: string;
};

/**
 * Fox Valley Systems runs one palette across every route.
 *
 * The previous build gave each vertical its own hue, which meant seventeen
 * different-looking products sharing one name. A single theme keeps the brand
 * legible; verticals differentiate through copy, imagery, and workflows —
 * not through color.
 */
export const foxValleyTheme: ThemeConfig = {
  /** Electric blue accent. */
  primary: "#2563eb",
  /** Silver highlight. */
  accent: "#6b7280",
  accentStrong: "#1d4ed8",
  accentSoft: "rgba(37, 99, 235, 0.09)",
  secondary: "#6b7280",
  /** Dark canvas, used only by routes that opt into themeMode="dark". */
  dark: "#0a0c0f",
  /** Default page surface. */
  background: "#fafafa",
};

export type BuildNote = {
  title: string;
  detail: string;
};

export type SiteConfig = {
  slug: string;
  industry: string;
  audienceLabel: string;
  audiencePlural: string;
  segment: string;
  persona: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  mobileHeadline: string;
  outcomeFocus: string;
  splashFeature: string;
  quickStartPitch: string;
  scaleLabel: string;
  scaleOptions: readonly string[];
  softwareLabel: string;
  softwarePlaceholder: string;
  bottlenecks: readonly string[];
  trustItems: readonly string[];
  buildNotes: readonly BuildNote[];
  complianceNote: string;
  consentCopy: string;
  chatWelcome: string;
  chatSuggestions: readonly string[];
  metaTitle: string;
  metaDescription: string;
  theme: ThemeConfig;
};

export type PricingTier = {
  id: PricingTierId;
  name: string;
  setup: number;
  timeline: string;
  summary: string;
  usageNote?: string;
};

export type WorkflowItem = {
  id: string;
  name: string;
  description: string;
  outcome?: string;
  categories: readonly string[];
  icon: WorkflowIcon;
  badge?: WorkflowBadge;
  requirement?: string;
  tier: PricingTierId;
};

export type IcpBundle = {
  categoryTabs: readonly string[];
  siteConfig: SiteConfig;
  pricingTiers: readonly PricingTier[];
  workflows: readonly WorkflowItem[];
};

export type LegacyThemeConfig = {
  accent: string;
  accentStrong: string;
  accentSoft: string;
  secondary: string;
};

export type IcpBundleSource = {
  categoryTabs: readonly string[];
  siteConfig: Omit<SiteConfig, "theme"> & {
    theme: LegacyThemeConfig;
  };
  pricingTiers: readonly PricingTier[];
  workflows: readonly WorkflowItem[];
};

const pricingTierIds = new Set<PricingTierId>([
  "quick-start",
  "connected-workflow",
  "growth-system",
  "ai-calling",
  "advanced",
]);

const workflowIcons = new Set<WorkflowIcon>([
  "headset",
  "phone-missed",
  "zap",
  "calendar-check",
  "calendar-clock",
  "clipboard-list",
  "circle-help",
  "route",
  "file-text",
  "messages-square",
  "refresh",
  "database",
  "chart-column",
  "bell",
  "shield-check",
  "workflow",
  "users-round",
]);

const hexColorPattern = /^#[0-9a-f]{6}$/i;
const rgbaColorPattern =
  /^rgba\(\s*(?:\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\s*,\s*(?:\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\s*,\s*(?:\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\s*,\s*(?:0(?:\.\d+)?|1(?:\.0+)?)\s*\)$/i;

function assertUnique(values: readonly string[], label: string, slug: string) {
  if (new Set(values).size !== values.length) {
    throw new Error(`Invalid ${label} for trusted ICP config "${slug}".`);
  }
}

function assertTheme(theme: ThemeConfig, slug: string) {
  const hexValues = [
    theme.primary,
    theme.accent,
    theme.accentStrong,
    theme.secondary,
    theme.dark,
    theme.background,
  ];

  if (
    hexValues.some((value) => !hexColorPattern.test(value)) ||
    !rgbaColorPattern.test(theme.accentSoft)
  ) {
    throw new Error(`Invalid theme for trusted ICP config "${slug}".`);
  }
}

/**
 * Converts one of the original per-ICP modules into the shared, serializable
 * bundle shape and validates its internal references at module initialization.
 */
export function defineIcpBundle(
  source: IcpBundleSource,
  theme: ThemeConfig,
): IcpBundle {
  const slug = source.siteConfig.slug;
  const categoryTabs = [...source.categoryTabs];
  const pricingTiers = source.pricingTiers.map((tier) => ({ ...tier }));
  const workflows = source.workflows.map((workflow) => ({
    ...workflow,
    categories: [...workflow.categories],
  }));
  const siteConfig: SiteConfig = {
    ...source.siteConfig,
    scaleOptions: [...source.siteConfig.scaleOptions],
    bottlenecks: [...source.siteConfig.bottlenecks],
    trustItems: [...source.siteConfig.trustItems],
    buildNotes: source.siteConfig.buildNotes.map((note) => ({ ...note })),
    chatSuggestions: [...source.siteConfig.chatSuggestions],
    theme: { ...theme },
  };

  if (!slug || categoryTabs.length === 0 || !categoryTabs.includes("All")) {
    throw new Error(`Invalid trusted ICP config "${slug || "unknown"}".`);
  }

  assertUnique(categoryTabs, "category tabs", slug);
  assertUnique(
    pricingTiers.map((tier) => tier.id),
    "pricing tiers",
    slug,
  );
  assertUnique(
    workflows.map((workflow) => workflow.id),
    "workflow IDs",
    slug,
  );
  assertTheme(theme, slug);

  const categories = new Set(categoryTabs);
  const tierIds = new Set(pricingTiers.map((tier) => tier.id));

  for (const tier of pricingTiers) {
    if (
      !pricingTierIds.has(tier.id) ||
      !Number.isFinite(tier.setup) ||
      tier.setup <= 0
    ) {
      throw new Error(`Invalid pricing tier in trusted ICP config "${slug}".`);
    }
  }

  for (const workflow of workflows) {
    if (
      !workflow.id ||
      !workflowIcons.has(workflow.icon) ||
      !tierIds.has(workflow.tier) ||
      workflow.categories.length === 0 ||
      workflow.categories.some(
        (category) => category === "All" || !categories.has(category),
      )
    ) {
      throw new Error(`Invalid workflow in trusted ICP config "${slug}".`);
    }
  }

  return {
    categoryTabs,
    siteConfig,
    pricingTiers,
    workflows,
  };
}

/**
 * Returns pricing only for a workflow registered in the supplied bundle.
 * It deliberately throws instead of silently falling back to another tier.
 */
export function getWorkflowPricing(
  bundle: IcpBundle,
  workflow: WorkflowItem,
): PricingTier {
  const registeredWorkflow = bundle.workflows.find(
    (candidate) => candidate.id === workflow.id,
  );

  if (!registeredWorkflow || registeredWorkflow.tier !== workflow.tier) {
    throw new Error(
      `Unknown workflow "${workflow.id}" for trusted ICP config "${bundle.siteConfig.slug}".`,
    );
  }

  const pricing = bundle.pricingTiers.find(
    (tier) => tier.id === registeredWorkflow.tier,
  );

  if (!pricing) {
    throw new Error(
      `Missing pricing tier "${registeredWorkflow.tier}" for trusted ICP config "${bundle.siteConfig.slug}".`,
    );
  }

  return pricing;
}

export function categoryCount(bundle: IcpBundle, category: string): number {
  if (category === "All") {
    return bundle.workflows.length;
  }

  if (!bundle.categoryTabs.includes(category)) {
    return 0;
  }

  return bundle.workflows.filter((workflow) =>
    workflow.categories.includes(category),
  ).length;
}
