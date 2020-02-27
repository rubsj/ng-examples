import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TrainingService } from '../training.service';
import { Excercise } from '../training.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'lib-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {
  @Output() trainingStarted = new EventEmitter<string>();
  excercises: Excercise[];

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.excercises = this.trainingService.getAvailableTraining();
  }
  onTrainingStart(form: NgForm) {
    this.trainingStarted.emit(form.value.excercise);
  }

}
