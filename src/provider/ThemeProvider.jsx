import { ThemeContext } from "../context/ThemeContext"
import { useState } from "react"
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(prefersDarkMode);
  const themeToogle = () =>{
     setTheme(!theme);
  }
  return (
    <ThemeContext.Provider value ={{theme,themeToogle}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
