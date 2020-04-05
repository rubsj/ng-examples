import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TrainingService } from '../training.service';
import { Excercise } from '../training.model';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UIService } from '../../shared/ui.service';

@Component({
  selector: 'lib-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss'],
})
export class NewTrainingComponent implements OnInit {
  @Output() trainingStarted = new EventEmitter<string>();
  excercises$: Observable<Excercise[]>;
  loading$: Observable<boolean>;

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.excercises$ = this.trainingService.fetchAvailableTraining();
  }
  onTrainingStart(form: NgForm) {
    this.trainingStarted.emit(form.value.excercise);
  }

}
