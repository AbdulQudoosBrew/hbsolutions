import type { ReactNode } from "react";

interface ContactInfoItemProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function ContactInfoItem({
  title,
  children,
  className = "",
}: ContactInfoItemProps) {
  return (
    <div className={`text-left ${className}`}>
      <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#000000]">
        {title}
      </h3>
      <div className="text-sm leading-relaxed text-[#555555]">{children}</div>
    </div>
  );
}
