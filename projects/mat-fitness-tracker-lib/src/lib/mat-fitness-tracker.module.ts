import { NgModule } from '@angular/core';
import { MatFitnessTrackerComponent } from './mat-fitness-tracker.component';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { PastTrainingsComponent } from './training/past-trainings/past-trainings.component';
import { MatFitnessTrackerRouterModule } from './mat-fitness-tracker-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    MatFitnessTrackerComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent],
  imports: [
    MaterialModule,
    MatFitnessTrackerRouterModule,
    FlexLayoutModule,
    FormsModule,
    CommonModule
  ],
  exports: [MatFitnessTrackerComponent]
})
export class MatFitnessTrackerLibModule { }
