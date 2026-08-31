const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "temp-pages", "giavani-panel-trims.json");
const OUT = path.join(ROOT, "lib", "constants", "cornerTrimPages.ts");
const products = JSON.parse(fs.readFileSync(SRC, "utf8"));
const js = (v) => JSON.stringify(v);

const RATINGS = /^(perfect|good|average|not that bad|very poor)$/i;

function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function cleanOptionLabel(label) {
  return String(label || "")
    .replace(/\s*[-–]\s*GIA-[A-Z0-9]+\s*/gi, " ")
    .replace(/\s*[-–]\s*Price:\s*£[\d.]+/gi, "")
    .replace(/\(\s*\d+\s*packs?\s*\)/gi, "")
    .replace(/\b\d+\s*packs?\b/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

function usefulOptions(product) {
  const seen = new Set();
  const out = [];
  for (const o of product.options || []) {
    if (!o.label || RATINGS.test(o.label.trim())) continue;
    const label = cleanOptionLabel(o.label);
    if (!label || seen.has(label.toLowerCase())) continue;
    seen.add(label.toLowerCase());
    out.push({ value: slugify(label) || o.value, label });
  }
  return out;
}

function classify(product) {
  const name = product.name.toLowerCase();
  if (/tile\s*trim/.test(name)) return "tiles-trims";
  if (
    /^(internal corner trims|l trims|h trims|end caps)$/i.test(product.name)
  ) {
    return "acoustic-panels-trims";
  }
  return "pvc-panel-trims";
}

const META = {
  "pvc-panel-trims": {
    title: "PVC Panel Trims",
    description:
      "L-shape, H, end cap, internal, external and coving trims for PVC wall panels. Available in white, chrome, black and brushed brass. Supplied by Haris Building Solutions.",
    type: "PVC panel trim",
    use:
      "for finishing PVC wall panels at edges, joints and corners. Suitable for 8mm and 10mm panel systems.",
    features: [
      "Designed for PVC wall panel installations",
      "Available in 8mm and 10mm sizes",
      "White, chrome, black and brushed brass finishes",
      "L-shape, H-join, end cap, internal, external and coving profiles",
    ],
  },
  "acoustic-panels-trims": {
    title: "Acoustic Panels Trims",
    description:
      "Internal corners, L trims, H trims and end caps for acoustic and decorative wall panelling. Chrome, black and white finishes. Supplied by Haris Building Solutions.",
    type: "Acoustic panel trim",
    use:
      "for finishing acoustic and decorative wall panelling at edges, joints and internal corners. Available in 8mm and 10mm.",
    features: [
      "Internal corner, L, H and end cap profiles",
      "Chrome, black and white finishes",
      "8mm and 10mm sizes",
      "Suitable for acoustic and decorative wall panelling",
    ],
  },
  "tiles-trims": {
    title: "Tiles Trims",
    description:
      "Round and L-shape tile trims in 8mm, 10mm and 12mm. A clean finish for tiled walls and wet areas. Supplied by Haris Building Solutions.",
    type: "Tile trim",
    use:
      "for a clean edge on tiled walls. Available in 8mm, 10mm and 12mm.",
    features: [
      "Round and L-shape tile trim profiles",
      "8mm, 10mm and 12mm sizes",
      "Suitable for bathrooms and wet areas",
      "Clean professional edge finish",
    ],
  },
};

function typeRank(name) {
  const n = name.toLowerCase();
  if (/\bl[- ]?shape/.test(n) && !/tile/.test(n)) return 0;
  if (/\bl trims\b/.test(n)) return 0;
  if (/\bh trims\b/.test(n)) return 1;
  if (/end cap/.test(n)) return 2;
  if (/internal/.test(n)) return 3;
  if (/external/.test(n)) return 4;
  if (/coving/.test(n)) return 5;
  if (/round/.test(n)) return 6;
  if (/tile/.test(n)) return 7;
  return 8;
}

function colourRank(name) {
  const n = name.toLowerCase();
  if (/\bwhite\b/.test(n)) return 0;
  if (/\bchrome\b/.test(n)) return 1;
  if (/brushed brass/.test(n)) return 2;
  if (/\bblack\b/.test(n)) return 3;
  return 4;
}

function splitOptions(product, opts) {
  const colourish = opts.filter((o) =>
    /^(black|chrome|white|brushed brass)$/i.test(o.label),
  );
  const sizes = opts.filter(
    (o) => !/^(black|chrome|white|brushed brass)$/i.test(o.label),
  );
  return { colours: colourish, sizes };
}

const buckets = {
  "pvc-panel-trims": [],
  "acoustic-panels-trims": [],
  "tiles-trims": [],
};

for (const p of products) {
  buckets[classify(p)].push(p);
}

for (const key of Object.keys(buckets)) {
  buckets[key].sort((a, b) => {
    const t = typeRank(a.name) - typeRank(b.name);
    if (t !== 0) return t;
    const c = colourRank(a.name) - colourRank(b.name);
    if (c !== 0) return c;
    return a.name.localeCompare(b.name);
  });
}

const collectionBlocks = [];
const productBlocks = [];
const categoryCards = [];

for (const [slug, items] of Object.entries(buckets)) {
  const meta = META[slug];
  const image = items[0]?.images?.[0] || "";
  const collectionItems = items.map((p) => ({
    id: p.slug,
    label: p.name,
    image: p.images[0],
    href: `/corners/${slug}/${p.slug}`,
  }));

  categoryCards.push({
    id: slug,
    label: meta.title,
    image,
    href: `/corners/${slug}`,
  });

  collectionBlocks.push(`  ${js(`corners/${slug}`)}: {
    key: ${js(`corners/${slug}`)},
    categorySlug: "corners",
    slug: ${js(slug)},
    title: ${js(meta.title)},
    description: ${js(meta.description)},
    heroImage: ${js(image)},
    image: ${js(image)},
    itemsHeading: "View Our Range",
    items: ${js(collectionItems)},
  }`);

  for (const p of items) {
    const split = splitOptions(p, usefulOptions(p));
    const colours = split.colours;
    const sizes = split.sizes;
    if (
      !colours.length &&
      /available colour/i.test(`${p.short} ${p.desc}`)
    ) {
      colours.push(
        { value: "chrome", label: "Chrome" },
        { value: "black", label: "Black" },
        { value: "white", label: "White" },
      );
    }
    const desc = `${p.name} ${meta.use} Supplied by Haris Building Solutions.`;
    const specs = [{ label: "Type", value: meta.type }];
    if (sizes.length) {
      specs.push({
        label: "Sizes",
        value: sizes.map((s) => s.label).join(", "),
      });
    }
    productBlocks.push(`  ${js(`corners/${slug}/${p.slug}`)}: {
    key: ${js(`corners/${slug}/${p.slug}`)},
    categorySlug: "corners",
    collectionSlug: ${js(slug)},
    slug: ${js(p.slug)},
    title: ${js(p.name)},
    description: ${js(desc)},
    image: ${js(p.images[0])},
    images: ${js(p.images)},
    colours: ${js(colours)},
    sizes: ${js(sizes)},
    features: ${js(meta.features)},
    specs: ${js(specs)},
  }`);
  }
}

const out = `export const CORNERS_CATEGORY = {
  slug: "corners",
  title: "Corners",
  description:
    "Trims, corners, end caps and tile profiles for PVC panels, acoustic panelling and tiled walls. Supplied by Haris Building Solutions.",
  heroImage: ${js(categoryCards[0]?.image || "")},
  collectionHeading: "View Our Collection",
  collections: ${js(categoryCards)},
};

export const CORNER_COLLECTIONS = {
${collectionBlocks.join(",\n")},
};

export const CORNER_PRODUCTS = {
${productBlocks.join(",\n")},
};
`;

fs.writeFileSync(OUT, out);
console.log(
  "Wrote",
  Object.fromEntries(
    Object.entries(buckets).map(([k, v]) => [k, v.length]),
  ),
);
