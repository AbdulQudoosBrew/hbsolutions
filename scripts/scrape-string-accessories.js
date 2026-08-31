const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "temp-pages", "string-accessories.json");

const COLLECTIONS = [
  "carpet-protection",
  "cutting-blades",
  "diamond-drill-bits",
  "drill-bits",
  "fibre-cement-board",
  "mosaic-mesh",
  "power-mixers",
  "glitter-additive",
  "st-products",
  "tile-leveling-system",
  "tiling-tools",
  "tile-trims",
  "pvc-trims",
  "aluminium-diamond",
  "our-latest-products",
];

async function allProducts(handle) {
  const items = [];
  for (let page = 1; page <= 10; page++) {
    const url = `https://www.stringproducts.com/collections/${handle}/products.json?limit=250&page=${page}`;
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
      },
    });
    const json = await res.json();
    const products = json.products || [];
    console.log(handle, "page", page, products.length);
    if (!products.length) break;
    items.push(...products);
    if (products.length < 250) break;
  }
  return items.map((p) => ({
    handle: p.handle,
    title: p.title,
    vendor: p.vendor,
    product_type: p.product_type,
    tags: p.tags,
    images: (p.images || []).map((i) => i.src),
    body: String(p.body_html || "")
      .replace(/<[^>]+>/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&nbsp;/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 900),
    variants: (p.variants || []).map((v) => ({
      title: v.title,
      sku: v.sku,
      option1: v.option1,
      option2: v.option2,
      option3: v.option3,
    })),
    options: (p.options || []).map((o) => ({
      name: o.name,
      values: o.values,
    })),
  }));
}

(async () => {
  const out = {};
  for (const handle of COLLECTIONS) {
    out[handle] = await allProducts(handle);
  }
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(out, null, 2));
  for (const [k, v] of Object.entries(out)) {
    console.log("\n===", k, v.length);
    for (const p of v) console.log(" -", p.title);
  }
})();
