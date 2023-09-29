// For react redux
import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../14_features/todo/todoSlice';

export const store=configureStore({
    reducer: todoReducer
})