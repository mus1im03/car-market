import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  services: [],
};

export const fetchService = createAsyncThunk(
  "fetch/fetchService",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4090/service");

      const service = await res.json();

      if (service.error) {
        return thunkAPI.rejectWithValue(service.error);
      }

      return thunkAPI.fulfillWithValue(service);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const postService = createAsyncThunk(
  "post/postService",
  async ({ petition_reason,  name, phone, vin, year, model  }, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:4090/service", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ petition_reason, name, phone, vin, year, model  }),
      });

      if (!response.ok) {
        throw new Error("Не удалось сделай запрос" + error.message);
      }

      const newService = await response.json();
      return newService;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const serviceSlice = createSlice({
  name: "service",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchService.fulfilled, (state, action) => {
        state.services = action.payload;
      })
      .addCase(postService.fulfilled, (state, action) => {
        state.services.push(action.payload);
      });
  },
});

export default serviceSlice.reducer;