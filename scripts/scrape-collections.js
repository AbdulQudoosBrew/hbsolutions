const fs = require("fs");
const path = require("path");
const https = require("https");

const ROOT = "D:/web-developement/hbsolutions";
const OUT_DIR = path.join(ROOT, "temp-collections");
const MAIN = [
  "sanitaryware",
  "taps",
  "showers",
  "baths",
  "bath-screens",
  "shower-enclosures",
  "wetroom-screens",
  "shower-trays",
  "furniture",
  "heating",
  "mirrors-cabinets",
  "panels",
  "flooring",
  "wall-tiles",
  "accessories",
];

fs.mkdirSync(OUT_DIR, { recursive: true });

function brandify(text) {
  return String(text || "")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/Â\s*/g, "")
    .replace(/â€™/g, "'")
    .replace(/â€œ|â€/g, '"')
    .replace(/â€¦/g, "...")
    .replace(/Giavani Bathrooms/gi, "Haris Building Solutions")
    .replace(/\bGiavani\b/gi, "Haris Building Solutions")
    .replace(/\s+/g, " ")
    .trim();
}

function slugifyId(id) {
  return String(id)
    .replace(/^product\//, "")
    .replace(/^#/, "")
    .replace(/[^a-z0-9-]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(
      url,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          Accept: "text/html",
        },
      },
      (res) => {
        if (
          res.statusCode >= 300 &&
          res.statusCode < 400 &&
          res.headers.location
        ) {
          const next = res.headers.location.startsWith("http")
            ? res.headers.location
            : `https://giavanibathrooms.com${res.headers.location}`;
          res.resume();
          return fetchHtml(next).then(resolve, reject);
        }
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () =>
          resolve({ status: res.statusCode || 0, html: data, url }),
        );
      },
    );
    req.on("error", reject);
    req.setTimeout(25000, () => {
      req.destroy(new Error("timeout"));
    });
  });
}

function descriptionFromHtml(html) {
  const blocks = [
    ...html.matchAll(
      /elementor-widget-text-editor[\s\S]*?<div class="elementor-widget-container">([\s\S]*?)<\/div>/gi,
    ),
  ];
  for (const block of blocks) {
    const text = brandify(block[1].replace(/<[^>]+>/g, " "));
    if (
      text.length > 50 &&
      !/cookie|copyright|privacy|menu search|enquire now/i.test(text)
    ) {
      return text;
    }
  }
  return "";
}

function cleanProductLabel(raw) {
  return brandify(raw)
    .replace(/\s*[–-]\s*£[\d.,]+.*$/i, "")
    .replace(/\s*£[\d.,]+.*$/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

function nearestImage(html, index) {
  const window = html.slice(Math.max(0, index - 3000), index);
  const imgs = [
    ...window.matchAll(
      /src="(https:\/\/giavanibathrooms\.com\/wp-content\/uploads\/[^"]+\.(?:jpg|jpeg|png|webp))"/gi,
    ),
  ].filter((m) => !/logo|333\.png|icon/i.test(m[1]));
  return imgs.length ? imgs[imgs.length - 1][1] : "";
}

function extractItems(html) {
  const items = [];
  const seen = new Set();

  // Buttons may be plain labels with no href (e.g. PVC Wall Panels 1000mm * 2400mm * 10mm panel finishes)
  const btns = [
    ...html.matchAll(
      /<a class="elementor-button[^"]*"(?:[^>]*href="([^"]*)")?[^>]*>[\s\S]*?<span class="elementor-button-text">([^<]+)<\/span>/gi,
    ),
  ];

  for (const btn of btns) {
    const href = btn[1] || "";
    const label = cleanProductLabel(btn[2]);
    if (
      !label ||
      label.length < 2 ||
      /view our|discover|download|send|menu|search|enquire now|view more|reviews|add to cart|select options|brochure/i.test(
        label,
      )
    ) {
      continue;
    }

    const idx = html.indexOf(btn[0]);
    const image = nearestImage(html, idx);
    const pathPart =
      href && /^https:\/\/giavanibathrooms\.com\//i.test(href)
        ? href.replace("https://giavanibathrooms.com/", "")
        : label;
    const id = slugifyId(pathPart);
    if (!id || seen.has(id)) continue;
    seen.add(id);
    items.push({
      id,
      label,
      image:
        image ||
        "https://giavanibathrooms.com/wp-content/uploads/2023/10/333.png",
      href: `#${id}`,
    });
  }

  // WooCommerce product cards
  const products = [
    ...html.matchAll(/<li[^>]*class="[^"]*product[^"]*"[\s\S]*?<\/li>/gi),
  ];
  for (const p of products) {
    const chunk = p[0];
    const hrefM = chunk.match(
      /href="(https:\/\/giavanibathrooms\.com\/product\/[^"]+)"/i,
    );
    const imgM = chunk.match(
      /src="(https:\/\/giavanibathrooms\.com\/wp-content\/uploads\/[^"]+)"/i,
    );
    const titleM =
      chunk.match(/woocommerce-loop-product__title[^>]*>([^<]+)/i) ||
      chunk.match(/<h2[^>]*>([^<]+)<\/h2>/i);
    if (!titleM) continue;
    const label = cleanProductLabel(titleM[1]);
    if (!label || seen.has(slugifyId(label))) continue;
    const pathPart = hrefM
      ? hrefM[1].replace("https://giavanibathrooms.com/", "")
      : label;
    const id = slugifyId(pathPart);
    if (!id || seen.has(id)) continue;
    seen.add(id);
    items.push({
      id,
      label,
      image:
        (imgM && imgM[1]) ||
        "https://giavanibathrooms.com/wp-content/uploads/2023/10/333.png",
      href: `#${id}`,
    });
  }

  // Image+link pairs without button (fallback)
  if (items.length === 0) {
    const pairs = [
      ...html.matchAll(
        /<a href="(https:\/\/giavanibathrooms\.com\/(?:product\/)?[^"]+)">\s*<img[^>]+src="(https:\/\/giavanibathrooms\.com\/wp-content\/uploads\/[^"]+)"[^>]*>/gi,
      ),
    ];
    for (const pair of pairs) {
      const pathPart = pair[1].replace("https://giavanibathrooms.com/", "");
      if (/wp-content|logo|#/.test(pathPart)) continue;
      const id = slugifyId(pathPart);
      const label = id
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
      const key = `${id}|${label}`;
      if (seen.has(key)) continue;
      seen.add(key);
      items.push({
        id,
        label,
        image: pair[2],
        href: `#${id}`,
      });
    }
  }

  return items;
}

function heroFromHtml(html, fallback) {
  const og = html.match(
    /property="og:image"\s+content="(https:\/\/giavanibathrooms\.com\/wp-content\/uploads\/[^"]+)"/i,
  );
  if (og && !/333\.png|logo/i.test(og[1])) return og[1];
  return fallback || "";
}

function parseCategoryCollections() {
  const src = fs.readFileSync(
    path.join(ROOT, "lib/constants/categoryPages.ts"),
    "utf8",
  );
  const result = [];
  for (const cat of MAIN) {
    const re = new RegExp(
      `"${cat}": \\{[\\s\\S]*?collections: \\[([\\s\\S]*?)\\],\\n  \\},`,
    );
    const m = src.match(re);
    if (!m) continue;
    const chunk = m[1];
    const blocks = [
      ...chunk.matchAll(
        /\{\s*id: "([^"]+)",\s*label: "([^"]+)",\s*image: "([^"]+)",\s*href: "([^"]+)",\s*\}/g,
      ),
    ];
    for (const b of blocks) {
      result.push({
        categorySlug: cat,
        id: b[1],
        label: brandify(b[2]),
        image: b[3],
        collectionSlug: slugifyId(b[1]),
      });
    }
  }
  return result;
}

function candidateUrls(col) {
  const slug = col.collectionSlug;
  const raw = col.id.replace(/^#/, "");
  const urls = new Set();
  urls.add(`https://giavanibathrooms.com/${slug}`);
  if (raw.startsWith("product/")) {
    urls.add(`https://giavanibathrooms.com/${raw}`);
  }
  urls.add(`https://giavanibathrooms.com/product/${slug}`);
  // accessories style
  urls.add(`https://giavanibathrooms.com/${raw}`);
  return [...urls];
}

async function scrapeOne(col) {
  const urls = candidateUrls(col);
  for (const url of urls) {
    try {
      const { status, html } = await fetchHtml(url);
      if (status !== 200 || !html || html.length < 500) continue;
      // reject soft 404 pages that still return 200
      if (/page not found|404|nothing found/i.test(html.slice(0, 5000)))
        continue;
      const titleMatch = html.match(/<title>([^|<]+)/i);
      const title = brandify(
        (titleMatch && titleMatch[1]) || col.label,
      ).replace(/\s*-\s*$/, "");
      const description = descriptionFromHtml(html);
      let items = extractItems(html);

      // Drop range/nav buttons that are not products (same name as collection only if alone later)
      items = items.filter(
        (it) =>
          !/view our|discover|download|brochure|contact/i.test(it.label) &&
          slugifyId(it.label) !== col.collectionSlug,
      );

      // If this is a product page with no sub-items, treat page itself as the item
      const isProductUrl = /\/product\//.test(url);
      if (items.length === 0) {
        items = [
          {
            id: col.collectionSlug,
            label: col.label,
            image: heroFromHtml(html, col.image) || col.image,
            href: `#${col.collectionSlug}`,
          },
        ];
      }

      return {
        key: `${col.categorySlug}/${col.collectionSlug}`,
        categorySlug: col.categorySlug,
        slug: col.collectionSlug,
        title: title || col.label,
        description:
          description ||
          `Explore the ${col.label} range from Haris Building Solutions.`,
        heroImage: heroFromHtml(html, col.image),
        image: col.image,
        sourceUrl: url,
        isProductPage: isProductUrl && items.length <= 1,
        items,
      };
    } catch {
      // try next url
    }
  }

  // fallback offline
  return {
    key: `${col.categorySlug}/${col.collectionSlug}`,
    categorySlug: col.categorySlug,
    slug: col.collectionSlug,
    title: col.label,
    description: `Explore the ${col.label} range from Haris Building Solutions.`,
    heroImage: col.image,
    image: col.image,
    sourceUrl: null,
    isProductPage: true,
    items: [
      {
        id: col.collectionSlug,
        label: col.label,
        image: col.image,
        href: `#${col.collectionSlug}`,
      },
    ],
  };
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

(async () => {
  const cols = parseCategoryCollections();
  console.log("Collections to scrape:", cols.length);
  const results = [];
  let i = 0;
  for (const col of cols) {
    i += 1;
    process.stdout.write(
      `[${i}/${cols.length}] ${col.categorySlug}/${col.collectionSlug} ... `,
    );
    const data = await scrapeOne(col);
    console.log(
      data.sourceUrl
        ? `OK (${data.items.length} items) ${data.sourceUrl.replace("https://giavanibathrooms.com/", "/")}`
        : `FALLBACK (${data.items.length} items)`,
    );
    results.push(data);
    await sleep(120);
  }
  fs.writeFileSync(
    path.join(OUT_DIR, "collections.json"),
    JSON.stringify(results, null, 2),
  );
  console.log("Wrote", path.join(OUT_DIR, "collections.json"));
})();
