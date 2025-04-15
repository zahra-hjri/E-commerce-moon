import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Customer = {
  name: string;
  phone: string;
};

type Cart = {
  id: number;
  name: string;
  image: string;
  price: number;
};
type FavoritProduct = {
  id: number;
  name: string;
  image: string;
  price: number;
};

interface CrmState {
  Customers: Customer[];
  Carts: Cart[];
  FavoritProducts: FavoritProduct[];
  Counter: number;
}

const initialState: CrmState = {
  Customers: [],
  Carts: [],
  FavoritProducts: [],
  Counter: 0,
};

const crmSlice = createSlice({
  name: "crm",
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.Customers.push(action.payload);
    },
    setCustomers: (state, action: PayloadAction<Customer[]>) => {
      state.Customers = action.payload;
    },
    addToCart: (state, action: PayloadAction<Cart>) => {
      state.Carts.push(action.payload);
    },
    addToFavorit: (state, action: PayloadAction<FavoritProduct>) => {
      state.FavoritProducts.push(action.payload);
    },
    decrease: (state, action: PayloadAction<number>) => {
      state.Counter -= action.payload;
    },
    increase: (state, action: PayloadAction<number>) => {
      state.Counter += action.payload;
    },
    reset: (state, action: PayloadAction<number>) => {
      state.Counter = action.payload;
    },
  },
});

export const {
  addCustomer,
  setCustomers,
  addToCart,
  addToFavorit,
  decrease,
  increase,
  reset
} = crmSlice.actions;
export default crmSlice.reducer;
