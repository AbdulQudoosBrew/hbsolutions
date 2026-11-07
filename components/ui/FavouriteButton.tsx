"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import {
  isFavourite,
  toggleFavourite,
  type FavouriteItem,
} from "@/lib/store/slices/favouritesSlice";

type FavouriteButtonProps = {
  item: FavouriteItem;
  className?: string;
  variant?: "overlay" | "text";
};

export default function FavouriteButton({
  item,
  className = "",
  variant = "overlay",
}: FavouriteButtonProps) {
  const dispatch = useAppDispatch();
  const saved = useAppSelector((state) => isFavourite(state.favourites.items, item.id));

  return (
    <button
      type="button"
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(toggleFavourite(item));
      }}
      aria-pressed={saved}
      aria-label={saved ? "Remove from favourites" : "Add to favourites"}
      className={
        variant === "text"
          ? `inline-flex h-11 items-center gap-2 px-2 text-[11px] uppercase tracking-[0.18em] text-[#666666] transition-colors hover:text-[#111111] sm:h-12 ${className}`
          : `absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#111111] shadow-sm transition-colors hover:bg-white ${className}`
      }
    >
      <svg
        className={variant === "text" ? "h-4 w-4" : "h-4 w-4"}
        viewBox="0 0 24 24"
        fill={saved ? "currentColor" : "none"}
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
      {variant === "text" ? (saved ? "Saved" : "Save") : null}
    </button>
  );
}
