import React, { useState, type FC } from "react";
import { Span, Wrapper } from "./styled";
import { Global } from "@/styles/globalStyled";
import ChooseDate from "@/components/ChooseDate/ChooseDate";
import Calendar from "@/components/Calendar/Calendar";
import { type DatePickerProps } from "./types";
import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";

const DatePicker: FC<DatePickerProps> = ({
  type,
  minDate,
  maxDate,
  showWeekends,
  weekStart,
  withTodo,
  startDate,
  endDate,
  title,
  holidays,
  defaultColor,
  holidayColor,
  onChange,
}) => {
  const [date, setDate] = useState(new Date());
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = (): void => {
    setShowPopup(!showPopup);
  };

  const handleChange = (newDate: Date): void => {
    if (newDate.getTime() === date.getTime()) {
      return;
    }
    setDate(newDate);
    onChange(newDate);
  };

  return (
    <ErrorBoundary>
      <Global />
      <Wrapper>
        <Span>{title}</Span>
        <ChooseDate
          handleChange={handleChange}
          handleShow={handlePopup}
          date={date.toLocaleDateString("en-GB")}
          minDate={minDate}
          maxDate={maxDate}
          startDate={startDate}
          endDate={endDate}
        />
        {showPopup && (
          <Calendar
            currentDate={date}
            onChange={handleChange}
            minDate={minDate}
            maxDate={maxDate}
            startDate={startDate}
            endDate={endDate}
            showWeekends={showWeekends}
            weekStart={weekStart}
            withTodo={withTodo}
            type={type}
            holidays={holidays}
            defaultColor={defaultColor}
            holidayColor={holidayColor}
          />
        )}
      </Wrapper>
    </ErrorBoundary>
  );
};

export default DatePicker;
