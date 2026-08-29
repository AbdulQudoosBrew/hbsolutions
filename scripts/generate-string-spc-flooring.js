const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "temp-pages", "string-spc-flooring.json");
const OUT = path.join(ROOT, "lib", "constants", "stringSpcFlooringPages.ts");
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
    .replace(/\bSPC\d+[A-Z]*\b/gi, "")
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
  "Rigid SPC core flooring",
  "100% waterproof",
  "Tongue and groove click installation",
  "Suitable for domestic and commercial interiors",
  "Easy to clean and maintain",
];

function sizeSpec(body) {
  const size = String(body || "").replace(/\s+/g, " ").trim();
  return size ? [{ label: "Size", value: size }] : [];
}

const items = [];
const productBlocks = [];

for (const p of products) {
  const slug = slugify(p.handle);
  const title = displayTitle(p.title);
  const images = uniqueImages(p.images);
  const image = images[0];
  const size = String(p.body || "").replace(/\s+/g, " ").trim();
  const description = size
    ? `${title} rigid SPC flooring. Plank / tile size: ${size}. Waterproof click-fit flooring for living spaces, bathrooms and commercial interiors. Supplied by Haris Building Solutions.`
    : `${title} rigid SPC flooring. Waterproof click-fit flooring for living spaces, bathrooms and commercial interiors. Supplied by Haris Building Solutions.`;

  items.push({
    id: slug,
    label: title,
    image,
    href: `/flooring/spc-flooring/${slug}`,
  });

  productBlocks.push(`  ${js(`flooring/spc-flooring/${slug}`)}: {
    key: ${js(`flooring/spc-flooring/${slug}`)},
    categorySlug: "flooring",
    collectionSlug: "spc-flooring",
    slug: ${js(slug)},
    title: ${js(title)},
    description: ${js(description)},
    image: ${js(image)},
    images: ${js(images)},
    colours: [],
    sizes: ${js(size ? [{ value: slugify(size), label: size }] : [])},
    features: ${js(FEATURES)},
    specs: ${js([{ label: "Type", value: "SPC flooring" }, ...sizeSpec(size)])},
  }`);
}

const hero = items[0].image;
const collectionDesc =
  "Rigid SPC flooring in wood and stone-effect finishes. Waterproof, click-fit planks and tiles selected for living spaces, bathrooms and commercial interiors. Supplied by Haris Building Solutions.";

const out = `export const STRING_SPC_CATEGORY_CARD = {
  id: "spc-flooring",
  label: "SPC Flooring",
  image: ${js(hero)},
  href: "/flooring/spc-flooring",
};

export const STRING_SPC_COLLECTION = {
  key: "flooring/spc-flooring",
  categorySlug: "flooring",
  slug: "spc-flooring",
  title: "SPC Flooring",
  description: ${js(collectionDesc)},
  heroImage: ${js(hero)},
  image: ${js(hero)},
  itemsHeading: "View Our Range",
  items: ${js(items)},
};

export const STRING_SPC_COLLECTIONS = {
  "flooring/spc-flooring": STRING_SPC_COLLECTION,
};

export const STRING_SPC_PRODUCTS = {
${productBlocks.join(",\n")},
};
`;

fs.writeFileSync(OUT, out);
console.log(`Wrote ${items.length} SPC flooring products`);
