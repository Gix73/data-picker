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
  showWeekends?: boolean;
  onClick: (newDate: Date) => void;
}
