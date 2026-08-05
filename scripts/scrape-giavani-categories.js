const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const OUT_DIR = path.join(ROOT, "temp-pages");

const CATEGORIES = [
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
  "panels-2",
  "flooring",
  "wall-tiles",
  "accessories",
];

const NAV_LABELS = new Set([
  "Sanitaryware",
  "Taps",
  "Showers",
  "Baths",
  "Bath Screens",
  "Shower Enclosures",
  "Wetroom Screens",
  "Shower Trays",
  "Furniture",
  "Heating",
  "Mirrors/Cabinets",
  "Panels",
  "Flooring",
  "Wall Tiles",
  "Accessories",
  "Home",
  "MENU",
  "CATALOGUE",
  "RETURNS POLICY",
  "TERMS & CONDITIONS",
  "PRIVACY POLICY",
  "CONTACT US",
  "ABOUT US",
  "NEWS / PR",
]);

function decodeEntities(text) {
  return String(text || "")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8230;/g, "...")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/Â\s*/g, "")
    .replace(/â€™/g, "'")
    .replace(/â€˜/g, "'")
    .replace(/â€œ/g, '"')
    .replace(/â€/g, '"')
    .replace(/â€¦/g, "...")
    .replace(/â€“/g, "–")
    .replace(/â€”/g, "—")
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function brandify(text) {
  return decodeEntities(text)
    .replace(/Giavani Bathrooms/gi, "Haris Building Solutions")
    .replace(/Giavani bathrooms/gi, "Haris Building Solutions")
    .replace(/\bGiavani\b/gi, "Haris Building Solutions");
}

function stripTags(html) {
  return decodeEntities(String(html || "").replace(/<[^>]+>/g, " "));
}

function absUrl(url) {
  if (!url) return "";
  let u = url.trim();
  if (u.startsWith("//")) u = "https:" + u;
  if (u.startsWith("/")) u = "https://giavanibathrooms.com" + u;
  return u.split("?")[0];
}

function pathFromHref(href) {
  try {
    const u = new URL(absUrl(href));
    return u.pathname.replace(/\/$/, "") || "/";
  } catch {
    return String(href || "").replace(/\/$/, "");
  }
}

function extractDescription(html) {
  const blocks = [
    ...html.matchAll(
      /elementor-widget-text-editor[\s\S]*?<div class="elementor-widget-container">([\s\S]*?)<\/div>/gi
    ),
  ];
  for (const block of blocks) {
    const text = stripTags(block[1]);
    if (/VIEW OUR (COLLECTION|RANGE)/i.test(text)) continue;
    if (
      text.length > 60 &&
      !/cookie|copyright|privacy|menu search|trade enquiry/i.test(text)
    ) {
      return brandify(text);
    }
  }
  return "";
}

function extractTitle(html, slug) {
  const matches = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)];
  for (const m of matches) {
    const t = stripTags(m[1]);
    if (t && t.length < 80 && !/menu|enquiry|trade/i.test(t)) return t;
  }
  const title = html.match(/<title>([\s\S]*?)<\/title>/i);
  if (title) {
    return stripTags(title[1]).replace(/\s*-\s*$/, "").trim() || slug;
  }
  return slug;
}

function extractHeroAndBanner(html) {
  const ogImage = html.match(
    /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i
  );
  const heroFromOg = ogImage ? absUrl(ogImage[1]) : undefined;

  const imgs = [
    ...html.matchAll(
      /<img[^>]+src=["'](https?:\/\/giavanibathrooms\.com\/wp-content\/uploads\/[^"']+)["'][^>]*>/gi
    ),
  ].map((m) => absUrl(m[1]));

  // Wide banner images often appear early after the description (e.g. sanitaryware-1.jpg)
  const bannerImage =
    imgs.find((u) => /-(1)\.(jpg|png|webp)$/i.test(u) && !/500|thumb/i.test(u)) ||
    imgs.find((u) => /banner|lifestyle/i.test(u));

  const heroImage =
    heroFromOg ||
    imgs.find((u) => /category-header|header/i.test(u)) ||
    undefined;

  return { heroImage, bannerImage };
}

function extractCollectionHeading(html) {
  if (/VIEW OUR RANGE/i.test(html)) return "View Our Range";
  if (/VIEW OUR COLLECTION/i.test(html)) return "View Our Collection";
  return undefined;
}

/**
 * Giavani category cards are Elementor columns with:
 *  - an image link to /slug
 *  - a button link with .elementor-button-text label to the same /slug
 */
function extractCollections(html) {
  // Map path -> image (prefer larger / non-resized originals already in src)
  const imageByPath = new Map();
  const imageAnchors = [
    ...html.matchAll(
      /<a[^>]+href=["']([^"']+)["'][^>]*>\s*<img[^>]+src=["']([^"']+)["'][^>]*>/gi
    ),
  ];
  for (const m of imageAnchors) {
    const p = pathFromHref(m[1]);
    const image = absUrl(m[2]);
    if (!image.includes("/wp-content/uploads/")) continue;
    if (/logo|icon|favicon|sprite|placeholder|web-header/i.test(image)) continue;
    if (!imageByPath.has(p)) imageByPath.set(p, image);
  }

  // Button labels
  const buttons = [
    ...html.matchAll(
      /<a[^>]+class="[^"]*elementor-button[^"]*"[^>]+href=["']([^"']+)["'][^>]*>[\s\S]*?<span class="elementor-button-text">([\s\S]*?)<\/span>/gi
    ),
  ];

  const collections = [];
  const seen = new Set();

  for (const m of buttons) {
    const hrefRaw = m[1];
    const label = stripTags(m[2]);
    if (!label || NAV_LABELS.has(label)) continue;
    if (/menu|search|enquiry|download|send/i.test(label)) continue;

    const p = pathFromHref(hrefRaw);
    if (!p || p === "/") continue;

    // Skip top-level category self-links
    if (
      [
        "/sanitaryware",
        "/taps",
        "/showers",
        "/baths",
        "/bath-screens",
        "/shower-enclosures",
        "/wetroom-screens",
        "/shower-trays",
        "/furniture",
        "/heating",
        "/mirrors-cabinets",
        "/panels-2",
        "/panels",
        "/flooring",
        "/wall-tiles",
        "/accessories",
      ].includes(p) &&
      NAV_LABELS.has(label)
    ) {
      continue;
    }

    const image = imageByPath.get(p);
    if (!image) continue;

    const id = p.replace(/^\//, "").toLowerCase();
    if (seen.has(id) || seen.has(label.toLowerCase())) continue;
    seen.add(id);
    seen.add(label.toLowerCase());

    collections.push({
      id,
      label,
      image,
      href: `#${id}`,
    });
  }

  return collections;
}

function detectPortrait(collections) {
  // Accessories on source uses portrait cards (e.g. 768x1024)
  return collections.some((c) => /768x1024|portrait|-\d+x\d+\.jpg$/i.test(c.image) && /768x1024/.test(c.image));
}

async function scrapeSlug(slug) {
  const url = `https://giavanibathrooms.com/${slug}`;
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
      Accept: "text/html",
    },
  });
  const html = await res.text();
  fs.writeFileSync(path.join(OUT_DIR, `${slug}.html`), html, "utf8");

  const title = extractTitle(html, slug);
  const description = extractDescription(html);
  const { heroImage, bannerImage } = extractHeroAndBanner(html);
  const collections = extractCollections(html);
  const collectionHeading = extractCollectionHeading(html);
  const localSlug = slug === "panels-2" ? "panels" : slug;
  const collectionAspect = detectPortrait(collections) ? "portrait" : undefined;

  return {
    sourceSlug: slug,
    slug: localSlug,
    title: localSlug === "panels" ? "Wall & Ceiling Panels" : title,
    description,
    heroImage,
    bannerImage,
    collectionHeading,
    collectionAspect,
    collections,
    status: res.status,
  };
}

function toTsString(value) {
  return JSON.stringify(value);
}

function emitCategoryPage(page, { asBathroomChild = false } = {}) {
  const lines = [];
  lines.push(`  "${page.slug}": {`);
  lines.push(`    slug: ${toTsString(page.slug)},`);
  lines.push(`    title: ${toTsString(page.title)},`);
  lines.push(`    description: ${toTsString(page.description)},`);
  if (page.heroImage) {
    lines.push(`    heroImage: ${toTsString(page.heroImage)},`);
  }
  if (page.bannerImage) {
    lines.push(`    bannerImage: ${toTsString(page.bannerImage)},`);
  }
  if (page.collectionHeading) {
    lines.push(`    collectionHeading: ${toTsString(page.collectionHeading)},`);
  }
  if (page.collectionAspect) {
    lines.push(`    collectionAspect: ${toTsString(page.collectionAspect)},`);
  }
  lines.push(`    collections: [`);
  for (const c of page.collections) {
    lines.push(`      {`);
    lines.push(`        id: ${toTsString(c.id)},`);
    lines.push(`        label: ${toTsString(c.label)},`);
    lines.push(`        image: ${toTsString(c.image)},`);
    lines.push(`        href: ${toTsString(c.href)},`);
    lines.push(`      },`);
  }
  lines.push(`    ],`);
  lines.push(`  },`);
  return lines.join("\n");
}

function buildBathroomsHub(pagesBySlug) {
  const children = [
    { id: "sanitaryware", label: "Sanitaryware", imageKey: "sanitaryware" },
    { id: "taps", label: "Taps", imageKey: "taps" },
    { id: "showers", label: "Showers", imageKey: "showers" },
    { id: "baths", label: "Baths", imageKey: "baths" },
    { id: "furniture", label: "Bath Furniture", imageKey: "furniture" },
    { id: "heating", label: "Heating", imageKey: "heating" },
    { id: "mirrors-cabinets", label: "Mirrors", imageKey: "mirrors-cabinets" },
  ];

  // Prefer category card images from homepage-style filenames used already
  const fallbackImages = {
    sanitaryware:
      "https://giavanibathrooms.com/wp-content/uploads/2026/05/sanitaryware.jpg",
    taps: "https://giavanibathrooms.com/wp-content/uploads/2026/03/taps.jpg",
    showers:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/showers.jpg",
    baths: "https://giavanibathrooms.com/wp-content/uploads/2026/03/baths.jpg",
    furniture:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/Furniture.jpg",
    heating:
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/heating.jpg",
    "mirrors-cabinets":
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/mirrors.jpg",
  };

  const baths = pagesBySlug.baths;
  return {
    slug: "bathrooms",
    title: "Bathrooms",
    description:
      "Explore our full bathrooms range — sanitaryware, taps, showers, baths, bath furniture, heating and mirrors — selected for performance, style and lasting value.",
    heroImage:
      (baths && baths.heroImage) ||
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/category-header4.jpg",
    bannerImage:
      (baths && baths.bannerImage) ||
      "https://giavanibathrooms.com/wp-content/uploads/2026/03/baths-1.jpg",
    collectionHeading: "Bathroom Categories",
    collections: children.map((c) => ({
      id: c.id,
      label: c.label,
      image: fallbackImages[c.imageKey],
      href: `/${c.id}`,
    })),
  };
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const pages = [];
  for (const slug of CATEGORIES) {
    process.stdout.write(`Scraping ${slug}... `);
    try {
      const page = await scrapeSlug(slug);
      pages.push(page);
      console.log(
        `ok (${page.collections.length} collections, desc ${page.description.length} chars)`
      );
    } catch (err) {
      console.log("FAIL", err.message);
      pages.push({ slug, error: String(err) });
    }
  }

  fs.writeFileSync(
    path.join(OUT_DIR, "extracted.json"),
    JSON.stringify(pages, null, 2),
    "utf8"
  );

  const pagesBySlug = Object.fromEntries(
    pages.filter((p) => p.slug && !p.error).map((p) => [p.slug, p])
  );
  const bathrooms = buildBathroomsHub(pagesBySlug);

  // Summary for manual merge
  const summary = pages.map((p) => ({
    slug: p.slug,
    title: p.title,
    collections: p.collections ? p.collections.length : 0,
    hasHero: !!p.heroImage,
    hasBanner: !!p.bannerImage,
    descriptionPreview: (p.description || "").slice(0, 80),
  }));
  console.log("\nSummary:");
  console.table(summary);
  console.log("\nWrote temp-pages/extracted.json");
  console.log("Bathrooms hub children:", bathrooms.collections.map((c) => c.label).join(", "));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
