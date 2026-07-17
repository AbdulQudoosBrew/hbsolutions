"use client";

import Link from "next/link";
import { useEffect } from "react";
import Logo from "@/components/ui/Logo";
import { NAV_CATEGORIES } from "@/lib/constants/siteData";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import {
  setHeaderScrolled,
  setMobileMenuOpen,
  setSearchOpen,
  toggleMobileMenu,
  toggleSearch,
} from "@/lib/store/slices/uiSlice";

export default function Header() {
  const dispatch = useAppDispatch();
  const { mobileMenuOpen, searchOpen, headerScrolled } = useAppSelector(
    (state) => state.ui
  );

  useEffect(() => {
    const handleScroll = () => {
      dispatch(setHeaderScrolled(window.scrollY > 40));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch]);

  const menuIcon = (
    <button
      type="button"
      onClick={() => dispatch(toggleMobileMenu())}
      className="flex flex-col gap-1.5 text-white transition-colors duration-300 hover:text-white/70"
      aria-label="Menu"
      aria-expanded={mobileMenuOpen}
    >
      <span
        className={`block h-0.5 w-6 origin-center bg-current transition-all duration-300 ease-out ${
          mobileMenuOpen ? "translate-y-2 rotate-45" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-out ${
          mobileMenuOpen ? "scale-x-0 opacity-0" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-6 origin-center bg-current transition-all duration-300 ease-out ${
          mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
        }`}
      />
    </button>
  );

  const searchButton = (
    <button
      type="button"
      onClick={() => dispatch(toggleSearch())}
      className="text-white transition-transform duration-300 hover:scale-110 hover:text-white/70"
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
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#000000] pb-[25px] ">
      {/* Top design line */}
     

      {/* Mobile: always logo left, search + menu right */}
      <div className="border-b border-white/10 lg:hidden">
        <div className="flex items-center justify-between px-4 py-4">
          <Link href="/" className="transition-opacity duration-300 hover:opacity-80">
            <Logo />
          </Link>

          <div className="flex items-center gap-4">
            {searchButton}
            {menuIcon}
          </div>
        </div>
      </div>

      {/* Desktop: logo bar — fades out when scrolled */}
      <div
        className={`hidden overflow-hidden border-b border-white/10 transition-all duration-500 ease-out lg:block ${
          headerScrolled
            ? "pointer-events-none max-h-0 -translate-y-2 opacity-0"
            : "max-h-48 translate-y-0 opacity-100"
        }`}
      >
         <div className="pt-[25px]">
        <div className="h-px w-full bg-white/30 " />
      </div>
        <div className="mx-auto grid max-w-[1400px] grid-cols-3 items-center px-4 py-8 sm:px-6 lg:px-8 ">
          <div className="flex items-center gap-3 justify-self-start">
            {menuIcon}
            <button
              type="button"
              onClick={() => dispatch(toggleMobileMenu())}
              className="text-xs font-medium uppercase tracking-[0.3em] text-white transition-colors duration-300 hover:text-white/70"
            >
              Menu
            </button>
          </div>

          <Link
            href="/"
            className="justify-self-center transition-opacity duration-300 hover:opacity-80"
          >
            <Logo />
          </Link>

          <div className="justify-self-end">{searchButton}</div>
        </div>
      </div>

      {/* Desktop: category nav — fades in when scrolled */}
      <nav
        className={`hidden overflow-hidden border-b border-white/10 transition-all duration-500 ease-out lg:block ${
          headerScrolled
            ? "max-h-40 translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 translate-y-2 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <ul className="flex flex-1 flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {NAV_CATEGORIES.map((category, index) => (
              <li
                key={category.id}
                className="transition-all duration-500 ease-out"
                style={{
                  transitionDelay: headerScrolled ? `${index * 15}ms` : "0ms",
                  opacity: headerScrolled ? 1 : 0,
                  transform: headerScrolled ? "translateY(0)" : "translateY(6px)",
                }}
              >
                <Link
                  href={category.href}
                  className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/80 transition-colors duration-300 hover:text-white"
                >
                  {category.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="shrink-0">{searchButton}</div>
        </div>
      </nav>

      {/* Search panel */}
      <div
        className={`overflow-hidden border-b border-white/10 bg-[#000000] transition-all duration-300 ease-out ${
          searchOpen
            ? "max-h-24 translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center gap-4 px-4 py-4">
          <input
            type="search"
            placeholder="Search"
            className="flex-1 border-0 border-b border-white/30 bg-transparent py-2 text-sm text-white placeholder:text-white/50 transition-colors duration-300 focus:border-white focus:outline-none"
            autoFocus={searchOpen}
          />
          <button
            type="button"
            onClick={() => dispatch(setSearchOpen(false))}
            className="text-xs uppercase tracking-[0.2em] text-white/70 transition-colors duration-300 hover:text-white"
          >
            Close
          </button>
        </div>
      </div>

      {/* Menu drawer — opens from left */}
      <>
        <div
          className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ease-out ${
            mobileMenuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
          onClick={() => dispatch(setMobileMenuOpen(false))}
          aria-hidden={!mobileMenuOpen}
        />

        <div
          className={`fixed top-0 bottom-0 left-0 z-50 flex h-dvh w-full flex-col overflow-y-auto bg-[#000000] transition-transform duration-300 ease-out lg:w-[380px] lg:max-w-[90vw] ${
            mobileMenuOpen
              ? "pointer-events-auto translate-x-0"
              : "pointer-events-none -translate-x-full"
          }`}
        >
          <div className="flex shrink-0 items-center justify-end border-b border-white/10 px-4 py-4 sm:px-6">
            <button
              type="button"
              onClick={() => dispatch(setMobileMenuOpen(false))}
              className="flex h-10 w-10 items-center justify-center text-white transition-colors duration-300 hover:text-white/70"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-4">
              {NAV_CATEGORIES.map((category, index) => (
                <li
                  key={category.id}
                  className="transition-all duration-300 ease-out"
                  style={{
                    transitionDelay: mobileMenuOpen
                      ? `${80 + index * 25}ms`
                      : "0ms",
                    opacity: mobileMenuOpen ? 1 : 0,
                    transform: mobileMenuOpen
                      ? "translateX(0)"
                      : "translateX(-16px)",
                  }}
                >
                  <Link
                    href={category.href}
                    onClick={() => dispatch(setMobileMenuOpen(false))}
                    className="block text-sm font-medium uppercase tracking-[0.2em] text-white/80 transition-colors duration-300 hover:text-white"
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </>
    </header>
  );
}
