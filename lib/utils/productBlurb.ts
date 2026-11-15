import type {
  CollectionPageData,
  ProductPageData,
} from "@/lib/constants/collectionPages";

const FLUFF =
  /\b(revolutionary|scientifically|unparalleled|game[- ]?chang(?:ing|er)?|ultimate|perfect for|elevate|seamlessly|cutting[- ]edge|next[- ]generation|breakthrough|unmatched|exceptional service|trusted companion|go-to choice|ideal solution for professional|explore the)\b/i;

const EXPLORE_LINE = /^explore the .+ range from haris building solutions\.?$/i;

const RUN_ON =
  /\s+(?=(?:Supplied|Basin sold|Toilet pan sold|Concealed cistern|Available in|Contemporary|Wall mounted|Wall hung|Soft-close|Space-saving|Part of|Designed for|Integrated|Handleless|Included|Finished in|Make a statement)\b)/g;

function ensurePeriod(text: string) {
  const trimmed = text
    .replace(/\s+/g, " ")
    .trim()
    .replace(/[.,;:]+$/, "");
  if (!trimmed) return "";
  return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`;
}

function splitCopy(text: string) {
  return text
    .replace(/[•●]/g, ". ")
    .replace(RUN_ON, ". ")
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s+/)
    .map((part) => ensurePeriod(part))
    .filter(
      (part) =>
        part.length > 18 &&
        part.length < 170 &&
        !FLUFF.test(part) &&
        !EXPLORE_LINE.test(part),
    );
}

function fromFeatures(features: string[]) {
  return features
    .map((feature) => ensurePeriod(feature.replace(/^.{0,40}?\s+[—–-]\s+/, "")))
    .filter(
      (feature) =>
        feature.length > 18 && feature.length < 150 && !FLUFF.test(feature),
    );
}

function alreadyCovered(lines: string[], next: string) {
  const key = next.slice(0, 28).toLowerCase();
  return lines.some((line) => line.toLowerCase().includes(key));
}

export function getProductSummaryLines(product: ProductPageData): string[] {
  const lines: string[] = [];
  const description = splitCopy(product.description || "");
  const features = fromFeatures(product.features || []);
  const colours = (product.colours || [])
    .filter((colour) => !colour.href)
    .map((colour) => colour.label);
  const sizes = (product.sizes || []).map((size) => size.label);

  const push = (line: string) => {
    const cleaned = ensurePeriod(line);
    if (!cleaned || alreadyCovered(lines, cleaned) || lines.length >= 4) return;
    lines.push(cleaned);
  };

  if (description[0]) {
    push(description[0]);
  } else {
    push(product.title);
  }

  if (colours.length) {
    push(
      colours.length === 1
        ? `Finish: ${colours[0]}`
        : `Finishes: ${colours.join(", ")}`,
    );
  }

  if (sizes.length) {
    push(
      sizes.length === 1 ? `Size: ${sizes[0]}` : `Sizes: ${sizes.join(", ")}`,
    );
  }

  for (const feature of features) push(feature);
  for (const sentence of description.slice(1)) push(sentence);

  const typeSpec = product.specs?.find(
    (spec) => spec.label.toLowerCase() === "type",
  );
  if (typeSpec) push(typeSpec.value);

  return lines.slice(0, 4);
}

function mmFromLabels(labels: string[]) {
  const sizes = [
    ...new Set(
      labels.flatMap(
        (label) => String(label ?? "").match(/\d{3,4}\s*mm(?![a-z])/gi) ?? [],
      ),
    ),
  ];
  return sizes.slice(0, 6);
}

function categoryNotes(categorySlug: string, labels: string[]) {
  const joined = labels.join(" ").toLowerCase();
  const notes: string[] = [];

  if (categorySlug === "sanitaryware" || /wc|cistern|pan|basin/.test(joined)) {
    notes.push("Pans, cisterns and seats as shown on each product.");
    if (/soft[- ]close/.test(joined)) {
      notes.push("Soft-close seats where listed.");
    }
  }

  if (categorySlug === "furniture" || /wall hung|vanity|unit/.test(joined)) {
    notes.push("Wall hung and floor standing units as listed.");
    notes.push("Basin sold separately unless the product says it is included.");
  }

  if (categorySlug === "showers" || /valve|douche|rail/.test(joined)) {
    notes.push(
      "Valves, rails and heads listed separately unless sold as a kit.",
    );
  }

  if (categorySlug === "aluminium" || /panel|roof/.test(joined)) {
    notes.push("Panel sizes and trims are on each product page.");
  }

  if (categorySlug === "silicone" || /sealant|ct1|bt1/.test(joined)) {
    notes.push("Colours and pack sizes are on each product page.");
  }

  if (!notes.length) {
    notes.push("Sizes, finishes and what is included are on each product.");
  }

  notes.push("Stock and lead times on request.");
  return notes;
}

export function getCollectionSummaryLines(
  collection: CollectionPageData,
): string[] {
  const lines: string[] = [];
  const labels = collection.items
    .map((item) => item.label || item.id || "")
    .filter(Boolean);
  const description = splitCopy(collection.description || "");
  const sizes = mmFromLabels(labels);

  const push = (line: string) => {
    const cleaned = ensurePeriod(line);
    if (!cleaned || alreadyCovered(lines, cleaned) || lines.length >= 4) return;
    lines.push(cleaned);
  };

  if (description[0]) {
    push(description[0]);
  } else {
    push(`${collection.title} range as listed below`);
  }

  if (labels.length) {
    const preview = labels.slice(0, 3).join(", ");
    push(
      labels.length > 3
        ? `Includes ${preview} and ${labels.length - 3} more`
        : `In this range: ${preview}`,
    );
  }

  if (sizes.length) {
    push(
      sizes.length === 1
        ? `Size shown: ${sizes[0]}`
        : `Sizes in this range: ${sizes.join(", ")}`,
    );
  }

  for (const sentence of description.slice(1)) push(sentence);
  for (const note of categoryNotes(collection.categorySlug, labels)) {
    push(note);
  }

  return lines.slice(0, 4);
}
