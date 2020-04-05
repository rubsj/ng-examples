import { Excercise, Status } from './training.model';
import { Injectable } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { Subject, Observable } from 'rxjs';
import * as moment from 'moment';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map, find, filter, tap, finalize } from 'rxjs/operators';
import { UIService } from '../shared/ui.service';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  // duration is in seconds
  /*   private availableExcercises: Excercise[] = [
      { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
      { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
      { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
      { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
    ]; */


  private _runningExcercise: Excercise;
  private ongoingTrainingSubject$ = new Subject<boolean>();
  ongoingTraining$ = this.ongoingTrainingSubject$.asObservable();

  constructor(private db: AngularFirestore) {
  }

  fetchAvailableTraining(): Observable<Excercise[]> {
    return this.db.collection('availableExcercises').snapshotChanges().pipe(
      map(docArray => {
        return docArray.map(doc => {
          return {
            id: doc.payload.doc.id,
            //   ...doc.payload.doc.data({ serverTimestamps: 'none' }) as {}
            // cool short version but then types does not get picked up properly
            name: (doc.payload.doc.data() as any).name,
            duration: (doc.payload.doc.data() as any).duration,
            calories: (doc.payload.doc.data() as any).calories,
          } as Excercise;
        });
      }));
  }

  startExcercise(slectedId: string) {
    this.fetchAvailableTraining().pipe(
      map(exArr => exArr.find((e: Excercise) => e.id === slectedId)),
    ).subscribe(val => {
      this._runningExcercise = val;
    });
    this.ongoingTrainingSubject$.next(true);
  }

  completeExcercise() {
    this.addDataToDatabase({ ...this._runningExcercise, date: moment().toDate(), state: Status.completed });
    this._runningExcercise = null;
    this.ongoingTrainingSubject$.next(false);

  }

  cancelExcercise(progress: number) {
    this.addDataToDatabase({
      ...this._runningExcercise,
      calories: this._runningExcercise.duration * progress / 100,
      duration: this._runningExcercise.calories * progress / 100,
      date: moment().toDate(),
      state: Status.cancelled
    });
    this._runningExcercise = null;
    this.ongoingTrainingSubject$.next(false);
  }

  get runningExcercise() {
    return this._runningExcercise ? { ...this._runningExcercise } : null;
  }

  fetchCompletedOrCancelledExercises(): Observable<Excercise[]> {
    return this.db.collection<Excercise>('finishedExcercises').valueChanges();
  }

  private addDataToDatabase(excercise: Excercise) {
    this.db.collection('finishedExcercises').add(excercise)
      .then(val => console.log('added successfully ', val))
      .catch(err => {
        console.log('caught error ', err);
        throw new Error(err);
      });
  }

}
