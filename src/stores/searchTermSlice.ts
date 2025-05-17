import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface SearchTermState {
  searchTerm: string;
}

const initialState: SearchTermState = {
  searchTerm: "",
};

const searchTermSlice = createSlice({
  name: "searchTerm",
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = searchTermSlice.actions;
export default searchTermSlice.reducer;
