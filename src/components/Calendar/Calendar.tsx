import React, { useState, type FC, useEffect, useMemo } from "react";
import {
  CalendarControlsWrapper,
  CalendarWrapper,
  DayCell,
  DaysWrapper,
  Img,
  ImgWrapper,
  Title,
} from "./styled";

import prev from "../../assets/Prev.svg";
import next from "../../assets/Next.svg";
import { type CalendarProps } from "./types";
import { isDate } from "../../utils/helpers/calendarHelper";
import { DefaultCalendar } from "../../utils/decorators/DefaultCalendar";
import MonthGrid from "../MonthGrid/MonthGrid";
import { CALENDAR_MONTHS, WEEK_DAYS } from "../../constants/date";
import { SettingsDecorator } from "../../utils/decorators/SettingsDecorator";

const Calendar: FC<CalendarProps> = ({
  currentDate,
  onChange,
  minDate,
  maxDate,
  showWeekends,
  weekStart,
  withTodo,
  type,
}) => {
  const [calendar, setCalendar] = useState(
    new SettingsDecorator().setCalendarSettings({
      minDate,
      maxDate,
      showWeekends,
      weekStart,
      withTodo,
      type,
    })
  );

  const [dateState, setDateState] = useState(calendar.getDateInfo(currentDate));

  useEffect(() => {
    const decoratedCalendar = new SettingsDecorator().setCalendarSettings({
      minDate,
      maxDate,
      showWeekends,
      weekStart,
      withTodo,
      type,
    });
    setCalendar(decoratedCalendar);
  }, [minDate, maxDate, showWeekends, weekStart, withTodo, type]);

  // const addDateToState = (current: Date): void => {
  //   const isDateObject = isDate(current);
  //   const curDate = isDateObject ? current : new Date();
  //   setDateState({
  //     date: curDate,
  //     month: +curDate.getMonth() + 1,
  //     year: curDate.getFullYear(),
  //   });
  // };

  // useEffect(() => {
  //   setDateState({
  //     month: currentDate.getMonth() + 1,
  //     year: currentDate.getFullYear(),
  //   });
  // }, [currentDate]);

  const monthname = useMemo(
    () =>
      Object.keys(CALENDAR_MONTHS)[
        Math.max(0, Math.min(dateState.month - 1, 11))
      ],
    [dateState]
  );

  const handlePrevious = (): void => {
    const prevDate = calendar.getPrevious(dateState);

    if (minDate) {
      if (
        prevDate.month <=
          (typeof minDate === "object"
            ? minDate.getMonth()
            : new Date(minDate).getMonth()) &&
        prevDate.year <=
          (typeof minDate === "object"
            ? minDate.getFullYear()
            : new Date(minDate).getFullYear())
      ) {
        return;
      }
    }
    setDateState(prevDate);
  };

  const handleNext = (): void => {
    const nextDate = calendar.getNext(dateState);

    if (maxDate) {
      if (
        nextDate.month - 1 >
          (typeof maxDate === "object"
            ? maxDate.getMonth()
            : new Date(maxDate).getMonth()) &&
        nextDate.year >=
          (typeof maxDate === "object"
            ? maxDate.getFullYear()
            : new Date(maxDate).getFullYear())
      ) {
        return;
      }
    }
    setDateState(nextDate);
  };

  const getCalendarDates = (): Array<Array<string | number>> => {
    // debugger;
    // const { date, month, year } = dateState;
    // const calendarMonth = month || +date.getMonth() + 1;
    // const calendarYear = year || date.getFullYear();

    return calendar.getDateArr(dateState);
    // return calendar.getDateArr(calendarMonth, calendarYear);
  };

  const getDaysOfTheWeek = (): React.JSX.Element[] => {
    const arr = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
    if (calendar.weekStart === "mo") {
      return arr.map((e, i) => {
        return <DayCell key={e}>{e}</DayCell>;
      });
    }

    return Object.values(WEEK_DAYS).map((e, i) => {
      return <DayCell key={e}>{e}</DayCell>;
    });
  };

  return (
    <CalendarWrapper>
      <CalendarControlsWrapper>
        <ImgWrapper onClick={handlePrevious}>
          <Img src={prev} alt="prev" />
        </ImgWrapper>
        <Title>
          {monthname} {dateState.year}
        </Title>
        <ImgWrapper onClick={handleNext}>
          <Img src={next} alt="next" />
        </ImgWrapper>
      </CalendarControlsWrapper>
      <DaysWrapper>{getDaysOfTheWeek()}</DaysWrapper>
      <MonthGrid
        date={currentDate}
        displayedDate={dateState.month}
        dateArr={getCalendarDates()}
        onClick={onChange}
        minDate={calendar.minDate}
        maxDate={calendar.maxDate}
        showWeekends={calendar.showWeekends}
      />
    </CalendarWrapper>
  );
};

export default Calendar;
