import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-white text-[#000000] hover:bg-[#ffffff] border border-white",
  secondary:
    "bg-[#000000] text-white hover:bg-[#333333] border border-[#000000]",
  outline:
    "bg-transparent text-white border border-white hover:bg-white hover:text-[#000000]",
  ghost:
    "bg-transparent text-[#000000] border border-transparent hover:bg-[#f5f5f5]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs tracking-[0.15em]",
  md: "px-6 py-3 text-sm tracking-[0.2em]",
  lg: "px-8 py-4 text-sm tracking-[0.25em]",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center font-medium uppercase transition-all duration-300",
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
