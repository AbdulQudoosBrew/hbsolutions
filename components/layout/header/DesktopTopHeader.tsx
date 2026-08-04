import Link from "next/link";
import Logo from "@/components/ui/Logo";
import HeaderMenuButton from "@/components/layout/header/HeaderMenuButton";
import HeaderSearchButton from "@/components/layout/header/HeaderSearchButton";

export default function DesktopTopHeader({ visible = true }: { visible?: boolean | undefined }) {
  return (
    <div className="border-b border-white/10 lg:block" style={{ display: visible ? "block" : "none" }}>
      <div className="h-px w-full bg-white/30" style={{ display: visible ? "block" : "none" }} />
      <div className="mx-auto grid max-w-[1400px] grid-cols-3 items-center px-4 py-3 sm:px-6 lg:px-8">
        <div className="justify-self-start">
          <HeaderMenuButton showLabel />
        </div>

        <Link
          href="/"
          className="justify-self-center transition-opacity duration-300 hover:opacity-80"
        >
          <Logo />
        </Link>

        <div className="justify-self-end">
          <HeaderSearchButton />
        </div>
      </div>
    </div>
  );
}
