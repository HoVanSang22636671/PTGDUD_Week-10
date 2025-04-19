import { createSlice } from "@reduxjs/toolkit";

const bmiSlice = createSlice({
    name: "bmi",
    initialState: {
        weight: "",   // in kg
        height: "",   // in cm
        result: null, // BMI value
    },
    reducers: {
        updateInput: (state, action) => {
            const { field, value } = action.payload;
            state[field] = value;
        },
        calculateResult: (state) => {
            const weight = parseFloat(state.weight);
            const height = parseFloat(state.height) / 100; // convert to meters

            if (weight > 0 && height > 0) {
                state.result = (weight / (height * height)).toFixed(2);
            } else {
                state.result = null;
            }
        },
    },
});

export const { updateInput, calculateResult } = bmiSlice.actions;
export default bmiSlice.reducer;
