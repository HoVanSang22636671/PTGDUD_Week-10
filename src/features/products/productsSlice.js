import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [
            { id: 1, name: "🍕 Pizza", price: 10 },
            { id: 2, name: "🍔 Burger", price: 8 },
        ],
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
    },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
