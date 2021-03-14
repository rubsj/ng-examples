import { Component, HostBinding, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-rectangle-animate',
  templateUrl: './rectangle-animate.component.html',
  styleUrls: ['./rectangle-animate.component.scss'],
  animations: [
    trigger('changeState', [
      state('state1', style({ backgroundColor: 'green', transform: 'scale(1)' })),
      state('state2', style({ backgroundColor: 'red', transform: 'scale(1.5)' })),
      transition('* => state1', animate('500ms')),
      transition('* => state2', animate('500ms')),
    ])
  ]
})
export class RectangleAnimateComponent {
  @HostBinding('@changeState')
  @Input() currentState: string = 'state1';

}
