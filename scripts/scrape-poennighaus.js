const fs = require("fs");
const path = require("path");

(async () => {
  const res = await fetch("https://www.poennighaus.co.uk/kitchens", {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    },
  });
  const html = await res.text();
  fs.writeFileSync(
    path.join(__dirname, "..", "temp-pages", "poennighaus-kitchens.html"),
    html,
  );
  const imgs = [
    ...html.matchAll(/https:\/\/(?:static|static\.wixstatic)\.com\/media\/[^"'\\\s,)]+/gi),
  ].map((m) =>
    m[0]
      .replace(/\\u002F/g, "/")
      .replace(/\\/g, "")
      .split("?")[0]
      .replace(/\/v1\/fill\/.*$/, ""),
  );
  const wix = [
    ...html.matchAll(/"url"\s*:\s*"(https:[^"]+wixstatic[^"]+)"/gi),
  ].map((m) => JSON.parse(`"${m[1]}"`));
  const alts = [...html.matchAll(/"alt"\s*:\s*"([^"]*)"/g)].map((m) => m[1]);
  const titles = [...html.matchAll(/"title"\s*:\s*"([^"]*)"/g)].map((m) => m[1]);
  console.log("status", res.status, "len", html.length);
  console.log("imgs", [...new Set(imgs)].slice(0, 40));
  console.log("wix", [...new Set(wix)].slice(0, 40));
  console.log("alts", [...new Set(alts)].slice(0, 40));
})();
