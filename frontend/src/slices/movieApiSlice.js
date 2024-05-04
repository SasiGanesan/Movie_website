import { apiSlice } from "./apiSlice";
import { MOVIES_URL } from "../constants";

export const movieApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        createMovie : builder.mutation({
            query :(movie)=>({
                url : `${MOVIES_URL}`,
                method : "POST",
                body : {...movie},
            }),
        }),

        getAllMovies:builder.query({
            query :()=>({
                url : `${MOVIES_URL}`,
            }),
            keepUnusedDataFor : 5,
        }),
    }),
})

export const {useCreateMovieMutation,useGetAllMoviesQuery}=movieApiSlice