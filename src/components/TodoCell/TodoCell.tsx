import React, { type FC } from "react";
import { type TodoCellProps } from "./types";
import {
  CheckButton,
  DeleteButton,
  DeleteImg,
  Span,
  TodoContainer,
} from "./styled";
import trash from "../../assets/trash.svg";

const TodoCell: FC<TodoCellProps> = ({ todo, onCheck, onDelete }) => {
  const handleChange = (): void => {
    onCheck(todo.id);
  };
  const handleDelete = (): void => {
    onDelete(todo.id);
  };

  return (
    <TodoContainer>
      <CheckButton checked={todo.isChecked} onChange={handleChange} />
      <Span $isChecked={todo.isChecked}>{todo.value}</Span>
      <DeleteButton onClick={handleDelete}>
        <DeleteImg src={trash} alt="trash" />
      </DeleteButton>
    </TodoContainer>
  );
};

export default TodoCell;
