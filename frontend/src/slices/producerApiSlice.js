// reducers/producersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const producersSlice = createSlice({
  name: 'producers',
  initialState: [],
  reducers: {
    // setProducers: (state, action) => action.payload,
    addProducer: (state, action) => {
      state.push(action.payload);
    },
    // 
  }
});

export const { addProducer } = producersSlice.actions;
export default producersSlice.reducer;
