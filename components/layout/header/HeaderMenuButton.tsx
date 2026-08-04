"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { toggleMobileMenu } from "@/lib/store/slices/uiSlice";

export default function HeaderMenuButton({
  showLabel = false,
}: {
  showLabel?: boolean;
}) {
  const dispatch = useAppDispatch();
  const mobileMenuOpen = useAppSelector((state) => state.ui.mobileMenuOpen);

  return (
    <div className="flex items-center gap-2.5">
      <button
        type="button"
        onClick={() => dispatch(toggleMobileMenu())}
        className="flex flex-col gap-1 text-white transition-colors duration-300 hover:text-white/70"
        aria-label="Menu"
        aria-expanded={mobileMenuOpen}
      >
        <span
          className={`block h-0.5 w-5 origin-center bg-current transition-all duration-300 ease-out ${
            mobileMenuOpen ? "translate-y-[6px] rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-current transition-all duration-300 ease-out ${
            mobileMenuOpen ? "scale-x-0 opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 origin-center bg-current transition-all duration-300 ease-out ${
            mobileMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
          }`}
        />
      </button>

      {showLabel ? (
        <button
          type="button"
          onClick={() => dispatch(toggleMobileMenu())}
          className="text-[11px] font-medium uppercase tracking-[0.3em] text-white transition-colors duration-300 hover:text-white/70"
        >
          Menu
        </button>
      ) : null}
    </div>
  );
}
