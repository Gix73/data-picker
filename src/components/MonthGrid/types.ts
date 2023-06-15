export interface MonthGridProps {
  dateArr: Array<Array<number | string>>;
  onClick: (newDate: Date) => void;
  date: Date;
  displayedDate: number;
  minDate?: Date | null;
  maxDate?: Date | null;
  showWeekends?: boolean;
  startDate?: Date | null;
  endDate?: Date | null;
  holidays?: Array<{ month: number; day: number }>;
  defaultColor?: string;
  holidayColor?: string;
}
