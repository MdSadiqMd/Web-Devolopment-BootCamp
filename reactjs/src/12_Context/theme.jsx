import React,{createContext,useContext} from "react";

export const ThemeContext=createContext({
    themeMode:"light", // setting default theme Mode
    darkTheme:()=>{},
    lightTheme:()=>{}
})

// Creating and Exporting Provider unlike previous
export const ThemeProvider=ThemeContext.Provider
export default function useTheme(){
    return useContext(ThemeContext)
}