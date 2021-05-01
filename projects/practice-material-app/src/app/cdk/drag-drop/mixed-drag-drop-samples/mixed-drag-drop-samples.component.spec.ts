import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MixedDragDropSamplesComponent } from './mixed-drag-drop-samples.component';

describe('MixedDragDropSamplesComponent', () => {
  let component: MixedDragDropSamplesComponent;
  let fixture: ComponentFixture<MixedDragDropSamplesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MixedDragDropSamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixedDragDropSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
