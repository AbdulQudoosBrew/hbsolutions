import type { Metadata } from "next";
import { COMPANY, CONTACT_INFO } from "@/lib/constants/siteData";

export const SITE_URL = "https://hbsolutions.uk";
export const SITE_NAME = COMPANY.name;

export const DEFAULT_OG_IMAGE = "/web-header-scaled.png";

export const LOCAL_AREA = "Cheetham Hill, Manchester";

const CATEGORY_SEO_TITLES: Record<string, string> = {
  bathrooms: "Bathroom Supplies in Manchester",
  panels: "Waterproof Wall Panels in Manchester",
  flooring: "SPC Flooring in Manchester",
  aluminium: "Aluminium Roofing Panels in Manchester",
  "available-on-delivery": "PVC Wall Panels & Flooring for Delivery",
  kitchens: "Kitchen Units & Fitted Kitchens in Manchester",
  "wall-tiles": "Wall Tiles in Manchester",
  "artificial-grass": "Artificial Grass in Manchester",
  silicone: "CT1 Silicone & Trade Sealants in Manchester",
  accessories: "Bathroom Accessories & Trade Supplies Manchester",
  verandas: "Verandas & Outdoor Living Manchester",
  "home-furniture": "Home Furniture in Manchester",
  outdoor: "Outdoor Furniture & Decking Manchester",
  corners: "Wall Panel Corners & Trims Manchester",
  "featured-products": "Featured Building Materials in Manchester",
};

function clip(text: string, max = 158) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 1).replace(/\s+\S*$/, "")}…`;
}

export function withManchester(description: string) {
  const text = description.replace(/\s+/g, " ").trim();
  if (/manchester/i.test(text)) return clip(text);
  return clip(
    `${text} Supplied by Haris Building Solutions in Cheetham Hill, Manchester.`,
  );
}

export function categorySeoTitle(slug: string, fallbackTitle: string) {
  return CATEGORY_SEO_TITLES[slug] ?? `${fallbackTitle} in Manchester`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  image,
  index = true,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  index?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const desc = withManchester(description);
  const ogImage = image || DEFAULT_OG_IMAGE;

  return {
    title,
    description: desc,
    alternates: { canonical: url },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description: desc,
      url,
      siteName: SITE_NAME,
      locale: "en_GB",
      type: "website",
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description: desc,
      images: [ogImage],
    },
  };
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HardwareStore",
  name: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  email: CONTACT_INFO.email,
  telephone: CONTACT_INFO.phoneHref.replace("tel:0", "+44"),
  description:
    "Building materials supplier in Cheetham Hill, Manchester. Waterproof bathroom wall panels, WPC and acoustic slat panels, SPC flooring, bathrooms, kitchens and aluminium roofing for trade and retail.",
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT_INFO.address.street,
    addressLocality: "Cheetham Hill",
    addressRegion: "Greater Manchester",
    postalCode: CONTACT_INFO.address.postcode,
    addressCountry: "GB",
  },
  areaServed: [
    "Manchester",
    "Salford",
    "Bury",
    "Oldham",
    "Rochdale",
    "Stockport",
    "Trafford",
    "Greater Manchester",
  ],
  priceRange: "££",
  sameAs: [],
};
