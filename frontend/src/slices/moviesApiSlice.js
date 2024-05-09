import {createSlice, createAsyncThunk, isRejected} from '@reduxjs/toolkit';
import Axios from 'axios';

export const fetchData = createAsyncThunk('get', async () => {
    const response = await Axios.get(' `https://www.omdbapi.com/?t=${data}&apikey=562f3089`');
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