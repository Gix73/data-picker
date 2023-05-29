import React, { type FC } from "react";
import { Grid } from "./styled";
import Day from "../Day/Day";
import Colors from "../../constants/colors";
import Borders from "../../constants/borders";
import { type MonthGridProps } from "./types";

const MonthGrid: FC<MonthGridProps> = ({ dateArr }) => {
  return (
    <Grid>
      {dateArr.map((e) => {
        return (
          <Day
            date={e[2]}
            textColor={Colors.BLACK}
            bgColor={Colors.WHITE}
            borderRadius={Borders.DEFAULT}
            handleClick={() => {
              console.log("clicked");
            }}
          />
        );
      })}
    </Grid>
  );
};

export default MonthGrid;
