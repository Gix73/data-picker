import React, { type FC } from "react";
import "./button.css"; // 👈new addition

export interface ButtonProps {
  label: string;
  handleClick: () => void;
}
const Button: FC<ButtonProps> = ({ label, handleClick }: ButtonProps) => (
  <button type="button" className="btn" onClick={handleClick}>
    {label}
  </button>
);

export default Button;
