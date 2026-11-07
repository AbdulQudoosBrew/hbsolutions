"use client";

import Link from "next/link";
import { useAppSelector } from "@/lib/store/hooks";

export default function HeaderFavouritesButton() {
  const count = useAppSelector((state) => state.favourites.items.length);

  return (
    <Link
      href="/favourites"
      className="relative text-white transition-transform duration-300 hover:scale-110 hover:text-white/70"
      aria-label={count ? `Favourites, ${count} items` : "Favourites"}
    >
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill={count ? "currentColor" : "none"}
        stroke="currentColor"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 21s-6.5-4.35-9.33-8.18C.79 10.5.79 7.4 2.64 5.55A4.5 4.5 0 0112 5.12a4.5 4.5 0 019.36.43c1.85 1.85 1.85 4.95-.03 7.27C18.5 16.65 12 21 12 21z"
        />
      </svg>
      {count > 0 ? (
        <span className="absolute -right-2.5 -top-2 min-w-[1rem] rounded-full bg-white px-1 text-center text-[9px] font-medium leading-4 text-[#111111]">
          {count > 99 ? "99+" : count}
        </span>
      ) : null}
    </Link>
  );
}
