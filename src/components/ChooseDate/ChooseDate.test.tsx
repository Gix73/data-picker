import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ChooseDate from "./ChooseDate";

describe("ChooseDate", () => {
  it("should have seted date", () => {
    const date = new Date().toLocaleDateString("en-GB");
    const onChange = jest.fn();
    render(
      <ChooseDate
        handleChange={onChange}
        date={date}
        handleShow={onChange}
        minDate={new Date(2023, 6, 6)}
        maxDate={new Date(2023, 7, 20)}
      />
    );
    const input = screen.getByTestId("chooseDate");
    expect(input).toHaveValue(date);
  });

  it("should have call function", () => {
    const date = new Date().toLocaleDateString("en-GB");

    const handleChange = jest.fn();
    const onChange = jest.fn();

    render(
      <ChooseDate
        handleChange={handleChange}
        date={date}
        handleShow={onChange}
        minDate={new Date(2023, 4, 6)}
        maxDate={new Date(2023, 7, 20)}
      />
    );
    const input = screen.getByTestId("chooseDate");
    fireEvent.change(input, { target: { value: "07/06/2023" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("should not call function", () => {
    const date = new Date().toLocaleDateString("en-GB");
    let currentDate = new Date();
    function handleChange(newDate: Date): void {
      currentDate = newDate;
    }
    const onChange = jest.fn();

    render(
      <ChooseDate
        // eslint-disable-next-line react/jsx-no-bind
        handleChange={handleChange}
        date={date}
        handleShow={onChange}
        minDate={new Date(2023, 4, 6)}
        maxDate={new Date(2023, 7, 20)}
      />
    );
    const input = screen.getByTestId("chooseDate");
    fireEvent.change(input, { target: { value: "07/06/2023" } });
    expect(currentDate.toLocaleDateString("en-GB")).toBe("07/06/2023");
  });
});
