import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getStats = createAsyncThunk("covidInfo/getData", async () => {
  const res = await axios(`https://api.collectapi.com/corona/countriesData`, {
    headers: {
      "content-type": "application/json",
      authorization: `${process.env.REACT_APP_API_KEY}`,
    },
  });

  return res.data;
});

export const trackerSlice = createSlice({
  name: "tracker",
  initialState: {
    items: [],
    country: "",
    selected: "",
    status: "idle",
  },
  reducers: {
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getStats.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getStats.fulfilled, (state, action) => {
        console.log(action.payload);
        state.items = action.payload.result;
        state.status = "succeeded";

        // console.log(state.items);
      })
      .addCase(getStats.rejected, (state, action) => {
        state.status = "failed";

        console.log("rej");
      }),
});

export default trackerSlice.reducer;
export const { setCountry, setSelected } = trackerSlice.actions;
