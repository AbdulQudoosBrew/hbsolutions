const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "temp-pages", "string-acoustic-panelling.json");
const OUT = path.join(ROOT, "lib", "constants", "stringAcousticPages.ts");
const products = JSON.parse(fs.readFileSync(SRC, "utf8"));
const js = (v) => JSON.stringify(v);

function slugify(handle) {
  return String(handle)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function displayTitle(title) {
  return String(title || "")
    .replace(/^Acoustic Panelling\s+/i, "")
    .replace(/\s*-\s*ACWP\d+\s*$/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

function uniqueImages(images) {
  return [
    ...new Set(
      (images || [])
        .map((src) => String(src || "").replace(/^\/\//, "https://"))
        .filter((src) => src.startsWith("https://")),
    ),
  ];
}

const FEATURES = [
  "Premium acoustic wall panelling",
  "Wood and marble-effect finishes",
  "Suitable for living spaces, offices and feature walls",
  "Easy to clean and maintain",
];

const DESC =
  "Premium acoustic wall panelling in wood and marble-effect finishes. Selected for living spaces, offices and feature walls. Supplied by Haris Building Solutions.";

const items = [];
const productBlocks = [];

const sorted = [...products].sort((a, b) =>
  displayTitle(a.title).localeCompare(displayTitle(b.title)),
);

for (const p of sorted) {
  const slug = slugify(p.handle);
  const title = displayTitle(p.title) || p.title;
  const images = uniqueImages(p.images);
  const image = images[0];
  const cardImage = images[1] || images[0];

  items.push({
    id: slug,
    label: title,
    image: cardImage,
    href: `/panels/acoustic-panels/${slug}`,
  });

  productBlocks.push(`  ${js(`panels/acoustic-panels/${slug}`)}: {
    key: ${js(`panels/acoustic-panels/${slug}`)},
    categorySlug: "panels",
    collectionSlug: "acoustic-panels",
    slug: ${js(slug)},
    title: ${js(title)},
    description: ${js(`${title} acoustic wall panelling. ${DESC}`)},
    image: ${js(image)},
    images: ${js(images)},
    colours: [],
    sizes: [],
    features: ${js(FEATURES)},
    specs: ${js([{ label: "Type", value: "Acoustic panelling" }])},
  }`);
}

const out = `export const STRING_ACOUSTIC_ITEMS = ${js(items)};

export const STRING_ACOUSTIC_PRODUCTS = {
${productBlocks.join(",\n")},
};
`;

fs.writeFileSync(OUT, out);
console.log(`Wrote ${items.length} acoustic panelling products`);
