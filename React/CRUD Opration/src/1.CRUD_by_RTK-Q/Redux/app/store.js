import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiData } from "../features/ApiSlice";
import { userSlice } from "../features/mutation";

export const store = configureStore({
  reducer: {
    [apiData.reducerPath]: apiData.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiData.middleware), // Import api.middleware
});

setupListeners(store.dispatch)