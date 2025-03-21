import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/CartSlice"

export const store1 = configureStore({
    reducer:{
        cart: cartReducer,
    }
})