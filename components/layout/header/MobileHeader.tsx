import Link from "next/link";
import Logo from "@/components/ui/Logo";
import HeaderMenuButton from "@/components/layout/header/HeaderMenuButton";
import HeaderCartButton from "@/components/layout/header/HeaderCartButton";
import HeaderFavouritesButton from "@/components/layout/header/HeaderFavouritesButton";
import HeaderSearchButton from "@/components/layout/header/HeaderSearchButton";

export default function MobileHeader() {
  return (
    <div className="border-b border-white/10 lg:hidden">
      <div className="flex items-center justify-between px-4 py-2.5">
        <Link
          href="/"
          className="transition-opacity duration-300 hover:opacity-80"
        >
          <Logo className="h-[67px] w-[110px]" />
        </Link>

        <div className="flex items-center gap-3">
          <HeaderFavouritesButton />
          <HeaderCartButton />
          <HeaderSearchButton />
          <HeaderMenuButton />
        </div>
      </div>
    </div>
  );
}
