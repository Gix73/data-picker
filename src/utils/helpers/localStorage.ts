import { type ToDoState } from "../../components/ToDo/types";

export const setItemToLocalStorage = (key: string, data: ToDoState[]): void => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getItemFromLocalStorage = (key: string): unknown => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return [];
};
