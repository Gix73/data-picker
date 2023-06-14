import React, { useState, type FC } from "react";
import { Data, DayWrapper } from "./styled";
import {
  isDateGreater,
  isDateLess,
  isInRange,
  isSameDate,
  isSameDay,
} from "../../utils/helpers/calendarHelper";
import ToDo from "../ToDo/ToDo";
import { type DayPropsI } from "./types";
import { getItemFromLocalStorage } from "../../utils/helpers/localStorage";
import { type ToDoState } from "../ToDo/types";
import { HOLIDAYS } from "../../constants/date";

const Day: FC<DayPropsI> = ({
  date,
  textColor,
  bgColor,
  borderRadius,
  selectedDate,
  displayedDate,
  width,
  height,
  minDate,
  maxDate,
  endDate,
  startDate,
  showWeekends,
  onClick,
}: DayPropsI) => {
  const [showPopup, setShowPopup] = useState(false);
  const haveTodo = getItemFromLocalStorage(
    String(date.getTime())
  ) as ToDoState[];

  const isSelected = isSameDay(date, selectedDate);
  const isCurrentMonth = date.getMonth() === displayedDate - 1;
  const isWeekday =
    (date.getDay() === 0 || date.getDay() === 6) && showWeekends;
  const isHoliday = HOLIDAYS.reduce((acc, e): boolean => {
    if (e.day === date.getDate() && e.month === date.getMonth() + 1) {
      return true;
    }
    return acc;
  }, false);
  const isStartDate = isSameDate(date, startDate);
  const isEndDate = isSameDate(date, endDate);
  const isBetween = isInRange(startDate, endDate, date);

  const handlePopup = (): void => {
    setShowPopup(!showPopup);
  };

  const handleClick = (): void => {
    let isValid;
    if (minDate && maxDate) {
      isValid = isDateGreater(date, minDate) && isDateLess(date, maxDate);
    }
    if (isValid) {
      onClick(date);
    }
  };

  return (
    <>
      <DayWrapper
        onClick={handleClick}
        onDoubleClick={handlePopup}
        $bgColor={bgColor}
        $borderRadius={borderRadius}
        $textColor={textColor}
        $isSelected={isSelected}
        $isCurrentMonth={isCurrentMonth}
        $isWeekday={isWeekday}
        $isHoliday={isHoliday}
        $isStartDate={isStartDate}
        $isEndDate={isEndDate}
        $isBetween={isBetween}
        $haveTodo={haveTodo.length > 0}
      >
        <Data>{date.getDate()}</Data>
      </DayWrapper>
      {showPopup && <ToDo date={date} onShow={handlePopup} />}
    </>
  );
};

export default Day;
