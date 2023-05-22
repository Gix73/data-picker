import React from "react";
import "./button.css" // 👈new addition

export interface ButtonProps{
    label: string,
    handleClick: () => void
}
const Button = ({label, handleClick}: ButtonProps) => {
    // btn class added 👇👇
    return <button className="btn" onClick={handleClick}>{label}</button>
}

export default Button;