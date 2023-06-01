import React, { useState, type FC } from "react";
import { AddButton, Input, InputWrapper } from "./styled";
import { type InputTodoProps } from "./types";

const InputTodo: FC<InputTodoProps> = ({ onAdd }) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newTodo = e.target.value;
    setTodo(newTodo);
  };

  const handleClick = (): void => {
    if (todo) {
      onAdd(todo);
      setTodo("");
    }
  };

  return (
    <InputWrapper>
      <Input placeholder="Add todo" value={todo} onChange={handleChange} />
      <AddButton onClick={handleClick}>Add</AddButton>
    </InputWrapper>
  );
};

export default InputTodo;
