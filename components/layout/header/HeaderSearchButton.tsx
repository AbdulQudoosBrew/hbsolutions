"use client";

import { useAppDispatch } from "@/lib/store/hooks";
import { toggleSearch } from "@/lib/store/slices/uiSlice";

export default function HeaderSearchButton() {
  const dispatch = useAppDispatch();

  return (
    <button
      type="button"
      onClick={() => dispatch(toggleSearch())}
      className="text-white transition-transform duration-300 hover:scale-110 hover:text-white/70"
      aria-label="Search"
    >
      <svg
        className="h-4 w-4"
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
}
