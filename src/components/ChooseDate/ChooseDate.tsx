import React, { useEffect, useState } from "react";
import { type FC } from "react";
import { Container, Input } from "./styled";
import { type ChooseDateProps } from "./types";
import { isDateValid } from "../../utils/helpers/calendarHelper";

const ChooseDate: FC<ChooseDateProps> = ({
  handleChange,
  date,
  minDate,
  maxDate,
}) => {
  const [inputValue, setInputValue] = useState(date);

  useEffect(() => {
    setInputValue(date);
  }, [date]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let inputStr = e.target.value;
    if (!inputStr.match(/^[0-9|/]*$/)) {
      return;
    }

    if (inputStr.match(new RegExp(`${inputValue}\\d`, "g"))) {
      if (inputStr.length === 2 || inputStr.length === 5) {
        inputStr += "/";
      }
    }

    setInputValue(inputStr);

    if (isDateValid(inputStr)) {
      const newDate = inputStr.replace(/(\d+[/])(\d+[/])/, "$2$1");
      const updatedDate = new Date(newDate);
      let isValid;
      if (minDate && maxDate) {
        isValid =
          updatedDate.getTime() >=
            (typeof minDate === "object"
              ? minDate.getTime()
              : new Date(minDate).getTime()) &&
          updatedDate.getTime() <=
            (typeof maxDate === "object"
              ? maxDate.getTime()
              : new Date(maxDate).getTime());
      }
      if (isValid) {
        handleChange(new Date(newDate));
      } else {
        console.log("date is not valid");
      }
    }
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="Choose Date"
        value={inputValue}
        maxLength={10}
        onChange={onChange}
      />
    </Container>
  );
};

export default ChooseDate;
