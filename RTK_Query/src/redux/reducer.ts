import { createSlice } from '@reduxjs/toolkit'
// Here we can give any number of reducers and forward them to the Store 
// Here is a sample reducer that doesn't do anything as in this example we are using an API
export const myreducer=createSlice({
    name:"myreducer",
    initialState:{},
    reducers:{},
})