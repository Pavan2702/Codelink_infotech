import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://65f7bfe1b4f842e80885efc4.mockapi.io/",
  }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    dataOfApi: builder.query<UserData[], string>({
      query: () => "users",
      providesTags: ["Posts"],
    }),
  }),
});

// Destructure and export the generated hooks with correct types
export const {
  useDataOfApiQuery,
} = ApiSlice;
