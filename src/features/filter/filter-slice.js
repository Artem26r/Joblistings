import { createSlice } from "@reduxjs/toolkit";

const filterSLice = createSlice({
  name: "@@filter",
  initialState: [],
  reducers: {
    addFilter: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    removeFilter: (state, action) => {
      return state.filter((item) => item !== action.payload);
    },
    clearFilter: () => [],
  },
});

export const { addFilter, removeFilter, clearFilter } = filterSLice.actions;

export const filterReducer = filterSLice.reducer;
export const selectFilters = (state) => state.filters;
