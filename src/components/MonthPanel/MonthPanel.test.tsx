import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import MonthPanel from "./MonthPanel";

describe("InputTodo", () => {
  it("should render months", () => {
    const onClick = jest.fn();
    render(<MonthPanel onClick={onClick} date={new Date()} onShow={onClick} />);
    const monthPanel = screen.getByTestId("monthPanel");
    expect(monthPanel.childNodes.length).toBe(12);
  });

  it("should call funcs", () => {
    const onClick = jest.fn();
    render(<MonthPanel onClick={onClick} date={new Date()} onShow={onClick} />);
    const monthPanel = screen.getByTestId("monthPanel");
    fireEvent.click(monthPanel.childNodes[0]);
    expect(onClick).toHaveBeenCalledTimes(2);
  });
});
