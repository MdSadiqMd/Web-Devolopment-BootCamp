import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todo.js";

export const store = configureStore({
    reducer: {
        todo: todoReducer,
    }
});
