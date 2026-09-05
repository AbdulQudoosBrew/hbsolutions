const CURRENCY_AMOUNT =
  /(?:GBP|EUR|USD)?\s*[£€$]\s*\d[\d,]*(?:\.\d{1,2})?/gi;

const NAMED_ENTITIES: Record<string, string> = {
  nbsp: " ",
  ndash: "–",
  mdash: "—",
  pound: "£",
  amp: "&",
  quot: '"',
  apos: "'",
  lt: "<",
  gt: ">",
};

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&#x([0-9a-f]+);/gi, (_, hex: string) =>
      String.fromCodePoint(parseInt(hex, 16)),
    )
    .replace(/&#(\d+);/g, (_, n: string) => String.fromCodePoint(Number(n)))
    .replace(/&([a-z]+);/gi, (match, name: string) => {
      return NAMED_ENTITIES[name.toLowerCase()] ?? match;
    });
}

export function stripPricesFromText(text: string): string {
  if (!text) return text;

  let out = decodeHtmlEntities(text);
  out = out.replace(/\b(?:\d+\s*)?pack\s+price\b/gi, "");
  out = out.replace(/\bprices?\s*:\s*/gi, "");
  out = out.replace(CURRENCY_AMOUNT, "");
  out = out.replace(/\s{2,}/g, " ").trim();
  return out;
}
