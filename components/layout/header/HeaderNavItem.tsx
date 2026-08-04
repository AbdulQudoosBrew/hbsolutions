import Link from "next/link";
import type { NavCategory } from "@/lib/constants/siteData";

export default function HeaderNavItem({
  category,
  onNavigate,
}: {
  category: NavCategory;
  onNavigate?: () => void;
}) {
  const hasChildren = Boolean(category.children?.length);

  if (!hasChildren) {
    return (
      <Link
        href={category.href}
        onClick={onNavigate}
        className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/80 transition-colors duration-300 hover:text-white"
      >
        {category.label}
      </Link>
    );
  }

  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-white/80 transition-colors duration-300 group-hover:text-white"
        aria-haspopup="true"
      >
        {category.label}
        <svg
          className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div className="invisible absolute top-full left-1/2 z-[60] min-w-[220px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
        <ul className="border border-white/10 bg-[#000000] py-2 shadow-xl">
          {category.children?.map((child) => (
            <li key={`${category.id}-${child.id}`}>
              <Link
                href={child.href}
                onClick={onNavigate}
                className="block px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.15em] text-white/70 transition-colors duration-300 hover:bg-white/5 hover:text-white"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
