import Link from "next/link";
import CategoryImage from "./CategoryImage";

interface ProductCategoryCardProps {
  id: string;
  label: string;
  image: string;
  href?: string;
}

export default function ProductCategoryCard({
  id,
  label,
  image,
  href = `#${id}`,
}: ProductCategoryCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col items-center overflow-hidden bg-[#f5f5f5] transition-transform duration-300 hover:scale-[1.02]"
    >
      <div className="relative aspect-square w-full overflow-hidden">
        <CategoryImage src={image} alt={label} />
        <div className="absolute inset-0 bg-[#1a1a1a]/0 transition-colors duration-300 group-hover:bg-[#1a1a1a]/10" />
      </div>
      <span className="w-full py-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-[#333333] transition-colors group-hover:text-[#1a1a1a]">
        {label}
      </span>
    </Link>
  );
}
