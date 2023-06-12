import React, { type FC } from "react";
import { type YearPanelProps } from "./types";
import { YEARS } from "../../constants/date";
import { Grid } from "./styed";
import Year from "../Year/Year";

const YearPanel: FC<YearPanelProps> = ({ onClick, date, onShow }) => {
  const generateGrid = (): React.JSX.Element[] => {
    return YEARS.map((e) => <Year onClick={onClick} date={date} year={e} />);
  };

  return <Grid onClick={onShow}>{generateGrid()}</Grid>;
};

export default YearPanel;
