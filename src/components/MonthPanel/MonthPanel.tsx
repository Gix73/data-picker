import React, { type FC } from "react";
import { Grid } from "./styled";
import { CALENDAR_MONTHS } from "../../constants/date";
import { type MonthPanelProps } from "./types";
import MonthCell from "./MonthCell/MonthCell";

const MonthPanel: FC<MonthPanelProps> = ({ onClick, date, onShow }) => {
  const generateGrid = (): React.JSX.Element[] => {
    return Object.values(CALENDAR_MONTHS).map((e, i) => (
      <MonthCell onClick={onClick} date={date} month={i} monthName={e} />
    ));
  };

  return <Grid onClick={onShow}>{generateGrid()}</Grid>;
};

export default MonthPanel;
