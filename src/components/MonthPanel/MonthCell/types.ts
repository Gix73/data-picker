export interface MonthCellProps {
  month: number;
  monthName: string;
  onClick: (date: Date) => void;
  date: Date;
}
