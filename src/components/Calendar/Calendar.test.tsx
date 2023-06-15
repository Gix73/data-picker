import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Calendar from "./Calendar";

describe("Calendar", () => {
  it("should check first day as Su", () => {
    const onChange = jest.fn();
    render(
      <Calendar
        onChange={onChange}
        currentDate={new Date()}
        minDate={new Date(2023, 4, 6)}
        maxDate={new Date(2023, 7, 20)}
        weekStart="su"
      />
    );
    const weekDays = screen.getByTestId("weekdays");
    expect(weekDays.childNodes[0].textContent).toBe("Su");
  });

  it("should check first day as Mo", () => {
    const onChange = jest.fn();
    render(
      <Calendar
        onChange={onChange}
        currentDate={new Date()}
        minDate={new Date(2023, 4, 6)}
        maxDate={new Date(2023, 7, 20)}
        weekStart="mo"
      />
    );
    const weekDays = screen.getByTestId("weekdays");
    expect(weekDays.childNodes[0].textContent).toBe("Mo");
  });

  it("should check week calendar", () => {
    const onChange = jest.fn();
    render(
      <Calendar
        onChange={onChange}
        currentDate={new Date()}
        minDate={new Date(2023, 4, 6)}
        maxDate={new Date(2023, 7, 20)}
        type="week"
        weekStart="mo"
      />
    );
    const monthGrid = screen.getByTestId("monthgrid");
    expect(monthGrid.childNodes.length).toBe(7);
  });

  it("should check year calendar", () => {
    const onChange = jest.fn();
    render(
      <Calendar
        onChange={onChange}
        currentDate={new Date()}
        minDate={new Date(2023, 4, 6)}
        maxDate={new Date(2023, 7, 20)}
        type="year"
      />
    );
    const monthGrid = screen.getByTestId("monthgrid");
    expect(monthGrid.childNodes.length).toBe(42);

    expect(screen.getByTestId("yearSelect")).toBeInTheDocument();
    expect(screen.getByTestId("monthSelect")).toBeInTheDocument();
  });

  it("should check monthPanel in year calendar", () => {
    const onChange = jest.fn();
    render(
      <Calendar
        onChange={onChange}
        currentDate={new Date()}
        minDate={new Date(2023, 4, 6)}
        maxDate={new Date(2023, 7, 20)}
        type="year"
      />
    );
    const monthSelect = screen.getByTestId("monthSelect");
    fireEvent.click(monthSelect);
    expect(screen.getByTestId("monthPanel")).toBeInTheDocument();
  });

  it("should check yearPanel in year calendar", () => {
    const onChange = jest.fn();
    render(
      <Calendar
        onChange={onChange}
        currentDate={new Date()}
        minDate={new Date(2023, 4, 6)}
        maxDate={new Date(2023, 7, 20)}
        type="year"
      />
    );
    const yearSelect = screen.getByTestId("yearSelect");
    fireEvent.click(yearSelect);
    expect(screen.getByTestId("yearSelect")).toBeInTheDocument();
  });
});
