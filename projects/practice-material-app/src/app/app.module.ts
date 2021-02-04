import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFitnessTrackerLibModule } from 'projects/mat-fitness-tracker-lib/src/public-api';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MaterialModule } from './material.module';
import { AppOverlayModule } from './cdk/overlay/overlay.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppDragDropModule } from './cdk/drag-drop/drag-drop.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavBarComponent,
    AboutComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFitnessTrackerLibModule,
    AppRoutingModule,
    AppOverlayModule,
    AppDragDropModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
