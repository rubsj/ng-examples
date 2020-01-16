import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from './book.model';

@Component({
  selector: 'app-book-rating',
  templateUrl: './book-rating.component.html',
  styleUrls: ['./book-rating.component.scss']
})
export class BookRatingComponent implements OnInit {
  books$: Observable<Book>;
  books: Book[];
  bookForm: FormGroup;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(val => this.books = val);
    this.createForm();
    this.onFormChanges();
  }

  createForm() {
    this.bookForm = new FormGroup({
      book: new FormControl({ value: null, disabled: false }, [Validators.required]),
      rating: new FormControl({ value: null, disabled: true }, [Validators.required]),
      name: new FormControl({ value: null, disabled: false }, [Validators.required])
    });
  }

  onFormChanges() {
    /*     this.bookForm.controls.book.valueChanges.subscribe(val => {
          const ratingControl = this.bookForm.controls.rating;
          if (val) {
            ratingControl.enable();
          } else {
            ratingControl.patchValue(null);
            ratingControl.disable();
          }
        }); */
    this.bookForm.get('book').valueChanges.subscribe(val => {
      console.log('forms value change for book control ' , val);
      const ratingControl = this.bookForm.get('rating');
      if (val) {
        ratingControl.enable();
      } else {
        ratingControl.patchValue(null);
        ratingControl.disable();
      }
    });
  }

  onSubmit() {
    console.log(this.bookForm.value);
  }

}
