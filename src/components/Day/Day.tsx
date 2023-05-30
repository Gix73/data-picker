import React, { type FC } from "react";
import { Data, DayWrapper } from "./styled";
import { isSameDay } from "../../utils/helpers/calendarHelper";

export interface DayPropsI {
  date: Date;
  textColor: string;
  bgColor: string;
  borderRadius: string;
  selectedDate: Date;
  displayedDate: number;
  width?: string;
  height?: string;
  handleClick: (newDate: Date) => void;
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
  handleClick,
}: DayPropsI) => {
  const isSelected = isSameDay(date, selectedDate);
  const isCurrentMonth = date.getMonth() === displayedDate - 1;
  const isWeekday = date.getDay() === 0 || date.getDay() === 6;
  return (
    <DayWrapper
      onClick={() => {
        handleClick(date);
      }}
      $bgColor={bgColor}
      $borderRadius={borderRadius}
      $textColor={textColor}
      $isSelected={isSelected}
      $isCurrentMonth={isCurrentMonth}
      $isWeekday={isWeekday}
    >
      <Data>{date.getDate()}</Data>
    </DayWrapper>
  );
};

export default Day;
