
import { createContext, useState } from "react";

export const ThemeContext=createContext()


export const Themeprovider=({children})=>{
    const [isdark, setisdark] = useState(false)
    const toggleTheme=()=>{
        setisdark(!isdark)
    }

    return <ThemeContext.Provider value={{isdark,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
}