import { apiSlice } from "./apiSlice";
import { PRODUCERS_URl } from "../constants";

export const producerApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        addProducer: builder.mutation({
            query: (producer)=>({
                url:`${PRODUCERS_URl}`,
                method : "POST",
                body : {...producer}, 
            }),
        }),
    })
})

export const {useAddProducerMutation} = producerApiSlice
