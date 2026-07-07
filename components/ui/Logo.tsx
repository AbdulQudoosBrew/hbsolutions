"use client";

import Image from "next/image";
import { useState } from "react";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-12 w-auto" }: LogoProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <span
        className={`font-light uppercase tracking-[0.3em] text-white ${className}`}
      >
        Giavani
      </span>
    );
  }

  return (
    <Image
      src="https://giavanibathrooms.com/wp-content/uploads/2023/12/White-Giavani-Logo-hogh-rev2-300x148.png"
      alt="Giavani Bathrooms"
      width={150}
      height={74}
      className={className}
      priority
      onError={() => setHasError(true)}
    />
  );
}
