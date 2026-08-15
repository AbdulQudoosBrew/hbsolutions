const fs = require("fs");
const path = require("path");
const https = require("https");

const OUT = path.join(
  "D:/web-developement/hbsolutions",
  "temp-deponti-listings.json"
);

const PAGES = {
  "aluminium-verandas":
    "https://www.deponti.com/en/producten/aluminium-terrace-canopies",
  "glass-sliding-doors":
    "https://www.deponti.com/en/producten/Glass-sliding-Walls",
  "louvered-roofs": "https://www.deponti.com/en/producten/louvered-roof",
  "folding-roofs": "https://www.deponti.com/en/producten/folding-roof",
};

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(
      url,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
          Accept: "text/html",
          "Accept-Language": "en-GB,en;q=0.9",
        },
      },
      (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          const next = res.headers.location.startsWith("http")
            ? res.headers.location
            : new URL(res.headers.location, url).toString();
          res.resume();
          return fetchHtml(next).then(resolve, reject);
        }
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => resolve({ status: res.statusCode || 0, html: data }));
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
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function main() {
  const result = {};
  for (const [id, url] of Object.entries(PAGES)) {
    const page = await fetchHtml(url);
    const cards = [];

    // Product cards typically wrap an /en/product/ link with an image and heading
    const cardRe =
      /<a[^>]+href="([^"]*\/en\/product\/[^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
    let m;
    const seen = new Set();
    while ((m = cardRe.exec(page.html))) {
      let href = m[1].split("?")[0].split("#")[0];
      if (href.startsWith("/")) href = `https://www.deponti.com${href}`;
      if (seen.has(href)) continue;
      const block = m[2];
      const img =
        (block.match(/src="([^"]+\.(?:jpe?g|png|webp)[^"]*)"/i) ||
          block.match(/data-src="([^"]+\.(?:jpe?g|png|webp)[^"]*)"/i) ||
          [])[1] || "";
      const title =
        decode(
          (block.match(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/i) || [])[1] ||
            (block.match(/alt="([^"]+)"/i) || [])[1] ||
            ""
        );
      if (!title && !img) continue;
      seen.add(href);
      cards.push({ href, title, image: img.startsWith("/") ? `https://www.deponti.com${img}` : img });
    }

    // Also capture h3/h2 product titles near product links
    const headingLinks = [
      ...page.html.matchAll(
        /<(h2|h3)[^>]*>([\s\S]*?)<\/\1>[\s\S]{0,400}?href="([^"]*\/en\/product\/[^"]+)"/gi
      ),
    ];
    for (const h of headingLinks) {
      let href = h[3].split("?")[0].split("#")[0];
      if (href.startsWith("/")) href = `https://www.deponti.com${href}`;
      const title = decode(h[2]);
      if (!cards.some((c) => c.href === href)) {
        cards.push({ href, title, image: "" });
      } else {
        const existing = cards.find((c) => c.href === href);
        if (existing && !existing.title) existing.title = title;
      }
    }

    result[id] = {
      url,
      status: page.status,
      htmlLength: page.html.length,
      cards,
    };
    console.log(id, page.status, "cards", cards.length);
    cards.forEach((c) => console.log(" -", c.title || "(no title)", c.href));
  }

  fs.writeFileSync(OUT, JSON.stringify(result, null, 2));
  console.log("Wrote", OUT);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
