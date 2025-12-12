import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQty: 0,
  totalPrice: 0,
};

/* Helper function to update totals */
const updateTotals = (state) => {
  state.totalQty = state.cartItems.reduce((sum, item) => sum + item.qty, 0);
  state.totalPrice = state.cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    /* ---------------- ADD TO CART ---------------- */
    addToCart: (state, action) => {
      const item = action.payload;
      // console.log('item: ', item);
      const existingItem = state.cartItems.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.cartItems.push({ ...item, qty: 1 });
      }

      updateTotals(state);
    },

    /* ---------------- INCREMENT QTY ---------------- */
    incrementQty: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((i) => i.id === id);

      if (item) {
        item.qty += 1;
      }

      updateTotals(state);
    },

    /* ---------------- DECREMENT QTY ---------------- */
    decrementQty: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((i) => i.id === id);

      if (item && item.qty > 1) {
        item.qty -= 1;
      } else {
        // If qty becomes 0, remove from cart
        state.cartItems = state.cartItems.filter((i) => i.id !== id);
      }

      updateTotals(state);
    },

    /* ---------------- REMOVE ITEM ---------------- */
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
      updateTotals(state);
    },

    /* OPTIONAL: CLEAR CART */
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQty = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  incrementQty,
  decrementQty,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
