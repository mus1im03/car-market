import { configureStore } from "@reduxjs/toolkit";
import cars from "../features/carsSlice";
import categories from "../features/categorySlice";
import konstruktor from "../features/carConstruktorSlice";
import service from "../features/serviceSlice";

export const store = configureStore({
  reducer: {
    cars,
    categories,
    konstruktor,
    service,
  },
});
