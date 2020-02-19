import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {
  @Output() trainingStarted = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
  onTrainingStart() {
    this.trainingStarted.emit();
  }

}
