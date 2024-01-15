import { createContext, useState } from "react";

export const themeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [darkTheme,setDarkTheme] = useState(false)
    return (<themeContext.Provider value={{darkTheme,setDarkTheme}}>
        {children}
    </themeContext.Provider>)
}
