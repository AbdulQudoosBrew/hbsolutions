import { NAV_CATEGORIES } from "@/lib/constants/siteData";
import HeaderNavItem from "@/components/layout/header/HeaderNavItem";
import HeaderCartButton from "@/components/layout/header/HeaderCartButton";
import HeaderSearchButton from "@/components/layout/header/HeaderSearchButton";

export default function DesktopScrolledHeader({
  visible,
}: {
  visible: boolean;
}) {
  return (
    <nav
      className={`hidden border-b border-white/10 transition-all duration-500 ease-out lg:block ${
        visible
          ? "max-h-40 translate-y-0 opacity-100"
          : "pointer-events-none max-h-0 translate-y-2 overflow-hidden opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <div className="mx-auto flex max-w-[1400px] items-center gap-4 px-4 py-2 sm:px-6 lg:px-8">
        <ul className="flex flex-1 flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {NAV_CATEGORIES.map((category, index) => (
            <li
              key={category.id}
              className="transition-all duration-500 ease-out"
              style={{
                transitionDelay: visible ? `${index * 15}ms` : "0ms",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(6px)",
              }}
            >
              <HeaderNavItem category={category} />
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-4">
          <HeaderCartButton />
          <HeaderSearchButton />
        </div>
      </div>
    </nav>
  );
}
