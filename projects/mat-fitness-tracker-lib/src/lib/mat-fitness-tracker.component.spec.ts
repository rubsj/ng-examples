import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFitnessTrackerComponent } from './mat-fitness-tracker.component';

describe('MatFitnessTrackerLibComponent', () => {
  let component: MatFitnessTrackerComponent;
  let fixture: ComponentFixture<MatFitnessTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatFitnessTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatFitnessTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
