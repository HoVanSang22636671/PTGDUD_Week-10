import { configureStore } from "@reduxjs/toolkit";
import couterReducer from '../features/counter/counterSlice'
import todoReducer from '../features/todos/todosSlice';
import themeReducer from '../features/theme/themeSlice';
import cartReducer from '../features/cart/cartSlice';

export const store = configureStore({
    reducer: {
        counter: couterReducer,
        todos: todoReducer,
        theme: themeReducer,
        cart: cartReducer,
    },
});