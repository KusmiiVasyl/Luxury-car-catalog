import { create } from "zustand";

export const useStore = create((set) => ({
  activeHeaderSlideIcon: false,
  handleToggleActiveHeaderSlideIcon: () =>
    set((state) => ({
      activeHeaderSlideIcon: !state.activeHeaderSlideIcon,
    })),
}));
