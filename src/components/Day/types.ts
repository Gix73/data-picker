export interface DayPropsI {
  date: Date;
  textColor: string;
  bgColor: string;
  borderRadius: string;
  selectedDate: Date;
  displayedDate: number;
  width?: string;
  height?: string;
  minDate?: Date | null;
  maxDate?: Date | null;
  startDate?: Date | null;
  endDate?: Date | null;
  showWeekends?: boolean;
  holidays?: Array<{ month: number; day: number }>;
  defaultColor?: string;
  holidayColor?: string;
  onClick: (newDate: Date) => void;
}
