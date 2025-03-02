import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartReducer";

const store = configureStore({
  reducer: {
    Cart: CartReducer,
  },
});

export default store;
