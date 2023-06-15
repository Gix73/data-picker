import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ToDo from "./ToDo";

describe("InputTodo", () => {
  it("should call show func", () => {
    const onClick = jest.fn();
    render(<ToDo date={new Date()} onShow={onClick} />);
    fireEvent.click(screen.getByText("Close"));
    expect(onClick).toBeCalledTimes(1);
  });

  it("should input ToDo text", () => {
    const onClick = jest.fn();
    render(<ToDo date={new Date()} onShow={onClick} />);
    const input = screen.getByPlaceholderText("Add todo");
    fireEvent.change(input, { target: { value: "some todo" } });
    expect(input).toHaveValue("some todo");
  });
});
