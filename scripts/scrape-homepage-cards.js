const fs = require("fs");
const path = require("path");

async function main() {
  const res = await fetch("https://giavanibathrooms.com/", {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    },
  });
  const html = await res.text();
  fs.writeFileSync(
    path.join(__dirname, "..", "temp-pages", "home.html"),
    html,
    "utf8"
  );

  // Same pattern: image link + button label
  const imageByPath = new Map();
  for (const m of html.matchAll(
    /<a[^>]+href=["']([^"']+)["'][^>]*>\s*<img[^>]+src=["']([^"']+)["'][^>]*>/gi
  )) {
    try {
      const p = new URL(
        m[1].startsWith("http") ? m[1] : "https://giavanibathrooms.com" + m[1]
      ).pathname.replace(/\/$/, "");
      const img = m[2].split("?")[0];
      if (img.includes("/wp-content/uploads/") && !imageByPath.has(p)) {
        imageByPath.set(p, img);
      }
    } catch {}
  }

  const cards = [];
  for (const m of html.matchAll(
    /<a[^>]+class="[^"]*elementor-button[^"]*"[^>]+href=["']([^"']+)["'][^>]*>[\s\S]*?<span class="elementor-button-text">([\s\S]*?)<\/span>/gi
  )) {
    const label = m[2].replace(/<[^>]+>/g, "").trim();
    try {
      const p = new URL(
        m[1].startsWith("http") ? m[1] : "https://giavanibathrooms.com" + m[1]
      ).pathname.replace(/\/$/, "");
      const image = imageByPath.get(p);
      if (image && label && label.length < 40) {
        cards.push({ label, path: p, image });
      }
    } catch {}
  }

  // unique
  const seen = new Set();
  const uniq = cards.filter((c) => {
    if (seen.has(c.path)) return false;
    seen.add(c.path);
    return true;
  });

  console.log(JSON.stringify(uniq, null, 2));
  fs.writeFileSync(
    path.join(__dirname, "..", "temp-pages", "home-cards.json"),
    JSON.stringify(uniq, null, 2)
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
