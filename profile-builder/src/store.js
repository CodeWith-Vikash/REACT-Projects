import { configureStore } from "@reduxjs/toolkit";
import profileReducer from './features/profileSlice'






export const store=configureStore({
    reducer:profileReducer
})