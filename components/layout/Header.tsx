"use client";

import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { NAV_CATEGORIES } from "@/lib/constants/siteData";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import {
  setMobileMenuOpen,
  setSearchOpen,
  toggleMobileMenu,
  toggleSearch,
} from "@/lib/store/slices/uiSlice";

export default function Header() {
  const dispatch = useAppDispatch();
  const { mobileMenuOpen, searchOpen } = useAppSelector((state) => state.ui);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="relative z-50">
            <Logo />
          </Link>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => dispatch(toggleSearch())}
              className="text-white transition-colors hover:text-white/70"
              aria-label="Search"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => dispatch(toggleMobileMenu())}
              className="flex flex-col gap-1.5 text-white lg:hidden"
              aria-label="Menu"
              aria-expanded={mobileMenuOpen}
            >
              <span
                className={`block h-0.5 w-6 bg-white transition-transform ${
                  mobileMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-opacity ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-transform ${
                  mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>

            <span className="hidden text-xs font-medium uppercase tracking-[0.3em] text-white lg:block">
              Menu
            </span>
          </div>
        </div>
      </div>

      <nav className="hidden border-b border-white/10 lg:block">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-3">
            {NAV_CATEGORIES.map((category) => (
              <li key={category.id}>
                <Link
                  href={category.href}
                  className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/80 transition-colors hover:text-white"
                >
                  {category.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {searchOpen && (
        <div className="border-b border-white/10 bg-[#1a1a1a] px-4 py-4">
          <div className="mx-auto flex max-w-[1400px] items-center gap-4">
            <input
              type="search"
              placeholder="Search"
              className="flex-1 border-0 border-b border-white/30 bg-transparent py-2 text-sm text-white placeholder:text-white/50 focus:border-white focus:outline-none"
              autoFocus
            />
            <button
              type="button"
              onClick={() => dispatch(setSearchOpen(false))}
              className="text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[73px] z-40 overflow-y-auto bg-[#1a1a1a] lg:hidden">
          <nav className="px-6 py-8">
            <ul className="space-y-4">
              {NAV_CATEGORIES.map((category) => (
                <li key={category.id}>
                  <Link
                    href={category.href}
                    onClick={() => dispatch(setMobileMenuOpen(false))}
                    className="block text-sm font-medium uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-white"
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
