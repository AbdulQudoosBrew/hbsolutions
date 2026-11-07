"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import {
  hydrateFavourites,
  markFavouritesHydrated,
  type FavouriteItem,
} from "@/lib/store/slices/favouritesSlice";

const STORAGE_KEY = "hbs-favourites";

export default function FavouritesPersist() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.favourites.items);
  const hydrated = useAppSelector((state) => state.favourites.hydrated);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        dispatch(markFavouritesHydrated());
        return;
      }
      const parsed = JSON.parse(raw) as FavouriteItem[];
      if (Array.isArray(parsed)) {
        dispatch(hydrateFavourites(parsed));
        return;
      }
    } catch {
      // Ignore invalid stored favourites.
    }
    dispatch(markFavouritesHydrated());
  }, [dispatch]);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [hydrated, items]);

  return null;
}
