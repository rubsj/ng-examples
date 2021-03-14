import { Component } from '@angular/core';

@Component({
  selector: 'app-state-transition-sample1',
  templateUrl: './state-transition-sample1.component.html',
  styleUrls: ['./state-transition-sample1.component.scss']
})
export class StateTransitionSample1Component {

  toState: string = 'state1';

  changeState(val: string) {
    this.toState = val;
  }

}
