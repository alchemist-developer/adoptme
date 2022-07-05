import { configureStore } from "@reduxjs/toolkit";
import componentSlice from "./Components";
import usersSlice from "./user"


export const store = configureStore({
  reducer: {
    componentSlice,
    usersSlice
  }
  });

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

