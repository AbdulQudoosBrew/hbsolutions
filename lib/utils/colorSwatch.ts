/** Map WooCommerce / slug colour values to display swatches. */
const COLOUR_SWATCHES: Record<string, string> = {
  white: "#f5f5f5",
  "gloss-white": "#f7f7f7",
  "flat-white": "#fafafa",
  black: "#1a1a1a",
  "matt-black": "#111111",
  anthracite: "#3a3a3a",
  chrome:
    "linear-gradient(135deg, #e8e8e8 0%, #bdbdbd 45%, #f5f5f5 55%, #9e9e9e 100%)",
  "brushed-brass":
    "linear-gradient(135deg, #e8d5a3 0%, #c4a35a 50%, #8a702e 100%)",
  brass: "#c4a35a",
  "brushed-bronze": "linear-gradient(135deg, #c49a6c 0%, #8b5e34 100%)",
  bronze: "#8b5e34",
  gold: "linear-gradient(135deg, #f0e0a8 0%, #d4af37 50%, #a8892d 100%)",
  gunmetal: "#4a4a4f",
  grey: "#8a8a8a",
  gray: "#8a8a8a",
  silver: "#c0c0c0",
  nickel: "#c5c5c5",
  copper: "#b87333",
  "rose-gold": "#b76e79",
  "ral-9016": "#f1f0ea",
  "ral-9001": "#f0ead6",
  "ral-7024": "#474a51",
  "ral-9005": "#0a0a0a",
  "cream-white": "#f0ead6",
  "traffic-white": "#f1f0ea",
};

function normalizeKey(value: string, label: string) {
  return `${value} ${label}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getColourSwatch(value: string, label = ""): string {
  const key = normalizeKey(value, label);

  for (const [name, swatch] of Object.entries(COLOUR_SWATCHES)) {
    if (key === name || key.includes(name)) return swatch;
  }

  let hash = 0;
  for (let i = 0; i < key.length; i += 1) {
    hash = key.charCodeAt(i) + ((hash << 5) - hash);
  }
  const tone = 40 + (Math.abs(hash) % 140);
  return `rgb(${tone}, ${tone}, ${tone})`;
}

export function isLightSwatch(swatch: string): boolean {
  if (swatch.includes("gradient")) return false;
  if (swatch.startsWith("#")) {
    const hex = swatch.slice(1);
    const full =
      hex.length === 3
        ? hex
            .split("")
            .map((c) => c + c)
            .join("")
        : hex;
    const n = parseInt(full, 16);
    const r = (n >> 16) & 255;
    const g = (n >> 8) & 255;
    const b = n & 255;
    return (r * 299 + g * 587 + b * 114) / 1000 > 200;
  }
  return false;
}
