const fs = require("fs");
const path = require("path");

async function getJson(url) {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    },
  });
  const text = await res.text();
  let json = null;
  try {
    json = JSON.parse(text);
  } catch {
    json = null;
  }
  return { status: res.status, url: res.url, json, text: text.slice(0, 200) };
}

async function allProducts(handle) {
  const items = [];
  for (let page = 1; page <= 20; page++) {
    const url = `https://www.stringproducts.com/collections/${handle}/products.json?limit=250&page=${page}`;
    const { status, json } = await getJson(url);
    const products = json?.products || [];
    console.log(handle, "page", page, status, products.length);
    if (!products.length) break;
    items.push(...products);
    if (products.length < 250) break;
  }
  return items;
}

function summarize(p) {
  return {
    handle: p.handle,
    title: p.title,
    vendor: p.vendor,
    product_type: p.product_type,
    tags: p.tags,
    images: (p.images || []).map((i) => i.src),
    body: String(p.body_html || "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 600),
    variants: (p.variants || []).map((v) => v.title),
    options: p.options,
  };
}

(async () => {
  const shower = await allProducts("shower-panels");
  const cladding = await allProducts("cladding-panels");
  const out = {
    shower: shower.map(summarize),
    cladding: cladding.map(summarize),
  };
  const dest = path.join(__dirname, "..", "temp-pages", "string-products.json");
  fs.writeFileSync(dest, JSON.stringify(out, null, 2));
  console.log("shower", shower.length, "cladding", cladding.length);
  console.log(
    "shower titles",
    shower.map((p) => p.title),
  );
  console.log(
    "cladding titles",
    cladding.map((p) => p.title),
  );
})();
