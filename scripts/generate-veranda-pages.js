const fs = require("fs");
const path = require("path");

const ROOT = "D:/web-developement/hbsolutions";
const SRC = path.join(ROOT, "temp-deponti-verandas.json");
const ACCESSORIES = path.join(ROOT, "temp-deponti-accessories.json");
const OUT = path.join(ROOT, "lib/constants/verandaPages.ts");

const data = JSON.parse(fs.readFileSync(SRC, "utf8"));
const accessories = JSON.parse(fs.readFileSync(ACCESSORIES, "utf8"));

// Repeated shots found by scripts/dedupe-veranda-images.js.
const DUPES_FILE = path.join(ROOT, "temp-veranda-duplicate-images.json");
const DUPLICATES = new Set(
  fs.existsSync(DUPES_FILE) ? JSON.parse(fs.readFileSync(DUPES_FILE, "utf8")) : []
);

const CDN = "https://www.deponti.com/storage/app/resources/resize";
const card = (file) => `${CDN}/510_320_0_0_crop/${file}`;
const banner = (file) => `${CDN}/1500_400_0_0_crop/${file}`;

/** Product cards exactly as listed on each Deponti category page. */
const ORDER = {
  "aluminium-verandas": [
    "pinela-tilt",
    "pinela-delight",
    "fiano-louvre",
    "pinela-deluxe-plus",
    "pinela-deluxe-aluminium-louvered-roof",
    "pinela-aluminium-louvered-roof",
    "verdeca-vouwdak",
    "pinela-glass",
    "trebbiano",
    "giallo-plus",
    "pigato-plus",
    "giallo",
    "pigato",
    "ribolla",
    "bosco",
    "nebbiolo",
    "zaunelemente-grillo",
    "louvres",
    "accessories",
  ],
  "glass-sliding-doors": ["deponti-glass-sliding-walls"],
  "louvered-roofs": [
    "pinela-deluxe-plus",
    "pinela-deluxe-aluminium-louvered-roof",
    "pinela-aluminium-louvered-roof",
  ],
  "folding-roofs": ["verdeca-vouwdak"],
};

/** Card titles as shown on the reference listing pages. */
const TITLES = {
  "pinela-tilt": "Pinela Tilt",
  "pinela-delight": "Pinela Delight",
  "fiano-louvre": "Fiano Louvre",
  "pinela-deluxe-plus": "Pinela Deluxe Plus",
  "pinela-deluxe-aluminium-louvered-roof": "Pinela Deluxe; Aluminium Louvered Roof",
  "pinela-aluminium-louvered-roof": "Pinela; Aluminium Louvered Roof",
  "verdeca-vouwdak": "Verdeca; Folding Roof With Aluminium Frame",
  "pinela-glass": "Pinela Glass",
  trebbiano: "Trebbiano",
  "giallo-plus": "Giallo Plus",
  "pigato-plus": "Pigato Plus",
  giallo: "Giallo Veranda",
  pigato: "Pigato Veranda",
  ribolla: "Ribolla Detached Veranda",
  bosco: "Bosco Veranda",
  nebbiolo: "Nebbiolo Veranda",
  "zaunelemente-grillo": "Grillo Fencing",
  louvres: "Louvres",
  "deponti-glass-sliding-walls": "Fiano Glass Sliding Doors",
  accessories: "Accessories",
};

const SLUGS = {
  "pinela-deluxe-aluminium-louvered-roof": "pinela-deluxe",
  "pinela-aluminium-louvered-roof": "pinela",
  "verdeca-vouwdak": "verdeca",
  "zaunelemente-grillo": "grillo-fencing",
  "deponti-glass-sliding-walls": "fiano-glass-sliding-doors",
};

/** Thumbnails used by the reference listing grids. */
const CARD_IMAGES = {
  "pinela-tilt": card("img_b9fdbd7234b9bc9f308b8ff3655dbf89.png"),
  "pinela-delight": card("img_7edbe5fe2a05dccf85b390736dff0428.png"),
  "fiano-louvre": card("img_99f9dfdb25c93a1df3d4dca642ef6ae0.png"),
  "pinela-deluxe-plus": card("img_7214b6eacf4515ebb616634d44936c5b.png"),
  "pinela-deluxe-aluminium-louvered-roof": card(
    "img_81079237d138dcd02f3aa3cdb09d37ea.png"
  ),
  "pinela-aluminium-louvered-roof": card(
    "img_89574b6aca2bf35f205f815ad2a233d4.png"
  ),
  "verdeca-vouwdak": card("img_9b6f1b0dd07cf2206144f447a5f54c7c.png"),
  "pinela-glass": card("img_16a55627620c5c5f957955de322b579b.jpg"),
  trebbiano: card("img_5b99ce3fa13d32ac5ed955f642b11596.jpg"),
  "giallo-plus": card("img_a3e0d2fa1e4eb5683399ef7404b2a0fb.jpg"),
  "pigato-plus": card("img_d1426ac455e73e191ddaa9e9e74c5c9d.jpg"),
  giallo: card("img_1472bfa3e3c809f8eb575fa3204c0ff1.jpg"),
  pigato: card("img_e1ec9c23152213f8b39f22a44432ca12.jpg"),
  ribolla: card("img_a01d9a8a12cbf465eb311c13772581d1.jpg"),
  bosco: card("img_a68a9b7552a23cd079464b3a4202f79a.jpg"),
  nebbiolo: card("img_4fc725214fc5370b1e8054f8b5c2b000.jpg"),
  "zaunelemente-grillo": card("img_4abd9262271c9162ae96a244bca90e32.jpg"),
  louvres: card("img_fab89a0addffc0096a791c6b1a414864.jpg"),
  "deponti-glass-sliding-walls": card("img_4df8ea1c1fa9f2953c938eb624bd5649.jpg"),
  accessories: card("img_a8127d235395eafff6d663fd5dfcec4f.png"),
};

const COLLECTION_META = {
  "aluminium-verandas": {
    title: "Aluminium Verandas",
    description:
      "With an aluminium veranda, you'll have a stylish extension of your house. In addition, aluminium is very solid, weather proof and requires little maintenance. We use high quality aluminium in three colours: traffic white texturized (RAL9016), cream white (RAL9001) and gray texturized (RAL7024). In addition, we have countless of extra options and accessories in our product range, depending on your taste and preferences. A veranda allows you to enjoy your extra outdoor space throughout the year, allowing to create the perfect housing and living comfort.",
    image: card("img_a68a9b7552a23cd079464b3a4202f79a.jpg"),
    heroImage: banner("img_2361753701d7d87df6507e24a69cc134.jpg"),
  },
  "glass-sliding-doors": {
    title: "Glass Sliding Doors",
    description:
      "On rainy and windy days, your living room may be more appealing than your covered terrace. However, with our glass sliding doors, you'll have a great time under your canopy, even on the not so sunny or rainy days. Our glass sliding doors are not only suitable for verandas, but you can also use them for example as glazing on your balcony, room dividers, under your terrace canopy or sunroom.",
    image: card("img_4df8ea1c1fa9f2953c938eb624bd5649.jpg"),
    heroImage: banner("img_cc6e2dac8586dd16edf7156f1d8e5b7c.jpg"),
  },
  "louvered-roofs": {
    title: "Louvered Roofs",
    description:
      "With a louvered roof, you decide how much sun and light you like on your terrace. The roof can be opened and closed with a remote control, which means that you are also dry during bad weather. We sell two types of aluminium louvered roofs; one with tilting panels and one with panels that can be slid to the side. They are supplied in high-quality aluminium in a timeless anthracite colour. Aluminium is a low maintenance material: the colour lasts for decades and does not need to be painted over. The louvered roof can be supplied with all kinds of extra options and accessories.",
    image: card("img_7214b6eacf4515ebb616634d44936c5b.png"),
    heroImage: banner("img_cfa7697ffd531ff236e8245fcfef170d.png"),
  },
  accessories: {
    title: "Accessories",
    description:
      "With our accessories, you make your veranda suitable for any moment, season and weather type. Create an extra cosy area with side doors or enjoy wonderful long evenings with ambient lighting.",
    image: card("img_a8127d235395eafff6d663fd5dfcec4f.png"),
    heroImage: banner("img_7b81345e6c87fe0b0f4e71722bea772d.jpg"),
  },
  "folding-roofs": {
    title: "Folding Roofs",
    description:
      "With a folding roof, your terrace comes alive. Whatever the weather, you can open or close the roof with a simple press of the remote control. This means that you decide how much sun comes in and that you can still sit outside even in bad weather.",
    image: card("img_9b6f1b0dd07cf2206144f447a5f54c7c.png"),
    heroImage: banner("img_5074a2be5a24d301dac43997a787e05c.png"),
  },
};

function cleanText(text) {
  return String(text || "")
    .replace(/Deponti HQ[\s\S]*$/i, "")
    .replace(/Deponti Warehouse[\s\S]*$/i, "")
    .replace(/Pick-up hours[\s\S]*$/i, "")
    .replace(/\bDeponti\b/gi, "Haris Building Solutions")
    .replace(/\s+/g, " ")
    .replace(/\s+\./g, ".")
    .trim();
}

const js = (value) => JSON.stringify(value);
const productId = (slug) => SLUGS[slug] || slug;

function cleanTitle(title) {
  return String(title || "")
    .replace(/^Deponti\s+/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

function parseColours(spec) {
  if (!spec) return [];
  return spec
    .split("/")
    .map((part) => part.replace(/[()]/g, " ").replace(/\s+/g, " ").trim())
    .filter((part) => part && !/^uncoated$/i.test(part) && part.length < 80)
    .map((label) => {
      const ral = label.match(/RAL\s*(\d{4})/i);
      const value = (ral ? `ral-${ral[1]}` : label)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      return { value, label };
    })
    .filter(
      (c, i, arr) => c.value && arr.findIndex((x) => x.value === c.value) === i
    );
}

function realFeatures(product) {
  const skip =
    /^(glass sliding doors|louvered roofs|folding roofs|request a quote|products|service|contact)$|working at|report glass|login|brochure|cookie|become a partner/i;
  return [
    ...new Set(
      (product.features || [])
        .filter((f) => f && !skip.test(f.trim()))
        .map(cleanText)
    ),
  ];
}

function specRows(product) {
  return Object.entries(product.specs || {})
    .filter(([, value]) => value && String(value).trim())
    .map(([label, value]) => ({
      label: cleanText(label),
      value: cleanText(value),
    }));
}

const bySlug = Object.fromEntries(data.products.map((p) => [p.slug, p]));

/** Deponti uses German/Dutch slugs for accessories; mirror their English titles. */
const ACCESSORY_SLUGS = {
  screen: "screen",
  "fiano-louvre": "fiano-louvre",
  "polycarbonat-optionen": "polycarbonate-options",
  seitenelement: "side-wall",
  keilfenster: "side-gable",
  "led-beleuchtung": "led-spots",
  betonsockel: "concrete-foundation-blocks",
  "zaunelemente-grillo": "grillo-fencing",
  "turgriffe-fur-glasschiebewand": "glass-door-handles",
  "glasschiebewand-mitnehmer": "glass-door-followers",
  "glaswand-bursten": "glass-door-weather-brushes",
  heizstrahler: "heaters",
  "fiano-steel-look": "fiano-steel-look",
  "zij-en-middensluiting": "side-and-middle-locks",
  "lumassina-led-strips": "lumassina-led-strips",
};

// Accessories share slugs with veranda products (Fiano Louvre, Grillo fencing),
// so they are namespaced in the lookup and unwrapped by productId().
ORDER.accessories = [];
for (const item of accessories.items) {
  const slug = ACCESSORY_SLUGS[item.slug];
  if (!slug) continue;
  const key = `accessory:${slug}`;
  ORDER.accessories.push(key);
  TITLES[key] = cleanTitle(item.title);
  CARD_IMAGES[key] = item.cardImage;
  SLUGS[key] = slug;
  bySlug[key] = item;
}

/** The Accessories card on the Aluminium Verandas grid opens the collection. */
const LINK_OVERRIDES = { accessories: "/verandas/accessories" };
bySlug.accessories = { slug: "accessories", image: CARD_IMAGES.accessories };

let out = `import type { CollectionPageData, ProductPageData } from "./collectionPages";

export const VERANDA_COLLECTIONS: Record<string, CollectionPageData> = {\n`;

for (const [collection, meta] of Object.entries(COLLECTION_META)) {
  const items = ORDER[collection]
    .filter((slug) => bySlug[slug])
    .map((slug) => {
      const id = productId(slug);
      return `      {
        id: ${js(id)},
        label: ${js(TITLES[slug])},
        image: ${js(CARD_IMAGES[slug] || bySlug[slug].image)},
        href: ${js(LINK_OVERRIDES[slug] || `/verandas/${collection}/${id}`)},
      }`;
    });

  out += `  "verandas/${collection}": {
    key: "verandas/${collection}",
    categorySlug: "verandas",
    slug: ${js(collection)},
    title: ${js(meta.title)},
    description: ${js(meta.description)},
    heroImage: ${js(meta.heroImage)},
    image: ${js(meta.image)},
    itemsHeading: "View Our Range",
    items: [
${items.join(",\n")}
    ],
  },\n`;
}

out += `};

export const VERANDA_PRODUCTS: Record<string, ProductPageData> = {\n`;

for (const [collection, slugs] of Object.entries(ORDER)) {
  for (const slug of slugs) {
    const product = bySlug[slug];
    if (!product || LINK_OVERRIDES[slug]) continue;

    const id = productId(slug);
    const parsedColours = parseColours(
      product.specs.Colours ||
        product.specs.Colour ||
        product.specs["Frame colours"]
    );
    const colours = parsedColours.length >= 2 ? parsedColours : [];
    const all = (product.images || []).filter((u) => !DUPLICATES.has(u));
    const heroImage = all.find((u) => u.includes("1500_400")) || "";
    // The 510x320 card crop is the same shot as the first gallery image, so it
    // stays out of the gallery and is only used for listing thumbnails.
    const gallery = all.filter((u) => u !== heroImage && !u.includes("510_320"));
    const image = CARD_IMAGES[slug] || gallery[0] || product.image;
    const images = gallery.length ? [...new Set(gallery)] : [image];

    out += `  "verandas/${collection}/${id}": {
    key: "verandas/${collection}/${id}",
    categorySlug: "verandas",
    collectionSlug: ${js(collection)},
    slug: ${js(id)},
    title: ${js(TITLES[slug])},
    description: ${js(cleanText(product.description))},
    heroImage: ${js(heroImage)},
    image: ${js(image)},
    images: ${js(images)},
    colours: ${js(colours)},
    sizes: [],
    features: ${js(realFeatures(product))},
    specs: ${js(specRows(product))},
  },\n`;
  }
}

out += `};
`;

fs.writeFileSync(OUT, out);
console.log("Wrote", OUT);
for (const [collection, slugs] of Object.entries(ORDER)) {
  console.log(collection, slugs.filter((s) => bySlug[s]).length, "items");
}
