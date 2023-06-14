import React, { type FC } from "react";
import { Arrow, MonthSelect, PanelWrapper, YearSelect } from "./styled";
import { type YearPanelProps } from "./types";
import arrow from "@/assets/arrow.svg";

const YearControls: FC<YearPanelProps> = ({
  month,
  year,
  onMonthShow,
  onYearsShow,
}) => {
  return (
    <PanelWrapper>
      <MonthSelect onClick={onMonthShow}>
        {month}
        <Arrow src={arrow} alt="arrow" />
      </MonthSelect>
      <YearSelect onClick={onYearsShow}>
        {year}
        <Arrow src={arrow} alt="arrow" />
      </YearSelect>
    </PanelWrapper>
  );
};

export default YearControls;
