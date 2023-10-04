import { configureStore } from "@reduxjs/toolkit";
import todoslice from "./slice/todo"

export const store =configureStore({
    reducer:{
        todo:todoslice
    }
})