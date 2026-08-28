const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const HTML = path.join(ROOT, "temp-pages", "poennighaus-kitchens.html");
const OUT = path.join(ROOT, "lib", "constants", "kitchenPages.ts");

const FAVICON = "9b37ef_0961403087fd42f6a902430d1b31e251~mv2.jpg";
const LOGO_IDS = new Set([
  "9b37ef_a8dcd1e63d994a829b4bb31c3b1743f0~mv2.jpg",
  "9b37ef_a0e9f009221b4f5e97ce65987daa6fe8~mv2.jpg",
]);

const DESCRIPTION =
  "Quality, individuality and innovative features enjoy top priority. These German kitchen furniture ranges use top-quality materials with technology from leading brand manufacturers, combining traditional handcrafted workmanship with modern production. Supplied by Haris Building Solutions.";

const FEATURES = [
  "19 mm carcase, shelves and sides with an 8 mm back wall",
  "Laser-edged fronts, corpus and shelves for a seamless, durable finish",
  "Blum LEGRABOX pure pull-outs with BLUMOTION soft-close as standard",
  "Optional SERVO-DRIVE electric opening or TIP-ON mechanical opening",
  "Bespoke planning: widths 250–1200 mm, heights up to 2400 mm, depths up to 700 mm",
  "127 mm grid for ergonomic cabinet and plinth heights",
  "PEFC-certified production",
];

function wixUrl(file) {
  return `https://static.wixstatic.com/media/${file}`;
}

function pad(n) {
  return String(n).padStart(2, "0");
}

function collectGalleryFiles(html) {
  const decoded = html.replace(/\\u002F/g, "/").replace(/%7E/gi, "~");
  const ids = [
    ...decoded.matchAll(
      /9b37ef_[a-f0-9]{32}(?:%7E|~)mv2\.(?:jpg|jpeg|png|webp)/gi,
    ),
  ].map((m) => m[0].replace(/%7E/gi, "~").toLowerCase());

  const unique = [...new Set(ids)].filter(
    (id) => id !== FAVICON && !LOGO_IDS.has(id),
  );
  return unique;
}

const html = fs.readFileSync(HTML, "utf8");
const files = collectGalleryFiles(html);
if (files.length < 20) {
  throw new Error(`Expected kitchen gallery images, got ${files.length}`);
}

const kitchens = files.map((file, i) => {
  const n = pad(i + 1);
  const slug = `kitchen-${n}`;
  const title = `German Kitchen ${n}`;
  const image = wixUrl(file);
  return { n, slug, title, image };
});

const js = (v) => JSON.stringify(v);
const hero = kitchens[0].image;

const collections = kitchens.map((k) => ({
  id: k.slug,
  label: k.title,
  image: k.image,
  href: `/kitchens/german-kitchens/${k.slug}`,
}));

const items = kitchens.map((k) => ({
  id: k.slug,
  label: k.title,
  image: k.image,
  href: `/kitchens/german-kitchens/${k.slug}`,
}));

const productBlocks = kitchens
  .map(
    (k) => `  "kitchens/german-kitchens/${k.slug}": {
    key: "kitchens/german-kitchens/${k.slug}",
    categorySlug: "kitchens",
    collectionSlug: "german-kitchens",
    slug: ${js(k.slug)},
    title: ${js(k.title)},
    description: ${js(DESCRIPTION)},
    heroImage: ${js(k.image)},
    image: ${js(k.image)},
    images: [${js(k.image)}],
    colours: [],
    sizes: [],
    features: ${js(FEATURES)},
    specs: [
      { label: "Carcase", value: "19 mm sides and shelves, 8 mm back wall" },
      { label: "Edges", value: "Laser-edged fronts, corpus and shelves" },
      { label: "Fittings", value: "Blum LEGRABOX pure with BLUMOTION" },
      { label: "Planning", value: "Widths 250–1200 mm, heights up to 2400 mm" },
    ],
  }`,
  )
  .join(",\n");

const out = `export const KITCHENS_CATEGORY = {
  slug: "kitchens",
  title: "Kitchens",
  description: ${js(DESCRIPTION)},
  heroImage: ${js(hero)},
  collectionHeading: "View Our Collection",
  collections: ${js(collections)},
};

export const KITCHENS_COLLECTIONS = {
  "kitchens/german-kitchens": {
    key: "kitchens/german-kitchens",
    categorySlug: "kitchens",
    slug: "german-kitchens",
    title: "German Kitchens",
    description: ${js(DESCRIPTION)},
    heroImage: ${js(hero)},
    image: ${js(hero)},
    itemsHeading: "View Our Collection",
    items: ${js(items)},
  },
};

export const KITCHENS_PRODUCTS = {
${productBlocks},
};
`;

fs.writeFileSync(OUT, out);
console.log(`Wrote ${kitchens.length} kitchens to ${path.relative(ROOT, OUT)}`);
