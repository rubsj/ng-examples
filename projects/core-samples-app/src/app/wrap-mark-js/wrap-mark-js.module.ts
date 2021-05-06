import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapMarkJsDirective } from './wrap-mark-js.directive';
import { MarkWrapperUsageComponent } from './mark-wrapper-usage/mark-wrapper-usage.component';



@NgModule({
  declarations: [
    WrapMarkJsDirective,
    MarkWrapperUsageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WrapMarkJsModule { }
