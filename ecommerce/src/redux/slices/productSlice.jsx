import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  category: [],
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    getCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { getProducts, getCategory } = productSlice.actions;

export default productSlice.reducer;
