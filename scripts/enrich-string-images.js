const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "..", "temp-pages", "string-products.json");
const data = JSON.parse(fs.readFileSync(SRC, "utf8"));

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

(async () => {
  for (const group of ["shower", "cladding"]) {
    const extras = await Promise.all(
      data[group].map((p) => extraImages(p.handle)),
    );
    data[group].forEach((p, i) => {
      if (extras[i].length > p.images.length) p.images = extras[i];
    });
  }
  fs.writeFileSync(SRC, JSON.stringify(data, null, 2));
  console.log(
    "shower max",
    Math.max(...data.shower.map((p) => p.images.length)),
    "cladding max",
    Math.max(...data.cladding.map((p) => p.images.length)),
  );
})();
