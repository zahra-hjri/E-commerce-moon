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
}

interface CrmState {
  Customers: Customer[];
  Carts: Cart[];
  FavoritProducts:FavoritProduct[]
}

const initialState: CrmState = {
  Customers: [],
  Carts: [],
  FavoritProducts:[]
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
    addToFavorit:(state,action: PayloadAction<FavoritProduct>)=>{
      state.FavoritProducts.push(action.payload)
    }
  },
});

export const { addCustomer, setCustomers, addToCart,addToFavorit } = crmSlice.actions;
export default crmSlice.reducer;
