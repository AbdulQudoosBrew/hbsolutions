const fs = require("fs");
const path = require("path");
const https = require("https");

const ROOT = "D:/web-developement/hbsolutions";
const OUT = path.join(ROOT, "temp-product-details.json");

function brandify(text) {
  return String(text || "")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/Giavani Bathrooms/gi, "Haris Building Solutions")
    .replace(/\bGiavani\b/gi, "Haris Building Solutions")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeHtml(s) {
  return String(s || "")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#039;/g, "'")
    .replace(/\\\//g, "/");
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
          resolve({ status: res.statusCode || 0, html: data, url })
        );
      }
    );
    req.on("error", reject);
    req.setTimeout(20000, () => req.destroy(new Error("timeout")));
  });
}

function parseSelectOptions(html, selectId) {
  const re = new RegExp(
    `<select[^>]*id="${selectId}"[^>]*>([\\s\\S]*?)<\\/select>`,
    "i"
  );
  const m = html.match(re);
  if (!m) return [];
  return [...m[1].matchAll(/<option[^>]*value="([^"]+)"[^>]*>([^<]*)/gi)]
    .map((x) => ({
      value: x[1],
      label: brandify(x[2]),
    }))
    .filter((x) => x.value && x.label && !/choose an option/i.test(x.label));
}

function parseProduct(html, fallbackImage) {
  const gallery = [
    ...new Set(
      [...html.matchAll(/data-large_image="(https:\/\/giavanibathrooms\.com\/wp-content\/uploads\/[^"]+)"/gi)].map(
        (m) => m[1]
      )
    ),
  ].filter((u) => !/logo|333\.png|cropped-GOLD/i.test(u));

  // also variation images
  const varRaw = html.match(/data-product_variations="([^"]+)"/);
  let variationImages = [];
  if (varRaw) {
    try {
      const json = JSON.parse(decodeHtml(varRaw[1]));
      for (const v of json) {
        if (v.image && v.image.url) variationImages.push(v.image.url);
      }
    } catch {
      // ignore
    }
  }

  const images = [...new Set([...gallery, ...variationImages, fallbackImage].filter(Boolean))];

  const colours = parseSelectOptions(html, "pa_colour");
  const finishes = parseSelectOptions(html, "pa_finish");
  const sizes = [
    ...parseSelectOptions(html, "pa_size"),
    ...parseSelectOptions(html, "pa_sizes"),
    ...parseSelectOptions(html, "pa_pack-size"),
    ...parseSelectOptions(html, "pa_length"),
  ];

  let description = "";
  const short = html.match(
    /<div class="woocommerce-product-details__short-description">([\s\S]*?)<\/div>/i
  );
  if (short) description = brandify(short[1].replace(/<[^>]+>/g, " "));

  const long = html.match(
    /woocommerce-Tabs-panel--description[^>]*>([\s\S]*?)<\/div>\s*<(?:div|section)/i
  );
  if (long) {
    const text = brandify(
      long[1]
        .replace(/<h2[^>]*>[\s\S]*?<\/h2>/i, " ")
        .replace(/<[^>]+>/g, " ")
    );
    if (text && !/there are no reviews/i.test(text)) {
      description = description ? `${description} ${text}` : text;
    }
  }

  // Elementor product description blocks
  if (!description || description.length < 40) {
    const blocks = [
      ...html.matchAll(
        /elementor-widget-text-editor[\s\S]*?<div class="elementor-widget-container">([\s\S]*?)<\/div>/gi
      ),
    ];
    for (const b of blocks) {
      const t = brandify(b[1].replace(/<[^>]+>/g, " "));
      if (
        t.length > 60 &&
        !/cookie|copyright|privacy|menu search|enquire now/i.test(t)
      ) {
        description = t;
        break;
      }
    }
  }

  return {
    images,
    colours: colours.length ? colours : finishes,
    sizes,
    description,
  };
}

function listProductsFromCollectionPages() {
  const src = fs.readFileSync(
    path.join(ROOT, "lib/constants/collectionPages.ts"),
    "utf8"
  );
  const products = [];

  // Parse COLLECTION_PAGES items
  const collBlocks = [
    ...src.matchAll(
      /"([^"]+\/[^"]+)": \{\s*key: "([^"]+)",\s*categorySlug: "([^"]+)",\s*slug: "([^"]+)",\s*title: "([^"]*)",[\s\S]*?items: \[([\s\S]*?)\],\n  \},/g
    ),
  ];

  for (const b of collBlocks) {
    if (b[1].includes("/") && b[1].split("/").length > 2) continue; // skip product entries if any
    const categorySlug = b[3];
    const collectionSlug = b[4];
    const collectionTitle = b[5];
    const itemsChunk = b[6];
    const items = [
      ...itemsChunk.matchAll(
        /\{\s*id: "([^"]+)",\s*label: "([^"]+)",\s*image: "([^"]+)",\s*href: "([^"]+)",\s*\}/g
      ),
    ];
    for (const it of items) {
      products.push({
        key: `${categorySlug}/${collectionSlug}/${it[1]}`,
        categorySlug,
        collectionSlug,
        collectionTitle,
        slug: it[1],
        title: it[2],
        image: it[3],
        href: it[4],
      });
    }
  }

  return products;
}

async function mapPool(items, concurrency, fn) {
  const results = new Array(items.length);
  let i = 0;
  async function worker() {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await fn(items[idx], idx);
    }
  }
  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, () => worker())
  );
  return results;
}

(async () => {
  const products = listProductsFromCollectionPages();
  console.log("Products to enrich:", products.length);

  const details = await mapPool(products, 6, async (p, idx) => {
    const urls = [
      `https://giavanibathrooms.com/product/${p.slug}`,
      `https://giavanibathrooms.com/${p.slug}`,
    ];
    process.stdout.write(`[${idx + 1}/${products.length}] ${p.slug} `);
    for (const url of urls) {
      try {
        const { status, html } = await fetchHtml(url);
        if (status !== 200 || !html || /page not found/i.test(html.slice(0, 4000)))
          continue;
        const parsed = parseProduct(html, p.image);
        console.log(
          `OK imgs=${parsed.images.length} colours=${parsed.colours.length} sizes=${parsed.sizes.length}`
        );
        return { ...p, ...parsed, sourceUrl: url };
      } catch {
        // try next
      }
    }
    console.log("FALLBACK");
    return {
      ...p,
      images: [p.image],
      colours: [],
      sizes: [],
      description: "",
      sourceUrl: null,
    };
  });

  fs.writeFileSync(OUT, JSON.stringify(details, null, 2));
  const withDesc = details.filter((d) => d.description && d.description.length > 40)
    .length;
  const withGallery = details.filter((d) => d.images.length > 1).length;
  const withColour = details.filter((d) => d.colours.length > 0).length;
  console.log(
    `Wrote ${OUT} desc=${withDesc} gallery=${withGallery} colours=${withColour}`
  );
})();
