import React from "react";
import { ReactComponent as Sun } from "../assets/img/Sun.svg";
import { ReactComponent as Moon } from "../assets/img/Moon.svg";
import "../styles/Darkmode.css";
import { useDarkMode } from "./DarkModeContext";

const DarkMode = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const handleClick=() =>{
        toggleDarkMode();
    }
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={handleClick}
                checked={darkMode}
                
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;