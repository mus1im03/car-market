import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

export const fetchCategories = createAsyncThunk("fetch/category", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4090/categories");

    const categories = await res.json();

    if (categories.error) {
      return thunkAPI.rejectWithValue(categories.error);
    }

    return thunkAPI.fulfillWithValue(categories);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: (builder) => {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default categorySlice.reducer;
