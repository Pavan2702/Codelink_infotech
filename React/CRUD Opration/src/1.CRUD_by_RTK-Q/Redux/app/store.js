import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiData } from "../fatures/fetchAPI";

export const store = configureStore({
  reducer: {
    [apiData.reducerPath]: apiData.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiData.middleware), // Import api.middleware
});

setupListeners(store.dispatch);
