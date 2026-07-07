"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { setShowScrollTop } from "@/lib/store/slices/uiSlice";

export default function ScrollToTop() {
  const dispatch = useAppDispatch();
  const showScrollTop = useAppSelector((state) => state.ui.showScrollTop);

  useEffect(() => {
    const handleScroll = () => {
      dispatch(setShowScrollTop(window.scrollY > 400));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showScrollTop) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center bg-[#1a1a1a] text-white shadow-lg transition-all hover:bg-[#333333]"
      aria-label="Scroll to top"
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
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}
