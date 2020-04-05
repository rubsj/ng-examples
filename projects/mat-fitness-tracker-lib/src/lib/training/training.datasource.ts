import { DataSource } from '@angular/cdk/table';
import { Excercise } from './training.model';
import { CollectionViewer } from '@angular/cdk/collections';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { TrainingService } from './training.service';
import { catchError, finalize, filter, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { loaderIndicateOperator, loaderPrepareOperator } from '../shared/util';

export class TrainingDataSource implements DataSource<Excercise> {
    private loadingSubject = new BehaviorSubject<boolean>(true);
    public loading$ = this.loadingSubject.asObservable();

    constructor(private trainingService: TrainingService) { }

    connect(collectionViewer: CollectionViewer): Observable<Excercise[]> {
        console.log('Connecting data source');
        return this.trainingService.fetchCompletedOrCancelledExercises()
            .pipe(
                finalize(() => this.loadingSubject.next(false)),
                tap(() => this.loadingSubject.next(false)));
    }
    disconnect(collectionViewer: CollectionViewer): void {
        this.loadingSubject.complete();
    }

}
