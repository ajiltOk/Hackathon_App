import { configureStore } from "@reduxjs/toolkit";
import { filmsApi } from "./filmsApi";
import idReduser from "./slices/sliceSearchById";

export const store = configureStore({
  reducer: {
    [filmsApi.reducerPath]: filmsApi.reducer,
    id: idReduser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmsApi.middleware),
});
