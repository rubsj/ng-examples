import { Component, OnInit } from '@angular/core';
import { PastTrainingsColumns } from '../training.model';
import { TrainingService } from '../training.service';
import { TrainingDataSource } from '../training.datasource';

@Component({
  selector: 'lib-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.scss']
})
export class PastTrainingsComponent implements OnInit {

  pastTrainingsColumns = PastTrainingsColumns;
  dataSource: TrainingDataSource; // new MatTableDataSource<Excercise>();
  displayedColumns = Object.values(PastTrainingsColumns);

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.dataSource = new TrainingDataSource(this.trainingService);
  }

}
