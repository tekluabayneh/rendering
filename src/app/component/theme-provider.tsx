"use client"
import {createContext,useContext } from "react"

type Theme ={
 colors:{
  primary:string,
 seconday: string
	}
}

const DefaultTheme:Theme ={
colors:{
 primary:"#007bff",
 seconday:"#fc757d"
}
}

const ThemeContext = createContext<Theme>(DefaultTheme)

const ThemeProvider = ({ children }: { children: React.ReactNode })=> {
  return (
	<ThemeContext.Provider value={DefaultTheme}>
        {children}
      </ThemeContext.Provider>
  );
}
export default  ThemeProvider
export const useTheme =  () => useContext(ThemeContext)
