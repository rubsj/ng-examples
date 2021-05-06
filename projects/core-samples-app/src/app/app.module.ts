import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CVAModule } from './cva/cva.module';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PasswordStrengthValidateComponent } from './password-strength-validate/password-strength-validate.component';
import { PasswordStrengthValidateModule } from './password-strength-validate/password-strength-validate.module';
import { AnimateModule } from './animate/animate.module';
import { WrapMarkJsModule } from './wrap-mark-js/wrap-mark-js.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CVAModule,
    // TypeaheadModule.forRoot(),
    PasswordStrengthValidateModule,
    AnimateModule,
    WrapMarkJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
