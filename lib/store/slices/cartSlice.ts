import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type CartLine = {
  id: string;
  title: string;
  image: string;
  href: string;
  price: string;
  unitAmount: number;
  qty: number;
};

interface CartState {
  items: CartLine[];
  hydrated: boolean;
}

const initialState: CartState = {
  items: [],
  hydrated: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    hydrateCart: (state, action: PayloadAction<CartLine[]>) => {
      state.items = action.payload;
      state.hydrated = true;
    },
    markCartHydrated: (state) => {
      state.hydrated = true;
    },
    addToCart: (state, action: PayloadAction<Omit<CartLine, "qty"> & { qty?: number }>) => {
      const qty = Math.max(1, action.payload.qty ?? 1);
      const existing = state.items.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.qty += qty;
        return;
      }
      state.items.push({
        id: action.payload.id,
        title: action.payload.title,
        image: action.payload.image,
        href: action.payload.href,
        price: action.payload.price,
        unitAmount: action.payload.unitAmount,
        qty,
      });
    },
    setCartQty: (state, action: PayloadAction<{ id: string; qty: number }>) => {
      const item = state.items.find((entry) => entry.id === action.payload.id);
      if (!item) return;
      item.qty = Math.max(1, action.payload.qty);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  hydrateCart,
  markCartHydrated,
  addToCart,
  setCartQty,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export function cartCount(items: CartLine[]) {
  return items.reduce((sum, item) => sum + item.qty, 0);
}

export function cartTotal(items: CartLine[]) {
  return items.reduce((sum, item) => sum + item.unitAmount * item.qty, 0);
}

export function formatCartMoney(amount: number) {
  return `£${(amount / 100).toFixed(2)}`;
}
