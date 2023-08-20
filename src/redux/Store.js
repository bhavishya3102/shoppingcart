import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartSlice";


export const store=configureStore({
    reducer:{
        cart:cartSlice
    }
})

// import { configureStore } from '@reduxjs/toolkit'
// import { combineReducers } from 'redux'
// import cartSlice from './Slices/cartSlice';
// const reducer = combineReducers({
//   // here we will be adding reducers
// })
// export const store = configureStore({
//   reducer,
//   cart: cartSlice,
// })
