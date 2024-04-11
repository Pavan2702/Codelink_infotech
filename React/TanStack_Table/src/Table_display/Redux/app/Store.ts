import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ApiSlice } from "../fetures/Apislice";

export const store = configureStore({
  reducer: {
    [ApiSlice.reducerPath]: ApiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiSlice.middleware),
  // middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ApiSlice.middleware],
});

setupListeners(store.dispatch);