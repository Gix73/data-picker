export interface CalendarProps {
  date: Date;
  onChange: (newDate: Date) => void;
}

export interface IDateState {
  current: Date | number | null;
  month: number;
  year: number;
}
