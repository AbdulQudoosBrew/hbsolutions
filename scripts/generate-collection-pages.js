const fs = require("fs");
const path = require("path");

const ROOT = "D:/web-developement/hbsolutions";
const collections = JSON.parse(
  fs.readFileSync(
    path.join(ROOT, "temp-collections/collections.json"),
    "utf8"
  )
);

function esc(s) {
  return JSON.stringify(s ?? "");
}

let out = `export type CollectionItem = {
  id: string;
  label: string;
  image: string;
  href: string;
};

export type CollectionPageData = {
  key: string;
  categorySlug: string;
  slug: string;
  title: string;
  description: string;
  heroImage?: string;
  image: string;
  itemsHeading?: string;
  items: CollectionItem[];
};

export const COLLECTION_PAGES: Record<string, CollectionPageData> = {
`;

for (const c of collections) {
  const hero =
    c.heroImage &&
    !/333\.png$|Screenshot_1\.jpg|logo/i.test(c.heroImage) &&
    !(c.items?.length === 1 && c.items[0].image === c.heroImage)
      ? c.heroImage
      : undefined;
  out += `  ${esc(c.key)}: {\n`;
  out += `    key: ${esc(c.key)},\n`;
  out += `    categorySlug: ${esc(c.categorySlug)},\n`;
  out += `    slug: ${esc(c.slug)},\n`;
  out += `    title: ${esc(c.title)},\n`;
  out += `    description: ${esc(c.description)},\n`;
  if (hero) out += `    heroImage: ${esc(hero)},\n`;
  out += `    image: ${esc(c.image)},\n`;
  out += `    itemsHeading: "View Our Range",\n`;
  out += `    items: [\n`;
  for (const item of c.items || []) {
    const itemHref =
      (c.items || []).length > 1
        ? `/${c.categorySlug}/${c.slug}/${item.id}`
        : `/${c.categorySlug}/${c.slug}`;
    out += `      {\n`;
    out += `        id: ${esc(item.id)},\n`;
    out += `        label: ${esc(item.label)},\n`;
    out += `        image: ${esc(item.image)},\n`;
    out += `        href: ${esc(itemHref)},\n`;
    out += `      },\n`;
  }
  out += `    ],\n`;
  out += `  },\n`;
}

out += `};

export function getCollectionPage(
  categorySlug: string,
  collectionSlug: string
): CollectionPageData | null {
  return COLLECTION_PAGES[\`\${categorySlug}/\${collectionSlug}\`] ?? null;
}

export function getAllCollectionParams(): { slug: string; collection: string }[] {
  return Object.values(COLLECTION_PAGES).map((page) => ({
    slug: page.categorySlug,
    collection: page.slug,
  }));
}

export type ProductPageData = {
  key: string;
  categorySlug: string;
  collectionSlug: string;
  slug: string;
  title: string;
  description: string;
  image: string;
};

export const PRODUCT_PAGES: Record<string, ProductPageData> = {
`;

let productCount = 0;
for (const c of collections) {
  const items = c.items || [];
  if (items.length <= 1) continue;
  for (const item of items) {
    const key = `${c.categorySlug}/${c.slug}/${item.id}`;
    productCount += 1;
    out += `  ${esc(key)}: {\n`;
    out += `    key: ${esc(key)},\n`;
    out += `    categorySlug: ${esc(c.categorySlug)},\n`;
    out += `    collectionSlug: ${esc(c.slug)},\n`;
    out += `    slug: ${esc(item.id)},\n`;
    out += `    title: ${esc(item.label)},\n`;
    out += `    description: ${esc(
      `Discover ${item.label} from the ${c.title} range at Haris Building Solutions.`
    )},\n`;
    out += `    image: ${esc(item.image)},\n`;
    out += `  },\n`;
  }
}

out += `};

export function getProductPage(
  categorySlug: string,
  collectionSlug: string,
  productSlug: string
): ProductPageData | null {
  return (
    PRODUCT_PAGES[\`\${categorySlug}/\${collectionSlug}/\${productSlug}\`] ?? null
  );
}

export function getAllProductParams(): {
  slug: string;
  collection: string;
  product: string;
}[] {
  return Object.values(PRODUCT_PAGES).map((page) => ({
    slug: page.categorySlug,
    collection: page.collectionSlug,
    product: page.slug,
  }));
}
`;

fs.writeFileSync(path.join(ROOT, "lib/constants/collectionPages.ts"), out);
console.log(
  "Wrote collectionPages.ts with",
  collections.length,
  "collections and",
  productCount,
  "products"
);

// Update categoryPages.ts hrefs
const catPath = path.join(ROOT, "lib/constants/categoryPages.ts");
let catSrc = fs.readFileSync(catPath, "utf8");

function slugifyId(id) {
  return String(id)
    .replace(/^product\//, "")
    .replace(/^#/, "")
    .replace(/[^a-z0-9-]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

const MAIN = [
  "sanitaryware",
  "taps",
  "showers",
  "baths",
  "bath-screens",
  "shower-enclosures",
  "wetroom-screens",
  "shower-trays",
  "furniture",
  "heating",
  "mirrors-cabinets",
  "panels",
  "flooring",
  "wall-tiles",
  "accessories",
];

const EXTRA_MAP = {
  "wpc-panels": "panels",
  "shower-panels": "panels",
  kitchens: "furniture",
  "artificial-grass": "flooring",
  silicone: "accessories",
  "acoustic-panels": "panels",
  "solid-panels": "panels",
  "ceiling-panels": "panels",
  "ceiling-tiles": "wall-tiles",
  "angle-trims": "accessories",
  "end-cap": "accessories",
  "internal-corner": "accessories",
  "external-corner": "accessories",
  fascia: "accessories",
  corners: "accessories",
};

// Bathroom hub links straight to each category page (not /baths/...)
const BATHROOM_CATEGORY_HREFS = new Set([
  "sanitaryware",
  "taps",
  "showers",
  "baths",
  "bath-screens",
  "shower-enclosures",
  "wetroom-screens",
  "shower-trays",
  "furniture",
  "heating",
  "mirrors-cabinets",
]);

for (const cat of [...MAIN, ...Object.keys(EXTRA_MAP), "bathrooms"]) {
  const targetCat = EXTRA_MAP[cat] || cat;
  const re = new RegExp(
    `("${cat}": \\{[\\s\\S]*?collections: \\[)([\\s\\S]*?)(\\],\\n  \\},)`
  );
  catSrc = catSrc.replace(re, (_full, start, body, end) => {
    const updated = body.replace(
      /\{\s*id: "([^"]+)",\s*label: "([^"]+)",\s*image: "([^"]+)",\s*href: "[^"]*",\s*\}/g,
      (_m, id, label, image) => {
        const collectionSlug = slugifyId(id);
        const href =
          cat === "bathrooms" && BATHROOM_CATEGORY_HREFS.has(collectionSlug)
            ? `/${collectionSlug}`
            : `/${targetCat}/${collectionSlug}`;
        return `{\n        id: "${id}",\n        label: "${label}",\n        image: "${image}",\n        href: "${href}",\n      }`;
      }
    );
    return start + updated + end;
  });
}

catSrc = catSrc.replace(
  /("accessories": \{[\s\S]*?)heroImage: "https:\/\/giavanibathrooms\.com\/wp-content\/uploads\/2023\/10\/333\.png",\n/,
  "$1"
);
catSrc = catSrc.replaceAll(
  'heroImage: "https://giavanibathrooms.com/wp-content/uploads/2023/10/333.png"',
  'heroImage: "https://giavanibathrooms.com/wp-content/uploads/2026/03/accessories.jpg"'
);

fs.writeFileSync(catPath, catSrc);
console.log("Updated categoryPages.ts collection hrefs");
