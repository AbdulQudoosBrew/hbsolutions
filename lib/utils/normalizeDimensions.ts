const NUMBER = String.raw`\d+(?:\.\d+)?`;
const UNIT = String.raw`(?:mm|cm|m)`;
const NOT_AFTER_M = String.raw`(?![m²³2])`;
const DIM_WORD = String.raw`(?:\s+(?:width|height|thickness|depth|length))`;

function toMm(value: number, unit: string): number {
  const normalised = unit.toLowerCase();
  if (normalised === "cm") return value * 10;
  if (normalised === "m") return value * 1000;
  return value;
}

function formatMm(value: number): string {
  const rounded = Math.round(value * 10000) / 10000;
  return `${rounded}mm`;
}

function chainSeparator(match: string): string {
  return match.includes("×") ? " × " : " * ";
}

export function normalizeDimensionText(text: string): string {
  if (!text) return text;

  let out = text;

  const unitChain = new RegExp(
    `${NUMBER}\\s*${UNIT}${NOT_AFTER_M}(?:${DIM_WORD})?(?:\\s*[*×x]\\s*${NUMBER}\\s*${UNIT}${NOT_AFTER_M}(?:${DIM_WORD})?)+`,
    "gi",
  );

  out = out.replace(unitChain, (match) => {
    const partRe = new RegExp(
      `(${NUMBER})\\s*(${UNIT})${NOT_AFTER_M}(${DIM_WORD})?`,
      "gi",
    );
    const parts: { mm: number; word: string }[] = [];
    let part: RegExpExecArray | null;
    while ((part = partRe.exec(match))) {
      parts.push({
        mm: toMm(Number(part[1]), part[2]),
        word: part[3] ?? "",
      });
    }
    if (parts.length < 2) return match;
    const sep = chainSeparator(match);
    return [...parts]
      .sort((a, b) => b.mm - a.mm)
      .map((item) => `${formatMm(item.mm)}${item.word}`)
      .join(sep);
  });

  const sharedUnit = new RegExp(
    `(${NUMBER}(?:\\s*[*×x]\\s*${NUMBER})+)\\s*(${UNIT})${NOT_AFTER_M}`,
    "gi",
  );

  out = out.replace(sharedUnit, (match, nums: string, unit: string) => {
    const values = nums
      .split(/\s*[*×x]\s*/)
      .map((n) => toMm(Number(n), unit));
    if (values.length < 2 || values.some((n) => Number.isNaN(n))) return match;
    return values
      .sort((a, b) => b - a)
      .map(formatMm)
      .join(chainSeparator(match));
  });

  out = out.replace(
    new RegExp(
      `(${NUMBER})\\s*-\\s*(${NUMBER})\\s*(${UNIT})${NOT_AFTER_M}`,
      "gi",
    ),
    (_, a: string, b: string, unit: string) =>
      `${formatMm(toMm(Number(a), unit))}-${formatMm(toMm(Number(b), unit))}`,
  );

  out = out.replace(
    new RegExp(`(∅)\\s*(${NUMBER})\\s*(${UNIT})${NOT_AFTER_M}`, "gi"),
    (_, prefix: string, n: string, unit: string) =>
      `${prefix}${formatMm(toMm(Number(n), unit))}`,
  );

  out = out.replace(
    new RegExp(`(${NUMBER})\\s*(cm|m)${NOT_AFTER_M}`, "gi"),
    (_, n: string, unit: string) => formatMm(toMm(Number(n), unit)),
  );

  return out;
}
