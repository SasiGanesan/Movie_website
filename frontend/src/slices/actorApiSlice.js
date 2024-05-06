// reducers/actorsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const actorsSlice = createSlice({
  name: 'actors',
  initialState: [],
  reducers: {
    // setActors: (state, action) => action.payload,
    addActor: (state, action) => {
      state.push(action.payload);
    },
    
  }
});

export const { addActor } = actorsSlice.actions;
export default actorsSlice.reducer;
