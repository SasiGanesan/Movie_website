import { apiSlice } from "./apiSlice";
import { ACTORS_URL } from "../constants";

export const actorApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        addActor: builder.mutation({
            query: (actor)=>({
                url:`${ACTORS_URL}`,
                method : "POST",
                body : {...actor}, 
            }),
        }),
    })
})

export const {useAddActorMutation} = actorApiSlice
