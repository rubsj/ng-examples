import { DataSource } from '@angular/cdk/table';
import { Excercise } from './training.model';
import { CollectionViewer } from '@angular/cdk/collections';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { TrainingService } from './training.service';
import { catchError, finalize, filter } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

export class TrainingDataSource implements DataSource<Excercise> {
    private trainingsSubject = new BehaviorSubject<Excercise[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    public loading$ = this.loadingSubject.asObservable();

    constructor(private trainingService: TrainingService) { }

    loadTrainings() {
        this.loadingSubject.next(true);
        this.trainingService.fetchCompletedOrCancelledExercises()
            .pipe(
                catchError((err) => {
                    console.log('ctching the error', err);
                    return of([]);
                }),
                finalize(() => {
                    console.log('finalize called');
                    this.loadingSubject.next(false);
                }))
            .subscribe((trainings: Excercise[]) => {
                this.loadingSubject.next(false);
                this.trainingsSubject.next(trainings);
            });
    }

    connect(collectionViewer: CollectionViewer): Observable<Excercise[]> {
        console.log('Connecting data source');
        return this.trainingsSubject.asObservable();
    }
    disconnect(collectionViewer: CollectionViewer): void {
        this.loadingSubject.complete();
        this.trainingsSubject.complete();
    }

}
