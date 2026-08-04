"use client";

import { useEffect } from "react";
import DesktopScrolledHeader from "@/components/layout/header/DesktopScrolledHeader";
import DesktopTopHeader from "@/components/layout/header/DesktopTopHeader";
import HeaderMenuDrawer from "@/components/layout/header/HeaderMenuDrawer";
import HeaderSearchPanel from "@/components/layout/header/HeaderSearchPanel";
import MobileHeader from "@/components/layout/header/MobileHeader";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { setHeaderScrolled } from "@/lib/store/slices/uiSlice";

export default function Header() {
  const dispatch = useAppDispatch();
  const headerScrolled = useAppSelector((state) => state.ui.headerScrolled);

  useEffect(() => {
    const handleScroll = () => {
      dispatch(setHeaderScrolled(window.scrollY > 40));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#000000]">
      <MobileHeader />
      <DesktopTopHeader visible={!headerScrolled} />
      <DesktopScrolledHeader visible={headerScrolled} />
      <HeaderSearchPanel />
      <HeaderMenuDrawer />
    </header>
  );
}
