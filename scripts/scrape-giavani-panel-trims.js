const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "temp-pages", "giavani-panel-trims.json");

function decode(text) {
  return String(text || "")
    .replace(/&#8211;/g, "–")
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function stripHtml(s) {
  return decode(String(s || "").replace(/<[^>]+>/g, " "));
}

async function scrapeProductPage(url) {
  const html = await (
    await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } })
  ).text();
  const options = [];
  const re = /<option[^>]*value="([^"]*)"[^>]*>([^<]*)<\/option>/gi;
  let m;
  while ((m = re.exec(html))) {
    const value = decode(m[1]);
    const label = decode(m[2]);
    if (!value || /choose an option/i.test(label)) continue;
    options.push({ value, label });
  }
  const imgSrcs = [
    ...new Set(
      [...html.matchAll(/data-large_image="([^"]+)"/g)].map((x) => x[1]),
    ),
  ];
  return { options, extraImages: imgSrcs };
}

(async () => {
  const products = [];
  for (let p = 1; p <= 5; p++) {
    const res = await fetch(
      `https://giavanibathrooms.com/wp-json/wc/store/v1/products?category=81&per_page=100&page=${p}`,
      { headers: { "User-Agent": "Mozilla/5.0" } },
    );
    const json = await res.json();
    if (!Array.isArray(json) || !json.length) break;
    products.push(...json);
    if (json.length < 100) break;
  }

  const re = /trim|corner|cap|end cap|l[- ]?shape/i;
  const hits = products.filter((p) => re.test(p.name));
  const out = [];

  for (const p of hits) {
    const page = await scrapeProductPage(p.permalink);
    out.push({
      id: p.id,
      name: p.name,
      slug: p.slug,
      type: p.type,
      permalink: p.permalink,
      short: stripHtml(p.short_description),
      desc: stripHtml(p.description),
      images: [
        ...new Set(
          [
            ...(p.images || []).map((i) => i.src || i.thumbnail),
            ...page.extraImages,
          ].filter(Boolean),
        ),
      ],
      options: page.options,
    });
    console.log(p.name, "opts", page.options.length, "imgs", page.extraImages.length);
  }

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(out, null, 2));
  console.log("wrote", out.length, "to", OUT);
})();
