import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookRatingComponent } from './cva/book-rating/book-rating.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'bookRating', component : BookRatingComponent},
  {path: '' , component : AppComponent , pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
