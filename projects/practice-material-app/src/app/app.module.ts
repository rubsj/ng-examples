import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

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
    BrowserAnimationsModule,
    MatFitnessTrackerLibModule,
    AppRoutingModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
