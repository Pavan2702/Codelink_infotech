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
    deleteData: builder.mutation<void, string>({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"],
    }),
    addData: builder.mutation<UserData, Partial<UserData>>({
      query: (newData) => {
        console.log("🚀 ~ newData:", newData);
        return {
          url: `users`,
          method: "POST",
          body: newData,
          headers: { "Content-type": "application/json" }
        };
      },
      invalidatesTags: ["Posts"],
    }),
    updateData: builder.mutation<void, UserData>({
      query: (newData) => ({
        url: `users/${newData.id}`,
        method: "PUT",
        body: newData,
        headers: { "Content-type": "application/json" },
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

// Destructure and export the generated hooks with correct types
export const {
  useDataOfApiQuery,
  useDeleteDataMutation,
  useAddDataMutation,
  useUpdateDataMutation,
} = ApiSlice;
