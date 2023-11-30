import { configureStore } from "@reduxjs/toolkit";
import cars from "../features/carsSlice";
import categories from "../features/categorySlice";

export const store = configureStore({
  reducer: {
    cars,
    categories,
  },
});
