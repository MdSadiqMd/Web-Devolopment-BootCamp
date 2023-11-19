import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Action
export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return response.data;
})

// Slice
const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    extraReducers: (builder) => {
        // API Fetching (GET) is pending
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.isLoading = true;
        });
        // API Request fulfilled (Success)
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        // Request is rejected
        builder.addCase(fetchTodos.rejected, (state, action) => {
            state.isError = true;
            console.error("Error", action.error);
        });
    }
})

const todoReducer = todoSlice.reducer;

export default todoReducer;
