import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import YearControls from "./YearControls";

describe("InputTodo", () => {
  it("should set month and year", () => {
    const onClick = jest.fn();
    render(
      <YearControls
        month="June"
        year={2023}
        onMonthShow={onClick}
        onYearsShow={onClick}
      />
    );

    expect(screen.getByTestId("monthSelect").textContent).toBe("June");
    expect(screen.getByTestId("yearSelect").textContent).toBe("2023");
  });

  it("should call month and year funcs", () => {
    const onYearShow = jest.fn();
    const onMonthShow = jest.fn();
    render(
      <YearControls
        month="June"
        year={2023}
        onMonthShow={onMonthShow}
        onYearsShow={onYearShow}
      />
    );

    fireEvent.click(screen.getByTestId("monthSelect"));
    fireEvent.click(screen.getByTestId("yearSelect"));
    expect(onYearShow).toBeCalledTimes(1);
    expect(onMonthShow).toBeCalledTimes(1);
  });
});
