/**
 * Removes photos that repeat inside a gallery.
 *
 * The same shot is served under different file names and crop sizes, so URL
 * comparison misses them; this compares pixels. Only images that are the same
 * picture are dropped — colour variants and per-size technical drawings differ
 * and are kept.
 *
 *   node scripts/dedupe-duplicate-images.js            # report only
 *   node scripts/dedupe-duplicate-images.js --apply
 *
 * Deponti galleries are written to a drop list that
 * generate-veranda-pages.js filters, so regeneration stays idempotent.
 * Giavani galleries are rewritten in place.
 */
const fs = require("fs");
const path = require("path");
const https = require("https");
const sharp = require("sharp");

const ROOT = "D:/web-developement/hbsolutions";
const GIAVANI_FILE = "lib/constants/collectionPages.ts";
const VERANDA_FILE = "lib/constants/verandaPages.ts";
const CACHE = path.join(ROOT, "temp-image-signatures.json");
const DROP_LIST = path.join(ROOT, "temp-veranda-duplicate-images.json");
const APPLY = process.argv.includes("--apply");
const CONCURRENCY = 12;

// Deponti re-encodes the same shot, so its repeats land at 2-4 while genuinely
// different scenes sit above 20. Giavani colour variants are far subtler —
// anthracite vs black valves measure 3.0 — so only near-exact matches count.
const THRESHOLD = { deponti: 8, giavani: 1.5 };

const cache = fs.existsSync(CACHE)
  ? JSON.parse(fs.readFileSync(CACHE, "utf8"))
  : {};

function download(url, redirects = 0) {
  return new Promise((resolve, reject) => {
    const req = https.get(
      url,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
          Accept: "image/*,*/*",
        },
      },
      (res) => {
        if (
          res.statusCode >= 300 &&
          res.statusCode < 400 &&
          res.headers.location &&
          redirects < 4
        ) {
          const next = res.headers.location.startsWith("http")
            ? res.headers.location
            : new URL(res.headers.location, url).toString();
          res.resume();
          return download(next, redirects + 1).then(resolve, reject);
        }
        if (res.statusCode !== 200) {
          res.resume();
          return reject(new Error(`HTTP ${res.statusCode}`));
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
      }
    );
    req.on("error", reject);
    req.setTimeout(30000, () => req.destroy(new Error("timeout")));
  });
}

async function signature(url) {
  if (cache[url] !== undefined) return cache[url];
  try {
    const buffer = await download(url);
    const raw = await sharp(buffer)
      .flatten({ background: "#ffffff" })
      .resize(24, 24, { fit: "cover", position: "centre" })
      .removeAlpha()
      .raw()
      .toBuffer();
    cache[url] = raw.toString("base64");
  } catch {
    cache[url] = null;
  }
  return cache[url];
}

function meanAbsDiff(a, b) {
  const x = Buffer.from(a, "base64");
  const y = Buffer.from(b, "base64");
  let sum = 0;
  for (let i = 0; i < x.length; i++) sum += Math.abs(x[i] - y[i]);
  return sum / x.length;
}

function galleries(source) {
  const found = [];
  const re = /images: (\[[^\]]*\])/g;
  let m;
  while ((m = re.exec(source))) {
    let images;
    try {
      images = JSON.parse(
        m[1].replace(/\s*\n\s*/g, " ").replace(/,\s*\]$/, "]")
      );
    } catch {
      continue;
    }
    if (!Array.isArray(images) || images.length < 2) continue;
    const before = source.slice(Math.max(0, m.index - 6000), m.index);
    const key = [...before.matchAll(/key: "([^"]+)"/g)].pop()?.[1] || "?";
    found.push({ key, raw: m[1], images });
  }
  return found;
}

async function mapLimit(items, limit, fn) {
  let cursor = 0;
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, async () => {
      while (cursor < items.length) await fn(items[cursor++]);
    })
  );
}

/** Keeps the first of each repeated shot; returns the URLs to drop. */
function duplicatesIn(images) {
  const kept = [];
  const drop = [];
  for (const url of images) {
    const sig = cache[url];
    if (!sig) {
      kept.push(url);
      continue;
    }
    const limit = url.includes("deponti.com")
      ? THRESHOLD.deponti
      : THRESHOLD.giavani;
    const twin = kept.find(
      (k) => cache[k] && meanAbsDiff(cache[k], sig) <= limit
    );
    if (twin) drop.push({ url, twin });
    else kept.push(url);
  }
  return drop;
}

async function main() {
  const files = [GIAVANI_FILE, VERANDA_FILE].map((file) => ({
    file,
    source: fs.readFileSync(path.join(ROOT, file), "utf8"),
  }));
  for (const entry of files) entry.galleries = galleries(entry.source);

  const urls = [
    ...new Set(files.flatMap((f) => f.galleries.flatMap((g) => g.images))),
  ];
  const pending = urls.filter((u) => cache[u] === undefined);
  console.log(`${urls.length} gallery images (${pending.length} to hash)`);

  let done = 0;
  await mapLimit(pending, CONCURRENCY, async (url) => {
    await signature(url);
    if (++done % 100 === 0) {
      console.log(`  hashed ${done}/${pending.length}`);
      fs.writeFileSync(CACHE, JSON.stringify(cache));
    }
  });
  fs.writeFileSync(CACHE, JSON.stringify(cache));

  let total = 0;
  const verandaDrops = new Set(
    fs.existsSync(DROP_LIST) ? JSON.parse(fs.readFileSync(DROP_LIST, "utf8")) : []
  );

  for (const entry of files) {
    let source = entry.source;
    for (const gallery of entry.galleries) {
      const drop = duplicatesIn(gallery.images);
      if (!drop.length) continue;
      total += drop.length;
      console.log(
        `  ${gallery.key}: ${gallery.images.length} -> ${
          gallery.images.length - drop.length
        }`
      );
      for (const d of drop) {
        console.log(
          `      ${d.url.split("/").pop()} = ${d.twin.split("/").pop()}`
        );
      }

      if (entry.file === VERANDA_FILE) {
        drop.forEach((d) => verandaDrops.add(d.url));
        continue;
      }
      const dropped = new Set(drop.map((d) => d.url));
      const kept = gallery.images.filter((u) => !dropped.has(u));
      const replacement = gallery.raw.includes("\n")
        ? `[\n${kept.map((u) => `      ${JSON.stringify(u)},`).join("\n")}\n    ]`
        : JSON.stringify(kept);
      source = source.replace(`images: ${gallery.raw}`, `images: ${replacement}`);
    }
    if (APPLY && source !== entry.source) {
      fs.writeFileSync(path.join(ROOT, entry.file), source);
      console.log(`wrote ${entry.file}`);
    }
  }

  if (APPLY) {
    fs.writeFileSync(DROP_LIST, JSON.stringify([...verandaDrops], null, 2));
    console.log(`wrote ${path.basename(DROP_LIST)} (re-run the generator)`);
  }

  console.log(
    `\n${total} repeated photos${APPLY ? " removed" : " (dry run, pass --apply)"}`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
