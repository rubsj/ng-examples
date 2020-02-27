import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrainingService } from './training.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'lib-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit, OnDestroy {
  ongoingTraining = false;
  destroy$ = new Subject();

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.trainingService.ongoingTraining$.pipe(takeUntil(this.destroy$)).subscribe(val => this.ongoingTraining = val);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();

  }
  trainingStarted(selectedEx: string) {
    this.trainingService.startExcercise(selectedEx);
  }

}
