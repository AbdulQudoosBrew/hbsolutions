const fs = require("fs");
const path = require("path");

const ROOT = "D:/web-developement/hbsolutions";
const DETAILS_PATH = path.join(ROOT, "temp-product-details.json");
const PAGES_PATH = path.join(ROOT, "lib/constants/collectionPages.ts");

function esc(s) {
  return JSON.stringify(s ?? "");
}

function brandify(text) {
  return String(text || "")
    .replace(/Giavani Bathrooms/gi, "Haris Building Solutions")
    .replace(/\bGiavani\b/gi, "Haris Building Solutions")
    .trim();
}

function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function defaultDescription(title, collectionTitle, categorySlug) {
  return brandify(
    `Discover ${title} from the ${collectionTitle} range at Haris Building Solutions. Quality ${categorySlug.replace(/-/g, " ")} selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.`
  );
}

function parseCollections(src) {
  const start = src.indexOf("export const COLLECTION_PAGES");
  const end = src.indexOf("export function getCollectionPage");
  const chunk = src.slice(start, end);
  const collections = [];
  const blocks = [
    ...chunk.matchAll(
      /"([^"]+)": \{\s*key: "([^"]+)",\s*categorySlug: "([^"]+)",\s*slug: "([^"]+)",\s*title: "([^"]*)",\s*description: "((?:\\.|[^"\\])*)",([\s\S]*?)items: \[([\s\S]*?)\],\n  \},/g
    ),
  ];

  for (const b of blocks) {
    const meta = b[7];
    const heroM = meta.match(/heroImage: "([^"]+)"/);
    const imageM = meta.match(/image: "([^"]+)"/);
    const headingM = meta.match(/itemsHeading: "([^"]+)"/);
    const items = [
      ...b[8].matchAll(
        /\{\s*id: "([^"]+)",\s*label: "([^"]+)",\s*image: "([^"]+)",\s*href: "([^"]+)",\s*\}/g
      ),
    ].map((it) => ({
      id: it[1],
      label: it[2],
      image: it[3],
      href: `/${b[3]}/${b[4]}/${it[1]}`,
    }));

    collections.push({
      key: b[1],
      categorySlug: b[3],
      slug: b[4],
      title: b[5],
      description: JSON.parse(`"${b[6]}"`),
      heroImage: heroM ? heroM[1] : undefined,
      image: imageM ? imageM[1] : items[0]?.image || "",
      itemsHeading: headingM ? headingM[1] : "View Our Range",
      items,
    });
  }

  return collections;
}

function buildSiblingColours(collection, currentId) {
  if (collection.items.length <= 1) return [];
  return collection.items.map((item) => ({
    value: item.id,
    label: item.label,
    image: item.image,
    href: item.href,
  }));
}

function extractSizeFromTitle(title) {
  const sizes = [];
  const dim = title.match(
    /(\d+(?:\.\d+)?\s*mm(?:\s*[x×]\s*\d+(?:\.\d+)?\s*mm){1,2})/i
  );
  if (dim) {
    sizes.push({ value: slugify(dim[1]), label: dim[1].replace(/×/g, "x") });
  }
  const pack = title.match(/(\d+\s*[- ]?\s*pack)/i);
  if (pack) {
    sizes.push({ value: slugify(pack[1]), label: pack[1] });
  }
  return sizes;
}

if (!fs.existsSync(DETAILS_PATH)) {
  console.error("Missing temp-product-details.json — wait for scrape to finish");
  process.exit(1);
}

const details = JSON.parse(fs.readFileSync(DETAILS_PATH, "utf8"));
const detailsByKey = Object.fromEntries(details.map((d) => [d.key, d]));
const src = fs.readFileSync(PAGES_PATH, "utf8");
const collections = parseCollections(src);
console.log("Parsed collections", collections.length);

let out = `export type CollectionItem = {
  id: string;
  label: string;
  image: string;
  href: string;
};

export type ProductOption = {
  value: string;
  label: string;
  image?: string;
  href?: string;
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

export type ProductPageData = {
  key: string;
  categorySlug: string;
  collectionSlug: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  images: string[];
  colours: ProductOption[];
  sizes: ProductOption[];
  features?: string[];
};

export const COLLECTION_PAGES: Record<string, CollectionPageData> = {
`;

for (const c of collections) {
  out += `  ${esc(c.key)}: {\n`;
  out += `    key: ${esc(c.key)},\n`;
  out += `    categorySlug: ${esc(c.categorySlug)},\n`;
  out += `    slug: ${esc(c.slug)},\n`;
  out += `    title: ${esc(c.title)},\n`;
  out += `    description: ${esc(c.description)},\n`;
  if (c.heroImage) out += `    heroImage: ${esc(c.heroImage)},\n`;
  out += `    image: ${esc(c.image)},\n`;
  out += `    itemsHeading: ${esc(c.itemsHeading || "View Our Range")},\n`;
  out += `    items: [\n`;
  for (const item of c.items) {
    out += `      {\n`;
    out += `        id: ${esc(item.id)},\n`;
    out += `        label: ${esc(item.label)},\n`;
    out += `        image: ${esc(item.image)},\n`;
    out += `        href: ${esc(item.href)},\n`;
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

export const PRODUCT_PAGES: Record<string, ProductPageData> = {
`;

let productCount = 0;
for (const c of collections) {
  const siblingColours = buildSiblingColours(c);
  for (const item of c.items) {
    const key = `${c.categorySlug}/${c.slug}/${item.id}`;
    const d = detailsByKey[key];
    const scrapedColours = d?.colours || [];
    const scrapedSizes = d?.sizes || [];
    const images = [
      ...new Set([...(d?.images || []), item.image].filter(Boolean)),
    ];

    // Prefer scraped colour/finish options; otherwise use sibling finishes as colour choices
    let colours =
      scrapedColours.length > 0
        ? scrapedColours
        : siblingColours.length > 1
          ? siblingColours
          : [];

    // If using siblings, mark current as selected default via value=id
    let sizes =
      scrapedSizes.length > 0 ? scrapedSizes : extractSizeFromTitle(item.label);

    let description =
      d?.description && d.description.length > 40
        ? brandify(d.description)
        : defaultDescription(item.label, c.title, c.categorySlug);

    // Keep description readable length
    if (description.length > 700) {
      description = `${description.slice(0, 697).trim()}...`;
    }

    const features = [
      `Part of the ${c.title} collection`,
      "Available for trade and retail enquiry",
      "Contact us for current stock and lead times",
    ];

    productCount += 1;
    out += `  ${esc(key)}: {\n`;
    out += `    key: ${esc(key)},\n`;
    out += `    categorySlug: ${esc(c.categorySlug)},\n`;
    out += `    collectionSlug: ${esc(c.slug)},\n`;
    out += `    slug: ${esc(item.id)},\n`;
    out += `    title: ${esc(item.label)},\n`;
    out += `    description: ${esc(description)},\n`;
    out += `    image: ${esc(item.image)},\n`;
    out += `    images: [\n`;
    for (const img of images) out += `      ${esc(img)},\n`;
    out += `    ],\n`;
    out += `    colours: [\n`;
    for (const col of colours) {
      out += `      {\n`;
      out += `        value: ${esc(col.value)},\n`;
      out += `        label: ${esc(col.label)},\n`;
      if (col.image) out += `        image: ${esc(col.image)},\n`;
      if (col.href) out += `        href: ${esc(col.href)},\n`;
      out += `      },\n`;
    }
    out += `    ],\n`;
    out += `    sizes: [\n`;
    for (const size of sizes) {
      out += `      {\n`;
      out += `        value: ${esc(size.value)},\n`;
      out += `        label: ${esc(size.label)},\n`;
      out += `      },\n`;
    }
    out += `    ],\n`;
    out += `    features: [\n`;
    for (const f of features) out += `      ${esc(f)},\n`;
    out += `    ],\n`;
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

fs.writeFileSync(PAGES_PATH, out);
console.log(
  `Wrote collectionPages.ts with ${collections.length} collections and ${productCount} products`
);
