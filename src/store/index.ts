import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import componentSlice from "./Components";
import user from "./user";
import usersSlice from "./user"

const persistConfig = {
  key: '@users',
  storage,
}

const persistedReducer = persistReducer(persistConfig, usersSlice);

export const store = configureStore({
  reducer: {
    componentSlice,
    persistedReducer
  }
  });

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

