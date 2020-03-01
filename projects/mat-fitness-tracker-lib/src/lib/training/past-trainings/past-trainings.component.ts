import { Component, OnInit } from '@angular/core';
import { PastTrainingsColumns, Excercise } from '../training.model';
import { MatTableDataSource } from '@angular/material';
import { TrainingService } from '../training.service';

@Component({
  selector: 'lib-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.scss']
})
export class PastTrainingsComponent implements OnInit {

  pastTrainingsColumns = PastTrainingsColumns;
  dataSource = new MatTableDataSource<Excercise>();
  displayedColumns = Object.values(PastTrainingsColumns);

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.dataSource.data = this.trainingService.getCompletedOrCancelledExercises();
  }

}
