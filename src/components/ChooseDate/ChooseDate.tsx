import React, { useState } from "react";
import { type FC } from "react";
import { Container, Input } from "./styled";
import { type ChooseDateProps } from "./types";
import { isDateValid } from "../../utils/helpers/calendarHelper";

const ChooseDate: FC<ChooseDateProps> = ({ handleChange, date }) => {
  const [inputValue, setInputValue] = useState(date);

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
      handleChange(new Date(newDate));
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
