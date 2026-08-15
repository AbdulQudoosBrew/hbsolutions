const fs = require("fs");
const path = require("path");
const https = require("https");

const ROOT = "D:/web-developement/hbsolutions";
const OUT = path.join(ROOT, "temp-deponti-verandas.json");

const LISTINGS = {
  "aluminium-verandas": {
    url: "https://www.deponti.com/en/producten/aluminium-terrace-canopies",
    title: "Aluminium Verandas",
  },
  "glass-sliding-doors": {
    url: "https://www.deponti.com/en/producten/Glass-sliding-Walls",
    title: "Glass Sliding Doors",
  },
  "louvered-roofs": {
    url: "https://www.deponti.com/en/producten/louvered-roof",
    title: "Louvered Roofs",
  },
  "folding-roofs": {
    url: "https://www.deponti.com/en/producten/folding-roof",
    title: "Folding Roofs",
  },
};

const EXTRA_LISTINGS = [
  "https://www.deponti.com/en/producten/folding-roofs",
  "https://www.deponti.com/en/producten/vouwdak",
  "https://www.deponti.com/en/producten/lamellendak",
];

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(
      url,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
          Accept: "text/html,application/xhtml+xml",
          "Accept-Language": "en-GB,en;q=0.9",
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
            : new URL(res.headers.location, url).toString();
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
    req.setTimeout(25000, () => req.destroy(new Error("timeout")));
  });
}

function decode(s) {
  return String(s || "")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#8211;/g, "–")
    .replace(/&#8217;/g, "’")
    .replace(/&rsquo;/g, "’")
    .replace(/&ldquo;/g, "“")
    .replace(/&rdquo;/g, "”")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function unique(arr) {
  return [...new Set(arr.filter(Boolean))];
}

function extractProductLinks(html, baseUrl) {
  const links = [];
  const re = /href="([^"]+)"/gi;
  let m;
  while ((m = re.exec(html))) {
    let href = m[1];
    if (href.startsWith("/")) href = `https://www.deponti.com${href}`;
    if (!href.includes("deponti.com")) continue;
    if (!/\/en\/product\//i.test(href)) continue;
    if (/producten/i.test(href)) continue;
    href = href.split("?")[0].split("#")[0];
    links.push(href);
  }
  return unique(links);
}

function extractImages(html) {
  const imgs = [];
  const patterns = [
    /src="([^"]+\.(?:jpe?g|png|webp)[^"]*)"/gi,
    /data-src="([^"]+\.(?:jpe?g|png|webp)[^"]*)"/gi,
    /data-lazy-src="([^"]+\.(?:jpe?g|png|webp)[^"]*)"/gi,
    /srcset="([^"]+)"/gi,
  ];

  for (const re of patterns) {
    let m;
    while ((m = re.exec(html))) {
      const raw = m[1];
      if (raw.includes(" ")) {
        raw.split(",").forEach((part) => {
          const u = part.trim().split(" ")[0];
          if (u) imgs.push(u);
        });
      } else {
        imgs.push(raw);
      }
    }
  }

  return unique(
    imgs
      .map((u) => {
        if (u.startsWith("//")) return `https:${u}`;
        if (u.startsWith("/")) return `https://www.deponti.com${u}`;
        return u;
      })
      .filter((u) => {
        const lower = u.toLowerCase();
        if (!/deponti|cloudinary|imgix|cdn|media|uploads|storage/i.test(lower))
          return false;
        if (/logo|favicon|icon|sprite|placeholder|cookie|flag/i.test(lower))
          return false;
        return /\.(jpe?g|png|webp)/i.test(lower);
      })
  );
}

function extractOgImage(html) {
  const m =
    html.match(
      /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i
    ) ||
    html.match(
      /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i
    );
  return m ? m[1] : "";
}

function extractTitle(html) {
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (h1) return decode(h1[1]);
  const og = html.match(
    /<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["']/i
  );
  return og ? decode(og[1]) : "";
}

function extractDescription(html) {
  const parts = [];
  const og = html.match(
    /<meta[^>]+(?:property|name)=["']og:description["'][^>]+content=["']([^"']+)["']/i
  );
  if (og) parts.push(decode(og[1]));

  const paras = [
    ...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi),
  ]
    .map((x) => decode(x[1]))
    .filter((t) => t.length > 80 && !/cookie|login|partner|brochure/i.test(t));

  for (const p of paras.slice(0, 4)) {
    if (!parts.includes(p)) parts.push(p);
  }

  const lis = [...html.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)]
    .map((x) => decode(x[1]))
    .filter(
      (t) =>
        t.length > 12 &&
        t.length < 180 &&
        !/login|cookie|partner|home|products|service|about/i.test(t)
    );

  return {
    description: parts.join(" ").replace(/\s+/g, " ").trim(),
    features: unique(lis).slice(0, 12),
  };
}

function extractSpecs(html) {
  const specs = {};
  const rowRe = /<tr[^>]*>[\s\S]*?<t[hd][^>]*>([\s\S]*?)<\/t[hd]>[\s\S]*?<t[hd][^>]*>([\s\S]*?)<\/t[hd]>[\s\S]*?<\/tr>/gi;
  let m;
  while ((m = rowRe.exec(html))) {
    const key = decode(m[1]);
    const value = decode(m[2]);
    if (key && value && key.length < 40) specs[key] = value;
  }
  return specs;
}

function slugFromUrl(url) {
  return url
    .replace(/\/+$/, "")
    .split("/")
    .pop()
    .toLowerCase()
    .replace(/^terrace-canopy-/, "")
    .replace(/^veranda-/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

async function main() {
  const result = { listings: {}, products: [] };
  const seen = new Set();

  for (const [id, listing] of Object.entries(LISTINGS)) {
    console.log("LISTING", listing.url);
    const page = await fetchHtml(listing.url);
    const images = extractImages(page.html);
    const og = extractOgImage(page.html);
    const { description } = extractDescription(page.html);
    const links = extractProductLinks(page.html, listing.url);
    result.listings[id] = {
      ...listing,
      status: page.status,
      finalUrl: page.url,
      description,
      image: og || images[0] || "",
      images: images.slice(0, 8),
      productUrls: links,
    };
    console.log(" ", page.status, links.length, "products");
  }

  for (const extra of EXTRA_LISTINGS) {
    try {
      const page = await fetchHtml(extra);
      console.log("EXTRA", extra, page.status);
      if (page.status === 200 && /folding/i.test(page.html)) {
        const links = extractProductLinks(page.html, extra);
        result.listings["folding-roofs"].productUrls = unique([
          ...result.listings["folding-roofs"].productUrls,
          ...links,
        ]);
        if (!result.listings["folding-roofs"].image) {
          result.listings["folding-roofs"].image =
            extractOgImage(page.html) || extractImages(page.html)[0] || "";
        }
      }
    } catch (e) {
      console.log("EXTRA fail", extra, e.message);
    }
  }

  const classified = [];
  for (const [collection, listing] of Object.entries(result.listings)) {
    for (const url of listing.productUrls) {
      classified.push({ collection, url });
    }
  }

  // Known folding roof if listing failed
  if (!classified.some((x) => /verdeca/i.test(x.url))) {
    classified.push({
      collection: "folding-roofs",
      url: "https://www.deponti.com/en/product/verdeca",
    });
    classified.push({
      collection: "folding-roofs",
      url: "https://www.deponti.com/en/product/Terrace-canopy-Verdeca",
    });
  }

  for (const item of classified) {
    if (seen.has(item.url)) continue;
    seen.add(item.url);
    console.log("PRODUCT", item.url);
    try {
      const page = await fetchHtml(item.url);
      if (page.status !== 200) {
        console.log("  skip", page.status);
        continue;
      }
      const title = extractTitle(page.html);
      const { description, features } = extractDescription(page.html);
      const specs = extractSpecs(page.html);
      const images = extractImages(page.html);
      const og = extractOgImage(page.html);
      const image = og || images[0] || "";
      result.products.push({
        collection: item.collection,
        url: page.url,
        slug: slugFromUrl(page.url),
        title,
        description,
        features,
        specs,
        image,
        images: unique([image, ...images]).slice(0, 10),
      });
      console.log(" ", title, images.length, "imgs");
    } catch (e) {
      console.log("  fail", e.message);
    }
  }

  fs.writeFileSync(OUT, JSON.stringify(result, null, 2));
  console.log("Wrote", OUT, result.products.length, "products");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
