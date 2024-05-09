// reducers/actorsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  actors : localStorage.getItem('actors') ? JSON.parse(localStorage.getItem('actors')):null,
};

const actorsSlice = createSlice({
  name: 'actors',
  initialState,
  reducers: {
    // setActors: (state, action) => action.payload,
    addActor: (state, action) => {
      state.actors = action.payload;
      localStorage.setItem('actors', JSON.stringify(state.actors));
    },
    
  }
});

export const { addActor } = actorsSlice.actions;
export default actorsSlice.reducer;
