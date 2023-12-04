import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  konstruktor: [],
};

export const fetchKonstruktorCar = createAsyncThunk("fetch/konstruktor", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4090/konstruktor");

    const carKonstruktor = await res.json();

    if (carKonstruktor.error) {
      return thunkAPI.rejectWithValue(carKonstruktor.error);
    }

    return thunkAPI.fulfillWithValue(carKonstruktor);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const postCarKonstruktor = createAsyncThunk(
  "create/car",
  async ({ name, img, engineType, price, description }, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4090/konstruktor`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, img, engineType, price, description }),
      });

      if (!res.ok) {
        return thunkAPI.rejectWithValue("error");
      }

      const createCar = await res.json();
      return createCar;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const carKonstruktorSlice = createSlice({
  name: "konstruktor",
  initialState,
  reducers: (builder) => {},
  extraReducers: (builder) => {
    builder.addCase(fetchKonstruktorCar.fulfilled, (state, action) => {
      state.konstruktor = action.payload;
    });
    builder.addCase(postCarKonstruktor.fulfilled, (state, action) => {
      state.konstruktor.push(action.payload);
    });
  },
});

export default carKonstruktorSlice.reducer;