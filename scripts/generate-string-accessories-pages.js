const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "temp-pages", "string-accessories.json");
const OUT = path.join(ROOT, "lib", "constants", "stringAccessoriesPages.ts");
const data = JSON.parse(fs.readFileSync(SRC, "utf8"));
const js = (v) => JSON.stringify(v);

function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
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

function titleFromImage(src) {
  const file = String(src || "")
    .split("/")
    .pop()
    .split("?")[0]
    .replace(/\.[a-z0-9]+$/i, "");
  return file
    .replace(/^[A-Z0-9]+[_-]/, "")
    .replace(/_NEW|_STRING_\d+|Photoroom.*$/gi, "")
    .replace(/[a-f0-9]{8}(?:[-_][a-f0-9]{4}){3}[-_][a-f0-9]{12}/gi, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function displayTitle(p) {
  let t = String(p.title || "").replace(/\s+/g, " ").trim();
  const skuLike = t === "1013" || /^[A-Z]{2,8}\d{0,4}$/.test(t);
  if (skuLike) {
    const fromImg = titleFromImage(p.images?.[0]);
    if (fromImg && fromImg.length > 4) t = fromImg;
    else {
      const fromBody = String(p.body || "")
        .replace(/^Introducing (our |the )?/i, "")
        .split(".")[0]
        .replace(/^(exquisite |high-quality |premium )/i, "")
        .trim();
      if (fromBody.length > 8 && fromBody.length < 80) t = fromBody;
    }
  }
  return t.replace(/\(([^)]+)\)/g, " $1").replace(/\s+/g, " ").trim();
}

function optionSets(p) {
  const colours = [];
  const sizes = [];
  for (const opt of p.options || []) {
    const values = (opt.values || []).filter(
      (v) => v && v !== "Default Title",
    );
    if (!values.length) continue;
    const name = String(opt.name || "").toLowerCase();
    const mapped = values.map((v) => ({ value: slugify(v), label: v }));
    if (
      /colou?r|finish/.test(name) ||
      mapped.every((v) =>
        /black|white|chrome|grey|gold|silver|brass|ivory|beige/i.test(v.label),
      )
    ) {
      colours.push(...mapped);
    } else {
      sizes.push(...mapped);
    }
  }
  return { colours, sizes };
}

const assigned = new Set();
function take(products, skip = new Set()) {
  const out = [];
  for (const p of products || []) {
    if (!p.handle || assigned.has(p.handle) || skip.has(p.handle)) continue;
    assigned.add(p.handle);
    out.push(p);
  }
  return out;
}

const GROUPS = [
  {
    slug: "tiling-tools",
    title: "Tiling Tools",
    type: "Tiling tool",
    description:
      "Trowels, floats, mixers, scrapers and tiling equipment for professional installs. Supplied by Haris Building Solutions.",
    features: [
      "Trade tiling tools",
      "Suitable for floor and wall tiling",
      "Selected for site use",
    ],
    products: take([
      ...(data["tiling-tools"] || []),
      ...(data["our-latest-products"] || []).filter((p) =>
        /grabba|tile-jack|tile jack|paving/i.test(`${p.handle} ${p.title}`),
      ),
    ]),
  },
  {
    slug: "tile-levelling-system",
    title: "Tile Levelling System",
    type: "Tile levelling system",
    description:
      "TLS clips, wedges, bases and pliers for a flat tiled finish. Supplied by Haris Building Solutions.",
    features: [
      "Helps keep tiles level during setting",
      "Clips, wedges and accessories",
      "Suitable for wall and floor tiling",
    ],
    products: take([
      ...(data["tile-leveling-system"] || []),
      ...(data["our-latest-products"] || []).filter((p) =>
        /^tls/i.test(p.title + p.handle),
      ),
    ]),
  },
  {
    slug: "cutting-blades",
    title: "Cutting Blades",
    type: "Cutting blade",
    description:
      "Diamond cutting and grinding blades for porcelain, marble and granite. Supplied by Haris Building Solutions.",
    features: [
      "Diamond cutting blades",
      "Suitable for porcelain, marble and granite",
      "Wet and dry options",
    ],
    products: take(data["cutting-blades"]),
  },
  {
    slug: "diamond-drill-bits",
    title: "Diamond Drill Bits",
    type: "Diamond drill bit",
    description:
      "Diamond hole saws, drill bits and guides for tiles and porcelain. Supplied by Haris Building Solutions.",
    features: [
      "Diamond drill bits and hole saws",
      "For tiles, porcelain and glass",
      "Sets and individual bits",
    ],
    products: take([
      ...(data["diamond-drill-bits"] || []),
      ...(data["drill-bits"] || []),
    ]),
  },
  {
    slug: "power-mixers",
    title: "Power Mixers",
    type: "Power mixer",
    description:
      "Professional paddle mixers for adhesives, grout and compounds. Supplied by Haris Building Solutions.",
    features: [
      "Professional mixing",
      "Suitable for adhesives and compounds",
    ],
    products: take(data["power-mixers"]),
  },
  {
    slug: "tilers-base",
    title: "Tilers Base",
    type: "Tilers base",
    description:
      "Tilers ply boards, primer, adhesive and screws for tiling substrates. Supplied by Haris Building Solutions.",
    features: [
      "Tile-ready board system",
      "Boards, primer, adhesive and fixings",
    ],
    products: take(data["fibre-cement-board"]),
  },
  {
    slug: "tile-trims",
    title: "Tile Trims",
    type: "Tile trim",
    description:
      "PVC and specialist tile trims, corners and edge profiles. Supplied by Haris Building Solutions.",
    features: [
      "PVC and specialist tile trims",
      "Corners, edges and profiles",
      "Multiple colours and sizes",
    ],
    products: take(
      [
        ...(data["tile-trims"] || []),
        ...(data["pvc-trims"] || []),
        ...(data["aluminium-diamond"] || []),
      ],
      new Set(["pldg201-panther-professional-large-drill-guide", "pldg201"]),
    ),
  },
  {
    slug: "sparkle-glitter-additive",
    title: "Sparkle Glitter Additive",
    type: "Glitter additive",
    description:
      "Sparkle glitter additives for grout and finishes. Supplied by Haris Building Solutions.",
    features: ["Glitter additive for grout and decorative finishes"],
    products: take(data["glitter-additive"]),
  },
  {
    slug: "carpet-protection",
    title: "Carpet Protection",
    type: "Carpet protection",
    description:
      "Floor and carpet protection film for site and renovation work. Supplied by Haris Building Solutions.",
    features: ["Protects floors and carpets during works"],
    products: take(data["carpet-protection"]),
  },
  {
    slug: "st-products",
    title: "ST Products",
    type: "Sealant and adhesive",
    description:
      "ST silicones, caulk, PVA, wipes and adhesives. Supplied by Haris Building Solutions.",
    features: ["Sealants, adhesives, PVA and site consumables"],
    products: take(data["st-products"]),
  },
  {
    slug: "mosaic-mesh",
    title: "Mosaic Mesh",
    type: "Mosaic mesh",
    description:
      "Mosaic mesh for tiling and mosaic work. Supplied by Haris Building Solutions.",
    features: ["Mesh for mosaic and tiling work"],
    products: take(data["mosaic-mesh"]),
  },
];

const categoryCards = [];
const collectionBlocks = [];
const productBlocks = [];

for (const group of GROUPS) {
  if (!group.products.length) continue;
  const image = uniqueImages(group.products[0].images)[0];
  const items = [];

  for (const p of group.products) {
    const slug = slugify(p.handle);
    const title = displayTitle(p) || p.title;
    const images = uniqueImages(p.images);
    const { colours, sizes } = optionSets(p);
    const body = String(p.body || "").trim();
    const description = body
      ? `${body} Supplied by Haris Building Solutions.`
      : `${title}. ${group.description}`;
    const href = `/accessories/${group.slug}/${slug}`;
    items.push({
      id: slug,
      label: title,
      image: images[0] || image,
      href,
    });

    const specs = [{ label: "Type", value: group.type }];
    if (p.product_type) specs.push({ label: "Range", value: p.product_type });

    productBlocks.push(`  ${js(`accessories/${group.slug}/${slug}`)}: {
    key: ${js(`accessories/${group.slug}/${slug}`)},
    categorySlug: "accessories",
    collectionSlug: ${js(group.slug)},
    slug: ${js(slug)},
    title: ${js(title)},
    description: ${js(description)},
    image: ${js(images[0] || "")},
    images: ${js(images)},
    colours: ${js(colours)},
    sizes: ${js(sizes)},
    features: ${js(group.features)},
    specs: ${js(specs)},
  }`);
  }

  categoryCards.push({
    id: group.slug,
    label: group.title,
    image,
    href: `/accessories/${group.slug}`,
  });

  collectionBlocks.push(`  ${js(`accessories/${group.slug}`)}: {
    key: ${js(`accessories/${group.slug}`)},
    categorySlug: "accessories",
    slug: ${js(group.slug)},
    title: ${js(group.title)},
    description: ${js(group.description)},
    heroImage: ${js(image)},
    image: ${js(image)},
    itemsHeading: "View Our Range",
    items: ${js(items)},
  }`);
}

const out = `export const STRING_ACCESSORY_CATEGORY_CARDS = ${js(categoryCards)};

export const STRING_ACCESSORY_COLLECTIONS = {
${collectionBlocks.join(",\n")},
};

export const STRING_ACCESSORY_PRODUCTS = {
${productBlocks.join(",\n")},
};
`;

fs.writeFileSync(OUT, out);
console.log(
  "cards",
  categoryCards.length,
  "products",
  productBlocks.length,
  categoryCards.map((c) => c.label),
);
