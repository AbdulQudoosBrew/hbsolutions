import type { MetadataRoute } from "next";

const SITE_URL = "https://hbsolutions.uk";

const PATHS = [
  "/",
  "/featured-products",
  "/available-on-delivery",
  "/available-on-delivery/wall-panels",
  "/available-on-delivery/slat-panels",
  "/available-on-delivery/spc-flooring",
  "/bathrooms",
  "/sanitaryware",
  "/taps",
  "/showers",
  "/shower-enclosures",
  "/baths",
  "/panels",
  "/panels/wpc",
  "/panels/acoustic-panels",
  "/aluminium",
  "/flooring",
  "/flooring/spc-flooring",
  "/wall-tiles",
  "/kitchens",
  "/artificial-grass",
  "/silicone",
  "/accessories",
  "/verandas",
  "/home-furniture",
  "/outdoor",
  "/corners",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString().slice(0, 10);

  return PATHS.map((path, index) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
