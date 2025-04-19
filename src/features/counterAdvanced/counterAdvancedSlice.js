import { createSlice } from "@reduxjs/toolkit";

const counterAdvancedSlice = createSlice({
    name: "counterAdvanced",
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        },
    },
});

export const { increment, reset, incrementByAmount } = counterAdvancedSlice.actions;
export default counterAdvancedSlice.reducer;