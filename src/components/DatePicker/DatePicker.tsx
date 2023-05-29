import React, { useState, type FC } from "react";
import { Span, Wrapper } from "./styled";
import { Global } from "../../styles/globalStyled";
import ChooseDate from "../ChooseDate/ChooseDate";
import Calendar from "../Calendar/Calendar";

const DatePicker: FC = () => {
  const [date, setDate] = useState(new Date());

  const handleChange = (newDate: Date): void => {
    setDate(newDate);
  };

  return (
    <>
      <Global />
      <Wrapper>
        <Span>Calendar</Span>
        <ChooseDate
          handleChange={handleChange}
          date={date.toLocaleDateString("en-GB")}
        />
        <Calendar date={date} onChange={setDate} />
      </Wrapper>
    </>
  );
};

export default DatePicker;
