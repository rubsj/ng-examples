import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookRatingComponent } from './cva/book-rating/book-rating.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PasswordStrengthValidateComponent } from './password-strength-validate/password-strength-validate.component';
import { OpenCloseAnimationComponent } from './animate/open-close-animation/open-close-animation.component';
import { StateTransitionSample1Component } from './animate/state-transition-sample1/state-transition-sample1.component';
import { MarkWrapperUsageComponent } from './wrap-mark-js/mark-wrapper-usage/mark-wrapper-usage.component';


const routes: Routes = [

  {
    path: 'home', component: HomeComponentComponent
  },
  { path: 'bookRating', component: BookRatingComponent },
  { path: 'asyncPwdStrength', component: PasswordStrengthValidateComponent },
  {
    path: 'animate', children: [
      /* { path: '', component: SimpleTransitionComponent , pathMatch: 'full'}, */
      { path: 'openClose', component: OpenCloseAnimationComponent },
      { path: 'stateTransition1', component: StateTransitionSample1Component },
    ]
  },{
    path: 'wrap' , children: [
      {path: 'markJs', component: MarkWrapperUsageComponent}
    ]
  },
  // { path: ' ', component: AppComponent, pathMatch: 'full' }, // this path works only when there is space in path
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
