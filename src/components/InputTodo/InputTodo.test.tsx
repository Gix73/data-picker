import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import InputTodo from "./InputTodo";

describe("InputTodo", () => {
  it("should call add todo func", () => {
    const onAdd = jest.fn();
    render(<InputTodo onAdd={onAdd} />);
    const button = screen.getByText("Add");
    const input = screen.getByPlaceholderText("Add todo");
    fireEvent.change(input, { target: { value: "some todo" } });
    fireEvent.click(button);
    expect(onAdd).toHaveBeenCalledTimes(1);
  });
});
