import { ApiUrl } from "@/config/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: 'api', // Slice name in the store
  baseQuery: fetchBaseQuery({ baseUrl:  ApiUrl }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (user)=>({
        url: '/login',
        method: 'POST',
        body: user
      }) //Endpoint to the api
    })
  })
});

export const { useLoginUserMutation } = apiSlice;
export default apiSlice.reducer;