"use client";

import RemoteImage from "./RemoteImage";
import { useState } from "react";
import {
  toFullSizeImageUrl,
  toOptimizedImageUrl,
} from "@/lib/utils/imageUrl";

type ImageVariant = "card" | "hero" | "banner" | "product";

interface CategoryImageProps {
  src: string;
  alt: string;
  variant?: ImageVariant;
  priority?: boolean;
  className?: string;
}

const VARIANT_SIZES: Record<ImageVariant, string> = {
  card: "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw",
  hero: "100vw",
  banner: "100vw",
  product: "(max-width: 1024px) 100vw, 50vw",
};

const VARIANT_PIXELS: Record<
  ImageVariant,
  { width: number; height: number; quality: number }
> = {
  card: { width: 640, height: 640, quality: 80 },
  hero: { width: 1600, height: 900, quality: 80 },
  banner: { width: 1600, height: 400, quality: 80 },
  product: { width: 1200, height: 1200, quality: 82 },
};

const VARIANT_FIT: Record<ImageVariant, string> = {
  card: "object-contain object-center",
  hero: "h-full w-full object-cover object-center",
  banner: "h-full w-full object-contain object-center",
  product: "object-contain object-center",
};

export default function CategoryImage({
  src,
  alt,
  variant = "card",
  priority = false,
  className = "",
}: CategoryImageProps) {
  const [hasError, setHasError] = useState(false);
  const displaySrc = toOptimizedImageUrl(
    toFullSizeImageUrl(src),
    VARIANT_PIXELS[variant],
  );

  if (hasError) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center ${
          variant === "hero" || variant === "banner" ? "" : "bg-white"
        }`}
      >
        <span className="text-4xl text-[#dddddd]">◆</span>
      </div>
    );
  }

  return (
    <RemoteImage
      src={displaySrc}
      alt={alt}
      fill
      priority={priority}
      sizes={VARIANT_SIZES[variant]}
      quality={90}
      className={`${VARIANT_FIT[variant]} ${
        variant === "hero" || variant === "banner" ? "" : "bg-white"
      } ${className}`.trim()}
      onError={() => setHasError(true)}
    />
  );
}
