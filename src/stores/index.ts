import { configureStore } from '@reduxjs/toolkit'
import localizationSlice from './localizationSlice'

export const store = configureStore({
  reducer: {
    locale: localizationSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch