import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RectangleAnimateComponent } from './rectangle-animate.component';

describe('RectangleAnimateComponent', () => {
  let component: RectangleAnimateComponent;
  let fixture: ComponentFixture<RectangleAnimateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RectangleAnimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectangleAnimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
