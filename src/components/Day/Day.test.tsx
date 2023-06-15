import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "jest-styled-components";
import Day from "./Day";
import Colors from "@/constants/colors";
import Borders from "@/constants/borders";
import { HOLIDAYS } from "@/constants/date";

describe("Day", () => {
  it("should display current day", () => {
    const date = new Date();
    const onClick = jest.fn();
    render(
      <Day
        date={date}
        textColor={Colors.BLACK}
        bgColor={Colors.WHITE}
        borderRadius={Borders.DEFAULT}
        onClick={onClick}
        selectedDate={date}
        displayedDate={date.getMonth()}
        minDate={new Date(2023, 4, 6)}
        maxDate={new Date(2023, 7, 20)}
        showWeekends={false}
      />
    );
    const day = screen.getByTestId("day");
    expect(day).toHaveStyleRule("color", "#FFFFFF");
    expect(day).toHaveStyleRule("background-color", "#2F80ED");
  });

  it("should display day from other motnh", () => {
    const date = new Date("05/06/2023");
    const onClick = jest.fn();
    render(
      <Day
        date={date}
        textColor={Colors.BLACK}
        bgColor={Colors.WHITE}
        borderRadius={Borders.DEFAULT}
        onClick={onClick}
        selectedDate={new Date("06/06/2023")}
        displayedDate={date.getMonth()}
        minDate={new Date(2023, 4, 6)}
        maxDate={new Date(2023, 7, 20)}
        showWeekends={false}
      />
    );
    const day = screen.getByTestId("day");
    expect(day).toHaveStyleRule("color", "#AAAAAA");
    expect(day).toHaveStyleRule("background-color", "#FFFFFF");
  });

  it("should display holiday day", () => {
    const date = new Date("06/03/2023");
    const onClick = jest.fn();
    render(
      <Day
        date={date}
        textColor={Colors.BLACK}
        bgColor={Colors.WHITE}
        borderRadius={Borders.DEFAULT}
        onClick={onClick}
        holidays={HOLIDAYS}
        selectedDate={new Date("06/07/2023")}
        displayedDate={date.getMonth()}
        minDate={new Date(2023, 4, 6)}
        maxDate={new Date(2023, 7, 20)}
        showWeekends={false}
      />
    );
    const day = screen.getByTestId("day");
    expect(day).toHaveStyleRule("color", "#AAAAAA");
    expect(day).toHaveStyleRule("background-color", "#A6EC8782");
  });

  it("should display current day with custom color", () => {
    const date = new Date();
    const onClick = jest.fn();
    render(
      <Day
        date={date}
        textColor={Colors.BLACK}
        bgColor={Colors.WHITE}
        borderRadius={Borders.DEFAULT}
        onClick={onClick}
        selectedDate={date}
        displayedDate={date.getMonth()}
        minDate={new Date(2023, 4, 6)}
        maxDate={new Date(2023, 7, 20)}
        showWeekends={false}
        defaultColor="#AE18BF"
      />
    );
    const day = screen.getByTestId("day");
    expect(day).toHaveStyleRule("color", "#FFFFFF");
    expect(day).toHaveStyleRule("background-color", "#AE18BF");
  });

  it("should display todo", () => {
    const date = new Date();
    const onClick = jest.fn();
    render(
      <Day
        date={date}
        textColor={Colors.BLACK}
        bgColor={Colors.WHITE}
        borderRadius={Borders.DEFAULT}
        onClick={onClick}
        selectedDate={date}
        displayedDate={date.getMonth()}
        minDate={new Date(2023, 4, 6)}
        maxDate={new Date(2023, 7, 20)}
        showWeekends={false}
        defaultColor="#AE18BF"
      />
    );
    const day = screen.getByTestId("day");
    fireEvent.dblClick(day);
    expect(screen.getByText("Add")).toBeInTheDocument();
  });

  it("should close todo", () => {
    const date = new Date();
    const onClick = jest.fn();
    render(
      <Day
        date={date}
        textColor={Colors.BLACK}
        bgColor={Colors.WHITE}
        borderRadius={Borders.DEFAULT}
        onClick={onClick}
        selectedDate={date}
        displayedDate={date.getMonth()}
        minDate={new Date(2023, 4, 6)}
        maxDate={new Date(2023, 7, 20)}
        showWeekends={false}
        defaultColor="#AE18BF"
      />
    );
    const day = screen.getByTestId("day");
    fireEvent.dblClick(day);
    expect(screen.getByText("Add")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Close"));
    expect(day).toBeInTheDocument();
  });
});
