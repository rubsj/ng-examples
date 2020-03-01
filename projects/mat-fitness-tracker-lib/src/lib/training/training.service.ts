import { Excercise, Status } from './training.model';
import { Injectable } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { Subject } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  // duration is in seconds
  private availableExcercises: Excercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
  ];

  private excercises: Excercise[] = [];

  private _runningExcercise: Excercise;
  private ongoingTrainingSubject$ = new Subject<boolean>();
  ongoingTraining$ = this.ongoingTrainingSubject$.asObservable();

  getAvailableTraining() {
    return [...this.availableExcercises];
  }

  startExcercise(slectedId: string) {
    this._runningExcercise = this.availableExcercises.find(val => val.id === slectedId);
    this.ongoingTrainingSubject$.next(true);
  }

  completeExcercise() {
    this.excercises.push({ ...this._runningExcercise, date: moment().toDate(), state: Status.completed });
    this._runningExcercise = null;
    this.ongoingTrainingSubject$.next(false);

  }

  cancelExcercise(progress: number) {
    this.excercises.push({
      ...this._runningExcercise,
      calories: this._runningExcercise.duration * progress / 100,
      duration: this._runningExcercise.duration * progress / 100,
      date: moment().toDate(),
      state: Status.cancelled
    });
    this._runningExcercise = null;
    this.ongoingTrainingSubject$.next(false);
  }

  get runningExcercise() {
    return this._runningExcercise ? { ...this._runningExcercise } : null;
  }

  getCompletedOrCancelledExercises() {
    return this.excercises.slice();
  }

}
