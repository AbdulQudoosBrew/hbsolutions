import Image, { type ImageProps } from "next/image";

type RemoteImageProps = Omit<ImageProps, "unoptimized">;

export default function RemoteImage(props: RemoteImageProps) {
  return <Image {...props} unoptimized />;
}
