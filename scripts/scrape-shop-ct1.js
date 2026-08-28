const fs = require("fs");
const path = require("path");

const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
  Accept: "text/html",
};

function decode(s) {
  return String(s || "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8211;/g, "-")
    .replace(/&#8217;/g, "'");
}

function text(html) {
  return decode(html)
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/p>/gi, " ")
    .replace(/<li[^>]*>/gi, " • ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function fullImage(url) {
  return decode(url).replace(
    /\/catalog\/product\/cache\/[^/]+\//,
    "/catalog/product/",
  );
}

async function fetchHtml(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 25000);
  try {
    const res = await fetch(url, { headers: HEADERS, signal: controller.signal });
    return { status: res.status, url: res.url, html: await res.text() };
  } finally {
    clearTimeout(timer);
  }
}

function listingProducts(html) {
  const items = [];
  const re =
    /<a[^>]+href="(https:\/\/shop\.ct1\.com\/gb\/[^"]+)"[^>]*>\s*<img[^>]+(?:src|data-src)="([^"]+)"[^>]*alt="([^"]*)"/gi;
  for (const m of html.matchAll(re)) {
    const href = m[1].split("?")[0].replace(/\/$/, "");
    if (/checkout|customer|contact|account|login/i.test(href)) continue;
    items.push({
      href,
      slug: href.split("/").pop(),
      image: fullImage(m[2]),
      title: decode(m[3]).trim(),
    });
  }
  return items;
}

function parseProduct(html, fallback) {
  const title =
    text(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] || "") || fallback.title;
  const ogImage =
    html.match(
      /<meta[^>]+property="og:image"[^>]+content="([^"]+)"/i,
    )?.[1] || fallback.image;
  const gallery = [
    ...html.matchAll(
      /https:\/\/shop\.ct1\.com\/pub\/media\/catalog\/product\/[^"'\\\s>]+\.(?:jpe?g|png|webp)/gi,
    ),
  ].map((m) => fullImage(m[0].split("?")[0]));
  const descHtml =
    html.match(
      /<div[^>]+class="[^"]*product[^"]*description[^"]*"[^>]*>([\s\S]*?)<\/div>/i,
    )?.[1] ||
    html.match(
      /<div[^>]+id="description"[^>]*>([\s\S]*?)<\/div>/i,
    )?.[1] ||
    html.match(
      /itemprop="description"[^>]*>([\s\S]*?)<\/div>/i,
    )?.[1] ||
    "";
  const features = [
    ...descHtml.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi),
  ]
    .map((m) => text(m[1]))
    .filter((t) => t.length > 8 && t.length < 220);
  return {
    ...fallback,
    title,
    image: fullImage(ogImage || fallback.image),
    images: [...new Set([fullImage(ogImage || fallback.image), ...gallery])].slice(
      0,
      8,
    ),
    description: text(descHtml).slice(0, 1200),
    features: [...new Set(features)].slice(0, 10),
  };
}

(async () => {
  const listPages = [
    "https://shop.ct1.com/gb/",
    "https://shop.ct1.com/",
    "https://shop.ct1.com/gb/?p=2",
    "https://shop.ct1.com/gb/?p=3",
    "https://shop.ct1.com/gb/?p=4",
    "https://shop.ct1.com/gb/product-range",
    "https://shop.ct1.com/gb/ct1.html",
  ];
  const found = new Map();
  for (const url of listPages) {
    try {
      const { status, html, url: finalUrl } = await fetchHtml(url);
      console.log("list", status, finalUrl, listingProducts(html).length);
      for (const item of listingProducts(html)) {
        if (!found.has(item.slug)) found.set(item.slug, item);
      }
    } catch (e) {
      console.log("list err", url, e.message);
    }
  }

  const extras = [
    "ct1-white",
    "ct1-oak",
    "ct1-silver",
    "ct1-blue",
    "fc1",
    "fc1-white",
    "fc1-grey",
    "fc1-patch-fill",
    "fc1-patch-and-fill",
    "miracle-seal",
    "multisolve",
    "peel-tec",
    "power-grab-n-bond",
    "superfast-plus-50ml",
    "super-fast-plus-50ml",
    "superfast-plus-activator",
    "super-fast-plus-activator",
  ];
  for (const slug of extras) {
    if (!found.has(slug)) {
      found.set(slug, {
        href: `https://shop.ct1.com/gb/${slug}`,
        slug,
        image: "",
        title: slug,
      });
    }
  }

  const products = [];
  for (const item of found.values()) {
    try {
      const { status, html, url } = await fetchHtml(item.href);
      if (status >= 400) {
        console.log("skip", status, item.href);
        continue;
      }
      const parsed = parseProduct(html, item);
      parsed.finalUrl = url;
      parsed.status = status;
      products.push(parsed);
      console.log(status, parsed.title, parsed.image?.slice(-40), parsed.description?.length);
    } catch (e) {
      console.log("err", item.href, e.message);
    }
  }

  fs.writeFileSync(
    path.join(__dirname, "..", "temp-shop-ct1.json"),
    JSON.stringify(products, null, 2),
  );
  console.log("saved", products.length);
})();
