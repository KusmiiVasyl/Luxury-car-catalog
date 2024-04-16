import { create } from "zustand";
import axios from "axios";
import { URL } from "./constants/index";

export const useStore = create((set) => ({
  activeHeaderSlideIcon: false,
  handleToggleActiveHeaderSlideIcon: () =>
    set((state) => ({
      activeHeaderSlideIcon: !state.activeHeaderSlideIcon,
    })),
}));

// get data from api
const initialState = {
  loading: false,
  success: false,
  error: false,
  cars: [],
  errorData: null,
};

export const useGetData = create((set) => ({
  ...initialState,

  getCars: async () => {
    set({ ...initialState, loading: true });
    try {
      const res = await axios.get(URL.CARS);
      if (res.status === 200) {
        set({ ...initialState, cars: res.data, success: true, loading: false });
      }
    } catch (error) {
      set({
        ...initialState,
        error: true,
        errorData: error.message,
        loading: false,
      });
    }
  },
}));
