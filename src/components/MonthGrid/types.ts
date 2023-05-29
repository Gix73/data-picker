export interface MonthGridProps {
  dateArr: Array<Array<number | string>>;
  onClick: (newDate: Date) => void;
  date: Date;
  displayedDate: number;
}
