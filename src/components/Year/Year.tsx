import React, { useState, type FC } from "react";
import { Cell } from "./styled";
import { type YearProps } from "./types";

const Year: FC<YearProps> = ({ year, date, onClick }) => {
  const [newYear, setNewYear] = useState(year);

  const handleClick = (): void => {
    const newDate = date.toLocaleDateString().split("/");
    newDate[2] = String(newYear);
    onClick(new Date(newDate.join("/")));
  };

  const checkCurrent = (): boolean => {
    return date.getFullYear() === newYear;
  };

  return (
    <Cell $isSelected={checkCurrent()} onClick={handleClick}>
      {newYear}
    </Cell>
  );
};

export default Year;
