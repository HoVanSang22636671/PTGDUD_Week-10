import { configureStore } from "@reduxjs/toolkit";
import couterReducer from '../features/counter/counterSlice'
import todoReducer from '../features/todos/todosSlice';
import themeReducer from '../features/theme/themeSlice';
import cartReducer from '../features/cart/cartSlice';
import authReducer from '../features/auth/authSlice';
import usersReducer from '../features/users/usersSlice';
import counterAdvancedReducer from '../features/counterAdvanced/counterAdvancedSlice';
import bmiReducer from '../features/bmi/bmiSlice';

export const store = configureStore({
    reducer: {
        counter: couterReducer,
        todos: todoReducer,
        theme: themeReducer,
        cart: cartReducer,
        auth: authReducer,
        users: usersReducer,
        counterAdvanced: counterAdvancedReducer,
        bmi: bmiReducer,
    },
});