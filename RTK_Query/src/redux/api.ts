import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const myApi=createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3000/"
    }),
    endpoints:(builder)=>({
        // getPosts is basically we specify a route
        getPosts:builder.query<string,string>({ // Both Strings represents one the data type and one is query type
            query:()=> "posts"
        }),
    })
})

export const {useGetPostsQuery}=myApi