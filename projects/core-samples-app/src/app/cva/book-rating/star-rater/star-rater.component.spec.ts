import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StarRaterComponent } from './star-rater.component';

describe('StarRaterComponent', () => {
  let component: StarRaterComponent;
  let fixture: ComponentFixture<StarRaterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StarRaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarRaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
