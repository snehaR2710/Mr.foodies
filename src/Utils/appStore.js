import { configureStore } from "@reduxjs/toolkit";
import cartReducers from '../Utils/cartSlice';


const appStore = configureStore({
    reducer: {
        cart: cartReducers,
    }
});


export {appStore};