import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ColorPickerOptionDirective } from './color-picker/color-picker-option.directive';
import { BrowserModule } from '@angular/platform-browser';
import { MixedOverlaySamplesComponent } from './mixed-overlay-samples/mixed-overlay-samples.component';
import { BasicPanelLoadComponent } from './mixed-overlay-samples/basic-panel-load.component';
import { FilePreviewComponent } from './file-preview/component/file-preview.component';
import { FilePreviewOverlayComponent } from './file-preview/file-preview-overlay/file-preview-overlay.component';
import { PreviewToolbarComponent } from './file-preview/file-preview-overlay/preview-toolbar/preview-toolbar.component';


@NgModule({
  declarations: [
    ColorPickerComponent,
    ColorPickerOptionDirective,
    MixedOverlaySamplesComponent,
    BasicPanelLoadComponent,
    FilePreviewComponent,
    FilePreviewOverlayComponent,
    PreviewToolbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule 
  ],
  exports: [
    FilePreviewOverlayComponent,
    PreviewToolbarComponent
  ]
})
export class AppOverlayModule { }
