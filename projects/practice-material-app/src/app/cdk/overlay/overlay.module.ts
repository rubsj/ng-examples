import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ColorPickerOptionDirective } from './color-picker/color-picker-option.directive';
import { BrowserModule } from '@angular/platform-browser';
import { MixedOverlaySamplesComponent } from './mixed-overlay-samples/mixed-overlay-samples.component';
import { BasicPanelLoadComponent } from './mixed-overlay-samples/basic-panel-load.component';




@NgModule({
  declarations: [
    ColorPickerComponent,
    ColorPickerOptionDirective,
    MixedOverlaySamplesComponent,
    BasicPanelLoadComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule 
  ]
})
export class AppOverlayModule { }
