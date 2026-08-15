/** Builds a numbered contact sheet for one gallery so duplicates can be eyeballed. */
const fs = require("fs");
const path = require("path");
const https = require("https");
const sharp = require("sharp");

const ROOT = "D:/web-developement/hbsolutions";
const KEY = process.argv[2];
const OUT = path.join(ROOT, process.argv[3] || "temp-contact-sheet.png");
const CELL = 220;
const COLS = 5;

const source = ["lib/constants/collectionPages.ts", "lib/constants/verandaPages.ts"]
  .map((f) => fs.readFileSync(path.join(ROOT, f), "utf8"))
  .join("\n");

function gallery(key) {
  const at = source.indexOf(`key: "${key}"`);
  if (at < 0) return [];
  const raw = source.slice(at, at + 8000).match(/images: (\[[^\]]*\])/);
  if (!raw) return [];
  return JSON.parse(raw[1].replace(/\s*\n\s*/g, " ").replace(/,\s*\]$/, "]"));
}

function download(url, redirects = 0) {
  return new Promise((resolve, reject) => {
    const req = https.get(
      url,
      { headers: { "User-Agent": "Mozilla/5.0", Accept: "image/*,*/*" } },
      (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location && redirects < 4) {
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

/** Mirrors lib/utils/imageUrl.ts so sheets show what the page actually renders. */
function familyKey(src) {
  const full = src.replace(/-\d+x\d+(?=\.(?:jpe?g|png|webp|gif)$)/i, "");
  const file = (full.split("/").pop() || full).toLowerCase();
  return file
    .replace(/\.(jpe?g|png|webp|gif)$/i, "")
    .replace(/-(?:scaled|large|medium|thumbnail)$/i, "")
    .replace(/-\d+x\d+$/i, "")
    .replace(/[-_]\d+$/i, "");
}

async function main() {
  let images = gallery(KEY);
  if (process.argv.includes("--rendered")) {
    const seen = new Set();
    images = images.filter((u) => {
      const k = familyKey(u);
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  }
  console.log(`${KEY}: ${images.length} images`);
  const rows = Math.ceil(images.length / COLS);
  const cells = [];

  for (let i = 0; i < images.length; i++) {
    const buffer = await download(images[i]);
    const thumb = await sharp(buffer)
      .flatten({ background: "#ffffff" })
      .resize(CELL, CELL, { fit: "contain", background: "#ffffff" })
      .png()
      .toBuffer();
    const label = Buffer.from(
      `<svg width="${CELL}" height="28"><rect width="${CELL}" height="28" fill="#111"/><text x="6" y="20" font-family="monospace" font-size="18" fill="#fff">[${i}]</text></svg>`
    );
    cells.push(
      await sharp({
        create: {
          width: CELL,
          height: CELL + 28,
          channels: 3,
          background: "#ffffff",
        },
      })
        .composite([
          { input: thumb, top: 28, left: 0 },
          { input: label, top: 0, left: 0 },
        ])
        .png()
        .toBuffer()
    );
  }

  await sharp({
    create: {
      width: COLS * CELL,
      height: rows * (CELL + 28),
      channels: 3,
      background: "#dddddd",
    },
  })
    .composite(
      cells.map((input, i) => ({
        input,
        top: Math.floor(i / COLS) * (CELL + 28),
        left: (i % COLS) * CELL,
      }))
    )
    .png()
    .toFile(OUT);

  console.log("wrote", OUT);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
