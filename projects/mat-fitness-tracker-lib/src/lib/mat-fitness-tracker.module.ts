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
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StopTrainingComponent } from './training/current-training/stop-training.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';




@NgModule({
  declarations: [
    MatFitnessTrackerComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    HeaderComponent,
    SidenavListComponent,
    WelcomeComponent,
    StopTrainingComponent
  ],
  imports: [
    MaterialModule,
    MatFitnessTrackerRouterModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  exports: [MatFitnessTrackerComponent],
  entryComponents: [StopTrainingComponent]
})
export class MatFitnessTrackerLibModule { }
