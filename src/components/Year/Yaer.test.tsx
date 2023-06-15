import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Year from "./Year";

describe("InputTodo", () => {
  it("should render year", () => {
    const onClick = jest.fn();
    render(<Year date={new Date()} year={2012} onClick={onClick} />);
    fireEvent.click(screen.getByText("2012"));
    expect(onClick).toBeCalledTimes(1);
  });
});
