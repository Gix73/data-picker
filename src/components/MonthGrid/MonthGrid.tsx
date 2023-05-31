import React, { useMemo, type FC } from "react";
import { Grid } from "./styled";
import Day from "../Day/Day";
import Colors from "../../constants/colors";
import Borders from "../../constants/borders";
import { type MonthGridProps } from "./types";

const MonthGrid: FC<MonthGridProps> = ({
  dateArr,
  onClick,
  date,
  displayedDate,
  minDate,
  maxDate,
}) => {
  const monthDateArr = useMemo(
    () => dateArr.map((e, i) => new Date(e.join("/"))),
    [dateArr]
  );

  return (
    <Grid>
      {monthDateArr.map((e, i) => {
        return (
          <Day
            date={e}
            textColor={Colors.BLACK}
            bgColor={Colors.WHITE}
            borderRadius={Borders.DEFAULT}
            onClick={onClick}
            selectedDate={date}
            displayedDate={displayedDate}
            minDate={minDate}
            maxDate={maxDate}
            key={e.toDateString()}
          />
        );
      })}
    </Grid>
  );
};

export default MonthGrid;
