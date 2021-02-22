import { NgModule } from '@angular/core';
import { PasswordStrengthValidateComponent } from './password-strength-validate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [PasswordStrengthValidateComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class PasswordStrengthValidateModule { }
