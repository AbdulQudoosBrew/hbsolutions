import type { ReactNode } from "react";

type SectionBackground = "white" | "light" | "dark" | "transparent";

interface SectionProps {
  id?: string;
  children: ReactNode;
  background?: SectionBackground;
  className?: string;
  fullWidth?: boolean;
}

const backgroundStyles: Record<SectionBackground, string> = {
  white: "bg-white",
  light: "bg-[#f8f8f8]",
  dark: "bg-[#000000]",
  transparent: "bg-transparent",
};

export default function Section({
  id,
  children,
  background = "white",
  className = "",
  fullWidth = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${backgroundStyles[background]} ${fullWidth ? "" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
