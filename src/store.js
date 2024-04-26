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
  filterItems: [{ id: 1, name: "All", active: true }],
  errorData: null,
};

export const useGetData = create((set, get) => ({
  ...initialState,

  getCars: async () => {
    set({ ...initialState, loading: true });
    try {
      const res = await axios.get(URL.CARS);
      if (res.status === 200) {
        set({ ...initialState, cars: res.data, success: true, loading: false });
        set({
          filterItems: [
            ...get().filterItems,
            ...handleCarsFIlterItems(res.data, get().filterItems),
          ],
        });
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

const handleCarsFIlterItems = (cars, filterItems) => {
  const carBrands = new Set(cars.map((car) => car.brand.toUpperCase()));
  const newFilterItems = [...carBrands].map((brand, index) => ({
    id: filterItems.length + index + 1,
    name: brand,
    active: false,
  }));
  return newFilterItems;
};
