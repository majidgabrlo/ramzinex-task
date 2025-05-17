import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Localization = "en" | "fa";

interface LocalizationState {
  localization: Localization;
}

const initialState: LocalizationState = {
  localization: (localStorage.getItem("lang") as "fa") || "fa",
};

const localizationSlice = createSlice({
  name: "localization",
  initialState,
  reducers: {
    setLocale(state, action: PayloadAction<Localization>) {
      state.localization = action.payload;
      localStorage.setItem("lang", action.payload);
    },
  },
});

export const { setLocale } = localizationSlice.actions;
export default localizationSlice.reducer;
