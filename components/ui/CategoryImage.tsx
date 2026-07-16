"use client";

import RemoteImage from "./RemoteImage";
import { useState } from "react";

interface CategoryImageProps {
  src: string;
  alt: string;
}

export default function CategoryImage({ src, alt }: CategoryImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-[#e8e8e8]">
        <span className="text-4xl text-[#cccccc]">◆</span>
      </div>
    );
  }

  return (
    <RemoteImage
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
      className="object-cover transition-transform duration-500 group-hover:scale-110"
      onError={() => setHasError(true)}
    />
  );
}
