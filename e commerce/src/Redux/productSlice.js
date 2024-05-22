import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        adddata: (state, action) => {
            return action.payload; 
        }
    }
});

export const { adddata } = productSlice.actions;

export default productSlice.reducer;
