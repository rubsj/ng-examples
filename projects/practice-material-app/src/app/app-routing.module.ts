import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MatFitnessTrackerComponent } from 'projects/mat-fitness-tracker-lib/src/public-api';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { ColorPickerComponent } from './cdk/overlay/color-picker/color-picker.component';
import { MixedOverlaySamplesComponent } from './cdk/overlay/mixed-overlay-samples/mixed-overlay-samples.component';
import { MixedDragDropSamplesComponent } from './cdk/drag-drop/mixed-drag-drop-samples/mixed-drag-drop-samples.component';
import { ContactSample1Component } from './form/contact-sample1/contact-sample1.component';
import { FilePreviewComponent } from './cdk/overlay/file-preview/component/file-preview.component';



/* const routes: Routes = [
  {
    path: 'fitness-tracker', loadChildren: () =>
      import('projects/mat-fitness-tracker-lib/src/lib/mat-fitness-tracker.module')
        .then(mod => mod.MatFitnessTrackerLibModule)
  },
  {
    path: ' ',
    redirectTo: ' ',
    pathMatch: 'full'
  },
  // { path: ' ', component: AppComponent, pathMatch: 'full' },
  // if above path is provided in case of lazy load it does not work hence has to use redirect approach

]; */


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'color-picker', component: ColorPickerComponent },
  { path: 'mixed-overlay', component: MixedOverlaySamplesComponent },
  { path: 'file-preview-overlay', component: FilePreviewComponent },
  { path: 'mixed-drag-drop', component: MixedDragDropSamplesComponent },
  { path: 'contact-sample1' , component: ContactSample1Component},
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
