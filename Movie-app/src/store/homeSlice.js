import { createSlice } from "@reduxjs/toolkit";


export const homeSlice=createSlice({
    name:"home",
    initialState:{
        url:{},
        genres:{},
        details:{}
    },
    reducers:{
        getApiConfiguration:(state,action)=>{
            state.url=action.payload
        },
        getGenres:(state,action)=>{
            state.genres=action.payload
        },
        setDetails:(state,action)=>{
            state.details=action.payload
        }
    }
})

export const {getApiConfiguration,getGenres,setDetails} =homeSlice.actions

export default homeSlice.reducer