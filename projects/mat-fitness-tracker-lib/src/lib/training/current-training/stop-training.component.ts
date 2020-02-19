import { Component, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'lib-stop-training',
  templateUrl: './stop-training.component.html'
})
export class StopTrainingComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { progress: number }) { }
}
