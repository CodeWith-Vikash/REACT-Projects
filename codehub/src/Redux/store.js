import { configureStore } from "@reduxjs/toolkit";
import mainReducer from './homeslice'

export const store = configureStore({
    reducer:{
        mainReducer
    }
})