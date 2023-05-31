import React, { type FC } from "react";
import { Data, DayWrapper } from "./styled";
import { isSameDay } from "../../utils/helpers/calendarHelper";
import ToDo from "../ToDo/ToDo";

export interface DayPropsI {
  date: Date;
  textColor: string;
  bgColor: string;
  borderRadius: string;
  selectedDate: Date;
  displayedDate: number;
  width?: string;
  height?: string;
  minDate?: Date;
  maxDate?: Date;
  showWeekends?: boolean;
  onClick: (newDate: Date) => void;
}

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
  const isSelected = isSameDay(date, selectedDate);
  const isCurrentMonth = date.getMonth() === displayedDate - 1;
  const isWeekday =
    (date.getDay() === 0 || date.getDay() === 6) && showWeekends;

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
    }
  };

  return (
    <DayWrapper
      onClick={handleClick}
      $bgColor={bgColor}
      $borderRadius={borderRadius}
      $textColor={textColor}
      $isSelected={isSelected}
      $isCurrentMonth={isCurrentMonth}
      $isWeekday={isWeekday}
    >
      {/* <ToDo /> */}
      <Data>{date.getDate()}</Data>
    </DayWrapper>
  );
};

export default Day;
