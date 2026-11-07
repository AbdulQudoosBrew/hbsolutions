import type { MetadataRoute } from "next";

const SITE_URL = "https://hbsolutions.uk";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/edit", "/cart", "/favourites"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

