const fs = require("fs");
const path = require("path");

async function allProducts(handle) {
  const items = [];
  for (let page = 1; page <= 20; page++) {
    const url = `https://www.stringproducts.com/collections/${handle}/products.json?limit=250&page=${page}`;
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
      },
    });
    const json = await res.json();
    const products = json?.products || [];
    console.log(handle, "page", page, products.length);
    if (!products.length) break;
    items.push(...products);
    if (products.length < 250) break;
  }
  return items;
}

async function extraImages(handle) {
  const res = await fetch(`https://www.stringproducts.com/products/${handle}.js`, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    },
  });
  if (!res.ok) return [];
  const p = await res.json();
  return (p.images || []).map((i) => (typeof i === "string" ? i : i.src));
}

function summarize(p, extra) {
  const images = [...new Set([...(p.images || []).map((i) => i.src), ...extra])];
  return {
    handle: p.handle,
    title: p.title,
    images,
    body: String(p.body_html || "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  };
}

(async () => {
  const flooring = await allProducts("spc-flooring-1");
  const extras = await Promise.all(flooring.map((p) => extraImages(p.handle)));
  const out = flooring.map((p, i) => summarize(p, extras[i] || []));
  const dest = path.join(__dirname, "..", "temp-pages", "string-spc-flooring.json");
  fs.writeFileSync(dest, JSON.stringify(out, null, 2));
  console.log("count", out.length, "max imgs", Math.max(...out.map((p) => p.images.length)));
  out.forEach((p) => console.log(p.handle, "|", p.title, "|", p.body.slice(0, 90)));
})();
