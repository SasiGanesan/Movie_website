import { USERS_URL, MOVIES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),
    movies: builder.query({
      query: () => ({
        url: `${MOVIES_URL}`
      }),
      keepUnusedDataFor: 5,
    }),
    // 
    }),
  })
export const { useLoginMutation,useRegisterMutation, useMoviesQuery } = usersApiSlice;