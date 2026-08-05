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
      ""
    );

    return url.toString();
  } catch {
    return src.replace(/-\d+x\d+(?=\.(?:jpe?g|png|webp|gif)$)/i, "");
  }
}
