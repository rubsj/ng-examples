import { state, style, transition, trigger ,animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-close-animation',
  templateUrl: './open-close-animation.component.html',
  styleUrls: ['./open-close-animation.component.scss'],
  animations: [
    trigger('openClose' , [
      state('open' , style({
        height: '200px',
        opacity:1 ,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity:1 ,
        backgroundColor: 'green'
      })),
      transition('open => closed' , [animate('1s')]),
      transition('closed => open' , [animate('0.5s')])
    ])
  ]
})
export class OpenCloseAnimationComponent  {

  isOpen: boolean = true;

  toggle(){
    this.isOpen = !this.isOpen;
  }

  onAnimationEvent( event: AnimationEvent ){
    console.log('animation event ' , event);
  }

}
