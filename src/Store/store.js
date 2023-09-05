// store.js

import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice'; // Import your dataSlice
import cartReducer from './cartSlice';
import checkoutReducer from './checkoutSlice'
import searchReducer from './searchSlice'
const store = configureStore({
  reducer: {
    data: dataReducer, // Add your dataReducer here
    cart: cartReducer, // Add your cartReducer here
    checkout: checkoutReducer, // Add your checkoutReducer here
    search: searchReducer,
  },
});

export default store;
