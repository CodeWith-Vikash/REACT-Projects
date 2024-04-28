import { configureStore } from "@reduxjs/toolkit";
import pekedata from './data/pokeSlice'

export const store=configureStore({
    reducer:pekedata
})