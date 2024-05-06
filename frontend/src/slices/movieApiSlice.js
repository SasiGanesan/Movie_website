// reducers/moviesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: [],
  reducers: {
    createMovie: (state, action) => {
        state.push(action.payload);
      },
    getAllMovies: (state, action) => action.payload,
    
//
  }
});

export const { createMovie ,getAllMovies} = moviesSlice.actions;
export default moviesSlice.reducer;
