import {createContext} from "react";
import useToggle from "../hooks/useToggleState";

export const ThemeContext = createContext();

export const ThemeProvider = (props) =>{
    const [isDarkMode, toggle] = useToggle(false);

    return (
        <ThemeContext.Provider value={{isDarkMode, toggle}}>
            {props.children}
        </ThemeContext.Provider>
        );

}