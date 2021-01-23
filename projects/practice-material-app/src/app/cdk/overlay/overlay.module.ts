import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ColorPickerOptionDirective } from './color-picker/color-picker-option.directive';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [
    ColorPickerComponent,
    ColorPickerOptionDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule 
  ]
})
export class AppOverlayModule { }
