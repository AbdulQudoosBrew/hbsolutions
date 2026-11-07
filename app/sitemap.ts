import type { MetadataRoute } from "next";
import { getAllCategorySlugs } from "@/lib/constants/categoryPages";
import {
  getAllCollectionParams,
  getAllProductParams,
} from "@/lib/constants/collectionPages";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/featured-products`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const categories = getAllCategorySlugs().map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const collections = getAllCollectionParams().map(({ slug, collection }) => ({
    url: `${SITE_URL}/${slug}/${collection}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const products = getAllProductParams().map(({ slug, collection, product }) => ({
    url: `${SITE_URL}/${slug}/${collection}/${product}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...categories, ...collections, ...products];
}
