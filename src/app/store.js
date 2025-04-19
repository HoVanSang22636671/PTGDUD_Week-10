import { configureStore } from "@reduxjs/toolkit";
import couterReducer from '../features/counter/counterSlice'
import todoReducer from '../features/todos/todosSlice';

export const store = configureStore({
    reducer: {
        counter: couterReducer,
        todos: todoReducer,
    },
});