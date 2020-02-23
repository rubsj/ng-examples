import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StopTrainingComponent } from './stop-training.component';
import { interval, Subject, NEVER, defer } from 'rxjs';
import { switchMap, materialize, dematerialize, takeUntil, withLatestFrom, filter, map, share } from 'rxjs/operators';
import * as moment from 'moment';


@Component({
  selector: 'lib-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit, OnDestroy {
  progress = 0;
  source$ = interval(1000);
  pauser$ = new Subject();
  destroy$ = new Subject();
  timer$ = new Subject();
  timer;
  @Output() trainingExit = new EventEmitter<boolean>();

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.pauser$.pipe(
      takeUntil(this.destroy$),
      switchMap((paused: boolean) => {
        console.log('switchmap of pauser called with : ', paused);
        return paused ? NEVER : this.source$;
      }),
    ).subscribe(val => {
      this.progress = this.progress + 5 <= 100 ? this.progress + 5 : 100;
      if (this.progress === 100) {
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
      console.log('timer t ', t);
    });
    console.log('inside ngonint of current training');
    this.pauser$.next(false);

  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();

  }
  stopTraining() {

    this.pauser$.next(true);
    const popupRef = this.dialog.open(StopTrainingComponent, { data: { progress: this.progress } });
    popupRef.afterClosed().subscribe(val => {
      if (val) {
        this.pauser$.complete();
        this.trainingExit.emit(true);
      } else {
        this.pauser$.next(false);
      }
    });
  }

  timerFunction(tick) {
    this.timer = moment().startOf('day').seconds(tick).format('mm:ss');
  }

}
