const fs = require("fs");
const path = require("path");
const https = require("https");

const ROOT = "D:/web-developement/hbsolutions";
const OUT = path.join(ROOT, "temp-deponti-accessories.json");
const LISTING = "https://www.deponti.com/en/producten/accessories";

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(
      url,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
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
    req.setTimeout(30000, () => req.destroy(new Error("timeout")));
  });
}

function decode(value) {
  return String(value || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&rsquo;/g, "’")
    .replace(/\s+/g, " ")
    .trim();
}

function absolute(url) {
  if (!url) return "";
  return url.startsWith("/") ? `https://www.deponti.com${url}` : url;
}

function galleryImages(html) {
  const found = [];
  const re = /(?:src|data-src)="([^"]+\.(?:jpe?g|png|webp)[^"]*)"/gi;
  let m;
  while ((m = re.exec(html))) {
    const url = absolute(m[1]);
    if (!/deponti\.com\/storage/i.test(url)) continue;
    if (/logo|favicon|icon|flag|sprite/i.test(url)) continue;
    found.push(url);
  }
  return [...new Set(found)];
}

/** The listing renders each accessory as an <a> wrapping its thumbnail and title. */
function listingCards(html) {
  const cards = [];
  const re =
    /<a[^>]+href="([^"]*\/product\/[^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
  let m;
  while ((m = re.exec(html))) {
    const href = absolute(m[1]);
    const inner = m[2];
    const title = decode(inner);
    if (!title) continue;
    const image = absolute(
      (inner.match(/(?:src|data-src)="([^"]+\.(?:jpe?g|png|webp)[^"]*)"/i) ||
        [])[1] || ""
    );
    cards.push({ href, title, image });
  }
  const bySlug = new Map();
  for (const c of cards) {
    const slug = c.href.split("/product/")[1]?.split(/[?#]/)[0];
    if (!slug) continue;
    const prev = bySlug.get(slug);
    if (!prev || (!prev.image && c.image) || c.title.length > prev.title.length) {
      bySlug.set(slug, { ...c, slug });
    }
  }
  return [...bySlug.values()];
}

function description(html) {
  const paras = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
    .map((x) => decode(x[1]))
    .filter(
      (t) =>
        t.length > 40 &&
        !/cookie|login|become a partner|all rights reserved|newsletter/i.test(t)
    );
  return paras
    .join(" ")
    .replace(/Deponti HQ[\s\S]*$/i, "")
    .replace(/Deponti Warehouse[\s\S]*$/i, "")
    .replace(/Aluminium verandas Louvered Roofs[\s\S]*$/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

function specs(html) {
  const rows = {};
  const re = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
  let m;
  while ((m = re.exec(html))) {
    const cells = [...m[1].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi)].map(
      (c) => decode(c[1])
    );
    if (cells.length >= 2 && cells[0] && cells[1]) rows[cells[0]] = cells[1];
  }
  return rows;
}

function bullets(html) {
  const skip =
    /^(home|products|service|contact|brochure|faq|news|blogs|carport)$|cookie|login|partner|vacanc|report glass|request a quote|aluminium verandas|glass sliding doors|louvered roofs|folding roofs|dealer/i;
  return [
    ...new Set(
      [...html.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)]
        .map((x) => decode(x[1]))
        .filter((t) => t.length > 12 && t.length < 220 && !skip.test(t))
    ),
  ].slice(0, 10);
}

/** Links that appear on the listing but are nav entries, not accessory cards. */
const NOT_ACCESSORIES = new Set([
  "deponti-glass-sliding-walls",
  "verdeca-vouwdak",
]);

async function main() {
  const listing = await fetchHtml(LISTING);
  const cards = listingCards(listing.html).filter(
    (c) => !NOT_ACCESSORIES.has(c.slug.toLowerCase())
  );
  // The grid renders one 510x320 thumbnail per card, in the same order.
  const thumbnails = galleryImages(listing.html).filter((u) =>
    u.includes("510_320")
  );
  cards.forEach((card, i) => {
    card.image = card.image || thumbnails[i] || "";
  });
  console.log(`listing: ${listing.status}, ${cards.length} accessory cards`);

  const items = [];
  for (const card of cards) {
    const page = await fetchHtml(card.href);
    const title = decode(
      (page.html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1] || card.title
    );
    items.push({
      slug: card.slug.toLowerCase(),
      url: card.href,
      status: page.status,
      title,
      cardTitle: card.title,
      cardImage: card.image,
      description: description(page.html),
      features: bullets(page.html),
      specs: specs(page.html),
      images: galleryImages(page.html),
    });
    console.log(
      `${page.status} ${card.slug} — ${title.slice(0, 48)} (${
        items.at(-1).images.length
      } imgs, ${Object.keys(items.at(-1).specs).length} specs)`
    );
  }

  const result = {
    listing: {
      url: LISTING,
      heroImage:
        galleryImages(listing.html).find((u) => u.includes("1500_400")) || "",
      description: description(listing.html).slice(0, 600),
    },
    items,
  };
  fs.writeFileSync(OUT, JSON.stringify(result, null, 2));
  console.log("Wrote", OUT);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
