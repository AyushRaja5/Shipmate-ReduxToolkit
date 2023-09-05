// searchSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  origin: '',
  destination: '',
  selectedDate: new Date(),
  load: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchInfo: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setSearchInfo } = searchSlice.actions;

export default searchSlice.reducer;
