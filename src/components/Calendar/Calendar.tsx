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

const Calendar: FC<CalendarProps> = ({
  date,
  onChange,
  minDate,
  maxDate,
  showWeekends,
  weekStart,
}) => {
  const [calendar, setCalendar] = useState(new DefaultCalendar());

  const [dateState, setDateState] = useState({
    current: date,
    month: 0,
    year: 0,
  });

  const addDateToState = (currentDate: Date): void => {
    const isDateObject = isDate(currentDate);
    const curDate = isDateObject ? currentDate : new Date();
    setDateState({
      current: curDate,
      month: +curDate.getMonth() + 1,
      year: curDate.getFullYear(),
    });
  };

  useEffect(() => {
    addDateToState(date);
  }, [date]);

  const getCalendarDates = (): Array<Array<string | number>> => {
    const { current, month, year } = dateState;
    const calendarMonth = month || +current.getMonth() + 1;
    const calendarYear = year || current.getFullYear();
    return calendar.getDateArr(calendarMonth, calendarYear);
  };

  const monthname = useMemo(
    () =>
      Object.keys(CALENDAR_MONTHS)[
        Math.max(0, Math.min(dateState.month - 1, 11))
      ],
    [dateState]
  );

  const handlePrevious = (): void => {
    const prevDate = calendar.getPrevious(dateState.month, dateState.year);

    if (minDate) {
      if (
        prevDate.month <=
        (typeof minDate === "object"
          ? minDate.getMonth()
          : new Date(minDate).getMonth())
      ) {
        return;
      }
    }
    setDateState({
      current: dateState.current,
      month: prevDate.month,
      year: prevDate.year,
    });
  };

  const handleNext = (): void => {
    const nextDate = calendar.getNext(dateState.month, dateState.year);

    if (maxDate) {
      if (
        nextDate.month - 1 >
        (typeof maxDate === "object"
          ? maxDate.getMonth()
          : new Date(maxDate).getMonth())
      ) {
        return;
      }
    }
    setDateState({
      current: dateState.current,
      month: nextDate.month,
      year: nextDate.year,
    });
  };

  const getDaysOfTheWeek = (): React.JSX.Element[] => {
    const arr = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
    if (weekStart === "mo") {
      calendar.weekStart = "mo";
      return arr.map((e, i) => {
        return <DayCell key={e}>{e}</DayCell>;
      });
    }
    calendar.weekStart = "su";
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
        date={date}
        displayedDate={dateState.month}
        dateArr={getCalendarDates()}
        onClick={onChange}
        minDate={minDate}
        maxDate={maxDate}
        showWeekends={showWeekends}
      />
    </CalendarWrapper>
  );
};

export default Calendar;
