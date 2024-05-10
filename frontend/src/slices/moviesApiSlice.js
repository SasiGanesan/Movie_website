import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import Axios from 'axios';

export const fetchData = createAsyncThunk('get', async () => {
    const response = await Axios.get(`http://www.omdbapi.com/?i=${fetchData.imdbID}&apikey=33c0a7ea`);
    return response.data;
})

const initialState = {
    movies:[],
    loading:false,
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers:{},
    extraReducers : (builder)=>{
        builder
            .addCase(fetchData.pending,(state,action)=>{
                state.loading = true;
            })
            .addCase(fetchData.fulfilled, (state,action) => {
                state.loading = false;
                state.news =action.payload;
            })
            .addCase(fetchData.rejected, (state,action) => {
                state.loading = false;
            });
    }
})

export default movieSlice.reducer;