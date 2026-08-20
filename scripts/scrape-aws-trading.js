const fs = require("fs");
const path = require("path");
const https = require("https");

const BASE = "https://awstradingltd.com";
const ROOT = "D:/web-developement/hbsolutions";
const OUT_JSON = path.join(ROOT, "temp-aws-trading.json");
const OUT_MD = path.join(ROOT, "temp-aws-trading.md");

const SKIP_HANDLES = new Set([
  "all",
  "frontpage",
  "home-page",
  "clearance-1",
  "clearance",
  "new",
  "new-arrivals",
  "new-products",
  "set-images",
]);

const SKIP_TITLES = /^(home page|all products|clearance|new arrivals?|featured)$/i;

function fetchJsonOnce(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(
      url,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
          Accept: "application/json",
        },
      },
      (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          const next = res.headers.location.startsWith("http")
            ? res.headers.location
            : new URL(res.headers.location, url).toString();
          res.resume();
          return fetchJsonOnce(next).then(resolve, reject);
        }
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => {
          resolve({ status: res.statusCode || 0, data });
        });
      }
    );
    req.on("error", reject);
    req.setTimeout(30000, () => req.destroy(new Error(`timeout ${url}`)));
  });
}

async function fetchJson(url, attempt = 1) {
  const { status, data } = await fetchJsonOnce(url);
  if (status === 429 || status >= 500) {
    const wait = Math.min(15000, 1500 * attempt);
    console.log(`  retry ${status} in ${wait}ms: ${url}`);
    await sleep(wait);
    if (attempt > 8) throw new Error(`${status} ${url}`);
    return fetchJson(url, attempt + 1);
  }
  if (status !== 200) throw new Error(`${status} ${url}`);
  return JSON.parse(data);
}

async function paginate(urlBuilder, key) {
  const items = [];
  for (let page = 1; page <= 50; page++) {
    const data = await fetchJson(urlBuilder(page));
    const batch = data[key] || [];
    items.push(...batch);
    if (batch.length < 250) break;
    await sleep(400);
  }
  return items;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function stripHtml(html) {
  return String(html || "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<li>/gi, "- ")
    .replace(/<\/li>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\u00a0/g, " ")
    .replace(/PLEASE QUOTE THE FULL PRODUCT CODE AND TITLE WHEN PLACING AN ORDER/gi, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
}

function cleanImage(src) {
  if (!src) return "";
  return String(src).replace(/\\u0026/g, "&").split("?")[0];
}

const TOP_CATEGORIES = [
  {
    id: "furniture",
    title: "Furniture",
    children: [
      { id: "tables", title: "Tables", handles: ["tables", "all-tables"] },
      { id: "dining-tables", title: "Dining Tables", handles: ["dining-table", "dining-tables"] },
      { id: "coffee-tables", title: "Coffee Tables", handles: ["coffee-table", "coffee-tables"] },
      { id: "lamp-tables", title: "Lamp Tables", handles: ["lamp-table", "lamp-tables"] },
      { id: "console-tables", title: "Console Tables", handles: ["console-table", "console-tables"] },
      { id: "tv-stands", title: "TV Stands", handles: ["tv-stand", "tv-stands"] },
      { id: "table-top-colours", title: "Table Top Colours", handles: ["table-top-colours", "table-tops"] },
      { id: "other-marble", title: "Other Marble", handles: ["other-marble", "marble"] },
      { id: "chairs", title: "Chairs", handles: ["chair", "chairs", "all-chairs"] },
      { id: "benches", title: "Benches", handles: ["bench", "benches"] },
      { id: "barstools", title: "Barstools", handles: ["barstool", "barstools"] },
      { id: "sofas", title: "Sofas", handles: ["sofa", "sofas"] },
      { id: "oak", title: "Oak", handles: ["oak", "oak-1", "all-oak-products", "torino", "lucca", "siena"] },
      { id: "milan", title: "Milan", handles: ["milan"] },
      { id: "furniture-sets", title: "Furniture Sets", handles: ["set-images"] },
      { id: "beds", title: "Beds / Mattresses", handles: ["beds", "bed-frames", "mattresses", "all-beds-and-mattresses"] },
    ],
  },
  {
    id: "mirrors",
    title: "Mirror Products",
    children: [
      { id: "mirrors", title: "Mirrors", handles: ["mirrors", "mirror-2", "all-mirrored-products"] },
      { id: "mirror-ornament", title: "Mirror Ornament", handles: ["mirror-ornament", "mirror-ornaments", "decoration"] },
      { id: "mirror-furniture", title: "Mirror Furniture", handles: ["mirror-furniture", "mirror-furniture-2"] },
    ],
  },
  {
    id: "clocks",
    title: "Clocks",
    children: [{ id: "clocks", title: "Clocks", handles: ["clock", "clocks"] }],
  },
  {
    id: "lighting",
    title: "Lighting",
    children: [
      { id: "lamps-and-fixtures", title: "Lamps and Fixtures", handles: ["lighting", "lamps", "lamps-and-fixtures"] },
      { id: "led-mirrors", title: "Mirrors (LED)", handles: ["mirrors-led", "led-mirrors"] },
      { id: "led-mirrored-furniture", title: "Mirrored Furniture (LED)", handles: ["mirrored-furniture-led"] },
    ],
  },
  {
    id: "panelling",
    title: "Panelling",
    children: [
      { id: "acoustic-panels", title: "Acoustic Panels", handles: ["acoustic", "acoustic-panels"] },
      { id: "aqua-panels", title: "Aqua Panels", handles: ["pvc-1", "aqua-panels", "pvc"] },
      { id: "room-dividers", title: "Room Dividers", handles: ["room-dividers", "room-divider"] },
      { id: "seamless-panels", title: "Seamless Panels", handles: ["seamless", "seamless-panels", "hanging-wall-panels"] },
      { id: "wall-panels", title: "Wall Panels", handles: ["pvc-panels", "wall-panels-1"] },
      { id: "outdoor-panels", title: "Outdoor Panels", handles: ["outdoor-panels"] },
      { id: "outdoor-cladding", title: "Outdoor Cladding", handles: ["outdoor-cladding", "cladding"] },
      { id: "wall-panel-accessories", title: "Wall Panel Accessories", handles: ["wall-panel-accessories", "all-accessories", "accessories-1"] },
      { id: "panel-lighting", title: "Panel Lighting", handles: ["panel-lighting"] },
      { id: "trims", title: "Trims", handles: ["trims", "panel-trims", "wall-panel-trims"] },
      { id: "brackets-and-fixings", title: "Brackets and Fixings", handles: ["buckles", "brackets-and-fixings"] },
      { id: "cover-slips", title: "Cover Slips", handles: ["cover-slip", "cover-slips"] },
      { id: "ceilings", title: "Ceilings", handles: ["ceiling", "ceiling-panels", "ceiling-accessories", "ceiling-trims"] },
    ],
  },
  {
    id: "outdoors",
    title: "Outdoors",
    children: [
      { id: "cladding", title: "Cladding", handles: ["cladding", "outdoor-cladding"] },
      { id: "outdoor-panels", title: "Outdoor Panels", handles: ["outdoor-panels", "all-panelling", "outdoor-wall-panels", "outdoor-wall-panelling"] },
      { id: "decking", title: "Decking", handles: ["outdoor-decking", "decking", "decking-85-series", "decking-trims", "decking-accessories", "outdoor-decking-copy", "outdoor-decking-accessories-copy"] },
      { id: "fencing", title: "Fencing", handles: ["fence-panels", "fencing", "fencing-accessories", "fencing-trims", "fencing-86-series", "fencing-88-series", "fencing-94-series", "outdoor-fencing"] },
      { id: "outdoor-accessories", title: "Outdoor Accessories", handles: ["outdoor-accessories", "outdoor-panel-accessories"] },
      { id: "outdoor-panel-trims", title: "Outdoor Panel Trims", handles: ["outdoor-panel-trims"] },
    ],
  },
];

const HANDLE_TO_CAT = new Map();
for (const top of TOP_CATEGORIES) {
  for (const child of top.children) {
    for (const h of child.handles) {
      HANDLE_TO_CAT.set(h, { topId: top.id, topTitle: top.title, id: child.id, title: child.title });
    }
  }
}

const BROAD_HANDLES = new Set([
  "wall-panels-1",
  "pvc-panels",
  "marble",
  "chairs",
  "chair",
  "mirrors",
  "outdoors",
  "accessories-1",
  "hanging-wall-panels",
  "lighting",
  "oak-1",
]);

function mapHandle(handle, title) {
  const series = String(handle || "").match(/^wall-panel-(\d+)-series$/i);
  if (series) {
    return {
      topId: "panelling",
      topTitle: "Panelling",
      id: handle,
      title: title || `Wall Panel ${series[1]} Series`,
    };
  }
  return HANDLE_TO_CAT.get(handle) || null;
}

const TITLE_RULES = [
  { re: /^set\s*\d+$/i, cat: { topId: "furniture", topTitle: "Furniture", id: "furniture-sets", title: "Furniture Sets" } },
  { re: /\bcoffee table\b/i, cat: { topId: "furniture", topTitle: "Furniture", id: "coffee-tables", title: "Coffee Tables" } },
  { re: /\blamp table\b/i, cat: { topId: "furniture", topTitle: "Furniture", id: "lamp-tables", title: "Lamp Tables" } },
  { re: /\bdining\b/i, cat: { topId: "furniture", topTitle: "Furniture", id: "dining-tables", title: "Dining Tables" } },
  { re: /\b(dining table|table)\b/i, cat: { topId: "furniture", topTitle: "Furniture", id: "dining-tables", title: "Dining Tables" } },
  { re: /\bcoffee table\b/i, cat: { topId: "furniture", topTitle: "Furniture", id: "coffee-tables", title: "Coffee Tables" } },
  { re: /\blamp table\b/i, cat: { topId: "furniture", topTitle: "Furniture", id: "lamp-tables", title: "Lamp Tables" } },
  { re: /\bconsole\b/i, cat: { topId: "furniture", topTitle: "Furniture", id: "console-tables", title: "Console Tables" } },
  { re: /\btv stand\b/i, cat: { topId: "furniture", topTitle: "Furniture", id: "tv-stands", title: "TV Stands" } },
  { re: /\bbarstool\b/i, cat: { topId: "furniture", topTitle: "Furniture", id: "barstools", title: "Barstools" } },
  { re: /\bchairs?\b|\bstools?\b/i, cat: { topId: "furniture", topTitle: "Furniture", id: "chairs", title: "Chairs" } },
  { re: /\bbench\b/i, cat: { topId: "furniture", topTitle: "Furniture", id: "benches", title: "Benches" } },
  { re: /\bsofa\b/i, cat: { topId: "furniture", topTitle: "Furniture", id: "sofas", title: "Sofas" } },
  { re: /\b(bed|mattress)\b/i, cat: { topId: "furniture", topTitle: "Furniture", id: "beds", title: "Beds / Mattresses" } },
  { re: /\bmirror\b/i, cat: { topId: "mirrors", topTitle: "Mirror Products", id: "mirrors", title: "Mirrors" } },
  { re: /\bclock\b/i, cat: { topId: "clocks", topTitle: "Clocks", id: "clocks", title: "Clocks" } },
  { re: /\b(lamp|led|light|lighting)\b/i, cat: { topId: "lighting", topTitle: "Lighting", id: "lamps-and-fixtures", title: "Lamps and Fixtures" } },
  { re: /\bceiling\b/i, cat: { topId: "panelling", topTitle: "Panelling", id: "ceilings", title: "Ceilings" } },
  { re: /\bacoustic\b/i, cat: { topId: "panelling", topTitle: "Panelling", id: "acoustic-panels", title: "Acoustic Panels" } },
  { re: /\b(wp|pvc|wall panel|aqua)\b/i, cat: { topId: "panelling", topTitle: "Panelling", id: "aqua-panels", title: "Aqua Panels" } },
  { re: /\b(cladding|outdoor panel)\b/i, cat: { topId: "outdoors", topTitle: "Outdoors", id: "cladding", title: "Cladding" } },
  { re: /\bdeck/i, cat: { topId: "outdoors", topTitle: "Outdoors", id: "decking", title: "Decking" } },
  { re: /\bfenc/i, cat: { topId: "outdoors", topTitle: "Outdoors", id: "fencing", title: "Fencing" } },
  { re: /\b(candle|tealight|ornament|holder)\b/i, cat: { topId: "mirrors", topTitle: "Mirror Products", id: "mirror-ornament", title: "Mirror Ornament" } },
  { re: /\b(adhesive|bracket|strip|trim|cover slip)\b/i, cat: { topId: "panelling", topTitle: "Panelling", id: "wall-panel-accessories", title: "Wall Panel Accessories" } },
];

function inferFromText(title, type, tags) {
  const t = String(title || "");
  const typ = String(type || "").toLowerCase();
  if (typ === "set" || /^set\s*\d+$/i.test(t) || /^set\d+$/i.test(t)) {
    return { topId: "furniture", topTitle: "Furniture", id: "furniture-sets", title: "Furniture Sets", inferred: true };
  }
  if (/lucca/i.test(t)) {
    return { topId: "furniture", topTitle: "Furniture", id: "oak", title: "Oak", inferred: true };
  }
  const blob = `${title} ${type} ${(tags || []).join(" ")}`;
  for (const rule of TITLE_RULES) {
    if (rule.re.test(blob) || rule.re.test(t)) return { ...rule.cat, inferred: true };
  }
  return {
    topId: "uncategorised",
    topTitle: "Uncategorised",
    id: slugify(type || "general"),
    title: type || "General",
    inferred: true,
  };
}

function slugify(text) {
  return String(text || "general")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "general";
}

function pickCategory(product, memberships) {
  const ranked = memberships
    .map((m) => ({ ...m, mapped: mapHandle(m.handle, m.title) }))
    .filter((m) => m.mapped);

  ranked.sort((a, b) => {
    const aBroad = BROAD_HANDLES.has(a.handle) ? 1 : 0;
    const bBroad = BROAD_HANDLES.has(b.handle) ? 1 : 0;
    if (aBroad !== bBroad) return aBroad - bBroad;
    return (a.productsCount || 999) - (b.productsCount || 999);
  });

  if (ranked[0]) {
    return { ...ranked[0].mapped, inferred: false, sourceHandle: ranked[0].handle };
  }

  return inferFromText(product.title, product.productType || product.product_type, product.tags);
}

function groupProducts(products, meta) {
  const byCategory = {};
  for (const p of products) {
    const topKey = p.category.topId;
    if (!byCategory[topKey]) {
      byCategory[topKey] = {
        id: p.category.topId,
        title: p.category.topTitle,
        subcategories: {},
      };
    }
    const subKey = p.category.id;
    if (!byCategory[topKey].subcategories[subKey]) {
      byCategory[topKey].subcategories[subKey] = {
        id: p.category.id,
        title: p.category.title,
        products: [],
      };
    }
    byCategory[topKey].subcategories[subKey].products.push(p);
  }

  const categories = Object.values(byCategory)
    .map((top) => ({
      ...top,
      productCount: Object.values(top.subcategories).reduce((n, s) => n + s.products.length, 0),
      subcategories: Object.values(top.subcategories)
        .map((s) => ({
          ...s,
          productCount: s.products.length,
          products: s.products.sort((a, b) => a.title.localeCompare(b.title)),
        }))
        .sort((a, b) => a.title.localeCompare(b.title)),
    }))
    .sort((a, b) => a.title.localeCompare(b.title));

  return {
    source: meta.source || `${BASE}/collections/all`,
    scrapedAt: meta.scrapedAt || new Date().toISOString(),
    productCount: products.length,
    collectionCount: meta.collectionCount,
    categories,
  };
}

function writeOutput(payload) {
  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2));
  fs.writeFileSync(OUT_MD, toMarkdown(payload));
  console.log(`Wrote ${OUT_JSON}`);
  console.log(`Wrote ${OUT_MD}`);
  console.log(`Products: ${payload.productCount}`);
  for (const c of payload.categories) {
    console.log(`  ${c.title}: ${c.productCount}`);
    for (const s of c.subcategories) {
      console.log(`    - ${s.title}: ${s.productCount}`);
    }
  }
}

function remapExisting() {
  const payload = JSON.parse(fs.readFileSync(OUT_JSON, "utf8"));
  const products = [];
  for (const top of payload.categories) {
    for (const sub of top.subcategories) {
      products.push(...sub.products);
    }
  }
  for (const p of products) {
    p.category = pickCategory(p, p.collections || []);
  }
  const next = groupProducts(products, payload);
  writeOutput(next);
}

async function main() {
  console.log("Fetching collections...");
  const collections = await paginate(
    (page) => `${BASE}/collections.json?limit=250&page=${page}`,
    "collections"
  );
  console.log(`Collections: ${collections.length}`);

  console.log("Fetching all products...");
  const products = await paginate(
    (page) => `${BASE}/products.json?limit=250&page=${page}`,
    "products"
  );
  console.log(`Products: ${products.length}`);

  const membership = new Map();
  for (const col of collections) {
    if (SKIP_HANDLES.has(col.handle) || SKIP_TITLES.test(col.title)) continue;
    console.log(`  collection ${col.handle} (${col.products_count})`);
    const colProducts = await paginate(
      (page) => `${BASE}/collections/${col.handle}/products.json?limit=250&page=${page}`,
      "products"
    );
    for (const p of colProducts) {
      if (!membership.has(p.id)) membership.set(p.id, []);
      membership.get(p.id).push({
        id: col.id,
        handle: col.handle,
        title: col.title,
        productsCount: col.products_count || colProducts.length,
      });
    }
    await sleep(500);
  }

  const normalised = products.map((p) => {
    const images = (p.images || [])
      .map((img) => ({
        src: cleanImage(img.src),
        alt: img.alt || p.title,
        width: img.width,
        height: img.height,
      }))
      .filter((img) => img.src);

    const variants = (p.variants || []).map((v) => ({
      id: v.id,
      title: v.title,
      sku: v.sku || "",
      option1: v.option1,
      option2: v.option2,
      option3: v.option3,
      available: v.available,
      price: v.price,
    }));

    const tags = typeof p.tags === "string"
      ? p.tags.split(",").map((t) => t.trim()).filter(Boolean)
      : p.tags || [];

    const memberships = membership.get(p.id) || [];
    const category = pickCategory(p, memberships);

    return {
      id: p.id,
      handle: p.handle,
      title: p.title,
      vendor: p.vendor || "",
      productType: p.product_type || "",
      tags,
      url: `${BASE}/products/${p.handle}`,
      descriptionHtml: p.body_html || "",
      description: stripHtml(p.body_html),
      images,
      image: images[0]?.src || "",
      options: (p.options || []).map((o) => ({ name: o.name, values: o.values })),
      variants,
      collections: memberships.map((m) => ({ handle: m.handle, title: m.title })),
      category,
      publishedAt: p.published_at,
    };
  });

  writeOutput(
    groupProducts(normalised, {
      source: `${BASE}/collections/all`,
      scrapedAt: new Date().toISOString(),
      collectionCount: collections.length,
    })
  );
}

function toMarkdown(payload) {
  const lines = [];
  lines.push(`# AWS Trading Ltd products`);
  lines.push("");
  lines.push(`Source: ${payload.source}`);
  lines.push(`Scraped: ${payload.scrapedAt}`);
  lines.push(`Total products: ${payload.productCount}`);
  lines.push("");
  for (const top of payload.categories) {
    lines.push(`## ${top.title} (${top.productCount})`);
    lines.push("");
    for (const sub of top.subcategories) {
      lines.push(`### ${sub.title} (${sub.productCount})`);
      lines.push("");
      for (const p of sub.products) {
        lines.push(`#### ${p.title}`);
        lines.push("");
        lines.push(`- Handle: \`${p.handle}\``);
        lines.push(`- URL: ${p.url}`);
        if (p.productType) lines.push(`- Type: ${p.productType}`);
        if (p.tags.length) lines.push(`- Tags: ${p.tags.join(", ")}`);
        if (p.category.inferred) lines.push(`- Category assigned: inferred`);
        if (p.description) {
          lines.push("");
          lines.push(p.description);
        }
        if (p.images.length) {
          lines.push("");
          lines.push("Images:");
          for (const img of p.images) {
            lines.push(`- ${img.src}`);
          }
        }
        lines.push("");
      }
    }
  }
  return lines.join("\n");
}

if (process.argv.includes("--remap")) {
  remapExisting();
} else {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
