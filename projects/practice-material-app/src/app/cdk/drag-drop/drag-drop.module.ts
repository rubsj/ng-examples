import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../../material.module';
import { MixedDragDropSamplesComponent } from './mixed-drag-drop-samples/mixed-drag-drop-samples.component';


@NgModule({
  declarations: [MixedDragDropSamplesComponent],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule
  ]
})
export class AppDragDropModule { }
