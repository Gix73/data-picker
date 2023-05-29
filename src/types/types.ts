export interface ICalendar {
  getPrevious: (month: number, year: number) => object;
  getNext: (month: number, year: number) => object;
  getDateArr: (month: number, year: number) => Array<Array<string | number>>;
}
