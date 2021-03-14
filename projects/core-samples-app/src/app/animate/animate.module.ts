import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenCloseAnimationComponent } from './open-close-animation/open-close-animation.component';
import { StateTransitionSample1Component } from './state-transition-sample1/state-transition-sample1.component';
import { RectangleAnimateComponent } from './state-transition-sample1/rectangle-animate/rectangle-animate.component';



@NgModule({
  declarations: [OpenCloseAnimationComponent, StateTransitionSample1Component, RectangleAnimateComponent],
  imports: [
    CommonModule
  ],
  exports:[
    OpenCloseAnimationComponent, StateTransitionSample1Component, RectangleAnimateComponent
  ]
})
export class AnimateModule { }
