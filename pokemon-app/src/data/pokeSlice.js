import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const fetchdata= createAsyncThunk("fetchdata",async()=>{
    let response=await fetch('https://pokeapi.co/api/v2/pokemon/')
    return response.json()
})

const pokeSlice=createSlice({
    name:'data',
    initialState:{
        isloading:false,
        iserror:false,
        data:null
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchdata.pending,(state,action)=>{
            state.isloading=true
        })

        builder.addCase(fetchdata.fulfilled,(state,action)=>{
            state.isloading=false
            state.data=action.payload
        })

        builder.addCase(fetchdata.rejected,(state,action)=>{
            state.iserror=true
        })
    }

    
})

export default pokeSlice.reducer