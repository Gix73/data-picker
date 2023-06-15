import React, { type FC } from "react";
import { ButtonS } from "./styled";

export interface ButtonProps {
  label: string;
  color: string;
  handleClick: () => void;
}

const Button: FC<ButtonProps> = ({
  label,
  handleClick,
  color,
}: ButtonProps) => (
  <ButtonS type="button" onClick={handleClick} $bgColor={color}>
    {label}
  </ButtonS>
);

export default Button;
