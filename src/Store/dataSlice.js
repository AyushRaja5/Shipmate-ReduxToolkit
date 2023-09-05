// dataSlice.js

import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    shipcarddata: [], // Initialize shipcarddata as an empty array
  },
  reducers: {
    updateData: (state, action) => {
      state.shipcarddata = action.payload;
    },
  },
});

export const { updateData } = dataSlice.actions;
export default dataSlice.reducer;
