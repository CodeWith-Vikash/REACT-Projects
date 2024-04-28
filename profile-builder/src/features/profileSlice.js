import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState= {cards:[]}

export const ProfileSlice=createSlice({
    name:"profile",
    initialState,
    reducers:{
        addProfile:(state,action)=>{
            state.cards.push(action.payload)
        },
        removeProfile:(state,action)=>{
            state.cards=state.cards.filter((card)=> card.id!=action.payload)
        }
    }
})

export const {addProfile,removeProfile} = ProfileSlice.actions

export default ProfileSlice.reducer