import { createSlice } from "@reduxjs/toolkit";

const createFavorites = createSlice({
  name: "createFavorites",
  initialState: {
    favoritPage: [],
    star: true,
  },
  reducers: {
    setFaforiteFilm(state, action) {
      state.favoritPage.push(action.payload);
      state.star = false;
    },
  },
});

export const { setFaforiteFilm } = createFavorites.actions;

export default createFavorites.reducer;
