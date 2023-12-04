import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  offers: [],
};

export const fetchOffers = createAsyncThunk(
  "fetch/offers",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4090/offer");

      const categories = await res.json();

      if (categories.error) {
        return thunkAPI.rejectWithValue(categories.error);
      }

      return thunkAPI.fulfillWithValue(categories);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const postNewOffer = createAsyncThunk(
  "offers/postNewOffer",
  async ({ name, surname, phone }, thunkAPI) => {
    try {
      const response = await fetch("/api/offers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, surname, phone }),
      });

      if (!response.ok) {
        throw new Error("Не удалось сделай запрос" + error.message);
      }

      const newOffer = await response.json();
      return newOffer;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const categorySlice = createSlice({
  name: "offers",
  initialState,
  reducers: (builder) => {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
      })
      .addCase(postNewOffer.fulfilled, (state, action) => {
        state.data.push(action.payload);
      });
  },
});

export default categorySlice.reducer;
