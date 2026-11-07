"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import CartPersist from "@/components/providers/CartPersist";
import FavouritesPersist from "@/components/providers/FavouritesPersist";
import { makeStore, type AppStore } from "@/lib/store/store";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      <CartPersist />
      <FavouritesPersist />
      {children}
    </Provider>
  );
}
