import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BookRatingComponent } from './book-rating.component';

describe('BookRatingComponent', () => {
  let component: BookRatingComponent;
  let fixture: ComponentFixture<BookRatingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BookRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
