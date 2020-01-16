import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { BookService } from '../book.service';
import { Rating } from '../book.model';

@Component({
  selector: 'app-star-rater',
  templateUrl: './star-rater.component.html',
  styleUrls: ['./star-rater.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => StarRaterComponent),
    multi: true
  }]
})
export class StarRaterComponent implements OnInit, ControlValueAccessor {

  ratings: Rating[];
  disabled = false;
  ratingText: string;
  ratingStar: number;
  displayText = '';
  onChanged: any = () => { };
  onTouched: any = () => { };

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.ratings = this.bookService.getPossibleRatings();
    this.displayText = this.ratingText;
  }
  // the actual value stored in DB for rating is the numerical value of star
  writeValue(val: any): void {
    const valueTowrite = val && val.value ? val.value : val;
    this.ratingStar = valueTowrite;
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  setRating(rating: Rating) {
    if (!this.disabled) {
      this.ratingStar = rating.stars;
      this.ratingText = rating.text;
      this.onChanged(rating.stars);
      this.onTouched();
    }
  }

  // Display the txt which shows what does that rating mean
  mouseOverDisplayText(star: Rating) {
    this.displayText = !this.disabled ? star.text : 'Rating is disabled until book is selected';
  }

  mouseoutDisplaytext() {
    this.displayText = this.ratingText ? this.ratingText : '';
  }

  // Add the class using ngclass directive, you can return multiple classes in this object
  addSelectedClass(star: Rating) {
    if (this.disabled) {
      return;
    }
    return { selected: star.stars <= this.ratingStar };
  }
}
