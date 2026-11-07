import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type FavouriteItem = {
  id: string;
  title: string;
  image: string;
  href: string;
  price?: string;
};

interface FavouritesState {
  items: FavouriteItem[];
  hydrated: boolean;
}

const initialState: FavouritesState = {
  items: [],
  hydrated: false,
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    hydrateFavourites: (state, action: PayloadAction<FavouriteItem[]>) => {
      state.items = action.payload;
      state.hydrated = true;
    },
    markFavouritesHydrated: (state) => {
      state.hydrated = true;
    },
    toggleFavourite: (state, action: PayloadAction<FavouriteItem>) => {
      const exists = state.items.some((item) => item.id === action.payload.id);
      if (exists) {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
        return;
      }
      state.items.push(action.payload);
    },
    removeFavourite: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearFavourites: (state) => {
      state.items = [];
    },
  },
});

export const {
  hydrateFavourites,
  markFavouritesHydrated,
  toggleFavourite,
  removeFavourite,
  clearFavourites,
} = favouritesSlice.actions;

export default favouritesSlice.reducer;

export function isFavourite(items: FavouriteItem[], id: string) {
  return items.some((item) => item.id === id);
}
