import { createSlice } from "@reduxjs/toolkit";

const createFavorites = createSlice({
  name: "createFavorites",
  initialState: {
    favoritePage: [],
  },
  reducers: {
    setFaforiteFilm(state, action) {
      let favorite = []
      if(state.favoritePage.length > 0) {
        state.favoritePage.forEach(film => {
          if(film.kinopoiskId === action.payload.kinopoiskId) {
            favorite.push(film.kinopoiskId)
          }
        })
      } 
      
      if(favorite.length === 0 || state.favoritePage.length === 0) state.favoritePage.push(action.payload)
    },
    deleteFaforiteFilm(state, action) {
      state.favoritePage = state.favoritePage.filter(film => film.kinopoiskId !== action.payload);
    },
  },
});

export const { setFaforiteFilm, deleteFaforiteFilm } = createFavorites.actions;

export default createFavorites.reducer;
