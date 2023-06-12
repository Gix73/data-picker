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
import {
  getCurrentWeekNumber,
  isDate,
} from "../../utils/helpers/calendarHelper";
import { DefaultCalendar } from "../../utils/decorators/DefaultCalendar";
import MonthGrid from "../MonthGrid/MonthGrid";
import { CALENDAR_MONTHS, WEEK_DAYS } from "../../constants/date";
import { SettingsDecorator } from "../../utils/decorators/SettingsDecorator";
import YearControls from "../YearControls/YearPanel";
import MonthPanel from "../MonthPanel/MonthPanel";
import YearPanel from "../YearPanel/YearPanel";

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
  const [showPopup, setShowPopup] = useState(false);
  const [showYear, setShowYear] = useState(false);

  const handleMonth = (): void => {
    setShowPopup(!showPopup);
    setShowYear(false);
  };

  const handleYear = (): void => {
    setShowYear(!showYear);
    setShowPopup(false);
  };

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
    setDateState(decoratedCalendar.getDateInfo(currentDate));
  }, [minDate, maxDate, showWeekends, weekStart, withTodo, type]);

  useEffect(() => {
    setDateState(calendar.getDateInfo(currentDate));
  }, [currentDate]);

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
    return calendar.getDateArr(dateState);
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
        {type === "year" ? (
          <YearControls
            month={monthname}
            year={dateState.year}
            onMonthShow={handleMonth}
            onYearsShow={handleYear}
          />
        ) : (
          <>
            <ImgWrapper onClick={handlePrevious}>
              <Img src={prev} alt="prev" />
            </ImgWrapper>
            <Title>
              {monthname} {dateState.year}
            </Title>
            <ImgWrapper onClick={handleNext}>
              <Img src={next} alt="next" />
            </ImgWrapper>
          </>
        )}
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
      {showPopup && (
        <MonthPanel
          onClick={onChange}
          onShow={handleMonth}
          date={currentDate}
        />
      )}
      {showYear && (
        <YearPanel onClick={onChange} onShow={handleYear} date={currentDate} />
      )}
    </CalendarWrapper>
  );
};

export default Calendar;
