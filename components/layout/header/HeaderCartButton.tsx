"use client";

import Link from "next/link";
import { useAppSelector } from "@/lib/store/hooks";
import { cartCount } from "@/lib/store/slices/cartSlice";

export default function HeaderCartButton() {
  const count = useAppSelector((state) => cartCount(state.cart.items));

  return (
    <Link
      href="/cart"
      className="relative text-white transition-transform duration-300 hover:scale-110 hover:text-white/70"
      aria-label={count ? `Basket, ${count} items` : "Basket"}
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
          d="M6 6h15l-1.5 9h-12L5 3H2m4 16.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm11 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
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
