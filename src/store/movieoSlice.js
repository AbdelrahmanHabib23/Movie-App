import { createSlice } from "@reduxjs/toolkit";

// Corrected initialState variable name
const initialState = {
  bannerData: [], // Corrected casing for bannerData
  imageURL: "",
};

export const movieoSlice = createSlice({
  name: "movieo",
  initialState, // Use the corrected initialState variable
  reducers: {
    setBannerData: (state, action) => {
      state.bannerData = action.payload; // Corrected casing for bannerData
    },
    setImageURL: (state, action) => {
      state.imageURL = action.payload;
    },
  },
});

// Export the action
export const { setBannerData ,  setImageURL} = movieoSlice.actions;

// Export the reducer
export default movieoSlice.reducer;
