const fs = require("fs");
const path = require("path");

const ROOT = "D:/web-developement/hbsolutions";
const SRC = path.join(ROOT, "temp-aws-trading.json");
const OUT = path.join(ROOT, "lib/constants/awsPages.ts");

const data = JSON.parse(fs.readFileSync(SRC, "utf8"));
const js = (value) => JSON.stringify(value);

const CATEGORY_SLUGS = {
  furniture: "home-furniture",
  panelling: "wall-panelling",
  outdoors: "outdoor",
  mirrors: "decorative-mirrors",
  clocks: "clocks",
  lighting: "home-lighting",
};

const CATEGORY_TITLES = {
  "home-furniture": "Furniture",
  "wall-panelling": "Wall Panelling",
  outdoor: "Outdoor",
  "decorative-mirrors": "Mirrors",
  clocks: "Clocks",
  "home-lighting": "Lighting",
};

const CATEGORY_DESCRIPTIONS = {
  "home-furniture":
    "Explore dining tables, chairs, sofas, oak ranges, beds and complementary living pieces selected for everyday performance and lasting style. Contact us to check availability, finishes and sizing for your project.",
  "wall-panelling":
    "Acoustic, aqua and decorative wall panels with matching trims, lighting and ceiling options. A practical way to upgrade interiors with a clean, professional finish.",
  outdoor:
    "Durable outdoor panelling, cladding, decking and fencing designed for weather resistance, low maintenance and a modern look across gardens and commercial spaces.",
  "decorative-mirrors":
    "Wall mirrors, mirrored furniture and decorative pieces to add light and a refined finish to living, dining and hallway spaces.",
  clocks:
    "Statement clocks chosen to complement contemporary interiors, from feature wall pieces to coordinated decorative ranges.",
  "home-lighting":
    "Lamps, fixtures and LED-lit pieces to complete furniture and interior schemes with practical light and a polished look.",
};

function brandify(text) {
  return String(text || "")
    .replace(/AWS Trading Ltd/gi, "Haris Building Solutions")
    .replace(/\bAWS Trading\b/gi, "Haris Building Solutions")
    .replace(/\bAWS\b/gi, "Haris Building Solutions")
    .replace(/PLEASE QUOTE THE FULL PRODUCT CODE AND TITLE WHEN PLACING AN ORDER/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

function slugify(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "item";
}

function optionValues(product, matcher) {
  const options = product.options || [];
  const match = options.find((o) => matcher.test(o.name || ""));
  if (!match) return [];
  return (match.values || [])
    .map((label) => String(label).trim())
    .filter((label) => label && !/^default title$/i.test(label) && !/^title$/i.test(label))
    .map((label) => ({
      value: slugify(label),
      label,
    }))
    .filter((item, index, arr) => arr.findIndex((x) => x.value === item.value) === index);
}

function productDescription(product, collectionTitle, categoryTitle) {
  const raw = brandify(product.description || "");
  if (raw.length > 40) return raw;
  return `Discover ${product.title} from the ${collectionTitle} range at Haris Building Solutions. Quality ${categoryTitle.toLowerCase()} selected for performance, style and lasting value. Contact us to check availability, finishes and sizing for your project.`;
}

function productFeatures(product) {
  const lines = String(product.description || "")
    .split(/\n+/)
    .map((line) => brandify(line))
    .filter((line) => line.length > 20 && line.length < 180);
  return [...new Set(lines)].slice(0, 8);
}

function productSpecs(product) {
  const specs = [];
  const sku = (product.variants || []).map((v) => v.sku).find(Boolean);
  if (sku) specs.push({ label: "Product code", value: sku });
  if (product.productType && !/^(set|clearance)$/i.test(product.productType)) {
    specs.push({ label: "Type", value: product.productType });
  }
  const uniqueSkus = [
    ...new Set((product.variants || []).map((v) => v.sku).filter(Boolean)),
  ];
  if (uniqueSkus.length > 1) {
    specs.push({ label: "Available codes", value: uniqueSkus.slice(0, 8).join(", ") });
  }
  return specs;
}

function uniqueHandles(products) {
  const used = new Map();
  return products.map((product) => {
    let slug = product.handle || slugify(product.title);
    const count = used.get(slug) || 0;
    used.set(slug, count + 1);
    if (count > 0) slug = `${slug}-${count + 1}`;
    return { ...product, pageSlug: slug };
  });
}

let out = `import type { CollectionPageData, ProductPageData } from "./collectionPages";

export const AWS_CATEGORY_PAGES = {\n`;

const collectionsOut = [];
const productsOut = [];
const categoryCards = [];

for (const top of data.categories) {
  const categorySlug = CATEGORY_SLUGS[top.id];
  if (!categorySlug) continue;

  const collections = [];
  for (const sub of top.subcategories) {
    const products = uniqueHandles(sub.products || []);
    if (!products.length) continue;
    const collectionSlug = sub.id;
    const collectionTitle = sub.title;
    const collectionImage = products[0].image || products[0].images?.[0]?.src || "";
    const collectionDescription = `Explore the ${collectionTitle} range from Haris Building Solutions. Quality ${CATEGORY_TITLES[categorySlug].toLowerCase()} selected for performance, style and lasting value.`;

    collections.push({
      id: collectionSlug,
      label: collectionTitle,
      image: collectionImage,
      href: `/${categorySlug}/${collectionSlug}`,
    });

    const items = products.map((product) => ({
      id: product.pageSlug,
      label: product.title,
      image: product.image || product.images?.[0]?.src || collectionImage,
      href: `/${categorySlug}/${collectionSlug}/${product.pageSlug}`,
    }));

    collectionsOut.push(`  ${js(`${categorySlug}/${collectionSlug}`)}: {
    key: ${js(`${categorySlug}/${collectionSlug}`)},
    categorySlug: ${js(categorySlug)},
    slug: ${js(collectionSlug)},
    title: ${js(collectionTitle)},
    description: ${js(collectionDescription)},
    image: ${js(collectionImage)},
    itemsHeading: "View Our Range",
    items: ${js(items)},
  }`);

    for (const product of products) {
      const images = (product.images || [])
        .map((img) => img.src)
        .filter(Boolean);
      const image = product.image || images[0] || collectionImage;
      const gallery = images.length ? [...new Set(images)] : [image];
      const colours = optionValues(product, /colou?r|finish/i);
      const sizes = optionValues(product, /size|bedding|length|width|dimension/i);

      productsOut.push(`  ${js(`${categorySlug}/${collectionSlug}/${product.pageSlug}`)}: {
    key: ${js(`${categorySlug}/${collectionSlug}/${product.pageSlug}`)},
    categorySlug: ${js(categorySlug)},
    collectionSlug: ${js(collectionSlug)},
    slug: ${js(product.pageSlug)},
    title: ${js(product.title)},
    description: ${js(productDescription(product, collectionTitle, CATEGORY_TITLES[categorySlug]))},
    image: ${js(image)},
    images: ${js(gallery)},
    colours: ${js(colours)},
    sizes: ${js(sizes)},
    features: ${js(productFeatures(product))},
    specs: ${js(productSpecs(product))},
  }`);
    }
  }

  categoryCards.push({
    slug: categorySlug,
    image: collections[0]?.image || "",
  });

  out += `  ${js(categorySlug)}: {
    slug: ${js(categorySlug)},
    title: ${js(CATEGORY_TITLES[categorySlug])},
    description: ${js(CATEGORY_DESCRIPTIONS[categorySlug])},
    heroImage: ${js(collections[0]?.image || "")},
    collectionHeading: "View Our Collection",
    collections: ${js(collections)},
  },\n`;
}

out += `} as const;

export const AWS_COLLECTIONS: Record<string, CollectionPageData> = {
${collectionsOut.join(",\n")}
};

export const AWS_PRODUCTS: Record<string, ProductPageData> = {
${productsOut.join(",\n")}
};
`;

fs.writeFileSync(OUT, out);
console.log("Wrote", OUT);
console.log("categories", categoryCards);
console.log("collections", collectionsOut.length);
console.log("products", productsOut.length);
