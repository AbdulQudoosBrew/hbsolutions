import type { CategoryPageData } from "@/lib/constants/categoryPages";
import type {
  CollectionItem,
  CollectionPageData,
  ProductPageData,
} from "@/lib/constants/collectionPages";
import products from "@/data/gretagrove-products.json";

type RawProduct = (typeof products)[number];

const CATEGORY_SLUG = "available-on-delivery";
const FALLBACK_IMAGE = "/images/panels-banner.jpg";

const TOP_COLLECTIONS: {
  slug: string;
  label: string;
  description: string;
}[] = [
  {
    slug: "wall-panels",
    label: "Wall Panels",
    description:
      "PVC, Ultravex, Vellura, PU stone and plant wall panels available for delivery.",
  },
  {
    slug: "pvc-cladding",
    label: "PVC Cladding",
    description: "PVC wall and ceiling cladding available for delivery.",
  },
  {
    slug: "slat-panels",
    label: "Slat Panels",
    description:
      "Aluvo slat panels and acoustic panels available for delivery.",
  },
  {
    slug: "spc-flooring",
    label: "SPC Flooring",
    description:
      "SPC flooring, herringbone, tile finish, beading and skirting available for delivery.",
  },
  {
    slug: "indoor-tiles",
    label: "Indoor Tiles",
    description: "Indoor tile collections available for delivery.",
  },
  {
    slug: "outdoor-tiles",
    label: "Outdoor Tiles",
    description: "Outdoor tiles available for delivery.",
  },
  {
    slug: "decking",
    label: "Decking",
    description: "Composite and co-extrusion decking available for delivery.",
  },
  {
    slug: "composite-cladding",
    label: "Composite Cladding",
    description: "Composite cladding boards and trims available for delivery.",
  },
  {
    slug: "outdoor-slatwall",
    label: "Outdoor Slatwall",
    description:
      "Composite slatwall and Blackline series available for delivery.",
  },
  {
    slug: "composite-fencing",
    label: "Composite Fencing",
    description:
      "Composite fencing panels and accessories available for delivery.",
  },
  {
    slug: "trims-accessories",
    label: "Trims",
    description: "Trims and finishing accessories available for delivery.",
  },
  {
    slug: "accessories-adhesives",
    label: "Adhesives",
    description:
      "Froggit adhesives and related accessories available for delivery.",
  },
  {
    slug: "accessories",
    label: "Accessories",
    description: "Installation accessories available for delivery.",
  },

    // {
    //   slug: "other",
    //   label: "More Products",
    //   description: "Further products available for delivery.",
    // },
];

const CHILD_TO_TOP: Record<string, string> = {
  "pvc-wall-panels": "wall-panels",
  "ultravex-panels": "wall-panels",
  "vellura-solid-core-panels": "wall-panels",
  "pu-stone-panels": "wall-panels",
  "plant-wall": "wall-panels",
  "uv-panels": "wall-panels",
  petra: "wall-panels",
  "pvc-ceiling-cladding": "pvc-cladding",
  aluvo: "slat-panels",
  "acoustic-panels": "slat-panels",
  "metallic-acoustic-panels": "slat-panels",
  "wood-veneer-acoustic-panels": "slat-panels",
  "3-slats": "slat-panels",
  "4-slats": "slat-panels",
  "6-slats": "slat-panels",
  "ls-slats": "slat-panels",
  "half-round": "slat-panels",
  "curved-slats": "slat-panels",
  "weave-slats": "slat-panels",
  beading: "spc-flooring",
  "azmin-collection": "spc-flooring",
  "herringbone-spc-flooring-waterproof-flooring-uk-gretagrove": "spc-flooring",
  "tile-finish": "spc-flooring",
  "wood-embossed-finish": "spc-flooring",
  "ps-skirting": "spc-flooring",
  "natural-collection": "indoor-tiles",
  "colour-collection": "indoor-tiles",
  "crystal-collection": "indoor-tiles",
  "tiles-finish": "outdoor-tiles",
  "composite-decking": "decking",
  "co-extrusion": "decking",
  "decking-accessories": "decking",
  "composite-slatwall": "outdoor-slatwall",
  "composite-slatwall-blackline-series": "outdoor-slatwall",
  "fencing-panels": "composite-fencing",
  "fencing-accessories": "composite-fencing",
  trims: "trims-accessories",
  "froggit-adhesives": "accessories-adhesives",
  "cladding-external-trims-2500": "composite-cladding",
  "cladding-h-trim-2500": "composite-cladding",
  "cladding-u-trim-2500": "composite-cladding",
  "cladding-h-trim-5000": "composite-cladding",
  "cladding-u-trim-5000": "composite-cladding",
  "external-cladding-trims-5000": "composite-cladding",
  "cladding-edge-seal": "composite-cladding",
  "cladding-5000": "composite-cladding",
  "cladding-3600": "composite-cladding",
  "cladding-2500mm": "composite-cladding",
  "wpc-decking-2500": "decking",
  "wpc-decking-3600": "decking",
  "wpc-decking-5000": "decking",
  "decking-end-caps": "decking",
  "decking-fascias": "decking",
  "bullnose-decking-2500": "decking",
  "bullnose-decking-5000": "decking",
  "decking-edge-seal-2500": "decking",
  "decking-edge-seal-3600mm": "decking",
  "decking-edge-seal-5000": "decking",
  "stone-effect": "wall-panels",
  "cube-effect": "wall-panels",
  "line-effect": "wall-panels",
  "joining-clips": "accessories",
};

type Subcategory = {
  slug: string;
  label: string;
  description: string;
  match: string[];
  slugIncludes?: string[];
};

const SUBCATEGORIES: Record<string, Subcategory[]> = {
  "wall-panels": [
    {
      slug: "pvc-wall-panels",
      label: "PVC Wall Panels",
      description: "PVC wall panels available for delivery.",
      match: ["pvc-wall-panels"],
    },
    {
      slug: "ultravex-panels",
      label: "Ultravex Panels",
      description: "Ultravex panels available for delivery.",
      match: ["ultravex-panels", "uv-panels"],
    },
    {
      slug: "vellura-solid-core-panels",
      label: "Vellura Solid Core Panels",
      description: "Vellura solid core panels available for delivery.",
      match: ["vellura-solid-core-panels"],
    },
    {
      slug: "pu-stone-panels",
      label: "PU Stone Panels",
      description: "PU stone panels available for delivery.",
      match: ["pu-stone-panels", "stone-effect", "cube-effect", "line-effect"],
    },
    {
      slug: "plant-wall",
      label: "Plant Wall",
      description: "Plant wall panels available for delivery.",
      match: ["plant-wall"],
    },
    {
      slug: "petra",
      label: "Petra",
      description: "Petra panels available for delivery.",
      match: ["petra"],
    },
  ],
  "pvc-cladding": [
    {
      slug: "pvc-ceiling-cladding",
      label: "PVC Ceiling Cladding",
      description: "PVC ceiling cladding available for delivery.",
      match: ["pvc-ceiling-cladding"],
    },
    {
      slug: "pvc-cladding",
      label: "PVC Cladding",
      description: "PVC cladding available for delivery.",
      match: ["pvc-cladding"],
    },
  ],
  "slat-panels": [
    {
      slug: "aluvo",
      label: "Aluvo",
      description: "Aluvo slat panels available for delivery.",
      match: [
        "aluvo",
        "3-slats",
        "4-slats",
        "6-slats",
        "ls-slats",
        "half-round",
        "curved-slats",
        "weave-slats",
      ],
    },
    {
      slug: "acoustic-panels",
      label: "Acoustic Panels",
      description:
        "Wood veneer and metallic acoustic panels available for delivery.",
      match: [
        "acoustic-panels",
        "wood-veneer-acoustic-panels",
        "metallic-acoustic-panels",
        "2400-x-600-metallic-acoustic-panels",
        "acoustic-panel-end-trims",
      ],
    },
  ],
  "spc-flooring": [
    {
      slug: "wood-embossed-finish",
      label: "Wood Embossed Finish",
      description: "Wood embossed SPC flooring available for delivery.",
      match: ["wood-embossed-finish"],
    },
    {
      slug: "tile-finish",
      label: "Tile Finish",
      description: "Tile finish SPC flooring available for delivery.",
      match: ["tile-finish"],
    },
    {
      slug: "herringbone",
      label: "Herringbone Finish",
      description: "Herringbone SPC flooring available for delivery.",
      match: ["herringbone-spc-flooring-waterproof-flooring-uk-gretagrove"],
    },
    {
      slug: "azmin-collection",
      label: "Azmin Collection",
      description: "Azmin collection SPC flooring available for delivery.",
      match: ["azmin-collection"],
      slugIncludes: ["azmin"],
    },
    {
      slug: "ps-skirting",
      label: "PS Skirting",
      description: "PS skirting available for delivery.",
      match: ["ps-skirting"],
    },
    {
      slug: "beading",
      label: "Beading",
      description: "SPC flooring beading available for delivery.",
      match: ["beading"],
    },
  ],
  "indoor-tiles": [
    {
      slug: "natural-collection",
      label: "Natural Collection",
      description: "Natural collection indoor tiles available for delivery.",
      match: ["natural-collection"],
    },
    {
      slug: "colour-collection",
      label: "Colour Collection",
      description: "Colour collection indoor tiles available for delivery.",
      match: ["colour-collection", "colour-1200-x-600"],
    },
    {
      slug: "crystal-collection",
      label: "Crystal Collection",
      description: "Crystal collection indoor tiles available for delivery.",
      match: ["crystal-collection", "1200-x-600-crystal-collection"],
    },
  ],
  "outdoor-tiles": [
    {
      slug: "tiles-finish",
      label: "Tiles Finish",
      description: "Outdoor tiles available for delivery.",
      match: ["tiles-finish", "outdoor-tiles"],
    },
  ],
  decking: [
    {
      slug: "composite-decking",
      label: "Composite Decking",
      description: "Composite decking available for delivery.",
      match: [
        "composite-decking",
        "wpc-decking-2500",
        "wpc-decking-3600",
        "wpc-decking-5000",
      ],
    },
    {
      slug: "co-extrusion",
      label: "Co Extrusion Decking",
      description: "Co-extrusion decking available for delivery.",
      match: ["co-extrusion"],
    },
    {
      slug: "decking-accessories",
      label: "Decking Accessories",
      description: "Decking accessories available for delivery.",
      match: [
        "decking-accessories",
        "decking-end-caps",
        "decking-fascias",
        "decking-nosing-boards-2500",
        "decking-nosing-boards-5000",
        "decking-edge-seal-2500",
        "decking-edge-seal-3600mm",
        "decking-edge-seal-5000",
        "bullnose-decking-2500",
        "bullnose-decking-5000",
        "dual-decking-2500",
        "dual-decking-5000",
        "bull-nose",
      ],
    },
  ],
  "composite-cladding": [
    {
      slug: "cladding-trims",
      label: "Cladding Trims",
      description: "Composite cladding trims available for delivery.",
      match: [
        "cladding-edge-seal",
        "cladding-u-trim-2500",
        "cladding-u-trim-5000",
        "cladding-h-trim-2500",
        "cladding-h-trim-5000",
        "cladding-external-trims-2500",
        "external-cladding-trims-5000",
      ],
    },
    {
      slug: "composite-cladding",
      label: "Composite Cladding",
      description: "Composite cladding boards available for delivery.",
      match: [
        "composite-cladding",
        "cladding-2500mm",
        "cladding-3600",
        "cladding-5000",
      ],
    },
  ],
  "outdoor-slatwall": [
    {
      slug: "composite-slatwall",
      label: "Composite Slatwall",
      description: "Composite slatwall available for delivery.",
      match: [
        "composite-slatwall",
        "composite-slatwall-2500",
        "composite-slatwall-3600",
        "composite-slatwall-5000",
      ],
    },
    {
      slug: "blackline-series",
      label: "Blackline Series",
      description:
        "Composite slatwall Blackline series available for delivery.",
      match: [
        "composite-slatwall-blackline-series",
        "slatwall-2500-blackline-series",
        "slatwall-5000-blackline-series",
      ],
    },
  ],
  "composite-fencing": [
    {
      slug: "fencing-panels",
      label: "Fencing Panels",
      description: "Composite fencing panels available for delivery.",
      match: ["fencing-panels"],
    },
    {
      slug: "fencing-accessories",
      label: "Fencing Accessories",
      description: "Composite fencing accessories available for delivery.",
      match: ["fencing-accessories"],
    },
  ],
  "accessories-adhesives": [
    {
      slug: "froggit-adhesives",
      label: "Froggit Adhesives",
      description: "Froggit adhesives available for delivery.",
      match: ["froggit-adhesives", "accessories-adhesives"],
    },
  ],
};

function formatPrice(raw: string, minorUnit: number) {
  const amount = Number(raw);
  if (!Number.isFinite(amount) || amount <= 0) return "";
  return `£${(amount / 10 ** minorUnit).toFixed(2)}`;
}

function priceAmount(raw: string, minorUnit: number) {
  const amount = Number(raw);
  if (!Number.isFinite(amount) || amount <= 0) return 0;
  return Math.round(amount);
}

function resolveCollection(product: RawProduct) {
  const slugs = product.categories.map((category) => category.slug);
  const mapped = new Set<string>();
  for (const slug of slugs) {
    if (TOP_COLLECTIONS.some((entry) => entry.slug === slug)) mapped.add(slug);
    const child = CHILD_TO_TOP[slug];
    if (child) mapped.add(child);
  }
  return (
    TOP_COLLECTIONS.find((entry) => mapped.has(entry.slug))?.slug ?? "other"
  );
}

function resolveSubcategory(topSlug: string, product: RawProduct) {
  const slugs = new Set(product.categories.map((category) => category.slug));
  const subs = SUBCATEGORIES[topSlug] ?? [];
  const byCategory = subs.find((sub) =>
    sub.match.some((entry) => slugs.has(entry)),
  );
  if (byCategory) return byCategory;
  return (
    subs.find((sub) =>
      sub.slugIncludes?.some((entry) => product.slug.includes(entry)),
    ) ?? null
  );
}

function buildProduct(
  product: RawProduct,
  collectionSlug: string,
  subcollectionSlug?: string,
): { page: ProductPageData; item: CollectionItem } {
  const image = product.images[0] || FALLBACK_IMAGE;
  const images = product.images.length ? product.images : [image];
  const minor = product.currencyMinorUnit ?? 2;
  const price = formatPrice(product.price, minor);
  const amount = priceAmount(product.price, minor);
  const productKey = `${CATEGORY_SLUG}/${collectionSlug}/${product.slug}`;
  const href = `/${productKey}`;
  const description =
    product.description ||
    product.shortDescription ||
    `${product.name}. Available for delivery.`;

  return {
    page: {
      key: productKey,
      categorySlug: CATEGORY_SLUG,
      collectionSlug,
      slug: product.slug,
      title: product.name,
      description,
      image,
      images,
      colours: [],
      sizes: [],
      features: [
        product.sku ? `SKU: ${product.sku}` : "",
        "Available on delivery",
        "Add to basket to place an order",
      ].filter(Boolean),
      specs: [
        ...(product.sku ? [{ label: "SKU", value: product.sku }] : []),
        { label: "Availability", value: "Available on delivery" },
      ],
      price,
      priceAmount: amount,
      purchasable: true,
      subcollectionSlug,
    },
    item: {
      id: product.slug,
      label: product.name,
      image,
      href,
      price,
      purchasable: true,
    },
  };
}

function buildCatalog() {
  const grouped = new Map<string, RawProduct[]>();
  for (const product of products) {
    const key = resolveCollection(product);
    const list = grouped.get(key) ?? [];
    list.push(product);
    grouped.set(key, list);
  }

  const collections: Record<string, CollectionPageData> = {};
  const productPages: Record<string, ProductPageData> = {};
  const categoryCards: CategoryPageData["collections"] = [];

  for (const entry of TOP_COLLECTIONS) {
    const list = grouped.get(entry.slug) ?? [];
    if (!list.length) continue;

    const definedSubs = SUBCATEGORIES[entry.slug] ?? [];
    const subBuckets = new Map<string, RawProduct[]>();
    const leftovers: RawProduct[] = [];

    for (const product of list) {
      const sub = resolveSubcategory(entry.slug, product);
      if (!sub) {
        leftovers.push(product);
        continue;
      }
      const bucket = subBuckets.get(sub.slug) ?? [];
      bucket.push(product);
      subBuckets.set(sub.slug, bucket);
    }

    const usedSubs = definedSubs.filter(
      (sub) => (subBuckets.get(sub.slug) ?? []).length,
    );
    const useSubcategoryPages = usedSubs.length > 1;

    const parentItems: CollectionItem[] = [];
    let cardImage = FALLBACK_IMAGE;

    if (useSubcategoryPages) {
      for (const sub of usedSubs) {
        const subProducts = subBuckets.get(sub.slug) ?? [];
        const items: CollectionItem[] = [];
        for (const product of subProducts) {
          const built = buildProduct(product, entry.slug, sub.slug);
          productPages[built.page.key] = built.page;
          items.push(built.item);
        }
        const image = items[0]?.image || FALLBACK_IMAGE;
        if (cardImage === FALLBACK_IMAGE) cardImage = image;
        collections[`${CATEGORY_SLUG}/${entry.slug}/${sub.slug}`] = {
          key: `${CATEGORY_SLUG}/${entry.slug}/${sub.slug}`,
          categorySlug: CATEGORY_SLUG,
          slug: sub.slug,
          title: sub.label,
          description: sub.description,
          image,
          itemsHeading: "Shop the range",
          items,
        };
        parentItems.push({
          id: sub.slug,
          label: sub.label,
          image,
          href: `/${CATEGORY_SLUG}/${entry.slug}/${sub.slug}`,
          isSubcategory: true,
        });
      }

      if (leftovers.length) {
        const items: CollectionItem[] = [];
        for (const product of leftovers) {
          const built = buildProduct(product, entry.slug, "other");
          productPages[built.page.key] = built.page;
          items.push(built.item);
        }
        const image = items[0]?.image || FALLBACK_IMAGE;
        collections[`${CATEGORY_SLUG}/${entry.slug}/other`] = {
          key: `${CATEGORY_SLUG}/${entry.slug}/other`,
          categorySlug: CATEGORY_SLUG,
          slug: "other",
          title: "Other",
          description: `More ${entry.label.toLowerCase()} available for delivery.`,
          image,
          itemsHeading: "Shop the range",
          items,
        };
        parentItems.push({
          id: "other",
          label: "Other",
          image,
          href: `/${CATEGORY_SLUG}/${entry.slug}/other`,
          isSubcategory: true,
        });
      }
    } else {
      for (const product of list) {
        const sub = resolveSubcategory(entry.slug, product);
        const built = buildProduct(product, entry.slug, sub?.slug);
        productPages[built.page.key] = built.page;
        parentItems.push(built.item);
      }
      cardImage = parentItems[0]?.image || FALLBACK_IMAGE;
    }

    collections[`${CATEGORY_SLUG}/${entry.slug}`] = {
      key: `${CATEGORY_SLUG}/${entry.slug}`,
      categorySlug: CATEGORY_SLUG,
      slug: entry.slug,
      title: entry.label,
      description: entry.description,
      image: cardImage,
      itemsHeading: useSubcategoryPages ? "Shop by range" : "Shop the range",
      items: parentItems,
    };
    categoryCards.push({
      id: entry.slug,
      label: entry.label,
      image: cardImage,
      href: `/${CATEGORY_SLUG}/${entry.slug}`,
    });
  }

  const category: CategoryPageData = {
    slug: CATEGORY_SLUG,
    title: "Available on Delivery",
    description:
      "Products available for delivery and online order. Add items to your basket and send your order through.",
    collectionHeading: "Shop by range",
    collections: categoryCards,
  };

  return { category, collections, productPages };
}

const catalog = buildCatalog();

export const GRETAGROVE_CATEGORY = catalog.category;
export const GRETAGROVE_COLLECTIONS = catalog.collections;
export const GRETAGROVE_PRODUCTS = catalog.productPages;
