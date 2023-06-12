import React, { useState, type FC } from "react";
import { Cell } from "./styled";
import { type MonthCellProps } from "./types";

const MonthCell: FC<MonthCellProps> = ({ month, monthName, onClick, date }) => {
  const [newMonth, setNewMonth] = useState(month);

  const handleClick = (): void => {
    const newDate = date.toLocaleDateString().split("/");
    newDate[0] = String(newMonth + 1);
    onClick(new Date(newDate.join("/")));
  };
  const checkCurrent = (): boolean => {
    return date.getMonth() === newMonth;
  };

  return (
    <Cell $isSelected={checkCurrent()} onClick={handleClick}>
      {monthName}
    </Cell>
  );
};

export default MonthCell;
