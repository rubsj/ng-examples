import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MatFitnessTrackerComponent } from 'projects/mat-fitness-tracker-lib/src/public-api';


const routes: Routes = [
  {
    path: 'fitness-tracker', loadChildren: () =>
      import('projects/mat-fitness-tracker-lib/src/lib/mat-fitness-tracker.module')
        .then(mod => mod.MatFitnessTrackerLibModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  // { path: ' ', component: AppComponent, pathMatch: 'full' },
  // if above path is provided in case of lazy load it does not work hence has to use redirect approach

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
