import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [],
};

export const fetchCars = createAsyncThunk("fetch/cars", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4090/cars");

    const cars = await res.json();

    if (cars.error) {
      return thunkAPI.rejectWithValue(cars.error);
    }

    return thunkAPI.fulfillWithValue(cars);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: (builder) => {},
  extraReducers: (builder) => {
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.cars = action.payload;
    });
  },
});

export default carsSlice.reducer;
