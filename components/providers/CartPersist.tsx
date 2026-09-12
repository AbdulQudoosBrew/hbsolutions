"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import {
  hydrateCart,
  markCartHydrated,
  type CartLine,
} from "@/lib/store/slices/cartSlice";

const STORAGE_KEY = "hbs-available-on-delivery-cart";

export default function CartPersist() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);
  const hydrated = useAppSelector((state) => state.cart.hydrated);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        dispatch(markCartHydrated());
        return;
      }
      const parsed = JSON.parse(raw) as CartLine[];
      if (Array.isArray(parsed)) {
        dispatch(hydrateCart(parsed));
        return;
      }
    } catch {
      // Ignore invalid stored cart data.
    }
    dispatch(markCartHydrated());
  }, [dispatch]);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [hydrated, items]);

  return null;
}
