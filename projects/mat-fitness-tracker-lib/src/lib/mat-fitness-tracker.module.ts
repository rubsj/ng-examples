import { NgModule } from '@angular/core';
import { MatFitnessTrackerComponent } from './mat-fitness-tracker.component';
import {MaterialModule} from './material.module';



@NgModule({
  declarations: [MatFitnessTrackerComponent],
  imports: [
    MaterialModule,
  ],
  exports: [MatFitnessTrackerComponent]
})
export class MatFitnessTrackerLibModule { }
