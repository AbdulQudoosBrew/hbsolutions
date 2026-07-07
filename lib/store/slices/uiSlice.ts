import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UiState {
  mobileMenuOpen: boolean;
  searchOpen: boolean;
  activeSlide: number;
  showScrollTop: boolean;
}

const initialState: UiState = {
  mobileMenuOpen: false,
  searchOpen: false,
  activeSlide: 0,
  showScrollTop: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.mobileMenuOpen = action.payload;
    },
    toggleSearch: (state) => {
      state.searchOpen = !state.searchOpen;
    },
    setSearchOpen: (state, action: PayloadAction<boolean>) => {
      state.searchOpen = action.payload;
    },
    setActiveSlide: (state, action: PayloadAction<number>) => {
      state.activeSlide = action.payload;
    },
    nextSlide: (state, action: PayloadAction<number>) => {
      state.activeSlide = (state.activeSlide + 1) % action.payload;
    },
    setShowScrollTop: (state, action: PayloadAction<boolean>) => {
      state.showScrollTop = action.payload;
    },
  },
});

export const {
  toggleMobileMenu,
  setMobileMenuOpen,
  toggleSearch,
  setSearchOpen,
  setActiveSlide,
  nextSlide,
  setShowScrollTop,
} = uiSlice.actions;

export default uiSlice.reducer;
