import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Basic Syntax of using Redux toolkit Query
export const myApi = createApi({
  reducerPath: "myApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  tagTypes:["Posts"], // If we not given this tags we need to reload the page to view the added Elements this tags will couple the functions such that if this function had executed then this Function should be Executed
  endpoints: (builder) => ({
    // query(builder.query) is used for GET Requests only
    getPosts: builder.query<Post[], void>({
      query: () => "posts",
      providesTags:["Posts"]
    }),
    // mutation(builder.mutation) is used for PUT,PATCH,... 
    newPost: builder.mutation<Post, Post>({
      query: (post) => ({
        url: "posts",
        method: "POST",
        body: post,
      }),
      invalidatesTags:["Posts"], // Linking this Function using tags
    }),
  }),
});

export const { useGetPostsQuery, useNewPostMutation } = myApi;
