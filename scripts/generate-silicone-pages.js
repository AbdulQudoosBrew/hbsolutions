const fs = require("fs");
const path = require("path");

const OUT = path.join(__dirname, "../lib/constants/siliconePages.ts");
const SRC = path.join(__dirname, "../temp-shop-ct1.json");
const js = (v) => JSON.stringify(v);
const HERO =
  "https://shop.ct1.com/pub/media/wysiwyg/slider/home_banner_ct1_v1-min.jpg";

const shop = JSON.parse(fs.readFileSync(SRC, "utf8"));
const bySlug = Object.fromEntries(shop.map((p) => [p.slug, p]));

function clean(text) {
  return String(text || "")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .replace(/^B W1\b/, "BW1")
    .trim();
}

function shopProduct(slug, fallbackDesc = "") {
  const p = bySlug[slug];
  if (!p) throw new Error(`Missing shop product ${slug}`);
  return {
    title: p.title,
    description: clean(p.description) || fallbackDesc,
    image: p.image,
    images: [p.image],
    features: (p.features || []).filter((f) => f.length > 20),
  };
}

const CT1_RALS = {
  white: "RAL 9003",
  black: "RAL 9004",
  grey: "RAL 7040",
  anthracite: "RAL 7016",
  beige: "RAL 1013",
  brown: "RAL 8011",
  oak: "RAL 8001",
  silver: "RAL 9022",
};

const CT1_FEATURES = [
  "TRIBRID Technology – 360% stronger than a traditional hybrid polymer",
  "Excellent colour retention – white stays white and clear stays clear",
  "Bonds metals, glass, mirrors, wood, MDF, polystyrene, tiles and concrete",
  "Works in wet or dry conditions, even underwater",
  "Approved by NAAF and EC1 Plus certified",
  "ISEGA certified for food preparation standards",
  "UV resistant with excellent vibration resistance",
];

const ct1White = shopProduct("ct1-white");
const CT1_COLOURS = [
  "white",
  "black",
  "grey",
  "clear",
  "anthracite",
  "beige",
  "brown",
  "oak",
  "silver",
  "green",
].map((value) => {
  const p = shopProduct(`ct1-${value}`, ct1White.description);
  return {
    value,
    label: p.title.replace(/^CT1\s+/i, ""),
    ral: CT1_RALS[value] || "",
    image: p.image,
    description: p.description.length > 80 ? p.description : ct1White.description,
  };
});

function single(slug, type, extraFeatures, sizes = []) {
  const p = shopProduct(slug);
  return {
    slug,
    title: p.title,
    description: p.description,
    image: p.image,
    images: p.images,
    colours: [],
    sizes,
    features: (p.features.length ? p.features : extraFeatures).slice(0, 8),
    type,
  };
}

const families = [
  {
    slug: "ct1",
    title: "CT1",
    description: ct1White.description,
    image: ct1White.image,
    colours: CT1_COLOURS,
    sizes: [{ value: "290ml", label: "290ml" }],
    features: CT1_FEATURES,
    type: "Sealant & adhesive",
    perColour: true,
  },
  {
    slug: "bt1",
    title: "BT1",
    description: shopProduct("bt1").description,
    image: shopProduct("bt1").image,
    colours: [
      {
        value: "white",
        label: "White",
        slug: "bt1-white",
        image: shopProduct("bt1").image,
        description: shopProduct("bt1").description,
      },
      {
        value: "pale-grey",
        label: "Pale Grey",
        slug: "bt1-pale-grey",
        image: shopProduct("bt1-pale-grey").image,
        description: shopProduct("bt1-pale-grey").description,
      },
      {
        value: "transparent",
        label: "Transparent",
        slug: "bt1-transparent",
        image: shopProduct("bt1-transparent").image,
        description: shopProduct("bt1-transparent").description,
      },
    ],
    sizes: [{ value: "290ml", label: "290ml" }],
    features: [
      "TRIBRID Technology bathroom sealant and adhesive",
      "Bacteria and microbes cannot survive on the surface",
      "Reduces bacteria by up to 99.99%",
      "EC1 Plus certified – very low emissions",
      "ETAG approved for bonding shower panels without mechanical fixings",
    ],
    type: "Bathroom sealant & adhesive",
    perColour: true,
  },
  single("bw1", "Waterproof tanking", shopProduct("bw1").features),
  single("fc1", "Filler & caulk", [
    "Ultra smooth finish - no sanding required",
    "Fill up to 25mm in one application",
    "Acrylic based with maximum flexibility",
    "Contains no solvents",
    "Will not crack",
    "Superior colour stability",
  ]),
  {
    slug: "fc1-patch-and-fill",
    title: "FC1 Patch & Fill Compound",
    description:
      "FC1 Ultimate Patch & Fill Compound with revolutionary high strength microspheres is a unique, high performance, ultra-lightweight and multipurpose repair solution for professional decorators. Ready mixed and easy to use internally or externally for filling and repairing large gaps, deep depressions up to 75mm, surface scratches or joints in preparation for painting and papering.",
    image: "https://www.ct1.com/wp-content/uploads/patch-fill.jpeg",
    colours: [],
    sizes: [],
    features: [
      "Ultra-lightweight multipurpose repair compound",
      "Fills deep depressions up to 75mm",
      "Ready mixed for internal and external use",
      "No slumping, sagging or shrinking",
    ],
    type: "Patch & fill compound",
  },
  single("miracle-seal", "Cooling system sealer", [
    "Permanently seals small cooling system leaks",
    "Seals radiators, hose pipes and water pumps",
    "Can seal hairline cracks in an engine block",
    "Will not clog the system",
  ]),
  {
    slug: "multisolve",
    ...shopProduct("multisolve-500ml"),
    title: "MultiSolve 500ml",
    colours: [],
    sizes: [{ value: "500ml", label: "500ml" }],
    features: [
      "Removes adhesives, sealants, oil, grease and silicone",
      "Removes wax, tar, paraffin and printing ink",
      "Leaves no oil film",
      "Can be used on painted surfaces, vinyl, glass, rubber and plastics",
    ],
    type: "Solvent cleaner",
  },
  {
    slug: "peel-tec",
    ...shopProduct(
      "peel-tec-removes-paint-fast",
      "Say goodbye to tedious and unsafe methods of removing paint such as heat, harsh solvents and mechanical methods. Peel Tec lets paint simply peel away.",
    ),
    title: "Peel Tec 500ml",
    colours: [],
    sizes: [{ value: "500ml", label: "500ml" }],
    features: [
      "Paint simply peels away",
      "Avoids heat, harsh solvents and mechanical stripping",
      "500ml pack",
    ],
    type: "Paint remover",
  },
  single("power-grab-n-bond", "Construction adhesive", [
    "Phenomenal grab – eliminate fixings",
    "Can reduce labour by 50%",
    "TRIBRID polymer technology",
    "Developed for facade bonding",
  ]),
  {
    slug: "super-fast-plus-50ml",
    ...shopProduct("superfast-plus-50ml"),
    colours: [],
    sizes: [{ value: "50ml", label: "50ml" }],
    features: [
      "Almost pure cyanoacrylate adhesive",
      "Bonds in seconds",
      "Solvent free one-component adhesive",
      "Temperature resistant from 30°C up to 100°C",
    ],
    type: "Cyanoacrylate adhesive",
  },
  {
    slug: "superfast-plus-20ml",
    ...shopProduct("superfast-plus-20ml"),
    colours: [],
    sizes: [{ value: "20ml", label: "20ml" }],
    features: [
      "Almost pure cyanoacrylate adhesive",
      "Bonds in seconds",
      "Professional 20ml pack",
    ],
    type: "Cyanoacrylate adhesive",
  },
  {
    slug: "super-fast-plus-activator",
    ...shopProduct("superfast-plus-activator"),
    colours: [],
    sizes: [],
    features: [
      "Seals porous materials before bonding",
      "Designed for use with Superfast Plus adhesive",
      "Improves bonding on wood, leather and stone",
    ],
    type: "Adhesive activator",
  },
  {
    slug: "ct1-caulking-gun",
    ...shopProduct("ct1-caulking-gun"),
    colours: [],
    sizes: [],
    features: shopProduct("ct1-caulking-gun").features.slice(0, 8),
    type: "Sealant gun",
  },
];

const collectionsOut = [];
const productsOut = [];

for (const product of families) {
  const variants = product.colours?.length
    ? product.colours.map((colour) => ({
        id: colour.slug || `${product.slug}-${colour.value}`,
        title: `${product.title} ${colour.label}`,
        colour,
      }))
    : [{ id: product.slug, title: product.title, colour: null }];

  const items = variants.map((variant) => ({
    id: variant.id,
    label: variant.title,
    image: variant.colour?.image || product.image,
    href: `/silicone/${product.slug}/${variant.id}`,
  }));

  collectionsOut.push(`  ${js(`silicone/${product.slug}`)}: {
    key: ${js(`silicone/${product.slug}`)},
    categorySlug: "silicone",
    slug: ${js(product.slug)},
    title: ${js(product.title)},
    description: ${js(product.description)},
    heroImage: ${js(HERO)},
    image: ${js(product.image)},
    itemsHeading: "View Our Range",
    items: ${js(items)},
  }`);

  for (const variant of variants) {
    const colours = (product.colours || []).map((c) => ({
      value: c.value,
      label: c.label,
    }));
    const specs = [
      { label: "Type", value: product.type },
      ...(variant.colour
        ? [{ label: "Colour", value: variant.colour.label }]
        : []),
      ...(variant.colour?.ral
        ? [{ label: "RAL", value: variant.colour.ral }]
        : []),
    ];
    const image = variant.colour?.image || product.image;
    const description = variant.colour?.description || product.description;
    productsOut.push(`  ${js(`silicone/${product.slug}/${variant.id}`)}: {
    key: ${js(`silicone/${product.slug}/${variant.id}`)},
    categorySlug: "silicone",
    collectionSlug: ${js(product.slug)},
    slug: ${js(variant.id)},
    title: ${js(variant.title)},
    description: ${js(description)},
    heroImage: ${js(HERO)},
    image: ${js(image)},
    images: ${js([image])},
    colours: ${js(colours)},
    sizes: ${js(product.sizes || [])},
    features: ${js(product.features || [])},
    specs: ${js(specs)},
  }`);
  }
}

const categoryCollections = families.map((product) => ({
  id: product.slug,
  label: product.title,
  image: product.image,
  href: `/silicone/${product.slug}`,
}));

fs.writeFileSync(
  OUT,
  `import type { CollectionPageData, ProductPageData } from "./collectionPages";

export const SILICONE_CATEGORY = {
  slug: "silicone",
  title: "Silicone",
  description:
    "Professional CT1 sealants, adhesives, fillers and surface treatments from Haris Building Solutions. TRIBRID Technology products for bonding, sealing, tanking and finishing, selected for performance and lasting value.",
  heroImage: ${js(HERO)},
  collectionHeading: "View Our Range",
  collectionAspect: "square" as const,
  collections: ${js(categoryCollections)},
};

export const SILICONE_COLLECTIONS: Record<string, CollectionPageData> = {
${collectionsOut.join(",\n")}
};

export const SILICONE_PRODUCTS: Record<string, ProductPageData> = {
${productsOut.join(",\n")}
};
`,
);

console.log("Wrote", OUT);
console.log("collections", collectionsOut.length, "products", productsOut.length);
