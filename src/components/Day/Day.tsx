import React, { useState, type FC, memo } from "react";
import { Data, DayWrapper } from "./styled";
import { isSameDay } from "../../utils/helpers/calendarHelper";
import ToDo from "../ToDo/ToDo";
import { type DayPropsI } from "./types";
import { getItemFromLocalStorage } from "../../utils/helpers/localStorage";
import { type ToDoState } from "../ToDo/types";

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

  const handlePopup = (): void => {
    setShowPopup(!showPopup);
  };

  const handleClick = (): void => {
    let isValid;
    if (minDate && maxDate) {
      isValid =
        date.getTime() >=
          (typeof minDate === "object"
            ? minDate.getTime()
            : new Date(minDate).getTime()) &&
        date.getTime() <=
          (typeof maxDate === "object"
            ? maxDate.getTime()
            : new Date(maxDate).getTime());
    }
    if (isValid) {
      onClick(date);
      // handlePopup();
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
        $haveTodo={haveTodo.length > 0}
      >
        <Data>{date.getDate()}</Data>
      </DayWrapper>
      {showPopup && <ToDo date={date} onShow={handlePopup} />}
    </>
  );
};

export default Day;
