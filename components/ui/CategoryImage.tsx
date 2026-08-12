"use client";

import RemoteImage from "./RemoteImage";
import { useState } from "react";
import { toFullSizeImageUrl } from "@/lib/utils/imageUrl";

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

const VARIANT_FIT: Record<ImageVariant, string> = {
  card: "object-cover object-center",
  // Show the full reference frame — avoid aggressive crop on category headers
  hero: "object-cover object-center",
  banner: "object-cover object-[center_40%]",
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
  const fullSrc = toFullSizeImageUrl(src);

  if (hasError) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center ${
          variant === "product" ? "bg-white" : "bg-[#e8e8e8]"
        }`}
      >
        <span className="text-4xl text-[#dddddd]">◆</span>
      </div>
    );
  }

  return (
    <RemoteImage
      src={fullSrc}
      alt={alt}
      fill
      priority={priority}
      sizes={VARIANT_SIZES[variant]}
      quality={90}
      className={`${VARIANT_FIT[variant]} ${
        variant === "product" ? "bg-white" : ""
      } ${className}`.trim()}
      onError={() => setHasError(true)}
    />
  );
}
