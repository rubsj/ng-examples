import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookRatingComponent } from './cva/book-rating/book-rating.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PasswordStrengthValidateComponent } from './password-strength-validate/password-strength-validate.component';


const routes: Routes = [

  {
    path: 'home',    component: HomeComponentComponent },
  { path: 'bookRating', component: BookRatingComponent },
  { path: 'asyncPwdStrength' , component: PasswordStrengthValidateComponent},
 // { path: ' ', component: AppComponent, pathMatch: 'full' }, // this path works only when there is space in path
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
