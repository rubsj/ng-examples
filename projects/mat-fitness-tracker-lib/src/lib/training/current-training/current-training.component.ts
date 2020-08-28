import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingComponent } from './stop-training.component';
import { interval, Subject, NEVER, defer, Observable } from 'rxjs';
import { switchMap, materialize, dematerialize, takeUntil, withLatestFrom, filter, map, share } from 'rxjs/operators';
import * as moment from 'moment';
import { TrainingService } from '../training.service';


@Component({
  selector: 'lib-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit, OnDestroy {
  progress = 0;
  source$: Observable<number>;
  pauser$ = new Subject();
  destroy$ = new Subject();
  timer$ = new Subject();
  timer;
  trainingName: string;

  constructor(private dialog: MatDialog, private trainingService: TrainingService) { }

  ngOnInit() {
    // calculate the frequency of the interval timer using the time that it takes to finish an excercise which is in seconds
    const step = this.trainingService.runningExcercise ? (this.trainingService.runningExcercise.duration / 100) * 1000 : 1000;
    this.source$ = interval(step);
    this.pauser$.pipe(
      takeUntil(this.destroy$),
      switchMap((paused: boolean) => {
        return paused ? NEVER : this.source$;
      }),
    ).subscribe(val => {
      this.progress = this.progress + 1 <= 100 ? this.progress + 1 : 100;
      if (this.progress === 100) {
        this.trainingService.completeExcercise();
        this.pauser$.next(true);
        this.pauser$.complete();
      }
    });

    // create timer pauser observable
    const timerPauser = this.pauser$.pipe(
      takeUntil(this.destroy$),
      switchMap((paused: boolean) => {
        return paused ? NEVER : this.timer$;
      })
    );

    // giver timer subject value for next as timer pauser does not give next value for it
    interval(1000).pipe(
      takeUntil(this.destroy$),
    ).subscribe(this.timer$);

    timerPauser.subscribe(t => {
      this.timerFunction(t);
    });
    this.pauser$.next(false);

    this.trainingName = this.trainingService.runningExcercise ? this.trainingService.runningExcercise.name : 'no training name';

  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();

  }
  stopTraining() {

    this.pauser$.next(true);
    const popupRef = this.dialog.open(StopTrainingComponent, { data: { progress: this.progress, trainingName: this.trainingName } });
    popupRef.afterClosed().subscribe(val => {
      if (val) {
        this.pauser$.complete();
        this.trainingService.cancelExcercise(this.progress);
      } else {
        this.pauser$.next(false);
      }
    });
  }

  timerFunction(tick) {
    this.timer = moment().startOf('day').seconds(tick).format('mm:ss');
  }

}
