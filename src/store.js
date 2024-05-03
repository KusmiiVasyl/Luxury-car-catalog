import { create } from "zustand";
import axios from "axios";
import { URL } from "./constants/index";

export const useStore = create((set, get) => ({
  activeHeaderSlideIcon: false,
  handleToggleActiveHeaderSlideIcon: () =>
    set((state) => ({
      activeHeaderSlideIcon: !state.activeHeaderSlideIcon,
    })),
  favoriteCars: [],
  addCarToFavorites: (car) => {
    set((state) => ({ favoriteCars: [...state.favoriteCars, car] }));
  },
  removeCarFromFavorites: (id) => {
    set((state) => ({
      favoriteCars: state.favoriteCars.filter((car) => car.id !== id),
    }));
  },
  carsInGarage: [],
  addCarToGarage: (car) => {
    if (get().carsInGarage.includes(car)) return;
    set((state) => ({ carsInGarage: [...state.carsInGarage, car] }));
  },
  removeCarFromGarage: (id) => {
    set((state) => ({
      carsInGarage: state.carsInGarage.filter((car) => car.id !== id),
    }));
  },
}));

// get data from api
const initialState = {
  loading: false,
  success: false,
  error: false,
  cars: [],
  filterOptions: [{ id: 1, value: "ALL", label: "ALL" }],
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
          filterOptions: [
            ...get().filterOptions,
            ...handleCarsFIlterItems(res.data, get().filterOptions),
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

const handleCarsFIlterItems = (cars, filterOptions) => {
  const carBrands = [...new Set(cars.map((car) => car.brand))];
  carBrands.sort((a, b) => a.localeCompare(b));
  const newFilterItems = carBrands.map((brand, index) => ({
    id: filterOptions.length + index + 1,
    value: brand.toUpperCase(),
    label: brand.toUpperCase(),
  }));
  return newFilterItems;
};
