const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "temp-pages", "string-products.json");
const OUT = path.join(ROOT, "lib", "constants", "stringPanelPages.ts");
const data = JSON.parse(fs.readFileSync(SRC, "utf8"));
const js = (v) => JSON.stringify(v);

function finishFromBody(body) {
  return String(body || "")
    .replace(
      /\s*\d+(?:\.\d+)?\s*(?:m|cm|mm)(?:\s*[x×]\s*\d+(?:\.\d+)?\s*(?:m|cm|mm))*/gi,
      "",
    )
    .replace(/\s+/g, " ")
    .trim();
}

function slugify(handle) {
  return String(handle)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function stripSku(title) {
  return String(title || "")
    .replace(/^[ZS]\d+\s+/i, "")
    .replace(/\bSPC\d+[A-Z]*\b/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

function uniqueImages(images) {
  return [...new Set((images || []).filter(Boolean))];
}

const SHOWER_DESC =
  "Waterproof PVC shower wall panel from the PVC Wall Panels 1000mm × 2400mm × 10mm range. Easy to clean and suitable for bathrooms, showers and wet rooms. Supplied by Haris Building Solutions.";
const SHOWER_FEATURES = [
  "1000mm width × 2400mm height × 10mm thickness",
  "100% waterproof PVC wall panel",
  "Easy-clean surface for showers and wet rooms",
  "Fire rated",
];
const SHOWER_SPECS = [
  { label: "Width", value: "1000mm" },
  { label: "Height", value: "2400mm" },
  { label: "Thickness", value: "10mm" },
];

const CLADDING_RANGE =
  "Ceiling panels 250mm * 2700mm * 8mm";
const CLADDING_FEATURES = [
  "250mm width × 2700mm length × 8mm thickness",
  "PVC cladding / ceiling panel",
  "Tongue and groove installation",
  "Suitable for walls and ceilings",
];
const CLADDING_SPECS = [
  { label: "Width", value: "250mm" },
  { label: "Length", value: "2700mm" },
  { label: "Thickness", value: "8mm" },
];

function showerProduct(p) {
  const slug = slugify(p.handle);
  const title = stripSku(p.title) || p.title;
  const image = p.images[0];
  const images = uniqueImages(p.images);
  return {
    item: {
      id: slug,
      label: title,
      image,
      href: `/panels/classic-10mm/${slug}`,
    },
    productKey: `panels/classic-10mm/${slug}`,
    product: {
      key: `panels/classic-10mm/${slug}`,
      categorySlug: "panels",
      collectionSlug: "classic-10mm",
      slug,
      title,
      description: SHOWER_DESC,
      image,
      images,
      colours: [],
      sizes: [],
      features: SHOWER_FEATURES,
      specs: SHOWER_SPECS,
    },
  };
}

function claddingProduct(p) {
  const slug = slugify(p.handle);
  const finish = finishFromBody(p.body);
  const title = stripSku(finish ? `${p.title} ${finish}` : p.title) || finish || p.title;
  const image = p.images[0];
  const images = uniqueImages(p.images);
  const description = finish
    ? `${title} PVC cladding panel, 250mm × 2700mm × 8mm. Suitable for walls and ceilings. Supplied by Haris Building Solutions.`
    : `Discover ${title} from the ${CLADDING_RANGE} range at Haris Building Solutions.`;
  return {
    item: {
      id: slug,
      label: title,
      image,
      href: `/panels/classic-8mm/${slug}`,
    },
    productKey: `panels/classic-8mm/${slug}`,
    product: {
      key: `panels/classic-8mm/${slug}`,
      categorySlug: "panels",
      collectionSlug: "classic-8mm",
      slug,
      title,
      description,
      image,
      images,
      colours: [],
      sizes: [],
      features: CLADDING_FEATURES,
      specs: CLADDING_SPECS,
    },
  };
}

const shower = data.shower.map(showerProduct);
const cladding = data.cladding.map(claddingProduct);

function productBlock(entry) {
  const p = entry.product;
  return `  ${js(entry.productKey)}: {
    key: ${js(p.key)},
    categorySlug: ${js(p.categorySlug)},
    collectionSlug: ${js(p.collectionSlug)},
    slug: ${js(p.slug)},
    title: ${js(p.title)},
    description: ${js(p.description)},
    image: ${js(p.image)},
    images: ${js(p.images)},
    colours: [],
    sizes: [],
    features: ${js(p.features)},
    specs: ${js(p.specs)},
  }`;
}

const out = `export const STRING_SHOWER_ITEMS = ${js(shower.map((x) => x.item))};

export const STRING_CLADDING_ITEMS = ${js(cladding.map((x) => x.item))};

export const STRING_SHOWER_PRODUCTS = {
${shower.map(productBlock).join(",\n")},
};

export const STRING_CLADDING_PRODUCTS = {
${cladding.map(productBlock).join(",\n")},
};
`;

fs.writeFileSync(OUT, out);
console.log(
  `Wrote ${shower.length} shower + ${cladding.length} cladding products`,
);
