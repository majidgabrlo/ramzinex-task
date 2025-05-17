import { configureStore } from "@reduxjs/toolkit";
import localizationSlice from "./localizationSlice";
import { getPairs } from "../services/getPairs";
import { publicRamzinexApi } from "../services/publicRamzinex";

export const store = configureStore({
  reducer: {
    locale: localizationSlice,
    [getPairs.reducerPath]: getPairs.reducer,
    [publicRamzinexApi.reducerPath]: publicRamzinexApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(getPairs.middleware)
      .concat(publicRamzinexApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
