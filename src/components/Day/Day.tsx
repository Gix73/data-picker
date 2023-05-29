import React, { useState, type FC } from "react";
import { Data, DayWrapper } from "./styled";

export interface DayPropsI {
  date: string | number;
  textColor: string;
  bgColor: string;
  borderRadius: string;
  width?: string;
  height?: string;
  handleClick: () => void;
}

const Day: FC<DayPropsI> = ({
  date,
  textColor,
  bgColor,
  borderRadius,
  width,
  height,
  handleClick,
}: DayPropsI) => {
  return (
    <DayWrapper
      onClick={handleClick}
      $bgColor={bgColor}
      $borderRadius={borderRadius}
      $textColor={textColor}
    >
      <Data>{date}</Data>
    </DayWrapper>
  );
};

export default Day;
