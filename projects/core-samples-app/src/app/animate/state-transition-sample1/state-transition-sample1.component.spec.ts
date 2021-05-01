import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StateTransitionSample1Component } from './state-transition-sample1.component';

describe('StateTransitionSample1Component', () => {
  let component: StateTransitionSample1Component;
  let fixture: ComponentFixture<StateTransitionSample1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StateTransitionSample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateTransitionSample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
