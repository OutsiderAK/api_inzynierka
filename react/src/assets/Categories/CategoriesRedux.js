import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "privatecategories",
  initialState: {
    categories: [],
    category:0,
  },
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
  },
});

export const { addCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;