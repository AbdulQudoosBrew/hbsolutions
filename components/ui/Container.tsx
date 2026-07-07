import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

const sizeStyles = {
  default: "max-w-7xl",
  narrow: "max-w-4xl",
  wide: "max-w-[1400px]",
};

export default function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${sizeStyles[size]} ${className}`}
    >
      {children}
    </div>
  );
}
