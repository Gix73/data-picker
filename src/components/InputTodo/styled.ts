import { styled } from "styled-components";

export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 6fr 2fr;
  align-items: center;
  width: 100%;
  height: 30px;
  gap: 20px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  border: 1px solid #dddddd;
  border-radius: 8px;
  height: 30px;
  padding-left: 10px;
  font-size: 10px;
`;

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  outline: none;
  align-items: center;
  cursor: pointer;
  height: 30px;
  border-radius: 8px;
  font-size: 10px;
`;
