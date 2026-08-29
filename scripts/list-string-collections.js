const fs = require("fs");
const path = require("path");

(async () => {
  const home = await fetch("https://www.stringproducts.com/", {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    },
  });
  const html = await home.text();
  const hrefs = [
    ...html.matchAll(/href="(\/collections\/[^"#?]+)"/gi),
  ].map((m) => m[1]);
  console.log("collections", [...new Set(hrefs)]);

  for (const handle of [
    "spc-flooring",
    "spc-flooring-1",
    "flooring",
    "spc",
    "spc-floors",
  ]) {
    const url = `https://www.stringproducts.com/collections/${handle}/products.json?limit=5`;
    const res = await fetch(url);
    const json = await res.json().catch(() => ({}));
    console.log(handle, res.status, (json.products || []).length, json.products?.[0]?.title);
  }

  const col = await fetch("https://www.stringproducts.com/collections.json?limit=250");
  const cj = await col.json();
  const names = (cj.collections || []).map((c) => `${c.handle} | ${c.title} | ${c.products_count}`);
  console.log("all collections", names);
  fs.writeFileSync(
    path.join(__dirname, "..", "temp-pages", "string-collections.json"),
    JSON.stringify(cj.collections, null, 2),
  );
})();
