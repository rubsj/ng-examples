import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCloseAnimationComponent } from './open-close-animation.component';

describe('OpenCloseAnimationComponent', () => {
  let component: OpenCloseAnimationComponent;
  let fixture: ComponentFixture<OpenCloseAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenCloseAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenCloseAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
