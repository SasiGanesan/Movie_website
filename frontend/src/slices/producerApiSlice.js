// reducers/producersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  producers:localStorage.getItem ('producers')? JSON.parse (localStorage.getItem('producers')):null,
};


const producersSlice = createSlice({
  name: 'producers',
  initialState,
  reducers: {
    addProducer: (state, action) => {
     state.producers = action.payload;
     localStorage.setItem('producers', JSON.stringify(state.producers));
    },
    // 
  }
});

export const { addProducer } = producersSlice.actions;
export default producersSlice.reducer;
