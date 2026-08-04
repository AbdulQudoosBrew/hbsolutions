"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { setSearchOpen } from "@/lib/store/slices/uiSlice";

export default function HeaderSearchPanel() {
  const dispatch = useAppDispatch();
  const searchOpen = useAppSelector((state) => state.ui.searchOpen);

  return (
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
  );
}
