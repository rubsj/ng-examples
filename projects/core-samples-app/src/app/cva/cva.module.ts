import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRatingComponent } from './book-rating/book-rating.component';
import { TypeaheadComponent } from './book-rating/typeahead/typeahead.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { StarRaterComponent } from './book-rating/star-rater/star-rater.component';





@NgModule({
  declarations: [BookRatingComponent, TypeaheadComponent, StarRaterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TypeaheadModule.forRoot(),

  ],
  exports :[BookRatingComponent]
})
export class CVAModule { }
