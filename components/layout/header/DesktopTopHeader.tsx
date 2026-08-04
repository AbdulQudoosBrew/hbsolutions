import Link from "next/link";
import Logo from "@/components/ui/Logo";
import HeaderMenuButton from "@/components/layout/header/HeaderMenuButton";
import HeaderSearchButton from "@/components/layout/header/HeaderSearchButton";

export default function DesktopTopHeader({
  visible = true,
}: {
  visible?: boolean;
}) {
  return (
    <div
      className={`hidden border-b border-white/10 transition-all duration-500 ease-out ${
        visible
          ? "lg:block lg:max-h-28 lg:translate-y-0 lg:opacity-100"
          : "pointer-events-none max-h-0 -translate-y-2 overflow-hidden opacity-0 lg:block"
      }`}
      aria-hidden={!visible}
    >
      <div className="h-px w-full bg-white/30" />
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
