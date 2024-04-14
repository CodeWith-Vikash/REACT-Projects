import axios from "axios"
import {createContext, useState } from "react";



export const Aicontext=createContext(null)

export const ContextProvider=({children})=>{
   const [data, setdata] = useState("")
   const [isloading, setisloading] = useState(false)
   const [response, setresponse] = useState(false)
   const getdata=async (userinput)=>{
      console.log("working");
      setresponse(false)
      setisloading(true)
      const apiresponse=await axios({
         url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyCIffrDiK1_HHoP-wql0oLbgXc6302TkDA",
         method:"post",
         data:{"contents":[{"parts":[{"text":`${userinput}`}]}]}
      })
      setdata(apiresponse.data.candidates[0].content.parts[0].text)
       setisloading(false)
       setresponse(true)
      console.log(apiresponse);
   }
   return <Aicontext.Provider value={{data,getdata,isloading,response}}>{children}</Aicontext.Provider>
}
