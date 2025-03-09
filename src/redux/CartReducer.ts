import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer;
