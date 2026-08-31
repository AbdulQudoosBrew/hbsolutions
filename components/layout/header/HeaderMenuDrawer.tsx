"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_CATEGORIES } from "@/lib/constants/siteData";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { setMobileMenuOpen } from "@/lib/store/slices/uiSlice";

export default function HeaderMenuDrawer() {
  const dispatch = useAppDispatch();
  const mobileMenuOpen = useAppSelector((state) => state.ui.mobileMenuOpen);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

  useEffect(() => {
    if (!mobileMenuOpen) setExpandedGroup(null);
  }, [mobileMenuOpen]);

  const closeMenu = () => dispatch(setMobileMenuOpen(false));

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ease-out ${
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
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
            onClick={closeMenu}
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
          <ul className="space-y-2">
            {NAV_CATEGORIES.map((category, index) => {
              const hasChildren = Boolean(category.children?.length);
              const isExpanded = expandedGroup === category.id;

              return (
                <li
                  key={category.id}
                  className="transition-all duration-300 ease-out"
                  style={{
                    transitionDelay: mobileMenuOpen
                      ? `${80 + index * 20}ms`
                      : "0ms",
                    opacity: mobileMenuOpen ? 1 : 0,
                    transform: mobileMenuOpen
                      ? "translateX(0)"
                      : "translateX(-16px)",
                  }}
                >
                  {hasChildren ? (
                    <div>
                      <div className="flex items-center gap-2">
                        <Link
                          href={category.href}
                          onClick={closeMenu}
                          className="flex-1 py-2 text-sm font-medium uppercase tracking-[0.2em] text-white/80 transition-colors duration-300 hover:text-white"
                        >
                          {category.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedGroup(isExpanded ? null : category.id)
                          }
                          className="flex h-10 w-10 items-center justify-center text-white/80 transition-colors duration-300 hover:text-white"
                          aria-expanded={isExpanded}
                          aria-label={`Show ${category.label} collections`}
                        >
                          <svg
                            className={`h-4 w-4 transition-transform duration-300 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
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
                      </div>

                      <ul
                        className={`overflow-y-auto border-l border-white/10 pl-4 transition-all duration-300 ${
                          isExpanded
                            ? "mt-1 max-h-[50vh] opacity-100"
                            : "max-h-0 overflow-hidden opacity-0"
                        }`}
                      >
                        {category.children?.map((child) => (
                          <li key={`${category.id}-${child.id}`}>
                            <Link
                              href={child.href}
                              onClick={closeMenu}
                              className="block py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 hover:text-white"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      href={category.href}
                      onClick={closeMenu}
                      className="block py-2 text-sm font-medium uppercase tracking-[0.2em] text-white/80 transition-colors duration-300 hover:text-white"
                    >
                      {category.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
