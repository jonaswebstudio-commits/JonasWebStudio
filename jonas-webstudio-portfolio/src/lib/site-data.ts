/** Studio inbox shown on the site and used as the fallback inquiry recipient. */
export const STUDIO_EMAIL = "jonas.webstudio@gmail.com";

/**
 * Indicative packages. Shown for orientation only — nothing is sold on the
 * site; every inquiry is quoted individually.
 *
 * `key` is the i18n key used in the UI, `name` the untranslated label used in
 * the inquiry email so the studio always reads it in one language.
 */
export const PRICING = [
  {
    key: "tierStarter",
    name: "Starter",
    price: "€245",
    features: ["f1", "f2", "f3", "f4"],
    featured: false,
  },
  {
    key: "tierGrowth",
    name: "Growth",
    price: "€495",
    features: ["f5", "f6", "f7", "f8"],
    featured: true,
  },
  {
    key: "tierPremium",
    name: "Premium",
    price: "€945",
    features: ["f9", "f10", "f11", "f12"],
    featured: false,
  },
] as const;

export const CARE_PLAN = {
  price: "€39",
  featureKeys: ["careF1", "careF2", "careF3", "careF4"],
} as const;

/** Inquiry package value used when no listed package fits. */
export const CUSTOM_PACKAGE_KEY = "pkgCustom";

/** Optional extras a visitor can tick when sending an inquiry. */
export const ADDONS = [
  { id: "care", key: "addonCare", name: "Care plan (hosting & maintenance)" },
  { id: "ecommerce", key: "addonEcom", name: "Online store (e-commerce)" },
  { id: "branding", key: "addonBranding", name: "Branding & identity" },
  { id: "copywriting", key: "addonCopy", name: "Copywriting" },
  { id: "seo", key: "addonSeo", name: "SEO setup" },
  { id: "multilang", key: "addonMultilang", name: "Multi-language version" },
] as const;

export type AddonId = (typeof ADDONS)[number]["id"];

/** Package i18n key -> "Name (price)" for the inquiry email. */
export function describePackage(key: string): string | null {
  if (key === CUSTOM_PACKAGE_KEY) return "Something else / not sure yet";
  const tier = PRICING.find((p) => p.key === key);
  return tier ? `${tier.name} (${tier.price})` : null;
}

/** Add-on ids -> untranslated labels, unknown ids dropped. */
export function describeAddons(ids: readonly string[]): string[] {
  return ADDONS.filter((a) => ids.includes(a.id)).map((a) => a.name);
}
