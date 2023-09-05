// checkoutSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  item: null, // Initial state for the checkout item
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setCheckoutItem: (state, action) => {
      state.item = action.payload;
    },
  },
});

export const { setCheckoutItem } = checkoutSlice.actions;
export default checkoutSlice.reducer;
