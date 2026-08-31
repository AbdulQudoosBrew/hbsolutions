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
  href = `/${id}`,
}: ProductCategoryCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col items-center overflow-hidden"
    >
      <div className="relative aspect-square w-full overflow-hidden border border-[#e5e5e5] bg-white shadow-[0_1px_1px_rgba(0,0,0,0.06),0_6px_10px_rgba(0,0,0,0.08)] transition-shadow duration-300 group-hover:shadow-[0_2px_2px_rgba(0,0,0,0.07),0_10px_16px_rgba(0,0,0,0.1)]">
        <CategoryImage
          src={image}
          alt={label}
          variant="card"
          className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <span className="w-full py-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-[#333333] transition-transform duration-300 group-hover:scale-110">
        {label}
      </span>
    </Link>
  );
}
