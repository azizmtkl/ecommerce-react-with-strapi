import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",

  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/api/`,
  }),

  endpoints: (builder) => ({
    getproductByName: builder.query({
      query: (name) => `${name}`,
    }),
    getProductByID: builder.query({
      query: (id) => `/products/${id}?populate=*`,
    }),
  }),
});

export const { useGetproductByNameQuery, useGetProductByIDQuery } = productApi;
