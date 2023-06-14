import { styled } from "styled-components";

interface InputProps {
  $isValid: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 42px;
  padding: 0 8px;
  border: 1px solid #dddddd;
  border-radius: 8px;
`;

export const Input = styled.input<InputProps>`
  width: 100%;
  border: none;
  outline: none;
  /* color: ${(props) => (props.$isValid ? "black" : "red")}; */
`;

export const Button = styled.button`
  width: 16px;
  height: 16px;
  border: none;
  background: transparent;
  object-fit: cover;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 100%;
  &:hover {
    transform: scale(1.1);
  }
`;
