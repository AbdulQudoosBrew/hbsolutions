import Image, { type ImageProps } from "next/image";
import { toFullSizeImageUrl } from "@/lib/utils/imageUrl";

type RemoteImageProps = Omit<ImageProps, "unoptimized">;

/**
 * Remote images from Giavani hosts. Kept unoptimized because the Next image
 * optimizer has failed to fetch that host in this environment; we still prefer
 * full-size source URLs for sharpness.
 */
export default function RemoteImage({ src, ...props }: RemoteImageProps) {
  const resolvedSrc =
    typeof src === "string" ? toFullSizeImageUrl(src) : src;

  return <Image {...props} src={resolvedSrc} unoptimized />;
}
