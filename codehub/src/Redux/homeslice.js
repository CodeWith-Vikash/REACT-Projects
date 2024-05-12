import { createSlice } from "@reduxjs/toolkit";

const initialState={home:{isdark:true}}

const Mainslice=createSlice({
    name:"home",
    initialState,
    reducers:{
        toggle:(state,action)=>{
            if(state.home.isdark){
                document.body.style.backgroundColor='white'
                document.querySelector('nav').style.backgroundColor='white'
                document.querySelector('nav').style.color='black'
                document.querySelector('.subnav').style.backgroundColor='rgba(253, 251, 251,0.3)'
                document.querySelector('.blur').style.background=`linear-gradient(
                  180deg,
                  rgba(255, 255, 255,0) 0%,
                   #ffffff 50.17%
              )`
                document.body.querySelectorAll('a').forEach((item)=>{
                  item.style.color='black'
                })
                document.body.style.color='black'
              }else{
                document.body.style.backgroundColor='var(--bg)'
                document.querySelector('nav').style.backgroundColor='var(--bg)'
                document.querySelector('nav').style.color='white'
                document.querySelector('.subnav').style.backgroundColor='rgba(0,0,0,0.5)'
                document.querySelector('.blur').style.background=` linear-gradient(
                  180deg,
                  rgba(11, 22, 37, 0) 0%,
                  rgb(11, 22, 37) 50.17%
              )
              `
                document.body.querySelectorAll('a').forEach((item)=>{
                  item.style.color='white'
                })
                document.body.style.color='white'
              }
              state.home.isdark=!state.home.isdark
        }
    }
})


export const  {toggle} =Mainslice.actions
export default Mainslice.reducer