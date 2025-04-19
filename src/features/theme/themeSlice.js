import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    them: 'light',
};

const themmeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
    },
});

export const { toggleTheme } = themmeSlice.actions;
export default themmeSlice.reducer;