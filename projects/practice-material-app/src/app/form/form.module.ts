import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactSample1Component } from './contact-sample1/contact-sample1.component';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddressComponent } from './address/address.component';



@NgModule({
  declarations: [ContactSample1Component, AddressComponent],
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ]
})
export class FormModule { }
