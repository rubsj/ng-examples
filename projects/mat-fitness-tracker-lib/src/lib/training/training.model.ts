import * as moment from 'moment';
export interface Excercise {
  id: string;
  name: string;
  duration: number;
  calories: number;
  date?: moment.Moment;
  state?: Status;
}

export enum Status {
  completed = 'completed',
  cancelled = 'cancelled',
}
