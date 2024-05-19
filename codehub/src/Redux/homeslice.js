import { createSlice } from "@reduxjs/toolkit";

const initialState={home:{isdark:false}}

const Mainslice=createSlice({
    name:"home",
    initialState,
    reducers:{
        toggle:(state,action)=>{
              state.home.isdark=!state.home.isdark
        }
    }
})


export const  {toggle} =Mainslice.actions
export default Mainslice.reducer