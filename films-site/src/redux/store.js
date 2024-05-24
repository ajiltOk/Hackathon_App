import { configureStore } from "@reduxjs/toolkit";
import { filmsApi } from "./filmsApi";
import idReduser from "./slices/sliceSearchById";
import favoritePageReduser from "./slices/sliceFavorites";

export const store = configureStore({
  reducer: {
    [filmsApi.reducerPath]: filmsApi.reducer,
    id: idReduser,
    favoriteFilms: favoritePageReduser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmsApi.middleware),
});
