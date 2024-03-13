// import { configureStore } from '@reduxjs/toolkit'
// import { setupListeners } from '@reduxjs/toolkit/query'
// import { myApi } from '../features/API/Api'

// export const store = configureStore({
//   reducer: {
//     // Add the generated reducer as a specific top-level slice
//     [myApi.reducerPath]: myApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(myApi.middleware),
// })

// // optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// // see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch)