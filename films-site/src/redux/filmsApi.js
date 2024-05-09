import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const filmsApi = createApi({
  reducerPath: "filmsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kinopoiskapiunofficial.tech/",
    headers: {
      "X-API-KEY": "311f6ed2-2da0-4a4e-bda9-3c31df66674a",
      "Content-Type": "application/json",
    },
  }),
  endpoints: (build) => ({
    getFilmsCollections: build.query({
      query: () => `/api/v2.2/films/collections`,
    }),
    getFilmsByKeyword: build.query({
      query: (keyword) =>
        `/api/v2.1/films/search-by-keyword?keyword=${keyword}`,
    }),
    getFilmById: build.query({
      query: (id) => `/api/v2.2/films/${id}`,
    }),
  }),
});

export const {
  useGetFilmsCollectionsQuery,
  useGetFilmsByKeywordQuery,
  useGetFilmByIdQuery,
} = filmsApi;
