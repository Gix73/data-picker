import React, { type FC } from "react";
import "./button.css"; // 👈new addition
import { ButtonS } from "./styled";

export interface ButtonProps {
  label: string;
  handleClick: () => void;
}
const Button: FC<ButtonProps> = ({ label, handleClick }: ButtonProps) => (
  <ButtonS type="button" onClick={handleClick}>
    {label}
  </ButtonS>
  // <button type="button" className="btn" onClick={handleClick}>
  //   {label}
  // </button>
);

export default Button;
