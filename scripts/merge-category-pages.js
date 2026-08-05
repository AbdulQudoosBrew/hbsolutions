const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const extracted = JSON.parse(
  fs.readFileSync(path.join(ROOT, "temp-pages", "extracted.json"), "utf8")
);

// Load existing category pages via a tiny transform (TS object literal -> JS)
const existingSrc = fs.readFileSync(
  path.join(ROOT, "lib", "constants", "categoryPages.ts"),
  "utf8"
);
const start = existingSrc.indexOf("export const CATEGORY_PAGES");
const end = existingSrc.indexOf("export function getCategoryPage");
const objectSrc = existingSrc
  .slice(start, end)
  .replace(/^export const CATEGORY_PAGES[^=]*=\s*/, "CATEGORY_PAGES = ")
  .replace(/;\s*$/, "");
const sandbox = { CATEGORY_PAGES: null };
vm.runInNewContext(objectSrc + "; CATEGORY_PAGES = CATEGORY_PAGES;", sandbox);
const existing = sandbox.CATEGORY_PAGES;

const scrapedBySlug = Object.fromEntries(
  extracted.filter((p) => p.slug && !p.error).map((p) => [p.slug, p])
);

// Bathroom product categories from Giavani that belong under the HBS bathrooms hub
const BATHROOM_CHILD_SLUGS = [
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
];

const BATHROOM_HUB_LABELS = {
  sanitaryware: "Sanitaryware",
  taps: "Taps",
  showers: "Showers",
  baths: "Baths",
  "bath-screens": "Bath Screens",
  "shower-enclosures": "Shower Enclosures",
  "wetroom-screens": "Wetroom Screens",
  "shower-trays": "Shower Trays",
  furniture: "Bath Furniture",
  heating: "Heating",
  "mirrors-cabinets": "Mirrors",
};

const homeCards = JSON.parse(
  fs.readFileSync(path.join(ROOT, "temp-pages", "home-cards.json"), "utf8")
);
const homeImageBySlug = Object.fromEntries(
  homeCards.map((c) => [c.path.replace(/^\//, "").replace(/^panels-2$/, "panels"), c.image])
);

const BATHROOM_HUB_IMAGES = {
  sanitaryware:
    homeImageBySlug.sanitaryware ||
    "https://giavanibathrooms.com/wp-content/uploads/2026/05/sanitaryware.jpg",
  taps:
    homeImageBySlug.taps ||
    "https://giavanibathrooms.com/wp-content/uploads/2026/03/taps.jpg",
  showers:
    homeImageBySlug.showers ||
    "https://giavanibathrooms.com/wp-content/uploads/2026/03/showers.jpg",
  baths:
    homeImageBySlug.baths ||
    "https://giavanibathrooms.com/wp-content/uploads/2026/03/baths.jpg",
  "bath-screens":
    homeImageBySlug["bath-screens"] ||
    "https://giavanibathrooms.com/wp-content/uploads/2026/03/bath-screens.jpg",
  "shower-enclosures":
    homeImageBySlug["shower-enclosures"] ||
    "https://giavanibathrooms.com/wp-content/uploads/2026/03/Enclosures.jpg",
  "wetroom-screens":
    homeImageBySlug["wetroom-screens"] ||
    "https://giavanibathrooms.com/wp-content/uploads/2026/03/wetroom-screens.jpg",
  "shower-trays":
    homeImageBySlug["shower-trays"] ||
    "https://giavanibathrooms.com/wp-content/uploads/2026/03/trays.jpg",
  furniture:
    homeImageBySlug.furniture ||
    "https://giavanibathrooms.com/wp-content/uploads/2026/03/Furniture.jpg",
  heating:
    homeImageBySlug.heating ||
    "https://giavanibathrooms.com/wp-content/uploads/2026/03/heating.jpg",
  "mirrors-cabinets":
    homeImageBySlug["mirrors-cabinets"] ||
    "https://giavanibathrooms.com/wp-content/uploads/2026/03/mirrors.jpg",
};

function normalizePage(page) {
  const out = {
    slug: page.slug,
    title: page.title,
    description: page.description,
    collections: page.collections || [],
  };
  if (page.heroImage) out.heroImage = page.heroImage;
  if (page.bannerImage) out.bannerImage = page.bannerImage;
  if (page.collectionHeading) out.collectionHeading = page.collectionHeading;
  if (page.collectionAspect) out.collectionAspect = page.collectionAspect;
  // Accessories uses portrait cards on source
  if (page.slug === "accessories") {
    out.collectionHeading = out.collectionHeading || "View Our Range";
    out.collectionAspect = "portrait";
  }
  // Furniture title on HBS bathrooms context stays "Furniture" page title from source
  if (page.slug === "furniture") {
    out.title = "Furniture";
  }
  if (page.slug === "mirrors-cabinets") {
    out.title = "Mirrors/Cabinets";
  }
  if (page.slug === "panels") {
    out.title = "Wall & Ceiling Panels";
  }
  if (page.slug === "flooring") {
    out.title = "Flooring & Tiles";
  }
  return out;
}

function buildBathroomsHub() {
  const baths = scrapedBySlug.baths || existing.baths;
  return {
    slug: "bathrooms",
    title: "Bathrooms",
    description:
      "Explore our full bathrooms range — sanitaryware, taps, showers, baths, bath screens, shower enclosures, wetroom screens, shower trays, bath furniture, heating and mirrors — selected for performance, style and lasting value.",
    heroImage:
      (baths && baths.heroImage) ||
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/category-header4.jpg",
    bannerImage:
      (baths && baths.bannerImage) ||
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/baths-1.jpg",
    collectionHeading: "Bathroom Categories",
    collections: BATHROOM_CHILD_SLUGS.map((id) => ({
      id,
      label: BATHROOM_HUB_LABELS[id],
      image: BATHROOM_HUB_IMAGES[id],
      href: `/${id}`,
    })),
  };
}

// Merge: scraped Giavani pages overwrite matching existing; extras kept
const merged = { ...existing };
for (const [slug, page] of Object.entries(scrapedBySlug)) {
  merged[slug] = normalizePage(page);
}
merged.bathrooms = buildBathroomsHub();

// Keep HBS-only extras, but refresh collections from related scraped sources where they were cloned
const EXTRA_FROM = {
  "wpc-panels": "panels",
  "shower-panels": "panels",
  "acoustic-panels": "panels",
  "solid-panels": "panels",
  "ceiling-panels": "panels",
  "ceiling-tiles": "wall-tiles",
  kitchens: "furniture",
  "artificial-grass": "flooring",
  silicone: "accessories",
  "angle-trims": "accessories",
  "end-cap": "accessories",
  "internal-corner": "accessories",
  "external-corner": "accessories",
  fascia: "accessories",
  corners: "accessories",
};

for (const [extraSlug, fromSlug] of Object.entries(EXTRA_FROM)) {
  const base = merged[fromSlug];
  const prev = existing[extraSlug];
  if (!base || !prev) continue;
  merged[extraSlug] = {
    ...prev,
    // Keep custom titles/descriptions for HBS-only pages
    heroImage: base.heroImage || prev.heroImage,
    bannerImage: base.bannerImage || prev.bannerImage,
    collectionHeading: base.collectionHeading || prev.collectionHeading,
    collectionAspect: base.collectionAspect || prev.collectionAspect,
    collections: base.collections,
  };
}

function emitPage(slug, page) {
  const lines = [];
  lines.push(`  "${slug}": {`);
  lines.push(`    slug: ${JSON.stringify(page.slug)},`);
  lines.push(`    title: ${JSON.stringify(page.title)},`);
  if (slug === "bathrooms") {
    lines.push(`    description:`);
    lines.push(`      ${JSON.stringify(page.description)},`);
  } else {
    lines.push(`    description: ${JSON.stringify(page.description)},`);
  }
  if (page.heroImage) {
    lines.push(`    heroImage: ${JSON.stringify(page.heroImage)},`);
  }
  if (page.bannerImage) {
    lines.push(`    bannerImage: ${JSON.stringify(page.bannerImage)},`);
  }
  if (page.collectionHeading) {
    lines.push(
      `    collectionHeading: ${JSON.stringify(page.collectionHeading)},`
    );
  }
  if (page.collectionAspect) {
    lines.push(
      `    collectionAspect: ${JSON.stringify(page.collectionAspect)},`
    );
  }
  lines.push(`    collections: [`);
  for (const c of page.collections || []) {
    lines.push(`      {`);
    lines.push(`        id: ${JSON.stringify(c.id)},`);
    lines.push(`        label: ${JSON.stringify(c.label)},`);
    lines.push(`        image: ${JSON.stringify(c.image)},`);
    lines.push(`        href: ${JSON.stringify(c.href)},`);
    lines.push(`      },`);
  }
  lines.push(`    ],`);
  lines.push(`  },`);
  return lines.join("\n");
}

// Stable-ish order: Giavani cats first (alpha as before-ish), then bathrooms hub + extras
const order = [
  "accessories",
  "bath-screens",
  "baths",
  "flooring",
  "furniture",
  "heating",
  "mirrors-cabinets",
  "panels",
  "sanitaryware",
  "shower-enclosures",
  "shower-trays",
  "showers",
  "taps",
  "wall-tiles",
  "wetroom-screens",
  "wpc-panels",
  "shower-panels",
  "bathrooms",
  "kitchens",
  "artificial-grass",
  "silicone",
  "acoustic-panels",
  "solid-panels",
  "ceiling-panels",
  "ceiling-tiles",
  "angle-trims",
  "end-cap",
  "internal-corner",
  "external-corner",
  "fascia",
  "corners",
];

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
  heroImage?: string;
  bannerImage?: string;
  /** Section title above the grid. Defaults to "View Our Collection". */
  collectionHeading?: string;
  /** Card image ratio. Accessories uses portrait like the reference site. */
  collectionAspect?: "square" | "portrait";
  collections: CategoryCollection[];
};

export const CATEGORY_PAGES: Record<string, CategoryPageData> = {
`;

for (const slug of order) {
  if (!merged[slug]) continue;
  out += emitPage(slug, merged[slug]) + "\n";
}

// Any unexpected leftovers
for (const slug of Object.keys(merged).sort()) {
  if (order.includes(slug)) continue;
  out += emitPage(slug, merged[slug]) + "\n";
}

out += `};

export function getCategoryPage(slug: string): CategoryPageData | null {
  return CATEGORY_PAGES[slug] ?? null;
}

export function getAllCategorySlugs(): string[] {
  return Object.keys(CATEGORY_PAGES);
}
`;

fs.writeFileSync(
  path.join(ROOT, "lib", "constants", "categoryPages.ts"),
  out,
  "utf8"
);

// Diff summary
console.log("Updated categoryPages.ts\n");
for (const slug of Object.keys(scrapedBySlug)) {
  const before = existing[slug];
  const after = merged[slug];
  const beforeCount = before ? before.collections.length : 0;
  const afterCount = after.collections.length;
  const descChanged =
    !before || before.description !== after.description ? "desc*" : "desc=";
  const imgChanged =
    !before ||
    before.heroImage !== after.heroImage ||
    before.bannerImage !== after.bannerImage
      ? "imgs*"
      : "imgs=";
  console.log(
    `${slug}: ${beforeCount} -> ${afterCount} collections | ${descChanged} | ${imgChanged}`
  );
}
console.log(
  "\nBathrooms hub now includes:",
  merged.bathrooms.collections.map((c) => c.label).join(", ")
);
