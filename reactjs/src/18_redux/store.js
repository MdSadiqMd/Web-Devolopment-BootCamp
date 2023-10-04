import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../14_features/todo/todoSlice";

export const store =configureStore({
    reducer:{
        todo:todoSlice
    }
})