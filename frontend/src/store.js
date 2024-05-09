import { configureStore } from "@reduxjs/toolkit";
import {apiSlice} from './slices/apiSlice'
import authSliceReducer from "./slices/authSlice";
import actorsSliceReducer from './slices/actorApiSlice'
import movieSlice from './slices/moviesApiSlice'
import producersSliceReducer from './slices/producerApiSlice'

const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
            auth : authSliceReducer,
            actors : actorsSliceReducer,
            movies : movieSlice,
            producers : producersSliceReducer,
    },
    middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true,
})

export default store
