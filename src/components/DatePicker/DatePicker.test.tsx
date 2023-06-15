import React from "react";
import { getByTestId, render, fireEvent, screen } from "@testing-library/react";
import DatePicker from "./DatePicker";

describe("DatePicker", () => {
  it("should have chooseDate input", () => {
    const onChange = jest.fn();
    const { container } = render(<DatePicker onChange={onChange} />);
    const input = getByTestId(container, "chooseDate");
    expect(input).toBeInTheDocument();
  });

  it("should open calendar", () => {
    const onChange = jest.fn();
    const { container } = render(<DatePicker onChange={onChange} />);
    const button = getByTestId(container, "calendarBtn");
    fireEvent.click(button);
    const calendar = getByTestId(container, "calendar");
    expect(calendar).toBeInTheDocument();
  });

  it("should have current date on render", () => {
    const onChange = jest.fn();
    const { container } = render(<DatePicker onChange={onChange} />);
    const button = getByTestId(container, "calendarBtn");
    fireEvent.click(button);
    const calendar = getByTestId(container, "calendar");
    expect(calendar).toBeInTheDocument();
    fireEvent.click(button);
    expect(calendar).not.toBeInTheDocument();
  });

  it("should change month using buttons", () => {
    const onChange = jest.fn();
    const { container } = render(<DatePicker onChange={onChange} />);
    const button = getByTestId(container, "calendarBtn");
    fireEvent.click(button);
    const prevButton = screen.getByTestId("prevbtn");
    fireEvent.click(prevButton);
    expect(screen.getByTestId("datetitle").textContent).toBe("May 2023");
    const nextButton = screen.getByTestId("nextbtn");
    fireEvent.click(nextButton);
    expect(screen.getByTestId("datetitle").textContent).toBe("June 2023");
  });

  it("should change date", () => {
    const onChange = jest.fn();
    render(
      <DatePicker
        onChange={onChange}
        minDate={new Date(2023, 4, 6)}
        maxDate={new Date(2023, 7, 20)}
      />
    );
    const button = screen.getByTestId("calendarBtn");
    fireEvent.click(button);
    const input = screen.getByTestId("chooseDate");
    fireEvent.change(input, { target: { value: "07/05/2023" } });
    expect(screen.getByTestId("datetitle").textContent).toBe("May 2023");
  });
});
