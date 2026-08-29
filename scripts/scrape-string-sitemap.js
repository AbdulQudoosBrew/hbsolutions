const fs = require("fs");
const path = require("path");

async function get(url) {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
      Accept: "text/html,application/xhtml+xml",
    },
    redirect: "follow",
  });
  const html = await res.text();
  return { status: res.status, url: res.url, html, len: html.length };
}

(async () => {
  const outDir = path.join(__dirname, "..", "temp-pages");
  fs.mkdirSync(outDir, { recursive: true });

  const sitemap = await get("https://www.stringproducts.com/sitemap_index.xml");
  console.log("sitemap", sitemap.status, sitemap.len);
  const locs = [...sitemap.html.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  console.log("sitemaps", locs.slice(0, 20));

  const productCat = locs.find((u) => /product.cat|product-category/i.test(u));
  if (productCat) {
    const pc = await get(productCat);
    const catLocs = [...pc.html.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    const relevant = catLocs.filter((u) =>
      /shower|cladding|panel/i.test(u),
    );
    console.log("cat sitemap", productCat, "relevant", relevant);
  }

  const home = await get("https://www.stringproducts.com/");
  fs.writeFileSync(path.join(outDir, "string-home.html"), home.html);
  const hrefs = [
    ...home.html.matchAll(/href="(https?:\/\/www\.stringproducts\.com[^"]+|\/[^"]+)"/gi),
  ].map((m) => m[1]);
  const unique = [...new Set(hrefs)].filter((u) =>
    /shower|cladding|panel|product/i.test(u),
  );
  console.log("home hrefs", unique.slice(0, 60));
})();
