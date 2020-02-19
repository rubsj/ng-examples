import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  ongoingTraining = false;

  constructor() { }

  ngOnInit() {
  }
  trainingStarted() {
    this.ongoingTraining = true;
  }

}
