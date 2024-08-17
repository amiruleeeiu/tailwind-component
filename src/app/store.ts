import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/app/appSlice";

export type RootState = {
  [apiSlice.reducerPath]: ReturnType<typeof apiSlice.reducer>;
  // Add other slices as needed
};

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  //   devTools:!process.env.NODE_ENV==='production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
