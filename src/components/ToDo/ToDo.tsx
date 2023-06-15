import React, { useEffect, useMemo } from "react";
import { useState, type FC } from "react";
import { CloseBtn, ListWrapper, ToDoWrapper } from "./styled";
import { type ToDoState, type ToDoProps } from "./types";
import InputTodo from "@/components/InputTodo/InputTodo";
import {
  getItemFromLocalStorage,
  setItemToLocalStorage,
} from "@/utils/helpers/localStorage";
import TodoCell from "@/components/TodoCell/TodoCell";

const ToDo: FC<ToDoProps> = ({ onShow, date }) => {
  const [todoList, setTodoList] = useState([] as ToDoState[]);

  useEffect(() => {
    const dataFromLC: ToDoState[] = getItemFromLocalStorage(
      String(date.getTime())
    ) as ToDoState[];
    setTodoList(dataFromLC);
  }, []);

  const handleShow = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    e.stopPropagation();
    onShow();
  };

  const handleSetTodoList = (todo: string): void => {
    const newTodo = {
      id: Date.now(),
      value: todo,
      isChecked: false,
    };
    const todoArr = [...todoList, newTodo];
    setTodoList(todoArr);
    setItemToLocalStorage(String(date.getTime()), todoArr);
  };

  const handleCheck = (todoId: number): void => {
    const todoArr = todoList.map((e) => {
      if (e.id === todoId) {
        e.isChecked = !e.isChecked;
      }
      return e;
    });
    setTodoList(todoArr);
    setItemToLocalStorage(String(date.getTime()), todoArr);
  };

  const handleDelete = (todoId: number): void => {
    const todoArr = todoList.filter((e) => e.id !== todoId);
    setTodoList(todoArr);
    setItemToLocalStorage(String(date.getTime()), todoArr);
  };

  const todos = useMemo(
    () =>
      todoList.map((e) => {
        return (
          <TodoCell
            key={e.id}
            todo={e}
            onCheck={handleCheck}
            onDelete={handleDelete}
          />
        );
      }),
    [todoList]
  );

  return (
    <ToDoWrapper>
      <CloseBtn onClick={handleShow}>Close</CloseBtn>
      <InputTodo onAdd={handleSetTodoList} />
      <ListWrapper>{todos}</ListWrapper>
    </ToDoWrapper>
  );
};

export default ToDo;
