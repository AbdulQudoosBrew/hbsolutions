import type { ProductOption } from "@/lib/constants/collectionPages";
import { uniqueImages } from "@/lib/utils/imageUrl";

function normalize(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Colour keys used to match against image filenames. */
function colourKeys(colour: ProductOption): string[] {
  const keys = new Set<string>();
  const value = normalize(colour.value);
  const label = normalize(colour.label);
  if (value) keys.add(value);
  if (label) keys.add(label);

  // Common aliases in Giavani filenames
  if (value.includes("brass") || label.includes("brass")) {
    keys.add("brushed-brass");
    keys.add("brass");
  }
  if (value.includes("bronze") || label.includes("bronze")) {
    keys.add("brushed-bronze");
    keys.add("bronze");
  }
  if (value === "gray") keys.add("grey");
  if (value === "grey") keys.add("gray");

  return [...keys].sort((a, b) => b.length - a.length);
}

function imageMatchesColour(imageUrl: string, colour: ProductOption): boolean {
  const file = normalize(imageUrl.split("/").pop() || imageUrl);
  return colourKeys(colour).some(
    (key) =>
      file === key ||
      file.startsWith(`${key}-`) ||
      file.includes(`-${key}-`) ||
      file.includes(`-${key}.`) ||
      file.includes(key)
  );
}

/** First gallery image that matches a colour swatch. */
export function findImageForColour(
  images: string[],
  colour: ProductOption | undefined
): string | null {
  if (!colour || !images.length) return null;
  if (colour.image) {
    const exact = images.find((img) => img === colour.image);
    if (exact) return exact;
    return colour.image;
  }
  return images.find((img) => imageMatchesColour(img, colour)) || null;
}

/** Distinct gallery images for a colour (duplicates / same-family shots removed). */
export function findImagesForColour(
  images: string[],
  colour: ProductOption | undefined
): string[] {
  if (!colour) return uniqueImages(images);
  if (colour.images?.length) {
    return uniqueImages(colour.images);
  }
  if (colour.image) {
    return uniqueImages([
      colour.image,
      ...images.filter((img) => imageMatchesColour(img, colour)),
    ]);
  }
  const matched = images.filter((img) => imageMatchesColour(img, colour));
  return uniqueImages(matched.length ? matched : images);
}
