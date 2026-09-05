/**
 * Prefer full-size WordPress uploads over resized variants like `-768x1024`.
 * Giavani serves sharp srcsets; our scrape often stored the smaller `src`.
 */
export function toFullSizeImageUrl(src: string): string {
  if (!src) return src;

  try {
    const url = new URL(src);
    if (!url.hostname.includes("giavanibathrooms.com")) {
      return src;
    }

    url.pathname = url.pathname.replace(
      /-\d+x\d+(?=\.(?:jpe?g|png|webp|gif)$)/i,
      "",
    );

    return url.toString();
  } catch {
    return src.replace(/-\d+x\d+(?=\.(?:jpe?g|png|webp|gif)$)/i, "");
  }
}

type ImageFitSize = {
  width: number;
  height?: number;
  quality?: number;
};

/**
 * Ask CDNs that support it for a display-sized file.
 * Kitchen photos on Wix are ~8MB originals; cards only need a few hundred KB.
 */
export function toOptimizedImageUrl(
  src: string,
  { width, height, quality = 80 }: ImageFitSize,
): string {
  if (!src || src.startsWith("/")) return src;

  try {
    const url = new URL(src);
    const host = url.hostname;

    if (host.includes("static.wixstatic.com")) {
      const mediaPath = url.pathname.split("/v1/")[0];
      const file = mediaPath.split("/").pop() || "image.jpg";
      const h = height ?? width;
      url.pathname = `${mediaPath}/v1/fill/w_${width},h_${h},al_c,q_${quality},enc_auto/${file}`;
      url.search = "";
      return url.toString();
    }

    if (host.includes("cdn.shopify.com")) {
      url.searchParams.set("width", String(width));
      return url.toString();
    }
  } catch {
    return src;
  }

  return src;
}

/**
 * Group key for near-identical gallery shots.
 * e.g. chrome-8.jpg / chrome-9.jpg → "chrome"
 *      black-14.jpg / black-15.jpg → "black"
 */
export function imageFamilyKey(src: string): string {
  const full = toFullSizeImageUrl(src);
  const file = (full.split("/").pop() || full).toLowerCase();

  return file
    .replace(/\.(jpe?g|png|webp|gif)$/i, "")
    .replace(/-(?:scaled|large|medium|thumbnail)$/i, "")
    .replace(/-\d+x\d+$/i, "")
    .replace(/[-_]\d+$/i, "");
}

/**
 * Deduplicate gallery URLs:
 * - same full-size URL
 * - same family (chrome-8 / chrome-9)
 */
export function uniqueImages(images: string[]): string[] {
  const seen = new Set<string>();
  const unique: string[] = [];

  for (const src of images) {
    if (!src) continue;
    const full = toFullSizeImageUrl(src);
    const key = imageFamilyKey(full);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    unique.push(full);
  }

  return unique;
}
