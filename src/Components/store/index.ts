import { configureStore } from "@reduxjs/toolkit";
import componentSlice from "./Components";


export const store = configureStore({
  reducer: {
    componentSlice,
  }
  });

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

