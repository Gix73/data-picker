export function getNumberOfMonthDays(month: number, year: number): number {
  const months30 = [4, 6, 9, 11];
  const leapYear = year % 4 === 0;
  if (month === 2) {
    if (leapYear) {
      return 29;
    }
    return 28;
  }
  if (months30.includes(month)) {
    return 30;
  }
  return 31;
}

export function zeroPad(value: number, length: number = 2): string {
  return `${value}`.padStart(length, "0");
}

export function getMonthFirstDay(month: number, year: number): number {
  return new Date(`${year}-${zeroPad(month, 2)}-01`).getDay() + 1;
}

export function isDate(date: Date): boolean {
  const isDateType = Object.prototype.toString.call(date) === "[object Date]";
  const isValidDate = date && !Number.isNaN(date.valueOf());

  return isDateType && isValidDate;
}

export function isSameMonth(date: Date, basedate: Date = new Date()): boolean {
  if (!(isDate(date) && isDate(basedate))) return false;
  const basedateMonth = +basedate.getMonth() + 1;
  const basedateYear = basedate.getFullYear();
  const dateMonth = +date.getMonth() + 1;
  const dateYear = date.getFullYear();
  return +basedateMonth === +dateMonth && +basedateYear === +dateYear;
}

export function isSameDay(date: Date, basedate: Date = new Date()): boolean {
  if (!(isDate(date) && isDate(basedate))) return false;
  const basedateDate = basedate.getDate();
  const basedateMonth = +basedate.getMonth() + 1;
  const basedateYear = basedate.getFullYear();
  const dateDate = date.getDate();
  const dateMonth = +date.getMonth() + 1;
  const dateYear = date.getFullYear();
  return (
    +basedateDate === +dateDate &&
    +basedateMonth === +dateMonth &&
    +basedateYear === +dateYear
  );
}

export function getFormatedDate(date: Date = new Date()): string | null {
  if (!isDate(date)) return null;
  return [
    date.getFullYear(),
    zeroPad(+date.getMonth() + 1, 2),
    zeroPad(+date.getDate(), 2),
  ].join("/");
}

export function isDateValid(inputStr: string): boolean {
  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!dateRegex.test(inputStr)) {
    return false;
  }
  return true;
}

export function isDateLess(firstDate: Date, secondDate: Date): boolean {
  const fDate = typeof firstDate === "object" ? firstDate : new Date(firstDate);
  const sDate =
    typeof secondDate === "object" ? secondDate : new Date(secondDate);

  return fDate.getTime() <= sDate.getTime();
}

export function isDateGreater(firstDate: Date, secondDate: Date): boolean {
  const fDate = typeof firstDate === "object" ? firstDate : new Date(firstDate);
  const sDate =
    typeof secondDate === "object" ? secondDate : new Date(secondDate);

  return fDate.getTime() >= sDate.getTime();
}

export function getCurrentWeekNumber(
  date: Date,
  month: number,
  year: number
): number {
  return Math.ceil((date.getDate() + getMonthFirstDay(month, year)) / 7) - 1;
}
