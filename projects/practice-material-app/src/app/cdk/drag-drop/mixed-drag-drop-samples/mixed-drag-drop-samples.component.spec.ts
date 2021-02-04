import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedDragDropSamplesComponent } from './mixed-drag-drop-samples.component';

describe('MixedDragDropSamplesComponent', () => {
  let component: MixedDragDropSamplesComponent;
  let fixture: ComponentFixture<MixedDragDropSamplesComponent>;

  beforeEach(async(() => {
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
