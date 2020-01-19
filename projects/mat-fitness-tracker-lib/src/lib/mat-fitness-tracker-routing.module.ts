import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatFitnessTrackerComponent } from './mat-fitness-tracker.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [
  { path: '', component: MatFitnessTrackerComponent},
  {path: 'signup', component: SignupComponent },
  {path: 'login', component: LoginComponent},
  {path: 'training', component: TrainingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatFitnessTrackerRouterModule {

}
