import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});

const rootReducer = (state, action) => {
  if (action.type === "RESET_ALL") {
    state = undefined; // reset all slices
  }
  return store(state, action);
};

export default rootReducer;