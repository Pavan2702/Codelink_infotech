import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const myApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: `https://fakestoreapi.com/`, // Update baseUrl here
    }),
    endpoints: (builder) => ({
        getData: builder.query({ query: () => "users" }), // Update endpoint configuration here
    }),
});

export const { useGetDataQuery } = myApi;
