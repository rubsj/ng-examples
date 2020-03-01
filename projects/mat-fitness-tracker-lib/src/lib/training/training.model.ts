import * as moment from 'moment';
export interface Excercise {
  id: string;
  name: string;
  duration: number;
  calories: number;
  date?: Date;
  state?: Status;
}

export enum Status {
  completed = 'completed',
  cancelled = 'cancelled',
}

export enum PastTrainingsColumns {
  Start_Date = 'Start Date',
  Name = 'Name',
  Calories = 'Calories',
  Duration = 'Duration',
  State = 'State'
}
