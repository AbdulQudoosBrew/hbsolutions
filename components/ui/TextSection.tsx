import type { ReactNode } from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";
type TextAlign = "left" | "center" | "right";
type TextColor = "light" | "dark" | "muted";

interface TextSectionProps {
  title?: string;
  subtitle?: string;
  paragraphs?: string[];
  headingLevel?: HeadingLevel;
  align?: TextAlign;
  color?: TextColor;
  className?: string;
  children?: ReactNode;
}

const alignStyles: Record<TextAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const colorStyles: Record<TextColor, { title: string; body: string }> = {
  light: {
    title: "text-white",
    body: "text-white/80",
  },
  dark: {
    title: "text-[#000000]",
    body: "text-[#555555]",
  },
  muted: {
    title: "text-[#333333]",
    body: "text-[#666666]",
  },
};

const headingSizes: Record<HeadingLevel, string> = {
  h1: "text-3xl md:text-4xl lg:text-5xl",
  h2: "text-2xl md:text-3xl lg:text-4xl",
  h3: "text-xl md:text-2xl",
  h4: "text-lg md:text-xl",
};

export default function TextSection({
  title,
  subtitle,
  paragraphs = [],
  headingLevel = "h2",
  align = "center",
  color = "dark",
  className = "",
  children,
}: TextSectionProps) {
  const Heading = headingLevel;
  const colors = colorStyles[color];

  return (
    <div className={`${alignStyles[align]} ${className}`}>
      {title && (
        <Heading
          className={`${headingSizes[headingLevel]} font-light uppercase tracking-[0.15em] leading-tight ${colors.title}`}
        >
          {title}
        </Heading>
      )}
      {subtitle && (
        <p
          className={`mt-2 ${headingSizes.h3} font-light uppercase tracking-[0.15em] ${colors.title}`}
        >
          {subtitle}
        </p>
      )}
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={`mt-4 text-sm md:text-base leading-relaxed  ${colors.title} ${
            index === 0 && title ? "mt-6" : "mt-4"
          }`}>{paragraph}</p>
      ))}
      {children}
    </div>)
}
