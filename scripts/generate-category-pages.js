const fs = require("fs");
const path = require("path");

const ROOT = "D:/web-developement/hbsolutions";
const TEMP = path.join(ROOT, "temp-pages");

function decodeEntities(text) {
  return String(text || "")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/Â\s*/g, "")
    .replace(/â€™/g, "'")
    .replace(/â€˜/g, "'")
    .replace(/â€œ/g, '"')
    .replace(/â€/g, '"')
    .replace(/â€¦/g, "...")
    .replace(/â€“/g, "–")
    .replace(/â€”/g, "—")
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function brandify(text) {
  return decodeEntities(text)
    .replace(/Giavani Bathrooms/gi, "Haris Building Solutions")
    .replace(/Giavani bathrooms/gi, "Haris Building Solutions")
    .replace(/\bGiavani\b/gi, "Haris Building Solutions");
}

function descriptionFromHtml(slug) {
  const file = path.join(TEMP, `${slug}.html`);
  if (!fs.existsSync(file)) return "";
  const html = fs.readFileSync(file, "utf8");
  const blocks = [
    ...html.matchAll(
      /elementor-widget-text-editor[\s\S]*?<div class="elementor-widget-container">([\s\S]*?)<\/div>/gi
    ),
  ];
  for (const block of blocks) {
    const text = decodeEntities(block[1].replace(/<[^>]+>/g, " "));
    if (
      text.length > 60 &&
      !/cookie|copyright|privacy|menu search/i.test(text)
    ) {
      return text;
    }
  }
  return "";
}

function descriptionFromExtracted(page) {
  if (!page || !page.desc) return "";
  let text = decodeEntities(page.desc);
  const title = decodeEntities(page.title || "");
  if (title && text.startsWith(title)) {
    text = text.slice(title.length).trim();
  }
  // Sometimes title repeats twice
  if (title && text.startsWith(title)) {
    text = text.slice(title.length).trim();
  }
  const cut = text.search(/VIEW OUR (COLLECTION|RANGE)|OUR COLLECTION/i);
  if (cut > 0) text = text.slice(0, cut).trim();
  return text;
}

const clean = JSON.parse(
  fs.readFileSync(path.join(TEMP, "clean.json"), "utf8").replace(/^\uFEFF/, "")
);
const pages = Array.isArray(clean) ? clean : [clean];

let extracted = [];
try {
  extracted = JSON.parse(
    fs
      .readFileSync(path.join(TEMP, "extracted.json"), "utf8")
      .replace(/^\uFEFF/, "")
  );
} catch {
  extracted = [];
}
const extractedBySlug = Object.fromEntries(
  (Array.isArray(extracted) ? extracted : []).map((p) => [p.slug, p])
);

function resolveDescription(page) {
  const fromClean = brandify(page.description || "");
  if (fromClean.length > 40) return fromClean;

  const fromHtml = brandify(descriptionFromHtml(page.slug));
  if (fromHtml.length > 40) return fromHtml;

  const fromExtracted = brandify(
    descriptionFromExtracted(extractedBySlug[page.slug])
  );
  if (fromExtracted.length > 40) return fromExtracted;

  return `Discover our ${page.title} range from Haris Building Solutions. Quality products selected for performance, style and lasting value.`;
}

function collectionLines(collections, indent = "      ") {
  return (collections || [])
    .map((col) => {
      return (
        `${indent}{\n` +
        `${indent}  id: ${JSON.stringify(col.id)},\n` +
        `${indent}  label: ${JSON.stringify(decodeEntities(col.label))},\n` +
        `${indent}  image: ${JSON.stringify(col.image)},\n` +
        `${indent}  href: ${JSON.stringify(col.href)},\n` +
        `${indent}},`
      );
    })
    .join("\n");
}

let out = `export type CategoryCollection = {
  id: string;
  label: string;
  image: string;
  href: string;
};

export type CategoryPageData = {
  slug: string;
  title: string;
  description: string;
  heroImage: string;
  bannerImage?: string;
  collections: CategoryCollection[];
};

export const CATEGORY_PAGES: Record<string, CategoryPageData> = {
`;

for (const p of pages) {
  out += `  "${p.slug}": {\n`;
  out += `    slug: ${JSON.stringify(p.slug)},\n`;
  out += `    title: ${JSON.stringify(decodeEntities(p.title))},\n`;
  out += `    description: ${JSON.stringify(resolveDescription(p))},\n`;
  out += `    heroImage: ${JSON.stringify(p.heroImage)},\n`;
  if (p.bannerImage) {
    out += `    bannerImage: ${JSON.stringify(p.bannerImage)},\n`;
  }
  out += `    collections: [\n`;
  out += collectionLines(p.collections) + "\n";
  out += `    ],\n`;
  out += `  },\n`;
}

const bySlug = Object.fromEntries(pages.map((p) => [p.slug, p]));
const extras = [
  { slug: "wpc-panels", title: "WPC Panels", from: "panels" },
  { slug: "shower-panels", title: "Shower Panels", from: "panels" },
  { slug: "bathrooms", title: "Bathrooms", from: "baths" },
  { slug: "kitchens", title: "Kitchens", from: "furniture" },
  { slug: "artificial-grass", title: "Artificial Grass", from: "flooring" },
  { slug: "silicone", title: "Silicone", from: "accessories" },
  { slug: "acoustic-panels", title: "Acoustic Panels", from: "panels" },
  { slug: "solid-panels", title: "Solid Panels", from: "panels" },
  { slug: "ceiling-panels", title: "Ceiling Panels", from: "panels" },
  { slug: "ceiling-tiles", title: "Ceiling Tiles", from: "wall-tiles" },
  { slug: "angle-trims", title: "Angle Trims / L Shape", from: "accessories" },
  { slug: "end-cap", title: "End Cap", from: "accessories" },
  { slug: "internal-corner", title: "Internal Corner", from: "accessories" },
  { slug: "external-corner", title: "External Corner", from: "accessories" },
  { slug: "fascia", title: "Fascia", from: "accessories" },
  { slug: "corners", title: "Corners", from: "accessories" },
];

for (const e of extras) {
  if (bySlug[e.slug]) continue;
  const base = bySlug[e.from];
  if (!base) continue;
  out += `  "${e.slug}": {\n`;
  out += `    slug: ${JSON.stringify(e.slug)},\n`;
  out += `    title: ${JSON.stringify(e.title)},\n`;
  out += `    description: ${JSON.stringify(
    `Discover our ${e.title} range from Haris Building Solutions. Quality products selected for performance, style and lasting value.`
  )},\n`;
  out += `    heroImage: ${JSON.stringify(base.heroImage)},\n`;
  if (base.bannerImage) {
    out += `    bannerImage: ${JSON.stringify(base.bannerImage)},\n`;
  }
  out += `    collections: [\n`;
  out += collectionLines(base.collections) + "\n";
  out += `    ],\n`;
  out += `  },\n`;
}

out += `};

export function getCategoryPage(slug: string): CategoryPageData | null {
  return CATEGORY_PAGES[slug] ?? null;
}

export function getAllCategorySlugs(): string[] {
  return Object.keys(CATEGORY_PAGES);
}
`;

fs.writeFileSync(path.join(ROOT, "lib/constants/categoryPages.ts"), out);
console.log(
  "Wrote categoryPages.ts with",
  pages.length,
  "scraped categories + extras"
);
for (const p of pages) {
  const desc = resolveDescription(p);
  console.log(
    `${p.slug}: desc=${desc.length} chars, collections=${p.collections.length}`
  );
}
